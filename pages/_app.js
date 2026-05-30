import "@/styles/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${jakarta.className} ${jakarta.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
