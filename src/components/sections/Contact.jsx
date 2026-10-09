import React, { useState } from 'react';
import Marquee from '../ui/Marquee';
import SectionHeading from '../ui/SectionHeading';
import { Mail, Copy, Check, Send, Sparkles, Clock, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    email: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailAddress = "ahmadnazir.2620@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use Formsubmit AJAX endpoint targeting ahmadnazir.2620@gmail.com
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name || 'Visitor',
          service: formData.service || 'Full-Stack Development',
          email: formData.email,
          message: formData.message || 'No additional message provided',
          _subject: `New Portfolio Inquiry from ${formData.name || 'Visitor'}`,
          _captcha: 'false',
          _template: 'table',
          _replyto: formData.email
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok && (data?.success === "true" || data?.success === true || (data?.message && data.message.includes("Activation")))) {
        setSubmitted(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        window.location.href = `mailto:${emailAddress}?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name || 'Visitor')}&body=Service: ${encodeURIComponent(formData.service)}%0A%0AEmail: ${encodeURIComponent(formData.email)}%0A%0A${encodeURIComponent(formData.message)}`;
      }
    } catch (err) {
      window.location.href = `mailto:${emailAddress}?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name || 'Visitor')}&body=Service: ${encodeURIComponent(formData.service)}%0A%0AEmail: ${encodeURIComponent(formData.email)}%0A%0A${encodeURIComponent(formData.message)}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Contact Marquee */}
      <div className="mb-16">
        <Marquee text="CONTACT ME • LET'S BUILD THE FUTURE • AVAILABLE FOR WORK • " reverse={true} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              badge="Let's Connect"
              title="Have an idea in mind?"
              subtitle="Whether you need a full-stack MERN application, modern API architecture, or a high-converting web presence, let's make it a reality."
            />

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-2xl glass-card border border-gray-200 dark:border-white/10 relative overflow-hidden group">
              <div className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-2">
                <Mail size={14} className="text-blue-600 dark:text-blue-400" /> Direct Email
              </div>

              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-base sm:text-lg font-mono text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors truncate"
                >
                  {emailAddress}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-black/5 hover:bg-blue-600 text-gray-700 hover:text-white dark:bg-white/5 dark:text-gray-300 dark:hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono shrink-0 shadow-sm"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-500 dark:text-emerald-300" />
                      <span className="text-emerald-600 dark:text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick response stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-1">
                  <Clock size={14} /> Response Time
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">&lt; 2 Hours</div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 mb-1">
                  <MapPin size={14} /> Location / Timezone
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Remote (UTC+5)</div>
              </div>
            </div>
          </div>

          {/* Right Column: Elevated Interactive Mad-Libs Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-gray-200 dark:border-white/10 relative shadow-2xl">
              <div className="text-2xl sm:text-4xl font-heading font-extrabold text-gray-950 dark:text-white mb-8 leading-snug">
                Hey! We are ready to{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  consult you_
                </span>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 mx-auto flex items-center justify-center">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-950 dark:text-white">
                    Request Received Successfully!
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-sans-tight max-w-md mx-auto">
                    Thank you for reaching out. Ahmad Nazir has received your message and will get back to you shortly at {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', service: '', email: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/15 text-xs font-mono text-gray-900 dark:text-white transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Mad-Libs Sentence 1 */}
                  <div className="text-lg sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-sans-tight leading-relaxed">
                    <span>My name is </span>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="bg-transparent border-b-2 border-gray-400 dark:border-white/20 focus:border-blue-600 dark:focus:border-blue-500 outline-none px-2 py-1 text-gray-950 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 font-medium transition-colors min-w-[180px] max-w-full"
                    />
                    <span> and I'm interested in </span>
                    <input
                      type="text"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      placeholder="e.g. MERN Web App / API"
                      className="bg-transparent border-b-2 border-gray-400 dark:border-white/20 focus:border-blue-600 dark:focus:border-blue-500 outline-none px-2 py-1 text-gray-950 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 font-medium transition-colors min-w-[200px] max-w-full"
                    />
                    <span>.</span>
                  </div>

                  {/* Mad-Libs Sentence 2 */}
                  <div className="text-lg sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-sans-tight leading-relaxed">
                    <span>Please contact me at </span>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="bg-transparent border-b-2 border-gray-400 dark:border-white/20 focus:border-blue-600 dark:focus:border-blue-500 outline-none px-2 py-1 text-gray-950 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 font-medium transition-colors min-w-[220px] max-w-full"
                    />
                    <span>.</span>
                  </div>

                  {/* Mad-Libs Sentence 3 */}
                  <div className="text-lg sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-sans-tight leading-relaxed">
                    <span>Optionally, I'm sharing more: </span>
                    <input
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="brief project details or timeline"
                      className="bg-transparent border-b-2 border-gray-400 dark:border-white/20 focus:border-blue-600 dark:focus:border-blue-500 outline-none px-2 py-1 text-gray-950 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 font-medium transition-colors w-full sm:w-auto min-w-[240px]"
                    />
                    <span>.</span>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gray-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 font-heading font-semibold transition-all shadow-xl shadow-black/10 dark:shadow-white/10 disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Sending Request...' : 'Send Request'}</span>
                      <Send size={16} />
                    </button>
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                      🔒 Direct message to Ahmad Nazir.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
