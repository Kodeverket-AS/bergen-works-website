import { NextResponse, type NextRequest } from 'next/server';
import { wpFetchPosts } from '@/lib/apollo/fetch/posts';

export async function GET(request: NextRequest) {
  // Variables for filtering wordpress response
  const searchParams = request.nextUrl.searchParams;
  const first = parseInt(searchParams.get('first') || '100', 10);
  const after = searchParams.get('after') || null;
  const before = searchParams.get('before') || null;
  const tag = searchParams.get('tag') || null;
  const category = searchParams.get('category') || null;

  // Construct filter
  const filters = {
    first,
    ...(after ? { after } : {}),
    ...(before ? { before } : {}),
    ...(tag && !tag.includes('null') ? { tag } : {}),
    ...(category && !category.includes('null') ? { category } : {}),
  };

  // Query wordpress for posts using filter
  const result = await wpFetchPosts(filters);

  // todo: Add better error handling
  if (!result || result.error) {
    return NextResponse.error();
  }

  return NextResponse.json(result);
}
