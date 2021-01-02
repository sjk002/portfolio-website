module.exports = {

  //-- SITE SETTINGS -----
  author: "@shawnkim",
  siteTitle: "Gatsby Starter Portfolio Minimal",
  siteShortTitle: "Shawn Kim", // Used as logo text in header, footer, and splash screen
  siteDescription: "A modern one-page portfolio with a clean yet expressive design.",
  siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
  siteLanguage: "en_US",
  siteIcon: "./content/letterS.png", // Relative to gatsby-config file
  seoTitleSuffix: "Portfolio Minimal", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/shawn-kim-bba65719b/",
    },

    {
      name: "Github",
      url:
        "https://github.com/sjk002",
    },
    {
      name: "React.js",
      url: "https://reactjs.org/",
    },
    {
      name: "Photoshop",
      url: "https://www.adobe.com/photoshop/online/photo-editing.html",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Skills",
        url: "/#interests",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },
  footerLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shawn-kim-bba65719b/",
    },
    {
      name: "GitHub",
      url: "https://github.com/sjk002",
    },
    
  ],
}
