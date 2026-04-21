import { Header } from "@/src/components/header";
import { createClient, repositoryName } from "@/src/prismicio";
import "@/styles/globals.css";
import { PrismicPreview } from "@prismicio/next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "../components/footer";
import SmootherProvider from "../providers/smoother-provider";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"], // '400' is the regular weight
  style: ["normal", "italic"], // Include both normal and italic styles
  subsets: ["latin"],
  display: "swap", // 'swap' ensures text is visible while the font loads
  variable: "--font-instrument-serif", // Optional: Use a CSS variable
});

const dirtyLine = localFont({
  src: "../../public/fonts/Dirtyline-Regular.woff2",
  // display: 'swap',
  variable: "--font-dirty-line",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = createClient();
  const layout = await client.getSingle("layout");

  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${dirtyLine.variable} antialiased`}
      >
        <Header {...layout} />
        <SmootherProvider>
          {children}
          <PrismicPreview repositoryName={repositoryName} />
          <Footer />
        </SmootherProvider>
      </body>
    </html>
  );
}
