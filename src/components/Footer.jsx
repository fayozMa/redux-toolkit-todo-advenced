import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content mt-20">
      <aside>
      <NavLink to='/' className="btn btn-ghost text-xl">ToDos</NavLink>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://x.com">
          <BsTwitter className="w-6 h-6 cursor-pointer" />
          </a>
          <a href="https://www.youtube.com">
          <FaYoutube className="w-6 h-6 cursor-pointer" />
          </a>
          <a href="https://www.facebook.com/">
          <FaFacebookF className="w-6 h-6 cursor-pointer" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
