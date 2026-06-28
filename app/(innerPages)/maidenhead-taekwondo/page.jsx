import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";
import Cta from "@/components/homes/home-2/Cta";
import Link from "next/link";
import BookingButton from "@/components/common/BookingButton";

export const metadata = {
  title: "Taekwondo Classes in Maidenhead | Windsor Taekwondo | Martial Arts Maidenhead",
  description:
    "Windsor Taekwondo offers taekwondo and martial arts classes in Maidenhead for kids, adults, and ladies-only groups. Located at 4 Marlow Rd, Maidenhead SL6 7YR. Book a free trial today.",
  keywords:
    "taekwondo Maidenhead, Maidenhead taekwondo, martial arts Maidenhead, Maidenhead martial arts, taekwondo classes Maidenhead, kids taekwondo Maidenhead, ladies taekwondo Maidenhead",
  openGraph: {
    title: "Taekwondo Classes in Maidenhead | Windsor Taekwondo",
    description:
      "Taekwondo and martial arts classes for kids, adults, and ladies-only groups in Maidenhead. Located at 4 Marlow Rd, Maidenhead SL6 7YR. Free trial class available.",
    url: "https://windsortaekwondo.com/maidenhead-taekwondo",
    siteName: "Windsor Taekwondo",
    images: [
      {
        url: "https://windsortaekwondo.com/assets/images/template/hero-two.png",
        width: 1280,
        height: 941,
        alt: "Taekwondo classes in Maidenhead, Windsor Taekwondo",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taekwondo Classes in Maidenhead | Windsor Taekwondo",
    description:
      "Taekwondo and martial arts for kids, adults, and ladies in Maidenhead. Free trial class available.",
    images: ["https://windsortaekwondo.com/assets/images/template/hero-two.png"],
    site: "@WindsorTKD",
  },
  alternates: {
    canonical: "https://windsortaekwondo.com/maidenhead-taekwondo",
  },
};

export default function TaekwondoMaidenheadPage() {
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
                    Taekwondo Classes in Maidenhead
                  </h1>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 max-w-650px">
                    Kids, adults, and ladies-only taekwondo and martial arts classes in Maidenhead. All ages, all abilities. Beginners always welcome.
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

        {/* About */}
        <div className="section panel overflow-hidden">
          <div className="section-outer panel py-6 xl:py-9">
            <div className="container max-w-lg">
              <div className="section-inner panel">
                <div className="panel vstack gap-4 max-w-750px mx-auto">
                  <h2 className="h3 lg:h2 m-0 text-center">
                    Maidenhead&apos;s Leading Taekwondo Club
                  </h2>
                  <div className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70 vstack gap-4">
                    <p>
                      Windsor Taekwondo is Maidenhead&apos;s premier martial arts club, offering <strong>taekwondo classes in Maidenhead</strong> for children (4+), adults, and women-only groups. We are based at <strong>4 Marlow Rd, Maidenhead SL6 7YR</strong>, making us centrally located and easily accessible from across Maidenhead and the surrounding areas.
                    </p>
                    <p>
                      Our <strong>martial arts classes in Maidenhead</strong> are run by expert instructors registered with British Taekwondo, World Taekwondo, and Kukkiwon. Whether you&apos;re brand new to martial arts or looking to continue your training, we have a class that fits your goals: fitness, self-defence, competition, or simply something fun to do with the family.
                    </p>
                    <p>
                      As the number one choice for <strong>Maidenhead taekwondo</strong>, we pride ourselves on a welcoming, family-friendly club where every member is supported from their very first class.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Classes */}
        <div className="section panel overflow-hidden bg-secondary dark:bg-gray-800">
          <div className="section-outer panel py-6 xl:py-9">
            <div className="container max-w-xl">
              <div className="section-inner panel">
                <h2 className="h3 lg:h2 m-0 text-center mb-6">
                  Classes Available in Maidenhead
                </h2>
                <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 justify-center g-3">
                  {[
                    {
                      title: "Kids Taekwondo (4+)",
                      desc: "Fun, structured classes for children from age 4. Builds focus, discipline, confidence, and coordination in a safe, nurturing environment. Instructors are fully DBS checked.",
                    },
                    {
                      title: "Ladies-Only Classes",
                      desc: "A dedicated space for women, taught exclusively by female instructors. Covers self-defence, fitness, and taekwondo technique in a supportive, relaxed environment.",
                    },
                    {
                      title: "Adults & Mixed Classes",
                      desc: "For adults of all levels, from complete beginners to experienced practitioners. Train alongside a motivated community and progress through the belt system at your own pace.",
                    },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="panel vstack gap-2 p-4 lg:py-6 rounded-2 bg-white dark:bg-gray-900 h-100">
                        <h3 className="h5 lg:h4 m-0">{item.title}</h3>
                        <p className="fs-6 opacity-70 dark:opacity-80">{item.desc}</p>
                        <BookingButton link className="uc-link fw-bold hstack gap-narrow mt-auto">
                          <span>Book a free trial</span>
                          <i className="icon icon-1 unicon-arrow-right" />
                        </BookingButton>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Schedule */}
        <div className="section panel overflow-hidden">
          <div className="section-outer panel py-6 xl:py-9">
            <div className="container max-w-lg">
              <div className="section-inner panel">
                <div className="row child-cols-12 lg:child-cols-6 g-4 lg:g-6 items-start">
                  <div className="vstack gap-3">
                    <h2 className="h3 lg:h2 m-0">Location</h2>
                    <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                      Our Maidenhead taekwondo classes are held at:
                    </p>
                    <address className="not-italic vstack gap-1 fs-6 lg:fs-5 fw-medium">
                      <span>Windsor Taekwondo</span>
                      <span>4 Marlow Rd</span>
                      <span>Maidenhead</span>
                      <span>SL6 7YR</span>
                    </address>
                    <a
                      href="https://maps.app.goo.gl/rBVBB7eqkNHC9CEg6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uc-link fw-bold hstack gap-narrow"
                    >
                      <span>View on Google Maps</span>
                      <i className="icon icon-1 unicon-arrow-right" />
                    </a>
                  </div>
                  <div className="vstack gap-3">
                    <h2 className="h3 lg:h2 m-0">Class Times</h2>
                    <div className="panel rounded-2 bg-secondary dark:bg-gray-800 p-4">
                      <ul className="vstack gap-3">
                        {[
                          { day: "Tuesday", time: "17:15 – 18:15" },
                          { day: "Friday", time: "19:45 – 20:45" },
                          { day: "Saturday", time: "11:00 – 12:00" },
                        ].map((s, i) => (
                          <li key={i} className="hstack justify-between fs-6 fw-medium border-bottom pb-3 last:border-0 last:pb-0">
                            <span>{s.day}</span>
                            <span className="text-primary fw-bold">{s.time}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <BookingButton className="btn btn-primary text-white btn-md w-fit">
                      Book your free class
                    </BookingButton>
                  </div>
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
                <Link href="/maidenhead-ladies-taekwondo" className="uc-link fw-bold">
                  Ladies-only classes in Maidenhead
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
