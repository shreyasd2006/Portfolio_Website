import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const socialLinks = [
    { name: 'GitHub', icon: '◆', url: '#' },
    { name: 'LinkedIn', icon: '★', url: '#' },
    { name: 'Twitter', icon: '◈', url: '#' },
    { name: 'Email', icon: '✉', url: 'mailto:hello@shreyas.dev' },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-20">
      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl md:text-7xl font-space font-bold mb-6 gradient-text">
          Let&apos;s Work Together
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl font-inter">
          Have a project in mind? I&apos;d love to hear about it. Get in touch and let&apos;s
          create something amazing together.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-space font-bold mb-8 gradient-text">
              Get in Touch
            </h2>

            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-sm text-accent-cyan font-mono mb-2">EMAIL</h3>
              <a
                href="mailto:hello@shreyas.dev"
                className="text-lg font-inter text-neutral-300 hover:text-accent-lime transition-colors"
              >
                hello@shreyas.dev
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-sm text-accent-cyan font-mono mb-2">LOCATION</h3>
              <p className="text-lg font-inter text-neutral-300">San Francisco, CA</p>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm text-accent-cyan font-mono mb-4">FOLLOW</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-xl hover:border-accent-cyan hover:text-accent-cyan transition-all"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    title={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="lg:col-span-2"
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-inter font-medium mb-2 text-neutral-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100 font-inter focus:border-accent-cyan focus:outline-none transition-colors placeholder-neutral-500"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-inter font-medium mb-2 text-neutral-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100 font-inter focus:border-accent-cyan focus:outline-none transition-colors placeholder-neutral-500"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Subject */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-inter font-medium mb-2 text-neutral-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100 font-inter focus:border-accent-cyan focus:outline-none transition-colors placeholder-neutral-500"
                  placeholder="Project inquiry"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-inter font-medium mb-2 text-neutral-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100 font-inter focus:border-accent-cyan focus:outline-none transition-colors resize-none placeholder-neutral-500"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-lime text-neutral-950 font-space font-bold text-lg hover:shadow-glow-cyan transition-all disabled:opacity-50"
                  whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                  whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : status === 'success' ? (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Message Sent!
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </motion.div>
            </div>
          </motion.form>
        </div>

        {/* CTA Section */}
        <motion.div
          className="p-12 rounded-2xl backdrop border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-4 gradient-text">
            Ready to Start Something Great?
          </h2>
          <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto font-inter">
            Whether you have a specific project or just want to explore possibilities,
            I&apos;m excited to connect and create together.
          </p>
          <motion.a
            href="mailto:hello@shreyas.dev"
            className="inline-block px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-lime text-neutral-950 font-space font-bold rounded-lg hover:shadow-glow-cyan transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Conversation
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
