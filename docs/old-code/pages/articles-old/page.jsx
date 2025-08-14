"use client";
import { useSanity } from "@/context/SanityContext";
import { useState, useEffect, useRef } from "react";
import { Skeleton, Card, CardMedia, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import Link from "next/link";

const LoadingSkeleton = () => (
  <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto px-4">
    {[...Array(3)].map((_, index) => (
      <div key={index} className="flex flex-col md:flex-row gap-4">
        <Skeleton variant="rectangular" width={240} height={180} />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="60%" height={30} />
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="90%" />
        </div>
      </div>
    ))}
  </div>
);

const ArticleCard = ({ article, index }) => {
  const articleText = article.articleBody
    ?.map((block) => 
      block._type === "block" 
        ? block.children.map((child) => child.text).join(" ")
        : block._type === "image" 
          ? "[img]" 
          : ""
    )
    .join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, p: 2 }}>
        <CardMedia
          component="img"
          image={article.background?.asset?.url}
          alt={article.title}
          sx={{
            width: { xs: "100%", md: "42%" },
            height: { xs: 220, s: 300, md: 240 },
            borderRadius: "10px",
            objectFit: "cover",
            marginBottom: { xs: 2, md: 0 },
            marginRight: { md: 2 },
          }}
        />

        <div className="flex flex-col justify-between flex-1">
          <div>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {article.title}
            </Typography>
            <div className="flex items-center space-x-4 mb-6 text-sm text-moss-200">
              <Typography variant="body2" color="text.secondary">
                {new Date(article.releaseDate || Date.now()).toLocaleDateString("no-NO", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
              <span className="font-semibold px-2">|</span>
              <Typography variant="body2" color="text.secondary">
                Autor: {article.author || ""}
              </Typography>
            </div>

            <Typography
              variant="body2"
              color="text.primary"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {articleText?.substring(0, 250)}...
            </Typography>
          </div>
          <div className="flex justify-end items-center mt-2">
            <Link href={`/articles/${article.slug?.current}`} passHref>
              <div className="flex items-center">
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    fontSize: "16px",
                    transition: "color 0.3s",
                    color: "gray",
                  }}
                >
                  Les mer
                </Typography>
                <ArrowForwardIcon
                  sx={{
                    cursor: "pointer",
                    color: "gray",
                    fontSize: "36px",
                    marginLeft: "3px",
                    transition: "color 0.3s ease, transform 0.3s ease",
                    "&:hover": {
                      color: "black",
                      transform: "rotate(45deg) scale(1.2)",
                    },
                  }}
                />
              </div>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

function Pagination({ page, pageCount, onChange }) {
  if (pageCount <= 1) return null;
  return (
    <div className="flex gap-2 justify-center">
      <button
        onClick={() => {
          if (page > 1) onChange(page - 1);
        }}
        disabled={page === 1}
        aria-label="forrige"
        className="px-3 py-1 rounded-full disabled:opacity-50"
      >
        &lt;
      </button>
      {Array.from({ length: pageCount }, (_, idx) => (
        <button
          key={idx}
          onClick={() => onChange(idx + 1)}
          className={`px-3 py-1 rounded-full ${page === idx + 1 ? 'bg-moss-400 text-white font-semibold hover:bg-gray-400' : 'bg-white text-black'}`}
        >
          {idx + 1}
        </button>
      ))}
      <button
        onClick={() => {
          if (page < pageCount) onChange(page + 1);
        }}
        disabled={page === pageCount}
        aria-label="neste"
        className="px-3 py-1 rounded-full disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
}

export default function ArticleList() {
  const { articles, loading } = useSanity();
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  if (loading) return <LoadingSkeleton />;

  if (!Array.isArray(articles)) {
    return (
      <div className="w-full py-10 px-4 bg-white text-black text-center ">
        <h1 className="text-4xl text-center mb-10 font-bold">Artikler og Nyheter</h1>
        <p>Error: Kunne ikke laste artikler. Data er ikke i forventet format.</p>
      </div>
    );
  }
  
  const articlesWithSlugs = articles.filter(article => article.slug?.current);
  
  if (articlesWithSlugs.length === 0) {
    return (
      <div className="w-full py-10 px-4 bg-white text-black text-center ">
        <h1 className="text-4xl text-center mb-10 font-bold">Artikler og Nyheter</h1>
        <p>Ingen artikler funnet.</p>
      </div>
    );
  }

  const currentArticles = articlesWithSlugs
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    .slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage);

  return (
    <div className="w-full py-10 px-4 bg-white text-black ">
      <h1 ref={headerRef} className="text-4xl text-center mb-10 font-bold">Artikler og Nyheter</h1>

      <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto ">
        {currentArticles.map((article, index) => (
          <ArticleCard key={article._id} article={article} index={index} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Pagination
          page={currentPage}
          pageCount={Math.ceil(articlesWithSlugs.length / articlesPerPage)}
          onChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
