import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Sidebar from "./../components/Sidebar";
import { useRouter } from "next/router";
import en from "../translation/en";
import ar from "../translation/ar";

function settings() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const { locale } = router;
  const trans = locale === "en" ? en : ar;

  return (
    <div className=" box-content  min-h-screen overflow-hidden overflow-y-auto relative"></div>
  );
}

export default settings;
