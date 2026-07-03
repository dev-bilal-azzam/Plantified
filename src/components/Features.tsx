import { useState } from 'react';
import { motion, AnimatePresence, type Transition } from 'framer-motion';

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
    image: "/images/cactus_spike.png"
  },
  {
    id: 1,
    name: "Aloe Vera",
    description: "Known as the 'plant of immortality', Aloe Vera is a hardy succulent that thrives with minimal care. Its striking fleshy leaves not only look great but contain a soothing gel.",
    lifespan: "5 - 25 Years",
    height: "30 - 60 cm",
    watering: "1x / 2 Weeks",
    price: "22.99",
    image: "/images/aloevera.png"
  },
  {
    id: 2,
    name: "Snake Plant",
    description: "A nearly indestructible houseplant with striking upright leaves. Perfect for beginners and busy individuals, it purifies the air and adds a modern architectural touch to any room.",
    lifespan: "5 - 10 Years",
    height: "30 - 90 cm",
    watering: "1x / 3 Weeks",
    price: "24.99",
    image: "/images/snake_plant.png"
  },
  {
    id: 3,
    name: "Pothos",
    description: "One of the easiest houseplants to grow, featuring beautiful trailing vines with heart-shaped leaves. It adapts well to various lighting conditions and forgives occasional neglect.",
    lifespan: "5 - 10 Years",
    height: "Trails up to 3m",
    watering: "1x / Week",
    price: "16.99",
    image: "/images/pothos.png"
  },
  {
    id: 4,
    name: "Monstera",
    description: "Famous for its natural leaf holes and tropical vibe. The Monstera is a fast-growing, statement plant that transforms any ordinary desk into a lush, vibrant jungle.",
    lifespan: "10 - 15 Years",
    height: "1 - 3 m",
    watering: "1x / 2 Weeks",
    price: "35.99",
    image: "/images/monstera.png"
  },
  {
    id: 5,
    name: "Pilea",
    description: "Also known as the Chinese Money Plant, it features charming, round, coin-like leaves. It's an energetic grower that frequently produces baby plants to share with friends.",
    lifespan: "5 - 10 Years",
    height: "20 - 30 cm",
    watering: "1x / Week",
    price: "19.99",
    image: "/images/pilea.png"
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
    { img: "/images/card_1.png", price: "24.99$", q: "Always you Busy?", title: "Meet Ivy" },
    { img: "/images/card_2.png", price: "15.00$", q: "Need for inspiration?", title: "Meet mint" },
    { img: "/images/card_3.png", price: "18.00$", q: "Always on the move?", title: "Meet Spike" }
  ];

  const seasonalCare = [
    { season: "Spring", months: "March-May", tasks: ["Water every 5 days", "Add fertilizer", "Move to bright light"], icon: "🌸" },
    { season: "Summer", months: "June-August", tasks: ["Water daily", "Increase air circulation", "Protect from heat"], icon: "☀️" },
    { season: "Autumn", months: "September-November", tasks: ["Reduce watering", "Prune old growth", "Watch temperature"], icon: "🍂" },
    { season: "Winter", months: "December-February", tasks: ["Water sparingly", "Reduce light", "Protect from drafts"], icon: "❄️" }
  ];

  return (
    <article className="w-full">

      <section className="w-full bg-[#39BB4B]/[0.08] relative pt-16 pb-20 overflow-hidden">

        <div className="absolute inset-0 flex justify-end items-start pt-8 pointer-events-none z-0">
          <img
            src="/bg_plant.svg"
            alt=""
            className="w-[34%] h-auto"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 min-h-[450px] px-4 sm:px-6 lg:px-8">

          {/* Left: Plant Image Container */}
          <div className="flex-1 w-full flex justify-center relative h-[350px] md:h-[400px]">
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.img
                key={activePlant.id}
                src={activePlant.image}
                alt={activePlant.name}
                className="absolute h-full w-auto object-contain drop-shadow-xl"
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
          <div className="flex-1 w-full space-y-8">

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
                  <h2 className="text-4xl font-extrabold text-[#2C3E30]">
                    {activePlant.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed max-w-lg font-medium">
                    {activePlant.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Static Container with Animated Values */}
            <div className="flex items-center gap-8 pt-4 border-t border-gray-200/60 w-max">

              {/* Lifespan */}
              <div className="flex items-center gap-3">
                <img src="/heart.svg" alt="Lifespan" className="w-6 h-6 opacity-60" />
                <div className="flex flex-col min-w-[90px]">
                  <span className="text-gray-500 text-[11px] uppercase font-semibold tracking-wider">Lifespan</span>
                  <AnimatePresence custom={direction} mode="popLayout">
                    <motion.strong
                      key={activePlant.id}
                      custom={direction}
                      variants={textVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={springTransition}
                      className="text-[#2C3E30] text-sm block whitespace-nowrap"
                    >
                      {activePlant.lifespan}
                    </motion.strong>
                  </AnimatePresence>
                </div>
              </div>

              {/* Avg Height */}
              <div className="flex items-center gap-3">
                <img src="/ruler.svg" alt="Height" className="w-6 h-6 opacity-60" />
                <div className="flex flex-col min-w-[90px]">
                  <span className="text-gray-500 text-[11px] uppercase font-semibold tracking-wider">Avg Height</span>
                  <AnimatePresence custom={direction} mode="popLayout">
                    <motion.strong
                      key={activePlant.id}
                      custom={direction}
                      variants={textVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={springTransition}
                      className="text-[#2C3E30] text-sm block whitespace-nowrap"
                    >
                      {activePlant.height}
                    </motion.strong>
                  </AnimatePresence>
                </div>
              </div>

              {/* Watering */}
              <div className="flex items-center gap-3">
                <img src="/water_pump.svg" alt="Watering" className="w-6 h-6 opacity-60" />
                <div className="flex flex-col min-w-[90px]">
                  <span className="text-gray-500 text-[11px] uppercase font-semibold tracking-wider">Watering</span>
                  <AnimatePresence custom={direction} mode="popLayout">
                    <motion.strong
                      key={activePlant.id}
                      custom={direction}
                      variants={textVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={springTransition}
                      className="text-[#2C3E30] text-sm block whitespace-nowrap"
                    >
                      {activePlant.watering}
                    </motion.strong>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Completely Static Add to Desk Button */}
            <button className="group bg-[#307B4F] hover:bg-[#25613E] text-white pl-6 pr-2 py-2 rounded-full font-medium flex items-center w-fit mt-4">
              <span className="flex items-center gap-2">
                <span>Add to my desk</span>
                <span className="text-white/44">•</span>
                <span>{activePlant.price}$</span>
              </span>

              <div className="ml-4 bg-white p-2.5 rounded-full flex items-center justify-center">
                <img
                  src="/add_to_cart.svg"
                  alt="Cart"
                  className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45"
                />
              </div>
            </button>

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
              relative w-20 h-20 rounded-[14px] bg-white p-2.5 transition-all duration-300 flex-shrink-0 snap-center focus:outline-none shadow-sm
              ${page === idx
                ? 'border-2 border-[#307B4F] shadow-md scale-105 -translate-y-1'
                : 'border border-gray-100 hover:border-gray-200 hover:-translate-y-0.5 opacity-90 hover:opacity-100'}
            `}
          >
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-full object-contain pointer-events-none"
            />
          </button>
        ))}
      </div>


      {/* Cards Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-24 relative z-0">

        <svg
          className="absolute left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 top-[140px] md:top-[160px] bottom-0 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)] h-[calc(100%-140px)] md:h-[calc(100%-160px)] pointer-events-none z-0"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,12 Q 0,8 4,8 L 46,1 Q 50,0 54,1 L 96,8 Q 100,8 100,12 L 100,94 Q 100,100 94,100 L 6,100 Q 0,100 0,94 Z"
            fill="#39BB4B"
            fillOpacity="0.08"
          />
        </svg>

        <div className="absolute left-0 sm:left-2 lg:left-4 top-[200px] md:top-[220px] h-[160px] md:h-[200px] pointer-events-none z-10">
          <img
            src="/cards_bg.svg"
            alt=""
            className="h-full w-auto object-contain opacity-90"
          />
        </div>

        <div className="w-[80%] mx-auto relative z-20">
          {/* صف الكاردات المصغر */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
            {personalityCards.map((card, idx) => (
              <div key={idx} className="group bg-white rounded-3xl p-4  shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-56 rounded-2xl overflow-hidden mb-4 bg-brand-bg">
                  <span className="absolute top-3 left-3 bg-brand-green text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full z-10">
                    {card.price}
                  </span>
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full aspect-[1/1]object-cover transition-transform group-hover:scale-110 duration-500"
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

          {/* 5. النص السفلي: مسافة رأسية أقل ومحكمة (pb-4) مع نهاية السكشن */}
          <p className="text-center text-brand-green font-medium mt-6 pb-4 text-sm leading-relaxed">
            Different plants, Different personalities.<br />Find the one that feels most like you.
          </p>
        </div>
      </section>


      {/* Care Steps Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <span className="bg-brand-light text-brand-green font-bold px-6 py-2 rounded-full inline-block mb-12">Small Care, Big Rewards</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Steps */}
          {[
            { title: "Unboxing", desc: "Let the leaves settle and acclimate to your light.", icon: "📦" },
            { title: "First Mist", desc: "Apply a light moisture layer after 48 hours.", icon: "💧" },
            { title: "Routine", desc: "Establish a weekly cadence for feeding and care.", icon: "🌱" },
            { title: "Watch it grow", desc: "After a short time, your plant will love you because you take care of it.", icon: "🪴" }
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center relative z-10">
              <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-sm">{step.icon}</div>
              <h4 className="font-bold text-brand-text mb-2">{step.title}</h4>
              <p className="text-brand-gray text-sm max-w-[200px]">{step.desc}</p>
            </div>
          ))}
          {/* Dashed connector line (Desktop only) */}
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] border-t-2 border-dashed border-gray-200 -z-0"></div>
        </div>
      </section>

      {/* Seasonal Care Section */}
      <section className="bg-brand-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-2">Care at the Right Time</h2>
          <p className="text-brand-gray mb-10">Know exactly when to water, feed, and repot</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalCare.map((season, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-xl">{season.icon}</div>
                  <div>
                    <h4 className="font-bold">{season.season}</h4>
                    <p className="text-xs text-brand-gray">{season.months}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {season.tasks.map((task, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-brand-gray">
                      <span className="text-brand-green text-lg leading-none">•</span> {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}