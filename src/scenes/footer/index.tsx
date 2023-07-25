import Logo from "@/assets/logo.png";
import CopyRight from "@/shared/CopyRight";

const Footer = () => {
  return (
    <footer className="bg-color-blueDark py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" className="-translate-x-2" src={Logo} />
          <p className="my-5">
            Join our mailing list to receive email notifications about upcoming
            events, player profiles, and exciting news in the world of soccer.
            Don't miss out on the opportunity to stay informed and be part of
            our passionate community.
          </p>
          <CopyRight />
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="mb-8 font-bold">Links</h4>
          <a
            href="https://www.linkedin.com/posts/yassine-lamouadden_e-players-api-activity-7045432990184665088-alkr?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            className="my-5 duration-150 hover:text-primary-500 hover:opacity-80"
          >
            EPlayers API
          </a>
          <p className="my-5">
            <a
              className="duration-150 hover:text-primary-500 hover:opacity-80"
              href="https://github.com/devyassin/Eplayers-landing-page.git"
              target="_balnk"
            >
              EPlayers on github
            </a>
          </p>
          <p>
            <a
              className="duration-150 hover:text-primary-500 hover:opacity-80"
              href=""
            >
              EPlayers plateforme
            </a>
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="mb-5 font-bold">Contact Us</h4>
          <a href="mailto:mouden529@gmail.com">mouden529@gmail.com</a>
          <p className="mt-4">
            <a href="tel:+212651358737">+212651358737</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
