import RSS from "rss";
import { NextResponse } from "next/server";

import { CONFIG } from "src/config-global";
import { BLOG_POST_DATA, MOCK_HOMEPAGE_DATA } from "src/data/list-data";

import { commonHomePage } from "../shared-metadata";

export async function GET() {
  const categories = ['the-thao-k89bet', 'xo-so-k89bet', 'no-hu-k89bet', 'casino-k89bet', 'huong-dan'];

  const feed = new RSS({
    title: commonHomePage.title,
    description: commonHomePage.description,
    site_url: commonHomePage.url,
    categories: Array.isArray(categories) ? categories : [],
    feed_url: `${commonHomePage.url}/feed.xml`,
    image_url: `${CONFIG.site.basePath}/logo/logo.webp`,
    copyright: `${new Date().getFullYear()} All rights reserved K89Bet`,
    language: "vi",
    pubDate: new Date(),
    custom_namespaces: {
      atom: "http://www.w3.org/2005/Atom",
    },
    docs: "https://validator.w3.org/feed/docs/rss2.html",
  });

  const combinedPosts = BLOG_POST_DATA.concat(MOCK_HOMEPAGE_DATA);

  combinedPosts.forEach((post) => {
    const enclosureUrl = post.coverUrl || '';
    const enclosureType = "image/webp";

    feed.item({
      title: post.metaTitle || commonHomePage.title,
      description: post.metaDescription || commonHomePage.description,
      categories: Array.isArray(post.category) ? post.category : [post.category || post.slug],
      url: `${CONFIG.site.basePath}/${post.category ? `${post.category  }/` : ''}${post.slug}`,
      guid: `${CONFIG.site.basePath}/${post.category ? `${post.category  }/` : ''}${post.slug}`,
      enclosure: {
        url: enclosureUrl,
        type: enclosureType,
      },
      author: "K89Bet",
      date: post.createdAt || new Date().toISOString(),
    });
  });

  const xml = feed.xml({ indent: true });

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
