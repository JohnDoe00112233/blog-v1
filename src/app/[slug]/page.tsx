import { notFound } from "next/navigation";

import { CONFIG } from "src/config-global";
import { BLOG_POST_DATA, MOCK_HOMEPAGE_DATA } from "src/data/list-data";

import { PostDetailsHomeView } from "src/sections/blog/view";

import { baseOpenGraph, baseTwitterGraph } from "../shared-metadata";

type Props = {
  params: { slug: string };
};


// Hàm generateMetadata để thêm meta cho từng trang
export async function generateMetadata({ params }: Props) {
  const urlBasePath = "https://k89bet68.com"
  const { slug } = params;
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const post = MOCK_HOMEPAGE_DATA.find(post => post.slug === slug);

  const urlPath = `${urlBasePath}/${slug}/vi_VN`;

  if (!post) {
    return notFound();
  }

  return {
    metadataBase: new URL('https://k89bet68.com'), // Thêm metadataBase
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [
        {
          url: post.coverUrlOpenGraph,
          alt: post.coverUrlOpenGraphAlt,
        },
      ],
      authors: ["k89bet"],
      ...baseOpenGraph,
    },
    twitter: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: urlPath,
      images: [
        {
          url: post.coverUrlOpenGraph,
          alt: post.coverUrlOpenGraphAlt,
        },
      ],
      ...baseTwitterGraph
    },
    alternates: {
      canonical: urlPath,
      languages: {
        "vi-VN": urlPath
      }
    },
  };
}

export default function Page({ params }: Props) {
  const { slug } = params;

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const post = MOCK_HOMEPAGE_DATA.find((post) => post.slug === slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post?.metaTitle,
    "image": post?.coverUrlOpenGraph,
    "author": {
      "@type": "Person",
      "name": "K89Bet"
    },
    "publisher": {
      "@type": "Organization",
      "name": "K89Bet",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo/k89bet-nha-cai-ca-cuoc-uy-tin-hang-dau-chau-a.webp"
      }
    },
    "datePublished": "2024-10-04",
    "dateModified": "2024-10-10",
    "description": post?.metaDescription,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://k89bet68.com/${post?.itemPath}`
    },
    "keywords": post?.keyword,
    "articleSection": post?.articleSection,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Trang chủ",
          "item": "https://k89bet68.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": post?.name,
          "item": `https://k89bet68.com/${post?.itemPath}`
        },
      ]
    }
  };

  return (
    <section>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostDetailsHomeView post={post} latestPosts={BLOG_POST_DATA} />
    </section>
  )

}


// ----------------------------------------------------------------------

/**
 * [1] Default
 * Remove [1] and [2] if not using [2]
 */
const dynamic = CONFIG.isStaticExport ? 'auto' : 'force-dynamic';

export { dynamic };

/**
 * [2] Static exports
 * https://nextjs.org/docs/app/building-your-application/deploying/static-exports
 */
export async function generateStaticParams() {
  if (CONFIG.isStaticExport) {
    return MOCK_HOMEPAGE_DATA.map(post => ({
      slug: post.slug,
    }));
  }
  return [];
}
