import React from "react";

const BOOTSTRAP_FOR_SKILL_ICON = "w-12 text-4xl mx-auto inline-block ";
export const RESUME_LINK ="https://drive.google.com/file/d/1w_DEtcbSZs6ZTUe3OxO9QI7cKGejMa_2/view?usp=sharing";
export const PROFILE_PIC ="https://res.cloudinary.com/dwwtffefs/image/upload/v1677576649/my-profile-pic/profile_ozrf3u.png";
const data = {
  name: "Yash Garg",
  title: "Full Stack Developer",
  social: {
    github: "https://github.com/thisisyashgarg",
    linkedin: "https://linkedin.com/in/thisisyashgarg",
    twitter: "https://twitter.com/thisisyashgargg",
    email: "thisisyashgarg@gmail.com",
  },
  about: {
    title: "My Background",
    description:
      "I'm a third-year B.Tech (Information Technology) student who loves building things. My passion for creating projects from scratch drives me to stay current with the latest technologies and to tackle projects of any size or complexity.  ",
  },
  experience: {
    title: "My Experience",
    companies: [
       {
        name: "Intelligent Labs",
        description:`
        • Built a company collaboration platform from scratch single handedly.
        • Worked closely in meetings with the founders to brainstorm the app flow.
        • Responsible for complete user journey, eg: User Onboarding, Authentication, Search, Feed, Profile, etc.
        • Built a MVC based Node.js backend with JWT used as the authentication.
        • Built a feed page and search functionality that updates as new posts are added.
        `,
        tenure: "April 2023 (Full Stack Developer Intern)",
        websiteLink: "https://reacti.ai/",
      },
      {
        name: "Slingshot",
        description: `
        • Part of the new ventures department ( including founders ) which experiments with new ideas and tries to make business out of it.
        • Active member of the Slingshot Discord Community teaching Node.js.
        • Achieved 10000+ hits on EaseIt in just 20 days which is an AI productivity tool.
        • Worked with and created some Node.js bots for Discord and Twitter.
        • Created a Node.js crawler for a government website to get data of tenders passed.
        • Deployed apps via Docker and AWS EC2 instances.`,
        tenure: "Nov 2022 - Feb 2023 (4 months) (SDE Intern)",
        websiteLink: "https://slingshotahead.com/",
      }
    ],
  },
  skills: [
    {
      skillName: "ReactJS",
      skillIcon: (
        <img
          alt="reactLogo"
          className={BOOTSTRAP_FOR_SKILL_ICON}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        />
      ),
    },
    {
      skillName: "NodeJS",
      skillIcon: (
        <img
          alt="nodejslogo"
          className={BOOTSTRAP_FOR_SKILL_ICON}
          src="https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg"
        />
      ),
    },
    {
      skillName: "MongoDB",
      skillIcon: (
        <img
          alt="mongodblogo"
          className={BOOTSTRAP_FOR_SKILL_ICON}
          src="https://cdn.cdnlogo.com/logos/m/30/mongodb-icon.svg"
        />
      ),
    },
    {
      skillName: "EC2 (AWS)",
      skillIcon: (
        <img
          alt="awslogo"
          className={BOOTSTRAP_FOR_SKILL_ICON}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png"
        />
      ),
    },
    {
      skillName: "Docker",
      skillIcon: (
        <img
          alt="dockerlogo"
          className={BOOTSTRAP_FOR_SKILL_ICON}
          src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"
        />
      ),
    },

    {
      skillName: "Typescript",
      skillIcon: (
        <img
          alt="tsLogo"
          className={BOOTSTRAP_FOR_SKILL_ICON}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
        />
      ),
    },
    {
      skillName: "Javascript",
      skillIcon: (
        <img
          alt="jslogo"
          className={BOOTSTRAP_FOR_SKILL_ICON}
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        />
      ),
    },
    {
      skillName: "TailwindCSS",
      skillIcon: (
        <img
          alt="tailwindlogo"
          className={BOOTSTRAP_FOR_SKILL_ICON}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
        />
      ),
    },
    
   
   
    {
      skillName: "HTML",
      skillIcon: (
        <img
          alt="htmllogo"
          className={BOOTSTRAP_FOR_SKILL_ICON}
          src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
        />
      ),
    },
    {
      skillName: "CSS",
      skillIcon: (
        <img
          alt="csslogo"
          className={BOOTSTRAP_FOR_SKILL_ICON}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
        />
      ),
    },
  ],
  projects: [
   
    {
      title: "UnQueue",
      description:
        "UnQueue eliminates physical queues by joining virtual queues from your device, receive turn notifications, making it convenient and efficient.",
      tags: ["react", "tailwindcss", "react-router-dom", "firebase"],
      codeLink: "https://github.com/thisisyashgarg/unqueue",
      websiteLink: "https://unqueue.netlify.app/",
      androidAppLink:
        'https://drive.google.com/file/d/1jlq_eQv7EnLtAJlUlP_37OnmFaApuuPT/view?usp=drivesdk',
      screenshots: [
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677179980/unqueue-ss/homepage_bej3xk.png",
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677179980/unqueue-ss/domains_d11nth.png",
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677179979/unqueue-ss/dashboard_gepykw.png",
      ],
    },
   
    {
      title: "Foodify",
      description: "Foodify is a food exploration app",
      tags: ["react", "tailwindcss", "redux-toolkit", "typescript"],
      codeLink: "https://github.com/thisisyashgarg/namaste-react",
      websiteLink: "https://foodifyme.netlify.app/",
      screenshots: [
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677495619/foodify/home_rdikc3.png",
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677495618/foodify/menu_ibpjha.png",
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677495618/foodify/cart_lio0de.png",
      ],
    },
    {
      title: "Ain't Youtube",
      description: "Ain't Youtube is a video streaming app",
      tags: ["react", "tailwindcss", "redux-toolkit", "typescript", "youtube-api"],
      codeLink: "https://github.com/thisisyashgarg/youtube-clone",
      websiteLink: "https://aintyoutube.netlify.app/",
      screenshots: [
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1680374548/youtube-clone/Screenshot_Capture_-_2023-03-17_-_23-14-12_qf9qqa.png",
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1680374550/youtube-clone/Screenshot_Capture_-_2023-03-17_-_23-14-41_jqa6fd.png",

      ],
    },
    {
      title: "Cryptologer",
      description:
        "This is a tweeter bot that automatically fetches crypto news from an API and then generates commentary tweet about it and tweets that commentary through your twitter account",
      tags: ["xml-js", "twit", "openai", "newsdata-api"],
      codeLink: "https://github.com/thisisyashgarg/news-tweeter-bot",
      websiteLink:
        "https://twitter.com/IAmCryptologer?t=Rv_xgKBcUDbNc1lbUrBjhw&s=09",
      screenshots: [
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677303411/news-bot/Screenshot_Capture_-_2023-02-25_-_11-06-38_kvcpnu.png",
      ],
    },
     {
      title: "EaseIt",
      description:
        "EaseIt is an AI powered tool that can write personalised messages, debug code of any language, make songs in any artist style, make your workout plan and can do anything that you can think of.",
      tags: [
        "openai",
        "nodejs",
        "text-davinci",
        "speech-to-text",
        "tailwindcss",
      ],
      codeLink: "https://github.com/thisisyashgarg/ease-it",
      websiteLink: "https://easeit.cyclic.app/",
      screenshots: [
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677131881/easeit/Screenshot_Capture_-_2023-02-23_-_11-23-52_a73u2n.png",
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677131873/easeit/Screenshot_Capture_-_2023-02-23_-_11-24-06_zthyxs.png",
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677131882/easeit/Screenshot_Capture_-_2023-02-23_-_11-24-59_jujhur.png",
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677131882/easeit/Screenshot_Capture_-_2023-02-23_-_11-24-29_dor78m.png",
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677131883/easeit/Screenshot_Capture_-_2023-02-23_-_11-24-48_hh8jjf.png",
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677131884/easeit/Screenshot_Capture_-_2023-02-23_-_11-24-15_y12upr.png",
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677131888/easeit/Screenshot_Capture_-_2023-02-23_-_11-25-12_w48ou0.png",
      ],
    },
    {
      title: "Book Management API ( with Swagger Docs)",
      description:
"A simple API for book management",
     tags: ["nodejs", "typescript", "swagger", "docker", "mvc"],
      codeLink: "https://github.com/thisisyashgarg/vocally-assignment",
      websiteLink: "",
      screenshots: [
"https://res.cloudinary.com/dwwtffefs/image/upload/v1680375357/books-api/Screenshot_Capture_-_2023-04-02_-_00-25-09_xnsdo8.png"      ],
    },


    {
      title: "Meme Generator",
      description:
        "This is a meme generator that generates a random meme template and takes input text, dynamically adds it to a meme. You can download the meme as well. Have fun with it.",
      tags: ["react", "typescript", "html2canvas", "download-js"],
      codeLink: "https://github.com/thisisyashgarg/meme-generator",
      websiteLink: "https://creatememes.netlify.app/",

      screenshots: [
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677136172/meme-generator/Screenshot_Capture_-_2023-02-23_-_12-38-21_tmrqke.png",
      ],
    },
    {
      title: "FooBank - Modern Banking Website",
      description:
        "Completely responsive modern banking website made out of just two dependencies, React and Tailwiind",
      tags: ["react", "typescript", "tailwindcss"],
      codeLink: "https://github.com/thisisyashgarg/banking-app",
      websiteLink: "https://foobank.netlify.app/",

      screenshots: [
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677761304/foobank/Screenshot_Capture_-_2023-03-02_-_18-16-08_awcva1.png",
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677761304/foobank/Screenshot_Capture_-_2023-03-02_-_18-16-32_gtfpak.png",
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677761304/foobank/Screenshot_Capture_-_2023-03-02_-_18-16-58_mpxjpc.png",
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677761303/foobank/Screenshot_Capture_-_2023-03-02_-_18-17-17_vjhpda.png",
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677761303/foobank/Screenshot_Capture_-_2023-03-02_-_18-16-26_xytphk.png",
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677761303/foobank/Screenshot_Capture_-_2023-03-02_-_18-17-21_iwnxkx.png",
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677761303/foobank/Screenshot_Capture_-_2023-03-02_-_18-16-15_ik4d4z.png",
      ],
    },
    {
      title: "Tenzies Game",
      description:
"Tenzies is a React-based dice game in which the goal is to roll until all dice are the same.",
      tags: ["react", "typescript", "tailwindcss"],
      codeLink: "https://github.com/thisisyashgarg/tenzies-game",
      websiteLink: "https://tenziesmatch.netlify.app/",

      screenshots: [
"https://res.cloudinary.com/dwwtffefs/image/upload/v1679938405/tenzies/Screenshot_Capture_-_2023-03-27_-_23-03-08_putehk.png"      ],
    },
    {
      title: "Discord Tweeter Bot",
      description:
        "Discord Tweeter Bot is a discord bot that basically takes your input, a tweet of yours that you want to post, and directly posts it through your twitter profile",
      tags: ["twit", "discord-js", "nodejs", "twitter-apiV2"],
      codeLink: "https://github.com/thisisyashgarg/discord-tweeter-bot",
      websiteLink: "",
      screenshots: [
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677137451/discord-bot/Screenshot_Capture_-_2023-02-23_-_12-59-59_cci6qa.png",
      ],
    },

    {
      title: "NodeJS Crawler",
      description:
        "A Nodejs crawler that crawls a government website and takes out data of latest tenders passed along with their dates and contractor (if any)",
      tags: ["nodejs", "puppeteer", "headless-browser"],
      codeLink: "https://github.com/thisisyashgarg/nodejs-crawler",
      websiteLink: "",
      screenshots: [],
    },
  ],
};

export default data;
