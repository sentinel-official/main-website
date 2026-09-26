import { e as createComponent, r as renderTemplate, l as renderSlot, n as renderHead, o as defineScriptVars, g as addAttribute, h as createAstro } from './astro/server_BDwfCOmG.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const i18n = Astro2.locals.i18n;
  const {
    title = i18n.title,
    description = i18n.description,
    lang = i18n.locale,
    dir = i18n.dir
  } = Astro2.props;
  const { ogImageAlt } = i18n;
  const isMobile = Astro2.locals.isMobile ?? false;
  const SITE = "https://sentinel.co/";
  const canonical = new URL(Astro2.url.pathname, Astro2.site ?? SITE).toString();
  const ogImage = new URL("/assets/img/og-cover.png", Astro2.site ?? SITE).toString();
  const OG_LOCALES = {
    en: "en_US",
    es: "es_ES",
    zh: "zh_CN",
    ru: "ru_RU",
    de: "de_DE",
    fr: "fr_FR",
    ar: "ar_AR",
    fa: "fa_IR",
    pt: "pt_BR"
  };
  const ogLocale = OG_LOCALES[lang] ?? lang;
  return renderTemplate(_a || (_a = __template(["<html", "", '> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><meta name="robots" content="index, follow, max-image-preview:large"><link rel="canonical"', '><!-- OpenGraph --><meta property="og:type" content="website"><meta property="og:site_name" content="Sentinel"><meta property="og:locale"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt"', '><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@sentinelp2p"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:alt"', `><meta name="theme-color" content="#0156FC"><!-- Preload the latin Funnel Display woff2 (the headline/CTA face, U+0000-00FF).
         Without this the hero CTAs first paint in the system-ui fallback, then
         visibly resize when Funnel Display swaps in on mobile refresh (FOUC flash).
         Preloading makes the real font available at first paint. Keep this URL in
         sync with the /* latin */ @font-face src in global.css. --><link rel="preload" href="/assets/fonts/d3835081-8789-4264-9ac0-d8d2f7d8b482.woff2" as="font" type="font/woff2" crossorigin><!-- Critical inline CSS \u2014 applied on first paint, BEFORE the external
         global.css <link> loads. Without this the un-styled skip link flashes
         visibly in the top-left and the dark background pops in late (FOUC).
         These rules duplicate the canonical ones in global.css; keep them in
         sync if the skip link / base background design changes. --><style>
      html, body { margin:0; background:#0b0c10; color:#eaeaea; }
      /* Pre-hide the skip link until it is focused. Its full styling lives only
         in the external global.css, so without this it paints visibly in the
         top-left until that stylesheet loads. Mirrors global.css .sn-skip. */
      .sn-skip { position:absolute; left:8px; top:8px; transform:translateY(-200%); }
      .sn-skip:focus { transform:translateY(0); }
    </style><!-- Seed the active locale before the React island hydrates, so the client's
         globals bootstrap (lib/globals.ts) re-applies the same locale the server
         rendered with \u2014 keeping SSR markup and hydration in sync. --><script>(function(){`, "\n      window.__locale = locale;\n      window.__isMobile = isMobile;\n    })();<\/script>", '</head> <body> <a class="sn-skip" href="#main">Skip to content</a> ', ' <!-- Ambient music: OFF by default, pure intent toggle. --> <div id="sn-music"> <span id="sn-music-label" aria-hidden="true">Sound &middot; off</span> <button id="sn-music-btn" type="button" aria-pressed="false" aria-label="Unmute ambient music" title="Unmute ambient music"> <svg class="sn-music-play" width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true"><path d="M8.2 1.1a.7.7 0 0 1 1.1.6v10.6a.7.7 0 0 1-1.1.6L4.6 10H2.4A1.4 1.4 0 0 1 1 8.6V5.4C1 4.6 1.6 4 2.4 4h2.2l3.6-2.9z" fill="currentColor"></path><path d="M11.2 4.8 14.8 9.2M14.8 4.8 11.2 9.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"></path></svg> <span class="sn-music-bars" aria-hidden="true"><i></i><i></i><i></i></span> </button> <audio id="sn-music-audio" src="/assets/media/ambient-music.mp3" loop preload="auto"></audio> </div> <script src="/scripts/music.js"><\/script> </body> </html>'])), addAttribute(lang, "lang"), addAttribute(dir, "dir"), title, addAttribute(description, "content"), addAttribute(canonical, "href"), addAttribute(ogLocale, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonical, "content"), addAttribute(ogImage, "content"), addAttribute(ogImageAlt, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(ogImageAlt, "content"), defineScriptVars({ locale: i18n.locale, isMobile }), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/alexlitreev/Projects/main-website/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
