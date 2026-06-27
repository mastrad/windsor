import Home2 from "./(homes)/home-2/page";
export const metadata = {
  title:
    "Windsor Taekwondo | Taekwondo Classes in Windsor & Maidenhead",
  description:
    "Windsor Taekwondo offers taekwondo and martial arts classes in Windsor and Maidenhead for kids, adults, and ladies-only groups. Book a free trial class today.",
  openGraph: {
    title: "Windsor Taekwondo | Taekwondo Classes in Windsor & Maidenhead",
    description:
      "Taekwondo and martial arts classes for kids, adults, and ladies-only groups in Windsor and Maidenhead. Free trial class available.",
    url: "https://windsortaekwondo.com",
    siteName: "Windsor Taekwondo",
    images: [
      {
        url: "https://windsortaekwondo.com/assets/images/template/hero-two.png",
        width: 1280,
        height: 941,
        alt: "Windsor Taekwondo — martial arts classes in Windsor and Maidenhead",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Windsor Taekwondo | Taekwondo Classes in Windsor & Maidenhead",
    description:
      "Taekwondo and martial arts classes for kids, adults, and ladies-only groups in Windsor and Maidenhead. Free trial class available.",
    images: ["https://windsortaekwondo.com/assets/images/template/hero-two.png"],
    site: "@WindsorTKD",
  },
  alternates: {
    canonical: "https://windsortaekwondo.com",
  },
};
export default function HomePage2() {
  return (
    <>
      <Home2 />
    </>
  );
}
