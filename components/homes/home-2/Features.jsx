"use client";
import { features } from "@/data/features";
import React from "react";
import Image from "next/image";
import ScrollingLogos from "./ScrollingLogos"; // Import from same directory
import { openContactModal } from "@/utlis/toggleContactModal"; // Import the modal function

export default function Features() {
  return (
    <div
      id="main_features"
      className="key-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            {/* Add the scrolling logos component here */}
            <div 
             className="panel vstack items-center gap-2 xl:gap-3 mb-3 sm:mb-6 xl:mb-7 max-w-700px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
              <h3 className="h3 sm:h3 l:h2 m-0">
                Our Trusted Partners
              </h3>
            </div>
            <div className="brands-container mb-8 opacity-75">
              <ScrollingLogos />
            </div>
            <br />
            <br />
            <br />
            <br />
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 max-w-700px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 xl:h1 m-0">
                Windsor Taekwondo <br />
                is for everyone!
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                All sports should be accessible to everyone, regardless of age or ability. 
                That's why at Windsor Taekwondo we offer classes for all ages and abilities, from 4 years old to adults. 
                Our classes are designed to be inclusive and welcoming, so everyone can join in the fun! <br />
              </p>
            </div>
            <div className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4">
              {features.map((feature, index) => (
                <div key={index}>
                  <div
                    className="feature-item panel px-3 lg:px-4 py-4 rounded-2 bg-secondary dark:bg-gray-800"
                    data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                  >
                    <div className="vstack gap-4 h-100">
                      <div className="panel w-100 rounded lg:rounded-2 overflow-hidden">
                        <Image
                          src={feature.imgSrc}
                          width={780}
                          height={728}
                          alt={feature.imgAlt}
                        />
                      </div>
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100">
                          <div>
                            <div className="panel vstack gap-2">
                              <h3 className="h4 m-0">{feature.title}</h3>
                              <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                {feature.description}
                              </p>
                              {feature.linkText && (
                                <a
                                  href={feature.linkHref}
                                  className="uc-link fw-bold hstack gap-narrow"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    if (feature.onClick === "openContactModal") {
                                      openContactModal();
                                    }
                                  }}
                                  style={{ cursor: 'pointer' }}
                                >
                                  <span>{feature.linkText}</span>
                                  <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}