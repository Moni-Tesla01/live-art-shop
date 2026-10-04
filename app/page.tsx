"use client";

import { useState } from 'react';

export default function Home() {
  // Stan odpowiedzialny za otwieranie i zamykanie menu na telefonie
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* RESPONSYWNE MENU GŁÓWNE */}
      <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* LOGO / NAZWA SKLEPU */}
            <div className="flex-shrink-0">
              <span className="text-xl font-bold tracking-wider text-cyan-400 cursor-pointer">
                MoonArt Shop
              </span>
            </div>

            {/* MENU DLA LAPTOPA */}
            <div className="hidden md:flex space-x-8 font-medium">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">Home</a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">Gallery</a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">About me</a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">Contact</a>
            </div>

            {/* PRZYCISK HAMBURGERA DLA TELEFONU */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                {!isOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* ROZWIJANE MENU DLA TELEFONU */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-800 border-t border-slate-700`}>
          <div className="px-2 pt-2 pb-3 space-y-1 text-center">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-cyan-400">Strona Główna</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-cyan-400">Galeria</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-cyan-400">O nas</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-cyan-400">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* ZAWARTOŚĆ STRONY */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl font-extrabold text-white md:text-6xl tracking-tight">
          Witamy w <span className="text-cyan-400">MoonArt Shop</span>!
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
         Tu będzie fajny layout z z moimi pracami :D
        </p>
      </main>

    </div>
  );
}
