import 'src/global.css';

// ----------------------------------------------------------------------

import type { Viewport } from 'next';

import { primary } from 'src/theme/core/palette';
import { ThemeProvider } from 'src/theme/theme-provider';
import { getInitColorSchemeScript } from 'src/theme/color-scheme-script';

import { ProgressBar } from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';




// ----------------------------------------------------------------------

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: primary.main,
};

export const metadata = {
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  metadataBase: new URL('https://k89.app'), // Thêm metadataBase
  title: "K89bet.com | Link vào K89bet chính thức không bị chặn link",
  description:
    "Tham gia ngay nhà cái K89bet.com – nền tảng cá cược uy tín với tỷ lệ cược cao, đa dạng trò chơi casino, thể thao và nổ hũ hấp dẫn. Nhận khuyến mãi độc quyền cho người chơi mới và cơ hội thắng lớn mỗi ngày. Đăng ký miễn phí chỉ trong 1 phút!",
  alternates: {
    canonical: "https://k89.app/vi_VN",
    languages: {
      "vi-VN": "https://k89.app/vi_VN"
    },
  },
  generator: "K89BET",
  applicationName: "K89BET",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "k89bet" }],
  creator: "k89bet",
  publisher: "k89bet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  locale: "vi_VN",
  type: "website",
  manifest: "/manifest.json",
  icons: [
    { rel: "icon", url: "/favicon/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
  other: {
    "google-site-verification": "3G6SddOKFuUgy4jU-4AcU-CBRh_YLyDJM0HQfPdP4LM",
    "msvalidate.01":"9F6F4FF1AE25154C3B6D43558283080D"
  }
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang='vi' suppressHydrationWarning>
      <body>
        {getInitColorSchemeScript}
        <ThemeProvider>
          <MotionLazy>
            <ProgressBar />
            {children}
          </MotionLazy>
        </ThemeProvider>
      </body>
    </html>
  );
}
