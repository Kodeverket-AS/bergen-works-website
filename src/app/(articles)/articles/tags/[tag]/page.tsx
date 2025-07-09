export default async function Page({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const decodedTag = decodeURI(tag)

  // Todo - create fetch function for tags

  return (
    <main>
      <h1>List of all posts with tag <span className="font-bold">{decodedTag}</span></h1>
    </main>
  );
}
