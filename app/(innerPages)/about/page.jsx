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
      "About - Windsor Taekwondo || Kids & Ladies-only Martial Arts Maidenhead",
    description:
      "Windsor Taekwondo offers kids taekwondo in Maidenhead and Windsor, plus ladies-only martial arts classes. Train with expert instructors in a welcoming, family-friendly environment.",
    keywords:
      "Windsor Taekwondo, Windsor Taekwondo, Maidenhead Taekwondo, kids taekwondo Maidenhead, kids taekwondo Windsor, kids martial arts Maidenhead, kids martial arts Windsor, ladies-only taekwondo Windsor, ladies-only taekwondo Maidenhead, ladies only martial arts Maidenhead, ladies only martial arts Windsor, martial arts Windsor, martial arts Maidenhead, taekwondo classes Windsor, taekwondo classes Maidenhead, kids self defence Windsor, kids self defence Maidenhead, female martial arts instructors Windsor, female martial arts instructors Maidenhead",
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
