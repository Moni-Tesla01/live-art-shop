"use client";

import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const produkty = [
    { id: 1, tytul: "Świnica z Kasprowego Wierchu", kategoria: "Efekt Akwareli", cena: "129 zł", tag: "Bestseller", emoji: "⛰️" },
    { id: 2, tytul: "Poranek w Wenecji", kategoria: "Efekt Akwareli", cena: "149 zł", tag: "Nowość", emoji: "🛶" },
    { id: 3, tytul: "Karkonoskie Szczyty w Śniegu", kategoria: "Fotografia Górska", cena: "119 zł", tag: "Karpacz", emoji: "🌲" },
    { id: 4, tytul: "Bałtycki Brzeg — Sopot", kategoria: "Fotografia Nadmorska", cena: "119 zł", tag: "Morze", emoji: "🌊" },
    { id: 5, tytul: "Uliczki Paryża", kategoria: "Kolekcja Europejska", cena: "139 zł", tag: "Francja", emoji: "🥐" },
    { id: 6, tytul: "Greckie Słońce — Santorini", kategoria: "Kolekcja Europejska", cena: "139 zł", tag: "Grecja", emoji: "🏛️" }
  ];

  return (
    <div className="container_shop">
      
      {/* 1. MENU GŁÓWNE */}
      <nav className="navbar_shop">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="logo_shop">Life Art Shop</span>
            </div>
            <div className="navLinksDesktop_shop">
              <a href="#" className="navLink_shop">Strona Główna</a>
              <a href="#" className="navLink_shop">Kolekcje</a>
              <a href="#" className="navLink_shop">O nas</a>
              <a href="#" className="navLink_shop">Kontakt</a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className="hamburgerBtn_shop">
                {!isOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} mobileMenu_shop`}>
          <div className="mobileMenuLinks_shop">
            <a href="#" className="mobileNavLink_shop">Strona Główna</a>
            <a href="#" className="mobileNavLink_shop">Kolekcje</a>
            <a href="#" className="mobileNavLink_shop">O nas</a>
            <a href="#" className="mobileNavLink_shop">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* 2. BANER POWITALNY (HERO) */}
      <header className="hero_shop">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="heroTag_shop">Autorska Fotografia i Wydruki Cyfrowe</span>
          <h1 className="heroTitle_shop">
            Uwiecznione chwile w <span className="heroGradientText_shop">Life Art Shop</span>
          </h1>
          <p className="heroDescription_shop">
            Od surowych szczytów Tatr i Karkonoszy, przez klimatyczny Gdańsk i Sopot, aż po malownicze zakątki Grecji, Francji i Włoch. Odkryj klasyczne kadry oraz unikalne wydruki z artystycznym filtrem akwarelowym.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#sklep" className="heroBtn_shop">Przeglądaj Wydruki</a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      </header>

      {/* 3. KOLEKCJE TEMATYCZNE */}
      <section className="section_shop">
        <h2 className="sectionTitle_shop">Kolekcje Krajobrazów</h2>
        <p className="sectionSubtitle_shop">Wybierz klimat, który chcesz zaprosić do swojego domu</p>
        
        <div className="collectionsGrid_shop">
          <div className="collectionCard_shop">
            <div className="text-3xl mb-2">⛰️</div>
            <h3 className="font-bold text-white">Góry i Podhale</h3>
            <p className="text-xs text-slate-400 mt-2">Tatry, Zakopane, Karkonosze, Karpacz</p>
          </div>
          <div className="collectionCard_shop">
            <div className="text-3xl mb-2">🌊</div>
            <h3 className="font-bold text-white">Morze i Wybrzeże</h3>
            <p className="text-xs text-slate-400 mt-2">Bałtyckie kadry, Gdańsk, Sopot i Gdynia</p>
          </div>
          <div className="collectionCard_shop">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-bold text-white">Malarstwo Cyfrowe</h3>
            <p className="text-xs text-slate-400 mt-2">Zdjęcia przerobione na piękne akwarele</p>
          </div>
          <div className="collectionCard_shop">
            <div className="text-3xl mb-2">🇪🇺</div>
            <h3 className="font-bold text-white">Podróże po Europie</h3>
            <p className="text-xs text-slate-400 mt-2">Grecja, Francja, Włochy, Belgia</p>
          </div>
        </div>
      </section>

      {/* 4. SIATKA Z PRODUKTAMI (SKLEP) */}
      <section id="sklep" className="section_shop">
        <div className="shopHeader_shop">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Dostępne Wydruki</h2>
            <p className="text-slate-400 mt-2">Wybierz autorskie ujęcie w najwyższej jakości druku</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2 overflow-x-auto pb-2 md:pb-0">
            <span className="filterBadgeActive_shop">Wszystkie</span>
            <span className="filterBadge_shop">Góry</span>
            <span className="filterBadge_shop">Morze</span>
            <span className="filterBadge_shop">Akwarela</span>
          </div>
        </div>

        <div className="productsGrid_shop">
          {produkty.map((prod) => (
            <div key={prod.id} className="productCard_shop group">
              <div className="productImagePlaceholder_shop">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{prod.emoji}</span>
                <span className="productTag_shop">{prod.tag}</span>
              </div>
              <div className="productContent_shop">
                <div>
                  <span className="productCategory_shop">{prod.kategoria}</span>
                  <h3 className="productTitle_shop">{prod.tytul}</h3>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="productPrice_shop">{prod.cena}</span>
                  <button className="productBtn_shop">Opcje wydruku</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. NEWSLETTER */}
      <footer className="footer_shop">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-white">Dołącz do społeczności Life Art Shop</h3>
          <p className="text-slate-400 text-sm mt-1">Zostaw e-mail, aby nie przegapić nowych dropów zdjęć i limitowanych serii akwareli.</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Twój e-mail" className="inputEmail_shop" />
            <button className="btnSubmit_shop">Zapisz się</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
