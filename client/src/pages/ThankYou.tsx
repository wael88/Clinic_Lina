import { useEffect } from "react";
import { Link, useSearch } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
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

  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "form_submission",
        form_name: "dental_consultation",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} whatsappLink={info.whatsappLink} phoneNumber={info.phoneNumber} phoneDisplay={info.phoneDisplay} />

      <section className="pt-32 pb-24 bg-white" data-testid="section-thank-you">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>

            <h1 data-testid="text-thank-you-title" className="text-4xl md:text-5xl font-display font-bold text-slate-900">
              {isBG ? "Благодарим ви!" : "Thank You!"}
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto">
              {isBG
                ? "Вашата заявка е получена успешно. Нашият екип ще се свърже с вас в рамките на 24 часа, за да уговорим вашата безплатна консултация."
                : "Your inquiry has been received successfully. Our team will contact you within 24 hours to schedule your free consultation."}
            </p>

            <div className="bg-slate-50 rounded-2xl p-8 space-y-4">
              <h3 className="font-bold text-slate-900 text-lg">
                {isBG ? "Какво следва?" : "What's Next?"}
              </h3>
              <div className="space-y-3 text-left max-w-sm mx-auto">
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">1</div>
                  <p className="text-slate-600 text-sm">
                    {isBG
                      ? "Ще прегледаме вашата заявка и ще ви свържем за онлайн консултация."
                      : "We'll review your inquiry and connect you for an online consultation."}
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">2</div>
                  <p className="text-slate-600 text-sm">
                    {isBG
                      ? "Нашите лекари ще подготвят персонализиран план за лечение."
                      : "Our doctors will prepare a personalized treatment plan for you."}
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">3</div>
                  <p className="text-slate-600 text-sm">
                    {isBG
                      ? "Ще организираме вашето пътуване — хотел и VIP трансфер."
                      : "We'll arrange your trip — hotel and VIP transfer included."}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild data-testid="button-thank-you-whatsapp">
                <a href={info.whatsappLink} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  {isBG ? "Пишете ни в WhatsApp" : "Chat with Us on WhatsApp"}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild data-testid="button-thank-you-home">
                <Link href={prefix || "/"} className="gap-2">
                  {isBG ? "Към началната страница" : "Back to Home"}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer lang={lang} whatsappLink={info.whatsappLink} phoneNumber={info.phoneNumber} phoneDisplay={info.phoneDisplay} />
    </div>
  );
}
