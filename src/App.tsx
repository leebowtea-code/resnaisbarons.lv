/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Clock, Instagram, ShoppingBag } from 'lucide-react';

export default function App() {
  const menuItems = [
    {
      title: "KARAĻA KLUKSTE",
      price: "7,50€",
      extra: "+ PAPILDUS AIZDARS 2,50€",
      description: "Saldkrējuma vistas sēņu mērce, Čedaras siers, Miso-laima sviests.",
      image: "wPT_Karala Klukste LABOTS.jpg.jpg"
    },
    {
      title: "CARA CŪKA",
      price: "7,50€",
      extra: "+ PAPILDUS AIZDARS 2,50€",
      description: "Alus, Kimchi gulašs, Čedaras siers, Ķiploku sviests.",
      image: "wPT_Cara_Cuka_LABOTS.jpg.jpg"
    },
    {
      title: "BUDAS BUĻBA",
      price: "7,50€",
      extra: "+ PAPILDUS AIZDARS 2,50€",
      description: "Sezonālie dārzeņi, Kokoss, Sinepes, Pistācijas, Ķirbju eļļa.",
      image: "wPT_Budas Buļba.JPG"
    },
    {
      title: "KRAUKŠĶĪGIE KARTUPEĻI",
      price: "3,50€",
      extra: "",
      description: "Zaļumu aioli un pikantais aioli.",
      image: "wPT_Kraukšķīgie Kartupeļi ar mērci.JPG"
    }
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-zinc-300 font-sans font-bold selection:bg-orange-500 selection:text-white pb-10">
      {/* Header */}
      <header className="relative w-full h-[60vh] md:h-[80vh] flex flex-col items-center justify-end pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="/wPT_Resnais Barons-Cover.JPG" 
            alt="Resnais Barons Cover" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay for text readability and smooth transition to bg */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-black/20"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="text-6xl md:text-8xl md:text-[8rem] font-bold text-orange-500 tracking-wider uppercase mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            Resnais Barons
          </h1>
          <p className="text-yellow-500 tracking-widest uppercase font-bold text-lg md:text-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Kartupeļi ar Aizdaru
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg border border-zinc-800 flex flex-col hover:border-orange-500/50 transition-colors duration-300">
              <div className="h-64 w-full relative bg-zinc-900">
                <img 
                  src={`/${item.image}`} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold text-orange-500 uppercase">{item.title}</h2>
                  <span className="text-xl font-bold text-yellow-500">{item.price}</span>
                </div>
                {item.extra && (
                  <p className="text-xs text-orange-400/80 uppercase tracking-wider mb-4">{item.extra}</p>
                )}
                <p className="text-zinc-400 mt-auto leading-relaxed pt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-[#0a0a0a] border-t border-zinc-800 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <MapPin className="text-orange-500 mb-4" size={32} />
            <h3 className="text-white font-bold mb-2 uppercase tracking-wider">Atrašanās vieta</h3>
            <p className="text-zinc-400 mb-2">A.Deglava iela 69B, Rīga</p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Augusta+Deglava+iela+69B,+Rīga" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-yellow-500 hover:text-orange-500 transition-colors uppercase font-bold tracking-wider"
            >
              Skatīt kartē (Google Maps)
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <Clock className="text-orange-500 mb-4" size={32} />
            <h3 className="text-white font-bold mb-2 uppercase tracking-wider">Darba laiks</h3>
            <div className="text-zinc-400 flex flex-col items-center md:items-start gap-1">
              <p>Mon-Tue - Closed</p>
              <p>Wed-Sat - 12:00 - 21:00</p>
              <p>Sun - 12:00 - 19:00</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <Instagram className="text-orange-500 mb-4" size={32} />
            <h3 className="text-white font-bold mb-2 uppercase tracking-wider">Seko mums & Atsauksmes</h3>
            <div className="flex flex-col items-center md:items-start gap-2">
              <a href="https://www.instagram.com/resnaisbarons/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-orange-500 transition-colors">
                Instagram
              </a>
              <a href="https://www.facebook.com/p/ResnaisBarons-61590310657058/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-orange-500 transition-colors">
                Facebook
              </a>
              <a href="https://www.tiktok.com/@resnais.barons" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-orange-500 transition-colors">
                TikTok
              </a>
              <a href="https://www.google.com/search?q=Resnais+Barons+Riga+reviews" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-orange-500 transition-colors">
                Google Reviews
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <ShoppingBag className="text-orange-500 mb-4" size={32} />
            <h3 className="text-white font-bold mb-2 uppercase tracking-wider">Pasūti piegādi</h3>
            <div className="flex flex-col items-center md:items-start gap-2">
              <a href="https://wolt.com/lv/lva/riga/restaurant/resnais-barons?srsltid=AfmBOortKVsskTPVkifziDcBw06n-rEHBgWgaiqIy7RY-hXdQi6cfYLY" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#00c2e8] transition-colors font-bold">
                Pasūti Wolt
              </a>
              <a href="https://food.bolt.eu/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#32c98d] transition-colors font-bold">
                Pasūti Bolt Food
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
