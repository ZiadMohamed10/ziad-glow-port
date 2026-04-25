import { motion } from "framer-motion";

export const MarqueeName = () => {
  const name = "Ziad Mohamed";

  return (
    <div className="py-12 sm:py-20 overflow-hidden whitespace-nowrap select-none pointer-events-none">
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {/* Duplicated content + animating to -50% creates one continuous seamless loop */}
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="flex shrink-0 items-center">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter px-4 sm:px-10 text-muted-foreground/10 italic"
              >
                {name}{" "}
                <span className="mx-2 sm:mx-6 text-primary/40 not-italic">
                  ||
                </span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
