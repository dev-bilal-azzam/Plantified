import { motion } from 'framer-motion';
import { asset } from '../utils/assets';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  } as const;

  return (
    <motion.footer 
      className="w-full bg-brand-bg pt-12 flex flex-col items-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* CTA Box */}
      <motion.div
        variants={itemVariants}
        className="w-full max-w-7xl bg-brand-dark text-white rounded-3xl p-12 text-center relative overflow-hidden mb-12 shadow-2xl"
      >
        <img
          src={asset('footer.svg')}
          alt=""
          className="absolute left-[70%] top-1/2 -translate-y-1/2 h-full w-auto object-contain pointer-events-none select-none z-0"
        />
        <div className="relative z-10 max-w-2xl mx-auto space-y-2">
          <h2 className="text-[20px] md:text-[28px] font-medium text-[#FFFFFF]/[0.88] font-poppins">
            Find the plant that grows with you.
          </h2>
          <p className="text-[18px] md:text-[18px] font-regular text-[#FFFFFF]/[0.66] font-poppins">
            Join 50,000+ urban dwellers who have rediscovered the joy of quiet growth. Delivered
            with care, straight to your door.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-2 w-[90%] pt-4 mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green min-h-[48px]"
              aria-label="Email address"
              required
            />
            <button
              type="submit"
              className="bg-brand-light text-brand-green font-semibold px-8 py-3 rounded-full hover:bg-white transition-colors min-h-[48px]"
            >
              Send
            </button>
          </form>
        </div>
      </motion.div>

      {/* Bottom Footer Details */}
      <motion.div 
        variants={itemVariants}
        className="w-full flex flex-col md:flex-row justify-between items-center gap-4 py-4 px-8 mt-4 bg-brand-dark text-sm text-white"
      >
        <p>© 2026 Plantified. Grown with care.</p>

        <div className="flex gap-6">
          <a href="#" aria-label="Twitter / X" className="hover:text-brand-green transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </a>
          <a href="#" aria-label="WhatsApp" className="hover:text-brand-green transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_101_3403)"><path d="M20.3571 3.53571C22.6071 5.78571 24 8.73214 24 11.9464C24 18.4821 18.5357 23.8393 11.9464 23.8393C9.96429 23.8393 8.03571 23.3036 6.26786 22.3929L0 24L1.66071 17.8393C0.642857 16.0714 0.0535714 14.0357 0.0535714 11.8929C0.0535714 5.35714 5.41071 0 11.9464 0C15.1607 0 18.1607 1.28571 20.3571 3.53571ZM11.9464 21.8036C17.4107 21.8036 21.9643 17.3571 21.9643 11.9464C21.9643 9.26786 20.8393 6.80357 18.9643 4.92857C17.0893 3.05357 14.625 2.03571 12 2.03571C6.53571 2.03571 2.08929 6.48214 2.08929 11.8929C2.08929 13.7679 2.625 15.5893 3.58929 17.1964L3.85714 17.5714L2.83929 21.2143L6.58929 20.1964L6.91071 20.4107C8.46429 21.3214 10.1786 21.8036 11.9464 21.8036ZM17.4107 14.4107C17.6786 14.5714 17.8929 14.625 17.9464 14.7857C18.0536 14.8929 18.0536 15.4821 17.7857 16.1786C17.5179 16.875 16.3393 17.5179 15.8036 17.5714C14.8393 17.7321 14.0893 17.6786 12.2143 16.8214C9.21429 15.5357 7.28571 12.5357 7.125 12.375C6.96429 12.1607 5.94643 10.7679 5.94643 9.26786C5.94643 7.82143 6.69643 7.125 6.96429 6.80357C7.23214 6.48214 7.55357 6.42857 7.76786 6.42857C7.92857 6.42857 8.14286 6.42857 8.30357 6.42857C8.51786 6.42857 8.73214 6.375 9 6.96429C9.21429 7.55357 9.85714 9 9.91071 9.16071C9.96429 9.32143 10.0179 9.48214 9.91071 9.69643C9.375 10.8214 8.73214 10.7679 9.05357 11.3036C10.2321 13.2857 11.3571 13.9821 13.125 14.8393C13.3929 15 13.5536 14.9464 13.7679 14.7857C13.9286 14.5714 14.5179 13.875 14.6786 13.6071C14.8929 13.2857 15.1071 13.3393 15.375 13.4464C15.6429 13.5536 17.0893 14.25 17.4107 14.4107Z" fill="currentColor" fillOpacity="0.8" /></g><defs><clipPath id="clip0_101_3403"><rect width="24" height="24" fill="white" /></clipPath></defs></svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-brand-green transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
          </a>
        </div>
      </motion.div>
    </motion.footer>
  );
}