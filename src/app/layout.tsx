import MainHeader from "@/components/main-header/main-header";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};
interface RootLayout {
  children: ReactNode;
}
export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
