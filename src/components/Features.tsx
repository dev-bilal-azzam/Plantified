
export default function Features() {
  const personalityCards = [
    { img: "https://images.unsplash.com/photo-1598531401224-b1eb217e9975?auto=format&fit=crop&q=80&w=400", price: "24.99$", q: "Always you Busy?", title: "Meet Ivy" },
    { img: "https://images.unsplash.com/photo-1628156328328-91cce3b98ea8?auto=format&fit=crop&q=80&w=400", price: "15.00$", q: "Need for inspiration?", title: "Meet mint" },
    { img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400", price: "18.00$", q: "Always on the move?", title: "Meet Spike" }
  ];

  const seasonalCare = [
    { season: "Spring", months: "March-May", tasks: ["Water every 5 days", "Add fertilizer", "Move to bright light"], icon: "🌸" },
    { season: "Summer", months: "June-August", tasks: ["Water daily", "Increase air circulation", "Protect from heat"], icon: "☀️" },
    { season: "Autumn", months: "September-November", tasks: ["Reduce watering", "Prune old growth", "Watch temperature"], icon: "🍂" },
    { season: "Winter", months: "December-February", tasks: ["Water sparingly", "Reduce light", "Protect from drafts"], icon: "❄️" }
  ];

  return (
    <article className="w-full">
      {/* Light Green Background Section */}
      <section className="bg-brand-light rounded-[3rem] py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Main Product Image */}
          <div className="flex-1">
             <img src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=600" alt="Cactus plant named Spike" className="w-[300px] md:w-[400px] mx-auto drop-shadow-xl" loading="lazy" />
          </div>
          
          {/* Main Product Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold text-brand-text">Cactus: Spike</h2>
            <p className="text-brand-gray leading-relaxed max-w-lg">
              The ultimate minimalist companion for your workspace. Spike doesn't care about drama, never complains about the dry office air, and is perfectly happy being ignored for weeks. It stores its own water and guards your desk like a tiny, green, prickly soldier.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div>
                <span className="text-brand-gray text-xs block uppercase tracking-wider">Lifespan</span>
                <strong className="text-brand-text">10 - 50 Years</strong>
              </div>
              <div>
                <span className="text-brand-gray text-xs block uppercase tracking-wider">Avg Height</span>
                <strong className="text-brand-text">15 - 30 cm</strong>
              </div>
              <div>
                <span className="text-brand-gray text-xs block uppercase tracking-wider">Watering</span>
                <strong className="text-brand-text">1x / Month</strong>
              </div>
            </div>

            <button className="mt-4 bg-brand-green hover:bg-brand-green-hover text-white px-6 py-3 rounded-full font-medium flex items-center gap-3 transition-transform hover:scale-105 min-h-[48px]">
              Add to my desk - 15.99$
              <span className="bg-white text-brand-green p-1.5 rounded-full"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg></span>
            </button>
          </div>
        </div>

        {/* Thumbnail row */}
        <div className="max-w-7xl mx-auto flex justify-center gap-4 mt-12 overflow-x-auto pb-4">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className={`w-20 h-20 rounded-xl flex-shrink-0 bg-white shadow-sm flex items-center justify-center p-2 cursor-pointer transition-transform hover:-translate-y-1 ${i===1 ? 'border-2 border-brand-green' : 'border border-gray-100'}`}>
              <img src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=100" alt={`Plant thumbnail ${i}`} className="h-full object-contain" />
            </div>
          ))}
        </div>

        {/* Cards Row */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pb-8">
          {personalityCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4 bg-brand-bg">
                <span className="absolute top-4 left-4 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full z-10">{card.price}</span>
                <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" loading="lazy" />
              </div>
              <p className="text-brand-gray text-sm">{card.q}</p>
              <h3 className="text-xl font-bold text-brand-text mb-2">{card.title}</h3>
              <a href="#" className="text-brand-green text-sm font-medium hover:underline inline-block min-h-[48px] pt-1">View Details</a>
            </div>
          ))}
        </div>
        <p className="text-center text-brand-green font-medium mt-4 pb-8">Different plants, Different personalities.<br/>Find the one that feels most like you.</p>
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