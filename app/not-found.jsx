import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Breadcumb from "@/components/otherPages/Breadcumb";
import Notfound from "@/components/otherPages/404";
export const metadata = {
    title:
      "Not Found || Spotwizz - Fully featured CRM to manage invoices, clients, projects, taks, and more.",
    description:
      "Spotwizz - Fully featured CRM to manage invoices, clients, projects, taks, and more.",
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
        <Footer2 />
      </div>
    </>
  );
}
