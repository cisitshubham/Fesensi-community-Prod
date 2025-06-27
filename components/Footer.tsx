import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="m-4 p-4 backdrop-blur-sm bg-secondary/30 rounded-lg flex items-center justify-between motion-preset-fade">
      <p className="text-sm opacity-70">
        © {new Date().getFullYear()} All rights reserved.
      </p>
      <Link
        href="https://fesensi.com"
        target="_blank"
        className="relative hover:motion-preset-confetti w-fit"
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={60}
          height={20}
          className=""
          priority
        />
      </Link>
    </div>
  );
};

export default Footer;
