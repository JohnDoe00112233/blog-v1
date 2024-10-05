import { CONFIG } from 'src/config-global';

import { HomeView } from 'src/sections/home/view';

import { baseOpenGraph, baseTwitterGraph } from '../shared-metadata';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'K89bet.com | Link vào K89bet chính thức không bị chặn link',
  description:
    'Tham gia ngay nhà cái K89bet.com – nền tảng cá cược uy tín với tỷ lệ cược cao, đa dạng trò chơi casino, thể thao và nổ hũ hấp dẫn. Nhận khuyến mãi độc quyền cho người chơi mới và cơ hội thắng lớn mỗi ngày. Đăng ký miễn phí chỉ trong 1 phút!',
    openGraph: {
      title: 'K89bet.com | Link vào K89bet chính thức không bị chặn link',
      description: 'Tham gia ngay nhà cái K89bet.com – nền tảng cá cược uy tín với tỷ lệ cược cao, đa dạng trò chơi casino, thể thao và nổ hũ hấp dẫn. Nhận khuyến mãi độc quyền cho người chơi mới và cơ hội thắng lớn mỗi ngày. Đăng ký miễn phí chỉ trong 1 phút!',
      images: [
        {
          url:  `${CONFIG.site.basePath}/assets/images/nha-cai-ca-cuoc-truc-tuyen-hang-dau-k89bet.webp`,
          alt: 'K89bet.com – nền tảng cá cược uy tín với tỷ lệ cược cao, đa dạng trò chơi casino, thể thao và nổ hũ hấp dẫn. Nhận khuyến mãi độc quyền cho người chơi mới và cơ hội thắng lớn mỗi ngày. Đăng ký miễn phí chỉ trong 1 phút!',
        },
      ],
      authors: ["k89bet"],
      ...baseOpenGraph,
    },
    twitter: {
      title: 'K89bet.com | Link vào K89bet chính thức không bị chặn link',
      description: 'Tham gia ngay nhà cái K89bet.com – nền tảng cá cược uy tín với tỷ lệ cược cao, đa dạng trò chơi casino, thể thao và nổ hũ hấp dẫn. Nhận khuyến mãi độc quyền cho người chơi mới và cơ hội thắng lớn mỗi ngày. Đăng ký miễn phí chỉ trong 1 phút!',
      url: 'https://k89.app',
      images: [
        {
          url: `${CONFIG.site.basePath}/assets/images/nha-cai-ca-cuoc-truc-tuyen-hang-dau-k89bet.webp`,
          alt: 'K89bet.com – nền tảng cá cược uy tín với tỷ lệ cược cao, đa dạng trò chơi casino, thể thao và nổ hũ hấp dẫn. Nhận khuyến mãi độc quyền cho người chơi mới và cơ hội thắng lớn mỗi ngày. Đăng ký miễn phí chỉ trong 1 phút!',
        },
      ],
      ...baseTwitterGraph
    },
    alternates: {
      canonical: 'https://k89.app',
      languages: {
        "vi-VN": 'https://k89.app'
      }
    },
};


const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "K89Bet",
    "url": "https://k89.app",
    "logo": `${CONFIG.site.basePath}/logo/k89bet-nha-cai-ca-cuoc-uy-tin-hang-dau-chau-a.webp`,
    "description": "Tham gia ngay nhà cái K89bet.com – nền tảng cá cược uy tín với tỷ lệ cược cao, đa dạng trò chơi casino, thể thao và nổ hũ hấp dẫn. Nhận khuyến mãi độc quyền cho người chơi mới và cơ hội thắng lớn mỗi ngày. Đăng ký miễn phí chỉ trong 1 phút!",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "(+84) 921227035",
      "contactType": "Customer Service",
      "areaServed": "VN",
      "availableLanguage": ["Vietnamese"]
    },
    "sameAs": [
      "",
      "",
      ""
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "146/59 Đ. Vũ Tùng, Phường 2, Bình Thạnh, Hồ Chí Minh.",
      "addressLocality": "TP. Hồ Chí Minh",
      "addressRegion": "VN",
      "postalCode": "700000",
      "addressCountry": "VN"
    }

}

export default function Page() {
  return (
    <section>
  <script
    type="application/ld+json"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
  <HomeView />
</section>
  )
}
