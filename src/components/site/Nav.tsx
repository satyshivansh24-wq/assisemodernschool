import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Search, Moon, Sun, ChevronDown } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Campus Life", href: "#campus" },
  { label: "Faculty", href: "#faculty" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-[var(--gold)]"
        aria-hidden
      />
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container-edge flex items-center justify-between h-20">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 grid place-items-center rounded-full bg-[var(--navy)] text-white font-display font-bold text-sm tracking-tight">
              A
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[var(--gold)] border-2 border-background" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-semibold text-[15px] tracking-tight">Assise Modern School</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Estd. 1998 · CBSE</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3.5 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
              >
                {l.label}
                {l.label === "Academics" && (
                  <ChevronDown className="inline-block ml-1 h-3 w-3 opacity-50" />
                )}
                <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-[var(--gold)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Search"
              onClick={() => setSearch((s) => !s)}
              className="h-10 w-10 grid place-items-center rounded-full hover:bg-muted transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="h-10 w-10 grid place-items-center rounded-full hover:bg-muted transition-colors"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href="#admissions" className="hidden md:inline-flex btn-gold !py-2.5 !px-5 !text-[13px]">
              Apply Now
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden h-10 w-10 grid place-items-center rounded-full hover:bg-muted"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {search && (
          <div className="border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="container-edge py-4">
              <input
                autoFocus
                placeholder="Search programs, events, news…"
                className="w-full bg-transparent text-lg font-display placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
          </div>
        )}

        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="container-edge py-6 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium border-b border-border"
                >
                  {l.label}
                </a>
              ))}
              <a href="#admissions" onClick={() => setOpen(false)} className="btn-gold mt-4 self-start">
                Apply Now
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
