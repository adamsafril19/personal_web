import React from "react";
import {
  Code,
  Layout,
  Database,
  Server,
  ArrowRight,
  Users,
  Globe,
  Shield,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Membangun antarmuka pengguna yang responsif dan interaktif menggunakan React, Vue, dan teknologi modern lainnya",
    icon: "Layout",
    features: [
      "Responsive Design",
      "Modern Frameworks",
      "Performance Optimization",
    ],
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Mengembangkan aplikasi server yang kuat dan dapat diskalakan dengan Node.js, PHP, dan Laravel",
    icon: "Server",
    features: [
      "API Development",
      "Server Management",
      "Security Implementation",
    ],
    bgGradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    id: 3,
    title: "Database Design",
    description:
      "Merancang dan mengoptimalkan struktur database untuk performa maksimal dengan MySQL dan PostgreSQL",
    icon: "Database",
    features: ["Schema Design", "Query Optimization", "Data Migration"],
    bgGradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    id: 4,
    title: "API Development",
    description:
      "Membuat API RESTful dan GraphQL untuk integrasi yang mulus antar sistem",
    icon: "Code",
    features: ["REST API", "GraphQL", "Documentation"],
    bgGradient: "from-orange-500/10 to-yellow-500/10",
  },
  {
    id: 5,
    title: "Web Security",
    description:
      "Mengimplementasikan praktik keamanan terbaik untuk melindungi aplikasi web",
    icon: "Shield",
    features: ["Authentication", "Authorization", "Data Protection"],
    bgGradient: "from-red-500/10 to-orange-500/10",
  },
  {
    id: 6,
    title: "Web Optimization",
    description:
      "Mengoptimalkan performa website untuk pengalaman pengguna yang lebih baik",
    icon: "Globe",
    features: ["SEO", "Load Time", "Core Web Vitals"],
    bgGradient: "from-teal-500/10 to-cyan-500/10",
  },
];

const getIcon = (iconName: string) => {
  const icons = {
    Layout: Layout,
    Server: Server,
    Database: Database,
    Code: Code,
    Shield: Shield,
    Globe: Globe,
    Users: Users,
  };
  const IconComponent = icons[iconName as keyof typeof icons] || Code;
  return <IconComponent size={24} />;
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="text-gray-600 text-lg drop-shadow-sm">
            Menyediakan solusi pengembangan web yang komprehensif untuk
            kebutuhan modern
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group p-8 rounded-2xl bg-gradient-to-br ${service.bgGradient} border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="space-y-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary">{getIcon(service.icon)}</div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 drop-shadow-sm">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <ArrowRight size={16} className="mr-2 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 px-6 py-2 rounded-lg bg-white text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300 group-hover:shadow-md">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
