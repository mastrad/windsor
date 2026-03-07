import Header2 from "@/components/headers/Header2";

import Footer1 from "@/components/footers/Footer1";
import Contact1 from "@/components/innerpages/Contact1";
import ContactLinks from "@/components/innerpages/ContactLinks";
import Faq from "@/components/homes/home-2/Faq";
import ScrollingLogos from "@/components/homes/home-2/ScrollingLogos"; //
import Blogs from "@/components/homes/home-2/Blogs";
export const metadata = {
    title:
      "Windsor Taekwondo || Taekwondo Martial Arts Classes in Windsor and Maidenhead.",
    description:
      "Windsor Taekwondo is a martial arts school in Windsor and Maidenhead, offering classes for all ages and abilities. Join us to learn self-defense, improve fitness, and gain confidence.",
    keywords:
      "Windsor Taekwondo, martial arts, taekwondo classes, self-defense, fitness, confidence, Windsor, Maidenhead",
  };
export default function ContactPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Contact1 />

          <ContactLinks />
          <Faq />
          <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pb-8 sm:pb-9 xl:pb-9">
              <h5
                className="h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
              >
                Our Trusted Partners
              </h5>
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
          {/* <Blogs /> */}
        </div>
        <Footer1 />
      </div>
    </>
  );
}
