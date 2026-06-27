import Header2 from "@/components/headers/Header2";

import Footer1 from "@/components/footers/Footer1";
import About from "@/components/innerpages/About";
import ScrollingLogos from "@/components/homes/home-2/ScrollingLogos"; //
import About2 from "@/components/innerpages/About2";
import AboutValues from "@/components/innerpages/AboutValues";
import Feedback from "@/components/homes/home-2/Feedback";
import Timeline from "@/components/homes/home-1/Timeline";
import Team from "@/components/homes/home-1/Team";
import Cta from "@/components/homes/home-2/Cta";
export const metadata = {
    title:
      "About Windsor Taekwondo | Kids & Ladies-Only Martial Arts in Maidenhead",
    description:
      "Windsor Taekwondo offers kids taekwondo in Maidenhead and Windsor, plus ladies-only martial arts classes taught by female instructors. Welcoming, family-friendly environment.",
    keywords:
      "Windsor Taekwondo, Maidenhead Taekwondo, kids taekwondo Maidenhead, kids taekwondo Windsor, kids martial arts Maidenhead, kids martial arts Windsor, ladies-only taekwondo Windsor, ladies-only taekwondo Maidenhead, ladies only martial arts Maidenhead, ladies only martial arts Windsor, martial arts Windsor, martial arts Maidenhead, female martial arts instructors Maidenhead",
    openGraph: {
      title: "About Windsor Taekwondo | Kids & Ladies-Only Martial Arts in Maidenhead",
      description:
        "Windsor Taekwondo offers kids taekwondo in Maidenhead and Windsor, plus ladies-only martial arts classes taught by female instructors.",
      url: "https://windsortaekwondo.com/about",
      siteName: "Windsor Taekwondo",
      images: [
        {
          url: "https://windsortaekwondo.com/assets/images/template/hero-about-02.webp",
          width: 1000,
          height: 667,
          alt: "Windsor Taekwondo club — about us",
        },
      ],
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: "About Windsor Taekwondo | Kids & Ladies-Only Martial Arts in Maidenhead",
      description:
        "Windsor Taekwondo offers kids taekwondo in Maidenhead and Windsor, plus ladies-only martial arts classes taught by female instructors.",
      images: ["https://windsortaekwondo.com/assets/images/template/hero-about-02.webp"],
      site: "@WindsorTKD",
    },
    alternates: {
      canonical: "https://windsortaekwondo.com/about",
    },
  };
export default function AboutPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <About />
          <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pb-6 xl:pb-9">
              <div className="container max-w-xl">
                <div className="section-inner panel">
                  <div
                    className="block-panel panel"
                    data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
                  >
                    <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                      <ScrollingLogos />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <About2 />
          <AboutValues />
          {/* <Feedback /> */}
          {/* <Timeline /> */}
          {/* <Team /> */}
          <Cta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
