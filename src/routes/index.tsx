import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, type SVGProps } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  FlaskConical,
  GraduationCap,
  Mail,
  MapPin,
  Minus,
  Phone,
  Play,
  Plus,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Reveal, Counter } from "@/components/site/Reveal";

/* Inline brand icons (lucide v1 dropped these) */
const Instagram = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);
const Facebook = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const Youtube = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M22.5 6.5a3 3 0 0 0-2.1-2.1C18.6 4 12 4 12 4s-6.6 0-8.4.4A3 3 0 0 0 1.5 6.5 31 31 0 0 0 1 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1C5.4 20 12 20 12 20s6.6 0 8.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0-.5-5.5z" />
    <path d="m10 15 5-3-5-3z" fill="currentColor" />
  </svg>
);
const Linkedin = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import hero from "@/assets/hero.jpg";
import principal from "@/assets/principal.jpg";
import lab from "@/assets/lab.jpg";
import sports from "@/assets/sports.jpg";
import library from "@/assets/library.jpg";
import cultural from "@/assets/cultural.jpg";
import classroom from "@/assets/classroom.jpg";
import campus from "@/assets/campus.jpg";
import t1 from "@/assets/teacher1.jpg";
import t2 from "@/assets/teacher2.jpg";
import t3 from "@/assets/teacher3.jpg";
import t4 from "@/assets/teacher4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Assise Modern School — Nurturing Excellence, Inspiring Futures" },
      { name: "description", content: "Premier CBSE school in India shaping curious, confident, future-ready learners through academic rigour, modern pedagogy, and holistic growth." },
      { property: "og:title", content: "Assise Modern School" },
      { property: "og:description", content: "Nurturing Excellence, Inspiring Futures. Admissions open." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Marquee />
      <Intro />
      <Why />
      <Stats />
      <Academics />
      <CampusLife />
      <Achievements />
      <Faculty />
      <Testimonials />
      <News />
      <Admissions />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-[var(--navy)] text-white">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={hero}
          alt="Indian students walking through a sunlit school corridor at Assise Modern School"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/70 via-[var(--navy)]/40 to-[var(--navy)]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/80 via-transparent to-transparent" />
      </motion.div>

      {/* Floating ornaments */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-[18%] hidden md:block"
      >
        <div className="h-40 w-40 rounded-full border border-white/15 grid place-items-center backdrop-blur-md bg-white/[0.04]">
          <div className="h-24 w-24 rounded-full border border-[var(--gold)]/40 grid place-items-center">
            <Sparkles className="h-6 w-6 text-[var(--gold)]" />
          </div>
        </div>
      </motion.div>

      <motion.div style={{ y, opacity }} className="container-edge relative z-10 flex min-h-[100svh] flex-col justify-end pb-24 pt-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-white/70"
          >
            <span className="h-px w-10 bg-[var(--gold)]" />
            Admissions Open · 2026–27
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mt-6 font-display font-semibold text-balance text-[clamp(2.6rem,7vw,6rem)] leading-[0.98] tracking-[-0.03em]"
          >
            Nurturing Excellence,
            <br />
            Inspiring <span className="serif-italic text-[var(--gold)]">futures.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-7 max-w-xl text-base md:text-lg text-white/75 leading-relaxed"
          >
            For over two decades, Assise Modern School has shaped curious, courageous,
            and compassionate learners — ready to lead the world they will inherit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#admissions" className="btn-gold">
              Begin Admission <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-white/90 hover:text-white text-sm font-medium group"
            >
              <span className="h-11 w-11 rounded-full border border-white/30 grid place-items-center group-hover:bg-white group-hover:text-[var(--navy)] transition-all">
                <Play className="h-4 w-4 ml-0.5" />
              </span>
              Schedule a Campus Visit
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/15 border border-white/15 max-w-3xl"
          >
            {[
              ["98.6%", "Board Pass Rate"],
              ["1:14", "Faculty Ratio"],
              ["42+", "Awards Won"],
              ["25 yrs", "Of Excellence"],
            ].map(([v, l]) => (
              <div key={l} className="bg-[var(--navy)] px-5 py-5">
                <div className="font-display text-2xl font-semibold">{v}</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/55 mt-1">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 right-6 md:right-10 z-10 text-[10px] uppercase tracking-[0.28em] text-white/50 flex items-center gap-2"
      >
        scroll
        <span className="h-8 w-px bg-white/40" />
      </motion.div>
    </section>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = [
    "CBSE Affiliated",
    "Cambridge Partner School",
    "STEM Excellence Award 2025",
    "Green School Certified",
    "All India Olympiad Top 100",
    "Best Faculty 2024 — Education Today",
  ];
  return (
    <section className="border-y border-border bg-[var(--surface)] overflow-hidden">
      <div className="flex gap-12 py-5 whitespace-nowrap animate-[marquee_38s_linear_infinite]">
        {[...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-sm tracking-[0.12em] uppercase text-muted-foreground font-medium">{t}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--gold)]" />
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0)} to { transform: translateX(-33.33%)}}`}</style>
    </section>
  );
}

/* ---------- INTRO ---------- */
function Intro() {
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="container-edge grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="eyebrow">Our story</div>
            <h2 className="mt-5 font-display text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.02]">
              A quiet pursuit of <span className="serif-italic text-[var(--royal)]">extraordinary</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 space-y-5 text-[15.5px] leading-[1.75] text-muted-foreground">
            <p>
              Founded in 1998 by a circle of educators, scientists and artists,
              Assise Modern School was built on a single conviction — that a great
              school is measured not by its trophies, but by the lives it lifts.
            </p>
            <p>
              Today, across a 12-acre campus in the heart of the city, more than
              2,400 students rehearse the future every morning. They debate, design,
              perform, prototype, and play — guided by mentors who believe excellence
              is a daily habit, not a destination.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-10 grid grid-cols-2 gap-px bg-border max-w-md">
            {[
              ["Vision", "To be India's most trusted school for thoughtful, future-ready learners."],
              ["Mission", "Educate the whole child — head, heart, and hands — every single day."],
            ].map(([h, p]) => (
              <div key={h} className="bg-background p-5">
                <div className="eyebrow !text-[var(--navy)]">{h}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="card-soft p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--gold)]/10 blur-3xl pointer-events-none" />
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start relative">
                <div className="image-zoom rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[260px]">
                  <img src={principal} alt="Dr. Rajiv Menon, Principal" width={1024} height={1280} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="eyebrow">Principal's note</div>
                  <p className="mt-5 font-display text-2xl md:text-[28px] leading-[1.35] tracking-tight">
                    "We do not prepare students for the world that is — we prepare them
                    to <span className="serif-italic text-[var(--royal)]">imagine</span> the world that could be."
                  </p>
                  <div className="mt-7 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[var(--navy)] text-white grid place-items-center font-display font-semibold text-sm">RM</div>
                    <div>
                      <div className="font-medium text-[15px]">Dr. Rajiv Menon</div>
                      <div className="text-xs text-muted-foreground">Principal · Ph.D., Educational Leadership</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              ["1998", "Founded"],
              ["12 acres", "Campus"],
              ["180+", "Faculty"],
              ["A++", "NABET Rating"],
            ].map(([v, l]) => (
              <div key={l} className="bg-background p-5">
                <div className="font-display text-xl font-semibold">{v}</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY ---------- */
function Why() {
  const items = [
    { icon: GraduationCap, title: "Academic Excellence", body: "CBSE curriculum enriched with critical-thinking labs, research projects and Olympiad coaching." },
    { icon: Sparkles, title: "Smart Classrooms", body: "Every room is a studio — interactive boards, hybrid learning kits and ambient acoustics." },
    { icon: Trophy, title: "Sports Development", body: "Twelve disciplines coached by national-level mentors on a four-acre sports complex." },
    { icon: BookOpen, title: "Holistic Learning", body: "Performing arts, design thinking, debate and mindfulness woven into every week." },
    { icon: Users, title: "Experienced Faculty", body: "180+ educators averaging 14 years of teaching, mentored through continuous professional development." },
    { icon: FlaskConical, title: "STEM & Innovation", body: "Tinkering lab, robotics studio and an in-house incubator for student ventures." },
  ];
  return (
    <section className="py-28 md:py-36 bg-[var(--surface)]">
      <div className="container-edge">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <Reveal className="max-w-2xl">
            <div className="eyebrow">Why parents choose us</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]">
              Six promises. Kept, quietly, every day.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="#admissions" className="btn-ghost">
              See full curriculum <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {items.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="bg-background p-10 h-full group relative overflow-hidden">
                <div className="absolute top-6 right-6 text-[11px] tabular-nums tracking-widest text-muted-foreground/50">
                  0{i + 1}
                </div>
                <div className="h-12 w-12 rounded-xl bg-[var(--navy)] text-white grid place-items-center group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)] transition-colors duration-500">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-7 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">{body}</p>
                <div className="hairline mt-8" />
                <div className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--royal)] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                  Read more <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- STATS ---------- */
function Stats() {
  const stats = [
    { value: 2400, suffix: "+", label: "Student Strength" },
    { value: 99, suffix: "%", label: "Board Results" },
    { value: 142, suffix: "", label: "Awards Won" },
    { value: 186, suffix: "", label: "Faculty Members" },
  ];
  return (
    <section className="relative py-28 md:py-36 bg-[var(--navy)] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <img src={campus} alt="" width={1920} height={1080} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="container-edge relative">
        <Reveal className="max-w-2xl">
          <div className="eyebrow !text-[var(--gold)]">By the numbers</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]">
            A quiet legacy, measured in <span className="serif-italic text-[var(--gold)]">moments</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-px md:bg-white/15 md:border md:border-white/15">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="md:bg-[var(--navy)] md:p-8 lg:p-12">
                <div className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-white">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-4 text-[11px] uppercase tracking-[0.22em] text-white/55">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ACADEMICS ---------- */
function Academics() {
  const programs = [
    { tag: "Grades I–V", title: "Primary Wing", body: "Play-led, story-rich learning that builds language, curiosity and confidence.", img: classroom },
    { tag: "Grades VI–VIII", title: "Middle School", body: "Inquiry, projects and Olympiad foundations across STEM, humanities and the arts.", img: lab },
    { tag: "Grades IX–X", title: "Secondary School", body: "Board readiness paired with electives, internships and leadership pathways.", img: library },
    { tag: "Grades XI–XII", title: "Senior Secondary", body: "Science, Commerce and Humanities streams with global university counselling.", img: campus },
  ];
  return (
    <section id="academics" className="py-28 md:py-36">
      <div className="container-edge">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <Reveal className="lg:col-span-7">
            <div className="eyebrow">Academic programs</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]">
              Four chapters of a single, unbroken story.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5 lg:pt-12 text-muted-foreground leading-relaxed">
            From the first crayon stroke to the final board paper, our academic
            journey is designed as one continuous arc — each grade preparing the
            ground for the next without ever rushing the child.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group relative overflow-hidden rounded-3xl border border-border bg-card aspect-[4/5] md:aspect-[5/4]">
                <div className="absolute inset-0 image-zoom">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/40 to-transparent" />
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--gold)]">{p.tag}</div>
                  <h3 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-3 max-w-md text-white/80 text-[14.5px] leading-relaxed">{p.body}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                    Explore curriculum
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CAMPUS LIFE ---------- */
function CampusLife() {
  const tiles = [
    { src: sports, label: "Sports", note: "12 disciplines · 4-acre complex", span: "md:col-span-2 md:row-span-2" },
    { src: lab, label: "Science Labs", note: "Wet, dry, robotics" },
    { src: library, label: "Library", note: "32,000 titles" },
    { src: cultural, label: "Cultural Events", note: "Annual fest · Anant" },
    { src: campus, label: "Campus", note: "12 acres · LEED Silver" },
  ];
  return (
    <section id="campus" className="py-28 md:py-36 bg-[var(--surface)]">
      <div className="container-edge">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <Reveal>
            <div className="eyebrow">Campus life</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] max-w-2xl">
              A campus that teaches even when no one is talking.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="#contact" className="btn-ghost">Book a tour <ArrowUpRight className="h-4 w-4" /></a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {tiles.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.05} className={`${t.span ?? ""} group relative overflow-hidden rounded-2xl image-zoom`}>
              <img src={t.src} alt={t.label} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="font-display text-lg md:text-xl font-semibold">{t.label}</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/70 mt-1">{t.note}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ACHIEVEMENTS ---------- */
function Achievements() {
  const items = [
    { tag: "Olympiad", title: "Aarav Khanna", note: "Gold · International Math Olympiad 2025", icon: Trophy },
    { tag: "Athletics", title: "Meera Iyer", note: "U-17 National 400m — Silver Medalist", icon: Award },
    { tag: "Boards", title: "Ishaan Verma", note: "All-India Top 10 · CBSE Class XII 2025", icon: GraduationCap },
  ];
  return (
    <section className="py-28 md:py-36">
      <div className="container-edge">
        <Reveal className="max-w-3xl">
          <div className="eyebrow">Featured achievements</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]">
            Three names. One of <span className="serif-italic text-[var(--royal)]">hundreds</span> we are proud of this year.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, ...it }, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="card-soft p-8 h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--royal)]">{it.tag}</div>
                  <Icon className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <h3 className="mt-10 font-display text-2xl font-semibold">{it.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.note}</p>
                <div className="hairline mt-8" />
                <div className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">Class of 2025</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FACULTY ---------- */
function Faculty() {
  const faculty = [
    { img: t1, name: "Dr. Anjali Sharma", role: "Head of Sciences", note: "Ph.D. Chemistry · 18 yrs" },
    { img: t2, name: "Rohan Bhattacharya", role: "Mathematics Lead", note: "IIT-K · 12 yrs" },
    { img: t3, name: "Priya Nair", role: "Humanities Faculty", note: "M.A. Literature · 9 yrs" },
    { img: t4, name: "Vikram Joshi", role: "Director of Pedagogy", note: "Harvard GSE · 22 yrs" },
  ];
  return (
    <section id="faculty" className="py-28 md:py-36 bg-[var(--surface)]">
      <div className="container-edge">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <Reveal>
            <div className="eyebrow">Faculty</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] max-w-2xl">
              The teachers students still write to, ten years later.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="#contact" className="btn-ghost">Meet the full team <ArrowUpRight className="h-4 w-4" /></a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {faculty.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.07}>
              <div className="group">
                <div className="image-zoom relative aspect-[4/5] rounded-2xl overflow-hidden bg-card">
                  <img src={f.img} alt={f.name} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--gold)]">{f.note}</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="font-display text-lg font-semibold">{f.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">{f.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const quotes = [
    {
      text: "We chose Assise hoping for a good school. We found a community that knows our daughter as a person — not as a roll number.",
      name: "Ananya & Rahul Mehra",
      role: "Parents · Grade VII",
    },
    {
      text: "The teachers stretched my son without breaking him. He left for engineering school braver than I ever was at 18.",
      name: "Dr. Sunita Iyer",
      role: "Parent · Alumna's mother",
    },
    {
      text: "It is the small things — a thank-you note from the principal, a teacher who calls when our son is unwell. That is the school.",
      name: "Karan Malhotra",
      role: "Parent · Grade III",
    },
  ];
  const [i, setI] = useState(0);
  const q = quotes[i];
  return (
    <section className="py-28 md:py-36">
      <div className="container-edge grid grid-cols-1 lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <div className="eyebrow">Parent voices</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]">
            In their own words.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Twenty-five years on, the most reliable measure of a school is still
            the families who choose to stay.
          </p>

          <div className="mt-10 flex items-center gap-3">
            <button
              onClick={() => setI((p) => (p - 1 + quotes.length) % quotes.length)}
              className="h-11 w-11 rounded-full border border-border grid place-items-center hover:bg-[var(--navy)] hover:text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setI((p) => (p + 1) % quotes.length)}
              className="h-11 w-11 rounded-full border border-border grid place-items-center hover:bg-[var(--navy)] hover:text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="ml-3 text-xs uppercase tracking-[0.2em] text-muted-foreground tabular-nums">
              {String(i + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-8">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-display text-2xl md:text-[34px] leading-[1.35] tracking-tight text-balance"
          >
            <span className="serif-italic text-[var(--gold)] text-5xl leading-none align-top mr-1">"</span>
            {q.text}
          </motion.blockquote>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-[var(--navy)] text-white grid place-items-center font-display font-semibold">
              {q.name[0]}
            </div>
            <div>
              <div className="font-medium">{q.name}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-0.5">{q.role}</div>
            </div>
          </div>

          {/* video testimonial card */}
          <div className="mt-12 group relative overflow-hidden rounded-3xl aspect-[16/8] image-zoom cursor-pointer">
            <img src={cultural} alt="Watch parent stories" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[var(--navy)]/60" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="flex items-center gap-4 text-white">
                <span className="h-16 w-16 rounded-full bg-white text-[var(--navy)] grid place-items-center group-hover:scale-110 transition-transform">
                  <Play className="h-5 w-5 ml-1" />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--gold)]">Watch</div>
                  <div className="font-display text-xl mt-1">Parent stories · 4 min film</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- NEWS ---------- */
function News() {
  const news = [
    { tag: "Workshop", date: "12 Jul", title: "AI for Schools — a hands-on workshop for Class IX students", note: "5 min read" },
    { tag: "Competition", date: "02 Aug", title: "Inter-school Math Olympiad qualifiers, hosted on campus", note: "Event" },
    { tag: "Calendar", date: "21 Aug", title: "Independence Day · Annual cultural showcase", note: "Open to families" },
  ];
  return (
    <section className="py-28 md:py-36 bg-[var(--surface)]">
      <div className="container-edge">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <Reveal>
            <div className="eyebrow">Latest from campus</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] max-w-2xl">
              News, events &amp; the small print of a busy school year.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="#" className="btn-ghost">View calendar <Calendar className="h-4 w-4" /></a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {news.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.06}>
              <article className="bg-background p-8 h-full flex flex-col group cursor-pointer">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--royal)] uppercase tracking-[0.22em] font-medium">{n.tag}</span>
                  <span className="text-muted-foreground">{n.date}</span>
                </div>
                <h3 className="mt-8 font-display text-xl leading-snug group-hover:text-[var(--royal)] transition-colors">
                  {n.title}
                </h3>
                <div className="mt-auto pt-10 text-xs uppercase tracking-[0.18em] text-muted-foreground flex items-center justify-between">
                  {n.note}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-foreground" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ADMISSIONS ---------- */
function Admissions() {
  const steps = [
    { n: "01", t: "Enquire & Register", d: "Complete the online enquiry — our admissions team responds within 24 hours." },
    { n: "02", t: "Campus Visit", d: "Tour the campus with our team and meet faculty across the wing your child will join." },
    { n: "03", t: "Assessment & Interaction", d: "An informal interaction designed to understand the child — not to test them." },
    { n: "04", t: "Offer & Onboarding", d: "Offers are extended on a rolling basis. Onboarding includes a parent orientation." },
  ];
  return (
    <section id="admissions" className="py-28 md:py-36">
      <div className="container-edge">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <Reveal className="lg:col-span-7">
            <div className="eyebrow">Admissions 2026–27</div>
            <h2 className="mt-5 font-display text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.02]">
              Four unhurried steps. <br />
              <span className="serif-italic text-[var(--royal)]">No surprises.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5 lg:pt-10">
            <p className="text-muted-foreground leading-relaxed">
              We believe admissions should be a conversation, not a contest.
              Here is exactly how it works — from the moment you say hello
              to the morning your child wears the uniform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="btn-primary">Apply Now <ArrowRight className="h-4 w-4" /></a>
              <a href="#" className="btn-ghost">Download Prospectus <Download className="h-4 w-4" /></a>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-0 right-0 top-[44px] h-px bg-border" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} className="relative">
                <div className="flex md:block items-start gap-5">
                  <div className="h-[88px] w-[88px] rounded-full bg-background border border-border grid place-items-center font-display text-2xl font-semibold relative z-10">
                    <span className="text-[var(--gold)]">{s.n}</span>
                  </div>
                  <div className="md:mt-7 flex-1">
                    <h3 className="font-display text-xl font-semibold">{s.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    { q: "What is the age criteria for admission?", a: "Children should be 3+ years for Nursery, 4+ for KG, and so on as on 31st March of the admission year. Exact cutoffs are listed in the prospectus." },
    { q: "Is Assise Modern School CBSE affiliated?", a: "Yes. We are a CBSE-affiliated, co-educational, day school, additionally accredited by NABET A++." },
    { q: "What is the average class size?", a: "We cap classrooms at 28 students with a faculty-to-student ratio of 1:14 across the school." },
    { q: "Do you provide transport?", a: "Yes — a GPS-tracked, attended bus fleet serves 22 routes across the city." },
    { q: "When do admissions open?", a: "Admissions for the new academic session open every September, with offers rolling through January." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 md:py-36 bg-[var(--surface)]">
      <div className="container-edge grid grid-cols-1 lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <div className="eyebrow">Frequently asked</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]">
            Answers, before you have to ask.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Cannot find what you are looking for? Our admissions team is one phone call away.
          </p>
        </Reveal>

        <div className="lg:col-span-8">
          <div className="bg-background border border-border rounded-3xl divide-y divide-border overflow-hidden">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full px-8 py-7 flex items-center justify-between gap-8 text-left group"
                  >
                    <span className="font-display text-lg md:text-xl font-medium pr-4">{it.q}</span>
                    <span className="h-10 w-10 shrink-0 rounded-full border border-border grid place-items-center group-hover:bg-[var(--navy)] group-hover:text-white group-hover:border-[var(--navy)] transition-colors">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-8 pb-7 text-muted-foreground leading-relaxed max-w-2xl">{it.a}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="container-edge grid grid-cols-1 lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <div className="eyebrow">Get in touch</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]">
            Come walk the corridors. <br />
            <span className="serif-italic text-[var(--royal)]">See for yourself.</span>
          </h2>

          <div className="mt-10 space-y-6">
            {[
              { icon: MapPin, h: "Visit", b: "12, Vivekananda Marg,\nIndirapuram, Ghaziabad 201014" },
              { icon: Phone, h: "Call", b: "+91 120 4567 800\nMon–Sat · 8:00 to 17:00" },
              { icon: Mail, h: "Write", b: "admissions@assise.edu.in\nprincipal@assise.edu.in" },
            ].map(({ icon: I, h, b }) => (
              <div key={h} className="flex gap-5">
                <div className="h-11 w-11 shrink-0 rounded-full bg-[var(--navy)] text-white grid place-items-center">
                  <I className="h-4 w-4" />
                </div>
                <div>
                  <div className="eyebrow !text-[var(--navy)]">{h}</div>
                  <p className="mt-2 text-[15px] leading-relaxed whitespace-pre-line text-muted-foreground">{b}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-border aspect-[16/10]">
            <iframe
              title="Assise Modern School location"
              src="https://www.google.com/maps?q=Indirapuram%2C+Ghaziabad&output=embed"
              className="w-full h-full grayscale-[0.6] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7">
          <form className="card-soft p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { l: "Parent's name", t: "text", ph: "Full name" },
                { l: "Email", t: "email", ph: "you@example.com" },
                { l: "Phone", t: "tel", ph: "+91" },
                { l: "Applying for grade", t: "text", ph: "e.g. Grade III" },
              ].map((f) => (
                <label key={f.l} className="block">
                  <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">{f.l}</span>
                  <input
                    type={f.t}
                    placeholder={f.ph}
                    className="w-full bg-transparent border-b border-border py-3 text-[15px] focus:outline-none focus:border-[var(--royal)] transition-colors"
                  />
                </label>
              ))}
            </div>
            <label className="block mt-8">
              <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Message</span>
              <textarea
                rows={4}
                placeholder="Tell us a little about your child…"
                className="w-full bg-transparent border-b border-border py-3 text-[15px] focus:outline-none focus:border-[var(--royal)] transition-colors resize-none"
              />
            </label>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-[var(--royal)]" />
                Replies within 24 working hours
              </div>
              <button type="button" className="btn-primary">
                Send enquiry <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>

          <Reveal delay={0.25} className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground mr-2">Follow</span>
            {[Instagram, Facebook, Youtube, Linkedin].map((I, i) => (
              <a
                key={i}
                href="#"
                className="h-11 w-11 rounded-full border border-border grid place-items-center hover:bg-[var(--navy)] hover:text-white transition-colors"
                aria-label="Social link"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  const cols = [
    { h: "Quick Links", l: ["About", "Principal's Note", "Faculty", "Campus Tour", "News & Events"] },
    { h: "Admissions", l: ["How to Apply", "Fee Structure", "Prospectus", "Transport", "Scholarships"] },
    { h: "Academics", l: ["Primary Wing", "Middle School", "Secondary", "Senior Secondary", "Co-curricular"] },
  ];
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="container-edge pt-24 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-white text-[var(--navy)] grid place-items-center font-display font-bold">A</div>
              <div>
                <div className="font-display font-semibold text-lg">Assise Modern School</div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/50 mt-0.5">Estd. 1998 · CBSE</div>
              </div>
            </div>
            <p className="mt-8 max-w-md text-white/65 leading-relaxed text-[15px]">
              A community of educators, parents and learners building a school we
              would have wanted to attend ourselves.
            </p>

            <div className="mt-8 flex gap-3">
              {[Instagram, Facebook, Youtube, Linkedin].map((I, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full border border-white/15 grid place-items-center hover:bg-[var(--gold)] hover:text-[var(--navy)] hover:border-[var(--gold)] transition-colors" aria-label="Social">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.h} className="lg:col-span-2">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--gold)]">{c.h}</div>
              <ul className="mt-6 space-y-3">
                {c.l.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--gold)]">Contact</div>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>+91 120 4567 800</li>
              <li>admissions@<br />assise.edu.in</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Assise Modern School. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
