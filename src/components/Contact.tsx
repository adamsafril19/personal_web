import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Instagram,
  Clock,
  Calendar,
  Award,
  MessageSquare,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    service: "",
    budget: "",
    deadline: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("message"); // "message" or "faq"

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Consultation",
    "Other",
  ];

  const faqs = [
    {
      question: "What are your working hours?",
      answer:
        "I typically work Monday through Friday, from 9:00 AM to 6:00 PM (GMT+7). However, I'm flexible for international clients and can accommodate different time zones when needed.",
    },
    {
      question: "How do you handle project revisions?",
      answer:
        "I include up to 3 rounds of revisions in my standard packages. Additional revisions can be arranged at an hourly rate. I believe in delivering work that meets your expectations, so I work closely with clients throughout the process.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "I accept payments via bank transfer, PayPal, and major credit cards. For larger projects, I typically request a 50% deposit upfront with the remainder due upon completion.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex application could take 2-3 months. I'll provide a detailed timeline during our initial consultation.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(formData);
    setLoading(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        service: "",
        budget: "",
        deadline: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex items-center pt-16 bg-[url('/src/assets/bgSatu.jpg')] bg-cover bg-no-repeat bg-center bg-fixed relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-emerald-900 before:to-emerald-950 before:opacity-90 before:-z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-1 bg-emerald-700 text-white text-sm rounded-full inline-block mb-4">
              CONNECT WITH ME
            </span>
            <h2 className="text-5xl font-bold mb-4 text-white">Get In Touch</h2>
            <div className="w-20 h-1 bg-emerald-400 mx-auto my-6 rounded-full"></div>
            <p className="text-gray-100 text-lg drop-shadow-sm">
              Let's work together! Feel free to reach out for collaborations or
              just a friendly hello. I'm always open to discussing new projects
              and opportunities.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Mail className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a
                    href="mailto:adamsafrila0@gmail.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    adamsafrila0@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Phone className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a
                    href="tel:+62895395039902"
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    +62 895 395 039 902
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <MapPin className="text-purple-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-purple-600">Malang, Jawa Timur</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Clock className="text-amber-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Working Hours</h4>
                  <p className="text-amber-600">Mon - Fri, 9AM - 5PM</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center space-x-4 mt-8"
              variants={itemVariants}
            >
              <a
                href="https://www.linkedin.com/in/adam-safrila-5122971a2/"
                className="p-3 bg-white/90 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/adamsafril19"
                className="p-3 bg-white/90 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-md"
                title="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/adamsfrlh/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 shadow-md"
                title="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#portfolio"
                className="p-3 bg-white/90 rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-md"
                title="Portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#portfolio")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <Award className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Tabs */}
              <div className="flex mb-8 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("message")}
                  className={`px-6 py-3 font-medium text-sm transition-colors relative ${
                    activeTab === "message"
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Message</span>
                  </div>
                  {activeTab === "message" && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                      layoutId="activeTab"
                    ></motion.div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("faq")}
                  className={`px-6 py-3 font-medium text-sm transition-colors relative ${
                    activeTab === "faq"
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>FAQs</span>
                  </div>
                  {activeTab === "faq" && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                      layoutId="activeTab"
                    ></motion.div>
                  )}
                </button>
              </div>

              {activeTab === "message" ? (
                <div>
                  {submitted ? (
                    <motion.div
                      className="text-center py-16"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out. I'll get back to you as soon
                        as possible.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            placeholder="John Doe"
                            required
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Email Address{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label
                            htmlFor="service"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Service Needed
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          >
                            <option value="">Select a service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="budget"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          >
                            <option value="">Select budget range</option>
                            <option value="< $1000">Less than $1,000</option>
                            <option value="$1000-$5000">$1,000 - $5,000</option>
                            <option value="$5000-$10000">
                              $5,000 - $10,000
                            </option>
                            <option value="> $10000">More than $10,000</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="How can I help you?"
                          required
                        />
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="deadline"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Project Deadline
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Calendar className="w-5 h-5 text-gray-400" />
                          </div>
                          <input
                            type="date"
                            id="deadline"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleChange}
                            className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          />
                        </div>
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Describe your project or inquiry in detail..."
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-70 group"
                      >
                        {loading ? (
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              ) : (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Frequently Asked Questions
                  </h3>
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="bg-gray-50 p-4">
                        <h4 className="font-medium text-gray-800">
                          {faq.question}
                        </h4>
                      </div>
                      <div className="p-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  ))}

                  <div className="mt-8 text-center">
                    <p className="text-gray-600 mb-4">
                      Don't see your question here? Feel free to reach out
                      directly.
                    </p>
                    <button
                      onClick={() => setActiveTab("message")}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <span>Contact Me</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
