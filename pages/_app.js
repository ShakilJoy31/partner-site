import "@/styles/globals.css";
import PartnerHeading from "./Components/PartnerHeading";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white">
      <div>
      <img className="w-full" src="https://i.ibb.co/sbRcV8b/Business.png" alt="" />
      </div>

      <div className="lg:flex md:flex lg:mx-12 md:mx-8">
        <div>
          <PartnerHeading></PartnerHeading>
        </div>

        <div className="mt-[48px] ml-[48px] w-full">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
