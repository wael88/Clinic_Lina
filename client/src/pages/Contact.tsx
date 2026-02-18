import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MessageSquare, MapPin, Phone, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { contactInfo, contactContent, address } from "@/lib/content";

const whatsappSvgPath = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";

interface ContactProps {
  lang?: "en" | "bg";
}

export default function Contact({ lang = "en" }: ContactProps) {
  const isBG = lang === "bg";
  const info = contactInfo[lang];
  const c = contactContent[lang];

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} whatsappLink={info.whatsappLink} phoneNumber={info.phoneNumber} phoneDisplay={info.phoneDisplay} />

      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 data-testid="text-contact-title" className="text-4xl md:text-6xl font-display font-bold mb-4">{c.title}</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">{c.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" data-testid="section-contact-info">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="p-6" data-testid="card-contact-address">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-md h-fit">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{c.addressLabel}</h3>
                    <p className="text-slate-500">{address}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6" data-testid="card-contact-phone">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-md h-fit">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{c.phoneLabel}</h3>
                    <a href={`tel:${info.phoneNumber}`} className="text-slate-500 hover:text-primary transition-colors" data-testid="link-contact-phone">
                      {info.phoneDisplay}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6" data-testid="card-contact-whatsapp">
                <div className="flex gap-4">
                  <div className="bg-[#25D366]/10 p-3 rounded-md h-fit">
                    <svg className="w-6 h-6 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                      <path d={whatsappSvgPath} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{c.whatsappLabel}</h3>
                    <a href={info.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#25D366] transition-colors" data-testid="link-contact-whatsapp">
                      {isBG ? "Пишете ни в WhatsApp" : "Chat with us on WhatsApp"}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6" data-testid="card-contact-hours">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-md h-fit">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{c.hoursLabel}</h3>
                    <p className="text-slate-500">{c.hours}</p>
                    <p className="text-slate-500">{c.hoursClosed}</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">{c.formTitle}</h2>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-1 bg-primary h-1.5 w-full" />
                  <div className="min-h-[700px] flex items-center justify-center bg-white">
                    <iframe
                      data-testid="iframe-contact-form"
                      aria-label="Dental Consultation"
                      frameBorder="0"
                      style={{ height: '700px', width: '100%', border: 'none', overflow: 'hidden' }}
                      src="https://forms.zohopublic.eu/cliniclina1/form/DentalConsultationAppointmentForm/formperma/czNoOagw30bend6LJMEJk7GL5QXWNEnxrWx9lCpzprE"
                      title="Dental Consultation Form"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50" data-testid="section-map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 text-center">{c.mapTitle}</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              data-testid="iframe-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.634!2d28.9765!3d41.0655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a3c1e20d8d%3A0x5e6e9c2f6a5f6a5f!2sIzzet%20Pa%C5%9Fa%2C%20F%C4%B1r%C4%B1n%20Arkas%C4%B1%20Sk.%20No%3A3%20D%3AA%2C%2034387%20%C5%9Ei%C5%9Fli%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Lina Location"
            />
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
