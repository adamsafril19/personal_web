import React from "react";
import {
  Layout,
  Database,
  Server,
  ArrowRight,
  Globe,
  Shield,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Membangun antarmuka pengguna yang responsif dan interaktif menggunakan React, Vue, dan teknologi modern lainnya",
    icon: Layout,
    features: [
      "Responsive Design",
      "Modern Frameworks",
      "Performance Optimization",
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Mengembangkan aplikasi server yang kuat dan dapat diskalakan dengan Node.js, PHP, dan Laravel",
    icon: Server,
    features: [
      "API Development",
      "Server Management",
      "Security Implementation",
    ],
  },
  {
    id: 3,
    title: "Database Design",
    description:
      "Merancang dan mengoptimalkan struktur database untuk performa maksimal dengan MySQL dan PostgreSQL",
    icon: Database,
    features: ["Schema Design", "Query Optimization", "Data Migration"],
  },
  {
    id: 4,
    title: "Mobile Development",
    description:
      "Membangun aplikasi mobile lintas platform dengan Flutter dan React Native untuk iOS dan Android",
    icon: Smartphone,
    features: ["Cross-Platform", "Native Performance", "Push Notifications"],
  },
  {
    id: 5,
    title: "Web Security",
    description:
      "Mengimplementasikan praktik keamanan terbaik untuk melindungi aplikasi web dari ancaman",
    icon: Shield,
    features: ["Authentication", "Authorization", "Data Protection"],
  },
  {
    id: 6,
    title: "Web Optimization",
    description:
      "Mengoptimalkan performa website untuk pengalaman pengguna yang lebih baik dan SEO",
    icon: Globe,
    features: ["SEO", "Load Time", "Core Web Vitals"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-abyssal-base text-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-abyssal-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-abyssal-accent/10 border border-abyssal-accent/20 text-abyssal-accent text-sm font-medium mb-4">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            My Services
          </h2>
          <p className="text-lg text-white/80">
            Menyediakan solusi pengembangan web yang komprehensif untuk
            kebutuhan modern
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-2xl bg-abyssal-base/50 border border-abyssal-accent/20 hover:border-abyssal-accent/50 hover:shadow-glow-inner transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-abyssal-accent/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Decorative corner */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-abyssal-accent/10 rounded-full blur-2xl group-hover:bg-abyssal-accent/20 transition-all duration-500" />

                <div className="space-y-6 relative z-10">
                  {/* Icon Container */}
                  <div className="relative inline-block">
                    <div className="w-14 h-14 bg-abyssal-accent/10 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-abyssal-accent/30">
                      <Icon className="text-abyssal-accent" size={26} />
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-abyssal-accent text-abyssal-base rounded-full flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {String(service.id).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-abyssal-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-white/80 group/item"
                      >
                        <ArrowRight
                          size={14}
                          className="mr-2 text-abyssal-accent group-hover/item:translate-x-1 transition-transform"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 text-abyssal-accent font-semibold text-sm group/link"
                  >
                    <span>Get Started</span>
                    <ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-white/70 mb-4">Have a project in mind?</p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-abyssal-accent text-abyssal-base rounded-xl font-semibold hover:bg-orange-400 hover:shadow-glow-accent transition-all"
          >
            Let's Talk
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;