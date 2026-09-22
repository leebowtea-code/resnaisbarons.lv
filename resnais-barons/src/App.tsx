/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Clock, Instagram, ShoppingBag, Utensils, Info, Check } from 'lucide-react';

interface MenuItem {
  id: number;
  title: string;
  price: string;
  largePrice?: string;
  ingredients: string;
  allergens: string[];
}

interface ExtraItem {
  name: string;
  price: string;
}

export default function App() {
  const [showAllergens, setShowAllergens] = useState(false);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      title: "Kaut Kas Par Itāliju",
      price: "7,00€",
      largePrice: "10,50€",
      ingredients: "Vista, zirnīši, burkāni, pesto, saulē kaltēti tomāti, kaperi",
      allergens: ["A07"]
    },
    {
      id: 2,
      title: "Rudens Raža",
      price: "7,50€",
      largePrice: "10,75€",
      ingredients: "Vista, seleriju biezenis, puravi, sēnes, lazdu rieksti, dilles",
      allergens: ["A06", "A07", "A08", "A09", "A12"]
    },
    {
      id: 3,
      title: "Boloņas Buļba",
      price: "8,50€",
      largePrice: "12,75€",
      ingredients: "Liellopa gaļa, sofrito, tomāti, balzamiko, Grana Padano siers, zaļumu mērce",
      allergens: ["A03", "A07", "A09"]
    },
    {
      id: 4,
      title: "Baronu Čilli",
      price: "8,50€",
      largePrice: "12,75€",
      ingredients: "Liellopu gaļa, čilli, sīpoli, pupas, paprika, ķiploki, tomāti, kukurūza, 90% tumšā šokolāde",
      allergens: ["A01"]
    },
    {
      id: 5,
      title: "Pikantais Ruksis",
      price: "9,00€",
      largePrice: "13,50€",
      ingredients: "Cūkgaļa, sambal, paprika",
      allergens: ["NAV"]
    },
    {
      id: 6,
      title: "Burbuļi un Kvieciens",
      price: "8,50€",
      largePrice: "12,75€",
      ingredients: "Cūkgaļa, kāposti, ābolu sidrs, sinepes, koriandrs",
      allergens: ["A10"]
    },
    {
      id: 7,
      title: "Kraukšķīgie Kartupeļi",
      price: "4,00€",
      ingredients: "Kraukšķīgi kartupeļi ar pikanto majonēzi un ķiploku majonēzi",
      allergens: ["A03"]
    }
  ];

  const sideExtras: ExtraItem[] = [
    { name: "Bekons", price: "2,00€" },
    { name: "Siers", price: "1,00€" },
    { name: "Mazsālīti / marinēti gurķīši", price: "1,00€" },
    { name: "Lazdu rieksti", price: "1,00€" },
    { name: "Kaperi", price: "1,00€" },
    { name: "Saulē kaltēti tomāti", price: "1,00€" },
    { name: "Ķiploku majonēze", price: "1,00€" },
    { name: "Pikantā majonēze", price: "1,00€" }
  ];

  const allergenGlossary: Record<string, string> = {
    A01: "Graudaugi, kas satur lipekli",
    A03: "Olas un to produkti",
    A06: "Sojas pupas un to produkti",
    A07: "Piens un tā produkti (laktoze)",
    A08: "Rieksti (lazdu rieksti)",
    A09: "Selerijas un to produkti",
    A10: "Sinepes un to produkti",
    A12: "Sēra dioksīds un sulfīti",
    NAV: "Nesatur reģistrētos alergēnus"
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-zinc-300 font-sans selection:bg-orange-500 selection:text-white pb-10">
      {/* Header Cover */}
      <header className="relative w-full h-[55vh] md:h-[75vh] flex flex-col items-center justify-end pb-14 md:pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/wPT_Resnais Barons-Cover.JPG" 
            alt="Resnais Barons Cover" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay for readability and smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/50 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-orange-500 tracking-wider uppercase mb-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Resnais Barons
          </h1>
          <p className="text-yellow-500 tracking-[0.25em] uppercase font-bold text-base sm:text-xl md:text-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Kartupeļi ar Aizdaru
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 pt-4 pb-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <Utensils className="text-orange-500" size={24} />
            <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wider">
              Ēdienkarte
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full mb-3"></div>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto">
            Svaigi cepti kartupeļi ar dāsnām, pašu gatavotām mērcēm un bagātīgiem aizdariem.
          </p>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              id={`dish-${item.id}`}
              className="bg-[#161616] rounded-2xl p-6 border border-zinc-800/80 hover:border-orange-500/60 transition-all duration-200 shadow-lg flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent line on card */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent group-hover:via-orange-500 transition-all duration-300"></div>

              <div>
                {/* Header row: Dish name & Price */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3 pb-3 border-b border-zinc-800">
                  <div className="flex items-baseline gap-2">
                    <span className="text-orange-500 font-extrabold text-xl md:text-2xl">
                      {item.id}.
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex sm:flex-col items-baseline sm:items-end gap-2 sm:gap-0 shrink-0">
                    <span className="text-2xl font-black text-yellow-500">
                      {item.price}
                    </span>
                    {item.largePrice && (
                      <span className="text-xs font-semibold text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded-full border border-zinc-700/50">
                        1½ porcija: <strong className="text-yellow-400">{item.largePrice}</strong>
                      </span>
                    )}
                  </div>
                </div>

                {/* Ingredients */}
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-4">
                  {item.ingredients}
                </p>
              </div>

              {/* Allergens badge section */}
              <div className="pt-2 flex items-center justify-between border-t border-zinc-800/50 mt-auto">
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                  Alergēni:
                </span>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {item.allergens.map((alg) => (
                    <span 
                      key={alg} 
                      className={`text-xs font-bold px-2 py-0.5 rounded border tracking-wider ${
                        alg === 'NAV' 
                          ? 'bg-zinc-800 text-zinc-400 border-zinc-700' 
                          : 'bg-orange-500/10 text-orange-400 border-orange-500/30'
                      }`}
                      title={allergenGlossary[alg] || alg}
                    >
                      {alg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Side Extras Section */}
        <section id="piedevas-section" className="bg-[#161616] rounded-2xl p-6 md:p-8 border border-zinc-800 relative overflow-hidden mb-12 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider mb-2">
              Piedevas
            </h3>
            <p className="text-yellow-500 uppercase tracking-widest text-xs md:text-sm font-bold">
              Savam Kartupelim
            </p>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full mt-3"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl mx-auto">
            {sideExtras.map((extra, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between py-2.5 border-b border-zinc-800/70 hover:border-orange-500/40 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  <span className="text-zinc-200 font-semibold uppercase text-sm md:text-base tracking-wide">
                    {extra.name}
                  </span>
                </div>
                <span className="text-yellow-400 font-extrabold text-base md:text-lg pl-4">
                  {extra.price}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Allergens Information Drawer / Accordion */}
        <div className="text-center">
          <button 
            type="button"
            onClick={() => setShowAllergens(!showAllergens)}
            className="inline-flex items-center gap-2 text-xs md:text-sm text-zinc-400 hover:text-orange-400 transition-colors uppercase font-bold tracking-wider py-2 px-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700"
          >
            <Info size={16} />
            <span>{showAllergens ? "Paslēpt alergēnu skaidrojumu" : "Alergēnu apzīmējumi (A01 - A12)"}</span>
          </button>

          {showAllergens && (
            <div className="mt-4 p-5 bg-[#141414] rounded-xl border border-zinc-800 text-left max-w-2xl mx-auto">
              <h4 className="text-xs uppercase tracking-wider text-orange-500 font-bold mb-3">
                Alergēnu saraksts saskaņā ar ES regulām:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400">
                {Object.entries(allergenGlossary).map(([code, label]) => (
                  <div key={code} className="flex items-start gap-2">
                    <span className="font-bold text-yellow-500 w-10 shrink-0">{code}:</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 bg-[#090909] border-t border-zinc-800 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Location */}
          <div className="flex flex-col items-center md:items-start">
            <MapPin className="text-orange-500 mb-4" size={32} />
            <h3 className="text-white font-bold mb-2 uppercase tracking-wider">Atrašanās vieta</h3>
            <p className="text-zinc-400 mb-2">A.Deglava iela 69B, Rīga</p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Augusta+Deglava+iela+69B,+Rīga" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-yellow-500 hover:text-orange-500 transition-colors uppercase font-bold tracking-wider inline-flex items-center gap-1"
            >
              Skatīt kartē (Google Maps)
            </a>
          </div>

          {/* Working hours */}
          <div className="flex flex-col items-center md:items-start">
            <Clock className="text-orange-500 mb-4" size={32} />
            <h3 className="text-white font-bold mb-2 uppercase tracking-wider">Darba laiks</h3>
            <div className="text-zinc-400 flex flex-col items-center md:items-start gap-1">
              <p>Pirmdiena - Sestdiena: 12:00 - 21:00</p>
              <p>Svētdiena: 12:00 - 19:00</p>
            </div>
          </div>

          {/* Social media & Reviews */}
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

          {/* Order Delivery */}
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
