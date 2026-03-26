import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Kristine Venesse Anunsawon — Portfolio",
  author: "Kristine Venesse Anunsawon",
  description:
    "Backend-focused Web Programmer based in the Philippines, specializing in Python, Django, and MySQL. Experienced in building scalable internal systems and data-driven solutions.",
  lang: "en",
  siteLogo: "/krissszz.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/kristine-venesse-anunsawon-0379a3282/" },
    { text: "Github", href: "https://github.com/krissszz" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Kristine Venesse Anunsawon",
    specialty: "Analyst / Programmer",
    summary:
      "Backend-focused Analyst/Programmer specializing in Python, Django, and MySQL. I build internal systems, automate workflows, and create reliable, data-driven solutions.",
    email: "anunsawonv@gmail.com",
  },
  experience: [
    {
      company: "First Farmers Holding Corporation",
      position: "Analyst / Programmer",
      startDate: "Oct 2024",
      endDate: "Current",
      summary: [
        "Developed and maintained internal web applications using Python, Django, MySQL, Informix, and PostgreSQL to support operational workflows.",
        "Extracted, cleaned, and processed operational data using Informix queries and CSV files, supporting payroll processing, data uploads, and internal reporting.",
      ],
    },
    {
      company: "EonBotz Technology",
      position: "Programmer",
      startDate: "Jan 2024",
      endDate: "Oct 2024",
      summary: [
        "Designed and developed web applications for clients using Python and the Django framework.",
        "Actively engaged with clients through travel, presentations, and user training.",
      ],
    },
    {
      company: " Core Wireless (Beijing) Communication Tech. Co., Ltd., ",
      position: "System Developer Intern",
      startDate: "Sept 2022",
      endDate: "Jan 2023",
      summary: [
        "Contributed to the design and development of a Laboratory Information Management System (LIMS), including system architecture design and core code development. ",
        "Utilized Python and MySQL to develop and optimize the system.",
      ],
    },
  ],
  projects: [
    {
      name: "Scale House System",
      summary: "A system to record and manage truck weighing data for sugarcane deliveries, integrating with industrial scales to capture and store real-time weight measurements.",
      linkPreview: "/",
      linkSource: "",
      image: "/spotifu.png",
    },
    {
      name: "EMR System",
      summary: "An internal web application that manages employee medical records to improve accessibility and organization of health data.",
      linkPreview: "/",
      linkSource: "",
      image: "/shopify-clon.png",
    },
    {
      name: "Payroll System",
      summary: "A system for a company and a school, handling employee records, salary computation, and basic reports.",
      linkPreview: "/",
      linkSource: "",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Kristine Venesse Anunsawon, I am a web programmer with a strong background in designing and developing user-friendly, responsive websites and applications for diverse clients and projects. Currently, I work as an Analyst/Programmer at FFHC.

      I completed my studies in Information Management and Information Systems at Beijing Institute of Technology, supported by Chinese Government Scholarship from 2018 to 2023. Additionally, I enhanced my communication and intercultural skills through a Chinese language and business preparatory course at Beijing Language and Culture University. 
      
      I am passionate about web/system development, information management, and business innovation, and I strive to create solutions that are efficient, effective, and engaging.
    `,
    image: "/krissszz.png",
  },
};

// #5755ff
