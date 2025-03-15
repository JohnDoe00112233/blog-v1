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
  metadataBase: new URL('https://k89bet68.com'), // Thêm metadataBase
  title: "K89bet | Link vào K89bet chính thức mới nhất 2025",
  description:
    "K89bet khẳng định vị thế nhà cái hàng đầu với sản phẩm và dịch vụ vượt trội. Khám phá ngay nền tảng giải trí đẳng cấp, cùng các ưu đãi không thể bỏ lỡ!",
  alternates: {
    canonical: "https://k89bet68.com/vi_VN",
    languages: {
      "vi-VN": "https://k89bet68.com/vi_VN"
    },
  },
  generator: "K89bet",
  applicationName: "K89bet",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "K89bet" }],
  creator: "K89bet",
  publisher: "K89bet",
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
    "google-site-verification": "",
    "msvalidate.01":""
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
