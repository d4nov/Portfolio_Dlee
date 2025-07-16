import { FaFacebook } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";

interface IProps {
  linkedin: string;
  instagram: string;
  facebook: string;
}
const SocialMedia = (props: IProps) => {
  const { linkedin, instagram, facebook } = props;

  return (
    <div className="my-4 d-flex items-center gap-3">
      <a
        href={linkedin}
        target="_blank"
        className="highlight"
        title="LinkedIn Minh Đức"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href={instagram}
        target="_blank"
        className="highlight"
        title="Instagram Minh Đức"
      >
        <PiInstagramLogoFill size={30} />
      </a>
      <a
        href={facebook}
        target="_blank"
        className="highlight"
        title="Facebook Minh Đức"
      >
        <FaFacebook size={30} />
      </a>
    </div>
  );
};

export default SocialMedia;
