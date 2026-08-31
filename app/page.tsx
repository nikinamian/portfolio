"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  MapPin, 
  Sparkles, 
  GraduationCap, 
  ExternalLink, 
  RotateCcw,
  Users,
  ArrowRight,
  ArrowLeft,
  Coffee,
  Heart
} from "lucide-react";

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);
  const [activeTab, setActiveTab] = useState<"about" | "projects" | "experience">("about");
  const [replayKey, setReplayKey] = useState(0);
  const [selectedProject, setSelectedProject] = useState<"lensai" | "tickertalk" | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const triggerReplay = () => {
    setReplayKey((prev) => prev + 1);
    setShowTerminal(true);
    setSelectedProject(null);
  };

  if (!mounted) {
    return <div className="min-h-screen bg-white" />;
  }

  return (
    <main className="min-h-screen text-slate-800 font-mono selection:bg-pink-200 relative">
      {/* Background Ambience: Soft Pink, Light Brown & Warm Cashmere */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#FAF7F2]">
        <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-[#FCE7F3]/70 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] rounded-full bg-[#EFE3D3]/75 blur-[130px]" />
        <div className="absolute top-[35%] left-[45%] w-[45%] h-[45%] rounded-full bg-[#FDE2D1]/45 blur-[120px]" />
        
        {/* Subtle Floating Elements */}
        <div className="absolute top-[15%] right-[10%] opacity-[0.04] rotate-12 text-7xl">✨</div>
        <div className="absolute bottom-[20%] left-[8%] opacity-[0.04] -rotate-12 text-7xl">🍰</div>
        <div className="absolute top-[60%] left-[15%] opacity-[0.04] rotate-45 text-6xl">☕</div>
      </div>

      <AnimatePresence mode="wait">
        {showTerminal ? (
          <TerminalScreen 
            key={replayKey} 
            onComplete={() => setShowTerminal(false)} 
          />
        ) : (
          <motion.div 
            key="main-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto p-4 md:p-10 relative z-10"
          >
            {/* TOP NAVIGATION BAR */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-6 border-b border-pink-100/80 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                {/* Circular Profile Avatar */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white shadow-md ring-2 ring-pink-200/80 shrink-0 bg-[#FDF8F3]">
                  <img 
                    src="/IMG_0410.jpg" 
                    alt="Niki Namian" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div>
                  <h1 className="text-2xl md:text-3xl font-black tracking-tight text-slate-800">
                    Niki Namian
                  </h1>
                  <div className="mt-1 flex flex-col gap-0.5">
                    <p className="text-xs md:text-sm font-bold text-sky-600">
                      Computer Science Student @ UC Berkeley
                    </p>
                    <p className="text-xs md:text-sm font-medium text-pink-500">
                      2x ML/SWE Intern @ NASA JPL
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1.5">
                    <MapPin size={12} className="text-[#38BDF8]" /> Los Angeles, CA → Berkeley, CA
                  </p>
                </div>
              </div>

              {/* ACTION LINKS & REPLAY */}
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={triggerReplay}
                  className="px-3 py-1.5 bg-white/90 hover:bg-pink-50 text-pink-600 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 transition border border-pink-200/80 shadow-xs cursor-pointer"
                >
                  <RotateCcw size={12} /> Replay Intro
                </button>
                <a
                  href="https://www.linkedin.com/in/niki-namian/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/90 border border-slate-200 hover:border-sky-300 text-slate-600 hover:text-sky-500 rounded-lg transition shadow-xs flex items-center justify-center"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/nikinamian"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/90 border border-slate-200 hover:border-pink-300 text-slate-600 hover:text-pink-500 rounded-lg transition shadow-xs flex items-center justify-center"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                  </svg>
                </a>
              </div>
            </header>

            {/* MAIN CONTENT AREA */}
            {selectedProject ? (
              <ProjectDetail 
                projectId={selectedProject} 
                onBack={() => setSelectedProject(null)} 
              />
            ) : (
              <>
                {/* TAB CONTROLS */}
                <nav className="flex gap-1.5 my-6 p-1 bg-white/70 backdrop-blur-md rounded-xl w-fit border border-pink-100 shadow-xs">
                  <button
                    onClick={() => setActiveTab("about")}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                      activeTab === "about"
                        ? "bg-white text-slate-800 shadow-xs border border-pink-100"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    About Me
                  </button>
                  <button
                    onClick={() => setActiveTab("projects")}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                      activeTab === "projects"
                        ? "bg-white text-slate-800 shadow-xs border border-pink-100"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Projects &amp; Demos
                  </button>
                  <button
                    onClick={() => setActiveTab("experience")}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                      activeTab === "experience"
                        ? "bg-white text-slate-800 shadow-xs border border-pink-100"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Experience &amp; Leadership
                  </button>
                </nav>

                {/* TAB CONTENT SECTIONS */}
                <section>
                  {activeTab === "about" && <AboutSection />}
                  {activeTab === "projects" && <ProjectsSection onSelectProject={setSelectedProject} />}
                  {activeTab === "experience" && <ExperienceSection />}
                </section>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

// ==========================================
// 1. TERMINAL SCREEN
// ==========================================
function TerminalScreen({ onComplete }: { onComplete: () => void }) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [showSecond, setShowSecond] = useState(false);
  const [showLogs, setShowLogs] = useState(false);

  useEffect(() => {
    const cmd1 = "cd ~/nikinamian.dev";
    let i = 0;
    const type1 = setInterval(() => {
      setText1(cmd1.slice(0, i));
      i++;
      if (i > cmd1.length) {
        clearInterval(type1);
        setTimeout(() => setShowSecond(true), 700);
      }
    }, 90);
    return () => clearInterval(type1);
  }, []);

  useEffect(() => {
    if (!showSecond) return;
    const cmd2 = "./launch_portfolio.sh";
    let i = 0;
    const type2 = setInterval(() => {
      setText2(cmd2.slice(0, i));
      i++;
      if (i > cmd2.length) {
        clearInterval(type2);
        setTimeout(() => setShowLogs(true), 500);
        setTimeout(() => onComplete(), 3200);
      }
    }, 85);
    return () => clearInterval(type2);
  }, [showSecond, onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center h-screen w-screen relative overflow-hidden"
    >
      <div className="w-[90%] max-w-[500px] bg-white/95 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-pink-100 relative z-10">
        <div className="bg-[#FCE7F3] px-4 py-2.5 flex items-center gap-2 border-b border-pink-200">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F472B6]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]"></div>
          <span className="ml-auto text-[11px] font-semibold text-pink-500 flex items-center gap-1.5">
            <Terminal size={12} /> nikinamian@UCberkeley
          </span>
        </div>

        <div className="p-5 text-xs sm:text-sm text-slate-600 h-[240px] flex flex-col gap-1.5">
          <div>
            <span className="text-[#F472B6] font-semibold">nikinamian@UCberkeley</span>
            <span className="text-[#38BDF8]">:~ $</span> {text1}
            {!showSecond && <span className="animate-pulse font-bold">_</span>}
          </div>
          
          {showSecond && (
            <div>
              <span className="text-[#F472B6] font-semibold">nikinamian@UCberkeley</span>
              <span className="text-[#38BDF8]">:~/nikinamian.dev $</span> {text2}
              {showLogs && (
                <div className="mt-3 text-pink-600 text-[11px] sm:text-xs space-y-1">
                  <div>✔ Loading modules...</div>
                  <div>✔ Initializing workspace...</div>
                  <div className="text-[#38BDF8] font-bold pt-1.5">System Ready. Entering portfolio...</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ==========================================
// 2. ABOUT ME
// ==========================================
function AboutSection() {
  const skillCategories = [
    {
      id: "languages",
      title: "Languages",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-200",
      skillTiers: [
        ["JavaScript", "HTML/CSS", "SQL", "Assembly"],
        ["Python", "C++", "Java"],
        ["C#", "C"]
      ]
    },
    {
      id: "ai",
      title: "AI, ML & Data",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      skillTiers: [
        ["Sentiment Analysis", "Random Forests", "Scikit-learn", "Pandas", "NumPy"],
        ["Computer Vision", "Matplotlib", "RLHF", "GNNs"],
        ["Linear Regression", "LLMs"],
        ["NLP"]
      ]
    },
    {
      id: "tools",
      title: "Tools",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      skillTiers: [
        ["GitHub Actions", "Docker", "Azure/Fabric"],
        ["Streamlit", "VS Code"],
        ["REST APIs", "MongoDB"]
      ]
    },
    {
      id: "competencies",
      title: "Competencies",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      skillTiers: [
        ["System Architecture", "Auth & Security", "GPU Computing"],
        ["Web Development", "Debugging"],
        ["DSA", "OOP"]
      ]
    }
  ];

  return (
    <div className="space-y-5">
      {/* Intro Card */}
      <div className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-pink-100/80 shadow-xs">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 leading-snug">
          Hi, I&apos;m Niki! Welcome to my portfolio.
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          Born and raised in Los Angeles, I&apos;m currently studying Computer Science at <strong>UC Berkeley</strong>. I recently completed my second internship at <strong>NASA JPL</strong>, where I integrated machine learning and LLMs into the Deep Space Network to optimize complex scheduling workflows and reduce manual overhead.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          I love building scalable architectures and applying AI to real-world infrastructure to make critical systems faster and more efficient. Feel free to explore my latest <strong>projects</strong> and check out my <strong>work experience</strong>!
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white border border-slate-100 rounded-lg text-[11px] font-semibold text-slate-600 flex items-center gap-1.5 shadow-xs">
            <GraduationCap size={13} className="text-[#38BDF8]" /> UC Berkeley CS
          </span>
          <span className="px-3 py-1 bg-white border border-slate-100 rounded-lg text-[11px] font-semibold text-slate-600 flex items-center gap-1.5 shadow-xs">
            <Sparkles size={13} className="text-[#FBBF24]" /> 2x NASA JPL Intern
          </span>
        </div>
      </div>

      {/* POLAROID PHOTO COLLAGE */}
      <div className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-pink-100/80 shadow-xs">
        <h3 className="text-base font-bold text-slate-800 mb-2 flex items-center gap-2">
          <Heart size={16} className="text-pink-500" /> Life Outside the IDE
        </h3>
        <p className="text-slate-600 text-xs leading-relaxed mb-8">
          Outside of coding, I love baking, playing pickleball, and going on long walks! I also love trying new coffee shops with friends and family or making my own iced lattes! Here are a few snapshots from my world:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4 pt-2">
          {/* Polaroid 1: Pickleball */}
          <div className="bg-white p-3 pb-5 rounded-lg shadow-md border border-slate-100 transform -rotate-2 hover:rotate-0 hover:scale-105 transition duration-300 flex flex-col items-center">
            <div className="w-full h-48 bg-[#FAF6F0] rounded overflow-hidden mb-3 flex items-center justify-center">
              <img src="/IMG_4343.jpg" alt="Playing Pickleball" className="w-full h-full object-contain p-1" />
            </div>
            <p className="text-center text-xs text-slate-700 font-semibold">🎾 Pickleball tournaments</p>
          </div>

          {/* Polaroid 2: Baking */}
          <div className="bg-white p-3 pb-5 rounded-lg shadow-md border border-slate-100 transform rotate-2 hover:rotate-0 hover:scale-105 transition duration-300 flex flex-col items-center">
            <div className="w-full h-48 bg-[#FAF6F0] rounded overflow-hidden mb-3 flex items-center justify-center">
              <img src="/IMG_8180.jpg" alt="Fresh Strawberry Cake" className="w-full h-full object-contain p-1" />
            </div>
            <p className="text-center text-xs text-slate-700 font-semibold">🍰 Baking</p>
          </div>

          {/* Polaroid 3: Mission Control */}
          <div className="bg-white p-3 pb-5 rounded-lg shadow-md border border-slate-100 transform -rotate-1 hover:rotate-0 hover:scale-105 transition duration-300 flex flex-col items-center">
            <div className="w-full h-48 bg-[#FAF6F0] rounded overflow-hidden mb-3 flex items-center justify-center">
              <img src="/IMG_6298.jpg" alt="NASA JPL Mission Control" className="w-full h-full object-contain p-1" />
            </div>
            <p className="text-center text-xs text-slate-700 font-semibold">🚀 NASA JPL Mission Control</p>
          </div>

          {/* Polaroid 4: Astronaut selfie */}
          <div className="bg-white p-3 pb-5 rounded-lg shadow-md border border-slate-100 transform rotate-2 hover:rotate-0 hover:scale-105 transition duration-300 flex flex-col items-center">
            <div className="w-full h-48 bg-[#FAF6F0] rounded overflow-hidden mb-3 flex items-center justify-center">
              <img src="/IMG_6385.jpg" alt="At NASA JPL" className="w-full h-full object-contain p-1" />
            </div>
            <p className="text-center text-xs text-slate-700 font-semibold">⭐ Meeting astronauts</p>
          </div>
        </div>
      </div>

      {/* COZY CAFE SKILLS (UPSIDE DOWN STEAM & SHELVES) */}
      <div className="relative rounded-3xl pt-10 border border-pink-200/70 shadow-md overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FAF3EC] to-[#F2E7DC]">
        
        {/* Aesthetic Background Cafe Environment */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          
          {/* Cafe Wall Wallpaper */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#FFF5F7_0px,#FFF5F7_32px,#F8EBE3_32px,#F8EBE3_36px)] opacity-60" />

          {/* City View Window Center */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[85%] max-w-lg h-56 bg-gradient-to-b from-sky-200 to-pink-50 border-[8px] border-white rounded-t-3xl shadow-inner opacity-90 overflow-hidden">
             {/* Glowing Sun */}
             <div className="absolute top-8 left-10 w-12 h-12 bg-yellow-100 rounded-full blur-[2px] opacity-80 shadow-[0_0_20px_#FBBF24]" />
             {/* Cozy City Silhouettes */}
             <div className="absolute bottom-0 left-0 w-full flex items-end justify-center gap-1 opacity-50">
                <div className="w-14 h-24 bg-sky-900 rounded-t-sm" />
                <div className="w-10 h-32 bg-sky-800 rounded-t-sm" />
                <div className="w-20 h-20 bg-sky-900 rounded-t-sm" />
                <div className="w-16 h-28 bg-sky-800 rounded-t-sm" />
                <div className="w-16 h-16 bg-sky-900 rounded-t-sm" />
             </div>
             {/* Window Panes */}
             <div className="absolute top-0 left-1/2 w-1.5 h-full bg-white -translate-x-1/2 shadow-sm" />
             <div className="absolute top-1/2 left-0 w-full h-1.5 bg-white -translate-y-1/2 shadow-sm" />
          </div>

          {/* Hanging Cute Cafe Lamps */}
          <div className="absolute top-0 left-[18%] flex flex-col items-center">
            <div className="w-[3px] h-20 bg-[#6A472E] shadow-sm" />
            <div className="w-12 h-6 bg-[#D2A679] rounded-t-full relative shadow-md border-b-4 border-[#B88B60]">
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-1.5 bg-amber-100 rounded-full shadow-[0_0_15px_#FBBF24]" />
            </div>
          </div>
          <div className="absolute top-0 right-[18%] flex flex-col items-center">
            <div className="w-[3px] h-20 bg-[#6A472E] shadow-sm" />
            <div className="w-12 h-6 bg-[#D2A679] rounded-t-full relative shadow-md border-b-4 border-[#B88B60]">
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-1.5 bg-amber-100 rounded-full shadow-[0_0_15px_#FBBF24]" />
            </div>
          </div>

          {/* Warm Sunbeams */}
          <motion.div 
            animate={{ opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 w-[140%] h-[160%] bg-gradient-to-tr from-pink-200/20 via-transparent to-amber-100/10 transform -rotate-12 pointer-events-none"
          />

        </div>

        {/* Section Header */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center mb-14 mt-8">
          <h3 className="text-xl md:text-2xl font-black text-[#4E2A0E] flex items-center gap-2 bg-white/95 px-5 py-2.5 rounded-2xl backdrop-blur-md shadow-sm border border-pink-100">
            <Coffee size={24} className="text-[#8B5A2B]" /> Technical Skills Cafe
          </h3>
          <p className="text-xs font-bold text-[#8B5A2B] mt-2.5 bg-white/95 px-4 py-1.5 rounded-xl backdrop-blur-md shadow-sm border border-pink-100">
            4 fresh brews coming right up!
          </p>
        </div>
        
        {/* Coffee Cups & Shelf Area */}
        <div className="relative z-10 pt-2 pb-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 relative z-20 px-4 md:px-8">
            {skillCategories.map((category) => (
              <div key={category.id} className="flex flex-col items-center justify-end h-full relative group">
                
                {/* Outward Flowing Steam (Skills in Inverted Triangle) */}
                <div className="relative flex flex-col items-center justify-end z-30 min-h-[190px] w-full mb-2">
                  
                  {/* Steam Waves SVG Behind Skills */}
                  <div className="absolute bottom-0 left-0 w-full h-full flex justify-around items-end px-2 z-0 pointer-events-none opacity-40">
                    {[0, 1, 2].map((i) => (
                      <motion.svg 
                        key={i} 
                        width="24" 
                        height="110" 
                        viewBox="0 0 24 110" 
                        className="text-white drop-shadow-sm"
                        animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }}
                      >
                        <path d="M12 110 Q 24 82 12 55 T 12 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
                      </motion.svg>
                    ))}
                  </div>

                  {/* Skills arranged in tiered rows (wider at top, narrower at bottom) */}
                  <div className="flex flex-col items-center gap-2 relative z-10 w-full">
                    {category.skillTiers.map((tier, rowIdx) => (
                      <div key={rowIdx} className="flex justify-center flex-wrap gap-1.5 w-full">
                        {tier.map((skill, i) => (
                          <motion.span
                            key={skill}
                            animate={{ y: [0, -4, 0] }}
                            transition={{ 
                              duration: 3.2, 
                              repeat: Infinity, 
                              delay: (rowIdx * 0.3) + (i * 0.15), 
                              ease: "easeInOut" 
                            }}
                            className="px-2 py-0.5 text-[9px] sm:text-[10px] font-bold rounded-lg bg-[#FAF4ED] text-[#4E2A0E] border border-[#E8D9CD] shadow-xs hover:border-[#8B5A2B] transition whitespace-nowrap"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Big White Ceramic Mug with Brown Coffee & Saucer */}
                <div className="relative z-20 drop-shadow-xl flex flex-col items-center">
                  
                  {/* Large White Mug Handle */}
                  <div className="absolute top-4 -right-5 w-10 h-16 rounded-r-full border-[6px] border-l-0 border-white shadow-sm z-0" />
                  
                  {/* Cup Rim & Steaming Brown Coffee Liquid */}
                  <div className="w-32 h-10 bg-[#3A1F0C] rounded-[50%] border-[5px] border-white z-20 flex items-center justify-center shadow-inner overflow-hidden relative">
                    <div className="w-24 h-6 bg-gradient-to-r from-[#4E2B15] via-[#754421] to-[#3A1F0C] rounded-full flex items-center justify-center relative">
                      <div className="absolute top-1 left-2 w-8 h-1 bg-amber-200/40 rounded-full rotate-[-6deg]" />
                    </div>
                  </div>

                  {/* Big White Porcelain Mug Body */}
                  <div className="relative w-32 h-24 -mt-5 rounded-b-[2.5rem] bg-gradient-to-b from-white to-[#F5EBE1] border-[5px] border-t-0 border-[#F5EAE0] z-10 flex flex-col items-center justify-end pb-3 shadow-[inset_0_-10px_20px_rgba(0,0,0,0.03)]">
                    <span className={`px-2 py-0.5 text-[9px] font-black rounded-md shadow-xs uppercase tracking-wider text-center border ${category.badgeColor}`}>
                      {category.title}
                    </span>
                  </div>

                  {/* Ceramic Saucer under cup */}
                  <div className="w-36 h-6 bg-white rounded-[50%] border-b-4 border-[#D8C6B2] -mt-4 shadow-md z-0" />
                </div>

                {/* Individual Floating Wooden Shelf underneath the cup */}
                <div className="relative mt-2 flex flex-col items-center z-10">
                   {/* Top surface of the shelf */}
                   <div className="w-44 h-3 bg-[#D2A679] rounded-t-sm shadow-inner border-b border-[#A06C3E]" />
                   {/* Front edge of the shelf */}
                   <div className="w-44 h-4 bg-[#8B5A2B] rounded-b-md shadow-[0_15px_15px_rgba(0,0,0,0.1)] flex justify-between px-4 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5A381E] opacity-50" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5A381E] opacity-50" />
                   </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. PROJECTS (PLACARDS)
// ==========================================
function ProjectsSection({ onSelectProject }: { onSelectProject: (id: "lensai" | "tickertalk") => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      
      {/* LENS AI PLACARD */}
      <div className="bg-white/85 backdrop-blur-md rounded-2xl p-5 border border-sky-100 shadow-xs flex flex-col justify-between group hover:shadow-md transition">
        <div>
          <div className="w-full h-40 mb-5 rounded-xl overflow-hidden border border-slate-100 relative bg-[#BCE3F0]/30 flex items-center justify-center p-2">
            <img 
              src="/lensai-upload.png" 
              alt="Creative Lens AI UI" 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg" 
            />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-500 mb-1.5 block">Multimodal Computer Vision</span>
          <h3 className="text-xl font-black text-slate-800 mb-2">Creative Lens AI</h3>
          <p className="text-slate-600 text-xs leading-relaxed mb-5">
            Engineered a real-time multimodal AI assistant utilizing Gemini 2.5 Flash to eliminate the creative friction of photography through context-aware posing tips, AR lens recommendations, and captions.
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {["Python", "Streamlit", "Gemini API", "Computer Vision"].map((tech) => (
              <span key={tech} className="px-2 py-0.5 bg-white shadow-xs text-slate-600 text-[10px] font-bold rounded border border-slate-100">{tech}</span>
            ))}
          </div>
          <button 
            onClick={() => onSelectProject("lensai")}
            className="w-full py-2.5 bg-sky-50 hover:bg-sky-100 text-sky-600 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 border border-sky-100 cursor-pointer"
          >
            Read More/Try it Out! <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* TICKER TALK PLACARD */}
      <div className="bg-white/85 backdrop-blur-md rounded-2xl p-5 border border-[#FBBF24]/30 shadow-xs flex flex-col justify-between group hover:shadow-md transition">
        <div>
          <div className="w-full h-40 mb-5 rounded-xl overflow-hidden border border-slate-100 relative bg-slate-900 flex items-center justify-center p-2">
            <img 
              src="/tickertalk-input.png" 
              alt="Ticker Talk AI UI" 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg" 
            />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 mb-1.5 block">Predictive Time-Series</span>
          <h3 className="text-xl font-black text-slate-800 mb-2">Ticker Talk AI</h3>
          <p className="text-slate-600 text-xs leading-relaxed mb-5">
            A high-speed dashboard combining live pricing streams, analyst targets, and NLP news sentiment with a custom Linear Regression model for next-day price forecasting and volatility safety zones.
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {["Python", "Scikit-Learn", "Matplotlib", "Finnhub API", "Pandas"].map((tech) => (
              <span key={tech} className="px-2 py-0.5 bg-white shadow-xs text-slate-600 text-[10px] font-bold rounded border border-slate-100">{tech}</span>
            ))}
          </div>
          <button 
            onClick={() => onSelectProject("tickertalk")}
            className="w-full py-2.5 bg-[#FBBF24]/15 hover:bg-[#FBBF24]/25 text-[#D97706] rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 border border-[#FBBF24]/30 cursor-pointer"
          >
            Read More/Try it Out! <ArrowRight size={14} />
          </button>
        </div>
      </div>

    </div>
  );
}

// ==========================================
// PROJECT DETAIL VIEW
// ==========================================
function ProjectDetail({ projectId, onBack }: { projectId: "lensai" | "tickertalk", onBack: () => void }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (projectId === "lensai") {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 mt-2">
        <button onClick={onBack} className="flex items-center gap-1.5 text-slate-500 hover:text-sky-500 transition text-xs font-bold cursor-pointer">
          <ArrowLeft size={14} /> Back to Portfolio
        </button>

        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-sky-100 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-slate-800 mb-1.5">Creative Lens AI</h2>
              <p className="text-slate-500 text-sm font-medium">Real-Time Contextual Photography &amp; Content Creation Assistant</p>
            </div>
            <a href="https://creativelensai.streamlit.app/" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5 w-fit shadow-xs">
              Try It Out <ExternalLink size={14} />
            </a>
          </div>

          <p className="text-slate-600 leading-relaxed mb-8 text-sm">
            Engineered a real-time multimodal AI assistant to eliminate the creative friction of photography and content creation. By integrating Gemini 2.5 Flash with a Python/Streamlit architecture, the app performs instant visual analysis to provide context-aware posing tips, AR lens recommendations, and trendy captions.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">1. The Interface</h3>
              <img src="/lensai-upload.png" alt="Upload Interface" className="w-full h-auto rounded-xl border border-slate-200 shadow-xs mb-2" />
              <p className="text-xs text-slate-500 text-center">Built with Streamlit and customized via CSS injection to create a branded UI supporting camera inputs and file uploads.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">2. Processing &amp; Validation</h3>
              <img src="/lensai-photo.png" alt="Photo Preview" className="w-full h-auto rounded-xl border border-slate-200 shadow-xs mb-2" />
              <p className="text-xs text-slate-500 text-center">Implemented robust error handling with exponential backoff to manage API 429 quotas seamlessly during image ingestion.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">3. Multimodal Insights</h3>
              <img src="/lensai-suggestions.png" alt="Creative Suggestions" className="w-full h-auto rounded-xl border border-slate-200 shadow-xs mb-2" />
              <p className="text-xs text-slate-500 text-center">Gemini 2.5 Flash instantly generates contextual posing tips, matching AR lenses, and aesthetic captions based strictly on visual reasoning.</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 mt-2">
      <button onClick={onBack} className="flex items-center gap-1.5 text-slate-500 hover:text-amber-500 transition text-xs font-bold cursor-pointer">
        <ArrowLeft size={14} /> Back to Portfolio
      </button>

      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-[#FBBF24]/30 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-800 mb-1.5">Ticker Talk AI</h2>
            <p className="text-slate-500 text-sm font-medium">Predictive Stock Intelligence &amp; Analysis</p>
          </div>
          <a href="https://tickertalkai.streamlit.app/" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-[#D97706] hover:bg-[#B45309] text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5 w-fit shadow-xs">
            Try It Out <ExternalLink size={14} />
          </a>
        </div>

        <p className="text-slate-600 leading-relaxed mb-8 text-sm">
          I built Ticker Talk AI to eliminate jumping between multiple tabs for stock research. It pulls together real-time prices, analyst targets, and sentiment ratings into one dashboard, processing the data through a custom Linear Regression model for immediate next-day price predictions. To ensure high responsiveness and avoid throttling, I engineered a thread-safe caching layer.
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-3">1. Data Ingestion &amp; Caching</h3>
            <img src="/tickertalk-input.png" alt="Ticker Talk Search Input" className="w-full h-auto rounded-xl border border-slate-200 shadow-xs mb-2" />
            <p className="text-xs text-slate-500 text-center">Users query symbols while a background RLock caching system prevents duplicate calls to Finnhub and financial streams.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-3">2. The Verdict Engine</h3>
            <img src="/tickertalk-metrics.png" alt="Ticker Talk Metrics" className="w-full h-auto rounded-xl border border-slate-200 shadow-xs mb-2" />
            <p className="text-xs text-slate-500 text-center">A custom scoring algorithm weighs NLP news sentiment, AI predictions, and analyst ratings to generate actionable insights.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-3">3. Predictive Charting</h3>
            <img src="/tickertalk-chart.png" alt="Ticker Talk AI Chart" className="w-full h-auto rounded-xl border border-slate-200 shadow-xs mb-2" />
            <p className="text-xs text-slate-500 text-center">Interactive Matplotlib visuals overlay Linear Regression trendlines and 1-standard-deviation volatility safety zones over actual price data.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ==========================================
// 4. EXPERIENCE
// ==========================================
function ExperienceSection() {
  const dateBadgeStyle = "text-[11px] font-semibold text-pink-600 bg-pink-50 shadow-xs px-2.5 py-0.5 rounded-full border border-pink-200 whitespace-nowrap mt-1 md:mt-0";

  return (
    <div className="space-y-5">
      
      {/* NASA JPL ML Intern */}
      <div className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-pink-100/80 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-base font-bold text-slate-800">NASA Jet Propulsion Laboratory (JPL)</h3>
            <p className="text-xs font-semibold text-pink-500 mt-1">Machine Learning Intern</p>
          </div>
          <span className={dateBadgeStyle}>Jun. 2026 – Aug. 2026</span>
        </div>
        <ul className="list-disc list-inside text-xs text-slate-600 space-y-1.5 leading-relaxed">
          <li>Engineered Python automation scripts and ML models querying 100,000+ MongoDB mission records, enabling a 4+ hour reduction in schedule deconfliction per phase.</li>
          <li>Built an LLM-driven NLP pipeline capable of cutting manual scheduling overhead by &gt;20%, documenting data flow and workflows through detailed system architecture diagrams.</li>
          <li>Achieved ~74% accuracy by validating predictive models and pipeline scripts against past DSN mission logs.</li>
        </ul>
      </div>

      {/* NASA JPL Student Research Intern */}
      <div className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-pink-100/80 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-base font-bold text-slate-800">NASA Jet Propulsion Laboratory (JPL)</h3>
            <p className="text-xs font-semibold text-sky-600 mt-1">Student Research Intern</p>
          </div>
          <span className={dateBadgeStyle}>Dec. 2024 – Jun. 2025</span>
        </div>
        <ul className="list-disc list-inside text-xs text-slate-600 space-y-1.5 leading-relaxed">
          <li>Benchmarked next-gen multi-core and DSP/GPU architectures to optimize onboard space computing.</li>
          <li>Engineered 3 virtual test environments (including NVIDIA Omniverse) with GNNs and AI to simulate missions.</li>
          <li>Developed cross-platform registration and authentication systems utilizing spatial web properties, executing system latency tests to identify and resolve network bottlenecks.</li>
        </ul>
      </div>

      {/* Supplemental Instructor & Tutor */}
      <div className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-pink-100/80 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-base font-bold text-slate-800">Santa Monica College</h3>
            <p className="text-xs font-semibold text-violet-600 mt-1">Supplemental Instructor (DSA in C++) &amp; CS Tutor</p>
          </div>
          <span className={dateBadgeStyle}>Oct. 2025 – Jun. 2026</span>
        </div>
        <ul className="list-disc list-inside text-xs text-slate-600 space-y-1.5 leading-relaxed">
          <li>Led weekly debugging sessions (C++, C, C#, Java) for 150+ students for topics like Trees, Heaps, and Stacks.</li>
          <li>Diagnosed pointer errors, coaching students through C/C++ memory management and unit test debugging.</li>
          <li>Streamlined development workflows using GitHub Actions CI/CD pipelines and standard VS Code environments.</li>
        </ul>
      </div>

      {/* Handshake AI Trainer */}
      <div className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-pink-100/80 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-base font-bold text-slate-800">Handshake</h3>
            <p className="text-xs font-semibold text-emerald-600 mt-1">AI Trainer</p>
          </div>
          <span className={dateBadgeStyle}>Feb. 2026 – May 2026</span>
        </div>
        <ul className="list-disc list-inside text-xs text-slate-600 space-y-1.5 leading-relaxed">
          <li>Enhanced Multimodal LLM response accuracy and alignment across 3 data modalities (video, image, and text) by executing RLHF workflows and evaluating complex technical outputs for frontier AI labs.</li>
        </ul>
      </div>

      {/* Leadership & Involvement */}
      <div className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-pink-100/80 shadow-xs">
        <h3 className="text-base font-bold text-slate-800 mb-5 flex items-center gap-2">
          <Users size={16} className="text-[#8B5A2B]" /> Leadership &amp; Community Involvement
        </h3>
        <div className="space-y-5">
          <div>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-2">
              <div>
                <span className="font-bold text-slate-800 text-xs block">Future in Tech Club</span>
                <span className="text-xs font-semibold text-amber-600 mt-1 block">President &amp; Founder</span>
              </div>
              <span className={dateBadgeStyle}>Jun. 2025 – Jun. 2026</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Grew club to 30+ members, hosting speaker events and career workshops in SWE, AI, and Quantum Computing.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-2">
              <div>
                <span className="font-bold text-slate-800 text-xs block">Girls Who Code Club College Loop</span>
                <span className="text-xs font-semibold text-rose-500 mt-1 block">Secretary &amp; Event Coordinator</span>
              </div>
              <span className={dateBadgeStyle}>Sept. 2024 – Jun. 2026</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Increased participation by 10% by managing external relations for guest speakers and leading Python workshops.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}