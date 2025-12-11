import React from 'react';
import { Container } from "@/components/container"; 
import { Sparkles, Brain, Zap, CheckCircle, ArrowRight, Play, Code2 } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex-col w-full min-h-screen bg-green-50/30 font-sans text-slate-900 pb-24">
      
      <Container>
        {/* --- HERO SECTION --- */}
        <div className="my-12 md:my-20 flex flex-col items-center md:items-start gap-6">
          
          {/* Badge added for AI Context */}
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-100/50 px-3 py-1 text-sm font-medium text-green-700">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Powered by Google Gemini 1.5 Pro</span>
          </div>

          <h2 className="text-4xl text-center font-bold tracking-tight md:text-left md:text-7xl leading-[1.1]">
            <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent font-extrabold">
              AI SuperPower
            </span>
            <span className="block text-slate-900 mt-2 text-2xl md:text-5xl font-extrabold">
              - A Better way to
            </span>
            <span className="block text-slate-500 text-2xl md:text-5xl mt-3 font-semibold">
              improve your interview chances and skills
            </span>
          </h2>
          
          <p className="mt-4 max-w-2xl text-center text-lg text-slate-600 md:text-left leading-relaxed">
            Boost your interview skills and increase your success rate with 
            AI-driven insights. Discover a smarter way to prepare, practice,
            and stand out using our Gemini-powered engine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full md:w-auto">
            <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-green-600/20 transition-all hover:-translate-y-1">
              Start Preparing <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white hover:bg-green-50 text-slate-700 border border-green-200 px-8 py-3.5 rounded-full font-semibold transition-all">
               <Play className="w-4 h-4 fill-green-600 text-green-600" /> Watch Demo
            </button>
          </div>
        </div>

        {/* --- STATS SECTION --- */}
        <div className="flex flex-col md:flex-row w-full items-center justify-center md:justify-start gap-8 md:gap-24 border-y border-green-200 py-10 md:px-4 bg-white/60 backdrop-blur-sm">
          <div className="text-center md:text-left">
            <p className="text-4xl font-bold text-slate-900">
              250k+
            </p>
            <span className="text-sm font-medium text-emerald-600 uppercase tracking-wider">Offers Received</span>
          </div>
          {/* Divider */}
          <div className="hidden h-12 w-px bg-green-200 md:block"></div>
          <div className="text-center md:text-left">
            <p className="text-4xl font-bold text-slate-900">
              1.2M+
            </p>
            <span className="text-sm font-medium text-emerald-600 uppercase tracking-wider">Interviews Aced</span>
          </div>
        </div>

        {/* --- IMAGE SECTION --- */}
        <div className="relative w-full mt-16 rounded-2xl bg-slate-900 overflow-hidden h-[450px] md:h-[600px] shadow-2xl border border-green-100 group">
          <img 
            src="assets/img/hero.jpg"
            alt="AI Interview Dashboard"
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />

          {/* Floating Badge: Top Left */}
          <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-white/20 flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-sm font-semibold text-slate-800">Interview Copilot &copy; <span className="text-xs text-green-600 ml-1">Live</span></span>
          </div>

          {/* Floating Card: Bottom Right (Developer Card) */}
          <div className="hidden md:block absolute w-80 bottom-8 right-8 p-5 rounded-xl bg-white/95 backdrop-blur-xl shadow-2xl border border-white/40 transition-transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-slate-800 font-bold flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-green-600"/> Developer
                </h2>
                <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">GEMINI API</span>
            </div>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              Your explanation of the React lifecycle was accurate. To improve, mention <strong>useEffect</strong> for functional components to show modern proficiency.
            </p>

            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-emerald-950 hover:bg-emerald-900 text-white py-2 rounded-lg text-xs font-bold transition-colors">
              Generate Feedback <Sparkles className="w-3 h-3 text-green-400"/>
            </button>
          </div>
        </div>

        {/* --- API Features Section --- */}
        <div className="mt-24 mb-16">
            <div className="text-center mb-16 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Powered by Gemini AI</h2>
                <p className="mt-4 text-lg text-slate-600">We use the latest Google Gemini API to analyze your speech, code, and body language in real-time.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white p-8 rounded-2xl border border-green-100 shadow-sm hover:shadow-xl hover:shadow-green-100/40 hover:-translate-y-1 transition-all">
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                        <Brain className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Contextual Understanding</h3>
                    <p className="text-slate-600">Gemini's massive context window remembers your resume and previous answers to ask follow-up questions.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 rounded-2xl border border-green-100 shadow-sm hover:shadow-xl hover:shadow-green-100/40 hover:-translate-y-1 transition-all">
                    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-6">
                        <Zap className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Real-time Latency</h3>
                    <p className="text-slate-600">Experience fluid conversations with ultra-low latency API responses, just like a real interview.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-8 rounded-2xl border border-green-100 shadow-sm hover:shadow-xl hover:shadow-green-100/40 hover:-translate-y-1 transition-all">
                    <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-6">
                        <CheckCircle className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Code Optimization</h3>
                    <p className="text-slate-600">Paste your code solution and let the API suggest Big-O improvements and refactoring tips.</p>
                </div>
            </div>
        </div>

      </Container>
    </div>
  );
};

export default HomePage;