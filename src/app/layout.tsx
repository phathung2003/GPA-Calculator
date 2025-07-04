import copyright from "../hook/copyright";
import "../css/main.css";
import header from "../pages/components/header";
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
          {header()}
        </header>

        <main>{children}</main>

        <footer>{copyright()}</footer>
      </body>
    </html>
  );
}
