import { motion } from 'framer-motion';
import { asset } from '../utils/assets';

export default function Navbar() {
  const navLinks = ['Home', 'Categories', 'Blog', 'Contacts', 'About us'];

  return (
    <div className="w-full border-b border-[#819E26]/20">
      <motion.header 
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 flex items-end justify-between"
      >
        {/* Logo */}
        <div className="flex items-center pt-[20px] pb-[10px]">
          <a href={asset('')} className="text-plantified-logo font-bold font-ubuntu text-logo" aria-label="Plantified Home">
            Plantified
          </a>
        </div>

        <nav className="hidden md:flex items-end gap-8">
          {navLinks.map((link) => {
            const isSelected = link === 'Home';
            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`relative pb-2 font-poppins text-nav leading-nav tracking-nav transition-colors ${
                  isSelected 
                    ? 'text-logo font-semibold' 
                    : 'text-brand-gray font-medium hover:text-brand-green'  
                }`}
              >
                {link}
                {/* Rounded Active Indicator Line */}
                {isSelected && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-logo rounded-t-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 pt-[16px] pb-0">
          <button aria-label="Notifications" className=" text-brand-green hover:text-brand-green transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.0199 31.53C20.6899 31.53 18.3599 31.16 16.1499 30.42C15.3099 30.13 14.6699 29.54 14.3899 28.77C14.0999 28 14.1999 27.15 14.6599 26.39L15.8099 24.48C16.0499 24.08 16.2699 23.28 16.2699 22.81V19.92C16.2699 16.2 19.2999 13.17 23.0199 13.17C26.7399 13.17 29.7699 16.2 29.7699 19.92V22.81C29.7699 23.27 29.9899 24.08 30.2299 24.49L31.3699 26.39C31.7999 27.11 31.8799 27.98 31.5899 28.77C31.2999 29.56 30.6699 30.16 29.8799 30.42C27.6799 31.16 25.3499 31.53 23.0199 31.53ZM23.0199 14.67C20.1299 14.67 17.7699 17.02 17.7699 19.92V22.81C17.7699 23.54 17.4699 24.62 17.0999 25.25L15.9499 27.16C15.7299 27.53 15.6699 27.92 15.7999 28.25C15.9199 28.59 16.2199 28.85 16.6299 28.99C20.8099 30.39 25.2399 30.39 29.4199 28.99C29.7799 28.87 30.0599 28.6 30.1899 28.24C30.3199 27.88 30.2899 27.49 30.0899 27.16L28.9399 25.25C28.5599 24.6 28.2699 23.53 28.2699 22.8V19.92C28.2699 17.02 25.9199 14.67 23.0199 14.67Z" fill="currentColor"/>
            <path d="M24.8796 14.94C24.8096 14.94 24.7396 14.93 24.6696 14.91C24.3796 14.83 24.0996 14.77 23.8296 14.73C22.9796 14.62 22.1596 14.68 21.3896 14.91C21.1096 15 20.8096 14.91 20.6196 14.7C20.4296 14.49 20.3696 14.19 20.4796 13.92C20.8896 12.87 21.8896 12.18 23.0296 12.18C24.1696 12.18 25.1696 12.86 25.5796 13.92C25.6796 14.19 25.6296 14.49 25.4396 14.7C25.2896 14.86 25.0796 14.94 24.8796 14.94Z" fill="currentColor"/>
            <path d="M23.0195 33.81C22.0295 33.81 21.0695 33.41 20.3695 32.71C19.6695 32.01 19.2695 31.05 19.2695 30.06H20.7695C20.7695 30.65 21.0095 31.23 21.4295 31.65C21.8495 32.07 22.4295 32.31 23.0195 32.31C24.2595 32.31 25.2695 31.3 25.2695 30.06H26.7695C26.7695 32.13 25.0895 33.81 23.0195 33.81Z" fill="currentColor"/>
            <circle cx="28.5" cy="17.5" r="3" fill="#FF5630" stroke="#E0E0E0"/>
            </svg>
          </button>
          <button aria-label="Wishlist" className=" text-brand-green hover:text-brand-green transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69001C2 5.60001 4.49 3.10001 7.56 3.10001C9.38 3.10001 10.99 3.98001 12 5.34001C13.01 3.98001 14.63 3.10001 16.44 3.10001C19.51 3.10001 22 5.60001 22 8.69001C22 15.69 15.52 19.82 12.62 20.81Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button aria-label="Cart" className=" text-brand-green hover:text-brand-green transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 8.63001C16.09 8.63001 15.75 8.29001 15.75 7.88001V6.50001C15.75 5.45001 15.3 4.43001 14.52 3.72001C13.73 3.00001 12.71 2.67001 11.63 2.77001C9.83 2.94001 8.25 4.78001 8.25 6.70001V7.67001C8.25 8.08001 7.91 8.42001 7.5 8.42001C7.09 8.42001 6.75 8.08001 6.75 7.67001V6.69001C6.75 4.00001 8.92 1.52001 11.49 1.27001C12.99 1.13001 14.43 1.60001 15.53 2.61001C16.62 3.60001 17.25 5.02001 17.25 6.50001V7.88001C17.25 8.29001 16.91 8.63001 16.5 8.63001Z" fill="currentColor"/>
            <path d="M14.9998 22.75H8.99982C4.37982 22.75 3.51982 20.6 3.29982 18.51L2.54982 12.52C2.43982 11.44 2.39982 9.88999 3.44982 8.72999C4.34982 7.72999 5.83982 7.24999 7.99982 7.24999H15.9998C18.1698 7.24999 19.6598 7.73999 20.5498 8.72999C21.5898 9.88999 21.5598 11.44 21.4498 12.5L20.6998 18.51C20.4798 20.6 19.6198 22.75 14.9998 22.75ZM7.99982 8.74999C6.30982 8.74999 5.14982 9.07999 4.55982 9.73999C4.06982 10.28 3.90982 11.11 4.03982 12.35L4.78982 18.34C4.95982 19.94 5.39982 21.26 8.99982 21.26H14.9998C18.5998 21.26 19.0398 19.95 19.2098 18.36L19.9598 12.35C20.0898 11.13 19.9298 10.3 19.4398 9.74999C18.8498 9.07999 17.6898 8.74999 15.9998 8.74999H7.99982Z" fill="currentColor"/>
            <path d="M15.4202 13.15C14.8602 13.15 14.4102 12.7 14.4102 12.15C14.4102 11.6 14.8602 11.15 15.4102 11.15C15.9602 11.15 16.4102 11.6 16.4102 12.15C16.4102 12.7 15.9702 13.15 15.4202 13.15Z" fill="currentColor"/>
            <path d="M8.42016 13.15C7.86016 13.15 7.41016 12.7 7.41016 12.15C7.41016 11.6 7.86016 11.15 8.41016 11.15C8.96016 11.15 9.41016 11.6 9.41016 12.15C9.41016 12.7 8.97016 13.15 8.42016 13.15Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </motion.header>
    </div>
  );
}