import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 160 && rect.bottom >= 160) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id.replace("#", ""));
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "px-4 pt-4"
          : "px-4 pt-5 md:px-8"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border transition-all duration-500 ${
          isScrolled
            ? "border-purple-400/20 bg-black/60 px-5 py-3 shadow-[0_15px_50px_rgba(124,58,237,0.15)] backdrop-blur-2xl"
            : "border-white/5 bg-white/[0.02] px-5 py-4 backdrop-blur-xl"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="group relative flex items-center gap-2"
        >
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-purple-400/30 bg-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-violet-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <Sparkles
              size={20}
              className="relative z-10 text-purple-300 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
            />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-bold tracking-wide text-white">
              YOUR<span className="text-purple-400">NAME</span>
            </p>

            <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
              Full Stack Developer
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`group relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {/* Hover Background */}
                <span className="absolute inset-0 -z-10 rounded-xl bg-purple-500/0 transition-all duration-300 group-hover:bg-purple-500/10" />

                {item.name}

                {/* Active Glow */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-purple-400 shadow-[0_0_12px_4px_rgba(168,85,247,0.6)]" />
                )}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-xl border border-purple-400/20 bg-gradient-to-r from-purple-600/20 to-violet-500/10 px-4 py-2.5 text-sm font-semibold text-purple-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/40 hover:shadow-[0_10px_30px_rgba(139,92,246,0.25)] md:flex"
        >
          <span>Let's Talk</span>

          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400 shadow-[0_0_8px_3px_rgba(168,85,247,0.6)]" />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/10 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-purple-400/10 bg-black/80 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="flex flex-col p-3">
          {navItems.map((item) => {
            const isActive =
              activeSection === item.href.replace("#", "");

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`rounded-xl px-4 py-3 text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-purple-500/10 text-purple-300"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_10px_30px_rgba(139,92,246,0.35)]"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;