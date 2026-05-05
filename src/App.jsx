import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Mail,
  ExternalLink,
  Code2,
  Layers,
  Zap,
  Search,
  ChevronUp,
  ArrowRight,
  Terminal,
  Globe,
  Monitor,
  Database,
  Cpu,
  ShieldCheck,
  ChefHat,
  Menu,
  Briefcase,
  LayoutGrid,
  Sun,
  Moon,
  Coffee,
  ArrowUpRight,
  MapPin,
  ChevronRight,
  Heart
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ShaderBackground from './components/ui/shader-background';
import bgImg from './assets/portfolio_background_light_illustration_1777826840178.png';

const Github = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import profileImg from './assets/profile.jpeg';
import meriPanchayatImg from './assets/meri-panchayat.png';
import smartRecipeImg from './assets/smart-recipe.png';
import tetrisImg from './assets/tetris.png';
import bookstoreImg from './assets/bookstore.png';

// --- Components ---

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center"
    >
      <div className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-serif mb-8 text-black tracking-tight"
        >
          Ksh<span className="text-accent-blue">.</span>
        </motion.h2>
        <div className="w-48 h-[2px] bg-black/5 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-black"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center bg-transparent">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center backdrop-blur-md">
          <LayoutGrid className="w-5 h-5 text-black" />
        </div>
        <span className="font-serif font-bold text-lg tracking-tight text-black">Kshamya.</span>
      </div>

      <div className="flex items-center gap-2">
        <a href="#projects" className="px-6 py-3 bg-black/5 hover:bg-black/10 rounded-full text-xs uppercase tracking-widest transition-all text-black">Projects</a>
        <a href="#contact" className="px-6 py-3 bg-black text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">Let's Talk</a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-40 pb-20 px-6 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">

        {/* Main Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 bento-card flex flex-col justify-between group"
        >
          <div>
            <div className="badge mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Available for work
            </div>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8 group-hover:tracking-tight transition-all duration-700">
              Kshamya Amin.<br />
              <span className="opacity-70 text-4xl md:text-5xl">Full Stack Developer|</span>
            </h1>
            <p className="text-text-secondary text-2xl max-w-xl font-normal leading-relaxed mb-12">
              Detail-oriented Computer Science graduate building practical, scalable solutions with Python, Java, JavaScript, and SQL.
            </p>
          </div>

          <button className="btn-primary w-fit group">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center -ml-6 mr-2 group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight className="text-white w-5 h-5" />
            </div>
            Discover My Work
          </button>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 bento-card flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-10 right-10 opacity-20 group-hover:scale-110 transition-transform duration-700">
            <Briefcase className="w-12 h-12" />
          </div>

          <div>
            <h3 className="text-3xl font-serif mb-6">Education</h3>
            <p className="text-text-secondary text-lg leading-relaxed max-w-sm">
              <span className="text-black font-medium">Master of Computer Applications (MCA)</span> at St. Agnes College (Autonomous).
            </p>
          </div>

          <div className="pt-8 border-t border-black/5 flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-text-secondary">2026 — PRESENT</span>
            <ArrowRight className="w-6 h-6 text-text-secondary" />
          </div>

          {/* Charmander Easter Egg */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-16 h-16 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif" alt="charmander" className="w-full h-full object-contain" />
          </div>
        </motion.div>

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-4 bento-card h-[280px] group overflow-hidden"
        >
          <div className="flex justify-between items-start mb-12">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
              <Layers className="w-6 h-6 text-text-secondary group-hover:text-white" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary bg-white/5 px-4 py-1.5 rounded-full">Expand</span>
          </div>
          <h4 className="text-2xl font-serif mb-2">Projects & Certs</h4>
          <div className="text-6xl font-serif">
            5<span className="text-accent-blue">+</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-8 bento-card h-[280px] bg-gradient-to-br from-white/[0.08] to-transparent relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"></div>
          <div className="relative z-10 h-full flex flex-col justify-end">
            <div className="badge w-fit mb-4">Featured Project</div>
            <h3 className="text-4xl font-serif">Meri Panchayat Portal</h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const SkillBar = ({ name, level, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="mb-8"
  >
    <div className="flex justify-between mb-2">
      <span className="font-bold text-sm text-text-main uppercase tracking-widest">{name}</span>
      <span className="text-xs font-bold text-accent-blue">{level}%</span>
    </div>
    <div className="w-full bg-border-light h-2 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="bg-accent-blue h-full rounded-full"
      />
    </div>
  </motion.div>
);

const ProjectCard = ({ title, description, tags, icon: Icon, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10 }}
    className="group relative light-card rounded-3xl overflow-hidden"
  >
    <div className={`h-52 bg-bg-light relative overflow-hidden flex items-center justify-center`}>
      {image ? (
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      ) : (
        <Icon className="w-20 h-20 text-accent-blue opacity-10 group-hover:scale-110 transition-transform duration-700" />
      )}
      <div className="absolute inset-0 bg-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-3 text-text-main group-hover:text-accent-blue transition-colors">{title}</h3>
      <p className="text-text-secondary mb-6 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-bg-light rounded-full text-[10px] font-bold text-text-secondary uppercase tracking-wider border border-border-light">{tag}</span>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-text-secondary hover:text-accent-blue transition-colors"><Github className="w-5 h-5" /></a>
        <a href="#" className="text-text-secondary hover:text-accent-blue transition-colors"><ExternalLink className="w-5 h-5" /></a>
      </div>
    </div>
  </motion.div>
);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formspree.io/f/kshamyaamin26@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-white selection:bg-accent-blue/10"
    >
      {/* Background Image Wrapper */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60 overflow-hidden">
        <img
          src={bgImg}
          alt="background"
          className="w-full h-full object-cover scale-110 blur-[2px] brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white"></div>
      </div>

      {/* Large Background Name Watermark */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden select-none">
        <span className="text-[22vw] font-serif font-black text-black/[0.04] uppercase tracking-tighter whitespace-nowrap">
          Kshamya
        </span>
      </div>

      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-accent-blue z-[100] origin-left shadow-[0_0_10px_#2563eb]" style={{ scaleX }} />

      <div className="fixed left-8 bottom-0 z-40 hidden lg:flex flex-col items-center space-y-8 pb-10">
        <a href="https://github.com/KshamyaAmin" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-blue transition-all hover:-translate-y-1"><Github /></a>
        <a href="https://linkedin.com/in/kshamya-amin" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-blue transition-all hover:-translate-y-1"><Linkedin /></a>
        <a href="mailto:kshamyaamin19@gmail.com" className="text-text-secondary hover:text-accent-blue transition-all hover:-translate-y-1"><Mail /></a>
        <div className="w-px h-32 bg-gradient-to-t from-accent-blue to-transparent" />
      </div>

      <ShaderBackground />

      {loading && <LoadingScreen />}

      <Navbar />

      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="section-heading mb-8 uppercase tracking-tighter italic">
                  Innovation & <br />
                  <span className="text-accent-blue">Excellence.</span>
                </h2>
                <div className="space-y-6 text-text-secondary text-lg leading-relaxed font-light">
                  <p>I am Kshamya Amin, a Computer Science graduate driven by the challenge of building software that solves real-world problems. Based in Mangaluru, I focus on developing practical, scalable solutions.</p>
                  <p>My approach combines strong programming fundamentals in Python, Java, and JavaScript with a passion for digital inclusion and user-friendly design.</p>
                </div>
              </motion.div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Code2, title: 'Development', desc: 'Crafting robust logic.', color: 'text-accent-blue' },
                  { icon: Layers, title: 'Architecture', desc: 'Scalable system design.', color: 'text-blue-400' },
                  { icon: Zap, title: 'Performance', desc: 'Speed and efficiency.', color: 'text-yellow-600' },
                  { icon: Search, title: 'Analysis', desc: 'Data-driven decisions.', color: 'text-green-600' }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="light-card p-8 rounded-3xl group"
                  >
                    <feature.icon className={`${feature.color} w-10 h-10 mb-4 group-hover:scale-110 transition-transform`} />
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-text-main">{feature.title}</h3>
                    <p className="text-text-secondary text-sm font-medium">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="journey" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">

              {/* Experience Column */}
              <div>
                <h2 className="section-heading mb-16 tracking-tighter italic uppercase">Experience.</h2>
                <div className="space-y-8">
                  {[
                    { title: 'Software Developer Intern', company: 'Primesophic Technology', date: 'Jan 2026 – Present', desc: 'Developing full-stack solutions and contributing to scalable software architecture using modern technologies.' },
                    { title: 'Web Development & Designing Intern', company: 'Oasis Infobyte (OIBSIP)', date: 'Nov 2025 – Dec 2025', desc: 'Designed responsive web interfaces using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and improved UX.' },
                    { title: 'Web Development Intern', company: 'Prodigy InfoTech', date: 'Aug 2025', desc: 'Built interactive and responsive web pages with a focus on clean UI design and optimized performance.' }
                  ].map((exp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bento-card !p-10 group"
                    >
                      <span className="text-accent-blue font-bold text-xs uppercase tracking-[0.3em] mb-4 block opacity-80">{exp.date}</span>
                      <h3 className="text-3xl font-serif mb-2">{exp.title}</h3>
                      <p className="text-text-secondary text-lg font-semibold mb-6">{exp.company}</p>
                      <p className="text-text-secondary font-normal leading-relaxed text-base">{exp.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education Column */}
              <div>
                <h2 className="section-heading mb-16 tracking-tighter italic uppercase text-right">Education.</h2>
                <div className="space-y-8">
                  {[
                    { title: 'Master in Computer Applications (MCA)', company: 'St. Agnes College (Autonomous)', date: '2026 - Present' },
                    { title: 'Bachelor of Science (CS & Maths)', company: 'University College Mangaluru', date: '2021 - 2024' }
                  ].map((edu, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bento-card !p-10 group text-right flex flex-col items-end"
                    >
                      <span className="text-accent-blue font-bold text-xs uppercase tracking-[0.3em] mb-4 block opacity-80">{edu.date}</span>
                      <h3 className="text-3xl font-serif mb-2">{edu.title}</h3>
                      <p className="text-text-secondary text-lg font-semibold mb-6">{edu.company}</p>
                      <div className="flex items-center gap-3 bg-white/5 px-6 py-2 rounded-full border border-white/10 group-hover:border-accent-blue/30 transition-colors">

                        <span className="text-lg font-serif font-bold text-white">{edu.cgpa}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-6 bg-black/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center">
              <h2 className="section-heading mb-6 tracking-tighter uppercase italic">Technical Stack.</h2>
              <p className="text-text-secondary text-xl font-light italic">Languages, frameworks, and tools I use to build.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'Python', icon: 'python' },
                { name: 'Java', icon: 'java' },
                { name: 'JavaScript', icon: 'js' },
                { name: 'HTML5', icon: 'html' },
                { name: 'CSS3', icon: 'css' },
                { name: 'SQL', icon: 'mysql' },
                { name: 'React', icon: 'react' },
                { name: 'Tailwind', icon: 'tailwind' },
                { name: 'Flask', icon: 'flask' },
                { name: 'VS Code', icon: 'vscode' },
                { name: 'PyCharm', icon: 'pycharm' },
              ].map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -8, backgroundColor: 'rgba(0,0,0,0.03)' }}
                  className="light-card p-8 rounded-[2.5rem] flex flex-col items-center justify-center gap-6 group transition-all duration-500 border border-black/5"
                >
                  <div className="w-16 h-16 relative flex items-center justify-center">
                    <img
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={skill.name}
                      className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-all duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary group-hover:text-black transition-colors">{skill.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-32 grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bento-card !p-12 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-10 group-hover:bg-accent-blue/20 transition-colors">
                  <Cpu className="w-7 h-7 text-text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-3xl font-serif mb-8 text-black">Core Abilities</h3>
                <div className="flex flex-wrap gap-4">
                  {['Full Stack Dev', 'Problem Solving', 'Digital Inclusion', 'System Design'].map(ability => (
                    <span key={ability} className="px-6 py-2.5 rounded-full bg-black/5 border border-black/5 text-xs font-bold uppercase tracking-widest text-text-secondary">
                      {ability}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bento-card !p-12 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-10 group-hover:bg-emerald-500/20 transition-colors">
                  <ShieldCheck className="w-7 h-7 text-text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-3xl font-serif mb-8 text-black">Certifications</h3>
                <div className="flex flex-wrap gap-4">
                  {['IoT Specialist', 'DSA Master', 'Web Development', 'Digital Productivity'].map(cert => (
                    <span key={cert} className="px-6 py-2.5 rounded-full bg-black/5 border border-black/5 text-xs font-bold uppercase tracking-widest text-text-secondary">
                      {cert}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-7xl mx-auto text-center mb-24">
            <h2 className="section-heading mb-6 tracking-tighter italic uppercase">Project Work.</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg font-light italic"></p>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProjectCard
              title="Meri Panchayat"
              description="Public Issue Reporting Portal with Flask + SQLite backend, secure Email OTP, RBAC, and custom i18n engine for Kannada."
              tags={['Flask', 'SQLite', 'i18n', 'OTP']}
              icon={Globe}
              image={meriPanchayatImg}
              delay={0.1}
            />
            <ProjectCard
              title="Smart Recipe Generator"
              description="Responsive recipe recommendation app using HTML, CSS, and JS with optimized client-side rendering."
              tags={['HTML', 'CSS', 'JS']}
              icon={ChefHat}
              image={smartRecipeImg}
              delay={0.2}
            />
            <ProjectCard
              title="Tetris Game"
              description="Classic Tetris recreation in Python with implemented game logic, scoring, and real-time collision detection."
              tags={['Python', 'GameLogic', 'Collision']}
              icon={Zap}
              image={tetrisImg}
              delay={0.3}
            />
            <ProjectCard
              title="Book Store System"
              description="Java Swing application for automated billing and transaction handling with a custom graphical interface."
              tags={['Java', 'Swing', 'Automation']}
              icon={Database}
              image={bookstoreImg}
              delay={0.4}
            />
            <ProjectCard
              title="Student Stress Study"
              description="Analyzed the impact of coaching culture and parental pressure on PU students' performance and decision-making."
              tags={['Analysis', 'Education', 'Social']}
              icon={Search}
              image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
              delay={0.5}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="glass-light p-12 md:p-24 rounded-[4rem] relative overflow-hidden">
              <div className="grid md:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="text-8xl md:text-[10rem] font-serif mb-2 tracking-tighter leading-[0.8] text-black">Let's</h2>
                  <h2 className="text-8xl md:text-[10rem] font-serif italic mb-12 tracking-tighter leading-[0.8] text-black/80">Connect.</h2>
                  <p className="text-text-secondary text-2xl mb-12 max-w-md font-light leading-relaxed">
                    Open for collaborations on full-stack website developments & portfolio projects. Based in India, working worldwide.
                  </p>

                  <div className="flex flex-wrap gap-4 items-center">
                    <a href="mailto:kshamyaamin19@gmail.com" className="btn-primary py-5 px-10 rounded-full flex items-center gap-3 group">
                      Send a Mail <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                    </a>
                    <div className="px-8 py-5 rounded-full border border-black/10 text-lg font-medium text-black bg-white/5 backdrop-blur-sm">
                      +91 99808 91440
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 mt-12">
                    <a href="https://github.com/KshamyaAmin" target="_blank" rel="noreferrer" className="w-14 h-14 glass-light rounded-2xl flex items-center justify-center hover:scale-110 hover:text-accent-blue transition-all text-text-main"><Github /></a>
                    <a href="https://linkedin.com/in/kshamya-amin" target="_blank" rel="noreferrer" className="w-14 h-14 glass-light rounded-2xl flex items-center justify-center hover:scale-110 hover:text-accent-blue transition-all text-text-main"><Linkedin /></a>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/kshamyaamin26@gmail.com"
                  method="POST"
                  className="space-y-8 p-10 rounded-[3rem] bg-black/5 border border-black/10 relative"
                >
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 z-50 bg-white/90 backdrop-blur-md rounded-[3rem] flex flex-col items-center justify-center text-center p-8"
                    >
                      <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
                        <ShieldCheck className="text-white w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-serif mb-2">Message Sent!</h3>
                      <p className="text-text-secondary">Thank you, Kshamya will get back to you soon.</p>
                    </motion.div>
                  )}
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary ml-1">Full Name</label>
                    <input name="name" required type="text" placeholder="Your Name" className="w-full bg-black/5 border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors text-text-main placeholder:text-text-secondary/50" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary ml-1">Email Address</label>
                    <input name="email" required type="email" placeholder="email@example.com" className="w-full bg-black/5 border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors text-text-main placeholder:text-text-secondary/50" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary ml-1">Message</label>
                    <textarea name="message" required rows="4" placeholder="Tell me about your project..." className="w-full bg-black/5 border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors resize-none text-text-main placeholder:text-text-secondary/50"></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02, backgroundColor: isSubmitting ? '#000' : '#2563eb', color: '#fff' }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full bg-black text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-accent-blue/10 uppercase tracking-widest text-sm ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 mb-24">
            {/* Column 1: Intro */}
            <div>
              <h3 className="text-2xl font-serif mb-8 tracking-tight">Kshamya Portfolio</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-sm">
                Thank you for visiting my personal portfolio website. Connect with me over socials.
              </p>
              <div className="text-xl font-serif italic text-gray-300">
                Keep Rising 🚀
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-2xl font-serif mb-8 tracking-tight">Quick Links</h3>
              <ul className="space-y-4">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Education', href: '#journey' },
                  { name: 'Work', href: '#projects' }
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent-blue transition-colors">
                        <ChevronRight className="w-3 h-3" />
                      </div>
                      <span className="font-medium">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h3 className="text-2xl font-serif mb-8 tracking-tight">Contact Info</h3>
              <div className="space-y-6 mb-10">
                <a href="mailto:kshamyaamin26@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-accent-blue" />
                  <span className="font-medium">kshamyaamin26@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-gray-400">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span className="font-medium">Mangaluru, India - 575002</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {[
                  { icon: Linkedin, href: 'https://linkedin.com/in/kshamya-amin' },
                  { icon: Github, href: 'https://github.com/KshamyaAmin' },
                  { icon: Mail, href: 'mailto:kshamyaamin26@gmail.com' },
                  { icon: Zap, href: '#' } // Placeholder for Twitter/X or similar
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all hover:-translate-y-1"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-500 font-medium tracking-tight">
            <div className="flex items-center gap-2">
              Designed With <Heart className="w-4 h-4 text-red-500 fill-red-500" /> By <span className="text-white">Kshamya Amin</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <motion.button
        id="back-to-top"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 w-16 h-16 bg-white text-text-main rounded-2xl flex items-center justify-center shadow-2xl z-[90] border border-border-light transition-all"
      >
        <ChevronUp />
      </motion.button>
    </motion.div>
  );
};

export default App;
