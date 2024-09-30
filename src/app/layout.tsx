import 'src/global.css';

// ----------------------------------------------------------------------

import type { Viewport } from 'next';

import { primary } from 'src/theme/core/palette';
import { ThemeProvider } from 'src/theme/theme-provider';
import { getInitColorSchemeScript } from 'src/theme/color-scheme-script';

import { Snackbar } from 'src/components/snackbar';
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
  title: "K89BET",
  description:
    "Đăng ký ngay K89Bet không bị chặn để trải nghiệm cá cược bóng đá, bacarat, casino trực tuyến với tỷ lệ thắng cao. Giao diện dễ sử dụng, nhận ngay 588k khi đăng ký. Hỗ trợ khách hàng 24/7, đảm bảo an toàn.",
  alternates: {
    canonical: "https://k89bet.org/vi_VN",
    languages: {
      "vi-VN": "https://k89bet.org/vi_VN"
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
    "dmca-site-verification": "",
    "google-site-verification": ""
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
            <Snackbar />
            <ProgressBar />
            {children}
          </MotionLazy>
        </ThemeProvider>
      </body>
    </html>
  );
}
