/* eslint-disable @typescript-eslint/no-shadow */
import { notFound } from 'next/navigation';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { BLOG_POST_DATA } from 'src/data/list-data';
import { baseOpenGraph, baseTwitterGraph } from 'src/app/shared-metadata';

import { PostDetailsHomeView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

type Props = {
  params: { slug: string };
};


// Hàm generateMetadata để thêm meta cho từng trang
export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const urlBasePath = "https://k89.app"
  const post = BLOG_POST_DATA.find(post => post.slug === slug);

  const urlPath = `${urlBasePath}/${paths.tutorial}/${slug}/vi_VN`;

  if (!post) {
    return notFound();
  }

  return {
    metadataBase: new URL('https://k89.app'), // Thêm metadataBase
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


export default async function Page({ params }: Props) {
  const { slug } = params;
  const urlBasePath = "https://k89.app"
  const post = BLOG_POST_DATA.find((post) => post.slug === slug);

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
        "url": `${urlBasePath}/logo/k89bet-nha-cai-ca-cuoc-uy-tin-hang-dau-chau-a.png`
      }
    },
    "datePublished": "2024-08-28",
    "dateModified": "2024-08-28",
    "description": post?.metaDescription,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${urlBasePath}/${paths.tutorial}/${slug}`
    },
    "keywords": "nạp tiền K89Bet, K89Bet hiện đang mở, tải app K89Bet, đăng ký K89Bet, khuyến mãi K89Bet, nhà cái K89Bet",
    "articleSection": "Nạp tiền K89Bet, Khuyến mãi K89Bet, Tải App K89Bet, Đăng ký K89Bet, Hướng dẫn K89Bet",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Trang chủ",
          "item": urlBasePath
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Hướng dẫn K89Bet",
          "item": `${urlBasePath}/${paths.tutorial}`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Nạp tiền K89Bet",
          "item": `${urlBasePath}/${paths.tutorial}/${slug}`
        }
      ]
    }
  };

  if (!post) {
    return notFound();
  }

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
    return BLOG_POST_DATA.map(post => ({
      slug: post.slug,
    }));
  }
  return [];
}
