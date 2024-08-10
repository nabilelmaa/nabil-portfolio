import Image from "next/image";
import Link from "next/link";

export const FindMe = () => {
  const socialLinks = [
    { icon: "/_gmail.png", url: "mailto:nabilelmaa@gmail.com", alt: "Email" },
    {
      icon: "/_linkedin.png",
      url: "https://www.linkedin.com/in/nabil-el-maaroufi-0385ab232/",
      alt: "LinkedIn",
    },
    {
      icon: "/_instagram.png",
      url: "https://www.instagram.com/nabil_el_maa/",
      alt: "Instagram",
    },
    {
      icon: "/_facebook.png",
      url: "https://www.facebook.com/nabilxxx.ifrane/",
      alt: "Facebook",
    },
    {
      icon: "/_discord.png",
      url: "https://discord.gg/yourinvite",
      alt: "Discord",
    },
  ];

  return (
    <section id="find-me" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="mt-4 text-2xl lg:text-4xl md:text-4xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8">
          Find Me
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 lg:w-20 lg:h-20 relative group mt-12">
                <Image
                  src={link.icon}
                  alt={link.alt}
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
