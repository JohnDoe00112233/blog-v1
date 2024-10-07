import type { MetadataRoute } from "next";

import { BLOG_POST_DATA, MOCK_HOMEPAGE_DATA } from "src/data/list-data";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const combinedPosts = BLOG_POST_DATA.concat(MOCK_HOMEPAGE_DATA);
  const urlBasePath = "https://k89.app"
  const changeDate = new Date(
    Date.now() - 5 * 24 * 60 * 60 * 1000,
  ).toISOString();

  const mapPostsToSitemap = combinedPosts.map((post) => ({
    url: `${urlBasePath}/${post.category ? `${post.category}/` : ''}${post.slug}` || "",
    lastModified: changeDate,
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: `${urlBasePath}`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${urlBasePath}/giay-phep-kinh-doanh`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${urlBasePath}/quyen-rieng-tu`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${urlBasePath}/`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${urlBasePath}/huong-dan`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${urlBasePath}/gioi-thieu-k89bet`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${urlBasePath}/lien-he-k89bet`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${urlBasePath}/trach-nhiem-nguoi-choi`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${urlBasePath}/dieu-kien-va-dieu-khoan`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${urlBasePath}/chinh-sach-bao-mat`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    ...mapPostsToSitemap
  ];

  return sitemapEntries;
}
