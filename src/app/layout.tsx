export const metadata = {
  title: 'GPA Calculator',
  description: 'A website that calculate GPA score',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}