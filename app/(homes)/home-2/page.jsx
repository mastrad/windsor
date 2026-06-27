import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Blogs from "@/components/homes/home-2/Blogs";
import Cta from "@/components/homes/home-2/Cta";
import Faq from "@/components/homes/home-2/Faq";
import Features from "@/components/homes/home-2/Features";
import Feedback from "@/components/homes/home-2/Feedback";
import Hero from "@/components/homes/home-2/Hero";
import KeyFeatures from "@/components/homes/home-2/KeyFeatures";
import Pricing from "@/components/common/Pricing";
import React from "react";
export const metadata = {
  title:
    "Windsor Taekwondo | Taekwondo Classes in Windsor & Maidenhead",
  description:
    "Windsor Taekwondo offers taekwondo and martial arts classes in Windsor and Maidenhead for kids, adults, and ladies-only groups. Book a free trial class today.",
  keywords:
    "Windsor Taekwondo, Maidenhead Taekwondo, taekwondo classes Windsor, taekwondo classes Maidenhead, martial arts Windsor, martial arts Maidenhead, ladies only taekwondo Maidenhead, kids taekwondo Maidenhead, female only martial arts",
  openGraph: {
    title: "Windsor Taekwondo | Taekwondo Classes in Windsor & Maidenhead",
    description:
      "Taekwondo and martial arts classes for kids, adults, and ladies-only groups in Windsor and Maidenhead. Free trial class available.",
    url: "https://windsortaekwondo.com",
    siteName: "Windsor Taekwondo",
    images: [
      {
        url: "https://windsortaekwondo.com/assets/images/template/hero-two.png",
        width: 1280,
        height: 941,
        alt: "Windsor Taekwondo — martial arts classes in Windsor and Maidenhead",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Windsor Taekwondo | Taekwondo Classes in Windsor & Maidenhead",
    description:
      "Taekwondo and martial arts classes for kids, adults, and ladies-only groups in Windsor and Maidenhead. Free trial class available.",
    images: ["https://windsortaekwondo.com/assets/images/template/hero-two.png"],
    site: "@WindsorTKD",
  },
  alternates: {
    canonical: "https://windsortaekwondo.com",
  },
};
export default function HomePage2() {
  return (
    <>
      <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Hero />
          <Features />
          <KeyFeatures />
          {/* <Pricing /> */}
          <br />
          <br />
          <Faq />
          <Feedback />
          {/* <Blogs /> */}
          <Cta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}