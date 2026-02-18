import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { galleryImages, contactInfo, beforeAfterContent } from "@/lib/content";

interface BeforeAfterProps {
  lang?: "en" | "bg";
}

export default function BeforeAfter({ lang = "en" }: BeforeAfterProps) {
  const isBG = lang === "bg";
  const info = contactInfo[lang];
  const c = beforeAfterContent[lang];
  const images = galleryImages[lang];

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} whatsappLink={info.whatsappLink} phoneNumber={info.phoneNumber} phoneDisplay={info.phoneDisplay} />

      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 data-testid="text-ba-title" className="text-4xl md:text-6xl font-display font-bold mb-4">{c.title}</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">{c.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-50" data-testid="section-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((img, i) => (
              <motion.div
                key={i}
                data-testid={`card-gallery-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative group rounded-2xl overflow-hidden shadow-lg bg-white break-inside-avoid"
              >
                <img src={img.src} alt={img.title} className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent invisible group-hover:visible transition-opacity flex items-end p-6">
                  <p className="text-white font-medium">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white" data-testid="section-ba-cta">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <Sparkles className="w-12 h-12 mx-auto opacity-80" />
          <h2 className="text-4xl font-display font-bold">{c.ctaTitle}</h2>
          <p className="text-lg text-white/80">{c.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild data-testid="button-ba-consultation">
              <Link href={isBG ? "/bg" : "/"}>{c.ctaButton}</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white backdrop-blur-sm bg-white/10" asChild data-testid="button-ba-contact">
              <Link href={isBG ? "/bg/contact" : "/contact"}>
                {isBG ? "Контакт" : "Contact Us"}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <a
        href={info.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
        data-testid="button-whatsapp-floating"
      >
        <div className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl invisible group-hover:visible whitespace-nowrap pointer-events-none">
          {isBG ? "Пишете ни в WhatsApp" : "WhatsApp Us"}
        </div>
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>

      <Footer lang={lang} whatsappLink={info.whatsappLink} phoneNumber={info.phoneNumber} phoneDisplay={info.phoneDisplay} />
    </div>
  );
}
