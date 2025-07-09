import { getAllWordpressPostDetails } from "@/lib/apollo/fetch";
import Link from "next/link";

export default async function Page() {
  const articles = await getAllWordpressPostDetails();
  return (
    <main>
      <h1>Artikler</h1>
      <div className="grid grid-cols-3 gap-2">
        {articles?.map((article) => (
          <Link key={article.slug} href={article.uri}>
            <div key={article.slug} className="bg-accept-600 rounded-md">
              <h3>{article.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
