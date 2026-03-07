import { panelsData } from "@/data/facts";
import React from "react";
import Image from "next/image";
export default function About2() {
  return (
    <div
      id="about_us"
      className="about-us section panel overflow-hidden"
      data-anime="onview: -100; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-gray-800">
        <div
          className="d-none lg:d-block"
          data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 350;"
        >
          <div className="position-absolute bottom-0 start-0 ms-n8 mb-6">
            <Image
              className="w-150px xl:w-250px d-block dark:d-none"
              alt="walking"
              src="/assets/images/template/taekwondo-upper-block.svg"
              width="224"
              height="226"
            />
            <Image
              className="w-150px xl:w-250px d-none dark:d-block"
              alt="walking-dark"
              src="/assets/images/template/walking-dark.svg"
              width="224"
              height="227"
            />
          </div>
        </div>
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <div className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                <h2 className="mb-4">Why Choose Windsor Taekwondo?</h2>
                <p className="mb-5">
                  At Windsor Taekwondo, we believe martial arts should be accessible to everyone. Whether you are new to martial arts or looking to sharpen your skills, our classes in Windsor and Maidenhead cater to all ages and abilities. From energetic kids taekwondo in Windsor and Maidenhead to dynamic adult programs, our experienced instructors create a welcoming environment that inspires growth, discipline, and confidence. We even offer ladies-only taekwondo classes in Windsor and Maidenhead, taught exclusively by female instructors. Whether you're looking for kids martial arts in Windsor, ladies only martial arts in Maidenhead, or a supportive community to join, Windsor Taekwondo is your number one choice.
                </p>

            <h2 className="mt-8 mb-4">Classes for All: Kids, Adults, and Ladies-Only</h2>
            <p className="mb-5">
              Windsor Taekwondo is proud to offer a variety of classes designed for every student. Our kids taekwondo classes in Maidenhead and Windsor build focus, fitness, and confidence from a young age. Our adult and mixed-age sessions offer the perfect challenge for beginners and experienced martial artists alike. For women looking for a supportive space, our ladies-only martial arts classes in Windsor and Maidenhead deliver empowering training led by female instructors. Every class is structured to be fun, professional, and rewarding, helping students achieve their personal best.
            </p>

            <h2 className="mt-8 mb-4">Passionate Instructors, Proven Results</h2>
            <p className="mb-5">
              Our instructors at Windsor Taekwondo live and breathe martial arts. With decades of combined experience, they are passionate about helping every student succeed—whether your goal is to build confidence, improve fitness, compete, or simply have fun. From kids martial arts in Windsor to ladies only martial arts in Maidenhead, our programs are designed to deliver real, lasting results. We believe Taekwondo is more than a sport—it’s a path to personal excellence.
            </p>

            <h2 className="mt-8 mb-4">A Community That Supports You</h2>
            <p className="mb-5">
              Joining Windsor Taekwondo means joining a community that truly supports you. Parents searching for kids taekwondo in Maidenhead and Windsor love our friendly environment and the positive changes they see in their children. Adults seeking a new challenge find our classes both engaging and rewarding. Women interested in ladies-only taekwondo in Windsor or Maidenhead appreciate our focus on empowerment and inclusivity. We are more than a martial arts school—we are a family where everyone is welcome.
            </p>

            <h2 className="mt-8 mb-4">Your Journey Starts Here</h2>
            <p className="mb-5">
              Whether you're looking for kids martial arts in Maidenhead, kids taekwondo in Windsor, or a supportive ladies-only martial arts program, Windsor Taekwondo is ready to help you begin your journey. Our classes are designed to inspire, challenge, and transform. Discover why families and individuals alike choose Windsor Taekwondo as the number one martial arts school in Windsor and Maidenhead. Book your free trial class and come say hi!
            </p>
          </div>
          <div className="panel mt-6">
            <div className="row child-cols-6 lg:child-cols-4 justify-center g-3 col-match">
              {panelsData.map((panel, index) => (
                <div key={index}>
                  <div className="panel vstack gap-1">
                    <h4 className="h2 xl:h1 m-0">
                      <span data-anime={panel.animationData}>
                        {panel.value}
                      </span>
                      {panel.suffix && panel.suffix}
                    </h4>
                    <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70 text-nowrap">
                      {panel.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
