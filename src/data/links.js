import text from "./text";

const {
  links_home,
  links_home_url,
  links_about,
  links_about_url,
  links_experience,
  links_experience_url,
  links_contact,
  links_contact_url,
} = text;

const links = [
  {
    id: 1,
    text: `${links_home}`,
    url: `${links_home_url}`,
  },
  {
    id: 2,
    text: `${links_about}`,
    url: `${links_about_url}`,
  },
  {
    id: 3,
    text: `${links_experience}`,
    url: `${links_experience_url}`,
  },
  {
    id: 5,
    text: `${links_contact}`,
    url: `${links_contact_url}`,
  },
];

export default links;
