import {
  githubIcon,
  xIcon,
  linkedinIcon,
  youtubeIcon,
} from "@/assets/icons/all-social";
import linksMetadata from "@/metadata/links";

const linksCards = [
  {
    title: "Github",
    href: linksMetadata.github,
    className: "dark:bg-white p-2",
    icon: githubIcon,
  },
  {
    title: "LinkedIn",
    className: "!bg-[#0A66C2] p-4",
    href: linksMetadata.linkedin,
    icon: linkedinIcon,
  },
  {
    title: "X",
    className: "p-4 bg-dark dark:bg-white",
    href: linksMetadata.x,
    icon: xIcon,
  },
  {
    title: "Youtube",
    className: "p-4 bg-dark dark:bg-white",
    href: linksMetadata.youtube,
    icon: youtubeIcon,
  },
];

export default linksCards;
