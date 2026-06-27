import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/innerpages/benefits-of-taekwondo/Hero";
import KeyFeatures from "@/components/innerpages/benefits-of-taekwondo/KeyFeatures";
import Faq from "@/components/homes/home-2/Faq";
import Testimonials from "@/components/homes/home-3/Testimonials";
import Cta from "@/components/innerpages/benefits-of-taekwondo/Cta";
import Brands2 from "@/components/common/Brands2";
export const metadata = {
    title:
      "Benefits of Taekwondo | Windsor Taekwondo — Kids & Adults Martial Arts Maidenhead",
    description:
      "Discover the physical and mental benefits of taekwondo for kids and adults. Windsor Taekwondo offers classes in Maidenhead and Windsor for all ages and abilities.",
    keywords:
      "benefits of taekwondo, taekwondo for kids, taekwondo for adults, martial arts benefits, taekwondo Maidenhead, taekwondo Windsor, kids martial arts Maidenhead",
    openGraph: {
      title: "Benefits of Taekwondo | Windsor Taekwondo",
      description:
        "Discover the physical and mental benefits of taekwondo for kids and adults. Classes in Maidenhead and Windsor for all ages and abilities.",
      url: "https://windsortaekwondo.com/benefits-of-taekwondo",
      siteName: "Windsor Taekwondo",
      images: [
        {
          url: "https://windsortaekwondo.com/assets/images/template/hero-two.png",
          width: 1280,
          height: 941,
          alt: "Benefits of taekwondo — Windsor Taekwondo",
        },
      ],
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: "Benefits of Taekwondo | Windsor Taekwondo",
      description:
        "Discover the physical and mental benefits of taekwondo for kids and adults. Classes in Maidenhead and Windsor.",
      images: ["https://windsortaekwondo.com/assets/images/template/hero-two.png"],
      site: "@WindsorTKD",
    },
    alternates: {
      canonical: "https://windsortaekwondo.com/benefits-of-taekwondo",
    },
  };
export default function FeaturesPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Hero />
          <KeyFeatures />
          <div className="pt-6 xl:pt-9"></div>
          <Faq />
          <Testimonials />
          <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pt-6 pb-8 sm:pt-8 sm:pb-9 xl:py-9">
              <h5
                className="h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
              >
                Trusted by well-known brands.
              </h5>
              <div
                className="block-panel panel"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                  <Brands2 />
                </div>
              </div>
            </div>
          </div>
          <Cta />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
