import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Interactive 3D Portfolio',
      category: '3d',
      description: 'Immersive portfolio with Three.js and React',
      details: 'A fully interactive 3D portfolio website featuring particle animations, dynamic geometries, and smooth transitions. Built with modern web technologies.',
      tags: ['React', 'Three.js', 'Tailwind', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Full-stack e-commerce with real-time features',
      details: 'Modern e-commerce platform with product filtering, real-time inventory, payment integration, and admin dashboard.',
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Motion Graphics Studio',
      category: '3d',
      description: 'Generative art with GLSL shaders',
      details: 'Creative coding project featuring procedural generation, shader-based animations, and real-time rendering.',
      tags: ['WebGL', 'GLSL', 'Babylon.js', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1579321572759-2ca05854c169?w=500&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'Design System',
      category: 'design',
      description: 'Comprehensive component library',
      details: 'Complete design system with documentation, Storybook integration, and accessibility standards.',
      tags: ['Figma', 'React', 'Storybook', 'CSS'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    },
    {
      id: 5,
      title: 'Mobile App',
      category: 'web',
      description: 'Cross-platform mobile application',
      details: 'Responsive mobile-first web application with offline capabilities and PWA features.',
      tags: ['React Native', 'Redux', 'Firebase', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    },
    {
      id: 6,
      title: 'Data Visualization Dashboard',
      category: 'web',
      description: 'Real-time analytics dashboard',
      details: 'Interactive dashboard with real-time data visualization, custom charts, and drill-down capabilities.',
      tags: ['D3.js', 'React', 'Node.js', 'WebSockets'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: '3d', label: '3D & Animation' },
    { id: 'design', label: 'Design' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
          Featured Work
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl font-inter">
          A selection of projects showcasing my expertise in web development,
          3D graphics, and digital design.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex gap-4 flex-wrap">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-inter font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-accent-cyan to-accent-lime text-neutral-950'
                  : 'bg-neutral-800 text-neutral-300 hover:border-accent-cyan border border-neutral-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layoutId={`project-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden backdrop border border-neutral-800 hover:border-accent-cyan transition-all hover:shadow-glow-cyan"
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-neutral-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="text-sm text-accent-cyan font-mono mb-2">
                  {project.category.toUpperCase()}
                </div>
                <h3 className="text-xl font-space font-bold mb-2">{project.title}</h3>
                <p className="text-neutral-400 text-sm mb-4 font-inter">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-neutral-700 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-2 py-1 text-xs rounded bg-neutral-700 text-neutral-300">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="max-w-3xl w-full rounded-2xl backdrop border border-neutral-800 overflow-hidden max-h-[90vh] overflow-y-auto"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neutral-950 border border-neutral-700 flex items-center justify-center hover:border-accent-cyan transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <div className="text-sm text-accent-cyan font-mono mb-2">
                {selectedProject.category.toUpperCase()}
              </div>
              <h2 className="text-3xl font-space font-bold mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-neutral-300 mb-6 text-lg leading-relaxed">
                {selectedProject.details}
              </p>

              <div className="mb-6">
                <h3 className="font-space font-bold mb-3 text-accent-cyan">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-neutral-800 border border-neutral-700 text-sm hover:border-accent-lime transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <motion.a
                href="#contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-lime text-neutral-950 font-space font-bold rounded-lg hover:shadow-glow-cyan transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
