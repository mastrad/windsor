import Header2 from "@/components/headers/Header2";

import Footer1 from "@/components/footers/Footer1";
import Breadcumb from "@/components/otherPages/Breadcumb";
import Notfound from "@/components/otherPages/404";
export const metadata = {
  title: "Page Not Found | Windsor Taekwondo",
  description:
    "The page you were looking for could not be found. Windsor Taekwondo offers taekwondo and martial arts classes for kids, adults, and ladies-only groups in Windsor and Maidenhead.",
  robots: { index: false, follow: true },
};
export default function NotFoundPage() {
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
