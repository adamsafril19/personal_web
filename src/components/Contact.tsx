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
      // Apply base background and text color
      className="min-h-screen flex items-center py-20 bg-abyssal-base text-white relative overflow-hidden"
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
            {/* Adjusted badge style */}
            <span className="px-4 py-1 bg-abyssal-accent/20 text-abyssal-accent text-sm rounded-full inline-block mb-4">
              CONNECT WITH ME
            </span>
            {/* Ensure text is white */}
            <h2 className="text-5xl font-bold mb-4 text-white">Get In Touch</h2>
            {/* Adjusted divider color */}
            <div className="w-20 h-1 bg-abyssal-accent mx-auto my-6 rounded-full"></div>
            {/* Ensure text is white */}
            <p className="text-white text-lg drop-shadow-sm">
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
            {/* Card 1 - Adjusted style */}
            <motion.div
              className="bg-abyssal-base/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-glow-inner border border-abyssal-accent/20 hover:border-abyssal-accent/50 transition-all duration-300 transform hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4">
                {/* Adjusted icon style */}
                <div className="p-3 bg-abyssal-accent/10 rounded-lg">
                  <Mail className="text-abyssal-accent w-6 h-6" />
                </div>
                <div>
                  {/* Ensure text is white */}
                  <h4 className="font-semibold text-white">Email</h4>
                  {/* Adjusted link color */}
                  <a
                    href="mailto:adamsafrila0@gmail.com"
                    className="text-abyssal-accent hover:text-orange-400 transition-colors"
                  >
                    adamsafrila0@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Adjusted style */}
            <motion.div
              className="bg-abyssal-base/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-glow-inner border border-abyssal-accent/20 hover:border-abyssal-accent/50 transition-all duration-300 transform hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4">
                {/* Adjusted icon style */}
                <div className="p-3 bg-abyssal-accent/10 rounded-lg">
                  <Phone className="text-abyssal-accent w-6 h-6" />
                </div>
                <div>
                  {/* Ensure text is white */}
                  <h4 className="font-semibold text-white">Phone</h4>
                  {/* Adjusted link color */}
                  <a
                    href="tel:+62895395039902"
                    className="text-abyssal-accent hover:text-orange-400 transition-colors"
                  >
                    +62 895 395 039 902
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Adjusted style */}
            <motion.div
              className="bg-abyssal-base/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-glow-inner border border-abyssal-accent/20 hover:border-abyssal-accent/50 transition-all duration-300 transform hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4">
                {/* Adjusted icon style */}
                <div className="p-3 bg-abyssal-accent/10 rounded-lg">
                  <MapPin className="text-abyssal-accent w-6 h-6" />
                </div>
                <div>
                  {/* Ensure text is white */}
                  <h4 className="font-semibold text-white">Location</h4>
                  {/* Adjusted text color */}
                  <p className="text-abyssal-accent">Malang, Jawa Timur</p>
                </div>
              </div>
            </motion.div>

            {/* Card 4 - Adjusted style */}
            <motion.div
              className="bg-abyssal-base/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-glow-inner border border-abyssal-accent/20 hover:border-abyssal-accent/50 transition-all duration-300 transform hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4">
                {/* Adjusted icon style */}
                <div className="p-3 bg-abyssal-accent/10 rounded-lg">
                  <Clock className="text-abyssal-accent w-6 h-6" />
                </div>
                <div>
                  {/* Ensure text is white */}
                  <h4 className="font-semibold text-white">Working Hours</h4>
                  {/* Adjusted text color */}
                  <p className="text-abyssal-accent">Mon - Fri, 9AM - 5PM</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links - Adjusted style */}
            <motion.div
              className="flex justify-center space-x-4 mt-8"
              variants={itemVariants}
            >
              <a
                href="https://www.linkedin.com/in/adam-safrila-5122971a2/"
                className="p-3 bg-abyssal-base/70 text-abyssal-accent rounded-full hover:bg-abyssal-accent hover:text-abyssal-base transition-all duration-300 shadow-md border border-abyssal-accent/30"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/adamsafril19"
                className="p-3 bg-abyssal-base/70 text-abyssal-accent rounded-full hover:bg-abyssal-accent hover:text-abyssal-base transition-all duration-300 shadow-md border border-abyssal-accent/30"
                title="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/adamsfrlh/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-abyssal-base/70 text-abyssal-accent rounded-full hover:bg-abyssal-accent hover:text-abyssal-base transition-all duration-300 shadow-md border border-abyssal-accent/30"
                title="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#portfolio"
                className="p-3 bg-abyssal-base/70 text-abyssal-accent rounded-full hover:bg-abyssal-accent hover:text-abyssal-base transition-all duration-300 shadow-md border border-abyssal-accent/30"
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
            {/* Adjusted form container style */}
            <motion.div
              className="bg-abyssal-base/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-abyssal-accent/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Tabs - Adjusted border and text colors */}
              <div className="flex mb-8 border-b border-abyssal-accent/30">
                <button
                  onClick={() => setActiveTab("message")}
                  className={`px-6 py-3 font-medium text-sm transition-colors relative ${
                    activeTab === "message"
                      ? "text-abyssal-accent" // Active tab color
                      : "text-white/70 hover:text-white" // Inactive tab color
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Message</span>
                  </div>
                  {activeTab === "message" && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-abyssal-accent" // Active tab underline color
                      layoutId="activeTab"
                    ></motion.div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("faq")}
                  className={`px-6 py-3 font-medium text-sm transition-colors relative ${
                    activeTab === "faq"
                      ? "text-abyssal-accent" // Active tab color
                      : "text-white/70 hover:text-white" // Inactive tab color
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>FAQs</span>
                  </div>
                  {activeTab === "faq" && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-abyssal-accent" // Active tab underline color
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
                      {/* Adjusted success message style */}
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-abyssal-accent/10 rounded-full mb-6">
                        <CheckCircle className="w-10 h-10 text-abyssal-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-white/80 mb-6">
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
                            // Adjusted label color
                            className="block text-sm font-medium text-white/80 mb-2"
                          >
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            // Adjusted input style
                            className="w-full px-4 py-3 rounded-lg border border-abyssal-accent/30 bg-abyssal-base/70 text-white focus:ring-2 focus:ring-abyssal-accent focus:border-transparent transition-colors placeholder-white/50"
                            placeholder="John Doe"
                            required
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            // Adjusted label color
                            className="block text-sm font-medium text-white/80 mb-2"
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
                            // Adjusted input style
                            className="w-full px-4 py-3 rounded-lg border border-abyssal-accent/30 bg-abyssal-base/70 text-white focus:ring-2 focus:ring-abyssal-accent focus:border-transparent transition-colors placeholder-white/50"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label
                            htmlFor="service"
                            // Adjusted label color
                            className="block text-sm font-medium text-white/80 mb-2"
                          >
                            Service Needed
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            // Adjusted select style
                            className="w-full px-4 py-3 rounded-lg border border-abyssal-accent/30 bg-abyssal-base/70 text-white focus:ring-2 focus:ring-abyssal-accent focus:border-transparent transition-colors appearance-none"
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
                            // Adjusted label color
                            className="block text-sm font-medium text-white/80 mb-2"
                          >
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            // Adjusted select style
                            className="w-full px-4 py-3 rounded-lg border border-abyssal-accent/30 bg-abyssal-base/70 text-white focus:ring-2 focus:ring-abyssal-accent focus:border-transparent transition-colors appearance-none"
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
                          // Adjusted label color
                          className="block text-sm font-medium text-white/80 mb-2"
                        >
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          // Adjusted input style
                          className="w-full px-4 py-3 rounded-lg border border-abyssal-accent/30 bg-abyssal-base/70 text-white focus:ring-2 focus:ring-abyssal-accent focus:border-transparent transition-colors placeholder-white/50"
                          placeholder="How can I help you?"
                          required
                        />
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="deadline"
                          // Adjusted label color
                          className="block text-sm font-medium text-white/80 mb-2"
                        >
                          Project Deadline
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            {/* Adjusted icon color */}
                            <Calendar className="w-5 h-5 text-white/50" />
                          </div>
                          <input
                            type="date"
                            id="deadline"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleChange}
                            // Adjusted date input style
                            className="w-full pl-10 px-4 py-3 rounded-lg border border-abyssal-accent/30 bg-abyssal-base/70 text-white focus:ring-2 focus:ring-abyssal-accent focus:border-transparent transition-colors"
                          />
                        </div>
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="message"
                          // Adjusted label color
                          className="block text-sm font-medium text-white/80 mb-2"
                        >
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          // Adjusted textarea style
                          className="w-full px-4 py-3 rounded-lg border border-abyssal-accent/30 bg-abyssal-base/70 text-white focus:ring-2 focus:ring-abyssal-accent focus:border-transparent transition-colors placeholder-white/50"
                          placeholder="Describe your project or inquiry in detail..."
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        // Adjusted button style
                        className="w-full px-6 py-4 bg-abyssal-accent text-abyssal-base rounded-lg hover:bg-orange-400 transition-colors flex items-center justify-center space-x-2 disabled:opacity-70 group font-semibold"
                      >
                        {loading ? (
                          // Adjusted spinner color
                          <div className="w-6 h-6 border-2 border-abyssal-base border-t-transparent rounded-full animate-spin"></div>
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
                  {/* Adjusted FAQ title color */}
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Frequently Asked Questions
                  </h3>
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      // Adjusted FAQ item style
                      className="border border-abyssal-accent/20 rounded-lg overflow-hidden bg-abyssal-base/30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Adjusted FAQ question style */}
                      <div className="bg-abyssal-base/50 p-4">
                        <h4 className="font-medium text-white">
                          {faq.question}
                        </h4>
                      </div>
                      {/* Adjusted FAQ answer style */}
                      <div className="p-4">
                        <p className="text-white/80">{faq.answer}</p>
                      </div>
                    </motion.div>
                  ))}

                  <div className="mt-8 text-center">
                    {/* Adjusted text color */}
                    <p className="text-white/80 mb-4">
                      Don't see your question here? Feel free to reach out
                      directly.
                    </p>
                    <button
                      onClick={() => setActiveTab("message")}
                      // Adjusted button style
                      className="inline-flex items-center px-6 py-3 bg-abyssal-accent text-abyssal-base rounded-lg hover:bg-orange-400 transition-colors font-semibold"
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
