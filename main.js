// FoilRush — main.js

// ── i18n ──
const translations = {
  en: {
    'nav.features': 'Features',
    'nav.how': 'How It Works',
    'nav.specs': 'Specs',
    'nav.reviews': 'Reviews',
    'nav.buy': 'Pre-Order',
    'nav.buy.short': 'Pre-Order',
    'hero.eyebrow': 'CHOOSE YOUR WAY TO FLY',
    'hero.h1': 'The Easiest Way<br>to Start Pump Foiling.',
    'hero.sub': 'FoilRush gives you the sensation of flying above the water — no motor, no kite, no wave required. Just you, the board, and pure hydrodynamic lift.',
    'hero.cta1': 'Pre-Order Now — <span data-price>$799</span>',
    'hero.cta2': 'See How It Works ↓',
    'features.eyebrow': 'WHY FOILRUSH',
    'features.title': 'Accessible Foiling.<br>Genuine Sensation.',
    'features.f1.title': 'No Motor. Pure Pump.',
    'features.f1.body': 'Your body generates the lift. Shift your weight rhythmically and feel the board rise — zero emissions, zero engine noise, infinite flow state.',
    'features.f2.title': 'Compatible with Any Foil',
    'features.f2.body': 'Already own a foil? Plug it in. FoilRush works with most foil systems on the market — no proprietary lock-in, no expensive ecosystem.',
    'features.f3.title': 'Built for All Waters',
    'features.f3.body': 'Lakes, rivers, ocean — flat water or open swell. The 96cm adjustable deck and high-efficiency wings handle any conditions.',
    'features.f4.title': 'Ready in Under 10 Min',
    'features.f4.body': 'Quick-connect mast system, tool-free stance adjustment. Spend less time on the beach and more time in the air.',
    'features.f5.title': 'Removable Handlebar',
    'features.f5.body': 'The scooter-style handlebar detaches in seconds. Use it to learn balance and pump technique, then ride without it once you\'ve got lift dialled.',
    'how.eyebrow': 'HOW IT WORKS',
    'how.title': 'Three Steps.<br>One Addiction.',
    'how.s1.title': 'Step On & Find Your Stance',
    'how.s1.body': 'Stand on the wide EVA deck, adjust your foot position to shoulder width. The board is stable enough to stand on the water before you even start moving.',
    'how.s2.title': 'Pump to Generate Lift',
    'how.s2.body': 'Bend your knees and shift weight front-to-back in a rhythmic motion. The high-efficiency wings convert that energy into hydrodynamic lift — the board starts to rise.',
    'how.s3.title': 'Fly. Glide. Repeat.',
    'how.s3.body': 'Once you\'re up, keep pumping to stay airborne. It takes most riders 20–30 minutes to get their first sustained flight — and nobody stops after that.',
    'specs.eyebrow': 'TECHNICAL SPECS',
    'specs.title': 'The Details.',
    'specs.r1.label': 'Board Length',
    'specs.r1.val': '96 cm (adjustable stance)',
    'specs.r2.label': 'Foil Mast Height',
    'specs.r2.val': '65 cm',
    'specs.r3.label': 'Max Rider Weight',
    'specs.r3.val': '100 kg',
    'specs.r4.label': 'Deck Material',
    'specs.r4.val': 'EVA foam grip pad, reinforced core',
    'specs.r5.label': 'Mast Material',
    'specs.r5.val': 'Carbon fiber — lightweight & ultra-rigid',
    'specs.r6.label': 'Foil Compatibility',
    'specs.r6.val': 'Universal mount — works with most foil brands',
    'specs.r7.label': 'Recommended Level',
    'specs.r7.val': 'All levels — beginners welcome',
    'specs.r8.label': 'Setup Time',
    'specs.r8.val': 'Under 10 minutes',
    'specs.r9.label': 'Package Includes',
    'specs.r9.val': 'Board, mast, fuselage, front & rear wings, hardware kit',
    'lifestyle.quote': '"The first time you stay up, you\'ll never want to stop."',
    'reviews.eyebrow': 'RIDERS',
    'reviews.title': 'They Flew.<br>They\'re Hooked.',
    'reviews.r1.text': '"I ride it on flat lake days when there\'s no surf. It\'s become my main cross-training tool — and honestly more fun than most sessions I\'ve had on actual waves."',
    'reviews.r1.role': 'Surfer · Malibu, CA',
    'reviews.r2.text': '"Got my first lift within 20 minutes. I wasn\'t expecting it to feel so natural — the pumping motion clicks really fast. I was flying for 10 seconds by the end of session one."',
    'reviews.r2.role': 'Wing Foiler · Tarifa, Spain',
    'reviews.r3.text': '"Used my existing surf foil, plugged right in. Build quality is solid — carbon mast is properly stiff, no flex, no wobble. This is legit pump foil gear, not a toy."',
    'reviews.r3.role': 'Foil Surfer · Lake Tahoe, CA',
    'buy.tab.photo': 'Product Photo',
    'buy.tab.design': 'Board Design',
    'buy.name': 'Scooter Pump Foil<br>96cm — Universal Mount',
    'buy.tagline': 'All levels · Carbon-fiber mast · Universal foil compatibility · Full kit included',
    'buy.cta': 'Pre-Order Now',
    'buy.badge1': '🚚 Free Shipping',
    'buy.badge2': '↩ 30-Day Returns',
    'buy.badge3': '🔒 Secure Checkout',
    'footer.copy': '© 2026 FoilRush. All rights reserved.',
    'preorder.badge': 'PRE-ORDER NOW',
    'preorder.h1': 'Secure Your Board.<br>Be First to Fly.',
    'preorder.sub': 'We\'re taking pre-orders for the first production run. Reserve yours with no payment today — we\'ll confirm details before shipment.',
    'preorder.form.h2': 'Reserve Your FoilRush',
    'preorder.form.sub': 'Fill in your details below. No credit card required — we\'ll reach out to confirm availability and finalize your order.',
    'preorder.section.you': 'Your details',
    'preorder.label.first': 'First name',
    'preorder.label.last': 'Last name',
    'preorder.label.email': 'Email address',
    'preorder.label.phone': 'Phone number',
    'preorder.label.phone.opt': '(optional)',
    'preorder.section.ship': 'Shipping address',
    'preorder.label.country': 'Country',
    'preorder.country.placeholder': 'Select country…',
    'preorder.label.city': 'City',
    'preorder.section.exp': 'Your experience',
    'preorder.label.level': 'Water sport background',
    'preorder.level.placeholder': 'Select one…',
    'preorder.level.beginner': 'Complete beginner',
    'preorder.level.surfer': 'Surfer',
    'preorder.level.kite': 'Kitesurfer / Windsurfer',
    'preorder.level.foiler': 'Already foiling',
    'preorder.level.wake': 'Wakeboarder / Wakefoiler',
    'preorder.level.other': 'Other water sport',
    'preorder.level.note': 'Helps us send you the right setup tips.',
    'preorder.label.message': 'Anything else?',
    'preorder.message.opt': '(optional)',
    'preorder.message.ph': 'Questions, foil brand you already own, special requests…',
    'preorder.submit': 'Reserve My FoilRush →',
    'preorder.legal': 'By submitting you agree to be contacted about your pre-order. No payment is taken at this stage. We respect your privacy and will never share your data.',
    'preorder.summary.note': 'No payment charged now. We\'ll contact you to confirm your order before shipment. Free shipping worldwide.',
    'preorder.includes.title': 'What\'s included',
    'preorder.success.h3': 'You\'re on the list!',
    'preorder.success.p': 'Thanks for your pre-order. We\'ll email you at',
    'preorder.success.p2': 'with confirmation details and estimated shipping timeline.',
    'preorder.back': '← Back to product',
    'preorder.back.nav': '← Back to product',
    'preorder.kit.1': '96cm deck with EVA grip pad',
    'preorder.kit.2': 'Carbon fiber foil mast (65cm)',
    'preorder.kit.3': 'Fuselage + front & rear wings',
    'preorder.kit.4': 'Scooter handlebar (removable)',
    'preorder.kit.5': 'Full hardware kit',
  },
  pl: {
    'nav.features': 'Cechy',
    'nav.how': 'Jak to działa',
    'nav.specs': 'Dane techniczne',
    'nav.reviews': 'Opinie',
    'nav.buy': 'Zamów teraz',
    'nav.buy.short': 'Zamów',
    'hero.eyebrow': 'WYBIERZ SWÓJ SPOSÓB NA LOT',
    'hero.h1': 'Najłatwiejszy sposób<br>na pump foiling.',
    'hero.sub': 'FoilRush daje Ci poczucie lotu nad wodą — bez silnika, latawca i fal. Tylko Ty, deska i czysta siła hydrodynamiczna.',
    'hero.cta1': 'Zamów teraz — <span data-price>$799</span>',
    'hero.cta2': 'Jak to działa ↓',
    'features.eyebrow': 'DLACZEGO FOILRUSH',
    'features.title': 'Foiling dostępny dla każdego.<br>Prawdziwe doznania.',
    'features.f1.title': 'Bez silnika. Czysty pump.',
    'features.f1.body': 'Twoje ciało generuje unoszenie. Rytmiczne przenoszenie ciężaru sprawia, że deska unosi się — zero emisji, zero hałasu silnika, nieskończony flow.',
    'features.f2.title': 'Kompatybilny z każdym foilem',
    'features.f2.body': 'Masz już foil? Podłącz go. FoilRush współpracuje z większością systemów foilowych na rynku — bez zamkniętego ekosystemu.',
    'features.f3.title': 'Zbudowany na każdą wodę',
    'features.f3.body': 'Jeziora, rzeki, ocean — płaska woda lub fale. Regulowana deska 96 cm i wydajne skrzydła sprawdzają się w każdych warunkach.',
    'features.f4.title': 'Gotowy w mniej niż 10 min',
    'features.f4.body': 'System szybkiego montażu masztu, regulacja stopy bez narzędzi. Mniej czasu na plaży, więcej czasu w powietrzu.',
    'features.f5.title': 'Zdejmowana kierownica',
    'features.f5.body': 'Kierownica w stylu hulajnogi odpina się w kilka sekund. Użyj jej do nauki równowagi i techniki pompowania, a gdy opanujesz unoszenie — jedź bez niej.',
    'how.eyebrow': 'JAK TO DZIAŁA',
    'how.title': 'Trzy kroki.<br>Jeden nałóg.',
    'how.s1.title': 'Wejdź i znajdź pozycję',
    'how.s1.body': 'Stań na szerokim pokładzie EVA, ustaw stopy na szerokość ramion. Deska jest wystarczająco stabilna, by stać na wodzie zanim jeszcze zaczniesz się ruszać.',
    'how.s2.title': 'Pompuj, by wznieść się',
    'how.s2.body': 'Zegnij kolana i rytmicznie przenoś ciężar przód-tył. Wydajne skrzydła zamieniają tę energię w siłę hydrodynamiczną — deska zaczyna się unosić.',
    'how.s3.title': 'Leć. Szybuj. Powtarzaj.',
    'how.s3.body': 'Gdy już jesteś w górze, pompuj dalej, żeby utrzymać lot. Większość jeźdźców osiąga pierwszy stabilny lot po 20–30 minutach — i nikt nie chce przestawać.',
    'specs.eyebrow': 'DANE TECHNICZNE',
    'specs.title': 'Szczegóły.',
    'specs.r1.label': 'Długość deski',
    'specs.r1.val': '96 cm (regulowana postawa)',
    'specs.r2.label': 'Wysokość masztu',
    'specs.r2.val': '65 cm',
    'specs.r3.label': 'Maks. waga zawodnika',
    'specs.r3.val': '100 kg',
    'specs.r4.label': 'Materiał pokładu',
    'specs.r4.val': 'Mata EVA, wzmocniony rdzeń',
    'specs.r5.label': 'Materiał masztu',
    'specs.r5.val': 'Włókno węglowe — lekkie i ultra-sztywne',
    'specs.r6.label': 'Kompatybilność foila',
    'specs.r6.val': 'Mocowanie uniwersalne — pasuje do większości marek',
    'specs.r7.label': 'Zalecany poziom',
    'specs.r7.val': 'Wszystkie poziomy — początkujący mile widziani',
    'specs.r8.label': 'Czas montażu',
    'specs.r8.val': 'Poniżej 10 minut',
    'specs.r9.label': 'Zestaw zawiera',
    'specs.r9.val': 'Deska, maszt, kadłub, skrzydło przednie i tylne, zestaw śrub',
    'lifestyle.quote': '„Gdy raz się uniesiesz, już nie chcesz przestawać."',
    'reviews.eyebrow': 'JEŹDŹCY',
    'reviews.title': 'Polecieli.<br>Są uzależnieni.',
    'reviews.r1.text': '„Jeżdżę na nim w spokojne dni na jeziorze, gdy nie ma fal. Stało się moim głównym narzędziem treningowym — i szczerze mówiąc, daje więcej frajdy niż większość sesji surfingowych."',
    'reviews.r1.role': 'Surfer · Malibu, CA',
    'reviews.r2.text': '„Pierwsze uniesienie osiągnęłam po 20 minutach. Nie spodziewałam się, że będzie tak naturalne — ruch pompowania wchodzi bardzo szybko. Pod koniec pierwszej sesji leciałam przez 10 sekund."',
    'reviews.r2.role': 'Wing Foiler · Tarifa, Hiszpania',
    'reviews.r3.text': '„Użyłem swojego foila surfingowego — pasował od razu. Jakość wykonania jest solidna — maszt z włókna węglowego jest naprawdę sztywny, zero luzu. To prawdziwy sprzęt, nie zabawka."',
    'reviews.r3.role': 'Foil Surfer · Lake Tahoe, CA',
    'buy.tab.photo': 'Zdjęcie produktu',
    'buy.tab.design': 'Wzór deski',
    'buy.name': 'Deska Pump Foil z kierownicą<br>96 cm',
    'buy.tagline': 'Każdy poziom · Maszt z węgla · Kompatybilność universalna · Pełny zestaw',
    'buy.cta': 'Zamów teraz',
    'buy.badge1': '🚚 Darmowa dostawa',
    'buy.badge2': '↩ 30-dniowy zwrot',
    'buy.badge3': '🔒 Bezpieczna płatność',
    'footer.copy': '© 2026 FoilRush. Wszelkie prawa zastrzeżone.',
    'preorder.badge': 'ZAMÓW TERAZ',
    'preorder.h1': 'Zarezerwuj swoją deskę.<br>Bądź pierwszy w powietrzu.',
    'preorder.sub': 'Przyjmujemy zamówienia przedsprzedażowe na pierwszą serię produkcyjną. Zarezerwuj bez płatności — potwierdzimy szczegóły przed wysyłką.',
    'preorder.form.h2': 'Zarezerwuj swój FoilRush',
    'preorder.form.sub': 'Wypełnij poniższy formularz. Nie wymagamy karty kredytowej — skontaktujemy się z Tobą, aby potwierdzić zamówienie.',
    'preorder.section.you': 'Twoje dane',
    'preorder.label.first': 'Imię',
    'preorder.label.last': 'Nazwisko',
    'preorder.label.email': 'Adres e-mail',
    'preorder.label.phone': 'Numer telefonu',
    'preorder.label.phone.opt': '(opcjonalnie)',
    'preorder.section.ship': 'Adres dostawy',
    'preorder.label.country': 'Kraj',
    'preorder.country.placeholder': 'Wybierz kraj…',
    'preorder.label.city': 'Miasto',
    'preorder.section.exp': 'Twoje doświadczenie',
    'preorder.label.level': 'Sporty wodne',
    'preorder.level.placeholder': 'Wybierz…',
    'preorder.level.beginner': 'Zupełny początkujący',
    'preorder.level.surfer': 'Surfer',
    'preorder.level.kite': 'Kitesurfer / Windsurfer',
    'preorder.level.foiler': 'Już jeżdżę na foilu',
    'preorder.level.wake': 'Wakeboarder / Wakefoiler',
    'preorder.level.other': 'Inny sport wodny',
    'preorder.level.note': 'Pomaga nam dobrać odpowiednie wskazówki startowe.',
    'preorder.label.message': 'Coś jeszcze?',
    'preorder.message.opt': '(opcjonalnie)',
    'preorder.message.ph': 'Pytania, marka foila którą posiadasz, specjalne życzenia…',
    'preorder.submit': 'Zarezerwuj mój FoilRush →',
    'preorder.legal': 'Wysyłając formularz zgadzasz się na kontakt w sprawie zamówienia. Płatność nie jest pobierana na tym etapie. Szanujemy Twoją prywatność.',
    'preorder.summary.note': 'Płatność nie jest pobierana teraz. Skontaktujemy się z Tobą przed wysyłką. Darmowa dostawa na cały świat.',
    'preorder.includes.title': 'Zestaw zawiera',
    'preorder.success.h3': 'Jesteś na liście!',
    'preorder.success.p': 'Dziękujemy za zamówienie. Wyślemy e-mail na adres',
    'preorder.success.p2': 'z potwierdzeniem i szacowanym terminem wysyłki.',
    'preorder.back': '← Powrót do produktu',
    'preorder.back.nav': '← Powrót do produktu',
    'preorder.name': 'Deska Pump Foil z kierownicą<br>96 cm',
    'preorder.kit.1': 'Deska 96 cm z matą antypoślizgową EVA',
    'preorder.kit.2': 'Maszt foilowy z włókna węglowego (65 cm)',
    'preorder.kit.3': 'Kadłub + skrzydło przednie i tylne',
    'preorder.kit.4': 'Kierownica w stylu hulajnogi (zdejmowana)',
    'preorder.kit.5': 'Kompletny zestaw śrub i osprzętu',
  }
};

let currentLang = localStorage.getItem('fr_lang') || 'en';
const USD_PRICE = 799;
let usdPlnRate = null; // fetched from NBP

// Fetch today's USD/PLN mid rate from NBP public API (no key needed)
async function fetchUsdPlnRate() {
  try {
    const res = await fetch('https://api.nbp.pl/api/exchangerates/rates/a/usd/today/?format=json');
    if (!res.ok) throw new Error('NBP rate unavailable');
    const data = await res.json();
    usdPlnRate = data.rates[0].mid;
  } catch {
    // Fallback: try last available rate (NBP may not publish on weekends/holidays)
    try {
      const res = await fetch('https://api.nbp.pl/api/exchangerates/rates/a/usd/last/1/?format=json');
      const data = await res.json();
      usdPlnRate = data.rates[0].mid;
    } catch {
      usdPlnRate = null;
    }
  }
}

function updatePriceDisplay(lang) {
  document.querySelectorAll('[data-price]').forEach(el => {
    if (lang === 'pl' && usdPlnRate) {
      const pln = Math.round(USD_PRICE * usdPlnRate);
      el.textContent = pln.toLocaleString('pl-PL') + ' zł';
    } else {
      el.textContent = '$' + USD_PRICE;
    }
  });

  document.querySelectorAll('[data-price-note]').forEach(el => {
    if (lang === 'pl' && usdPlnRate) {
      const rate = usdPlnRate.toFixed(4);
      el.textContent = `Szacowana wartość wg kursu NBP: 1 USD = ${rate} PLN`;
    } else {
      el.textContent = `Estimated value based on NBP exchange rate: 1 USD = ${usdPlnRate ? usdPlnRate.toFixed(4) + ' PLN' : '—'}`;
    }
    el.style.display = usdPlnRate ? '' : 'none';
  });
}

function applyLang(lang, save) {
  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'en' ? 'PL' : 'EN';
  currentLang = lang;
  if (save) localStorage.setItem('fr_lang', lang);
  updatePriceDisplay(lang);
}

// Fetch rate then apply saved language on load
fetchUsdPlnRate().then(() => applyLang(currentLang, false));

document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'pl' : 'en', true);
});

// ── Sticky nav ──
const nav = document.getElementById('site-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav-scrolled', window.scrollY > 80);
  }, { passive: true });
}

// ── Mobile menu toggle ──
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    navLinks.setAttribute('aria-hidden', String(!open));
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      navLinks.setAttribute('aria-hidden', 'true');
    });
  });
}

// ── Scroll-reveal with stagger delay ──
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = Number(entry.target.dataset.delay) || 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// ── Board view tabs ──
document.querySelectorAll('.view-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const view = tab.dataset.view;
    document.querySelectorAll('.view-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.view === view);
      t.setAttribute('aria-selected', String(t.dataset.view === view));
    });
    document.querySelectorAll('.view-panel').forEach(p => {
      p.classList.toggle('active', p.dataset.view === view);
    });
  });
});

// ── Cookie consent banner ──
(function() {
  if (localStorage.getItem('fr_cookies_ok')) return;

  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML = `
    <p id="cookie-text">We use local storage to remember your language preference. No tracking cookies are used.</p>
    <div class="cookie-actions">
      <button id="cookie-accept">Accept</button>
      <button id="cookie-decline">Decline</button>
    </div>
  `;
  document.body.appendChild(banner);

  // Translate banner text if lang is PL
  function translateBanner() {
    const lang = localStorage.getItem('fr_lang') || 'en';
    const text = document.getElementById('cookie-text');
    const accept = document.getElementById('cookie-accept');
    const decline = document.getElementById('cookie-decline');
    if (!text) return;
    if (lang === 'pl') {
      text.textContent = 'Używamy local storage do zapamiętania wybranego języka. Nie używamy żadnych cookies śledzących.';
      accept.textContent = 'Akceptuję';
      decline.textContent = 'Odrzucam';
    } else {
      text.textContent = 'We use local storage to remember your language preference. No tracking cookies are used.';
      accept.textContent = 'Accept';
      decline.textContent = 'Decline';
    }
  }
  translateBanner();

  // Re-translate if lang changes
  document.getElementById('lang-toggle').addEventListener('click', translateBanner);

  document.getElementById('cookie-accept').addEventListener('click', () => {
    localStorage.setItem('fr_cookies_ok', '1');
    banner.remove();
  });

  document.getElementById('cookie-decline').addEventListener('click', () => {
    // Declined — clear lang pref and remove banner
    localStorage.removeItem('fr_lang');
    localStorage.setItem('fr_cookies_ok', 'declined');
    banner.remove();
  });
})();
