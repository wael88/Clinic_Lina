import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/content";

interface ThankYouProps {
  lang?: "en" | "bg";
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export default function ThankYou({ lang = "en" }: ThankYouProps) {
  const info = contactInfo[lang];
  const isBG = lang === "bg";
  const prefix = isBG ? "/bg" : "";
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "form_submission",
        form_name: "dental_consultation",
      });
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = prefix || "/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [prefix]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} whatsappLink={info.whatsappLink} phoneNumber={info.phoneNumber} phoneDisplay={info.phoneDisplay} />

      <section className="pt-32 pb-24 bg-gradient-to-b from-primary/5 via-white to-white overflow-hidden relative" data-testid="section-thank-you">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * 100 + "%",
                y: "110%",
                rotate: Math.random() * 360,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: "-10%",
                rotate: Math.random() * 720,
                scale: Math.random() * 0.5 + 0.5,
              }}
              transition={{
                duration: Math.random() * 3 + 3,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {i % 3 === 0 ? (
                <Sparkles className="w-6 h-6 text-primary/30" />
              ) : i % 3 === 1 ? (
                <Heart className="w-5 h-5 text-pink-300/40" />
              ) : (
                <Star className="w-4 h-4 text-yellow-400/40" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
              className="mx-auto w-28 h-28 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", bounce: 0.4 }}
              >
                <CheckCircle2 className="w-14 h-14 text-white" />
              </motion.div>
            </motion.div>

            <motion.h1
              data-testid="text-thank-you-title"
              className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-primary via-blue-600 to-cyan-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {isBG ? "Благодарим ви!" : "Thank You!"}
            </motion.h1>

            <motion.p
              className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {isBG
                ? "WhatsApp вече е отворен. Нашият екип ще ви отговори възможно най-скоро!"
                : "WhatsApp is now open. Our team will get back to you as soon as possible!"}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="space-y-4 pt-4"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild data-testid="button-thank-you-home">
                  <Link href={prefix || "/"} className="gap-2">
                    {isBG ? "Към началната страница" : "Back to Home"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <motion.div
                className="flex items-center justify-center gap-2 text-sm text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <div className="w-8 h-8 rounded-full border-2 border-primary/30 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm" data-testid="text-countdown">{countdown}</span>
                </div>
                <span>
                  {isBG
                    ? "Пренасочване към началната страница..."
                    : "Redirecting to home page..."}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer lang={lang} whatsappLink={info.whatsappLink} phoneNumber={info.phoneNumber} phoneDisplay={info.phoneDisplay} />
    </div>
  );
}
