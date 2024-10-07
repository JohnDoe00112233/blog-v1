import { NextResponse } from "next/server";

import { BLOG_POST_DATA, MOCK_HOMEPAGE_DATA } from "src/data/list-data";

import { searchHomePageJson } from "../shared-metadata";

export async function GET() {
  const combinedPosts = BLOG_POST_DATA.concat(MOCK_HOMEPAGE_DATA);
  const urlBasePath = "https://k89.app"

  const posts = combinedPosts.map((post) => ({
    title: post.title || searchHomePageJson.title,
    uri: `${urlBasePath}/${post.category ? `${post.category}/` : ''}${post.slug}` || urlBasePath,
    coverUrl: post.coverUrl || "",
    createdAt: post.createdAt || new Date().toISOString(),
  }));

  return NextResponse.json({
    site: searchHomePageJson,
    posts,
  });
}
