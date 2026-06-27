export const panelData = [
  {
    id: 1,
    lightIcon: "/assets/images/template/icon-diamond.svg",
    darkIcon: "/assets/images/template/icon-diamond-dark.svg",
    altText: "impact-icon",
    title: "Make an impact",
    description:
      "We’re building something big. Something that has the power to change the trajectory of any sized business for the better.",
  },
  {
    id: 2,
    lightIcon: "/assets/images/template/icon-trophy.svg",
    darkIcon: "/assets/images/template/icon-trophy-dark.svg",
    altText: "crown-icon",
    title: "Learn",
    description:
      "Teams are masters of their craft though we’re all experts in our respective fields, we always make time to expand our minds.",
  },
  {
    id: 3,
    lightIcon: "/assets/images/template/icon-crown.svg",
    darkIcon: "/assets/images/template/icon-crown-dark.svg",
    altText: "empathy-icon",
    title: "Empathy",
    description:
      "We strive to be empathetic to every customer and colleague and by doing so we provide a better experience for all.",
  },
];

export const features = [
  {
    id: 4,
    imgSrc: "/assets/images/template/ladies-class.png",
    imgAlt: "Ladies-only taekwondo martial arts classes in Windsor and Maidenhead",
    title: "Ladies-only Classes",
    description:
      "Our ladies-only classes at Windsor Taekwondo are designed to provide a comfortable and supportive environment. Taught by experienced female instructors, fully insured and registered with British Taekwondo, World Taekwondo and Kukkiwon.",
    linkText: "Try a free class",
    linkHref: "#",
    onClick: "openContactModal", // Add this property to specify the function name
    },
  {
    id: 5,
    imgSrc: "/assets/images/template/kids-class.png",
    imgAlt: "Windsor Taekwondo martial arts for kids in Windsor and Maidenhead",
    title: "Kids Classes",
    description:
      "Kids classes (4yrs+) at Windsor Taekwondo are fun and engaging, while also teaching important life skills such as discipline, respect, and self-control. Our instructors are experienced in working with children and are fully insured and DBS checked.",
    linkText: "Try a free class",
    linkHref: "#",
    onClick: "openContactModal",
    },
  {
    id: 6,
    imgSrc: "/assets/images/template/adults-class.png",
    imgAlt: "Windsor Taekwondo martial arts for adults in Windsor and Maidenhead",
    title: "Adults & Mixed Classes",
    description:
      "Windsor Taekwondo's adult and mixed classes are designed for students of all levels, from beginners to advanced practitioners. Our experienced instructors provide personalized instruction to help each student reach their full potential.",
    linkText: "Try a free class",
    linkHref: "#",
    onClick: "openContactModal",
    },
];

export const features2 = [
  {
    imgSrc: "/assets/images/template/courtesy.svg",
    imgAlt: "Respect in Taekwondo",
    title: "Courtesy (Ye Ui)",
    description:
      "Respect for others, shown through politeness, humility, and good manners, both in and out of training.",
    backgroundColor: "bg-white dark:bg-gray-800",
  },
  {
    imgSrc: "/assets/images/template/integrity.svg",
    imgAlt: "Integrity in Taekwondo",
    title: "Integrity (Yom Chi)",
    description:
      "Honesty and moral uprightness, maintaining a strong ethical code in actions and decisions.",
    backgroundColor: "bg-primary text-white",
  },
  {
    imgSrc: "/assets/images/template/perseverance.svg",
    imgAlt: "Perseverance in Taekwondo",
    title: "Perseverance (In Nae)",
    description:
      "Persistence and determination to overcome challenges, and master techniques and personal growth.",
    backgroundColor: "bg-white dark:bg-gray-800",
  },
  {
    imgSrc: "/assets/images/template/self-control.svg",
    imgAlt: "Self-Control in Taekwondo",
    title: "Self-Control (Guk Gi)",
    description:
      "Discipline over one’s emotions and actions is essential for both combat and life in general.",
    backgroundColor: "bg-white dark:bg-gray-800",
  },
];

export const features3 = [
  {
    id: 1,
    imgSrc: "/assets/images/template/subscriptions.svg",
    altText: "Add Recurring Revenue",
    step: "01.",
    title: "Add Recurring Revenue",
    description: `Sell warranties and service guarantees on a subscription basis to increase your recurring revenue.`,
    link: {
      href: "/pricing",
      text: "Try it free",
    },
    testimonial: {
      quote: `“Half of our business comes from one-off projects, and it's great to turn those into predictable monthly cash generators by up-selling warranties on our work for a monthly fee.”`,
      imgSrc: "/assets/images/avatars/01.png",
      name: "Mark Zellers",
      role: "Director of Business Development",
    },
  },
  {
    id: 2,
    imgSrc: "/assets/images/template/estimates.svg",
    altText: "Win More Contracts",
    step: "02.",
    title: "Win More Contracts",
    description: `Send professionally crafted quotes, estimates and proposals using pre-created templates. Efficient and professional.`,
    link: {
      href: "/pricing",
      text: "Try it free",
    },
    testimonial: {
      quote: `“I can create custom quotations with few clicks with dynamic products and prices and send it out to our customers instantly.”`,
      imgSrc: "/assets/images/avatars/02.png",
      name: "Matt Henderson",
      role: "Client Success Manager",
    },
  },
  {
    id: 3,
    imgSrc: "/assets/images/template/invoices.svg",
    altText: "Get Paid Faster",
    step: "03.",
    title: "Get Paid Faster",
    description: `Automatically turn accepted quotes into invoices, saving you time and headache having to manually create invoices, and with online payments you will always get paid fast.`,
    testimonial: {
      quote: `“This tool elimates the need for manually creating invoices after a quote has been accepted. Saves us time and effort which we can spend on sales instead of admin work.”`,
      imgSrc: "/assets/images/avatars/04.png",
      name: "Natalia Larsson",
      role: "Director of Sales Operations",
    },
  },
  {
    id: 4,
    imgSrc: "/assets/images/template/eSignature.svg",
    altText: "eSign Contracts",
    step: "04.",
    title: "eSignatures",
    description: `Send contracts with the agreed terms and get clients' signatures to avoid misunderstanding of deliverables. Disputes are the last thing you would want to waste your time on.`,
    testimonial: {
      quote: `“Spotwizz removes the need to use another service to manage contracts, it's all done inside the CRM which is very practical and saving us on costs and additional integrations.”`,
      imgSrc: "/assets/images/avatars/03.png",
      name: "Sarah Edrissi",
      role: "Lead Marketing",
    },
  },
];

export const features4 = [
  {
    icon: "unicon-document",
    title: "Proposals",
    description:
      "Send proposals in minutes with pre-built, customizable templates.",
  },
  {
    icon: "unicon-model",
    title: "Quotes",
    description:
      "Quote approved? It automatically becomes an invoice. No action needed from you.",
  },
  {
    icon: "unicon-task-approved",
    title: "Contracts",
    description:
      "Click. Send. Sign. Done. All from within Spotwizz.",
  },
  {
    icon: "unicon-touch-interaction",
    title: "eSignatures",
    description:
      "Keep agreements legally binding eSignatures.",
  },
  {
    icon: "unicon-sub-volume",
    title: "Forms",
    description:
      "Web forms that feed directly into your CRM.",
  },
  {
    icon: "unicon-currency",
    title: "Payments",
    description:
      "Collect payments online and get paid super fast.",
  },
];

export const featureItems = [
  {
    imageSrc: "/assets/images/template/home-four-feature-01.png",
    altText: "Ensuring timely delivery and maximum efficiency",
    title: "Ensuring timely delivery and maximum efficiency",
    description:
      "We offers advanced project management features such as Gantt charts, task dependencies, and resource allocation",
    linkText: "Let's find out",
    icon: "unicon-cloud-download",
    reverseOrder: false,
  },
  {
    imageSrc: "/assets/images/template/home-four-feature-02.png",
    altText: "No more digging endless reports and spreadsheets",
    title: "No more digging endless reports and spreadsheets",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    linkText: "See all spreadsheets",
    icon: "unicon-course",
    reverseOrder: true,
  },
  {
    imageSrc: "/assets/images/template/home-four-feature-03.png",
    altText: "Share files, and communicate with your team in real-time",
    title: "Share files, and communicate with your team in real-time",
    description:
      "You can easily assign tasks, share files, and communicate with your team in real-time, no matter where they are located.",
    linkText: "See apps & integrations",
    icon: "unicon-volume-block-storage",
    reverseOrder: false,
  },
  {
    imageSrc: "/assets/images/template/home-four-feature-04.png",
    altText: "Collaboration is made seamless with Lexend",
    title: "Collaboration is made seamless with Lexend",
    description:
      "Get real-time access to approvals, comments and version tracking. Smart features like variables and conditional logic help you eliminate Tool errors.",
    linkText: "Let's find out",
    icon: "unicon-model",
    reverseOrder: true,
  },
];

export const featureItems2 = [
  {
    order: "order-1 lg:order-0",
    iconSrc: "/assets/images/common/icons/zap.svg",
    alt: "feature-icon",
    title: "Fast and Reliable",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    order: "order-0",
    iconSrc: "/assets/images/common/icons/database.svg",
    alt: "feature-icon",
    title: "Discover Data Everywhere",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    bgClass:
      "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-bottom-end-0 lg:rounded-bottom-0",
  },
  {
    order: "order-2 sm:order-1 lg:order-0",
    iconSrc: "/assets/images/common/icons/puzzle.svg",
    alt: "feature-icon",
    title: "Enrich Data with Context",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    order: "order-1 lg:order-0",
    iconSrc: "/assets/images/common/icons/target.svg",
    alt: "feature-icon",
    title: "Risk Management",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    bgClass:
      "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-start-0 lg:rounded-top-end-0 lg:rounded-start-1-5",
  },
  {
    order: "order-3 lg:order-0",
    iconSrc: "/assets/images/common/icons/line-chart.svg",
    alt: "feature-icon",
    title: "Privacy Compliance",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    order: "order-2 lg:order-0",
    iconSrc: "/assets/images/common/icons/settings.svg",
    alt: "feature-icon",
    title: "Third-Party Management",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    bgClass:
      "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-top-end-0 lg:rounded-top-start-0 lg:rounded-top-end-1-5",
  },
];

export const features5 = [
  {
    iconSrc: "/assets/images/common/icons/zap.svg",
    alt: "feature-icon",
    title: "Drag-and-Drop Interface",
  },
  {
    iconSrc: "/assets/images/common/icons/database.svg",
    alt: "feature-icon",
    title: "Pre-Designed Templates",
  },
  {
    iconSrc: "/assets/images/common/icons/puzzle.svg",
    alt: "feature-icon",
    title: "Fully Responsive Design",
  },
  {
    iconSrc: "/assets/images/common/icons/target.svg",
    alt: "feature-icon",
    title: "Website Customization",
  },
  {
    iconSrc: "/assets/images/common/icons/line-chart.svg",
    alt: "feature-icon",
    title: "UI Elements Library",
  },
  {
    iconSrc: "/assets/images/common/icons/settings.svg",
    alt: "feature-icon",
    title: "Global & Local Styles",
  },
  {
    iconSrc: "/assets/images/common/icons/puzzle.svg",
    alt: "feature-icon",
    title: "Third-Party Integrations",
  },
];

export const features6 = [
  {
    id: 1,
    imgSrc: "/assets/images/template/proposals.svg",
    imgAlt: "Professional proposals in minutes",
    title: "Professional proposals in minutes",
    description:
      "No more back and forth between tools. Create a custom proposal with dynamic pricing tables, and get it signed and approved in minutes.",
    link: null,
  },
  {
    id: 2,
    imgSrc: "/assets/images/template/quotes.svg",
    imgAlt: "Click. Send. Done.",
    title: "Click. Send. Done.",
    description:
      "Automatically turn accepted quotes into invoices, saving you time and headache having to manually create invoices.",
    /* link: { text: "See all integrations", href: "#" }, */ 
  },
  {
    id: 3,
    imgSrc: "/assets/images/template/contracts-and-esignatures.svg",
    imgAlt: "Make agreements legally binding",
    title: "Make agreements legally binding",
    description:
      "Get agreements in writing and signed quickly with legally binding e-Signatures. Create pre-approved templates, content blocks and lock all legal information to prevent costly mistakes.",
    link: null,
  },
  {
    id: 4,
    imgSrc: "/assets/images/template/forms.svg",
    imgAlt: "Forms Integration",
    title: "Forms Integration",
    description:
      "Create web forms that feed directly into your CRM. No more manual data entry, no more mistakes.",
    link: null,
  },
];

export const integrations = [
  {
    title: "Mailchimp",
    description: "Share your ideas with Mailchimp email newsletters.",
    imgSrc: "/assets/images/integrations/mailchimp.png",
    categories: ["Marketing Automation", "Finance", "Spreadsheets"],
  },
  {
    title: "Asana",
    description:
      "Leading work management from daily tasks to strategic initiatives.",
    imgSrc: "/assets/images/integrations/asana.png",
    categories: ["Marketing Automation", "Scheduling", "Project Management"],
  },
  {
    title: "Zapier",
    description: "Send and receive email via a custom Zapier.",
    imgSrc: "/assets/images/integrations/zapier.png",
    categories: ["Marketing Automation", "Scheduling", "Spreadsheets"],
  },
  {
    title: "Bitbucket",
    description: "File sync app that lets you store all of your files online.",
    imgSrc: "/assets/images/integrations/bitbucket.png",
    categories: ["Marketing Automation", "Scheduling", "Project Management"],
  },
  {
    title: "Stripe",
    description:
      "Developer-friendly way to accept payments online and in mobile apps.",
    imgSrc: "/assets/images/integrations/stripe.png",
    categories: ["Marketing Automation", "Finance", "Spreadsheets"],
  },
  {
    title: "Google Drive",
    description: "File sync app that lets you store all of your files online.",
    imgSrc: "/assets/images/integrations/drive.png",
    categories: ["Marketing Automation", "Finance", "Spreadsheets"],
  },
];

export const features7 = [
  {
    order: "order-1 lg:order-0",
    icon: "/assets/images/custom-icons/icon-01.svg",
    title: "Fast and Reliable",
  },
  {
    order: "order-0",
    icon: "/assets/images/custom-icons/icon-02.svg",
    title: "Discover Data Everywhere",
  },
  {
    order: "order-2 sm:order-1 lg:order-0",
    icon: "/assets/images/custom-icons/icon-03.svg",
    title: "Enrich Data with Context",
  },
  {
    order: "order-1 lg:order-0",
    icon: "/assets/images/custom-icons/icon-07.svg",
    title: "Risk Management",
  },
  {
    order: "order-3 lg:order-0",
    icon: "/assets/images/custom-icons/icon-05.svg",
    title: "Privacy Compliance",
  },
  {
    order: "order-2 lg:order-0",
    icon: "/assets/images/custom-icons/icon-06.svg",
    title: "Third-Party Management",
  },
];

export const features8 = [
  {
    imgSrc: "/assets/images/features/home-8-feature-01.png",
    title: "Seamless integrations with your existing tools",
  },
  {
    imgSrc: "/assets/images/features/home-8-feature-05.png",
    title: "Intuitive dashboard for at-a-glance insights",
  },
  {
    imgSrc: "/assets/images/features/home-8-feature-06.png",
    title: "Automated data analysis and reporting",
  },
];

export const features9 = [
  {
    order: "order-1 lg:order-0",
    icon: "/assets/images/custom-icons/home-8-icon-01.svg",
    title: "Fast and Reliable",
  },
  {
    order: "order-0",
    icon: "/assets/images/custom-icons/home-8-icon-02.svg",
    title: "Discover Data Everywhere",
  },
  {
    order: "order-2 sm:order-1 lg:order-0",
    icon: "/assets/images/custom-icons/home-8-icon-03.svg",
    title: "Enrich Data with Context",
  },
  {
    order: "order-1 lg:order-0",
    icon: "/assets/images/custom-icons/home-8-icon-07.svg",
    title: "Risk Management",
  },
  {
    order: "order-3 lg:order-0",
    icon: "/assets/images/custom-icons/home-8-icon-05.svg",
    title: "Privacy Compliance",
  },
  {
    order: "order-2 lg:order-0",
    icon: "/assets/images/custom-icons/home-8-icon-06.svg",
    title: "Third-Party Management",
  },
];

export const features10 = [
  {
    src: "/assets/images/features/home-8-feature-01.png",
    alt: "",
    title: "Seamless integrations with your app tools",
  },
  {
    src: "/assets/images/features/home-8-feature-02.png",
    alt: "",
    title: "Intuitive dashboard for at-a-glance insights",
  },
  {
    src: "/assets/images/features/home-8-feature-03.png",
    alt: "",
    title: "Get more value from your tools",
  },
  {
    src: "/assets/images/features/home-8-feature-04.png",
    alt: "",
    title: "Enrich Data with Risk Management",
  },
  {
    src: "/assets/images/features/home-8-feature-05.png",
    alt: "",
    title: "Scalable plans to fit any business size",
  },
  {
    src: "/assets/images/features/home-8-feature-06.png",
    alt: "",
    title: "Automated data analysis and reporting",
  },
];

export const features11 = [
  {
    order: "order-1 lg:order-0",
    src: "/assets/images/custom-icons/home-8-icon-01.svg",
    alt: "feature-icon",
    title: "Fast and Reliable",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    order: "order-0",
    src: "/assets/images/custom-icons/home-8-icon-02.svg",
    alt: "feature-icon",
    title: "Discover Data Everywhere",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    order: "order-2 sm:order-1 lg:order-0",
    src: "/assets/images/custom-icons/home-8-icon-03.svg",
    alt: "feature-icon",
    title: "Enrich Data with Context",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    order: "order-1 lg:order-0",
    src: "/assets/images/custom-icons/home-8-icon-07.svg",
    alt: "feature-icon",
    title: "Risk Management",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    order: "order-3 lg:order-0",
    src: "/assets/images/custom-icons/home-8-icon-05.svg",
    alt: "feature-icon",
    title: "Privacy Compliance",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    order: "order-2 lg:order-0",
    src: "/assets/images/custom-icons/home-8-icon-06.svg",
    alt: "feature-icon",
    title: "Third-Party Management",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
];

export const features12 = [
  {
    src: "/assets/images/custom-icons/icon-02.svg",
    alt: "icon",
    text: "No Credit Card Required",
    className: "", // No additional class for this item
  },
  {
    src: "/assets/images/custom-icons/icon-07.svg",
    alt: "icon",
    text: "End-to-End Encryption",
    className: "", // No additional class for this item
  },
  {
    src: "/assets/images/custom-icons/icon-02.svg",
    alt: "icon",
    text: "Cutting-edge AI features",
    className: "d-none lg:d-block", // Additional class for this item
  },
];

export const features13 = [
  {
    src: "/assets/images/common/icons/zap.svg",
    alt: "feature-icon",
    title: "Fast Messaging",
  },
  {
    src: "/assets/images/common/icons/database.svg",
    alt: "feature-icon",
    title: "AI-Powered Translation",
  },
  {
    src: "/assets/images/common/icons/line-chart.svg",
    alt: "feature-icon",
    title: "Smart File Sharing",
  },
  {
    src: "/assets/images/common/icons/target.svg",
    alt: "feature-icon",
    title: "Collaboration Tools",
  },
  {
    src: "/assets/images/common/icons/settings.svg",
    alt: "feature-icon",
    title: "Customizable Privacy",
  },
];

export const features14 = [
    {
      id: 5,
      imgSrc: "/assets/images/template/tasks.svg",
      altText: "Faster Turnaround",
      step: "05.",
      title: "Faster Turnaround",
      description: `Get 360 degree view of all tasks and their statuses, and know what your employees and contractors are working on. Add reminders, milestones, and timers.`,
      link: {
        href: "/pricing",
        text: "Try it free",
      },
      testimonial: {
        quote: `“The distribution business is complex as you're dealing with many contractors and sub-contractors, so having a clear overview of how things are coming along is essential for me.”`,
        imgSrc: "/assets/images/avatars/11.png",
        name: "Kamal Patel",
        role: "Sr Director Distribution",
      },
    },
    {
      id: 6,
      imgSrc: "/assets/images/template/clients.svg",
      altText: "Better Client Management",
      step: "06.",
      title: "Better Client Management",
      description: `Easily find all client information in one place. Including invoices, quotes, projects, files, notes and support tickets.`,
      link: {
        href: "/pricing",
        text: "Try it free",
      },
      testimonial: {
        quote: `“We have over 1200 B2B customers, and my team and I can access customer details with just a few clicks. This not only saves us valuable time which we could spend on providing a great service, it also makes my us far more efficient.”`,
        imgSrc: "/assets/images/avatars/06.png",
        name: "Xang Lee",
        role: "VP of Operations",
      },
    },
    {
      id: 7,
      imgSrc: "/assets/images/template/team.svg",
      altText: "Staff & Contractors",
      step: "07.",
      title: "Staff & Contractors",
      description: `Assign tasks to staff and contractors, check staff progress on projects, and manage all communication from a single dashboard.`,
      testimonial: {
        quote: `“With Spotwizz we no longer have to email back and forth about a specific project or task - I directly comment on a particular task and tag my team members.”`,
        imgSrc: "/assets/images/avatars/02.jpg",
        name: "Mikal Ebodin",
        role: "Director of Sea Freight",
      },
    },
    {
      id: 8,
      imgSrc: "/assets/images/template/support.svg",
      altText: "Provide Better Support",
      step: "08.",
      title: "Provide Better Support",
      description: `Keep all support tickets in one place, assign them to staff, and track progress. Use canned responses to save time and improve customer satisfaction.`,
      testimonial: {
        quote: `“Before Spotwizz we were using and paying for a separate service just for ticketing. With Spotwizz that's all built into our CRM so when we log in we see everyting in one easy dashboard. Superb!”`,
        imgSrc: "/assets/images/avatars/01.png",
        name: "Victor Paccini",
        role: "Head of Customer Service",
      },
    },
  ];