import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { BLOG_POST_DATA } from 'src/data/list-data';

import { PostListHomeView } from 'src/sections/blog/view/post-list-home-view';

import { baseTwitterGraph, baseOpenGraphTypeWebSite } from '../shared-metadata';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Hướng Dẫn K89Bet – Đăng Ký, Nạp Tiền, Rút Tiền & Tải App K89Bet',
  description:
    'Tất cả hướng dẫn chi tiết về K89Bet. Tìm hiểu cách đăng ký K89Bet, nạp tiền, rút tiền, tải app, và khám phá khuyến mãi K89Bet mới nhất.',
  openGraph: {
    title: 'Hướng Dẫn K89Bet – Đăng Ký, Nạp Tiền, Rút Tiền & Tải App K89Bet',
    description:
      'Tất cả hướng dẫn chi tiết về K89Bet. Tìm hiểu cách đăng ký K89Bet, nạp tiền, rút tiền, tải app, và khám phá khuyến mãi K89Bet mới nhất.',
    images: [
      {
        url: "",
        alt: "",
      },
    ],
    authors: ["k89bet"],
    ...baseOpenGraphTypeWebSite
  },
  twitter: {
    title: 'Hướng Dẫn K89Bet – Đăng Ký, Nạp Tiền, Rút Tiền & Tải App K89Bet',
    description: 'Tất cả hướng dẫn chi tiết về K89Bet. Tìm hiểu cách đăng ký K89Bet, nạp tiền, rút tiền, tải app, và khám phá khuyến mãi K89Bet mới nhất.',
    url: `${CONFIG.site.basePath}/${paths.tutorial}/vi_VN`,
    images: [
      {
        url: "",
        alt: "",
      },
    ],
    ...baseTwitterGraph
  },
  alternates: {
    canonical: `${CONFIG.site.basePath}/${paths.tutorial}/vi_VN`,
    languages: {
      "vi-VN": `${CONFIG.site.basePath}/${paths.tutorial}/vi_VN`,
    }
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Hướng Dẫn K89Bet",
  "description": "Trang Hướng dẫn K89Bet cung cấp tất cả thông tin chi tiết về cách đăng ký K89Bet, nạp tiền, rút tiền, tải app và khám phá các khuyến mãi mới nhất tại K89Bet.",
  "url": `${CONFIG.site.basePath}/${paths.tutorial}`,
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Hướng dẫn nạp tiền K89Bet",
        "url": `${CONFIG.site.basePath}/${paths.recharge}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Hướng dẫn đăng ký K89Bet",
        "url": `${CONFIG.site.basePath}/${paths.register}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Hướng dẫn tải app K89Bet",
        "url": `${CONFIG.site.basePath}/${paths.download}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Hướng dẫn rút tiền K89Bet",
        "url": `${CONFIG.site.basePath}/${paths.withdraw}`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Khuyến mãi K89Bet",
        "url": `${CONFIG.site.basePath}/${paths.promotion}`
      }
    ]
  },
  "keywords": [
    "Hướng dẫn K89Bet",
    "Đăng ký K89Bet",
    "Nạp tiền K89Bet",
    "Rút tiền K89Bet",
    "Tải app K89Bet",
    "Khuyến mãi K89Bet"
  ],
  "publisher": {
    "@type": "Organization",
    "name": "K89Bet",
    "logo": {
      "@type": "ImageObject",
      "url": `${CONFIG.site.basePath}/logo/k89bet-nha-cai-ca-cuoc-uy-tin-hang-dau-chau-a.webp`
    }
  },
  "datePublished": "2024-09-01",
  "dateModified": "2024-09-01"
}

export default async function Page() {
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostListHomeView posts={BLOG_POST_DATA} />
    </section>
  )

}


