import { useState } from 'react';
import { motion, AnimatePresence, type Transition } from 'framer-motion';
import { asset } from '../utils/assets';

// Fixed list extracted from the design frame
const plantsData = [
  {
    id: 0,
    name: "Cactus: Spike",
    description: "The ultimate minimalist companion for your workspace. Spike doesn't care about drama, never complains about the dry office air, and is perfectly happy being ignored for weeks. It stores its own water and guards your desk like a tiny, green, prickly soldier.",
    lifespan: "10 - 50 Years",
    height: "15 - 30 cm",
    watering: "1x / Month",
    price: "18.99",
    image: "images/cactus_spike.png"
  },
  {
    id: 1,
    name: "Aloe Vera",
    description: "Known as the 'plant of immortality', Aloe Vera is a hardy succulent that thrives with minimal care. Its striking fleshy leaves not only look great but contain a soothing gel.",
    lifespan: "5 - 25 Years",
    height: "30 - 60 cm",
    watering: "1x / 2 Weeks",
    price: "22.99",
    image: "images/aloevera.png"
  },
  {
    id: 2,
    name: "Snake Plant",
    description: "A nearly indestructible houseplant with striking upright leaves. Perfect for beginners and busy individuals, it purifies the air and adds a modern architectural touch to any room.",
    lifespan: "5 - 10 Years",
    height: "30 - 90 cm",
    watering: "1x / 3 Weeks",
    price: "24.99",
    image: "images/snake_plant.png"
  },
  {
    id: 3,
    name: "Pothos",
    description: "One of the easiest houseplants to grow, featuring beautiful trailing vines with heart-shaped leaves. It adapts well to various lighting conditions and forgives occasional neglect.",
    lifespan: "5 - 10 Years",
    height: "Trails up to 3m",
    watering: "1x / Week",
    price: "16.99",
    image: "images/pothos.png"
  },
  {
    id: 4,
    name: "Monstera",
    description: "Famous for its natural leaf holes and tropical vibe. The Monstera is a fast-growing, statement plant that transforms any ordinary desk into a lush, vibrant jungle.",
    lifespan: "10 - 15 Years",
    height: "1 - 3 m",
    watering: "1x / 2 Weeks",
    price: "35.99",
    image: "images/monstera.png"
  },
  {
    id: 5,
    name: "Pilea",
    description: "Also known as the Chinese Money Plant, it features charming, round, coin-like leaves. It's an energetic grower that frequently produces baby plants to share with friends.",
    lifespan: "5 - 10 Years",
    height: "20 - 30 cm",
    watering: "1x / Week",
    price: "19.99",
    image: "images/pilea.png"
  }
];

// Animation configurations
const springTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 30,
  mass: 1.2
};

// Horizontal image slide
const imageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? `${100 * Math.abs(direction)}%` : `-${100 * Math.abs(direction)}%`,
    opacity: 0,
    scale: 0.9
  }),
  center: {
    x: "0%",
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? `-${100 * Math.abs(direction)}%` : `${100 * Math.abs(direction)}%`,
    opacity: 0,
    scale: 0.9
  })
};

// Vertical text slide
const textVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 60 * Math.abs(direction) : -60 * Math.abs(direction),
    opacity: 0
  }),
  center: {
    y: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    y: direction > 0 ? -60 * Math.abs(direction) : 60 * Math.abs(direction),
    opacity: 0
  })
};

export default function Features() {
  const [[page, direction], setPage] = useState([0, 0]);

  const activePlant = plantsData[page];

  const handlePaginate = (newIndex: number) => {
    if (newIndex === page) return;
    setPage([newIndex, newIndex - page]);
  };

  const personalityCards = [
    { img: "images/card_1.png", price: "24.99$", q: "Always you Busy?", title: "Meet Ivy" },
    { img: "images/card_2.png", price: "5.99$", q: "Need for inspiration?", title: "Meet mint" },
    { img: "images/card_3.png", price: "16.99$", q: "Always on the move?", title: "Meet Spike" }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      months: "March-May",
      iconColor: "#346E3C",
      iconBg: "rgba(52,110,60,0.08)",
      taskIconColor: "#10B981",
      tasks: [
        { text: "Water every 5 days", icon: "drop" },
        { text: "Add fertilizer", icon: "fertilizer" },
        { text: "Move to bright light", icon: "wizard" },
      ],
    },
    {
      season: "Summer",
      months: "June-August",
      iconColor: "#F59E0B",
      iconBg: "#FAEFC4",
      taskIconColor: "#F59E0B",
      tasks: [
        { text: "Water daily", icon: "drop" },
        { text: "Increase air circulation", icon: "wind" },
        { text: "Protect from heat", icon: "shield" },
      ],
    },
    {
      season: "Autumn",
      months: "September-November",
      iconColor: "#F97316",
      iconBg: "#FAE8D1",
      taskIconColor: "#F97316",
      tasks: [
        { text: "Reduce watering", icon: "drop" },
        { text: "Prune old growth", icon: "scissors" },
        { text: "Watch temperature", icon: "thermometer" },
      ],
    },
    {
      season: "Winter",
      months: "December-February",
      iconColor: "#6366F1",
      iconBg: "#DCE2FA",
      taskIconColor: "#6366F1",
      tasks: [
        { text: "Water sparingly", icon: "drop" },
        { text: "Reduce light", icon: "moon" },
        { text: "Protect from drafts", icon: "shield" },
      ],
    },
  ];

  const steps = [
    {
      title: "Unboxing",
      desc: "Let the leaves settle and acclimate to your light.",
      icon: "/steps/step_1.svg",
    },
    {
      title: "First Mist",
      desc: "Apply a light moisture layer after 48 hours.",
      icon: "/steps/step_2.svg",
    },
    {
      title: "Routine",
      desc: "Establish a weekly cadence for feeding and care.",
      icon: "/steps/step_3.svg",
    },
    {
      title: "Watch it grow",
      desc: "After a short time, your plant will love you because you take care of it.",
      icon: "/steps/step_4.svg",
    },
  ];

  return (
    <article className="w-full">

      <section className="w-full bg-[#39BB4B]/[0.08] relative pt-4 pb-20 overflow-hidden">

        <div className="absolute inset-0 flex justify-end items-start pt-8 pointer-events-none z-0">
          <img
            src={asset("bg_plant.svg")}
            alt=""
            className="w-[34%] h-auto"
          />
        </div>
        <div className="mx-auto max-w-screen-xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-48 pr-18 min-h-[450px]">

            {/* Left: Plant Image Container */}
            <div className="shrink-0 relative relative min-w-[450px] h-[350px] md:h-[450px]">
              <AnimatePresence custom={direction} mode="popLayout">
                <motion.img
                  key={activePlant.id}
                  src={activePlant.image}
                  alt={activePlant.name}
                  className="h-full w-auto object-contain drop-shadow-xl"
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={springTransition}
                />
              </AnimatePresence>
            </div>

            {/* Right: Plant Details Container */}
            <div className="flex-1 w-full max-w-[650px] space-y-8">

              {/* Animated Name & Description */}
              <div className="relative">
                <AnimatePresence custom={direction} mode="popLayout">
                  <motion.div
                    key={activePlant.id}
                    className="space-y-4 w-full"
                    custom={direction}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={springTransition}
                  >
                    <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F1F1F]/[0.88] font-tomorrow">
                      {activePlant.name}
                    </h2>
                    <p className="text-[18px] font-medium text-[#1F1F1F]/[0.66] font-poppins min-h-[136px]">
                      {activePlant.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-8 pt-4 border-t border-gray-200/60 w-max">

                {/* Lifespan */}
                <div className="flex items-center gap-3">
                  <img src={asset("heart.svg")} alt="Lifespan" className="w-6 h-6" />
                  <div className="flex flex-col min-w-[90px]">
                    <span className="text-[#1F1F1F]/[0.50] font-poppins text-[14px] font-medium tracking-wider">Lifespan</span>
                    <AnimatePresence custom={direction} mode="popLayout">
                      <motion.strong
                        key={activePlant.id}
                        custom={direction}
                        variants={textVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={springTransition}
                        className="text-[#1F1F1F]/[0.80] font-poppins text-[16px] font-medium tracking-wider block whitespace-nowrap"
                      >
                        {activePlant.lifespan}
                      </motion.strong>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Avg Height */}
                <div className="flex items-center gap-3">
                  <img src={asset("ruler.svg")} alt="Height" className="w-6 h-6" />
                  <div className="flex flex-col min-w-[90px]">
                    <span className="text-[#1F1F1F]/[0.50] font-poppins text-[14px] font-medium tracking-wider">Avg Height</span>
                    <AnimatePresence custom={direction} mode="popLayout">
                      <motion.strong
                        key={activePlant.id}
                        custom={direction}
                        variants={textVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={springTransition}
                        className="text-[#1F1F1F]/[0.80] font-poppins text-[16px] font-medium tracking-wider block whitespace-nowrap"
                      >
                        {activePlant.height}
                      </motion.strong>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Watering */}
                <div className="flex items-center gap-3">
                  <img src={asset("water_pump.svg")} alt="Watering" className="w-6 h-6" />
                  <div className="flex flex-col min-w-[90px]">
                    <span className="text-[#1F1F1F]/[0.50] font-poppins text-[14px] font-medium tracking-wider">Watering</span>
                    <AnimatePresence custom={direction} mode="popLayout">
                      <motion.strong
                        key={activePlant.id}
                        custom={direction}
                        variants={textVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={springTransition}
                        className="text-[#1F1F1F]/[0.80] font-poppins text-[16px] font-medium tracking-wider block whitespace-nowrap"
                      >
                        {activePlant.watering}
                      </motion.strong>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <button className="group bg-[#346E3C] hover:bg-[#25613E] text-white pl-6 pr-1 py-1 rounded-full font-medium flex items-center w-fit mt-4">
                <span className="flex items-center gap-2">
                  <span>Add to my desk</span>
                  <span className="text-white/44">•</span>
                  <span>{activePlant.price}$</span>
                </span>

                <div className="ml-4 bg-white p-2.5 rounded-full flex items-center justify-center">
                  <img
                    src={asset("add_to_cart.svg")}
                    alt="Cart"
                    className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45"
                  />
                </div>
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* Thumbnails Row */}
      <div className="relative max-w-4xl mx-auto flex justify-center gap-4 -mt-10 pb-4 px-4 snap-x z-20">
        {plantsData.map((plant, idx) => (
          <button
            key={plant.id}
            onClick={() => handlePaginate(idx)}
            className={`
              relative w-20 h-20 rounded-[14px] bg-white p-2.5 transition-all duration-300 flex-shrink-0 snap-center focus:outline-none
              ${page === idx
                ? 'border-2 border-[#307B4F] shadow-md scale-105 -translate-y-1'
                : ''}
            `}
          >
            <img
              src={asset(plant.image)}
              alt={plant.name}
              className="w-full h-full object-contain pointer-events-none"
            />
          </button>
        ))}
      </div>


      {/* Cards Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-32 relative z-0">

        <div className="absolute inset-y-0 w-[90%] top-[25%] left-1/2 -translate-x-1/2 z-0">
          <img
            src={asset("images/cards_bg.svg")}
            alt=""
            className="w-full h-full"
          />
        </div>

        <div className="w-[66%] mx-auto relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
            {personalityCards.map((card, idx) => (
              <div key={idx} className="group bg-white rounded-3xl p-4  shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-brand-bg">
                  <span className="absolute top-3 left-3 bg-brand-green text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full z-10">
                    {card.price}
                  </span>

                  <img
                    src={asset(card.img)}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <p className="font-poppins font-medium text-[18px] text-[#1F1F1F]/[0.88]">{card.q}</p>
                <p className="font-poppins font-medium text-[18px] text-[#1F1F1F]/[0.88]">{card.title}</p>
                <a href="#" className="text-brand-green text-xs font-medium hover:underline inline-block pt-1">
                  View Details
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-brand-green font-poppins font-medium text-[16px] mt-6 pb-6 pt-2 text-sm leading-relaxed">
            Different plants, Different personalities.<br />Find the one that feels most like you.
          </p>
        </div>
      </section>


      {/* Care Steps Section */}
      <section className="max-w-7xl mt-[100px] mx-auto px-4 py-20 text-center">
        <span className="bg-brand-light px-6 leading-none rounded-full inline-block mb-[37px]">
          <span className="relative -top-2 text-brand-green font-poppins font-medium text-[24px] tracking-[0.48px]">
            Small Care, Big Rewards
          </span>
        </span>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-[#39BB4B]/[0.08] rounded-2xl flex items-center justify-center mb-4">
                <img
                  src={asset(step.icon)}
                  alt={step.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
              {/* Title */}
              <h4 className="font-bold text-brand-text mb-2">
                {step.title}
              </h4>

              {/* Description */}
              <p className="text-brand-gray text-sm max-w-[200px] text-center">
                {step.desc}
              </p>

              {/* Arrow */}
              {idx < steps.length - 1 && (
                <img
                  src={asset(`/images/dashed_arrow_${idx + 1}.svg`)}
                  alt=""
                  className="hidden md:block absolute top-8 -right-16 w-24 pointer-events-none"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Care Section */}
      <section className="w-full px-6 sm:px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto relative">

          {/* Outer Green Background Box */}
          <div className="bg-[#39BB4B]/[0.08] rounded-[40px] pt-12 md:pt-16 pb-12 md:pb-14 px-6 md:px-12 relative z-0">

            <div className="absolute right-6 lg:-right-16 top-[0] h-[100%] w-[15%] pointer-events-none hidden lg:block z-10">

              <img
                src={asset("plant_seasons_start.svg")}
                alt="Plant State 1"
                className="absolute top-0 left-0 w-full h-auto animate-leaf-start-frames"
              />

              <img
                src={asset("plant_seasons_end.svg")}
                alt="Plant State 2"
                className="absolute top-0 left-0 w-full h-auto animate-leaf-end-frames"
              />

            </div>

            {/* Texts Container */}
            <div className="max-w-xl relative z-20">
              <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F1F1F]/[0.88] font-tomorrow leading-tight">
                Care at the Right Time
              </h2>
              <p className="text-[#1F1F1F]/[0.66] text-[16px] font-medium font-poppins mt-3">
                Know exactly when to water, feed, and repot
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 md:mt-8 relative z-20">
              {seasonalCare.map((season, idx) => (
                <div
                  key={idx}
                >
                  {/* Header: Icon + Text */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: season.iconBg,
                        color: season.iconColor,
                      }}
                    >
                      {/* Inline SVGs for Seasons */}
                      {season.season === "Spring" && (
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.334 1V2.6668M9.334 16.0012V17.668M3.4416 3.4416L4.6167 4.6167M14.0512 14.0512L15.2263 15.2263M1 9.334H2.6668M16.0012 9.334H17.668M4.6167 14.0512L3.4416 15.2263M15.2263 3.4416L14.0512 4.6167M12.6676 9.334C12.6676 11.1751 11.1751 12.6676 9.334 12.6676C7.4929 12.6676 6.0004 11.1751 6.0004 9.334C6.0004 7.4929 7.4929 6.0004 9.334 6.0004C11.1751 6.0004 12.6676 7.4929 12.6676 9.334Z" stroke="#346E3C" stroke-width="2" stroke-linecap="round" />
                        </svg>

                      )}

                      {season.season === "Summer" && (
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.334 1V2.6668M9.334 16.0012V17.668M3.4416 3.4416L4.6167 4.6167M14.0512 14.0512L15.2263 15.2263M1 9.334H2.6668M16.0012 9.334H17.668M4.6167 14.0512L3.4416 15.2263M15.2263 3.4416L14.0512 4.6167M12.6676 9.334C12.6676 11.1751 11.1751 12.6676 9.334 12.6676C7.4929 12.6676 6.0004 11.1751 6.0004 9.334C6.0004 7.4929 7.4929 6.0004 9.334 6.0004C11.1751 6.0004 12.6676 7.4929 12.6676 9.334Z" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" />
                        </svg>

                      )}

                      {season.season === "Autumn" && (
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 17.5C1 14.9999 2.54175 13.0332 5.23357 12.4998C7.25035 12.0998 9.3338 10.8331 10.1672 9.9997M8.5002 16.6666C7.03683 16.6711 5.62525 16.1254 4.54541 15.1378C3.46557 14.1502 2.79635 12.7928 2.67049 11.3348C2.54462 9.87692 2.9713 8.42493 3.8659 7.26687C4.7605 6.1088 6.05767 5.32925 7.50014 5.08283C12.2504 4.16612 13.5005 3.73277 15.1672 1.66602C16.0006 3.33275 16.834 5.1495 16.834 8.33296C16.834 12.9165 12.8504 16.6666 8.5002 16.6666Z" stroke="#F97316" stroke-width="2" stroke-linecap="round" />
                        </svg>

                      )}

                      {season.season === "Winter" && (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.33434 12.4159C2.71524 11.7833 2.2482 11.0181 1.96861 10.1782C1.68901 9.3384 1.60419 8.44594 1.72056 7.56846C1.83693 6.69099 2.15145 5.8515 2.64029 5.11359C3.12913 4.37568 3.77946 3.7587 4.54205 3.30938C5.30463 2.86007 6.15945 2.5902 7.04177 2.52021C7.92408 2.45023 8.81076 2.58197 9.63462 2.90546C10.4585 3.22895 11.1979 3.73569 11.797 4.38732C12.396 5.03894 12.8389 5.81836 13.0921 6.66652H14.5837C15.3883 6.66643 16.1715 6.92513 16.8177 7.40441C17.464 7.88369 17.9389 8.55813 18.1725 9.3281C18.406 10.0981 18.3857 10.9228 18.1146 11.6803C17.8435 12.4379 17.3359 13.0881 16.6669 13.5351M6.6672 12.4998H6.67553M6.6672 15.8332H6.67553M10.0003 14.1665H10.0087M10.0003 17.5H10.0087M13.3335 12.4998H13.3418M13.3335 15.8332H13.3418" stroke="#6366F1" stroke-width="2" stroke-linecap="round" />
                        </svg>

                      )}
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1F1F1F]/[0.88] font-poppins text-[18px] leading-tight">
                        {season.season}
                      </h4>

                      <p className="text-[#1F1F1F]/[0.66] text-[12px] font-medium font-poppins mt-0.5">
                        {season.months}
                      </p>
                    </div>
                  </div>

                  {/* Tasks */}
                  <ul className="space-y-3.5">
                    {season.tasks.map((task, i) => (
                      <li
                        key={i}
                        className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-[12px] font-poppins text-[#1F1F1F]/[0.88] w-fit"
                      >
                        {/* Drop */}
                        {task.icon === "drop" && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3004 13.3003C10.4251 14.1755 9.23803 14.6672 8.00021 14.6672C6.76239 14.6672 5.57527 14.1755 4.7 13.3003C3.82473 12.4251 3.33301 11.2381 3.33301 10.0003C3.33301 8.66695 3.99975 7.40023 5.33324 6.33352C6.66672 5.2668 7.66684 3.66674 8.00021 2C8.33358 3.66674 9.33369 5.2668 10.6672 6.33352C12.0007 7.40023 12.6674 8.66695 12.6674 10.0003C12.6674 11.2381 12.1757 12.4251 11.3004 13.3003Z" stroke={season.taskIconColor} stroke-width="2" stroke-linecap="round" />
                          </svg>

                        )}

                        {/* Fertilizer */}
                        {task.icon === "fertilizer" && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_101_3465)">
                              <path d="M1.33301 14C1.33301 11.9999 2.56641 10.4265 4.71986 9.99979C6.33329 9.67978 8.00005 8.66641 8.66675 7.99971M7.33317 13.3333C6.16247 13.3368 5.03321 12.9003 4.16933 12.1102C3.30546 11.3201 2.77009 10.2342 2.6694 9.06783C2.5687 7.90149 2.91005 6.7399 3.62573 5.81345C4.34141 4.88699 5.37914 4.26335 6.53312 4.06621C10.3333 3.33285 11.3334 2.98617 12.6668 1.33276C13.3335 2.66615 14.0002 4.11955 14.0002 6.66632C14.0002 10.3331 10.8134 13.3333 7.33317 13.3333Z" stroke={season.taskIconColor} stroke-width="2" stroke-linecap="round" />
                            </g>
                            <defs>
                              <clipPath id="clip0_101_3465">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>

                        )}

                        {/* Wizard (Magic) */}
                        {task.icon === "wizard" && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.31025 9.23149C2.41709 9.29856 2.54077 9.33394 2.66691 9.33351H7.33306C7.44088 9.33316 7.54718 9.35898 7.64284 9.40874C7.73849 9.45851 7.82065 9.53074 7.88227 9.61924C7.94388 9.70775 7.98311 9.80988 7.99659 9.91688C8.01007 10.0239 7.99739 10.1325 7.95965 10.2336L6.6798 14.2471C6.65975 14.32 6.66507 14.3976 6.6949 14.4671C6.72473 14.5366 6.77729 14.5938 6.84396 14.6295C6.91062 14.6652 6.98742 14.6771 7.06176 14.6633C7.1361 14.6496 7.20356 14.611 7.25306 14.5538L13.8523 7.75342C13.9318 7.65544 13.9818 7.53692 13.9966 7.41163C14.0114 7.28633 13.9904 7.15941 13.9359 7.0456C13.8815 6.9318 13.7959 6.83578 13.689 6.76871C13.5822 6.70163 13.4585 6.66626 13.3324 6.66669H8.66624C8.55841 6.66704 8.45211 6.64122 8.35646 6.59146C8.2608 6.54169 8.17864 6.46946 8.11703 6.38095C8.05541 6.29245 8.01619 6.19032 8.00271 6.08332C7.98923 5.97633 8.0019 5.86765 8.03964 5.76663L9.3195 1.75306C9.33955 1.68015 9.33422 1.6026 9.30439 1.53312C9.27456 1.46364 9.222 1.40637 9.15534 1.37071C9.08867 1.33504 9.01187 1.32311 8.93753 1.33686C8.86319 1.35061 8.79573 1.38923 8.74623 1.44638L2.14697 8.24678C2.0675 8.34476 2.01746 8.46328 2.00265 8.58857C1.98785 8.71387 2.0089 8.84079 2.06335 8.95459C2.1178 9.0684 2.20341 9.16442 2.31025 9.23149Z" stroke={season.taskIconColor} stroke-width="2" stroke-linecap="round" />
                          </svg>

                        )}

                        {/* Wind */}
                        {task.icon === "wind" && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.53358 13.0662C8.70261 13.1929 8.89935 13.2777 9.10757 13.3135C9.3158 13.3494 9.52956 13.3352 9.73124 13.2722C9.93291 13.2092 10.1167 13.0992 10.2675 12.9513C10.4184 12.8033 10.5318 12.6216 10.5987 12.4212C10.6655 12.2208 10.6837 12.0074 10.6518 11.7986C10.62 11.5897 10.5389 11.3915 10.4154 11.2201C10.2918 11.0487 10.1293 10.9092 9.94127 10.8129C9.7532 10.7166 9.54493 10.6664 9.33365 10.6664H1.33301M11.6672 5.33364C11.8376 5.10638 12.0634 4.92647 12.323 4.81098C12.5825 4.69549 12.8673 4.64826 13.1503 4.67377C13.4333 4.69928 13.705 4.79669 13.9397 4.95674C14.1745 5.11679 14.3644 5.33418 14.4914 5.58825C14.6185 5.84233 14.6785 6.12466 14.6657 6.40844C14.653 6.69222 14.5678 6.96803 14.4185 7.20967C14.2691 7.45131 14.0604 7.65076 13.8123 7.78909C13.5641 7.92742 13.2847 8.00004 13.0006 8.00004H1.33301M6.53342 2.93388C6.70245 2.80713 6.89919 2.72235 7.10741 2.68654C7.31564 2.65072 7.5294 2.66489 7.73108 2.72788C7.93275 2.79087 8.11657 2.90087 8.26738 3.04882C8.4182 3.19677 8.53169 3.37843 8.5985 3.57884C8.66531 3.77925 8.68354 3.99266 8.65168 4.20149C8.61981 4.41033 8.53877 4.6086 8.41523 4.77997C8.29169 4.95135 8.12919 5.09091 7.94111 5.18718C7.75304 5.28344 7.54477 5.33364 7.33349 5.33364H1.33301" stroke={season.taskIconColor} stroke-width="2" stroke-linecap="round" />
                          </svg>

                        )}

                        {/* Shield */}
                        {task.icon === "shield" && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.22644 14.6335C10.9995 13.6668 13.3326 12.0001 13.3326 8.66663V3.99982C13.3326 3.823 13.2624 3.65343 13.1374 3.5284C13.0123 3.40337 12.8428 3.33313 12.666 3.33313C11.3328 3.33313 9.67296 2.53977 8.50641 1.51974C8.36519 1.39906 8.18554 1.33276 7.99979 1.33276C7.81405 1.33276 7.6344 1.39906 7.49318 1.51974C6.33329 2.5331 4.66679 3.33313 3.33359 3.33313C3.1568 3.33313 2.98725 3.40337 2.86223 3.5284C2.73722 3.65343 2.66699 3.823 2.66699 3.99982V8.66663C2.66699 12.0001 5.00009 13.6668 7.77981 14.6268C7.92349 14.6804 8.08123 14.6827 8.22644 14.6335Z" stroke={season.taskIconColor} stroke-width="2" stroke-linecap="round" />
                          </svg>

                        )}

                        {/* Scissors */}
                        {task.icon === "scissors" && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.41341 5.41341L8.00008 8.00008M13.3334 2.66667L5.41341 10.5867M9.86654 9.86654L13.3332 13.3332M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4ZM6 12C6 13.1046 5.10457 14 4 14C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10C5.10457 10 6 10.8954 6 12Z" stroke={season.taskIconColor} stroke-width="2" stroke-linecap="round" />
                          </svg>

                        )}

                        {/* Thermometer */}
                        {task.icon === "thermometer" && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.33381 9.69272V2.66609C9.33381 2.31247 9.1933 1.97333 8.9432 1.72329C8.69311 1.47324 8.3539 1.33276 8.00021 1.33276C7.64652 1.33276 7.30731 1.47324 7.05721 1.72329C6.80711 1.97333 6.66661 2.31247 6.66661 2.66609V9.69272C6.15813 9.98623 5.76073 10.4393 5.53604 10.9816C5.31135 11.524 5.27193 12.1253 5.42389 12.6923C5.57585 13.2593 5.91071 13.7604 6.37652 14.1177C6.84233 14.4751 7.41307 14.6688 8.00021 14.6688C8.58735 14.6688 9.15808 14.4751 9.6239 14.1177C10.0897 13.7604 10.4246 13.2593 10.5765 12.6923C10.7285 12.1253 10.6891 11.524 10.4644 10.9816C10.2397 10.4393 9.84229 9.98623 9.33381 9.69272Z" stroke={season.taskIconColor} stroke-width="2" stroke-linecap="round" />
                          </svg>

                        )}

                        {/* Moon */}
                        {task.icon === "moon" && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8483 11.5326C13.5307 10.5957 13.9271 9.48128 13.9896 8.32397C14.0042 8.054 13.6836 7.91335 13.4542 8.05667C12.6872 8.53602 11.7803 8.74128 10.8815 8.63894C9.98279 8.5366 9.14528 8.13271 8.50567 7.49318C7.86606 6.85366 7.46211 6.01625 7.35976 5.11763C7.25741 4.21901 7.46269 3.31223 7.94211 2.54528C8.08544 2.31664 7.94411 1.99534 7.6741 2.01001C6.51666 2.0726 5.40212 2.46908 4.46522 3.1515C3.52833 3.83393 2.80918 4.77309 2.39472 5.85546C1.98025 6.93782 1.88822 8.11706 2.12974 9.25061C2.37126 10.3842 2.93599 11.4235 3.75567 12.243C4.57534 13.0625 5.61488 13.627 6.7486 13.8684C7.88232 14.1097 9.0617 14.0176 10.1442 13.6031C11.2266 13.1886 12.1658 12.4694 12.8483 11.5326Z" stroke={season.taskIconColor} stroke-width="2" stroke-linecap="round" />
                          </svg>

                        )}

                        <span className='text-[#1F1F1F]/[0.88] text-[12px] font-medium font-poppins'>{task.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </article>
  );
}