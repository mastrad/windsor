import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
export const metadata = {
    title:
      "Windsor Taekwondo || Taekwondo martial arts classes in Windsor and Maidenhead.",
    description:
      "Windsor Taekwondo is a martial arts school in Windsor and Maidenhead, offering classes for all ages and abilities. Join us to learn self-defense, improve fitness, and gain confidence.",
  };
export default function page() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap"></div>
        <Footer2 />
      </div>
    </>
  );
}
