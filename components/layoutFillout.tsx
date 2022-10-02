import Layout from "./Layout";

import { useRouter } from "next/router";
import en from "../translation/en";
import ar from "../translation/ar";

const layout = (props) => {
  const router = useRouter();
  const { locale } = router;
  const trans = locale === "en" ? en : ar;
  return (
    <div className="h-screen w-screen ">
      <Layout
      className="select-none "
      herfFacebook="https://www.facebook.com/divzoon"
      herfInsta="https://www.instagram.com/divzoon/"
      herfTwitter="https://twitter.com/divzoon"
      HerfDash="https://www.divzoon.com/"
      Herfabout="/about"
      HerfContact="/Contact"
      HerfService="/Services"
      herflogoLink={"/"}
      herflogo="/ico/1.png"
      imgFlagArabic="/Images/flags/Egypt.png"
      imgFlagEnglish="/Images/flags/Usa.png"
      enUrl={"/en"}
      arUrl={"/ar"}
      HomeBtn={trans.HomeBtn}
      title="DivDash | by Divzoon"
    />
    {props.children}
    </div>
  );
};
export default layout;
