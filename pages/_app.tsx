import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import DepthScene from "@/components/common/DepthScene";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DepthScene />
      <div className="pageStage">
        <Component {...pageProps} />
      </div>
    </>
  );
}
