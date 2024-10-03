import { NextResponse } from "next/server";

import { CONFIG } from "src/config-global";
import { BLOG_POST_DATA, MOCK_HOMEPAGE_DATA } from "src/data/list-data";

import { searchHomePageJson } from "../shared-metadata";

export async function GET() {
  const combinedPosts = BLOG_POST_DATA.concat(MOCK_HOMEPAGE_DATA);


  const posts = combinedPosts.map((post) => ({
    title: post.title || searchHomePageJson.title,
    uri: `${CONFIG.site.basePath}/${post.category ? `${post.category}/` : ''}${post.slug}` || CONFIG.site.basePath,
    coverUrl: post.coverUrl || "",
    createdAt: post.createdAt || new Date().toISOString(),
  }));

  return NextResponse.json({
    site: searchHomePageJson,
    posts,
  });
}
