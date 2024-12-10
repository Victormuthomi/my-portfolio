import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <>
      <div className="text-center mt-8" id="socials">
        <h3 className="text-2xl text-slate-50 font-semibold py-2 mt-8 mb-6">
          Or Connect with Me
        </h3>
        <div className="flex justify-center gap-6 mb-6">
          <Link to="https://wa.me/+254758407285">
            <img
              src="images/whatsapp-white.svg"
              alt="Whatsapp icon"
              className="h-8"
            />
          </Link>

          <Link to="mailto:victormuthomi100@gmail.com">
            <img
              src="images/Gmail-White.svg"
              alt="Gmail icon"
              className="h-8"
            />
          </Link>

          <Link to="https://github.com/Victormuthomi">
            <img
              src="images/github-mark-white.svg"
              alt="Github ico"
              className="h-8"
            />
          </Link>
          <Link to="https://x.com/kiba_nga">
            <img src="images/x-white-icon.svg" alt="X icon" className="h-8" />
          </Link>

          <Link to="https://www.linkedin.com/in/victor-muthomi-693aa4265/">
            <img
              src="images/linkedin-white.svg"
              alt="linkedin icon"
              className="h-8"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Socials;
