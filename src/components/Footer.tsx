
export default function Footer() {
  return (
    <footer className="w-full bg-brand-bg pt-12 pb-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* CTA Box */}
      <div className="w-full max-w-5xl bg-brand-dark text-white rounded-3xl p-12 text-center relative overflow-hidden mb-12 shadow-2xl">
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Find the plant that grows with you.</h2>
          <p className="text-gray-300">
            Join 50,000+ urban dwellers who have rediscovered the joy of quiet growth. Delivered with care, straight to your door.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email here" 
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green min-h-[48px]"
              aria-label="Email address"
              required
            />
            <button 
              type="submit" 
              className="bg-brand-light text-brand-text font-semibold px-8 py-3 rounded-full hover:bg-white transition-colors min-h-[48px]"
            >
              Send
            </button>
          </form>
        </div>
        {/* Subtle decorative leaf vectors could be placed here as absolute svgs */}
      </div>

      {/* Bottom Footer Details */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 text-brand-gray text-sm pt-6 border-t border-gray-200">
        <p>© 2026 Plantified. Grown with care.</p>
        
        <div className="flex gap-6">
          <a href="#" aria-label="Twitter / X" className="hover:text-brand-green transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" aria-label="WhatsApp" className="hover:text-brand-green transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 21.115l-3.32-.865-2.73 1.442.546-3.13-2.146-2.268c-1.378-2.128-1.583-4.882-.55-7.214 1.34-3.032 4.382-4.995 7.685-4.995 4.61 0 8.354 3.737 8.36 8.344.005 4.606-3.729 8.352-8.337 8.358-.888 0-1.75-.126-2.585-.36l.006-.006c-1.405-.39-2.705-1.077-3.83-2.02l.857-1.1c.96.8 2.062 1.378 3.25 1.708l.004-.002.434.12 1.328-2.88 2.28 1.144-.816 1.748-1.76.992-1.996-1.554-1.296.85-2.006 1.76-1.762-2.002-1.118-.564 1.12-1.68 1.13-2.25-1.125-1.12-2.25-1.12 1.68-1.12.56-1.11 2.002 1.758-1.76 2.002-.85 1.29 1.556 1.996-.99 1.756-1.75.816-1.14-2.28 2.87-1.325.04.417c.56 1.737 1.66 3.16 3.09 4.053l-1.03 1.488c-1.63-1.01-2.92-2.61-3.61-4.46l2.12-1.15z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-brand-green transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}