import { getAllWordpressPostDetails } from "@/lib/apollo/fetch";

export default async function Page() {
  const articles = await getAllWordpressPostDetails();
  return (
    <main>
      <h1>Artikler</h1>
      <div className="grid grid-cols-3 gap-2">
        {articles?.map((article) => (
          <div key={article.slug} className="bg-accept-600 rounded-md">
            <h3>{article.title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
