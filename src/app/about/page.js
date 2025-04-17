'use client';

import { 
  ArrowLeft, Github, Mail, Search, FolderOpen, Zap, Shield, Link as LinkIcon, 
  BookOpen, Code, Database, Globe, ChevronRight, Star, Heart, Rocket, 
  CheckCircle, AlertCircle, Info, MessageSquare, ExternalLink, Terminal, Lock
} from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="relative bg-dark-lighter overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(186, 24, 27, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-accent hover:text-accent-lighter transition-colors">
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back to Home
            </Link>
            <div className="flex items-center">
              <Code className="h-8 w-8 text-accent mr-3" />
              <h1 className="text-3xl font-bold text-white">About Free APIs</h1>
            </div>
            <div className="w-24"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="bg-dark-lighter rounded-lg p-8 border border-accent/10 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <Rocket className="h-32 w-32 text-accent" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Info className="h-6 w-6 text-accent mr-2" />
                <h2 className="text-2xl font-bold text-white">🔍 Quick Overview</h2>
              </div>
              <p className="text-gray-300 mb-8">
                Free APIs is a lightning-fast directory built to help developers explore and discover APIs effortlessly. The platform offers two powerful browsing modes:
              </p>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-dark-lighter rounded-lg p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Search className="h-6 w-6 text-accent mr-2" />
                <h3 className="text-xl font-semibold text-white">🚀 Explore All APIs</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Perfect for sparking new project ideas or finding the right API as a data source. Browse the full collection while instantly checking key details like authentication requirements, CORS support, and HTTPS availability.
              </p>
              <div className="flex items-center text-sm text-accent">
                <CheckCircle className="h-4 w-4 mr-1" />
                <span>Instant search results</span>
              </div>
            </div>
            
            <div className="bg-dark-lighter rounded-lg p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <FolderOpen className="h-6 w-6 text-accent mr-2" />
                <h3 className="text-xl font-semibold text-white">🗂️ Browse by Category</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Refine your search and explore APIs tailored to specific categories. Ideal when you're looking for more focused results or diving deep into a particular domain.
              </p>
              <div className="flex items-center text-sm text-accent">
                <CheckCircle className="h-4 w-4 mr-1" />
                <span>Organized by domain</span>
              </div>
            </div>
          </div>
          
          {/* API Cards Section */}
          <div className="bg-dark-lighter rounded-lg p-6 border border-accent/10 mb-12">
            <div className="flex items-center mb-6">
              <LinkIcon className="h-6 w-6 text-accent mr-2" />
              <h3 className="text-xl font-semibold text-white">API Cards</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Each API is displayed as a clickable card — one tap takes you straight to the official documentation or website.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-dark rounded-lg p-4 border border-accent/10 flex items-center">
                <Shield className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">HTTPS Support</span>
              </div>
              <div className="bg-dark rounded-lg p-4 border border-accent/10 flex items-center">
                <Lock className="h-5 w-5 text-amber-400 mr-2" />
                <span className="text-gray-300">Auth Info</span>
              </div>
              <div className="bg-dark rounded-lg p-4 border border-accent/10 flex items-center">
                <Globe className="h-5 w-5 text-purple-400 mr-2" />
                <span className="text-gray-300">CORS Status</span>
              </div>
            </div>
          </div>
          
          {/* Mission Section */}
          <div className="bg-dark-lighter rounded-lg p-8 border border-accent/10 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <Heart className="h-32 w-32 text-accent" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-accent mr-2" />
                <h3 className="text-xl font-semibold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 pl-8">
                This project was built with one goal:<br />
                To create a fast, accessible, and beautifully simple resource to find the right API when you need it. Whether you're looking for inspiration, hunting for a unique feature, or just exploring — this is your go-to tool.
              </p>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="bg-dark-lighter rounded-lg p-8 border border-accent/10 mb-12">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-6 w-6 text-accent mr-2" />
              <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a 
                href="https://github.com/yourusername/free-apis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-dark border border-accent/20 rounded-lg text-white hover:bg-dark-lighter transition-colors"
              >
                <Github className="h-5 w-5 mr-2 text-accent" />
                <span>💬 Open an issue on GitHub</span>
                <ExternalLink className="h-4 w-4 ml-2 text-gray-400 hover:text-accent transition-colors" />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="flex items-center justify-center px-6 py-3 bg-dark border border-accent/20 rounded-lg text-white hover:bg-dark-lighter transition-colors"
              >
                <Mail className="h-5 w-5 mr-2 text-accent" />
                <span>📬 Reach out anytime</span>
              </a>
            </div>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-lighter rounded-lg p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Search className="h-6 w-6 text-accent mr-2" />
                <h3 className="text-lg font-semibold text-white">Quick Search</h3>
              </div>
              <p className="text-gray-300">
                Find the API you need with our lightning-fast search functionality.
              </p>
            </div>
            
            <div className="bg-dark-lighter rounded-lg p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-accent mr-2" />
                <h3 className="text-lg font-semibold text-white">Security Info</h3>
              </div>
              <p className="text-gray-300">
                Instantly see authentication requirements and HTTPS support.
              </p>
            </div>
            
            <div className="bg-dark-lighter rounded-lg p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <LinkIcon className="h-6 w-6 text-accent mr-2" />
                <h3 className="text-lg font-semibold text-white">Direct Links</h3>
              </div>
              <p className="text-gray-300">
                One click takes you straight to the API documentation.
              </p>
            </div>
          </div>
          
          {/* Tech Stack */}
          <div className="mt-12 bg-dark-lighter rounded-lg p-6 border border-accent/10">
            <div className="flex items-center mb-4">
              <Terminal className="h-6 w-6 text-accent mr-2" />
              <h3 className="text-lg font-semibold text-white">Built With</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-dark rounded-full text-sm text-gray-300 border border-accent/10">Next.js</span>
              <span className="px-3 py-1 bg-dark rounded-full text-sm text-gray-300 border border-accent/10">React</span>
              <span className="px-3 py-1 bg-dark rounded-full text-sm text-gray-300 border border-accent/10">Tailwind CSS</span>
              <span className="px-3 py-1 bg-dark rounded-full text-sm text-gray-300 border border-accent/10">Lucide Icons</span>
              <span className="px-3 py-1 bg-dark rounded-full text-sm text-gray-300 border border-accent/10">JavaScript</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark-lighter border-t border-accent/20">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="flex items-center justify-center md:justify-start">
                <Code className="h-5 w-5 text-accent mr-2" />
                <span className="text-white font-semibold">Free APIs Catalog</span>
              </div>
              <p className="text-gray-400 text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 