import React from "react";
import { useRouter } from "next/router";
import en from "../translation/en";
import ar from "../translation/ar";

function help() {
  const router = useRouter();
  const { locale } = router;
  const trans = locale === "en" ? en : ar;
  return (
    <div className=" box-content  min-h-screen overflow-hidden overflow-y-auto relative"></div>
  );
}

export default help;
