import { useSanity } from "./SanityContext";
import { Card, CardMedia, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const ArticlesMain = () => {
  const { articles } = useSanity();

  const last6Articles = articles.slice(0, 6);

  return (
    <div className="w-9/10 md:w-full my-20 mx-auto ">
      <h1 className="text-4xl text-center mb-8">Artikler og nyheter</h1>
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
                  {new Date(article.releaseDate).toLocaleDateString()}
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
              <Link href={`/articles/${article._id}`} passHref>
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
