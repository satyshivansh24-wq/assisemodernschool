import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const v: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof typeof motion;
}) {
  const Comp = motion[Tag] as typeof motion.div;
  return (
    <Comp
      variants={v}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="tabular-nums"
    >
      <motion.span
        initial={{ "--n": 0 } as never}
        whileInView={{ "--n": value } as never}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2.2, ease: [0.2, 0.8, 0.2, 1] }}
        onUpdate={(latest: { [k: string]: number }) => {
          const el = document.activeElement;
          void el;
          // no-op; visual handled by sibling text below
        }}
      />
      <CountText to={value} />
      {suffix}
    </motion.span>
  );
}

function CountText({ to }: { to: number }) {
  return (
    <motion.span
      initial={{ count: 0 } as never}
      whileInView={{ count: to } as never}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 2, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {(v) => Math.floor((v as unknown as { count: number }).count ?? 0).toLocaleString()}
    </motion.span>
  );
}
