import Header2 from "@/components/headers/Header2";

import Footer1 from "@/components/footers/Footer1";
import Breadcumb from "@/components/otherPages/Breadcumb";
import Notfound from "@/components/otherPages/404";
export const metadata = {
    title:
      "Windsor Taekwondo || Taekwondo Martial Arts Classes in Windsor and Maidenhead.",
    description:
      "Windsor Taekwondo is a martial arts school in Windsor and Maidenhead, offering classes for all ages and abilities. Join us to learn self-defense, improve fitness, and gain confidence.",
    keywords:
      "Windsor Taekwondo, martial arts, taekwondo classes, self-defense, fitness, confidence, Windsor, Maidenhead",
  };
export default function page() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Breadcumb />
          <Notfound />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
