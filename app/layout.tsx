import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "德州扑克最终牌型概率计算器",
  description: "精确穷举德州扑克最终最佳牌型概率。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
