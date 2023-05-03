export const metadata = {
  title: "EventSimplify",
  description: "Eventsimplify Blog Admin Panel"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
