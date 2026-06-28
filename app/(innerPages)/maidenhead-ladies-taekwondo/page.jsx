import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";
import Cta from "@/components/homes/home-2/Cta";
import Link from "next/link";
import BookingButton from "@/components/common/BookingButton";

export const metadata = {
  title: "Ladies-Only Taekwondo Classes in Maidenhead & Windsor | Windsor Taekwondo",
  description:
    "Windsor Taekwondo offers ladies-only taekwondo and martial arts classes in Maidenhead and Windsor, taught exclusively by experienced female instructors. Book your free trial class today.",
  keywords:
    "ladies only taekwondo Maidenhead, ladies only martial arts Maidenhead, female only martial arts, ladies taekwondo Windsor, women's taekwondo Maidenhead, ladies martial arts classes, female only taekwondo Maidenhead",
  openGraph: {
    title: "Ladies-Only Taekwondo Classes in Maidenhead & Windsor | Windsor Taekwondo",
    description:
      "Ladies-only taekwondo and martial arts classes in Maidenhead and Windsor, taught by experienced female instructors. Book a free trial class today.",
    url: "https://windsortaekwondo.com/maidenhead-ladies-taekwondo",
    siteName: "Windsor Taekwondo",
    images: [
      {
        url: "https://windsortaekwondo.com/assets/images/template/ladies-class.png",
        width: 780,
        height: 728,
        alt: "Ladies-only taekwondo classes in Maidenhead",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ladies-Only Taekwondo Classes in Maidenhead & Windsor",
    description:
      "Ladies-only taekwondo and martial arts classes taught by female instructors. Free trial class available.",
    images: ["https://windsortaekwondo.com/assets/images/template/ladies-class.png"],
    site: "@WindsorTKD",
  },
  alternates: {
    canonical: "https://windsortaekwondo.com/maidenhead-ladies-taekwondo",
  },
};

export default function LadiesTaekwondoMaidenheadPage() {
  return (
    <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
      <Header2 />
      <div id="wrapper" className="wrap">

        {/* Hero */}
        <div className="hero-header section panel overflow-hidden">
          <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9 bg-secondary dark:bg-gray-900">
            <div className="container max-w-xl">
              <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
                <div className="vstack items-center gap-4 max-w-850px mx-auto text-center">
                  <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                    Ladies-Only Taekwondo Classes in Maidenhead &amp; Windsor
                  </h1>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 max-w-650px">
                    A safe, welcoming space for women of all ages and fitness levels, taught exclusively by experienced female instructors. No experience necessary.
                  </p>
                  <div className="hstack gap-2 flex-wrap justify-center">
                    <BookingButton className="btn btn-md h-48px lg:h-56px btn-primary text-white">
                      Book a free class
                    </BookingButton>
                    <Link
                      href="/about"
                      className="btn btn-md h-48px lg:h-56px btn-secondary dark:btn-outline-white"
                    >
                      Learn more
                    </Link>
                  </div>
                  <p className="fs-7 text-dark dark:text-white text-opacity-70">
                    No payment or uniform required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About the classes */}
        <div className="section panel overflow-hidden">
          <div className="section-outer panel py-6 xl:py-9">
            <div className="container max-w-lg">
              <div className="section-inner panel">
                <div className="panel vstack gap-4 sm:gap-6 max-w-750px mx-auto">
                  <h2 className="h3 lg:h2 m-0 text-center">
                    Why Choose Our Ladies-Only Classes?
                  </h2>
                  <div className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70 vstack gap-4">
                    <p>
                      Windsor Taekwondo&apos;s <strong>ladies-only taekwondo classes in Maidenhead</strong> are designed to give women a space where they can train freely, build confidence, and learn effective self-defence without the pressure of a mixed environment. Whether you&apos;re brand new to martial arts or returning after a break, you&apos;re welcome here.
                    </p>
                    <p>
                      Our <strong>ladies-only martial arts classes in Maidenhead</strong> are led exclusively by experienced, fully insured female instructors registered with British Taekwondo, World Taekwondo, and Kukkiwon, the global governing bodies of the sport. You&apos;ll be training with some of the most qualified <strong>female martial arts instructors</strong> in the Windsor and Maidenhead area.
                    </p>
                    <p>
                      Classes are open to women of all ages, backgrounds, and fitness levels. Whether your goal is fitness, self-defence, stress relief, or simply trying something new, we have a class for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="section panel overflow-hidden bg-secondary dark:bg-gray-800">
          <div className="section-outer panel py-6 xl:py-9">
            <div className="container max-w-xl">
              <div className="section-inner panel">
                <h2 className="h3 lg:h2 m-0 text-center mb-6">
                  What You&apos;ll Gain
                </h2>
                <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-3 g-3">
                  {[
                    {
                      title: "Self-Defence Skills",
                      desc: "Learn practical, effective techniques you can use in real-life situations, taught in a calm, supportive environment.",
                    },
                    {
                      title: "Fitness & Strength",
                      desc: "Taekwondo is a full-body workout that improves cardiovascular fitness, flexibility, balance, and core strength.",
                    },
                    {
                      title: "Confidence",
                      desc: "Training regularly builds mental resilience and self-belief that carries beyond the dojo into everyday life.",
                    },
                    {
                      title: "Female Instructors",
                      desc: "All ladies-only classes are taught exclusively by experienced, insured, and DBS-checked female instructors.",
                    },
                    {
                      title: "Inclusive Community",
                      desc: "A friendly, non-competitive atmosphere where women encourage and support each other at every belt level.",
                    },
                    {
                      title: "Flexible Classes",
                      desc: "Evening and weekend sessions to fit around work, family, and life commitments.",
                    },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="panel vstack gap-2 p-4 lg:py-6 rounded-2 bg-white dark:bg-gray-900 h-100">
                        <h3 className="h5 lg:h4 m-0">{item.title}</h3>
                        <p className="fs-6 opacity-70 dark:opacity-80">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="section panel overflow-hidden">
          <div className="section-outer panel py-6 xl:py-9">
            <div className="container max-w-lg">
              <div className="section-inner panel">
                <div className="panel vstack gap-4 max-w-650px mx-auto text-center">
                  <h2 className="h3 lg:h2 m-0">Class Times</h2>
                  <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                    Our classes are held at <strong>4 Marlow Rd, Maidenhead SL6 7YR</strong>, easily accessible from Windsor, Taplow, Cookham, and the surrounding areas.
                  </p>
                  <div className="panel rounded-2 bg-secondary dark:bg-gray-800 p-4 sm:p-6">
                    <ul className="vstack gap-3 text-start">
                      {[
                        { day: "Tuesday", time: "17:15 – 18:15" },
                        { day: "Friday", time: "19:45 – 20:45" },
                        { day: "Saturday", time: "11:00 – 12:00" },
                      ].map((s, i) => (
                        <li key={i} className="hstack justify-between fs-6 lg:fs-5 fw-medium border-bottom pb-3 last:border-0 last:pb-0">
                          <span>{s.day}</span>
                          <span className="text-primary fw-bold">{s.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="fs-7 text-dark dark:text-white text-opacity-70">
                    Not sure which class is right for you?{" "}
                    <BookingButton className="uc-link fw-bold">
                      Get in touch
                    </BookingButton>{" "}
                    and we&apos;ll help you find the best fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="section panel overflow-hidden">
          <div className="section-outer panel pb-6 xl:pb-9">
            <div className="container max-w-lg">
              <div className="panel">
                <h2 className="h4 sm:h3 lg:h2 m-0 text-center mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="panel p-3 sm:p-4 xl:p-6 lg:max-w-750px m-auto rounded-2 bg-secondary dark:bg-gray-800">
                  <ul className="vstack gap-4">
                    {[
                      {
                        q: "Do I need any experience to join the ladies-only classes?",
                        a: "Not at all. Our ladies-only taekwondo classes in Maidenhead are open to complete beginners. You start at white belt and progress at your own pace. Our instructors will guide you every step of the way.",
                      },
                      {
                        q: "Are the classes really taught by female instructors?",
                        a: "Yes. All of our ladies-only classes are taught exclusively by experienced female instructors who are registered with British Taekwondo, World Taekwondo, and Kukkiwon. They are fully insured and DBS checked.",
                      },
                      {
                        q: "What should I wear to my first class?",
                        a: "Just wear something comfortable you can move in; leggings and a t-shirt are perfect. When you join, we provide a free uniform (dobok). No special footwear is needed as taekwondo is practised barefoot.",
                      },
                      {
                        q: "Is the ladies-only class suitable for all ages?",
                        a: "Yes. Our ladies-only martial arts classes in Maidenhead welcome women from their teens through to their 60s and beyond. Taekwondo is a low-impact sport that can be adapted to all fitness levels.",
                      },
                      {
                        q: "How close are you to Windsor?",
                        a: "Our venue at 4 Marlow Rd, Maidenhead is approximately 5–10 minutes by car from Windsor. We serve many members from Windsor, Slough, Taplow, and Cookham.",
                      },
                    ].map((item, i) => (
                      <li key={i} className="vstack gap-1 border-bottom pb-4 last:border-0 last:pb-0">
                        <h3 className="h6 lg:h5 m-0 fw-bold">{item.q}</h3>
                        <p className="fs-6 opacity-70 dark:opacity-80 m-0">{item.a}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Internal links */}
        <div className="section panel overflow-hidden">
          <div className="section-outer panel pb-6 xl:pb-9">
            <div className="container max-w-lg">
              <p className="fs-6 text-center text-dark dark:text-white text-opacity-70">
                Also see:{" "}
                <Link href="/maidenhead-taekwondo" className="uc-link fw-bold">
                  Taekwondo classes in Maidenhead
                </Link>{" "}
                &bull;{" "}
                <Link href="/windsor-taekwondo" className="uc-link fw-bold">
                  Taekwondo classes in Windsor
                </Link>
              </p>
            </div>
          </div>
        </div>

        <Cta />
      </div>
      <Footer1 />
    </div>
  );
}
