/* ==========================================================
   Ventura Dental Care – shared content & behaviour
   EDIT CLINIC DETAILS, SERVICES AND FAQs HERE.
   Every page reads from this file.
   ========================================================== */

/* DEMO DATA: phone, address and hours below are imaginary – replace with the clinic's real details */
const SITE = {
  name: 'Ventura Dental Care',
  phone: '(805) 555-0142',
  tel: '+18055550142',
  city: 'Ventura, CA',
  address: ['2450 Harbor Blvd, Suite 210', 'Ventura, CA 93001'],
  hours: [['Mon–Thu', '8:30 am – 5:00 pm'], ['Friday', '8:30 am – 2:00 pm'], ['Saturday', '9:00 am – 1:00 pm']],
  mapQuery: 'Harbor Blvd, Ventura, CA 93001', // exact clinic address works best
  formEndpoint: '',                          // e.g. 'https://formspree.io/f/xxxxxx' – empty = demo mode
  instagram: '#',
  facebook: '#'
};

const SERVICES = [
  { slug: 'cosmetic', name: 'Cosmetic Dentistry', t1: 'Cosmetic', t2: 'Dentistry',
    img: 'service-cosmetic.jpg',
    desc: 'Brighter, more confident smiles designed around your face, your features and your goals.',
    items: ['Teeth Whitening', 'Porcelain Veneers', 'Smile Makeovers', 'Composite Bonding'],
    heading: 'Natural, confident smiles, designed around your face and features',
    intro: ['A beautiful smile should look like you, only brighter. Our cosmetic treatments are planned around your facial proportions, skin tone and personality, so results always look natural.',
            'Every plan starts with a relaxed consultation and digital smile preview, so you can see the outcome before treatment begins.'],
    indicators: ['Stained or yellow teeth', 'Chipped or worn edges', 'Gaps between teeth', 'Uneven smile line', 'Old, dark fillings', 'Hiding your smile in photos'],
    cards: [
      ['Teeth Whitening', 'Professional whitening that lifts years of stains safely, with minimal sensitivity.', 'tech-4.jpg'],
      ['Porcelain Veneers', 'Ultra-thin, handcrafted veneers that reshape and brighten your smile.', 'smile.jpg'],
      ['Smile Makeovers', 'A complete, step-by-step plan combining treatments for your ideal smile.', 'mission.jpg'],
      ['Composite Bonding', 'Quick, conservative repairs for chips, gaps and uneven edges.', 'service-wellness.jpg']] },
  { slug: 'restorative', name: 'Restorative Dentistry', t1: 'Restorative', t2: 'Dentistry',
    img: 'service-restorative.jpg',
    desc: 'Rebuild strength, comfort and function with natural-looking, long-lasting restorations.',
    items: ['Dental Implants', 'Crowns & Bridges', 'Tooth-Coloured Fillings', 'Root Canal Therapy'],
    heading: 'Strength, comfort and function, restored to look completely natural',
    intro: ['Whether you have one damaged tooth or need a full-mouth restoration, we rebuild your smile with durable materials that blend in seamlessly.',
            'Digital planning and precise techniques mean fewer visits, comfortable treatment and results built to last.'],
    indicators: ['Missing teeth', 'Pain when chewing', 'Cracked or broken teeth', 'Loose or failing crowns', 'Sensitivity to hot & cold', 'Avoiding certain foods'],
    cards: [
      ['Dental Implants', 'Permanent, natural-feeling replacements for one or more missing teeth.', 'tech-1.jpg'],
      ['Crowns & Bridges', 'Custom restorations that protect weak teeth and fill gaps.', 'smile.jpg'],
      ['Tooth-Coloured Fillings', 'Strong, invisible fillings that match your natural teeth.', 'tech-4.jpg'],
      ['Root Canal Therapy', 'Gentle treatment that relieves pain and saves the natural tooth.', 'service-preventive.jpg']] },
  { slug: 'preventive', name: 'Preventive Care', t1: 'Preventive', t2: 'Care',
    img: 'service-preventive.jpg',
    desc: 'Regular, thorough care that keeps your teeth and gums healthy for life.',
    items: ['Check-ups & Cleanings', 'Digital X-Rays', 'Gum Health', 'Children’s Dentistry'],
    heading: 'Healthy smiles for life, starting with thorough, gentle care',
    intro: ['Prevention is the most comfortable and affordable dentistry there is. Regular check-ups let us catch small issues early, before they become bigger problems.',
            'We take time to explain what we see and give you simple, practical advice for keeping your teeth and gums healthy at home.'],
    indicators: ['Bleeding gums', 'Bad breath', 'Overdue check-up', 'Plaque or tartar build-up', 'Tooth sensitivity', 'Kids due for a first visit'],
    cards: [
      ['Check-ups & Cleanings', 'Thorough exams and professional cleaning every six months.', 'service-restorative.jpg'],
      ['Digital X-Rays', 'Low-dose imaging that shows what the eye can’t see.', 'tech-6.jpg'],
      ['Gum Health', 'Early treatment of gum disease to protect your teeth long-term.', 'service-cosmetic.jpg'],
      ['Children’s Dentistry', 'Friendly, patient care that helps kids feel at ease.', 'smile.jpg']] },
  { slug: 'wellness', name: 'Smile Wellness', t1: 'Smile', t2: 'Wellness',
    img: 'service-wellness.jpg',
    desc: 'Care that goes beyond teeth: comfort, sleep and jaw health, tailored to you.',
    items: ['Clear Aligners', 'Custom Night Guards', 'TMJ Relief', 'Sleep Apnea Appliances'],
    heading: 'Care that goes beyond teeth, for better sleep, comfort and confidence',
    intro: ['Your bite, jaw and airway affect how you sleep, feel and function every day. Our wellness treatments address the causes, not just the symptoms.',
            'From discreet clear aligners to custom night guards and sleep appliances, every solution is made precisely for you.'],
    indicators: ['Snoring or interrupted sleep', 'Morning headaches', 'Jaw tension or clenching', 'Worn or flattened teeth', 'Clicking jaw', 'Crooked or crowded teeth'],
    cards: [
      ['Clear Aligners', 'Discreet, removable aligners that straighten teeth gradually.', 'smile.jpg'],
      ['Custom Night Guards', 'Comfortable guards that protect teeth from grinding.', 'tech-4.jpg'],
      ['TMJ Relief', 'Targeted care to ease jaw pain, tension and clicking.', 'mission.jpg'],
      ['Sleep Apnea Appliances', 'Oral appliances that keep airways open for quieter, deeper sleep.', 'tech-1.jpg']] }
];

const FAQS = [
  { cat: 'General', home: true, q: 'What should I expect during my first visit?', a: 'A relaxed consultation, a full check-up with digital X-rays if needed, and a clear explanation of any treatment options and costs before anything begins.' },
  { cat: 'General', q: 'Are you accepting new patients?', a: 'Yes. New patients of all ages are welcome. Book online or call us and we’ll find a time that suits you.' },
  { cat: 'General', q: 'How often should I have a check-up?', a: 'For most people every six months. If you have gum concerns or ongoing treatment we may suggest visits more often.' },
  { cat: 'General', q: 'Do you see dental emergencies?', a: 'Yes. Call us as early as possible and we’ll do our best to see you the same day.' },
  { cat: 'Treatments', q: 'Is professional teeth whitening safe?', a: 'Yes. Professional whitening is carefully controlled and tailored to your teeth, which keeps sensitivity low and results even.' },
  { cat: 'Treatments', q: 'How long do dental implants last?', a: 'With good care and regular check-ups, implants can last decades and often a lifetime.' },
  { cat: 'Treatments', q: 'Am I a candidate for clear aligners?', a: 'Most adults and teens with mild to moderate crowding or spacing are. A quick scan and consultation will confirm.' },
  { cat: 'Insurance & Payment', home: true, q: 'Do you accept dental insurance?', a: 'We work with most major insurance plans and will help you understand your coverage. Flexible payment options are also available.' },
  { cat: 'Insurance & Payment', q: 'Do you offer payment plans?', a: 'Yes. We offer flexible monthly plans so treatment fits comfortably into your budget.' },
  { cat: 'Aftercare', home: true, q: 'What foods should I avoid after my procedure?', a: 'For the first 24 hours, avoid very hot, hard or sticky foods. We’ll give you personalised aftercare instructions for your treatment.' },
  { cat: 'Aftercare', home: true, q: 'What should I do if I experience sensitivity or swelling?', a: 'Mild sensitivity is normal and usually fades within a few days. If swelling increases or pain persists, call us and we’ll see you as soon as possible.' }
];

/* ======================== helpers ======================== */
const $ = (s, c = document) => c.querySelector(s), $$ = (s, c = document) => [...c.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const range = (p, a, b) => clamp((p - a) / (b - a));
const ease = t => 1 - Math.pow(1 - t, 3);
const progressOf = el => { const r = el.getBoundingClientRect(); return clamp(-r.top / (r.height - innerHeight)); };
const svcUrl = s => `service.html?s=${s.slug}`;
const mediaDiv = (src, cls = '', label = '') => `<div class="media ${cls}" data-img="${src}" data-label="${label}"></div>`;
const ICON = {
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6Z"/></svg>',
  out: '<svg viewBox="0 0 12 12"><path d="M4 8l4-4M4.5 4H8v3.5" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>',
  down: '<svg viewBox="0 0 12 12"><path d="m3 4.5 3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>',
  burger: '<path d="M1 3h10M1 6h10M1 9h10" stroke="currentColor" stroke-width="1.2"/>',
  close: '<path d="M2.5 2.5l7 7M9.5 2.5l-7 7" stroke="currentColor" stroke-width="1.2"/>'
};
const socials = `<div class="socials"><a href="${SITE.instagram}" aria-label="Instagram">${ICON.ig}</a><a href="${SITE.facebook}" aria-label="Facebook">${ICON.fb}</a></div>`;
const body = document.body;
const page = body.dataset.page || '';

/* ======================== shared markup ======================== */
const cardHTML = (s, extra = '') => `<a class="card" href="${svcUrl(s)}" data-close ${extra}>${mediaDiv(s.img)}<span>${s.name}<i>↗</i></span></a>`;
const rollLink = (href, t, d) => `<a href="${href}" data-close data-st style="--d:${d}"><span data-t="${t}">${t}</span></a>`;

body.insertAdjacentHTML('afterbegin', `
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="logo-mark" viewBox="-14 -14 498 258">
    <g fill="none" stroke="currentColor" stroke-width="22" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 15 90 215 165 12"/><path d="M165 95V218H232A103 103 0 0 0 232 12H165"/><path d="M430 47.5A105 105 0 1 0 430 182.5"/>
    </g>
  </symbol>
</svg>
<header class="hdr" id="hdr">
  <div class="hdr-l">
    <a href="index.html" class="logo hide-on-menu" aria-label="${SITE.name} home"><svg><use href="#logo-mark"/></svg><span>Ventura<br>Dental Care</span></a>
    <button class="navbtn" id="menuBtn" aria-expanded="false">Menu <svg viewBox="0 0 12 12" id="menuIco">${ICON.burger}</svg></button>
    <button class="navbtn svc-btn hide-on-menu" id="svcBtn">Services ${ICON.down}</button>
  </div>
  ${body.dataset.tagline ? `<p class="hdr-tag hide-on-menu">${body.dataset.tagline}</p>` : ''}
  <div class="hdr-r hide-on-menu">
    <a href="contact.html" class="navbtn pf">Patient form ${ICON.out}</a>
    <a href="tel:${SITE.tel}" class="phone">${SITE.phone}<small>${SITE.city}</small></a>
    <button class="pill book" data-book>Book A Call <span class="ico">+</span></button>
  </div>
</header>
<div class="menu" id="menu" aria-hidden="true">
  <div class="menu-l">
    <div data-st style="--d:6">${socials}</div>
    <a class="menu-row" href="contact.html" data-close data-st style="--d:7">Patient form <span>↗</span></a>
    <a class="menu-row" href="faq.html" data-close data-st style="--d:8">FAQ <span>↗</span></a>
  </div>
  <div class="menu-r">
    <h3 class="serif" data-st style="--d:0">Services:</h3>
    <div class="cards">${SERVICES.map((s, i) => cardHTML(s, `data-st style="--d:${i * .5 + 1}"`)).join('')}</div>
    <nav class="menu-big serif">
      ${rollLink('about.html', 'About Us', 2)}${rollLink('laboratory.html', 'Our Lab', 3)}
      ${rollLink('index.html#technology', 'Technology', 4)}${rollLink('contact.html', 'Contact', 5)}
    </nav>
  </div>
</div>
<div class="drop" id="drop" aria-hidden="true">
  <div class="drop-panel"><button class="drop-close" id="dropClose">Services ✕</button><div class="cards">${SERVICES.map(s => cardHTML(s)).join('')}</div></div>
</div>
<div class="modal" id="book" aria-hidden="true" role="dialog" aria-label="Book a call">
  <button class="modal-close" id="bookClose">Close <i>✕</i></button>
  <div class="modal-body"><p class="lead">Ready to book or just have questions? We're here for you.</p><div class="form-slot" data-form="light"></div></div>
  <div class="modal-word serif">Book a call</div>
</div>`);

body.insertAdjacentHTML('beforeend', `
${body.dataset.noCta !== undefined ? '' : `
<section class="contact" id="contact">
  <div class="contact-grid">
    <h2 class="serif" data-fade>Ready for your<br>new Smile? <em>Book a call.</em></h2>
    <div class="form-slot" data-form="dark"></div>
  </div>
</section>`}
<footer class="foot">
  <div class="foot-grid">
    <div><h5>Services</h5><ul>${SERVICES.map(s => `<li><a href="${svcUrl(s)}">${s.name}</a></li>`).join('')}</ul></div>
    <div><h5>Our Clinic</h5><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About us</a></li><li><a href="laboratory.html">Our Lab</a></li><li><a href="faq.html">FAQ</a></li><li><a href="contact.html">Contact</a></li></ul></div>
    <div><h5>Location</h5>
      <address><strong>Ventura</strong>${SITE.address.join('<br>')}</address>
      <a class="tel" href="tel:${SITE.tel}">${SITE.phone}</a>
      <dl class="hours">${SITE.hours.map(h => `<dt>${h[0]}</dt><dd>${h[1]}</dd>`).join('')}</dl>
    </div>
    <div><h5>Find us</h5><iframe class="map" title="${SITE.name} location" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed"></iframe></div>
  </div>
  <div class="foot-bot">
    <a href="index.html" class="logo"><svg><use href="#logo-mark"/></svg><span>Copyright © ${new Date().getFullYear()}<br>${SITE.name}</span></a>
    <span>Privacy Policy · Accessibility Statement · Terms &amp; Conditions</span>
    ${socials}
  </div>
</footer>`);

/* FAQ lists: <div data-faq="home"> (4 picks) or <div data-faq="all"> (grouped by category) */
const faqItem = f => `<div class="faq-item"><button class="faq-q">${f.q}<i>+</i></button><div class="faq-a"><div><p>${f.a}</p></div></div></div>`;
$$('[data-faq]').forEach(el => {
  if (el.dataset.faq === 'all') {
    const cats = [...new Set(FAQS.map(f => f.cat))];
    el.innerHTML = cats.map(c => `<h3 class="faq-cat">${c}</h3>${FAQS.filter(f => f.cat === c).map(faqItem).join('')}`).join('');
  } else el.innerHTML = FAQS.filter(f => f.home).map(faqItem).join('');
});

/* Appointment form, cloned into every .form-slot */
const formHTML = `
<form class="bform" novalidate>
  <div class="fields">
    <span class="lbl">Choose a service:</span>
    <div class="radios">
      <label class="r"><input type="radio" name="service" value="Cosmetic" checked>Cosmetic</label>
      <label class="r"><input type="radio" name="service" value="Restorative">Restorative</label>
      <label class="r"><input type="radio" name="service" value="Preventive / Check-up">Check-up</label>
      <label class="r"><input type="radio" name="service" value="Other">Other</label>
    </div>
    <div class="row">
      <input class="field" name="name" placeholder="Name" required autocomplete="name">
      <input class="field" name="phone" type="tel" placeholder="Phone number" required autocomplete="tel">
    </div>
    <div class="row">
      <input class="field" name="email" type="email" placeholder="Email" required autocomplete="email">
      <input class="field" name="datetime" type="datetime-local" aria-label="Preferred date and time" required>
    </div>
    <input class="hp" name="_gotcha" tabindex="-1" autocomplete="off">
    <div class="msg">
      <textarea class="field" name="message" placeholder="Message"></textarea>
      <button class="send" type="submit" aria-label="Send request"><svg width="14" height="14" viewBox="0 0 14 14"><path d="m5 2 5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>
    </div>
  </div>
  <div class="done" role="status"><b>Thank you!</b><span class="done-txt"></span></div>
</form>`;
$$('.form-slot').forEach(slot => {
  slot.innerHTML = formHTML;
  if (slot.dataset.form === 'light') slot.firstElementChild.classList.add('light-form');
});
$$('.bform').forEach(f => f.addEventListener('submit', async e => {
  e.preventDefault();
  const bad = $$('[required]', f).find(i => !i.value.trim() || (i.type === 'email' && !/^\S+@\S+\.\S+$/.test(i.value)));
  if (bad) { bad.focus(); bad.style.borderColor = '#e5484d'; setTimeout(() => bad.style.borderColor = '', 1800); return; }
  const data = new FormData(f);
  if (data.get('_gotcha')) return;
  try { if (SITE.formEndpoint) await fetch(SITE.formEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } }); } catch (err) {}
  const first = (data.get('name') || '').trim().split(' ')[0];
  $('.done-txt', f).textContent = `${first ? first + ', w' : 'W'}e've received your request and will call you shortly to confirm your appointment.`;
  f.classList.add('sent');
}));

/* ======================== overlays ======================== */
const hdr = $('#hdr'), menu = $('#menu'), drop = $('#drop'), book = $('#book');
function openMenu(on) {
  menu.classList.toggle('open', on); menu.setAttribute('aria-hidden', !on);
  hdr.classList.toggle('menu-open', on); $('#menuBtn').setAttribute('aria-expanded', on);
  $('#menuIco').innerHTML = on ? ICON.close : ICON.burger;
  body.classList.toggle('lock', on);
  if (on) hdr.classList.remove('hide');
}
function openDrop(on) { drop.classList.toggle('open', on); drop.setAttribute('aria-hidden', !on); }
function openBook(on) {
  book.classList.toggle('open', on); book.setAttribute('aria-hidden', !on); body.classList.toggle('lock', on);
  if (on) setTimeout(() => $('input[name=name]', book).focus({ preventScroll: true }), 700);
}
$('#menuBtn').addEventListener('click', () => { openDrop(false); openMenu(!menu.classList.contains('open')); });
$('#svcBtn').addEventListener('click', () => openDrop(true));
$('#dropClose').addEventListener('click', () => openDrop(false));
drop.addEventListener('click', e => { if (e.target === drop) openDrop(false); });
document.addEventListener('click', e => {
  if (e.target.closest('[data-book]')) { openMenu(false); openDrop(false); openBook(true); }
  if (e.target.closest('[data-close]')) { openMenu(false); openDrop(false); }
  const q = e.target.closest('.faq-q');
  if (q) { const it = q.parentElement, open = it.classList.contains('open'); $$('.faq-item', it.parentElement).forEach(x => x.classList.remove('open')); if (!open) it.classList.add('open'); }
});
$('#bookClose').addEventListener('click', () => openBook(false));
document.addEventListener('keydown', e => { if (e.key === 'Escape') { openMenu(false); openDrop(false); openBook(false); } });

/* ======================== scroll engine ======================== */
const scrollFns = [];
const onScroll = fn => scrollFns.push(fn);
let lastY = scrollY, ticking = false, wordSets = [];

function frame() {
  ticking = false;
  const y = scrollY, vh = innerHeight;
  if (page !== 'home' && !menu.classList.contains('open')) {
    const top = y < 30;
    hdr.classList.toggle('solid', !top);
    hdr.classList.toggle('on-dark', top && body.dataset.header === 'dark');
    hdr.classList.toggle('hide', !top && y > 300 && y > lastY + 2);
    if (y < lastY - 2) hdr.classList.remove('hide');
  }
  wordSets.forEach(({ el, spans }) => {
    const r = el.getBoundingClientRect();
    const n = Math.round(clamp((vh * .85 - r.top) / (r.height + vh * .45)) * spans.length);
    spans.forEach((s, i) => s.classList.toggle('on', i < n));
  });
  scrollFns.forEach(fn => fn(y, vh));
  lastY = y;
}
const requestFrame = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
addEventListener('scroll', requestFrame, { passive: true });
addEventListener('resize', requestFrame);

/* Runs after the page's own script has built its markup */
document.addEventListener('DOMContentLoaded', () => {
  $$('[data-img]').forEach(el => { const src = el.dataset.img; if (!src) return; const im = new Image(); im.onload = () => { el.style.backgroundImage = `url("${src}")`; el.classList.add('loaded'); }; im.src = src; });
  $$('video[data-src]').forEach(v => { v.addEventListener('loadeddata', () => v.parentElement.classList.add('loaded'), { once: true }); v.src = v.dataset.src; });
  wordSets = $$('[data-words]').map(el => { el.innerHTML = el.textContent.trim().split(/\s+/).map(w => `<span>${w}</span>`).join(' '); return { el, spans: $$('span', el) }; });
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .15 });
  $$('[data-fade]').forEach(el => io.observe(el));
  frame();
});
