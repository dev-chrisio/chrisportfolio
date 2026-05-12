/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Cpu,
  Globe,
  MessageSquare,
  ExternalLink,
  Github,
  Layout,
  Zap,
  Bot,
  Database,
  Layers,
  Send,
  Smartphone,
  Server,
  Cloud,
  Terminal,
  Search,
  CheckCircle2,
  Menu,
  X,
  ChevronRight,
  MousePointer2,
  Atom,
  Braces,
  FileCode,
  Palette,
  Wind,
  Brain,
  SquareTerminal,
  Workflow,
  Orbit,
  BookOpen,
  Sparkles
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp, faCss3Alt, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons';

const byPrefixAndName = {
  fab: {
    'php': faPhp,
    'css3-alt': faCss3Alt,
    'html5': faHtml5,
    'js': faJs,
  }
};

gsap.registerPlugin(ScrollTrigger);

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-morphism rounded-full px-8 py-3 translate-y-2">
        <div className="flex items-center">
          <span className="font-display font-bold text-xl tracking-tight">CHRISJOHN</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Services', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-400 hover:text-brand-orange transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden md:block px-6 py-2 bg-brand-orange text-white font-bold text-sm rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center">
          HIRE ME
        </a>

        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 glass-morphism rounded-2xl p-6 flex flex-col gap-4"
          >
            {['Home', 'Services', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-brand-orange"
              >
                {item}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full py-3 bg-brand-orange text-white font-bold rounded-xl mt-2 cursor-pointer text-center block">
              HIRE ME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-10 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-amber/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center z-10">
        <motion.div 
          className="md:col-span-7"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ willChange: "transform, opacity" }}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-12 h-[1px] bg-brand-orange" />
            <span className="text-brand-orange font-display font-medium tracking-widest text-sm uppercase">Building Better Experience</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.75] tracking-tighter mb-8 italic break-words uppercase"
          >
            CHRIS<span className="text-brand-orange">JOHN</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-snug font-light"
          >
            No hype, no technical hassle. I help organizations understand, design, and use AI in a down-to-earth way to build exceptional products.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="px-8 py-4 bg-brand-orange text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(177, 59, 255, 0.4)] transition-all flex items-center gap-2 group uppercase tracking-wider cursor-pointer text-center">
              BUILD WITH ME
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        <div className="md:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [-12, 12, -12],
            }}
            transition={{
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              },
              opacity: { duration: 1.2 },
              scale: { duration: 1.2 }
            }}
            style={{ willChange: "transform, opacity" }}
            className="relative z-20 w-full aspect-square max-w-[420px] mx-auto rounded-full"
          >
            {/* Optimized Glow Layer using hardware-accelerated opacity animations instead of heavy box-shadow repaints */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-brand-orange/30 blur-[60px] -z-10"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "opacity" }}
            />
            {/* Main Character Image - High Quality Custom Avatar in Circle */}
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img
                src="/chrisjohn_hero_avatar.png"
                alt="Chrisjohn Tech Character"
                className="w-full h-full object-cover rounded-full hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-bg-dark/20 to-transparent pointer-events-none rounded-full" />
            </div>
          </motion.div>

          {/* Decorative Floating Cards like the image reference */}
          <div className="absolute -top-10 -right-10 md:-right-20 w-48 h-48 opacity-20 pointer-events-none animate-pulse">
            <Layers className="w-full h-full text-brand-orange" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: 'Landing Pages', icon: <MousePointer2 className="w-6 h-6" />, desc: 'High-conversion, pixel-perfect landing pages.' },
    { title: 'AI Automations', icon: <Zap className="w-6 h-6" />, desc: 'Streamline workflows with intelligent automation.' },
    { title: 'AI Agents', icon: <Bot className="w-6 h-6" />, desc: 'Custom LLM-powered agents for complex tasks.' },
    { title: 'Full-stack Website', icon: <Code2 className="w-6 h-6" />, desc: 'End-to-end robust web applications.' },
  ];

  return (
    <section id="services" className="py-16 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">What I'll offer for your <span className="text-brand-orange">Business</span></h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              I focus on delivering high-impact digital solutions by leveraging the power of AI and modern web technologies. Simple, effective, and future-proof.
            </p>
          </motion.div>

          <div className="space-y-4">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
                style={{ willChange: "transform, opacity" }}
                className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-orange/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-bg-dark flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-black transition-all">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display group-hover:text-brand-orange transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [activeImage, setActiveImage] = React.useState<string | null>(null);

  const projects = [
    {
      title: "THE HIGH TABLE",
      category: "Website",
      img: "/tht_website.png",
      link: "https://thehightablealliance.netlify.app/#home"
    },
    {
      title: "Kaia-Mo System",
      category: "Capstone Project",
      img: "/kaia_mo_system.png",
      link: "#"
    },
    {
      title: "Ai Automations and Agents",
      category: "Zapier",
      img: "/zapier_automation.png",
      link: "#"
    },
    {
      title: "24/7 Gym",
      category: "Website",
      img: "/gym_website.png",
      link: "https://24-7web.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          style={{ willChange: "transform, opacity" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold">LATEST <span className="text-brand-orange">WORKS</span></h2>
            <p className="text-gray-400 mt-4">Exploring the intersection of code, design, and intelligence.</p>
          </div>
          <button className="flex items-center gap-2 text-brand-orange hover:text-white transition-colors group cursor-pointer">
            VIEW ALL PROJECTS <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              style={{ willChange: "transform, opacity" }}
              className="group relative h-[450px] rounded-3xl overflow-hidden glass-morphism"
            >
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100 will-change-transform"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity will-change-[opacity]" />

              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-brand-orange text-xs font-mono font-bold tracking-widest uppercase mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold font-display mb-4">{project.title}</h3>
                {project.link.startsWith('http') ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 border border-white/20 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all"
                  >
                    VIEW PROJECT
                  </a>
                ) : (
                  <button
                    onClick={() => setActiveImage(project.img)}
                    className="inline-block px-6 py-2 border border-white/20 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all cursor-pointer animate-pulse hover:animate-none"
                  >
                    VIEW PROJECT
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Popup Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 glass-morphism p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-brand-orange text-white hover:text-black p-2 rounded-full transition-all z-10 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={activeImage}
                alt="Project Preview"
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const SkillsAndTools = () => {
  const skills = [
    { name: 'React JS', icon: <Atom className="w-5 h-5" /> },
    { name: 'Javascript', icon: <FontAwesomeIcon icon={byPrefixAndName.fab['js']} className="w-5 h-5" /> },
    { name: 'HTML', icon: <FontAwesomeIcon icon={byPrefixAndName.fab['html5']} className="w-5 h-5" /> },
    { name: 'CSS', icon: <FontAwesomeIcon icon={byPrefixAndName.fab['css3-alt']} className="w-5 h-5" /> },
    { name: 'Tailwind', icon: <Wind className="w-5 h-5" /> },
    { name: 'PHP', icon: <FontAwesomeIcon icon={byPrefixAndName.fab['php']} className="w-5 h-5" /> },
    { name: 'My SQL', icon: <Database className="w-5 h-5" /> },
    { name: 'Prompt Engineering', icon: <Brain className="w-5 h-5" /> },
  ];

  const tools = [
    { name: 'VS Code', icon: <SquareTerminal className="w-5 h-5" /> },
    { name: 'Zapier', icon: <Workflow className="w-5 h-5" /> },
    { name: 'Antigravity', icon: <Orbit className="w-5 h-5" /> },
    { name: 'Codex', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'ChatGPT', icon: <MessageSquare className="w-5 h-5" /> },
    { name: 'Gemini', icon: <Sparkles className="w-5 h-5" /> },
    { name: 'Supabase', icon: <Database className="w-5 h-5" /> },
  ];

  return (
    <section id="skills" className="py-16 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-3xl font-display font-bold mb-10 border-l-4 border-brand-orange pl-6">Technical <span className="text-brand-orange">Arsenal</span></h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                style={{ willChange: "transform, opacity" }}
                className="flex items-center gap-3 px-5 py-3 glass-morphism rounded-xl hover:border-brand-orange/50 transition-all cursor-default group"
              >
                <span className="text-brand-orange group-hover:scale-110 transition-transform">{skill.icon}</span>
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-3xl font-display font-bold mb-10 border-l-4 border-brand-amber pl-6">Power <span className="text-brand-amber">Stack</span></h2>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                style={{ willChange: "transform, opacity" }}
                className="flex items-center gap-3 px-5 py-3 glass-morphism rounded-xl hover:border-brand-amber/50 transition-all cursor-default group"
              >
                <span className="text-brand-amber group-hover:scale-110 transition-transform">{tool.icon}</span>
                <span className="text-sm font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '', website: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // 1. Honeypot check: spam bots will fill in the 'website' field
    if (formData.website && formData.website.trim() !== '') {
      console.warn('[Spam Blocked] Honeypot triggered.');
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '', website: '' });
      return;
    }

    // 2. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    // 3. Frontend rate limiting: max 7 emails per day
    const limitKey = 'emailjs_limit_count';
    const dateKey = 'emailjs_limit_date';
    const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
    const lastDate = localStorage.getItem(dateKey);
    let count = parseInt(localStorage.getItem(limitKey) || '0', 10);

    if (lastDate !== today) {
      localStorage.setItem(dateKey, today);
      localStorage.setItem(limitKey, '0');
      count = 0;
    }

    const MAX_PER_DAY = 7;
    if (count >= MAX_PER_DAY) {
      setErrorMessage(`You have reached the limit of ${MAX_PER_DAY} emails per day to avoid spam. Please try again tomorrow.`);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_6glwsvb";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_dzucmc9";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "Fikf2S-ctPDp7iQsI";
      const recipientEmail = import.meta.env.VITE_EMAILJS_RECIPIENT_EMAIL || "oportochrisjohnlloyd@gmail.com";

      const emailJsPayload = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          to_email: recipientEmail
        }
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailJsPayload),
      });

      if (response.ok) {
        // Increment daily count on success
        localStorage.setItem(limitKey, (count + 1).toString());

        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '', website: '' });

        // Auto dismiss the success state after 7 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 7000);
      } else {
        const errorText = await response.text();
        console.error('EmailJS direct send error:', errorText);
        setErrorMessage('Failed to deliver the message. Please try again later.');
      }
    } catch (error) {
      console.error('Contact submission error:', error);
      setErrorMessage('Could not connect to the email service. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          style={{ willChange: "transform, opacity" }}
          className="glass-morphism p-12 md:p-16 rounded-[4rem] relative overflow-hidden"
        >
          {/* Subtle flare */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange opacity-5 blur-[100px] pointer-events-none" />

          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">READY TO <span className="text-brand-orange">INNOVATE?</span></h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">Let's build the next generation of AI-powered experiences together.</p>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4 max-w-2xl mx-auto text-left"
              >
                {/* Honeypot Field - absolutely invisible to humans but caught by spam bots */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    placeholder="If you are human, leave this blank"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    disabled={isSubmitting}
                    placeholder="YOUR NAME"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-sm focus:outline-none focus:border-brand-orange disabled:opacity-50 transition-all font-mono text-white placeholder-gray-500"
                  />
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    placeholder="EMAIL ADDRESS"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-sm focus:outline-none focus:border-brand-orange disabled:opacity-50 transition-all font-mono text-white placeholder-gray-500"
                  />
                </div>
                <textarea
                  required
                  disabled={isSubmitting}
                  placeholder="YOUR MESSAGE"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-sm focus:outline-none focus:border-brand-orange disabled:opacity-50 transition-all font-mono text-white resize-none placeholder-gray-500"
                />

                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-mono text-center uppercase tracking-wide"
                  >
                    ⚠️ {errorMessage}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-orange disabled:bg-gray-700 disabled:text-gray-400 text-white font-bold py-5 px-10 rounded-full hover:scale-[1.02] disabled:hover:scale-100 hover:shadow-[0_0_30px_rgba(177, 59, 255, 0.4)] disabled:hover:shadow-none transition-all flex items-center justify-center gap-2 group cursor-pointer uppercase tracking-wider"
                >
                  {isSubmitting ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
                  {!isSubmitting && (
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="py-12 flex flex-col items-center justify-center gap-4 max-w-md mx-auto"
              >
                <div className="w-16 h-16 bg-brand-orange/20 border border-brand-orange rounded-full flex items-center justify-center text-brand-orange animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">MESSAGE SENT!</h3>
                <p className="text-gray-400 text-sm font-mono uppercase tracking-wider text-center">Thanks for reaching out! I'll get back to you shortly.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 opacity-50">
            <div className="flex gap-6">
              <Github className="w-5 h-5 hover:text-brand-orange cursor-pointer" />
              <MessageSquare className="w-5 h-5 hover:text-brand-orange cursor-pointer" />
              <Globe className="w-5 h-5 hover:text-brand-orange cursor-pointer" />
            </div>
            <p className="text-xs uppercase tracking-widest font-mono">© 2026 ChrisJohn Portfolio. ALL RIGHTS RESERVED.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function App() {
  useEffect(() => {
    // Smoother scroll interactions if needed
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="selection:bg-brand-orange selection:text-black">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-orange/5 via-bg-dark to-bg-dark opacity-50 pointer-events-none" />

      {/* Background Grid Pattern like in the tech illustration */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <Navbar />

      <main>
        <Hero />

        {/* Animated Divider */}
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-orange to-transparent mx-auto opacity-50" />

        <Services />
        <Projects />
        <SkillsAndTools />
        <Contact />
      </main>




    </div>
  );
}
