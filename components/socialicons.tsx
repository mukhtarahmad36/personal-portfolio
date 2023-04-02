import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <div>
      <h3 className="tracking-widest find_with_me">FIND WITH ME</h3>
      <div className="flex gap-8 my-6 social-icons">
        <Link
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100084602019686"
        >
          <FontAwesomeIcon icon={faFacebookF} className="fIcon" />
        </Link>

        <Link target="_blank" href="https://twitter.com/H_MukhtarAhmad1">
          <FontAwesomeIcon icon={faTwitter} className="fIcon" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/mukhtar-ahmad-b53998250/"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="fIcon" />
        </Link>
      </div>
    </div>
  );
}
