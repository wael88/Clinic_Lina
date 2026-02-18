import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MessageSquare, CheckCircle2, Award, Sparkles, Quote, Star, ArrowRight, Shield, Clock, Users, FileText, Video, Hotel, Car, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  awardImg,
  doctors, services, certificates, galleryImages,
  contactInfo, homeContent,
} from "@/lib/content";
import { ServiceIcon } from "@/components/ServiceIcon";
import heroBg from "@assets/4_1771454212886.png";

interface HomeProps {
  lang?: "en" | "bg";
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function trackWhatsAppClick() {
  if (window.dataLayer) {
    window.dataLayer.push({ event: "whatsapp_click" });
  }
}

export default function Home({ lang = "en" }: HomeProps) {
  const c = homeContent[lang];
  const info = contactInfo[lang];
  const docList = doctors[lang];
  const svcList = services[lang];
  const gallery = galleryImages[lang];
  const isBG = lang === "bg";
  const prefix = isBG ? "/bg" : "";

  const trustBadges = isBG
    ? [
        { icon: Award, label: "Награда Златен Ангел" },
        { icon: Shield, label: "Лицензирана клиника" },
        { icon: Users, label: "5000+ пациенти" },
        { icon: Clock, label: "Резултати за 4 дни" },
      ]
    : [
        { icon: Award, label: "Golden Angel Award" },
        { icon: Shield, label: "Fully Licensed Clinic" },
        { icon: Users, label: "5,000+ Patients" },
        { icon: Clock, label: "Results in 4 Days" },
      ];

  const journeySteps = isBG
    ? [
        { step: 1, icon: FileText, title: "Попълнете формуляра", desc: "Изпратете запитване чрез нашия формуляр или ни пишете в WhatsApp. Отговаряме до 24 часа." },
        { step: 2, icon: Video, title: "Онлайн консултация", desc: "Нашите лекари ще направят безплатна видео консултация, за да определят вашия план за лечение." },
        { step: 3, icon: Hotel, title: "5-звезден хотел", desc: "Организираме настаняване в луксозен хотел в центъра на Истанбул за времето на вашето лечение." },
        { step: 4, icon: Car, title: "VIP трансфер", desc: "Посрещаме ви на летището с частен шофьор и осигуряваме всички трансфери до клиниката и обратно." },
        { step: 5, icon: Smile, title: "Перфектна усмивка", desc: "Завършваме лечението ви и заминавате с новата си лъчезарна усмивка — резултати за 4 дни!" },
      ]
    : [
        { step: 1, icon: FileText, title: "Fill Out the Form", desc: "Submit your inquiry through our form or message us on WhatsApp. We respond within 24 hours." },
        { step: 2, icon: Video, title: "Online Consultation", desc: "Our doctors will conduct a free video consultation to determine your personalized treatment plan." },
        { step: 3, icon: Hotel, title: "5-Star Hotel", desc: "We arrange accommodation in a luxury hotel in central Istanbul for the duration of your treatment." },
        { step: 4, icon: Car, title: "VIP Transfer", desc: "We greet you at the airport with a private chauffeur and handle all transfers to the clinic and back." },
        { step: 5, icon: Smile, title: "Your Perfect Smile", desc: "We complete your treatment and you leave with your brand-new radiant smile — results in just 4 days!" },
      ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} whatsappLink={info.whatsappLink} phoneNumber={info.phoneNumber} phoneDisplay={info.phoneDisplay} />

      <section id="consultation" data-testid="section-hero" className="pt-28 pb-20 bg-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 pt-8 lg:pt-16">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-yellow-400 font-semibold text-sm">
                    {isBG ? "Наградена клиника" : "Award-Winning Clinic"}
                  </span>
                </div>

                <h1 data-testid="text-hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white mb-6">
                  {c.heroTitle1} <br />
                  <span className="text-primary">{c.heroTitle2}</span>
                </h1>
                <p className="text-lg text-slate-300 max-w-xl leading-relaxed">{c.heroSubtitle}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-3">
                <Button size="lg" asChild data-testid="button-hero-whatsapp">
                  <a href={info.whatsappLink} target="_blank" rel="noopener noreferrer" className="gap-2" onClick={trackWhatsAppClick}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    {isBG ? "Пишете ни в WhatsApp" : "WhatsApp Us Now"}
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white backdrop-blur-sm bg-white/10" asChild data-testid="button-hero-call">
                  <a href={`tel:${info.phoneNumber}`}>
                    {isBG ? "Обадете се" : "Call Us"}: {info.phoneDisplay}
                  </a>
                </Button>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {trustBadges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300" data-testid={`badge-trust-${i}`}>
                    <badge.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-xs font-medium leading-tight">{badge.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="bg-white rounded-2xl shadow-2xl overflow-hidden mt-8 lg:mt-0">
              <div className="bg-primary px-6 py-4 text-center">
                <h2 className="text-white font-bold text-lg">
                  {isBG ? "Безплатна консултация" : "Free Consultation"}
                </h2>
                <p className="text-primary-foreground/80 text-sm mt-1">
                  {isBG ? "Попълнете формуляра и ще се свържем с вас" : "Fill out the form and we'll get back to you"}
                </p>
              </div>
              <div className="min-h-[650px] flex items-center justify-center bg-white">
                <iframe
                  data-testid="iframe-consultation-form"
                  aria-label="Dental Consultation"
                  frameBorder="0"
                  style={{ height: '650px', width: '100%', border: 'none', overflow: 'hidden' }}
                  src="https://forms.zohopublic.eu/cliniclina1/form/DentalConsultationAppointmentForm/formperma/czNoOagw30bend6LJMEJk7GL5QXWNEnxrWx9lCpzprE"
                  title="Dental Consultation Form"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" data-testid="section-award">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-3 bg-gradient-to-tr from-yellow-400/20 via-amber-200/10 to-transparent rounded-2xl -z-10" />
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-400/30">
                <img
                  src={awardImg}
                  alt={isBG ? "Награда Златен Ангел" : "Golden Angel Award"}
                  className="w-full h-auto"
                  data-testid="img-award"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="bg-yellow-400/10 p-2 rounded-md">
                  <Award className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">
                {c.awardTitle}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">{c.awardDesc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {c.features.map((feature, i) => (
                  <div key={i} data-testid={`card-feature-${i}`} className="flex gap-3">
                    <div className="mt-1 bg-blue-50 p-1.5 rounded-full h-fit">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                      <p className="text-sm text-slate-500 leading-snug mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-b" data-testid="section-results-strip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900">
                {isBG ? "Реални резултати" : "Real Patient Results"}
              </h2>
              <p className="text-slate-500 mt-1">
                {isBG ? "Вижте трансформациите на нашите пациенти" : "See our patients' smile transformations"}
              </p>
            </div>
            <Button variant="outline" asChild data-testid="button-view-all-results">
              <Link href={`${prefix}/before-after`} className="gap-2">
                {isBG ? "Вижте всички" : "View All"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {gallery.slice(0, 6).map((img, i) => (
              <Link href={`${prefix}/before-after`} key={i}>
                <motion.div
                  data-testid={`img-result-${i}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="aspect-square rounded-md overflow-hidden shadow-md group cursor-pointer"
                >
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-white" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900">{c.servicesTitle}</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">{c.servicesSubtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {svcList.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card data-testid={`card-service-${i}`} className="p-6 h-full hover-elevate">
                  <div className="bg-primary/10 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                    <ServiceIcon type={svc.icon} className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{svc.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{svc.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild data-testid="button-services-cta">
              <a href="#consultation" className="gap-2">
                {isBG ? "Безплатна консултация" : "Get Free Consultation"}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="doctors" className="py-24 bg-slate-50" data-testid="section-doctors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900">{c.doctorsTitle}</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">{c.doctorsSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {docList.map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card data-testid={`card-doctor-${i}`} className="overflow-hidden h-full">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-slate-900">{doc.name}</h3>
                    <p className="text-sm font-medium text-primary">{doc.specialty}</p>
                    <div className="flex gap-2 pt-2">
                      <Quote className="w-5 h-5 text-primary/40 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-500 italic leading-relaxed">{doc.quote}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50" data-testid="section-certificates">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900">{c.certificatesTitle}</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">{c.certificatesSubtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-md overflow-hidden shadow-lg hover-elevate"
                data-testid={`card-certificate-${i}`}
              >
                <img src={cert} alt={`Certificate ${i + 1}`} className="w-full h-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white overflow-hidden relative" data-testid="section-journey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold">
              {isBG ? "Вашето пътуване до перфектната усмивка" : "Your Journey to a Perfect Smile"}
            </h2>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
              {isBG
                ? "От първия контакт до вашата нова усмивка — ние се грижим за всичко."
                : "From first contact to your new smile — we take care of everything."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {journeySteps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-testid={`journey-step-${i}`}
                className="relative text-center"
              >
                {i < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[calc(100%-20%)] h-0.5 bg-gradient-to-r from-primary/40 to-primary/10 z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-blue-600/20 border-2 border-primary/30 flex items-center justify-center mb-4 relative">
                    <item.icon className="w-9 h-9 text-primary" />
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-primary/30">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" asChild data-testid="button-journey-cta">
              <a href="#consultation" className="gap-2">
                {isBG ? "Започнете вашето пътуване" : "Start Your Journey"}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <Sparkles className="w-12 h-12 mx-auto opacity-80" />
          <h2 className="text-4xl font-display font-bold">{c.ctaTitle}</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{c.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild data-testid="button-cta-consultation">
              <a href="#consultation">{c.ctaButton}</a>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white backdrop-blur-sm bg-white/10" asChild data-testid="button-cta-before-after">
              <Link href={`${prefix}/before-after`}>
                {isBG ? "Преди и След" : "Before & After"}
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
        onClick={trackWhatsAppClick}
      >
        <div className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl invisible group-hover:visible transition-opacity whitespace-nowrap pointer-events-none">
          {c.whatsappTooltip}
        </div>
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>

      <Footer lang={lang} whatsappLink={info.whatsappLink} phoneNumber={info.phoneNumber} phoneDisplay={info.phoneDisplay} />
    </div>
  );
}
