import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { profile } from '../data/portfolio';
import { Toast } from '../components/Toast';

export const ContactSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // bot trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | null }>({
    message: '',
    type: null,
  });

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check for bots
    if (formData.honeypot) {
      console.warn('Bot detected via honeypot.');
      return;
    }

    if (!validate()) return;

    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS environment variables are configured
    if (!serviceId || !templateId || !publicKey) {
      console.info('EmailJS environment variables not set. Triggering direct mailto client fallback.');
      
      const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Hi Sharda,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
      )}`;

      setToast({
        message: 'Email service config not found. Opening your email app to send directly...',
        type: 'success',
      });

      setTimeout(() => {
        window.location.href = mailtoLink;
        setLoading(false);
      }, 1000);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setToast({
        message: 'Thank you! Your message has been sent successfully.',
        type: 'success',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
      });
      setErrors({});
    } catch (error) {
      console.error('EmailJS error:', error);
      setToast({
        message: 'Failed to send message via automated service. Please use the direct email link.',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[#8955FF]/30 text-xs font-semibold text-[#B49AFF] uppercase tracking-wider mb-3 shadow-glow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#8955FF]" />
            <span>Get in Touch</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Let's Create Something <span className="text-gradient-purple">Intelligent</span> Together
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#A7A9BE] text-base sm:text-lg max-w-2xl mt-4"
          >
            Have an interesting idea, project, or opportunity? I'd love to connect.
          </motion.p>
        </div>

        {/* Contact Grid: Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contact Details & Links (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Reach Out Directly
              </h3>
              <p className="text-sm text-[#A7A9BE] leading-relaxed mb-6">
                Whether you're looking for an ML intern, collaborating on AI research, or exploring software solutions, feel free to reach out anytime.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/10 hover:border-[#8955FF]/40 hover:bg-white/[0.05] transition-all group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#8955FF]/15 border border-[#8955FF]/30 flex items-center justify-center text-[#B49AFF] group-hover:scale-105 group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-semibold text-[#A7A9BE]">Email</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#B49AFF] transition-colors break-all">
                      {profile.email}
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/10 hover:border-[#8955FF]/40 hover:bg-white/[0.05] transition-all group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#8955FF]/15 border border-[#8955FF]/30 flex items-center justify-center text-[#B49AFF] group-hover:scale-105 group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-semibold text-[#A7A9BE]">Phone</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#B49AFF] transition-colors">
                      {profile.phone}
                    </div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/10 hover:border-[#0077B5]/40 hover:bg-white/[0.05] transition-all group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0077B5]/15 border border-[#0077B5]/30 flex items-center justify-center text-[#0077B5] group-hover:scale-105 transition-all">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-semibold text-[#A7A9BE]">LinkedIn</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#B49AFF] transition-colors">
                      sharda-thakur-14907a374
                    </div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/10 hover:border-white/40 hover:bg-white/[0.05] transition-all group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-all">
                    <FaGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-semibold text-[#A7A9BE]">GitHub</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#B49AFF] transition-colors">
                      thakursharda2007
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/5 opacity-80">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#A7A9BE]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-semibold text-[#A7A9BE]">Location</div>
                    <div className="text-sm font-medium text-white">
                      {profile.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span>Send a Direct Message</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </h3>
              <p className="text-xs text-[#A7A9BE] mb-6">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot field (hidden from legitimate users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="honeypot">Leave this blank</label>
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#A7A9BE] mb-1.5 uppercase tracking-wider">
                      Your Name <span className="text-[#8955FF]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white placeholder-[#A7A9BE]/40 text-sm focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500/70' : 'border-white/10 focus:border-[#8955FF]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#A7A9BE] mb-1.5 uppercase tracking-wider">
                      Your Email <span className="text-[#8955FF]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white placeholder-[#A7A9BE]/40 text-sm focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500/70' : 'border-white/10 focus:border-[#8955FF]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-[#A7A9BE] mb-1.5 uppercase tracking-wider">
                    Subject <span className="text-[#8955FF]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship opportunity / AI collaboration"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white placeholder-[#A7A9BE]/40 text-sm focus:outline-none transition-colors ${
                      errors.subject ? 'border-rose-500/70' : 'border-white/10 focus:border-[#8955FF]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#A7A9BE] mb-1.5 uppercase tracking-wider">
                    Message <span className="text-[#8955FF]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Sharda, I came across your portfolio and would like to discuss..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white placeholder-[#A7A9BE]/40 text-sm focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-rose-500/70' : 'border-white/10 focus:border-[#8955FF]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#8955FF] to-[#6C38E8] hover:from-[#9D71FF] hover:to-[#7E49FF] shadow-glow-md hover:shadow-glow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>

      {/* Floating Toast notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: null })}
      />
    </section>
  );
};
