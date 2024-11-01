import type { MetadataRoute } from "next";

import { BLOG_POST_DATA, MOCK_HOMEPAGE_DATA } from "src/data/list-data";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const combinedPosts = BLOG_POST_DATA.concat(MOCK_HOMEPAGE_DATA);
  const urlBasePath = "https://k89.app"

  const mapPostsToSitemap = combinedPosts.map((post) => ({
    url: `${urlBasePath}/${post.category ? `${post.category}/` : ''}${post.slug}` || "",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: `${urlBasePath}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${urlBasePath}/giay-phep-kinh-doanh`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${urlBasePath}/quyen-rieng-tu`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${urlBasePath}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${urlBasePath}/huong-dan`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${urlBasePath}/gioi-thieu-k89bet`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${urlBasePath}/lien-he-k89bet`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${urlBasePath}/trach-nhiem-nguoi-choi`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${urlBasePath}/dieu-kien-va-dieu-khoan`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${urlBasePath}/chinh-sach-bao-mat`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    ...mapPostsToSitemap
  ];

  return sitemapEntries;
}
