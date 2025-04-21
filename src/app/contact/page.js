'use client';

import {
  ArrowLeft,
  Github,
  Mail,
  Info,
  MessageSquare,
  ExternalLink,
  Code,
} from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="relative bg-dark-lighter overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(186, 24, 27, 0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-accent hover:text-accent-lighter transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back to Home
            </Link>
            <div className="flex items-center">
              <Code className="h-8 w-8 text-accent mr-3" />
              <h1 className="text-3xl font-bold text-white">Contact</h1>
            </div>
            <div className="w-24"></div> {/* Spacer */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Contact Info Section */}
          <div className="bg-dark-lighter rounded-lg p-8 border border-accent/10 mb-12">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-6 w-6 text-accent mr-2" />
              <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
            </div>
            <p className="text-gray-300 mb-8">
              Have suggestions, spotted a bug, or just want to say hi? I’d love
              to hear from you. Choose your preferred method of contact below.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a
                href="https://github.com/habitual69/free-apis/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-dark border border-accent/20 rounded-lg text-white hover:bg-dark-lighter transition-colors"
              >
                <Github className="h-5 w-5 mr-2 text-accent" />
                <span>Open an Issue on GitHub</span>
                <ExternalLink className="h-4 w-4 ml-2 text-gray-400" />
              </a>
              <a
                href="mailto:admin@vpms.xyz"
                className="flex items-center justify-center px-6 py-3 bg-dark border border-accent/20 rounded-lg text-white hover:bg-dark-lighter transition-colors"
              >
                <Mail className="h-5 w-5 mr-2 text-accent" />
                <span>Send an Email</span>
              </a>
            </div>
          </div>

          {/* Note */}
          <div className="bg-dark-lighter rounded-lg p-6 border border-accent/10">
            <div className="flex items-center mb-4">
              <Info className="h-6 w-6 text-accent mr-2" />
              <h3 className="text-lg font-semibold text-white">Need help?</h3>
            </div>
            <p className="text-gray-300">
              Whether you’re submitting feedback, requesting a feature, or
              simply saying thanks — your message is always appreciated.
            </p>
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
                <span className="text-white font-semibold">
                  Free APIs Catalog
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-1">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/habitual69"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
