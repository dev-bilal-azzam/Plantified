import { motion, type Transition } from "framer-motion";
import { asset } from "../utils/assets";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  } as const;

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  } as const;

  const totalDuration = 2.8; 
  const branchTransition: Transition = {
    duration: totalDuration,
    repeat: Infinity,
    ease: "linear",
    times: [0, 0.3 / totalDuration, 1.3 / totalDuration, 1.6 / totalDuration, 1],
  };

  return (
    <section className="w-full py-4 md:py-8 overflow-hidden">
      <motion.div 
        className="flex flex-col-reverse md:flex-row items-top"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Left */}
        <div className="flex-1 max-w-7xl ml-auto">
          <div className="flex-1 space-y-8">
            {/* Branch Image Composite */}
            <motion.div
              variants={itemVariants}
              className="relative w-[136.81px] h-[120px]"
            >
              <img
                src={asset("branch_top_1.svg")}
                alt=""
                className="absolute top-0 left-0"
              />
              
              <motion.img
                src={asset("branch_top_2.svg")}
                alt=""
                className="absolute -top-5 left-13 origin-center"
                animate={{ rotate: [0, -3, -3, 0, 0] }} 
                transition={branchTransition}
              />

              <motion.img
                src={asset("branch_bottom_1.svg")}
                alt=""
                className="absolute top-10 left-5 origin-center"
                animate={{ rotate: [0, -10, -10, 0, 0] }}
                transition={branchTransition}
              />

              <motion.img
                src={asset("branch_bottom_2.svg")}
                alt=""
                className="absolute top-9 left-18 origin-center"
                animate={{ rotate: [-2, -13, -13, -2, -2] }}
                transition={branchTransition}
              />

              <motion.img
                src={asset("branch_bottom_3.svg")}
                alt=""
                className="absolute top-9 left-26 origin-center"
                animate={{ rotate: [-2, -8, -8, -2, -2] }}
                transition={branchTransition}
              />
              
              <motion.img
                src={asset("branch_bottom_4.svg")}
                alt=""
                className="absolute top-5 left-26.5 rotate-[-6deg]"
                style={{ transformOrigin: "100% 100%" }}
                animate={{ rotate: [0, -5, -5, 0, 0] }}
                transition={branchTransition}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 pl-6 sm:pl-8 lg:pl-12">
              <h1 className="font-tomorrow text-[24px] md:text-[32px] lg:text-[48px] font-bold leading-[110%] text-[#1F1F1FE0]">
                Life is too short, Bring a <span className="text-brand-green">green</span> friend
              </h1>
              <p className="font-poppins text-[16px] font-medium leading-relaxed text-brand-gray max-w-md">
                Your screen shouldn't be the only thing you look at all day. Breathe life back into your workspace with low maintenance desk plants designed for busy minds.
              </p>
            </motion.div>

            {/* Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pl-6 sm:pl-8 lg:pl-12">
              <span className="inline-flex items-center gap-2 bg-white/66 text-brand-green px-4 py-2 rounded-full text-sm font-medium">
                A plant won't interrupt you
              </span>
              <span className="inline-flex items-center gap-2 bg-white/66 text-brand-green px-4 py-2 rounded-full text-sm font-medium">
                A cute little roommate
              </span>
            </motion.div>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2 pl-6 sm:pl-8 lg:pl-12">
              <button
                className="group relative overflow-hidden bg-brand-green text-white pl-7 pr-3 py-3 rounded-full font-medium flex items-center gap-4 transition-transform active:scale-95 min-h-[52px]"
              >
                <span className="absolute inset-0 bg-black/8 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <span className="relative z-10">Find Your Plant Friend</span>
                <div className="relative z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center p-1.5 shadow-sm">
                  <img
                    src={asset("arrow.svg")}
                    alt="Arrow Right"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:-rotate-45"
                  />
                </div>
              </button>

              <button className="bg-transparent border border-gray-200 text-brand-green hover:bg-brand-green/8 px-8 py-3 rounded-full font-medium transition-all min-h-[52px]">
                Explore
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-end">
          <motion.div
            variants={imageVariants}
            className="flex-1 relative w-full flex justify-end items-end pr-0 pb-0 self-end"
          >
            {/* Backdrop Circle */}
            <div className="absolute w-[900px] h-[900px] rounded-full bg-[#39BB4B]/[0.06] left-1/2 top-1/2 -translate-x-[calc(300px)] -translate-y-[calc(540px)] z-0" />
            <img
              src={asset("plant.png")}
              alt="Hands gently holding a potted Monstera plant"
              className="w-[669px] max-w-[709px] h-auto object-contain object-bottom relative z-10 select-none pointer-events-none translate-y-[1px]"
              loading="eager"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}