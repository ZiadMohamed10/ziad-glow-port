import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm sm:text-base text-muted-foreground flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
          <span>© {currentYear} Ziad Mohamed. Built with</span>
          <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary fill-primary animate-pulse" />
          <span>using React & Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};
