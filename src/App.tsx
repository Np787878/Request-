import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Instagram,
  MessageCircle,
  Heart,
  Sparkles as SparklesIcon,
  Sprout,
} from 'lucide-react';

export default function App() {
  const instagramUrl =
    'https://www.instagram.com/emptyspacei0?utm_source=qr&igsh=aHh4cDJ0NHEybTVz';

  const whatsappUrl = 'https://wa.me/919313048005';

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.log('Autoplay prevented:', error);

          const startVideo = () => {
            videoRef.current?.play();

            window.removeEventListener('click', startVideo);
            window.removeEventListener('touchstart', startVideo);
          };

          window.addEventListener('click', startVideo, { once: true });
          window.addEventListener('touchstart', startVideo, { once: true });
        });
      }
    };

    playVideo();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fffafd] selection:bg-pink-100 selection:text-pink-600 font-sans pb-20">

      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

        {/* VIDEO */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src="public/bg.mp4"
            className="w-full h-full object-cover opacity-90"
          />

          {/* OVERLAYS */}
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-[#fffafd]" />

          <div className="absolute inset-0 bg-pink-50/10 backdrop-blur-[0.5px]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl w-full">

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >

            {/* TOP BADGE */}
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/50 px-4 sm:px-6 py-2 rounded-full text-[0.55rem] sm:text-[0.7rem] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-gray-600 shadow-sm mb-8 sm:mb-12">

              <SparklesIcon
                size={14}
                className="text-pink-400"
              />

              <span>Lotus for a Friend</span>
            </div>

            {/* TITLE */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-gray-900 mb-4 sm:mb-6 drop-shadow-md leading-tight">

              Lotus{' '}

              <span className="italic text-pink-400">
                for a
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="text-gray-600 font-serif italic text-base sm:text-xl md:text-2xl mb-10 sm:mb-16 tracking-wide drop-shadow-sm px-2">

              A symbol of progress · inner beauty · resilience
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-8 text-[0.5rem] sm:text-[0.65rem] tracking-[0.25em] sm:tracking-[0.5em] uppercase text-gray-300 font-medium px-4 text-center">

              <span className="hover:text-pink-400 transition-colors">
                Prosperity
              </span>

              <span className="text-pink-100 hidden sm:block">
                |
              </span>

              <span className="hover:text-pink-400 transition-colors">
                Purity
              </span>

              <span className="text-pink-100 hidden sm:block">
                |
              </span>

              <span className="hover:text-pink-400 transition-colors">
                Respect
              </span>

              <span className="text-pink-100 hidden sm:block">
                |
              </span>

              <span className="hover:text-pink-400 transition-colors">
                Joy
              </span>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">

          <div className="w-[1px] h-16 bg-gradient-to-b from-pink-200 to-transparent" />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-12 relative z-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white/95 backdrop-blur-2xl rounded-[2.5rem] sm:rounded-[4rem] p-6 sm:p-12 md:p-24 text-card border border-white shadow-[0_40px_100px_-20px_rgba(255,182,193,0.1)]"
        >

          <div className="flex flex-col items-center text-center">

            <h2 className="font-serif italic text-pink-300 text-[0.7rem] sm:text-sm tracking-[0.25em] sm:tracking-[0.4em] uppercase mb-10 sm:mb-16">

              Just Small Request
            </h2>

            <div className="space-y-10 sm:space-y-16 text-gray-600 font-serif text-[1rem] sm:text-[1.2rem] leading-[1.9] sm:leading-[2] max-w-2xl mx-auto">

              <p>
                <span className="text-pink-500 italic text-2xl sm:text-3xl mr-2 font-serif">
                  Hii
                </span>

                — would like to be my friend. I am so curious about you and I would like to talk with you.
              </p>

              <div className="relative py-8 sm:py-10 px-6 sm:px-12 italic text-left border-l-4 border-pink-100 bg-pink-50/20 rounded-r-3xl">

                <span className="absolute top-2 left-2 text-5xl sm:text-6xl text-pink-100 font-serif opacity-30">
                  "
                </span>

                <p className="relative z-10 pl-4">
                  Things I believe:

                  <span className="text-pink-400 font-medium tracking-tight">
                    {' '}
                    "if one hand knows something, try not to let the information reach the second hand."
                  </span>
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 sm:gap-6 py-2">

                <div className="w-10 sm:w-16 h-[1px] bg-pink-100/50" />

                <div className="w-2 h-2 bg-pink-200 rounded-full" />

                <div className="w-10 sm:w-16 h-[1px] bg-pink-100/50" />
              </div>

              <p className="text-gray-700">
                I will always add value for you, and I will always keep your values safe.
              </p>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="mt-10 sm:mt-16 p-6 sm:p-12 rounded-[2rem] sm:rounded-[3.5rem] bg-gradient-to-br from-pink-50/40 to-white border border-pink-100/40 shadow-[0_20px_40px_rgba(255,192,203,0.05)]"
              >

                <p className="italic text-pink-500 text-[1rem] sm:text-[1.25rem] font-serif leading-[1.8]">

                  "If you feel any discomfort or trust issues, it is completely okay to ignore this and keep running your life. 🌸"
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ACTION BUTTONS */}
      <section className="mt-24 sm:mt-32 text-center px-4 sm:px-6">

        <h3 className="font-serif italic text-pink-300 text-[0.65rem] sm:text-[0.8rem] tracking-[0.3em] sm:tracking-[0.6em] uppercase mb-10 sm:mb-16">

          Send a Response · Connect Directly
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-12 w-full">

          {/* INSTAGRAM */}
          <motion.a
            whileHover={{ scale: 1.05, translateY: -5 }}
            whileTap={{ scale: 0.95 }}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-white px-8 sm:px-16 py-5 sm:py-7 rounded-[2rem] sm:rounded-[2.5rem] min-w-[220px] sm:min-w-[280px] justify-center transition-all instagram-gradient shadow-[0_30px_60px_-10px_rgba(220,39,67,0.2)]"
          >

            <Instagram size={24} />

            <span className="font-bold tracking-[0.15em] uppercase text-[0.7rem] sm:text-xs">
              Instagram
            </span>
          </motion.a>

          {/* WHATSAPP */}
          <motion.a
            whileHover={{ scale: 1.05, translateY: -5 }}
            whileTap={{ scale: 0.95 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-white px-8 sm:px-16 py-5 sm:py-7 rounded-[2rem] sm:rounded-[2.5rem] min-w-[220px] sm:min-w-[280px] justify-center transition-all whatsapp-gradient shadow-[0_30px_60px_-10px_rgba(18,140,126,0.2)]"
          >

            <MessageCircle size={24} />

            <span className="font-bold tracking-[0.15em] uppercase text-[0.7rem] sm:text-xs">
              WhatsApp
            </span>
          </motion.a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-32 sm:mt-48 text-center text-pink-200/40">

        <div className="flex justify-center gap-8 sm:gap-10 mb-12">

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Heart size={18} />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3, delay: 1 }}
          >
            <Sprout size={18} />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3, delay: 2 }}
          >
            <SparklesIcon size={18} />
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
