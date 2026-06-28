import Header2 from "@/components/headers/Header2";

import Footer1 from "@/components/footers/Footer1";
import Contact1 from "@/components/innerpages/Contact1";
import ContactLinks from "@/components/innerpages/ContactLinks";
import Faq from "@/components/homes/home-2/Faq";
import ScrollingLogos from "@/components/homes/home-2/ScrollingLogos"; //
import Blogs from "@/components/homes/home-2/Blogs";
export const metadata = {
    title:
      "Contact Windsor Taekwondo | Book a Free Trial Class in Maidenhead & Windsor",
    description:
      "Get in touch with Windsor Taekwondo to book your free trial class. We offer taekwondo and martial arts classes in Maidenhead and Windsor for kids, adults, and ladies-only groups.",
    keywords:
      "contact Windsor Taekwondo, book taekwondo class, free trial taekwondo Maidenhead, taekwondo Windsor contact, martial arts class booking Maidenhead",
    openGraph: {
      title: "Contact Windsor Taekwondo | Book a Free Trial Class",
      description:
        "Get in touch to book your free trial taekwondo class in Maidenhead or Windsor. Kids, adults, and ladies-only groups welcome.",
      url: "https://windsortaekwondo.com/contact",
      siteName: "Windsor Taekwondo",
      images: [
        {
          url: "https://windsortaekwondo.com/assets/images/template/hero-contact.jpg",
          width: 1500,
          height: 1000,
          alt: "Contact Windsor Taekwondo",
        },
      ],
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Windsor Taekwondo | Book a Free Trial Class",
      description:
        "Get in touch to book your free trial taekwondo class in Maidenhead or Windsor. Kids, adults, and ladies-only groups welcome.",
      images: ["https://windsortaekwondo.com/assets/images/template/hero-contact.jpg"],
      site: "@WindsorTKD",
    },
    alternates: {
      canonical: "https://windsortaekwondo.com/contact",
    },
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
