"use client";

import React, { useState, useEffect } from 'react';

export default function FounderlingsLanding() {
  const [email, setEmail] = useState('');
  const [why, setWhy] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [count, setCount] = useState(null); // Changed from 347 to null for loading state
  
  const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQYVPJZo8ZJy6fLkPeGpAqU1m-gfCLGUDiOI8rsW1ryvOqpiAUrAed-BzUkuiqkpMbT0q98bPntSMLp/pub?output=csv";

  const fetchCountFromSheet = async () => {
    try {
      const res = await fetch(SHEET_CSV_URL);
      const text = await res.text();

      // Count rows and subtract header row
      const rows = text.trim().split("\n").filter(row => row.trim() !== "");
      const actualCount = rows.length > 0 ? rows.length - 1 : 0;
      setCount(actualCount);
    } catch (err) {
      console.error("Failed to fetch sheet:", err);
      setCount(347); // Fallback to original count if fetch fails
    }
  };

  useEffect(() => {
    fetchCountFromSheet();
  }, []);

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    
    try {
      // Send to Formspree (free: 50 submissions/month)
      const response = await fetch('https://formspree.io/f/mkooorve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          why: why,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error('Submission failed');
      
      setSubmitted(true);
      
      // Refresh count from sheet after successful submit
      fetchCountFromSheet();
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setEmail('');
        setWhy('');
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  // Calculate spots and percentage (use fallback if count is null)
  const spotsRemaining = count !== null ? 1000 - count : 1000 - 347;
  const percentFilled = count !== null ? (count / 1000) * 100 : 34.7;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-[#f5e6d3] p-4 md:p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600;700&family=Inter:wght@400;600;700&family=Playfair+Display:wght@600;700&display=swap');
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }

        @keyframes shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }

        .gear-rotate {
          animation: rotate 20s linear infinite;
        }

        .gear-rotate-reverse {
          animation: rotate 15s linear infinite reverse;
        }

        .pulse-glow {
          animation: pulse 3s ease-in-out infinite;
        }

        .shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.3) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* Decorative Gears */}
      <div className="fixed top-8 right-8 opacity-10 pointer-events-none hidden md:block">
        <div className="gear-rotate w-32 h-32 rounded-full border-8 border-[#4f738e] relative">
          <div className="absolute inset-0 rounded-full border-4 border-[#2c3e50]" style={{ margin: '20%' }}></div>
        </div>
      </div>

      <div className="fixed bottom-12 left-8 opacity-10 pointer-events-none hidden md:block">
        <div className="gear-rotate-reverse w-24 h-24 rounded-full border-6 border-[#b87333] relative">
          <div className="absolute inset-0 rounded-full border-3 border-[#2c3e50]" style={{ margin: '25%' }}></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-[#4f738e] to-[#6b8ca3] rounded-lg shadow-lg">
            <h3 style={{fontFamily: 'Roboto Mono, monospace'}} className="text-white font-bold text-sm uppercase tracking-wider">
              Beginner Investor Hub
            </h3>
          </div>
          
          <h1 style={{fontFamily: 'Playfair Display, serif'}} className="text-5xl md:text-7xl font-bold text-[#4f738e] mb-4">
            Join the First 1,000
            <br />
            <span className="bg-gradient-to-r from-[#b8860b] via-[#daa520] to-[#b8860b] bg-clip-text text-transparent shimmer">
              Founderlings
            </span>
          </h1>
          
          <p style={{fontFamily: 'Inter, sans-serif'}} className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Founding members of the AI platform revolutionizing investing education
          </p>
        </header>

        {/* Progress Counter */}
        <div className="mb-12 bg-white rounded-lg shadow-xl border-2 border-[#4f738e] overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-[#f5e6d3] to-white">
            <div className="flex justify-between items-center mb-3">
              <span style={{fontFamily: 'Roboto Mono, monospace'}} className="text-3xl font-bold text-[#4f738e]">
                {count !== null ? count : "..."} / 1,000
              </span>
              <span style={{fontFamily: 'Inter, sans-serif'}} className="text-lg font-semibold text-[#b87333]">
                {spotsRemaining} spots remaining
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden relative">
              <div 
                className="h-full bg-gradient-to-r from-[#4f738e] via-[#6b8ca3] to-[#b87333] pulse-glow transition-all duration-500 ease-out"
                style={{ width: `${percentFilled}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-2xl border-t-4 border-[#b87333] overflow-hidden mb-8">
          <div className="p-8 md:p-12">
            
            {/* Founderling Benefits */}
            <div className="mb-10">
              <h2 style={{fontFamily: 'Playfair Display, serif'}} className="text-3xl font-bold text-[#4f738e] mb-6 text-center">
                Exclusive Founderling Perks
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: '🎖️', title: 'Lifetime 20% Discount', desc: 'Forever pricing advantage' },
                  { icon: '⚙️', title: 'Exclusive Badge & Status', desc: 'Numbered member #1-1000' },
                  { icon: '🚀', title: 'Early Feature Access', desc: 'First to try everything new' },
                  { icon: '🤖', title: 'Train the AI', desc: 'Shape how it teaches' },
                  { icon: '👥', title: 'Private Community', desc: 'Founderlings-only space' },
                  { icon: '📜', title: 'Founding Member Recognition', desc: 'Your legacy in the platform' }
                ].map((perk, i) => (
                  <div 
                    key={i}
                    className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#f5e6d3] to-white rounded-lg border border-[#d4a574] hover:shadow-md transition-shadow"
                  >
                    <span className="text-3xl">{perk.icon}</span>
                    <div>
                      <h3 style={{fontFamily: 'Inter, sans-serif'}} className="font-bold text-[#2c3e50] mb-1">
                        {perk.title}
                      </h3>
                      <p style={{fontFamily: 'Inter, sans-serif'}} className="text-sm text-gray-600">
                        {perk.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Form */}
            {!submitted ? (
              <div className="space-y-4">
                <div>
                  <label style={{fontFamily: 'Roboto Mono, monospace'}} className="text-sm font-semibold text-[#4f738e] uppercase tracking-wide block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white border-2 border-[#4f738e] rounded-lg text-gray-900 focus:outline-none focus:border-[#b87333] focus:ring-2 focus:ring-[#b87333]/20 transition-all"
                    style={{fontFamily: 'Inter, sans-serif'}}
                  />
                </div>

                <div>
                  <label style={{fontFamily: 'Roboto Mono, monospace'}} className="text-sm font-semibold text-[#4f738e] uppercase tracking-wide block mb-2">
                    Why do you want to learn investing? (Optional)
                  </label>
                  <textarea
                    value={why}
                    onChange={(e) => setWhy(e.target.value)}
                    placeholder="Tell us your story..."
                    rows={3}
                    className="w-full px-4 py-3 bg-white border-2 border-[#4f738e] rounded-lg text-gray-900 focus:outline-none focus:border-[#b87333] focus:ring-2 focus:ring-[#b87333]/20 transition-all resize-none"
                    style={{fontFamily: 'Inter, sans-serif'}}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-gradient-to-r from-[#b8860b] to-[#daa520] text-white font-bold text-lg uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden group"
                  style={{fontFamily: 'Roboto Mono, monospace'}}
                >
                  <span className="relative z-10">Become a Founderling</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity shimmer"></div>
                </button>
              </div>
            ) : (
              <div className="text-center py-12 bg-gradient-to-br from-green-50 to-[#f5e6d3] rounded-lg border-2 border-green-500">
                <div className="text-6xl mb-4">🎉</div>
                <h3 style={{fontFamily: 'Playfair Display, serif'}} className="text-2xl font-bold text-green-700 mb-2">
                  Welcome, Founderling!
                </h3>
                <p style={{fontFamily: 'Inter, sans-serif'}} className="text-gray-700">
                  Check your email for next steps
                </p>
              </div>
            )}

            {/* Story Section */}
            <div className="mt-12 pt-8 border-t-2 border-[#e8d4b0]">
              <h3 style={{fontFamily: 'Playfair Display, serif'}} className="text-2xl font-bold text-[#4f738e] mb-4 text-center">
                Built by a Self-Taught Developer
              </h3>
              <p style={{fontFamily: 'Inter, sans-serif'}} className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                Started coding in January 2025. Built this entire full-stack AI platform in 10 months—on a 4GB laptop. 
                No excuses, just execution. Now building the future of investing education.
              </p>
              
              <div className="mt-6 text-center">
                <a 
                  href="https://beginnerinvestorhub-demo.vercel.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#4f738e] text-white font-semibold rounded-lg hover:bg-[#385a73] transition-colors"
                  style={{fontFamily: 'Inter, sans-serif'}}
                >
                  View Live Demo →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-600 text-sm" style={{fontFamily: 'Inter, sans-serif'}}>
          <p>Limited to first 1,000 members • After that, doors close forever</p>
        </footer>
      </div>
    </div>
  );
}