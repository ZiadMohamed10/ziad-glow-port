import { Heart } from "lucide-react";

const SocialIcon = ({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) => <i className={`${icon} ${className}`} aria-hidden="true" />;

const footerSocials = [
  {
    icon: "fa-brands fa-linkedin",
    href: "https://www.linkedin.com/in/ziad-mohamed-a902ba336/",
  },
  { icon: "fa-brands fa-github", href: "https://github.com/ZiadMohamed10" },
  {
    icon: "fa-brands fa-facebook",
    href: "https://www.facebook.com/ziad.mohamed.558717",
  },
  { icon: "fa-brands fa-whatsapp", href: "https://wa.me/201018349359" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center items-center gap-6 mb-6">
          {footerSocials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6"
            >
              <SocialIcon icon={social.icon} className="text-xl sm:text-2xl" />
            </a>
          ))}
        </div>
        <p className="text-sm sm:text-base text-muted-foreground flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
          <span>© {currentYear} Ziad Mohamed. Built with</span>
          <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary fill-primary animate-pulse" />
          <span>using React & Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};
