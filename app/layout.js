import Header from "../components/Header"

import "../sass/global.scss";

//shell of the page
//header, footer, sidebar
export const metadata = {
  title: "IST 363 weather",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        </body>
    </html>
  );
}
