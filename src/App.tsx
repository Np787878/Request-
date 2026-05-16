import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Instagram, MessageCircle, Heart, Sparkles as SparklesIcon, Sprout } from 'lucide-react';

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode; icon: any }) => (
  <div className="flex items-center gap-2 mb-4 text-pink-500 font-serif italic text-xl">
    <Icon size={20} />
    <span>{children}</span>
  </div>
);

export default function App() {
  const instagramUrl = "https://www.instagram.com/emptyspacei0?utm_source=qr&igsh=aHh4cDJ0NHEybTVz";
  const whatsappUrl = "https://wa.me/919313048005";
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.log("Autoplay prevented, adding interaction listener:", error);
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
    <div className="min-h-screen selection:bg-pink-100 selection:text-pink-600 font-sans pb-20 bg-[#fffafd]">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Video Background Container */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src="public/bg.mp4"
            className="w-full h-full object-cover opacity-90 transition-opacity duration-1000"
          />
          {/* Overlays for readability and mood */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-[#fffafd]" />
          <div className="absolute inset-0 bg-pink-50/10 backdrop-blur-[0.5px]" />
        </div>

        {/* Text Layered over Video */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/50 px-6 py-2 rounded-full text-[0.7rem] tracking-[0.3em] uppercase text-gray-600 shadow-sm mb-12">
              <SparklesIcon size={14} className="text-pink-400" />
              <span>Lotus for a Friend</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-serif text-gray-900 mb-6 drop-shadow-md">
              Lotus <span className="italic text-pink-400">for a</span>
            </h1>
            
            <p className="text-gray-500 font-serif italic text-xl md:text-2xl mb-16 tracking-wide drop-shadow-sm">
              A symbol of progress · inner beauty · resilience
            </p>

            <div className="flex gap-8 justify-center text-[0.65rem] tracking-[0.6em] uppercase text-gray-400 font-medium">
              <span className="hover:text-pink-400 transition-colors">Prosperity</span>
              <span className="text-pink-100">|</span>
              <span className="hover:text-pink-400 transition-colors">purity</span>
              <span className="text-pink-100">|</span>
              <span className="hover:text-pink-400 transition-colors">Respect</span>
              <span className="text-pink-100">|</span>
              <span className="hover:text-pink-400 transition-colors">Joy</span>
            </div>
          </motion.div>
        </div>

        {/* Decorative divider */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="w-[1px] h-16 bg-gradient-to-b from-pink-200 to-transparent" />
        </div>
      </section>

      {/* Main Content Card */}
      <section className="max-w-4xl mx-auto px-6 -mt-12 relative z-20">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="bg-white/95 backdrop-blur-2xl rounded-[4rem] p-12 md:p-24 text-card border border-white shadow-[0_40px_100px_-20px_rgba(255,182,193,0.1)]"
        >
          <div className="flex flex-col items-center text-center">
            <h2 className="font-serif italic text-pink-300 text-sm tracking-[0.4em] uppercase mb-16">
              Just Small Request
            </h2>

            <div className="space-y-16 text-gray-600 font-serif text-[1.2rem] leading-[2] max-w-2xl mx-auto">
              <p>
                <span className="text-pink-500 italic text-3xl mr-2 font-serif">Hii</span> — would like to be my friend. I am so curious about you and I would like to talk with you. It's my responsibility to keep your privacy — and actually, I like to keep things private because I have trust issues. 
              </p>
              
              <div className="relative py-10 px-12 italic text-left border-l-4 border-pink-100 bg-pink-50/20 rounded-r-3xl transition-colors hover:bg-pink-50/30">
                <span className="absolute top-2 left-2 text-6xl text-pink-100 font-serif opacity-30">"</span>
                <p className="relative z-10 pl-4">
                  Things I believe: <span className="text-pink-400 font-medium tracking-tight">"if one hand knows something, try not to let the information reach the second hand."</span> This is the kind of principle I hold.
                </p>
              </div>

              <div className="flex items-center justify-center gap-6 py-4">
                <div className="w-16 h-[1px] bg-pink-100/50" />
                <div className="w-2 h-2 bg-pink-200 rounded-full" />
                <div className="w-16 h-[1px] bg-pink-100/50" />
              </div>

              <p className="text-gray-700">
                And may you 'may be' feel not good about my height and body physique may you not like right now. In <span className="text-pink-400 italic font-medium">one year from now</span>, I know it will be so much better, because progress is on the way to change it. The money progress is also going on — within <span className="text-pink-400 italic font-bold">1.5 years</span> I will reach a level that is more than enough.
              </p>

              <div className="space-y-10 mt-16 group">
                <p className="transition-colors group-hover:text-gray-800">
                  maybe you have reason not accept my request — but one thing I ensure you: <span className="text-pink-500 font-semibold underline underline-offset-8 decoration-pink-100">I will always add value for you, and I will always keep your values safe.</span>
                </p>
                <p className="transition-colors group-hover:text-gray-800">
                  You may have had a relationship — I will not interrupt or disturb that. Because I don't like to do it. The one thing I want is <span className="text-pink-500 italic font-medium">your friendship, nothing else.</span> I am interested to know you.
                </p>
              </div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="mt-24 p-12 rounded-[3.5rem] bg-gradient-to-br from-pink-50/40 to-white border border-pink-100/40 shadow-[0_20px_40px_rgba(255,192,203,0.05)]"
              >
                <p className="italic text-pink-500 text-[1.25rem] font-serif leading-[1.8]">
                  "If you feel any discomfort, any trust issues, or anything at all — it is completely okay to ignore this and keep running your life. I will just keep this as a good memory of mine. 🌸"
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Actions */}
      <section className="mt-32 text-center px-6">
        <h3 className="font-serif italic text-pink-300 text-[0.8rem] tracking-[0.6em] uppercase mb-16">
          Send a Response · Connect Directly
        </h3>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.a
            whileHover={{ scale: 1.05, translateY: -10 }}
            whileTap={{ scale: 0.95 }}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 instagram-gradient text-white px-16 py-7 rounded-[2.5rem] shadow-[0_30px_60px_-10px_rgba(220,39,67,0.2)] min-w-[280px] justify-center transition-all hover:shadow-[0_45px_90px_-10px_rgba(220,39,67,0.3)]"
          >
            <Instagram size={28} />
            <span className="font-bold tracking-[0.2em] uppercase text-xs">Instagram</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, translateY: -10 }}
            whileTap={{ scale: 0.95 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 whatsapp-gradient text-white px-16 py-7 rounded-[2.5rem] shadow-[0_30px_60px_-10px_rgba(18,140,126,0.2)] min-w-[280px] justify-center transition-all hover:shadow-[0_45px_90px_-10px_rgba(18,140,126,0.3)]"
          >
            <MessageCircle size={28} />
            <span className="font-bold tracking-[0.2em] uppercase text-xs">WhatsApp</span>
          </motion.a>
        </div>
      </section>

      <footer className="mt-48 text-center text-pink-200/40">
        <div className="flex justify-center gap-10 mb-12">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3 }}><Heart size={20} /></motion.div>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }}><Sprout size={20} /></motion.div>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3, delay: 2 }}><SparklesIcon size={20} /></motion.div>
        </div>
      </footer>
    </div>
  );
}



