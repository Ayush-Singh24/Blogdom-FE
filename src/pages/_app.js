import Alert from "@/components/Alert";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Alert />
    </>
  );
}
