import React from 'react';
import { Container } from "@/components/container"; 
import { Bot, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-green-50/30 border-t border-green-100 pt-16 pb-8 font-sans">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Mission */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl text-slate-900 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <span>NextRole<span className="text-green-600">.ai</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Empowering developers to master their interviews with the world's most advanced AI coaching platform.
            </p>
            
            {/* Social Icons (Inlined Styles) */}
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-700 hover:bg-green-600 hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-700 hover:bg-green-600 hover:text-white transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-700 hover:bg-green-600 hover:text-white transition-all duration-300">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-green-600 transition-colors duration-200 block">Features</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors duration-200 block">Pricing</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors duration-200 block">Gemini Integration</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors duration-200 block">Success Stories</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-green-600 transition-colors duration-200 block">Interview Guide</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors duration-200 block">Resume Builder</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors duration-200 block">Developer Blog</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors duration-200 block">Community</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Stay Updated</h4>
            <p className="text-slate-500 text-sm mb-4">
              Get the latest interview tips and AI updates directly to your inbox.
            </p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 rounded-lg border border-green-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 text-sm"
              />
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                Subscribe <Mail className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-green-200/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} NextRole AI Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-green-600 transition-colors duration-200 block">Privacy Policy</a>
            <a href="#" className="hover:text-green-600 transition-colors duration-200 block">Terms of Service</a>
            <a href="#" className="hover:text-green-600 transition-colors duration-200 block">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;