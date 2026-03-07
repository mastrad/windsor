"use client";
import { tiers3 } from "@/data/pricing";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true); // Set to true as default
  const [currency, setCurrency] = useState("USD");
  const [userLocation, setUserLocation] = useState("US"); // Default to US
  
  // Price mapping for different currencies
  const priceMappings = {
    monthly: {
      Solo: { USD: "$49", GBP: "£39", EUR: "€49" },
      Business: { USD: "$79", GBP: "£59", EUR: "€69" },
      Enterprise: { USD: "$249", GBP: "£199", EUR: "€219" }
    },
    yearly: {
      Solo: { USD: "$39", GBP: "£29", EUR: "€39" },
      Business: { USD: "$59", GBP: "£49", EUR: "€59" },
      Enterprise: { USD: "$129", GBP: "£99", EUR: "€119" }
    }
  };

  // Flag mapping for currency codes
  const flagMapping = {
    USD: "us",
    GBP: "gb",
    EUR: "eu"
  };

  // Detect user's location based on IP on component mount
  useEffect(() => {
    const detectUserLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        // Set default currency based on country code
        if (data.country === 'GB') {
          setUserLocation('GB');
          setCurrency('GBP');
        } else if (['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 
                    'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'].includes(data.country)) {
          setUserLocation('EU');
          setCurrency('EUR');
        } else {
          setUserLocation('US');
          setCurrency('USD');
        }
      } catch (error) {
        console.error('Error detecting location:', error);
        // Fallback to USD if there's an error
        setUserLocation('US');
        setCurrency('USD');
      }
    };

    detectUserLocation();
  }, []);

  // Get price based on plan, currency and billing cycle
  const getPrice = (planTitle) => {
    const pricingType = isYearly ? 'yearly' : 'monthly';
    return priceMappings[pricingType][planTitle][currency];
  };
  
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute rotate-45"
          style={{ top: "30%", left: "18%" }}
        >
          <Image
            className="w-32px text-gray-900 dark:text-white"
            src="/assets/images/template/star-1.svg"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
          />
        </div>
        <div
          className="position-absolute rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <Image
            className="w-24px text-gray-900 dark:text-white"
            src="/assets/images/template/star-2.svg"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
          />
        </div>
      </div>
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
            <div className="vstack items-center gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Simple, scalable pricing.
              </h1>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                No extra charges. No hidden fees.
              </p>
              
              {/* Plan Toggle */}
              <ul
                className="uc-switcher-nav nav-x gap-0 p-narrow border rounded-2 fs-7 fw-medium"
                data-uc-switcher="connect: .pricing-switcher;"
              >
                <li className={!isYearly ? "uc-active" : ""}>
                  <a
                    onClick={() => setIsYearly(false)}
                    className="text-none w-128px cstack p-1"
                  >
                    Monthly
                  </a>
                </li>
                <li className={isYearly ? "uc-active" : ""}>
                  <a
                    onClick={() => setIsYearly(true)}
                    className="text-none w-128px cstack p-1"
                  >
                    Yearly
                  </a>
                </li>
              </ul>
              
              {/* Currency Toggle - Smaller with Flags */}
              <ul className="uc-switcher-nav nav-x gap-0 p-0.5 rounded-2 fs-7 fw-medium mt-2" style={{ height: "32px" }}>
                <li className={currency === "USD" ? "uc-active" : ""}>
                  <a
                    onClick={() => setCurrency("USD")}
                    className="text-none w-16 h-6 cstack py-0.5 px-1 hstack gap-1"
                  >
                    <div className="w-4 h-4 overflow-hidden rounded-full flex-shrink-0">
                      <img 
                        src={`https://cdn.jsdelivr.net/gh/HatScripts/circle-flags/flags/${flagMapping.USD}.svg`} 
                        alt="US Flag" 
                        width="16" 
                        height="16"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    </div>
                    <span className="fs-8">USD</span>
                  </a>
                </li>
                <li className={currency === "GBP" ? "uc-active" : ""}>
                  <a
                    onClick={() => setCurrency("GBP")}
                    className="text-none w-16 h-6 cstack py-0.5 px-1 hstack gap-1"
                  >
                    <div className="w-4 h-4 overflow-hidden rounded-full flex-shrink-0">
                      <img 
                        src={`https://cdn.jsdelivr.net/gh/HatScripts/circle-flags/flags/${flagMapping.GBP}.svg`} 
                        alt="UK Flag" 
                        width="16" 
                        height="16"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    </div>
                    <span className="fs-8">GBP</span>
                  </a>
                </li>
                <li className={currency === "EUR" ? "uc-active" : ""}>
                  <a
                    onClick={() => setCurrency("EUR")}
                    className="text-none w-16 h-6 cstack py-0.5 px-1 hstack gap-1"
                  >
                    <div className="w-4 h-4 overflow-hidden rounded-full flex-shrink-0">
                      <img 
                        src={`https://cdn.jsdelivr.net/gh/HatScripts/circle-flags/flags/european_union.svg`} 
                        alt="European Union Flag" 
                        width="16" 
                        height="16"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    </div>
                    <span className="fs-8">EUR</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="uc-switcher pricing-switcher mt-4">
              <div className="uc-active">
                <div
                  className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});"
                >
                  {tiers3.map((tier, index) => (
                    <div key={index} className="tier-wrapper">
                      <div className="tier panel vstack gap-2 xl:gap-4 px-3 py-4 sm:p-4 lg:p-6 rounded lg:rounded-2 bg-secondary dark:bg-gray-800">
                        {tier.isPopular && (
                          <span className="position-absolute top-0 ltr:end-0 rtl:start-0 m-2 d-inline-flex py-narrow px-1 bg-primary rounded-1 text-white fs-7 fw-medium">
                            Popular
                          </span>
                        )}
                        <div className="panel">
                          <h3 className="title h5 sm:h4 dark:text-white">
                            {tier.title}
                          </h3>
                          <p className="desc dark:text-white opacity-70 dark:opacity-80">
                            {tier.description}
                          </p>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-narrow">
                            <h5 className="title h3 sm:h2 m-0 dark:text-white">
                              {getPrice(tier.title)}
                            </h5>
                            <span className="fs-7 opacity-70">
                              {isYearly && (tier.title === "Solo" || tier.title === "Business")
                                ? "Per month, billed yearly"
                                : tier.priceDetails}
                            </span>
                            <div className="vstack gap-1 justify-center text-center mt-3">
                              {tier.title === "Enterprise" ? (
                                <Link
                                  href="/contact"
                                  className="btn btn-md sm:btn-sm lg:btn-md btn-dark text-white"
                                >
                                  Contact us
                                </Link>
                              ) : (
                                <Link
                                  href={`/email-verification?ref=${isYearly ? "yearly" : "monthly"}_${tier.title === "Solo" ? "1" : "2"}`}
                                  className="btn btn-md sm:btn-sm lg:btn-md btn-primary text-white"
                                >
                                  {tier.linkText}
                                </Link>
                              )}
                              <span className="fs-7 opacity-70 min-h-24px">
                                {tier.linkSubtext}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-2">
                            <span className="fs-6 fw-bold dark:text-white">
                              {tier.title === "Solo"
                                ? "Key features:"
                                : `Everything in ${
                                    tier.title === "Business" ? "Solo" : "Business"
                                  }, plus:`}
                            </span>
                            {tier.features.map((feature, idx) => (
                              <div key={idx} className="hstack gap-1 fs-7">
                                <i className="cstack w-16px h-16px bg-primary text-white rounded-circle unicon-checkmark fw-bold" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p
            className="text-center text-gray-900 dark:text-white text-opacity-70 mt-4 sm:mt-6 xl:mt-8"
            data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 0;"
          >
            Prices include any applicable taxes.
          </p>
        </div>
      </div>
    </div>
  );
}