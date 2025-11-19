import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function About() {
  const [counters, setCounters] = useState({
    languages: 0,
    frameworks: 0,
    tools: 0,
  });

  useEffect(() => {
    const targets = { languages: 12, frameworks: 15, tools: 20 };
    const intervals = {};

    Object.keys(targets).forEach((key) => {
      intervals[key] = setInterval(() => {
        setCounters((prev) => ({
          ...prev,
          [key]: prev[key] < targets[key] ? prev[key] + 1 : targets[key],
        }));
      }, 30);
    });

    return () => Object.values(intervals).forEach(clearInterval);
  }, []);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'] },
    { category: '3D & Animation', items: ['Three.js', 'Blender', 'GSAP', 'Framer Motion', 'Babylon.js'] },
    { category: 'Tools & DevOps', items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Figma'] },
  ];

  const experience = [
    {
      period: '2023 - Present',
      role: 'Senior Creative Developer',
      company: 'Digital Studio',
      description: 'Leading innovative web experiences and 3D interactive projects.',
    },
    {
      period: '2021 - 2023',
      role: 'Full Stack Developer',
      company: 'Tech Company',
      description: 'Built scalable applications and optimized user experiences.',
    },
    {
      period: '2019 - 2021',
      role: 'Frontend Developer',
      company: 'Startup Inc',
      description: 'Developed responsive web applications and interactive interfaces.',
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-space font-bold mb-6 gradient-text"
        >
          About Me
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl text-neutral-400 max-w-3xl font-inter leading-relaxed"
        >
          I&apos;m a creative developer with a passion for building beautiful, functional
          digital experiences. With a background in both design and development, I bridge
          the gap between aesthetics and technology.
        </motion.p>
      </motion.div>

      {/* Expertise Cards */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-space font-bold mb-12 gradient-text">
          Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-8 rounded-2xl backdrop border border-neutral-800 hover:border-accent-cyan transition-all hover:shadow-glow-cyan"
            >
              <h3 className="text-2xl font-space font-bold mb-4 text-accent-cyan">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-neutral-800 text-sm font-inter border border-neutral-700 hover:border-accent-lime transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Languages Proficient', value: counters.languages },
            { label: 'Frameworks & Libraries', value: counters.frameworks },
            { label: 'Tools & Technologies', value: counters.tools },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="p-8 rounded-2xl backdrop border border-neutral-800 text-center"
            >
              <div className="text-5xl font-space font-bold gradient-text mb-3">
                {stat.value}+
              </div>
              <div className="text-neutral-400 font-inter">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-space font-bold mb-12 gradient-text">
          Experience
        </h2>
        <div className="relative">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="mb-12 pl-8 border-l-2 border-neutral-800 hover:border-accent-cyan transition-colors"
            >
              <div className="absolute w-4 h-4 rounded-full bg-accent-cyan -left-2.5 top-2 shadow-glow-cyan" />
              <div className="text-sm font-mono text-accent-cyan mb-2">{exp.period}</div>
              <h3 className="text-2xl font-space font-bold mb-1">{exp.role}</h3>
              <p className="text-accent-lime font-inter mb-3">{exp.company}</p>
              <p className="text-neutral-400 max-w-2xl">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Philosophy */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="p-12 rounded-2xl backdrop border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950">
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-6 gradient-text">
            Philosophy
          </h2>
          <p className="text-lg text-neutral-300 font-inter leading-relaxed mb-6">
            I believe in creating technology that not only works beautifully but also
            solves real problems. Every project is an opportunity to push boundaries
            and explore new possibilities in digital design.
          </p>
          <p className="text-lg text-neutral-300 font-inter leading-relaxed">
            My approach combines minimalist design principles with powerful functionality,
            ensuring that every line of code and every pixel serves a purpose.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
