import { type Article } from "@/types/sanity/sanity.types";
import Link from "next/link";
import { urlFor } from "@/libs/sanity/fetch";
import { motion } from "framer-motion";
import { Card, CardMedia, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export async function ArticlePreviewCard({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  return (
    <div>
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          p: 2,
        }}
      >
        <CardMedia
          component="img"
          image={
            article.background
              ? (await urlFor(article.background)).url()
              : "/infoIcon3.png"
          }
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
            <div className="flex j items-center space-x-4 mb-6 text-sm text-moss-200">
              <Typography variant="body2" color="text.secondary">
                {new Date(article.releaseDate || Date.now()).toLocaleDateString(
                  "no-NO",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </Typography>
              <span className="font-semibold px-2">|</span>
              <Typography variant="body2" color="text.secondary">
                Autor: {article.author || ""}
              </Typography>
            </div>
            {/* <Typography
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
            </Typography> */}
          </div>
          <div className="flex justify-end items-center mt-2">
            <Link href={`/test/${article.slug?.current}`} passHref>
              <Typography
                variant="body2"
                color="primary"
                sx={{
                  cursor: "pointer",
                  fontSize: "16px",

                  transition: "color 0.3s",
                  color: "gray",
                }}
              >
                Les mer
              </Typography>{" "}
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
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
