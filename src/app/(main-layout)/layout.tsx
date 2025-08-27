import Header from "@/components/layouts/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>
    <Header />
    {children}</div>;
}
