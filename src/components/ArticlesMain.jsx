"use client"
import { useSanity } from "../context/SanityContext";
import { Card, CardMedia, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { Skeleton } from "@mui/material";

const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-20 w-full max-w-7xl mx-auto">
    {[...Array(6)].map((_, index) => (
      <div key={index} className="flex flex-col">
        <Skeleton variant="rectangular" height={140} />
        <Skeleton variant="text" width="80%" height={20} />
        <Skeleton variant="text" width="60%" height={20} />
        <Skeleton variant="text" width="90%" height={20} />
      </div>
    ))}
  </div>
);

const ArticlesMain = () => {
  const { articles, loading } = useSanity();

  if (loading) return <LoadingSkeleton />;

  const last6Articles = articles.slice(0, 6);
  return (
    <div className="w-full my-20 mx-auto ">
      <h2 className="text-4xl text-center mb-8">Artikler og nyheter</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-20 w-full max-w-7xl mx-auto">
        {last6Articles.map((article, index) => (
          <Card
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              position: "relative",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
            key={article._id}
          >
            <CardMedia
              component="img"
              height="140"
              image={article?.background?.asset?.url || ""}
              alt={`Article image ${index + 1}`}
              sx={{
                objectFit: "cover",
                marginBottom: "20px",
                borderRadius: "10px",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flex: 1,
                margin: "20px",
                paddingBottom: "40px",
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    marginBottom: "10px",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {article.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    marginBottom: "10px",
                    color: "#666",
                  }}
                >
                  {new Date(article.releaseDate).toLocaleDateString("en-GB")}
                </Typography>

                <div className="paragraph">
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{
                      flex: 1,
                      marginBottom: "10px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      lineHeight: 1.6,
                      color: "#444",
                    }}
                  >
                    {article.articleBody?.[0]?.children?.[0]?.text || ""}
                  </Typography>
                </div>
              </div>
            </div>

            <div
              className="link"
              style={{
                position: "absolute",
                bottom: "10px",
                right: "20px",
              }}
            >
              <Link href={`/articles/${article.slug?.current}`} passHref>
                <ArrowForwardIcon
                  sx={{
                    cursor: "pointer",
                    color: "gray",
                    transition: "color 0.3s ease, transform 0.3s ease",
                    "&:hover": {
                      color: "black",
                      transform: "rotate(45deg) scale(1.2)",
                    },
                    fontSize: "36px",
                  }}
                />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArticlesMain;
