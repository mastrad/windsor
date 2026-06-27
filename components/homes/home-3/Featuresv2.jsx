import { features14 } from "@/data/features";
import React from "react";
import Image from "next/image";

export default function Featuresv2() {
  return (
    <div id="main_features" className="main-features section panel">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 lg:gap-8">
              {features14.map((featurev2, i) => (
                <React.Fragment key={i}>
                  <div
                    className="feature-item panel"
                    data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                  >
                    <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
                      <div className="col-12 sm:col-6 order-0 lg:order-1">
                        <div className="panel w-100">
                          <Image
                            src={featurev2.imgSrc}
                            width={780}
                            height={728}
                            alt={featurev2.altText}
                            className="rounded-2"
                          />
                        </div>
                      </div>
                      <div className="col-12 sm:col-6 order-1 lg:order-0">
                        <div className="panel vstack justify-between gap-4 sm:gap-6 h-100">
                          <div>
                            <div className="panel vstack gap-2">
                              <span className="fs-6 fw-bold m-0 text-primary">
                                {featurev2.step}
                              </span>
                              <h3 className="h4 lg:h3 xl:h2 m-0">
                                {featurev2.title}
                              </h3>
                              <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                                {featurev2.description}
                              </p>
                              {featurev2.link && (
                                <a
                                  href={featurev2.link.href}
                                  className="uc-link fw-bold hstack gap-narrow"
                                >
                                  <span>{featurev2.link.text}</span>
                                  <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                </a>
                              )}
                            </div>
                          </div>
                          <div>
                            <div className="p-3 panel vstack gap-3 rounded border">
                              <p className="fs-6 dark:text-white">
                                {featurev2.testimonial.quote}
                              </p>
                              <div className="panel hstack gap-1">
                                <Image
                                  className="w-40px rounded-circle"
                                  src={featurev2.testimonial.imgSrc}
                                  width={150}
                                  height={150}
                                  alt={featurev2.testimonial.name}
                                />
                                <div className="panel vstack items-start gap-0">
                                  <h6 className="h6 m-0">
                                    {featurev2.testimonial.name}
                                  </h6>
                                  <span className="fs-7 opacity-70">
                                    {featurev2.testimonial.role}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {i !== features14.length - 1 && (
                    <hr
                      className="border-gray-100 dark:border-opacity-15 m-0 opacity-100"
                      data-anime="onview: -200; width: [0, '100%']; easing: easeInOutExpo; duration: 750; delay: 100;"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
