'use client';

import { useState, useEffect, useMemo } from 'react';
import { Search, Code, Shield, Link as LinkIcon, Tag, ArrowLeft, FolderOpen, X, 
  Github, Twitter, Linkedin, BookOpen, Zap, Database, Globe, ChevronRight, 
  ExternalLink, Lock, Unlock, AlertCircle, CheckCircle, XCircle, Filter, 
  SlidersHorizontal, Star, Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [apis, setApis] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [featuredApis, setFeaturedApis] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    httpsOnly: false,
    noAuthOnly: false,
    corsOnly: false,
    sortBy: 'name' // 'name', 'popular', 'recent'
  });

  useEffect(() => {
    fetch('/api/apis')
      .then(res => res.json())
      .then(data => {
        setApis(data.entries);
        const uniqueCategories = [...new Set(data.entries.map(api => api.Category))];
        setCategories(uniqueCategories);
        
        // Select some featured APIs (those with HTTPS and no auth)
        const featured = data.entries
          .filter(api => api.HTTPS && !api.Auth)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        setFeaturedApis(featured);
        
        setIsLoading(false);
      });
  }, []);

  // Enhanced search functionality with filters
  const filteredApis = useMemo(() => {
    return apis.filter(api => {
      // Search term matching (improved to search in multiple fields)
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = searchTerm === '' || 
        api.API.toLowerCase().includes(searchLower) ||
        api.Description.toLowerCase().includes(searchLower) ||
        api.Category.toLowerCase().includes(searchLower);
      
      // Category matching - only filter by category if we're in category view
      const matchesCategory = !selectedCategory || api.Category === selectedCategory;
      
      // Filter matching
      const matchesHttpsFilter = !filters.httpsOnly || api.HTTPS;
      const matchesNoAuthFilter = !filters.noAuthOnly || !api.Auth;
      const matchesCorsFilter = !filters.corsOnly || api.Cors === 'yes';
      
      return matchesSearch && matchesCategory && 
             matchesHttpsFilter && matchesNoAuthFilter && matchesCorsFilter;
    }).sort((a, b) => {
      // Sorting logic
      if (filters.sortBy === 'name') {
        return a.API.localeCompare(b.API);
      } else if (filters.sortBy === 'popular') {
        // For demo purposes, we'll use HTTPS as a proxy for popularity
        return b.HTTPS - a.HTTPS;
      } else if (filters.sortBy === 'recent') {
        // For demo purposes, we'll use a random sort
        return 0.5 - Math.random();
      }
      return 0;
    });
  }, [apis, searchTerm, selectedCategory, filters]);

  // Calculate category counts only once
  const categoryApiCount = useMemo(() => {
    const countMap = {};
    apis.forEach(api => {
      if (api.Category) {
        countMap[api.Category] = (countMap[api.Category] || 0) + 1;
      }
    });
    return countMap;
  }, [apis]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchTerm('');
    setFilters({
      httpsOnly: false,
      noAuthOnly: false,
      corsOnly: false,
      sortBy: 'name'
    });
  };

  const clearCategory = () => {
    setSelectedCategory(null);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const clearFilters = () => {
    setFilters({
      httpsOnly: false,
      noAuthOnly: false,
      corsOnly: false,
      sortBy: 'name'
    });
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Function to render API card with enhanced details
  const renderApiCard = (api, index, isFeatured = false) => {
    // Determine auth status icon and text
    const authStatus = api.Auth ? 
      { icon: <Lock className="h-4 w-4" />, text: api.Auth, color: "text-amber-400", bgColor: "bg-amber-900/30" } : 
      { icon: <Unlock className="h-4 w-4" />, text: "No Auth", color: "text-green-400", bgColor: "bg-green-900/30" };
    
    // Determine HTTPS status
    const httpsStatus = api.HTTPS ? 
      { icon: <CheckCircle className="h-4 w-4" />, text: "HTTPS", color: "text-green-400", bgColor: "bg-green-900/30" } : 
      { icon: <AlertCircle className="h-4 w-4" />, text: "HTTP", color: "text-red-400", bgColor: "bg-red-900/30" };
    
    // Determine CORS status
    const corsStatus = api.Cors === 'yes' ? 
      { icon: <CheckCircle className="h-4 w-4" />, text: "CORS", color: "text-purple-400", bgColor: "bg-purple-900/30" } : 
      api.Cors === 'no' ? 
      { icon: <XCircle className="h-4 w-4" />, text: "No CORS", color: "text-gray-400", bgColor: "bg-gray-800/30" } : 
      { icon: <AlertCircle className="h-4 w-4" />, text: "CORS Unknown", color: "text-gray-400", bgColor: "bg-gray-800/30" };

    return (
      <div 
        key={index} 
        className={`bg-dark-lighter rounded-lg p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300 
          ${isFeatured ? 'hover:shadow-lg hover:shadow-accent/10' : 'hover:bg-dark-lighter/80'}`}
      >
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-white">{api.API}</h3>
          <Tag className="h-5 w-5 text-accent" />
        </div>
        
        <div className="mt-2 text-gray-300">{api.Description}</div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${authStatus.bgColor} ${authStatus.color}`}>
            {authStatus.icon}
            <span className="ml-1">{authStatus.text}</span>
          </span>
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${httpsStatus.bgColor} ${httpsStatus.color}`}>
            {httpsStatus.icon}
            <span className="ml-1">{httpsStatus.text}</span>
          </span>
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${corsStatus.bgColor} ${corsStatus.color}`}>
            {corsStatus.icon}
            <span className="ml-1">{corsStatus.text}</span>
          </span>
        </div>
        
        <div className="mt-4 pt-4 border-t border-accent/10">
          <div className="flex items-center text-sm text-gray-400 mb-2">
            <FolderOpen className="h-4 w-4 mr-1 text-accent" />
            <span>{api.Category}</span>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <a
              href={api.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent hover:text-accent-lighter"
            >
              <LinkIcon className="h-4 w-4 mr-1" />
              Visit API
            </a>
            
            <a
              href={api.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-white"
              title="Open in new tab"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <header className="relative bg-dark-lighter overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(186, 24, 27, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Free APIs</span>
              <span className="block text-accent mt-2 bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/80">Developer Catalog</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300 font-light">
              Discover and integrate with thousands of free APIs for your next project
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="mt-10 max-w-xl mx-auto">
              <div className="relative group">
                <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-hover:text-accent transition-colors" />
                <input
                  type="text"
                  placeholder={selectedCategory ? `Search in ${selectedCategory}...` : "Search all APIs..."}
                  className="w-full pl-12 pr-12 py-4 rounded-full bg-dark/50 backdrop-blur-sm border border-accent/20 text-white focus:outline-none focus:ring-2 focus:ring-accent shadow-lg transition-all duration-300 group-hover:bg-dark/70"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute right-4 top-4 flex items-center space-x-2">
                  {searchTerm && (
                    <button 
                      onClick={clearSearch}
                      className="text-gray-400 hover:text-white transition-colors"
                      title="Clear search"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                  <button 
                    onClick={toggleFilters}
                    className={`text-gray-400 hover:text-accent transition-colors ${showFilters ? 'text-accent' : ''}`}
                    title="Toggle filters"
                  >
                    <SlidersHorizontal className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {/* Search Filters */}
              {showFilters && (
                <div className="mt-4 p-4 bg-dark/50 backdrop-blur-sm rounded-lg border border-accent/20 animate-fade-in">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Filter className="h-4 w-4 text-accent mr-2" />
                      <h3 className="text-sm font-medium text-white">Search Filters</h3>
                    </div>
                    <button 
                      onClick={clearFilters}
                      className="text-xs text-gray-400 hover:text-accent transition-colors"
                    >
                      Clear All
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={filters.httpsOnly}
                        onChange={(e) => setFilters({...filters, httpsOnly: e.target.checked})}
                        className="form-checkbox h-4 w-4 text-accent bg-dark border-accent/30 rounded"
                      />
                      <span className="text-sm text-gray-300">HTTPS Only</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={filters.noAuthOnly}
                        onChange={(e) => setFilters({...filters, noAuthOnly: e.target.checked})}
                        className="form-checkbox h-4 w-4 text-accent bg-dark border-accent/30 rounded"
                      />
                      <span className="text-sm text-gray-300">No Auth Required</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={filters.corsOnly}
                        onChange={(e) => setFilters({...filters, corsOnly: e.target.checked})}
                        className="form-checkbox h-4 w-4 text-accent bg-dark border-accent/30 rounded"
                      />
                      <span className="text-sm text-gray-300">CORS Enabled</span>
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Sort by:</span>
                    <select 
                      value={filters.sortBy}
                      onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                      className="text-sm bg-dark border border-accent/30 rounded px-2 py-1 text-gray-300 focus:outline-none focus:ring-1 focus:ring-accent"
                    >
                      <option value="name">Name</option>
                      <option value="popular">Popular</option>
                      <option value="recent">Recent</option>
                    </select>
                  </div>
                </div>
              )}
              
              {/* Search Results Count */}
              {searchTerm && (
                <div className="mt-2 text-sm text-gray-400 text-center">
                  Found {filteredApis.length} {filteredApis.length === 1 ? 'result' : 'results'}
                </div>
              )}
            </div>
            
            {/* Enhanced Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-dark/30 backdrop-blur-sm rounded-xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-400">Total APIs</h3>
                  <Database className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-3xl font-bold text-white group-hover:text-accent transition-colors">
                  {apis.length.toLocaleString()}
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  Available for integration
                </div>
              </div>
              
              <div className="bg-dark/30 backdrop-blur-sm rounded-xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-400">Categories</h3>
                  <FolderOpen className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-3xl font-bold text-white group-hover:text-accent transition-colors">
                  {categories.length.toLocaleString()}
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  Organized domains
                </div>
              </div>
              
              <div className="bg-dark/30 backdrop-blur-sm rounded-xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-400">HTTPS APIs</h3>
                  <Shield className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-3xl font-bold text-white group-hover:text-accent transition-colors">
                  {apis.filter(api => api.HTTPS).length.toLocaleString()}
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  Secure endpoints
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Featured APIs Section (only on homepage) */}
          {!selectedCategory && !searchTerm && (
            <div className="mb-12 animate-fade-in">
              <div className="flex items-center mb-6">
                <Zap className="h-6 w-6 text-accent mr-2" />
                <h2 className="text-2xl font-bold text-white">Featured APIs</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredApis.map((api, index) => renderApiCard(api, index, true))}
              </div>
            </div>
          )}

          {/* Categories or API Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
            </div>
          ) : selectedCategory ? (
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <FolderOpen className="h-6 w-6 text-accent mr-2" />
                <h2 className="text-2xl font-bold text-white">{selectedCategory}</h2>
                <span className="ml-3 px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                  {categoryApiCount[selectedCategory]} APIs
                </span>
                <button 
                  onClick={clearCategory}
                  className="ml-auto flex items-center text-accent hover:text-accent-lighter transition-colors"
                >
                  <ArrowLeft className="h-5 w-5 mr-1" />
                  Back to Categories
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredApis.map((api, index) => renderApiCard(api, index))}
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Database className="h-6 w-6 text-accent mr-2" />
                  <h2 className="text-2xl font-bold text-white">Browse by Category</h2>
                </div>
                {searchTerm && (
                  <button 
                    onClick={clearSearch}
                    className="text-accent hover:text-accent-lighter"
                  >
                    Clear Search
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map(category => (
                  <div 
                    key={category} 
                    className="group relative bg-dark-lighter rounded-xl p-6 cursor-pointer border border-accent/10 hover:border-accent/30 transition-all duration-300 overflow-hidden"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
                      <div className="absolute inset-0" style={{ 
                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(186, 24, 27, 0.15) 1px, transparent 0)',
                        backgroundSize: '20px 20px'
                      }}></div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                          {category}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <FolderOpen className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                          <ChevronRight className="h-5 w-5 text-accent/50 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="px-3 py-1 bg-accent/10 rounded-full">
                            <span className="text-sm text-accent">
                              {categoryApiCount[category]} APIs
                            </span>
                          </div>
                          <div className="px-3 py-1 bg-dark/50 rounded-full">
                            <span className="text-sm text-gray-400">
                              {Math.round((categoryApiCount[category] / apis.length) * 100)}% of total
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-dark-lighter border-t border-accent/20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(186, 24, 27, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-bold text-white">Free APIs Catalog</h3>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed">
                A comprehensive collection of free APIs for developers. Find the perfect API for your next project.
              </p>
              <div className="mt-8 flex items-center space-x-4">
                <a 
                  href="#" 
                  className="p-3 bg-dark/50 rounded-lg text-gray-400 hover:text-accent hover:bg-accent/10 transition-all duration-300 group"
                >
                  <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-dark/50 rounded-lg text-gray-400 hover:text-accent hover:bg-accent/10 transition-all duration-300 group"
                >
                  <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-dark/50 rounded-lg text-gray-400 hover:text-accent hover:bg-accent/10 transition-all duration-300 group"
                >
                  <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <ChevronRight className="h-5 w-5 text-accent mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-accent transition-colors flex items-center group"
                  >
                    <div className="w-1 h-1 bg-accent/50 rounded-full mr-2 group-hover:bg-accent transition-colors"></div>
                    Home
                  </a>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="text-gray-400 hover:text-accent transition-colors flex items-center group"
                  >
                    <div className="w-1 h-1 bg-accent/50 rounded-full mr-2 group-hover:bg-accent transition-colors"></div>
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-gray-400 hover:text-accent transition-colors flex items-center group"
                  >
                    <div className="w-1 h-1 bg-accent/50 rounded-full mr-2 group-hover:bg-accent transition-colors"></div>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-accent/10 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Free APIs Catalog. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
