
import { HomeView } from 'src/sections/home/view';

import { baseOpenGraph, baseTwitterGraph } from '../shared-metadata';

// ----------------------------------------------------------------------

export const metadata = {
  metadataBase: new URL('https://k89bet68.com'), // Thêm metadataBase
  title: 'K89bet | Link vào K89bet chính thức mới nhất 2025',
  description:
    'K89bet khẳng định vị thế nhà cái hàng đầu với sản phẩm và dịch vụ vượt trội. Khám phá ngay nền tảng giải trí đẳng cấp, cùng các ưu đãi không thể bỏ lỡ!',
    openGraph: {
      title: 'K89bet | Link vào K89bet chính thức mới nhất 2025',
      description: 'K89bet khẳng định vị thế nhà cái hàng đầu với sản phẩm và dịch vụ vượt trội. Khám phá ngay nền tảng giải trí đẳng cấp, cùng các ưu đãi không thể bỏ lỡ!',
      images: [
        {
          url:  `/assets/images/nha-cai-ca-cuoc-truc-tuyen-hang-dau-k89bet.webp`,
          alt: 'K89bet.com – nền tảng cá cược uy tín với tỷ lệ cược cao, đa dạng trò chơi casino, thể thao và nổ hũ hấp dẫn. Nhận khuyến mãi độc quyền cho người chơi mới và cơ hội thắng lớn mỗi ngày. Đăng ký miễn phí chỉ trong 1 phút!',
        },
      ],
      authors: ["k89bet"],
      ...baseOpenGraph,
    },
    twitter: {
      title: 'K89bet | Link vào K89bet chính thức mới nhất 2025',
      description: 'K89bet khẳng định vị thế nhà cái hàng đầu với sản phẩm và dịch vụ vượt trội. Khám phá ngay nền tảng giải trí đẳng cấp, cùng các ưu đãi không thể bỏ lỡ!',
      url: 'https://k89bet68.com',
      images: [
        {
          url: `/assets/images/nha-cai-ca-cuoc-truc-tuyen-hang-dau-k89bet.webp`,
          alt: 'K89bet.com – nền tảng cá cược uy tín với tỷ lệ cược cao, đa dạng trò chơi casino, thể thao và nổ hũ hấp dẫn. Nhận khuyến mãi độc quyền cho người chơi mới và cơ hội thắng lớn mỗi ngày. Đăng ký miễn phí chỉ trong 1 phút!',
        },
      ],
      ...baseTwitterGraph
    },
    alternates: {
      canonical: 'https://k89bet68.com',
      languages: {
        "vi-VN": 'https://k89bet68.com'
      }
    },
};


const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "K89Bet",
    "url": "https://k89bet68.com",
    "logo": `/logo/k89bet-nha-cai-ca-cuoc-uy-tin-hang-dau-chau-a.webp`,
    "description": "K89bet khẳng định vị thế nhà cái hàng đầu với sản phẩm và dịch vụ vượt trội. Khám phá ngay nền tảng giải trí đẳng cấp, cùng các ưu đãi không thể bỏ lỡ!",
    "foundingDate": "2025",
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
      "streetAddress": "200 Bát Nàn, Phường Thạnh Mỹ Lợi, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",
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
