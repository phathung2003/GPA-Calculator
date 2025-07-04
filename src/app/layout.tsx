import copyright from "../hook/copyright";
import "../css/main.css";

export const metadata = {
  title: "GPA Calculator",
  description: "A website that calculate GPA score",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <p>Tính GPA - Phiên bản 0.1.0-dev</p>
        </header>

        <main>{children}</main>

        <footer>{copyright()}</footer>
      </body>
    </html>
  );
}
