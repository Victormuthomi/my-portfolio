import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <>
      <div className="text-center mt-6" id="socials">
        <h3 className="text-2xl text-slate-50 font-semibold mb-8">
          Or Connect with Me
        </h3>
        <div className="flex justify-center gap-6">
          <Link to="https://wa.me/+254758407285">
            <img
              src="../src/assets/whatsapp-white.svg"
              alt="Whatsapp icon"
              className="h-8"
            />
          </Link>

          <Link to="mailto:victormuthomi100@gmail.com">
            <img
              src="../src/assets/Gmail-White.svg"
              alt="Gmail icon"
              className="h-8"
            />
          </Link>

          <Link to="https://github.com/Victormuthomi">
            <img
              src="../src/assets/github-mark-white.svg"
              alt="Github ico"
              className="h-8"
            />
          </Link>
          <Link to="https://x.com/kiba_nga">
            <img
              src="../src/assets/x-white-icon.svg"
              alt="x icon"
              className="h-8"
            />
          </Link>

          <Link to="https://www.linkedin.com/in/victor-muthomi-693aa4265/">
            <img
              src="../src/assets/linkedin-white.svg"
              alt=""
              className="h-8"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Socials;
