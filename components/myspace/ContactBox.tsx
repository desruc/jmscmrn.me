import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { socials } from "~/constants/socials";

const ContactBox = () => {
  return (
    <section className="border__lightblue myspace">
      <h3 className="bg__lightblue !text-white">Contacting James Cameron</h3>
      <ul className="space-y-2 columns-2 p-2">
        <li>
          <a
            href={socials.email}
            className="flex items-center w-fit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail className="mr-2" /> Email
          </a>
        </li>
        <li>
          <a
            href={socials.github}
            className="flex items-center w-fit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub className="mr-2" /> GitHub
          </a>
        </li>
        <li>
          <a
            href={socials.linkedin}
            className="flex items-center w-fit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin className="mr-2" /> LinkedIn
          </a>
        </li>
        <li>
          <a
            href={socials.instagram}
            className="flex items-center w-fit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram className="mr-2" /> Instagram
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ContactBox;
