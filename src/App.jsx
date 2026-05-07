import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import Lenis from 'lenis';
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
import Magnetic from './components/ui/magnetic-button';
import Reveal from './components/ui/reveal';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center bg-white/10 backdrop-blur-md lg:bg-transparent">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center backdrop-blur-md">
          <LayoutGrid className="w-5 h-5 text-black" />
        </div>
        <span className="font-serif font-bold text-lg tracking-tight text-black">Kshamya.</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4">
        <a href="#projects" className="px-6 py-3 bg-black/5 hover:bg-black/10 rounded-full text-xs uppercase tracking-widest transition-all text-black">Projects</a>
        <a href="/resume.pdf" download="Kshamya_Amin_Resume.pdf" className="px-6 py-3 bg-accent-blue/10 hover:bg-accent-blue/20 rounded-full text-xs uppercase tracking-widest transition-all text-accent-blue font-bold">Resume</a>
        <Magnetic>
          <a href="#contact" className="px-6 py-3 bg-black text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">Let's Talk</a>
        </Magnetic>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-6 right-6 mt-4 bg-white/95 backdrop-blur-2xl p-8 rounded-3xl border border-black/5 shadow-2xl flex flex-col gap-4 md:hidden"
        >
          <a href="#projects" onClick={() => setIsOpen(false)} className="px-6 py-4 bg-black/5 rounded-2xl text-center text-xs uppercase tracking-widest font-bold">Projects</a>
          <a href="/resume.pdf" download="Kshamya_Amin_Resume.pdf" onClick={() => setIsOpen(false)} className="px-6 py-4 bg-accent-blue/10 rounded-2xl text-center text-xs uppercase tracking-widest font-bold text-accent-blue">Resume</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="px-6 py-4 bg-black text-white rounded-2xl text-center text-xs uppercase tracking-widest font-bold">Let's Talk</a>
        </motion.div>
      )}
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
            <Reveal>
              <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8 group-hover:tracking-tight transition-all duration-700">
                Kshamya Amin.<br />
                <span className="opacity-70 text-4xl md:text-5xl">Full Stack Developer|</span>
              </h1>
            </Reveal>
            <p className="text-text-secondary text-2xl max-w-xl font-normal leading-relaxed mb-12">
              Detail-oriented Computer Science graduate building practical, scalable solutions with Python, Java, JavaScript, and SQL.
            </p>
          </div>

          <Magnetic>
            <button className="btn-primary w-fit group">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center -ml-6 mr-2 group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight className="text-white w-5 h-5" />
              </div>
              Discover My Work
            </button>
          </Magnetic>
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
            <Reveal delay={0.4}>
              <h3 className="text-3xl font-serif mb-6 text-black">Education</h3>
            </Reveal>
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

const ProjectCard = ({ title, description, tags, icon: Icon, image, delay, className = "" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative overflow-hidden rounded-[3.5rem] bg-black ${className} transition-shadow hover:shadow-2xl hover:shadow-accent-blue/20`}
    >
      {/* Image Background */}
      <div className="absolute inset-0 z-0" style={{ transform: "translateZ(-50px)" }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-12" style={{ transform: "translateZ(50px)" }}>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-white/10 backdrop-blur-xl rounded-full text-[9px] font-black text-white uppercase tracking-[0.2em] border border-white/10">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-[0.9] tracking-tighter">
          {title}
        </h3>

        <p className="text-gray-400 text-base leading-relaxed mb-10 line-clamp-3 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0 max-w-md">
          {description}
        </p>

        <div className="flex items-center gap-4 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
          <Magnetic>
            <a href="#" className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-accent-blue hover:scale-110 transition-all">
              <Github className="w-6 h-6" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#" className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-accent-blue hover:scale-110 transition-all">
              <ExternalLink className="w-6 h-6" />
            </a>
          </Magnetic>
        </div>
      </div>
    </motion.div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submittedName, setSubmittedName] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, -500]);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => setLoading(false), 2500);
    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formsubmit.co/ajax/kshamyaamin19@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmittedName(formData.get("name"));
        setIsSubmitted(true);
        setSubmitError(null);
        e.target.reset();
      } else {
        const data = await response.json();
        setSubmitError(data.error || "Form submission failed. Please check your email to activate Formspree.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Something went wrong. Please try again later.");
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
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30 overflow-hidden">
        <img
          src={bgImg}
          alt="background"
          className="w-full h-full object-cover scale-110 blur-[1px] brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white"></div>
      </div>

      {/* Large Background Name Watermark */}
      <motion.div
        style={{ y: watermarkY }}
        className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden select-none"
      >
        <span className="text-[22vw] font-serif font-black text-black/[0.02] uppercase tracking-tighter whitespace-nowrap">
          Kshamya
        </span>
      </motion.div>

      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-accent-blue z-[100] origin-left shadow-[0_0_10px_#2563eb]" style={{ scaleX }} />

      <div className="fixed left-8 bottom-0 z-40 hidden lg:flex flex-col items-center space-y-8 pb-10">
        <Magnetic><a href="https://github.com/KshamyaAmin" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-blue transition-all hover:-translate-y-1"><Github /></a></Magnetic>
        <Magnetic><a href="https://linkedin.com/in/kshamya-amin" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-blue transition-all hover:-translate-y-1"><Linkedin /></a></Magnetic>
        <Magnetic><a href="mailto:kshamyaamin19@gmail.com" className="text-text-secondary hover:text-accent-blue transition-all hover:-translate-y-1"><Mail /></a></Magnetic>
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
                <Reveal>
                  <h2 className="section-heading mb-8 uppercase tracking-tighter italic">
                    Innovation & <br />
                    <span className="text-accent-blue">Excellence.</span>
                  </h2>
                </Reveal>
                <div className="space-y-6 text-text-secondary text-lg leading-relaxed font-medium">
                  <p>I am Kshamya Amin, a Computer Science graduate driven by the challenge of building software that solves real-world problems. Based in Udupi, I focus on developing practical, scalable solutions.</p>
                  <p>My approach combines strong programming fundamentals in Python, Java, and JavaScript with a passion for digital inclusion and user-friendly design.</p>
                </div>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Monitor, title: 'Development', desc: 'Building real-world web applications using Python, JavaScript, and modern web technologies.', color: 'text-accent-blue' },
                  { icon: Database, title: 'Backend Logic', desc: 'Designing and implementing backend systems using Flask, SQL, and structured logic.', color: 'text-blue-600' },
                  { icon: LayoutGrid, title: 'UI & Experience', desc: 'Creating responsive and user-friendly interfaces with HTML, CSS, and JavaScript.', color: 'text-emerald-500' },
                  { icon: Search, title: 'Problem Solving', desc: 'Applying logical thinking to solve real-world problems and improve application efficiency.', color: 'text-orange-500' }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.15,
                      ease: [0.21, 0.47, 0.32, 0.98]
                    }}
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
                <Reveal>
                  <h2 className="section-heading mb-16 tracking-tighter italic uppercase">Experience.</h2>
                </Reveal>
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
                      transition={{ delay: i * 0.1 }}
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
                <Reveal width="100%">
                  <h2 className="section-heading mb-16 tracking-tighter italic uppercase text-right">Education.</h2>
                </Reveal>
                <div className="space-y-8">
                  {[
                    { title: 'Master of Computer Applications (MCA)', company: 'St. Agnes College (Autonomous)', date: '2026 - Present' },
                    { title: 'Bachelor of Science (CS & Maths)', company: 'University College Mangaluru', date: '2021 - 2024' }
                  ].map((edu, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
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
              <Reveal width="100%">
                <h2 className="section-heading mb-6 tracking-tighter uppercase italic">Technical Stack.</h2>
              </Reveal>
              <p className="text-text-secondary text-xl font-light italic">Languages, frameworks, and tools I use to build.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Frontend",
                  skills: [
                    { name: 'HTML5', icon: 'html' },
                    { name: 'CSS3', icon: 'css' },
                    { name: 'React', icon: 'react' },
                    { name: 'JavaScript', icon: 'js' },
                    { name: 'Tailwind', icon: 'tailwind' }
                  ]
                },
                {
                  category: "Backend & Data",
                  skills: [
                    { name: 'Python', icon: 'python' },
                    { name: 'Java', icon: 'java' },
                    { name: 'SQL', icon: 'mysql' },
                    { name: 'Flask', icon: 'flask' }
                  ]
                },
                {
                  category: "Tools & Others",
                  skills: [
                    { name: 'VS Code', icon: 'vscode' },
                    { name: 'PyCharm', icon: 'pycharm' },
                    { name: 'Git', icon: 'git' },
                    { name: 'Canva', icon: 'canva', customIcon: 'https://api.iconify.design/simple-icons:canva.svg?color=%2300C4CC' }
                  ]
                }
              ].map((group, idx) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="light-card p-10 rounded-[3rem] border border-black/5 flex flex-col gap-10 hover:shadow-2xl hover:shadow-accent-blue/5 transition-all duration-500"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-accent-blue rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
                    <h3 className="text-2xl font-serif font-bold text-black">{group.category}</h3>
                  </div>

                  <div className="grid grid-cols-3 gap-8">
                    {group.skills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center gap-3 group/skill"
                      >
                        <div className="w-14 h-14 relative flex items-center justify-center p-3 bg-black/5 rounded-2xl group-hover/skill:bg-accent-blue/5 transition-colors">
                          <img
                            src={skill.customIcon || `https://skillicons.dev/icons?i=${skill.icon}`}
                            alt={skill.name}
                            className="w-full h-full object-contain filter group-hover/skill:drop-shadow-[0_0_8px_rgba(37,99,235,0.3)] transition-all duration-500"
                          />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-text-secondary group-hover/skill:text-black transition-colors text-center">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
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
                  {['IoT Workshop', 'Web Development', 'Digital Productivity'].map(cert => (
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
            <Reveal width="100%">
              <h2 className="section-heading mb-6 tracking-tighter italic uppercase">Project Work.</h2>
            </Reveal>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg font-light italic"></p>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-6 gap-8 auto-rows-[550px]">
            <ProjectCard
              title="Meri Panchayat"
              description="Public Issue Reporting Portal with Flask + SQLite backend, secure Email OTP, RBAC, and custom i18n engine for Kannada."
              tags={['Flask', 'SQLite', 'i18n', 'OTP']}
              icon={Globe}
              image={meriPanchayatImg}
              delay={0.1}
              className="lg:col-span-4"
            />
            <ProjectCard
              title="Smart Recipe Generator"
              description="Responsive recipe recommendation app using HTML, CSS, and JS with optimized client-side rendering."
              tags={['HTML', 'CSS', 'JS']}
              icon={ChefHat}
              image={smartRecipeImg}
              delay={0.2}
              className="lg:col-span-2"
            />
            <ProjectCard
              title="Tetris Game"
              description="Classic Tetris recreation in Python with implemented game logic, scoring, and real-time collision detection."
              tags={['Python', 'GameLogic', 'Collision']}
              icon={Zap}
              image={tetrisImg}
              delay={0.3}
              className="lg:col-span-2"
            />
            <ProjectCard
              title="Book Store System"
              description="Java Swing application for automated billing and transaction handling with a custom graphical interface."
              tags={['Java', 'Swing', 'Automation']}
              icon={Database}
              image={bookstoreImg}
              delay={0.4}
              className="lg:col-span-4"
            />
            <ProjectCard
              title="Student Stress Study"
              description="Analyzed the impact of coaching culture and parental pressure on PU students' performance and decision-making."
              tags={['Analysis', 'Education', 'Social']}
              icon={Search}
              image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
              delay={0.5}
              className="lg:col-span-6"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/[0.01] backdrop-blur-3xl p-12 md:p-24 rounded-[4rem] border border-black/5 relative overflow-hidden">
              <div className="grid md:grid-cols-2 gap-20 items-center">
                <div>
                  <Reveal>
                    <h2 className="text-6xl md:text-8xl font-serif mb-2 tracking-tighter leading-[0.8] text-black">Let's</h2>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <h2 className="text-6xl md:text-8xl font-serif italic mb-12 tracking-tighter leading-[0.8] text-black/80">Connect.</h2>
                  </Reveal>
                  <p className="text-text-secondary text-2xl mb-12 max-w-md font-light leading-relaxed">
                    Passionate about learning, building, and growing through real-world projects.</p>

                  <div className="flex flex-wrap gap-4 items-center">
                    <Magnetic>
                      <a href="mailto:kshamyaamin19@gmail.com" className="btn-primary py-5 px-10 rounded-full flex items-center gap-3 group">
                        Send a Mail <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                      </a>
                    </Magnetic>
                    <div className="px-8 py-5 rounded-full border border-black/10 text-lg font-medium text-black bg-white/5 backdrop-blur-sm">
                      +91 99808 91440
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 mt-12">
                    <Magnetic><a href="https://github.com/KshamyaAmin" target="_blank" rel="noreferrer" className="w-14 h-14 bg-black/5 backdrop-blur-xl border border-black/10 rounded-2xl flex items-center justify-center hover:scale-110 hover:text-accent-blue transition-all text-text-main"><Github /></a></Magnetic>
                    <Magnetic><a href="https://linkedin.com/in/kshamya-amin" target="_blank" rel="noreferrer" className="w-14 h-14 bg-black/5 backdrop-blur-xl border border-black/10 rounded-2xl flex items-center justify-center hover:scale-110 hover:text-accent-blue transition-all text-text-main"><Linkedin /></a></Magnetic>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  action="https://formsubmit.co/kshamyaamin19@gmail.com"
                  method="POST"
                  className="space-y-8 p-10 rounded-[3rem] bg-black/5 border border-black/10 relative"
                >
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                      animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                      className="absolute inset-0 z-50 bg-white/80 rounded-[3rem] flex flex-col items-center justify-center text-center p-8 border border-emerald-500/20"
                    >
                      <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/30"
                      >
                        <ShieldCheck className="text-white w-10 h-10" />
                      </motion.div>
                      <h3 className="text-3xl font-serif mb-4 text-black">Message Sent Successfully!</h3>
                      <p className="text-text-secondary text-lg mb-10 max-w-xs font-medium">Thank you, {submittedName}! Kshamya will get back to you shortly.</p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="px-8 py-3 bg-black text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-emerald-600 transition-colors"
                      >
                        Close
                      </button>
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
                  <Magnetic>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02, backgroundColor: isSubmitting ? '#000' : '#2563eb', color: '#fff' }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full bg-black text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-accent-blue/10 uppercase tracking-widest text-sm ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </Magnetic>
                  
                  {submitError && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs font-bold text-center mt-4"
                    >
                      {submitError}
                    </motion.p>
                  )}
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
              <Reveal>
                <h3 className="text-2xl font-serif mb-8 tracking-tight">Kshamya Portfolio</h3>
              </Reveal>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-sm">
                Thank you for visiting my personal portfolio website. Connect with me over socials.
              </p>
              <div className="text-xl font-serif italic text-gray-200">
                Turning ideas into interactive realities.
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <Reveal>
                <h3 className="text-2xl font-serif mb-8 tracking-tight">Quick Links</h3>
              </Reveal>
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
              <Reveal>
                <h3 className="text-2xl font-serif mb-8 tracking-tight">Contact Info</h3>
              </Reveal>
              <div className="space-y-6 mb-10">
                <a href="mailto:kshamyaamin19@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-accent-blue" />
                  <span className="font-medium">kshamyaamin19@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-gray-400">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span className="font-medium">Udupi, Karnataka</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {[
                  { icon: Linkedin, href: 'https://linkedin.com/in/kshamya-amin' },
                  { icon: Github, href: 'https://github.com/KshamyaAmin' },
                  { icon: Mail, href: 'mailto:kshamyaamin19@gmail.com' },
                ].map((social, i) => (
                  <Magnetic key={i}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all hover:-translate-y-1"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <Magnetic>
        <motion.button
          id="back-to-top"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-10 right-10 w-16 h-16 bg-white text-text-main rounded-2xl flex items-center justify-center shadow-2xl z-[90] border border-border-light transition-all"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      </Magnetic>
    </motion.div>
  );
};

export default App;
