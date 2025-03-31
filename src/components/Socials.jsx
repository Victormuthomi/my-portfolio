import { Link } from "react-router-dom";
import { FaXTwitter, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Socials = () => {
  return (
    <>
      <div className="text-center mt-8" id="socials">
        <h3 className="text-2xl text-fuchsia-500 font-semibold py-2 mt-8 mb-6">
          Or Connect with Me
        </h3>
        <div className="flex justify-center gap-6 mb-6">
          <Link to="https://wa.me/+254758407285">
            <FaWhatsapp className="text-5xl text-white hover:text-fuchsia-400 animate-pulse" />
          </Link>

          <Link to="mailto:victormuthomi100@gmail.com">
            <SiGmail className="text-5xl text-white hover:text-fuchsia-400 animate-pulse" />
          </Link>

          <Link to="https://github.com/Victormuthomi">
            <FaGithub className="text-5xl text-white hover:text-fuchsia-400 animate-pulse" />
          </Link>
          <Link to="https://x.com/kiba_nga?s=09">
            <FaXTwitter className="text-white text-5xl hover:text-fuchsia-400 animate-pulse" />
          </Link>

          <Link to="https://www.linkedin.com/in/victor-muthomi-693aa4265/">
            <FaLinkedin className="text-white text-5xl hover:text-fuchsia-400 animate-pulse" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Socials;
