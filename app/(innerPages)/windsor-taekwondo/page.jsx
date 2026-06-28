import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";
import Cta from "@/components/homes/home-2/Cta";
import Link from "next/link";
import BookingButton from "@/components/common/BookingButton";

export const metadata = {
  title: "Taekwondo Classes near Windsor | Windsor Taekwondo | Martial Arts Windsor",
  description:
    "Windsor Taekwondo offers taekwondo and martial arts classes near Windsor for kids, adults, and ladies-only groups. Located just 5 minutes away in Maidenhead. Book a free trial today.",
  keywords:
    "Windsor taekwondo, taekwondo Windsor, martial arts Windsor, Windsor martial arts, taekwondo classes Windsor, kids taekwondo Windsor, ladies taekwondo Windsor, taekwondo near Windsor",
  openGraph: {
    title: "Taekwondo Classes near Windsor | Windsor Taekwondo",
    description:
      "Taekwondo and martial arts classes for kids, adults, and ladies-only groups near Windsor. Just 5 minutes away in Maidenhead. Free trial class available.",
    url: "https://windsortaekwondo.com/windsor-taekwondo",
    siteName: "Windsor Taekwondo",
    images: [
      {
        url: "https://windsortaekwondo.com/assets/images/template/hero-two.png",
        width: 1280,
        height: 941,
        alt: "Taekwondo classes near Windsor, Windsor Taekwondo",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taekwondo Classes near Windsor | Windsor Taekwondo",
    description:
      "Taekwondo and martial arts for kids, adults, and ladies near Windsor. Free trial class available.",
    images: ["https://windsortaekwondo.com/assets/images/template/hero-two.png"],
    site: "@WindsorTKD",
  },
  alternates: {
    canonical: "https://windsortaekwondo.com/windsor-taekwondo",
  },
};

export default function TaekwondoWindsorPage() {
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
                    Taekwondo &amp; Martial Arts near Windsor
                  </h1>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 max-w-650px">
                    Windsor Taekwondo is the closest taekwondo and martial arts club to Windsor, just 5–10 minutes away in Maidenhead. Kids, adults, and ladies-only classes available.
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
                    The #1 Choice for Windsor Residents
                  </h2>
                  <div className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70 vstack gap-4">
                    <p>
                      Windsor Taekwondo is the leading <strong>martial arts club serving Windsor</strong> and the surrounding area. Our venue at <strong>4 Marlow Rd, Maidenhead SL6 7YR</strong> is just 5–10 minutes by car from Windsor town centre, and is easily accessible via the A308 and A4. We welcome members from Windsor, Old Windsor, Eton, Slough, Taplow, and beyond.
                    </p>
                    <p>
                      Our <strong>Windsor taekwondo</strong> students train under expert instructors who are registered with British Taekwondo, World Taekwondo, and Kukkiwon, the highest governing bodies in the sport. We offer <strong>kids taekwondo</strong> (from age 4), <strong>adults&apos; classes</strong>, and dedicated <strong>ladies-only martial arts</strong> sessions taught by female instructors.
                    </p>
                    <p>
                      If you&apos;re searching for <strong>martial arts near Windsor</strong>, there&apos;s no closer or more established club than Windsor Taekwondo. We&apos;ve built a thriving community of students from Windsor and Maidenhead who train together, grow together, and support one another every step of the way.
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
                  What&apos;s Available for Windsor Students
                </h2>
                <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-3 g-3">
                  {[
                    {
                      title: "Kids Taekwondo (4+)",
                      desc: "Engaging, structured classes that build confidence, focus, and coordination in children from age 4. All instructors are DBS checked and experienced with young learners.",
                    },
                    {
                      title: "Ladies-Only Classes",
                      desc: "Dedicated sessions for women, taught by female instructors only. Perfect for Windsor residents looking for a safe, welcoming space to learn self-defence and get fit.",
                    },
                    {
                      title: "Adults & Mixed Classes",
                      desc: "Whether you're a complete beginner or an experienced practitioner, our adult classes in Maidenhead are ideal for Windsor residents looking to get into martial arts.",
                    },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="panel vstack gap-2 p-4 lg:py-6 rounded-2 bg-white dark:bg-gray-900 h-100">
                        <h3 className="h5 lg:h4 m-0">{item.title}</h3>
                        <p className="fs-6 opacity-70 dark:opacity-80">{item.desc}</p>
                        <BookingButton className="uc-link fw-bold hstack gap-narrow mt-auto">
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
                    <h2 className="h3 lg:h2 m-0">Getting Here from Windsor</h2>
                    <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                      We&apos;re just a short drive from Windsor via the A308. Free parking is available near the venue.
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
                      <span>Get directions on Google Maps</span>
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
                <Link href="/maidenhead-taekwondo" className="uc-link fw-bold">
                  Taekwondo classes in Maidenhead
                </Link>{" "}
                &bull;{" "}
                <Link href="/maidenhead-ladies-taekwondo" className="uc-link fw-bold">
                  Ladies-only classes
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
