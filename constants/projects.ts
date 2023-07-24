export interface ProjectDetails {
  title: string;
  description: string;
  href?: string;
  image?: string;
  techStack?: string[];
}

export const projects: ProjectDetails[] = [
  {
    title: "Unwrapped",
    description:
      "A web app that provides a visual representation of your personalized Spotify data.",
    href: "https://unwrapped.jmscmrn.com/",
  },
  {
    title: "knowledge-knight",
    description:
      "A Discord bot that starts a short game of trivia at a random time each day.",
    href: "https://github.com/desruc/knowledge-knight",
  },
  {
    title: "citation_station",
    description:
      "A web app that provides a visual representation of your personalized Spotify data.",
    href: "https://github.com/desruc/citation_station",
  },
  {
    title: "plex-discord-feed",
    description: "A small server to send plex events to discord",
    href: "https://github.com/desruc/plex-discord-feed",
  },
  {
    title: "MealMixer",
    description:
      "A web application that generates a weekly shopping list for users.",
    href: "https://github.com/desruc/MealMixer",
  },
  {
    title: "keepclone",
    description: "Another React Google Keep clone 🤪",
    href: "https://github.com/desruc/keepclone",
  },
  {
    title: "jmscmrn.me v1",
    description: "The first iteration of jmscmrn.me, built with Gatsby.",
    href: "https://github.com/desruc/personal-portfolio",
  },
  {
    title: "Coding blog theme",
    description:
      "A feature rich blogging theme. Includes tags/categories support, three colour schemes and code block formatting.",
    href: "https://github.com/desruc/gatsby-theme-coding-blog",
  },
];
