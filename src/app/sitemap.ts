import type { MetadataRoute } from "next";

import { CONFIG } from "src/config-global";
import { BLOG_POST_DATA, MOCK_HOMEPAGE_DATA } from "src/data/list-data";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const combinedPosts = BLOG_POST_DATA.concat(MOCK_HOMEPAGE_DATA);
  const changeDate = new Date(
    Date.now() - 5 * 24 * 60 * 60 * 1000,
  ).toISOString();

  const mapPostsToSitemap = combinedPosts.map((post) => ({
    url: `${CONFIG.site.basePath}/${post.category ? `${post.category}/` : ''}${post.slug}` || "",
    lastModified: changeDate,
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: `${CONFIG.site.basePath}`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${CONFIG.site.basePath}/giay-phep-kinh-doanh`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${CONFIG.site.basePath}/quyen-rieng-tu`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${CONFIG.site.basePath}/`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${CONFIG.site.basePath}/huong-dan`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${CONFIG.site.basePath}/gioi-thieu-k89bet`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${CONFIG.site.basePath}/lien-he-k89bet`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${CONFIG.site.basePath}/trach-nhiem-nguoi-choi`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${CONFIG.site.basePath}/dieu-kien-va-dieu-khoan`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${CONFIG.site.basePath}/chinh-sach-bao-mat`,
      lastModified: changeDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    ...mapPostsToSitemap
  ];

  return sitemapEntries;
}
