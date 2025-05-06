import { motion } from "framer-motion";

const ScrollIndicator = () => {
  const handleScroll = () => {
    const target = document.getElementById("ABOUT ME");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="flex flex-col items-center mt-10 cursor-pointer"
      onClick={handleScroll}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg
          width="35"
          height="55"
          viewBox="0 0 35 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="33"
            height="53"
            rx="16.5"
            stroke="#ffffff"
            strokeWidth="2"
          />
          <motion.path
            d="M17.5 38L22 33H13L17.5 38Z"
            fill="#42a5f5"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </svg>
      </motion.div>

      <motion.p
        className="mt-2 text-sm text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Scroll Down
      </motion.p>
    </div>
  );
};

export default ScrollIndicator;
