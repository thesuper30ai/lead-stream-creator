import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "scroll-top-button fixed bottom-[1.5rem] right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full lg:bottom-10 lg:right-6 lg:h-auto lg:w-auto lg:p-3",
        "bg-primary text-primary-foreground shadow-lg",
        "hover:scale-110 hover:shadow-xl",
        "transition-all duration-300 ease-out",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};
