import { ArticlePreviewCard } from "@/components/ui/cards/articlePreview";
import { getArticles } from "@/libs/sanity/fetch";
import { Pagination } from "@mui/material";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  // Get a list of all available articles from sanity
  const articles = await getArticles();

  // Get current page from url params, add ?page=2 to end of url for testing. Defaults to page 1
  const { page = "1" } = await searchParams;
  const articlesPerPage = 5;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <div className="w-full py-10 px-4 bg-white text-black">
      <h1 className="text-4xl text-center mb-10 font-bold">
        Artikler og Nyheter
      </h1>

      <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto">
        {articles.map((article, index) => (
          <ArticlePreviewCard
            key={article._id}
            article={article}
            index={index}
          />
        ))}
      </div>

      {/* <div className="flex justify-center mt-8">
        <Pagination
          count={totalPages}
          page={Number(page)}
          onChange={() => {}}
        />
      </div> */}
    </div>
  );
}
