import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MessageSquare, CheckCircle2, Car, Hotel } from "lucide-react";

// Gallery images
import g2 from "@assets/WhatsApp_Image_2026-02-10_at_23_28_23_1770981063872.jpg";
import g3 from "@assets/WhatsApp_Image_2026-02-10_at_23_29_44_(1)_1770981063873.jpg";
import g4 from "@assets/WhatsApp_Image_2026-02-10_at_23_29_44_(2)_1770981063874.jpg";
import g5 from "@assets/WhatsApp_Image_2026-02-11_at_01_28_03_1770981063874.jpg";
import g6 from "@assets/WhatsApp_Image_2026-02-12_at_23.54.58_(1)_1770981063875.jpeg";
import g7 from "@assets/WhatsApp_Image_2026-02-12_at_23.54.58_(2)_1770981063875.jpeg";
import g8 from "@assets/WhatsApp_Image_2026-02-12_at_23.54.58_1770981063875.jpeg";
import g9 from "@assets/WhatsApp_Image_2026-02-12_at_23.54.59_(1)_1770981063876.jpeg";
import g10 from "@assets/WhatsApp_Image_2026-02-12_at_23.54.59_(2)_1770981063876.jpeg";
import g11 from "@assets/WhatsApp_Image_2026-02-12_at_23.54.59_(3)_1770981063876.jpeg";
import g12 from "@assets/WhatsApp_Image_2026-02-12_at_23.54.59_1770981063877.jpeg";

// Original assets
import linaGroup from "@assets/lina-group-Y4LvVvrnylh5oZe8_1770892241589.avif";
import introImage from "@assets/WhatsApp_Image_2026-02-10_at_23_29_44_1770912415427.jpg";

export default function Home() {
  const features = [
    { title: "Expert Team", desc: "Highly qualified dental specialists with international experience." },
    { title: "Modern Technology", desc: "State-of-the-art equipment for precise and painless treatments." },
    { title: "Premium Care", desc: "Personalized treatment plans tailored to your specific needs." },
    { title: "Istanbul Location", desc: "Combine your dental treatment with a holiday in beautiful Istanbul." }
  ];

  const galleryImages = [
    { src: g12, title: "Transformation 1" },
    { src: g2, title: "Patient Result 2" },
    { src: g3, title: "Patient Result 3" },
    { src: g6, title: "Transformation 4" },
    { src: g4, title: "Patient Result 5" },
    { src: g5, title: "Patient Result 6" },
    { src: g7, title: "Transformation 7" },
    { src: g8, title: "Patient Result 8" },
    { src: g9, title: "Patient Result 9" },
    { src: g10, title: "Transformation 10" },
    { src: g11, title: "Patient Result 11" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Consultation Form Section - AT THE VERY TOP */}
      <section id="consultation" className="pt-32 pb-24 bg-slate-900 overflow-hidden relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src={linaGroup} 
            alt="Clinic Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10 w-full">
          <div className="text-center space-y-6 mb-12 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-4">
                Your Perfect Smile <br />
                <span className="text-primary">Starts Right Here</span>
              </h1>
              <p className="text-lg text-slate-200 max-w-2xl mx-auto">
                Get a free consultation today. Fill out the form below or chat with us on WhatsApp.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-1 bg-primary h-2 w-full" />
            <div className="p-0 min-h-[700px] flex items-center justify-center bg-white">
              <iframe 
                aria-label='Dental Consultation' 
                frameBorder="0" 
                style={{ 
                  height: '700px', 
                  width: '100%', 
                  border: 'none',
                  overflow: 'hidden' 
                }} 
                src='https://forms.zohopublic.eu/cliniclina1/form/DentalConsultationAppointmentForm/formperma/czNoOagw30bend6LJMEJk7GL5QXWNEnxrWx9lCpzprE'
                title="Dental Consultation Form"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                Welcome to <span className="text-primary">Clinic Lina</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At Clinic Lina, we believe that a healthy smile is the foundation of confidence. 
                Located in the heart of Istanbul, our clinic offers a comprehensive range of dental services, 
                from cosmetic dentistry to complex surgical procedures.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex gap-3">
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
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] -z-10" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={introImage} 
                  alt="Smile Transformation" 
                  className="w-full h-auto hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Services Section */}
      <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold">Your Trip to Istanbul</h2>
            <p className="text-blue-100 mt-4 max-w-2xl mx-auto">We ensure your dental journey is as comfortable as possible with our premium VIP services.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 flex gap-6"
            >
              <div className="bg-primary p-4 rounded-xl h-fit">
                <Car className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">VIP Transfer</h3>
                <p className="text-blue-100">Our private drivers will pick you up from the airport and provide all necessary transfers between your hotel and our clinic throughout your treatment.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 flex gap-6"
            >
              <div className="bg-primary p-4 rounded-xl h-fit">
                <Hotel className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Accommodation</h3>
                <p className="text-blue-100">We partner with luxury hotels in Istanbul to provide you with the most comfortable stay during your treatment trip.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smile Gallery Section - INTEGRATED INTO HOME */}
      <section id="gallery" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900">Our Work</h2>
            <p className="text-slate-600 mt-4">Explore our collection of successful patient transformations.</p>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group rounded-2xl overflow-hidden shadow-lg bg-white break-inside-avoid"
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-medium">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Widget */}
      <a 
        href="https://wa.me/message/4UE7DVZ6F6AFI1" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </div>
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>

      <Footer />
    </div>
  );
}
