"use client";

import { useState } from 'react';

import styles from './page.module.css';

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
    <div className={styles.container}>
      
      {/* 1. MENU GŁÓWNE */}
      <nav className={styles.navbar}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className={styles.logo}>Life Art Shop</span>
            </div>
            <div className={styles.navLinksDesktop}>
              <a href="#" className={styles.navLink}>Strona Główna</a>
              <a href="#" className={styles.navLink}>Kolekcje</a>
              <a href="#" className={styles.navLink}>O nas</a>
              <a href="#" className={styles.navLink}>Kontakt</a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className={styles.hamburgerBtn}>
                {!isOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} ${styles.mobileMenu}`}>
          <div className={styles.mobileMenuLinks}>
            <a href="#" className={styles.mobileNavLink}>Strona Główna</a>
            <a href="#" className={styles.mobileNavLink}>Kolekcje</a>
            <a href="#" className={styles.mobileNavLink}>O nas</a>
            <a href="#" className={styles.mobileNavLink}>Kontakt</a>
          </div>
        </div>
      </nav>

      {/* 2. BANER POWITALNY (HERO) */}
      <header className={styles.hero}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className={styles.heroTag}>Autorska Fotografia i Wydruki Cyfrowe</span>
          <h1 className={styles.heroTitle}>
            Uwiecznione chwile w <span className={styles.heroGradientText}>Life Art Shop</span>
          </h1>
          <p className={styles.heroDescription}>
            Od surowych szczytów Tatr i Karkonoszy, przez klimatyczny Gdańsk i Sopot, aż po malownicze zakątki Grecji, Francji i Włoch. Odkryj klasyczne kadry oraz unikalne wydruki z artystycznym filtrem akwarelowym.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#sklep" className={styles.heroBtn}>Przeglądaj Wydruki</a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      </header>

      {/* 3. KOLEKCJE TEMATYCZNE */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Kolekcje Krajobrazów</h2>
        <p className={styles.sectionSubtitle}>Wybierz klimat, który chcesz zaprosić do swojego domu</p>
        
        <div className={styles.collectionsGrid}>
          <div className={styles.collectionCard}>
            <div className="text-3xl mb-2">⛰️</div>
            <h3 className="font-bold text-white">Góry i Podhale</h3>
            <p className="text-xs text-slate-400 mt-2">Tatry, Zakopane, Karkonosze, Karpacz</p>
          </div>
          <div className={styles.collectionCard}>
            <div className="text-3xl mb-2">🌊</div>
            <h3 className="font-bold text-white">Morze i Wybrzeże</h3>
            <p className="text-xs text-slate-400 mt-2">Bałtyckie kadry, Gdańsk, Sopot i Gdynia</p>
          </div>
          <div className={styles.collectionCard}>
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-bold text-white">Malarstwo Cyfrowe</h3>
            <p className="text-xs text-slate-400 mt-2">Zdjęcia przerobione na piękne akwarele</p>
          </div>
          <div className={styles.collectionCard}>
            <div className="text-3xl mb-2">🇪🇺</div>
            <h3 className="font-bold text-white">Podróże po Europie</h3>
            <p className="text-xs text-slate-400 mt-2">Grecja, Francja, Włochy, Belgia</p>
          </div>
        </div>
      </section>

      {/* 4. SIATKA Z PRODUKTAMI (SKLEP) */}
      <section id="sklep" className={styles.section}>
        <div className={styles.shopHeader}>
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Dostępne Wydruki</h2>
            <p className="text-slate-400 mt-2">Wybierz autorskie ujęcie w najwyższej jakości druku</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2 overflow-x-auto pb-2 md:pb-0">
            <span className={styles.filterBadgeActive}>Wszystkie</span>
            <span className={styles.filterBadge}>Góry</span>
            <span className={styles.filterBadge}>Morze</span>
            <span className={styles.filterBadge}>Akwarela</span>
          </div>
        </div>

        <div className={styles.productsGrid}>
          {produkty.map((prod) => (
            <div key={prod.id} className={styles.productCard}>
              <div className={styles.productImagePlaceholder}>
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{prod.emoji}</span>
                <span className={styles.productTag}>{prod.tag}</span>
              </div>
              <div className={styles.productContent}>
                <div>
                  <span className={styles.productCategory}>{prod.kategoria}</span>
                  <h3 className={styles.productTitle}>{prod.tytul}</h3>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className={styles.productPrice}>{prod.cena}</span>
                  <button className={styles.productBtn}>Opcje wydruku</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. NEWSLETTER */}
      <footer className={styles.footer}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-white">Dołącz do społeczności Life Art Shop</h3>
          <p className="text-slate-400 text-sm mt-1">Zostaw e-mail, aby nie przegapić nowych dropów zdjęć i limitowanych serii akwareli.</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Twój e-mail" className={styles.inputEmail} />
            <button className={styles.btnSubmit}>Zapisz się</button>
          </div>
        </div>
      </footer>

    </div>
  );
}

