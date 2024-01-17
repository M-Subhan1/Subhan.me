import { linkedinUsername, twitterUsername, username, youtubeUsername } from "@/constants/strings";

const linksMetadata = {
  x: "https://x.com/" + twitterUsername,
  linkedin: "https://linkedin.com/in/" + linkedinUsername,
  github: "https://github.com/" + username,
  youtube: "https://youtube.com/@" + youtubeUsername,
};

export default linksMetadata;
