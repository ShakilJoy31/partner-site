import "@/styles/globals.css";
import PartnerHeading from "./Components/PartnerHeading";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    AOS.init({duration: 1000})
  },[])
  return (
    <div className="bg-white">
      <div data-aos='zoom-in'>
      <img className="w-full" src="https://i.ibb.co/sbRcV8b/Business.png" alt="" />
      </div>

      <div className="lg:flex md:flex lg:mx-12 md:mx-8">
        <div data-aos='fade-right'>
          <PartnerHeading></PartnerHeading>
        </div>

        <div className="mt-[48px] ml-[48px] w-full" data-aos='fade-left'>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
