
# Static HTML Export — Assise Modern School

Aap chahte ho ek standalone `.html` file jise kahin bhi (Hostinger, GitHub Pages, Netlify drop, ya simple shared hosting) upload karke chala sako — bina Node/build ke.

## Deliverable

`/mnt/documents/assise-modern-school/` folder me:

```
index.html        — poori site ek single HTML file me (saare 14 sections)
styles.css        — design system + dark mode + animations
script.js         — sticky nav, scroll progress, dark mode toggle,
                    mobile menu, search overlay, FAQ accordion,
                    testimonials carousel, counter animations,
                    scroll-reveal (IntersectionObserver based)
assets/           — 12 generated images (hero, campus, lab, library,
                    sports, classroom, cultural, principal, teacher1-4)
README.txt        — upload instructions
```

Sab kuch zip karke bhi dunga: `assise-modern-school.zip` taaki ek hi download me mil jaye.

## Approach

1. Current React/TSX components (`src/routes/index.tsx`, `Nav.tsx`, `Reveal.tsx`) ka JSX padh ke equivalent semantic HTML markup likhunga — same structure, same content, same sections order.
2. Tailwind v4 utility classes ko ek custom `styles.css` me convert karunga (sirf jo classes use ho rahi hain — purge style). Design tokens (Deep Navy `#0F172A`, Royal Blue, Warm Gold, Poppins/Inter/Fraunces) wahi rakhunga.
3. Framer Motion animations ko vanilla JS + CSS me port karunga:
   - Scroll reveal → `IntersectionObserver` + `.is-visible` class
   - Counters → `requestAnimationFrame` tween
   - Parallax hero → `transform` on scroll
   - Carousel → simple index-based slider with prev/next + auto-rotate
4. Fonts Google Fonts CDN se `<link>` tag ke through load honge (TanStack ban yahan apply nahi hota — yeh plain HTML hai).
5. Images `assets/` folder se relative paths se load hongi.
6. Dark mode → `localStorage` + `data-theme` attribute toggle.

## Tradeoffs aap jaan lo

- React state / TanStack routing nahi hogi — single page hi hogi (jo aapki current site bhi effectively hai).
- Future me content edit karna hoga to HTML directly edit karna padega (React component reusability nahi).
- Yeh export current TanStack project me kuch nahi badlega — alag se generate hoga `/mnt/documents/` me, taaki aapka live preview waise hi chale.

## Out of scope

- Server functions / forms backend (contact form sirf UI rahega, submission ke liye Formspree/Web3Forms jaisa external service chahiye — agar chahiye to bata dena, action URL add kar dunga).
- SEO sitemap.xml / robots.txt (chahiye to bol dena).
