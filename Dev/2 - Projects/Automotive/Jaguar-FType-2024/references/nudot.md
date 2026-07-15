
<!DOCTYPE html>
<html lang="zh-TW">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>核點 Nudot Studio｜台中網頁設計 × 品牌視覺升級 × 動態特效</title>

  <script>
    (function () {
      try {
        var raw = sessionStorage.getItem('nudot:page-transition');
        if (!raw) return;
        var payload = JSON.parse(raw);
        if (payload && payload.at && Date.now() - payload.at < 12000) {
          document.documentElement.classList.add('has-pending-page-transition');
        }
      } catch (error) { }
    })();
  </script>

  <!-- Google Analytics 4 (GA4) -->

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-N53QVZL8TL"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-N53QVZL8TL');
  </script>

<!-- SEO -->
  <meta name="description" content="專注於台中網頁設計的頂尖團隊——核點設計 NUDOT。我們深耕高階網頁設計、動態特效設計與品牌視覺升級。結合流體極簡美學與高階前端技術，為企業打造具備國際大器格局的沉浸式互動網站，讓數位體驗成為您最強的商業資產。">
  <meta name="keywords" content="台中網頁設計, 網頁設計, 動態特效設計, 品牌視覺升級, 高階網頁設計, 互動網站設計, UIUX設計, 品牌設計, 企業官網改版, GSAP動態網頁, NUDOT, 核點設計, 台中網站設計, 台中視覺設計">
  <meta name="robots" content="index, follow">
  <meta name="author" content="核點設計 NUDOT">
  <meta name="theme-color" content="#030303">
  <meta name="format-detection" content="telephone=no">
  <link rel="canonical" href="https://nudot.com.tw/">

  <meta property="og:type" content="website">
  <meta property="og:url" content="https://nudot.com.tw/">
  <meta property="og:title" content="核點設計 NUDOT｜台中網頁設計 × 動態特效設計 × 品牌視覺升級">
  <meta property="og:description" content="專注於台中網頁設計的頂尖團隊——核點設計 NUDOT。深耕高階網頁設計、動態特效設計與品牌視覺升級，為企業打造具備國際大器格局的沉浸式互動網站。">
  <meta property="og:image" content="https://nudot.com.tw/images/og.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="zh_TW">
  <meta property="og:site_name" content="核點設計 NUDOT">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="核點設計 NUDOT｜台中網頁設計 × 動態特效設計 × 品牌視覺升級">
  <meta name="twitter:description" content="專注於台中網頁設計的頂尖團隊——核點設計 NUDOT。深耕高階網頁設計、動態特效設計與品牌視覺升級，為企業打造具備國際大器格局的沉浸式互動網站。">
  <meta name="twitter:image" content="https://nudot.com.tw/images/og.jpg">

  <!-- Preconnects (only origins actually used at first paint) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://use.typekit.net" crossorigin>
  <link rel="preconnect" href="https://p.typekit.net" crossorigin>
  <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
  <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">

  <!-- LCP boosters: brand logo -->
  <link rel="preload" as="image" href="images/pc_logo.svg" fetchpriority="high">

  <!-- LCP boosters: hero slide-0 video — 趁 loader 動畫期間就把影片下載到瀏覽器快取,
       loader 結束後 WebGLManager 創 vid.src 時直接 hit cache,不用再等網路。
       NOTE: <link rel="preload" as="video"> 不在 WHATWG 規範白名單內(會被忽略 + 噴警告),
       改用 hidden <video preload="auto"> 觸發跟正式 <video> 元素一樣的 Range request,
       確保 HTTP cache 能被後面的 WebGLManager 真正命中。 -->
  <script>
    (function () {
      var isDesktop = !!(window.matchMedia && window.matchMedia('(min-width: 768px)').matches);
      var src = isDesktop
        ? 'images/home/slider1/slider01.mp4'
        : 'images/home/slider1/slider01_s.mp4';
      var v = document.createElement('video');
      v.src = src;
      v.preload = 'auto';
      v.muted = true;
      v.playsInline = true;
      v.loop = true;
      v.setAttribute('aria-hidden', 'true');
      v.setAttribute('muted', '');
      v.setAttribute('playsinline', '');
      v.setAttribute('webkit-playsinline', '');
      // 手機版直接給 autoplay 屬性，確保 iOS Safari / Android Chrome 無需使用者互動即可播放
      if (!isDesktop) { v.autoplay = true; v.setAttribute('autoplay', ''); }
      // 放在 viewport 內讓 browser 給高優先級（非 Idle），避免被降速
      v.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;object-fit:cover;opacity:0;pointer-events:none;z-index:-1';
      // <body> 還沒就先掛在 documentElement;DOMContentLoaded 後再搬到 body 確保正常清理
      (document.body || document.documentElement).appendChild(v);
      v.load(); // 顯式觸發載入,確保 Range request 進 HTTP cache
      var playPromise = v.play();
      if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(function () { });
      // 🎯 把 prewarm element 暴露給 WebGLManager 複用：index=0 直接用這個已在 decode 的 element，
      //    省去第二個 <video> 從零 demux/decode 第一幀的延遲，消除 uTexReady=0 的黑屏空窗。
      window._prewarmVideo = { el: v, src: src };
      // prewarm 由 WebGLManager 接管後不再自動清除；若 8 秒後仍無人認領則正常清理。
      // 🛡️ 但若 (a) 它已被升格為 hero 可見背景（dataset.ndPromoted），或
      //         (b) DOMContentLoaded 還沒發生（慢速網路 defer scripts 還在載），
      //    就不能移除，否則會把使用者正在看的背景拔掉造成黑屏。
      (function scheduleCleanup() {
        window.setTimeout(function () {
          if (!(window._prewarmVideo && window._prewarmVideo.el === v)) return; // 已被認領
          if (v.dataset.ndPromoted === '1' || document.readyState === 'loading') {
            scheduleCleanup(); // 還在用 / 頁面還沒 ready → 再等 8 秒重查
            return;
          }
          window._prewarmVideo = null;
          if (v && v.parentNode) {
            v.removeAttribute('src');
            try { v.load(); } catch (_) { }
            v.parentNode.removeChild(v);
          }
        }, 8000);
      })();
    })();
  </script>

  <!-- Non-blocking: Adobe Fonts -->
  <link rel="preload" as="style" href="https://use.typekit.net/upd0woi.css">
  <link rel="stylesheet" href="https://use.typekit.net/upd0woi.css" media="print" onload="this.media='all'">
  <noscript>
    <link rel="stylesheet" href="https://use.typekit.net/upd0woi.css">
  </noscript>

  <!-- Non-blocking: Google Fonts (combined into one request) -->
  <link rel="preload" as="style"
    href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Single:wght@100..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Zalando+Sans+SemiExpanded:ital,wght@0,200..900;1,200..900&display=swap">
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Single:wght@100..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Zalando+Sans+SemiExpanded:ital,wght@0,200..900;1,200..900&display=swap"
    media="print" onload="this.media='all'">
  <noscript>
    <link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Single:wght@100..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Zalando+Sans+SemiExpanded:ital,wght@0,200..900;1,200..900&display=swap">
  </noscript>

  <link rel="icon" href="images/fav.png" type="image/png">
  <!-- Critical inline: page-transitions (formerly page-transitions.css) -->
  <style>
    :root {
      --pt-bg: #000;
      --pt-top: -102%;
      --pt-bottom: 102%
    }

    html.is-page-transitioning,
    html.is-page-transitioning body {
      cursor: progress
    }
  
h1 {
  margin: 0;
  padding: 0;
  font-size: 100%;      
  font-weight: normal;  
  line-height: 1;       
  font-family: inherit; 
  vertical-align: baseline;
  box-sizing: border-box;
}

h3 {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font-weight: normal;
}

    .page-transition-shell {
      position: fixed;
      inset: 0;
      z-index: 300000;
      pointer-events: none;
      opacity: 0;
      visibility: hidden
    }

    .page-transition-shell.is-active {
      opacity: 1;
      visibility: visible
    }

    html.has-pending-page-transition .page-transition-shell {
      opacity: 1;
      visibility: visible
    }

    .page-transition-curtain {
      position: absolute;
      inset: 0;
      opacity: 0;
      --pt-top: -102%;
      --pt-bottom: 102%
    }

    .page-transition-curtain::before,
    .page-transition-curtain::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 60vh;
      background: var(--pt-bg);
      will-change: transform
    }

    .page-transition-curtain::before {
      top: 0;
      transform: translateY(var(--pt-top))
    }

    .page-transition-curtain::after {
      bottom: 0;
      transform: translateY(var(--pt-bottom))
    }

    html.has-pending-page-transition .page-transition-curtain {
      opacity: 1;
      --pt-top: 0%;
      --pt-bottom: 0%
    }

    .page-transition-frame,
    html.has-pending-page-transition .page-transition-frame,
    .page-transition-loader,
    html.has-pending-page-transition .page-transition-loader,
    .page-transition-counter,
    .page-transition-counter span,
    .page-transition-panel,
    html.has-pending-page-transition .page-transition-panel {
      display: none !important
    }

    @media (max-width:767px) {

      .page-transition-curtain::before,
      .page-transition-curtain::after {
        height: 58vh
      }
    }
  </style>

  <!-- Deferred JS (non-render-blocking). Critical libs first, then auxiliaries. -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" defer fetchpriority="high"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" defer
    fetchpriority="high"></script>
  <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js" defer
    fetchpriority="high"></script>
  <!-- three.js 是 hero WebGL 必須依賴,放 high 讓它跟 GSAP 同級下載,避免 hero 等它 -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" defer fetchpriority="high"></script>
  <!-- Flip + ScrambleText：僅用於 STM section（手機版 display:none）→ 桌機才載入 -->
  <script>
    (function () {
      if (window.matchMedia && window.matchMedia('(hover:none),(pointer:coarse)').matches) return;
      ['js/Flip.min.js', 'js/ScrambleTextPlugin.min.js'].forEach(function (src) {
        var s = document.createElement('script'); s.src = src; s.defer = true;
        document.head.appendChild(s);
      });
    })();
  </script>
  <!-- hls.js 移除：所有 slider 影片均為 .mp4，無 HLS 需求 -->
  <!-- barba.umd.min.js 移除：僅用於偵測 window.barba，transitions.js 有保護性判斷 -->
  <script src="./transitions.js?v=1" defer fetchpriority="low"></script>
  <style>
    *,
    *::after,
    *::before {
      box-sizing: border-box;
    }

    :root {
      --color-text: #fff;
      --color-bg: #000;
      --thumb-width: 120px;
      --line-spacing: 10px;
      --line-base-height: 15px;
      --line-max-height: 50px;
      --font-family-body: "DM Sans", "Helvetica Neue", Arial, sans-serif;
      --font-family-display: "Zalando Sans SemiExpanded", "DM Sans", "Helvetica Neue", Arial, sans-serif;
      --font-family-accent: "Bitcount Grid Single", "DM Sans", "Helvetica Neue", Arial, sans-serif;
      --type-root: clamp(13px, 12.4px + 0.2vw, 16px);
      --text-2xs: clamp(0.6875rem, 0.66rem + 0.14vw, 0.75rem);
      --text-xs: clamp(0.75rem, 0.72rem + 0.22vw, 0.85rem);
      --text-sm: clamp(0.8125rem, 0.77rem + 0.28vw, 0.95rem);
      --text-base: clamp(0.9375rem, 0.9rem + 0.28vw, 1.05rem);
      --text-md: clamp(1rem, 0.94rem + 0.44vw, 1.2rem);
      --text-lg: clamp(1.125rem, 1.04rem + 0.8vw, 1.5rem);
      --text-display-xs: clamp(2rem, 3.5vw, 3.125rem);
      --text-display-sm: clamp(2.8rem, 4.6vw, 4.8rem);
      --text-display-md: clamp(3rem, 8vw, 5rem);
      --text-display-lg: clamp(4rem, 15vw, 11.5rem);
      --text-display-xl: clamp(5.5rem, 14vw, 13rem);
      --text-watermark: clamp(10rem, 22vw, 22rem);
      --leading-tight: 1;
      --leading-display: 0.88;
      --leading-body: 1.7;
      --tracking-tight: -0.04em;
      --tracking-display: -0.02em;
      --tracking-brand: 0.02em;
      --tracking-copy: 0.03em;
      --tracking-meta: 0.12em;
      --tracking-ui: 0.05em;
      --tracking-label: 0.08em;
      --tracking-wide: 0.1em;
      --tracking-caps: 0.18em;
    }

    html {
      font-size: var(--type-root);
      /* 🎯 Lenis 接管滾動,強制關閉瀏覽器原生 smooth scroll,避免兩套滾動引擎打架 */
      scroll-behavior: auto;
      /* 🎯 阻止 Mac 觸控板上下回彈造成 Lenis 失同步、頂底卡頓 */
      overscroll-behavior-y: none;
    }

    body {
      margin: 0;
      padding: 0;
      background-color: var(--color-bg);
      font-family: var(--font-family-body);
      font-size: var(--text-base);
      /*line-height: var(--leading-body);*/
      overflow-x: hidden;
      overflow-y: auto;
      /* 🎯 同步開啟 GPU 文字渲染抗鋸齒,滾動中字體不抖 */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overscroll-behavior-y: none;
    }

    @media (hover: none),
    (pointer: coarse) {

      html,
      body {
        overscroll-behavior-y: auto;
      }
    }

    body::-webkit-scrollbar {
      width: 6px;
    }

    body::-webkit-scrollbar-track {
      background: #000;
    }

    body::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.18);
      border-radius: 3px;
      transition: background-color .25s ease;
    }

    body::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.32);
    }

    /* Firefox */
    html {
      scrollbar-width: thin;
      scrollbar-color: rgba(255, 255, 255, 0.18) #000;
    }

    /* =========================================================
       SCROLL CONTROL & STICKY CONTAINER
       ========================================================= */
    .scroll-track {
      height: 600vh;
      position: relative;
      /* 🎯 觸控裝置只允許垂直滑動,避免水平手勢誤觸發瀏覽器導航 */
      touch-action: pan-y;
      /* 🎯 提示瀏覽器將整個 scroll-track 升為合成層,滾動完全交給 GPU */
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
    }

    .sticky-container {
      position: sticky;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      /* 🎯 提示 GPU 建立獨立合成層,避免重繪整個頁面 */
      transform: translateZ(0);
      will-change: transform;
    }

    /* =========================================================
       SECTION 1: HERO / WEBGL SLIDESHOW
       ========================================================= */
    .hero-section {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background-color: #000;
      z-index: 1;
      isolation: isolate;
    }

    .hero-section,
    .hero-section * {
      cursor: default !important;
    }

    .hero-section a,
    .hero-section button,
    .hero-section .slide-thumb,
    .hero-section [data-cursor],
    .hero-section .brand-core-video,
    .hero-section .brand-core-video a,
    .hero-section .brand-core-video * {
      cursor: pointer !important;
    }

    /* brand-core-video 手指頭：最高優先級確保覆蓋 hero-section * */
    .hero-section .brand-core-video-row .brand-core-video,
    .hero-section .brand-core-video-row .brand-core-video a,
    .hero-section .brand-core-video-row .brand-core-video video {
      cursor: pointer !important;
    }

    #webgl-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
      /* 🎯 WebGL canvas 強制獨立合成層,滾動中 GPU 不重繪整個 hero */
      transform: translateZ(0);
      will-change: transform;
      backface-visibility: hidden;
      contain: strict;
    }

    @media (max-width: 767px) {
      #webgl-container {
        background-image: url('images/home/load.webp');
      }
    }

    .slides {
      display: none;
    }

    /* --- OVERLAY UI (Typography Layout) --- */

    .overlay-ui .footer-col a {
      padding-right: 0px;
    }

    .overlay-ui {
      position: absolute;
      inset: 0;
      padding: 2.5vw 3vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 500;
      pointer-events: none;
      color: #fff;
      mix-blend-mode: difference;
    }

    .overlay-ui a {
      pointer-events: auto;
      color: #fff;
      text-decoration: none;
      padding-right: 30px;
    }

    .overlay-top {
      width: 100%;
    }

    .overlay-bottom {
      width: 100%;
    }

    .top-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 6vh;
      position: relative;
      z-index: 2;
    }

    .huge-text {
      font-family: var(--font-family-display);
      font-stretch: semi-expanded;
      font-size: var(--text-display-lg);
      font-weight: 600;
      line-height: var(--leading-display);
      letter-spacing: var(--tracking-display);
      color: #fff;
      mix-blend-mode: difference;
    }

    .small-tag {
      font-size: var(--text-xs);
      font-weight: 500;
      white-space: nowrap;
      letter-spacing: var(--tracking-ui);
      color: #fff;
      mix-blend-mode: difference;
      padding-left: 15px;
    }

    .overlay-ui,
    .huge-text,
    .small-tag {
      will-change: transform;
    }

    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      width: 100%;
    }

    .col-right {
      grid-column: 4;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .overlay-top .col-right {
      position: relative;
      z-index: 650;
      pointer-events: auto;
    }

    .services-list {
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: var(--text-xs);
      letter-spacing: var(--tracking-wide);
      line-height: var(--leading-body);
      color: rgba(255, 255, 255, 0.9);
    }


    .services-list_en {

      font-size: var(--text-xs);
      letter-spacing: 0em;

    }

    .services-list.services-list_en.bordered li {
      /* min-width: 170px; */
      white-space: nowrap;
    }

    .services-list.bordered li {
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      padding-bottom: 2px;
      margin-bottom: 4px;
      width: auto;
      min-width: 100px;
      text-align: right;
    }

    .services-list.bordered li:first-child {
      border-top: 1px solid rgba(255, 255, 255, 0.3);
      padding-top: 4px;
    }

    .services-list.bordered a {
      display: block;
      color: inherit;
      text-decoration: none;
      pointer-events: auto;
      transition: color 0.25s ease, opacity 0.25s ease;
    }

    .services-list.bordered a:hover,
    .services-list.bordered a:focus-visible {
      color: #fff;
      opacity: 0.78;
      outline: none;
    }

    /* 品牌核心識別下方獨立影片方塊 (放在 hero-section 直接子層,跳脫 overlay-ui 的 mix-blend-mode) */
    .brand-core-video-row {
      position: absolute;
      right: 3vw;
      bottom: 22vh;
      z-index: 600;
      pointer-events: auto;
    }

    .brand-core-video {
      width: clamp(180px, 14vw, 240px);
      aspect-ratio: 16 / 9;
      overflow: hidden;
      border-radius: 2px;
      background: rgba(0, 0, 0, 0.4);
      cursor: pointer;
      /* box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35); */
    }

    .brand-core-video a {
      cursor: pointer;
    }

    .brand-core-video video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    /* 手機板隱藏 */
    @media (max-width: 767px) {
      .brand-core-video-row {
        display: none;
      }
    }
    
    
        /* FWA of the Day 徽章 */
    .fwa-badge {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 99000;
      pointer-events: auto;
      display: block;
      width: 110px;
      height: auto;
      opacity: 0.88;
      transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
     
    }

    

    .fwa-badge img {
      width: 100%;
      height: auto;
      display: block;
    }
    
    
    

    .grid-section {
      position: relative;
      margin-bottom: 30vh;
    }

    .hero-quick-links-row {
      align-items: center;
      margin-bottom: 0.85rem;
    }

    .hero-quick-links-row>div {}

    .hero-quick-links {
      grid-column: 1 / -1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: clamp(36px, 4.6vw, 92px);
    }

    .hero-quick-links a {
      color: rgba(255, 255, 255, 0.92);
      font-family: 'DM Sans', sans-serif;
      font-size: var(--text-xs);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      text-decoration: none;
      pointer-events: auto;
      cursor: pointer;
      transition: color 0.25s ease, opacity 0.25s ease;
    }

    .hero-quick-links a:hover,
    .hero-quick-links a:focus-visible {
      color: #fff;
      opacity: 0.78;
      outline: none;
    }

    @media (max-width: 900px) {
      .hero-quick-links {
        grid-column: 1 / -1;
        gap: 20px 30px;
      }
    }

    .border-top-line {
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      padding-top: 1rem;
    }

    .grid-section .grid-4 div {
      font-size: var(--text-xs);
      color: rgba(255, 255, 255, 0.9);
      letter-spacing: var(--tracking-wide);
    }

    .grid-section .grid-4.border-top-line>div:nth-child(1) {
      text-align: left;
    }

    .grid-section .grid-4.border-top-line>div:nth-child(2),
    .grid-section .grid-4.border-top-line>div:nth-child(3) {
      text-align: center;
    }

    .grid-section .grid-4.border-top-line>div:nth-child(4) {
      text-align: right;
    }

    .cross-container {
      position: absolute;
      left: 0;
      right: 0;
      top: 50px;
      height: 18vh;
      pointer-events: none;
    }

    .cross {
      position: absolute;
      color: rgba(255, 255, 255, 0.6);
      font-size: var(--text-md);
      line-height: var(--leading-tight);
      font-weight: 300;
    }

    .c-tl {
      top: 0;
      left: 0;
    }

    .c-tr {
      top: 0;
      right: 0;
    }

    .c-bl {
      bottom: 0;
      left: 0;
    }

    .c-br {
      bottom: 0;
      right: 0;
    }

    .bottom-footer {
      font-size: var(--text-2xs);
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.85);
      align-items: end;
    }

    .footer-col:nth-child(1) {
      grid-column: 1;
    }

    .footer-col:nth-child(2) {
      grid-column: 2;
    }

    .footer-links a {
      display: block;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      margin-bottom: 6px;
      padding-bottom: 2px;
      width: fit-content;
      margin-left: auto;
      transition: color 0.3s, border-color 0.3s;
    }

    .footer-links a:hover {
      color: #fff;
      border-color: #fff;
    }

    /* --- BOTTOM SLIDESHOW CONTROLS --- */
    .bottom-ui-container {
      position: absolute;
      bottom: 12vh;
      left: 50%;
      transform: translateX(-50%);
      width: 720px;
      max-width: 100%;
      z-index: 600;
      padding-bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .slide-section {
      display: none;
    }

    .slide-counter {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      color: #fff;
      font-size: 0.825rem;
      margin-bottom: 24px;
    }

    .counter-display {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .counter-nav {
      width: 20px;
      cursor: pointer;
      opacity: 0.7;
      transition: opacity 0.3s;
      pointer-events: auto;
    }

    .counter-nav:hover {
      opacity: 1;
    }

    .counter-divider {
      opacity: 0.6;
      font-size: 0.8rem;
    }

    .slide-title-container {
      width: 100%;
      text-align: center;
      height: 30px;
      overflow: hidden;
      margin-bottom: 16px;
      position: relative;
    }

    .slide-title {
      position: absolute;
      width: 100%;
      color: #fff;
      font-size: 1rem;
      opacity: 0.8;
      transition: transform 0.5s ease, opacity 0.5s ease;
      left: 0;
    }

    .slide-title.exit-up {
      transform: translateY(-30px);
      opacity: 0;
    }

    .slide-title.enter-up {
      transform: translateY(30px);
      opacity: 0;
    }

    .drag-indicator {
      width: 100%;
      height: 50px;
      pointer-events: none;
      margin-bottom: 8px;
      position: relative;
    }

    .lines-container {
      display: flex;
      height: 100%;
      width: 100%;
      position: relative;
      align-items: flex-end;
      justify-content: space-between;
    }

    .drag-line {
      width: 2px;
      background-color: rgba(255, 255, 255, 0.3);
      height: var(--line-base-height);
      transform-origin: bottom center;
      transition: height 0.6s cubic-bezier(0.25, 0.1, 0.25, 1),
        background-color 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    .thumbs-container {
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
      overflow: hidden;
      pointer-events: auto;
    }

    .slide-thumbs {
      display: flex;
      position: relative;
      background: transparent;
      padding: 0;
      z-index: 11;
      gap: 0;
    }

    .slide-thumb {
      width: var(--thumb-width);
      height: 60px;
      background-size: cover;
      background-position: left center;
      cursor: pointer;
      opacity: 0.5;
      transition: opacity 0.3s;
      border: none;
      outline: none;
      margin: 0;
      position: relative;
      z-index: 12;
      overflow: hidden;
    }

    .slide-thumb:hover {
      opacity: 0.8;
    }

    .slide-thumb.active {
      opacity: 1;
    }

    /* =========================================================
       SECTION 2: DARK WRAPPER & 3D CUBE (The Curtain)
       ========================================================= */
    .dark-wrapper-mask {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      z-index: 10;
      overflow: hidden;
      clip-path: inset(100% 0 0 0);
      -webkit-clip-path: inset(100% 0 0 0);
      will-change: clip-path;
      contain: layout paint style;
    }

    .dark-wrapper {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      background-color: #030303;
      color: #ffffff;
      z-index: 1;
      overflow: hidden;
      transform: translateZ(0);
      /* 🎯 外層只改可視高度,內容固定在原本 viewport 座標,避免 3D/absolute layers 被整包 transform 影響 */
      contain: layout paint;
    }

    .glow-bottom-left {
      position: absolute;
      bottom: -20vh;
      left: -10vw;
      width: 70vw;
      height: 70vh;
      background: radial-gradient(circle, rgba(200, 210, 215, 0.15) 0%, transparent 60%);
      filter: blur(60px);
      z-index: 0;
    }

    .glow-center-left {
      position: absolute;
      top: 20vh;
      left: 20vw;
      width: 50vw;
      height: 50vh;
      background: radial-gradient(circle, rgba(120, 160, 160, 0.1) 0%, transparent 60%);
      filter: blur(60px);
      z-index: 0;
    }

    nav.dark-nav {
      display: none;
    }

    .scroll-indicator {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      display: flex;
      align-items: center;
      animation: float 2s infinite ease-in-out;
    }

    .si-block {
      display: flex;
      flex-direction: column;
      align-items: center;



      gap: 2px;
    }

    .si-letter {
      display: flex;
      align-items: center;
      justify-content: center;
      width: clamp(1.6rem, 1.8vw, 2.2rem);
      height: auto;
      padding-bottom: 10px;
    }

    .si-letter img {
      width: 100%;
      height: auto;
      display: block;
    }

    .si-label {
      font-family: var(--font-family-body);
      font-size: var(--text-2xs);
      font-weight: 500;
      letter-spacing: var(--tracking-label);
      color: #fff;
      line-height: var(--leading-tight);
    }

    .si-line {
      width: 100%;
      height: 1px;
      background: #ffffff73;
      margin-top: 5px;
    }

    /* 
    @keyframes float {

      0%,
      100% {
        transform: translate(-50%, 0);
      }

      50% {
        transform: translate(-50%, 8px);
      }
    } */

    .scene-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      z-index: 20;
      will-change: transform;
    }

    .scene {
      --scene-size: 160px;
      --scene-depth: 80px;
      width: var(--scene-size);
      height: var(--scene-size);
      perspective: calc(var(--scene-size) * 5);
    }

    .cube {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      transform: rotateX(-15deg) rotateY(-45deg);
      will-change: transform;
    }

    .face {
      position: absolute;
      width: var(--scene-size);
      height: var(--scene-size);
      background-color: #080808;
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: inset 0 0 40px rgba(0, 0, 0, 1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      user-select: none;
      backface-visibility: hidden;
    }

    .face-media {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .face.front {
      transform: rotateY(0deg) translateZ(var(--scene-depth));
    }

    .face.back {
      transform: rotateY(180deg) translateZ(var(--scene-depth));
    }

    .face.right {
      transform: rotateY(90deg) translateZ(var(--scene-depth));
    }

    .face.left {
      transform: rotateY(-90deg) translateZ(var(--scene-depth));
    }

    .face.top {
      transform: rotateX(90deg) translateZ(var(--scene-depth));
    }

    .face.bottom {
      transform: rotateX(-90deg) translateZ(var(--scene-depth));
    }

    .mobile-cube-section,
    .mobile-marquee-section {
      display: none;
    }

    @media (max-width: 767px) {
      .mobile-cube-section {
        --mobile-cube-size: clamp(150px, 48vw, 210px);
        --mobile-cube-depth: calc(var(--mobile-cube-size) / 2);
        --mcube-bg-z: 1;
        --mcube-fade-z: 2;
        --mcube-scene-z: 3;
        --mcube-content-z: 4;
        --mcube-title-top: 60px;
        --mcube-scene-offset: 80px;
        --mcube-copy-top: 150px;
        --mcube-inline-pad: 28px;
        display: grid;
        place-items: center;
        position: relative;
        min-height: clamp(360px, 62svh, 520px);
        padding: 90px 0 48px;
        box-sizing: border-box;
        background: #000;
        overflow: visible;
        z-index: 2;
        isolation: isolate;
        transition: min-height 0.45s ease, padding 0.45s ease;
      }

      .mobile-cube-section::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -72px;
        height: 160px;
        z-index: var(--mcube-fade-z);
        pointer-events: none;
        background:
          linear-gradient(to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.18) 28%,
            rgba(0, 0, 0, 0.48) 58%,
            rgba(0, 0, 0, 0.88) 100%);
        opacity: 0.96;
      }

      .mobile-cube-bg,
      .mobile-cube-bg::after {
        position: absolute;
        inset: 0;
      }

      .mobile-cube-bg {
        z-index: var(--mcube-bg-z);
        overflow: hidden;
        pointer-events: none;
      }

      .mobile-cube-bg::after {
        content: "";
        background: rgba(0, 0, 0, 0.42);
      }

      .mobile-cube-bg video,
      .mobile-cube-face img,
      .mobile-cube-face video {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }

      .mobile-cube-bg video {
        filter: brightness(0.72);
        transform: scale(1.04);
      }

      .mobile-cube-scene {
        position: relative;
        z-index: var(--mcube-scene-z);
        width: var(--mobile-cube-size);
        height: var(--mobile-cube-size);
        perspective: calc(var(--mobile-cube-size) * 5);
        padding-top: var(--mcube-scene-offset);
        touch-action: pan-y;
      }

      .mobile-cube {
        position: relative;
        width: 100%;
        height: 100%;
        transform: rotateY(0deg);
        transform-style: preserve-3d;
        will-change: transform;
      }

      .mobile-cube-face {
        position: absolute;
        width: var(--mobile-cube-size);
        height: var(--mobile-cube-size);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: #080808;
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: inset 0 0 34px rgba(0, 0, 0, 0.88);
        backface-visibility: hidden;
      }

      .mobile-cube-face.is-front {
        transform: rotateY(0deg) translateZ(var(--mobile-cube-depth));
      }

      .mobile-cube-face.is-back {
        transform: rotateY(180deg) translateZ(var(--mobile-cube-depth));
      }

      .mobile-cube-face.is-right {
        transform: rotateY(90deg) translateZ(var(--mobile-cube-depth));
      }

      .mobile-cube-face.is-left {
        transform: rotateY(-90deg) translateZ(var(--mobile-cube-depth));
      }

      .mobile-cube-face.is-top {
        transform: rotateX(90deg) translateZ(var(--mobile-cube-depth));
      }

      .mobile-cube-face.is-bottom {
        transform: rotateX(-90deg) translateZ(var(--mobile-cube-depth));
      }

      .mcube-title {
        position: absolute;
        top: var(--mcube-title-top);
        left: 0;
        z-index: var(--mcube-content-z);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        width: 100%;
        text-align: center;
        pointer-events: none;
      }

      .mcube-title__eye,
      .mcube-copy__desc,
      .mcube-copy__tag,
      .mcube-stat__label {
        font-family: 'DM Sans', sans-serif;
      }

      .mcube-title__eye {
        font-size: clamp(0.6rem, 2.8vw, 0.75rem);
        font-weight: 400;
        letter-spacing: 0.18em;
        color: rgba(255, 255, 255, 0.45);
        text-transform: uppercase;
        white-space: nowrap;
      }

      .mcube-title__line,
      .mcube-stat__num {
        font-family: 'Zalando Sans SemiExpanded', 'DM Sans', sans-serif;
      }

      .mcube-title__line {
        margin: 0;
        font-size: 10vw;
        font-weight: 700;
        line-height: 1;
        letter-spacing: -0.01em;
        color: #fff;
        text-transform: uppercase;
      }

      .mcube-copy {
        position: relative;
        z-index: var(--mcube-content-z);
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        box-sizing: border-box;
        padding: var(--mcube-copy-top) var(--mcube-inline-pad) 0;
      }

      .mcube-copy__desc {
        margin: 0;
        font-size: clamp(0.78rem, 3.6vw, 0.95rem);
        font-weight: 400;
        line-height: 1.75;
        letter-spacing: 0.01em;
        color: rgba(255, 255, 255, 0.62);
        text-align: center;
      }

      .mcube-copy__tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .mcube-copy__tag {
        padding: 4px 10px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 2px;
        font-size: clamp(0.6rem, 2.6vw, 0.7rem);
        font-weight: 500;
        letter-spacing: 0.14em;
        color: rgba(255, 255, 255, 0.5);
        text-transform: uppercase;
        white-space: nowrap;
      }

      .mcube-copy__stats {
        display: flex;
        gap: 24px;
        padding-top: 4px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }

      .mcube-stat {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }

      .mcube-stat__num {
        font-size: clamp(1.3rem, 6vw, 1.6rem);
        font-weight: 700;
        line-height: 1;
        letter-spacing: -0.02em;
        color: #fff;
      }

      .mcube-stat__label {
        font-size: clamp(0.58rem, 2.4vw, 0.65rem);
        font-weight: 400;
        letter-spacing: 0.1em;
        color: rgba(255, 255, 255, 0.38);
        text-transform: uppercase;
      }

      .mobile-marquee-section {
        display: block;
        position: relative;
        z-index: 2;
        max-height: 0;
        padding: 0;
        overflow: hidden;
        background: #000;
        opacity: 0;
        pointer-events: none;
        transform: translateY(-20px);
        transition: opacity 0.45s ease, transform 0.45s ease, max-height 0.45s ease, padding 0.45s ease;
      }

      .mobile-marquee-section .mobile-marquee-outer {
        width: 100%;
        overflow: hidden;
        mix-blend-mode: difference;
      }

      .mobile-marquee-section .marquee-inner,
      .mobile-marquee-section .marquee-set {
        display: flex;
        align-items: center;
      }

      .mobile-marquee-section .marquee-inner {
        transform: translateZ(0);
        will-change: transform;
      }

      .mobile-marquee-section .marquee-set,
      .mobile-marquee-section .marquee-block,
      .mobile-marquee-section .marquee-label {
        flex-shrink: 0;
      }

      .mobile-marquee-section .marquee-block {
        display: inline-flex;
        align-items: baseline;
        padding: 0;
      }

      .mobile-marquee-section .huge-title.marquee-item {
        margin: 0 0.4em 0 0;
        font-family: 'Zalando Sans SemiExpanded', 'DM Sans', sans-serif;
        font-stretch: semi-expanded;
        font-size: 14vw;
        font-weight: 600;
        line-height: 1;
        color: #fff;
        white-space: nowrap;
      }

      .mobile-marquee-section .marquee-label {
        margin-right: 1.2em;
        font-family: 'DM Sans', sans-serif;
        font-size: clamp(0.7rem, 2.4vw, 0.95rem);
        font-weight: 400;
        line-height: 1;
        letter-spacing: 0.05em;
        color: #fff;
        white-space: nowrap;
      }
    }

    .face-subtitle {
      font-size: 0.75rem;
      color: #888;
      letter-spacing: 1px;
      margin-bottom: 5px;
    }

    .face-title {
      font-size: 1.2rem;
      font-weight: 800;
      line-height: 1.1;
      text-align: center;
      margin-bottom: 12px;
      letter-spacing: 0.5px;
    }

    .top-text {
      font-size: 1.5rem;
      font-weight: 900;
      letter-spacing: 3px;
      color: #aaa;
      transform: scaleY(-1);
    }

    .intro-panel {
      position: absolute;
      inset: 0;
      z-index: 16;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      overflow: visible;
      will-change: opacity;
      isolation: isolate;
    }

    .intro-panel .dual-wave-wrapper {
      display: flex;
      width: 90%;
      position: relative;
      gap: 25vw;
    }

    .intro-panel .wave-column {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: clamp(0.7rem, 1.7vh, 1.25rem);
      font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
      font-size: clamp(1.3rem, 2.5vw, 2.35rem);
      font-weight: 400;
      line-height: 1;
      position: relative;
      z-index: 100;
    }

    .intro-panel .wave-column-left {
      align-items: flex-start;
    }

    .intro-panel .wave-column-right {
      align-items: flex-end;
    }

    .intro-panel .animated-text {
      width: max-content;
      color: rgba(255, 255, 255, 0.25);
      text-transform: uppercase;
      transition: color 300ms ease-out;
      pointer-events: auto;
      user-select: none;
      cursor: default;
    }

    .intro-panel .animated-text.focused {
      color: #fff;
    }

    .intro-panel .image-thumbnail-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100vw;
      z-index: 10;
      pointer-events: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.6rem;
    }

    .intro-panel .ip-thumb-row {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .intro-panel .ip-thumb-line {
      flex: 1;
      height: 1px;
      background: rgba(255, 255, 255, 0.18);
    }

    .intro-panel .image-thumbnail {
      width: auto;
      height: auto;
      max-width: 15vw;
      max-height: 30vh;
      flex-shrink: 0;
    }

    @media (max-width: 1023px) {
      .intro-panel .dual-wave-wrapper {
        width: 100%;
        gap: 10vw;
      }

      .intro-panel .wave-column {
        /* gap: 2.5rem; */
        font-size: clamp(1.3rem, 2.5vw, 2.35rem);
      }

      .intro-panel .image-thumbnail-wrapper {
        width: 50vw;
      }

      .intro-panel .image-thumbnail {
        max-width: 100%;
      }
    }

    .ip-top-header {
      position: absolute;
      top: 28vh;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      z-index: 50;
      pointer-events: none;
      width: min(80%, 60rem);
      mix-blend-mode: difference;
      opacity: 0;
    }

    .ip-bottom-letter {
      position: absolute;
      bottom: 25vh;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      z-index: 50;
      pointer-events: none;
      mix-blend-mode: difference;
      opacity: 0;
    }

    .ip-top-chapter1 {
      position: absolute;
      font-size: 1rem;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      z-index: 50;
      pointer-events: none;
      width: min(80%, 60rem);
      mix-blend-mode: difference;
    }

    .ip-top-chapter {
      font-size: var(--text-xs);
      letter-spacing: 0.1em;
      color: #ddd;
      text-transform: uppercase;
      margin-bottom: 0.8rem;
    }

    .ip-top-title {
      font-family: 'DM Sans', sans-serif;
      font-size: clamp(5rem, 10vw, 9rem);
      font-weight: 900;
      line-height: 1.0;
      color: #fff;
      text-transform: uppercase;
      margin: 0;
      letter-spacing: -0.04em;
      transform: translateY(110%);
      will-change: transform, opacity;
    }

    .section-2-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 15;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 0;
      pointer-events: none;
      overflow: visible;
      padding-top: 50px;
    }

    .section-2-content .subtitle,
    .new-text-group .subtitle {
      font-size: 0.95rem;
      color: #ddd;
      letter-spacing: 0.1em;
      margin-bottom: 15px;
    }

    .section-2-content .title-wrapper,
    .new-text-group .title-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      mix-blend-mode: difference;
    }

    /* ── Marquee (title-wrapper replacement) ── */
    .section-2-content .title-wrapper.marquee-wrapper {
      display: block;
      width: 100%;
      overflow: hidden;
      mix-blend-mode: difference;
    }


    .marquee-outer {
      overflow: hidden;
      width: 100%;
    }

    .marquee-inner {
      display: flex;
      align-items: center;
      transform: translateZ(0);
      /* GPU layer without will-change overhead */
    }

    .marquee-set {
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }

    .marquee-block {
      display: inline-flex;
      align-items: baseline;
      /* gap: 0.5em; */
      flex-shrink: 0;
      padding: 0;

    }

    .huge-title.marquee-item {
      white-space: nowrap;
      flex-shrink: 0;
    }

    .marquee-label {
      font-family: 'DM Sans', sans-serif;
      font-size: clamp(0.875rem, 1vw, 1.2rem);
      font-weight: 400;
      color: #fff;
      white-space: nowrap;
      letter-spacing: 0.05em;
      line-height: 1;
      flex-shrink: 0;
      /* border-top: 1px solid rgba(255,255,255,0.3);
      border-bottom: 1px solid rgba(255,255,255,0.3); */
      padding: 0.35em 0;
      align-self: center;
    }

    .marquee-sep {
      font-size: 4vw;
      color: rgba(255, 255, 255, 0.35);
      margin: 0 2.5vw;
      flex-shrink: 0;
      line-height: 1;
    }

    .section-2-content .huge-title,
    .new-text-group .huge-title {
      /* font-family: 'Zalando Sans SemiExpanded', 'DM Sans', sans-serif; */
      font-family: "Bitcount Grid Single", monospace;
      font-stretch: semi-expanded;
      font-size: 10vw;
      /* font-weight: 600; */
      font-weight: 400;
      line-height: 1;
      text-align: center;
      margin: 0;
      color: #ffffff;
      white-space: nowrap;
    }

    .section-2-content .title-outline,
    .new-text-group .title-outline {
      color: #fff;
    }

    .section-2-content .desc,
    .new-text-group .desc {
      font-size: 14px;
      color: #ccc;
      max-width: 400px;
      text-align: center;
      line-height: 1.8;
      /* text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); */
      margin-top: 30px;
    }

    .title-reveal-wrap {
      overflow: hidden;
      display: block;
    }

    .new-text-group {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 50px;
      pointer-events: none;
      z-index: 31;
      opacity: 0;
      overflow: hidden;
    }

    .text-blend {
      mix-blend-mode: difference;
    }

    @media (max-width: 768px) {
      .dark-wrapper-mask {
        display: none !important;
      }

      .dark-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: transparent;
        overflow: visible;
        clip-path: none !important;
        contain: none;
      }

      .dark-wrapper>*:not(.scene-wrapper) {
        display: none !important;
      }

      .scene-wrapper {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }

      .dark-wrapper>video {
        opacity: 0.14 !important;
      }

      .dark-wrapper .glow-bottom-left,
      .dark-wrapper .glow-center-left {
        display: none;
      }

      .dark-wrapper .scroll-indicator {
        display: none;
      }

      html.is-dark-wrapper-mobile-intro #scroll-progress,
      html.is-dark-wrapper-mobile-intro #fixed-logo,
      html.is-dark-wrapper-mobile-intro #menu-btn,
      html.is-dark-wrapper-mobile-intro #nav_scroll_container,
      html.is-dark-wrapper-mobile-intro .overlay-ui,
      html.is-dark-wrapper-mobile-intro .stm-section {
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }

      nav.dark-nav {
        width: 90vw;
        left: 5vw;
        right: auto;
        justify-content: space-between;
        gap: 10px;
      }

      .intro-panel {
        overflow: hidden;
      }

      .intro-panel .ip-top-header {
        display: none;
      }

      .intro-panel .dual-wave-wrapper {
        width: calc(100vw - 12px);
        gap: 0;
        padding: 0 6px;
        justify-content: space-between;
      }

      .intro-panel .wave-column {
        flex: 0 0 22.5vw;
        max-width: 22.5vw;
        gap: clamp(12px, 3.2vw, 15px);
        font-size: clamp(9px, 2.4vw, 11px);
        line-height: 1;
        letter-spacing: 0;
      }

      .intro-panel .animated-text {
        color: rgba(255, 255, 255, 0.22);
      }

      .intro-panel .animated-text.focused {
        color: rgba(255, 255, 255, 0.94);
      }

      .intro-panel .animated-text .at-en {
        transform: none !important;
      }

      .intro-panel .animated-text .at-zh {
        display: none;
      }

      .intro-panel .wave-column-right .animated-text .flip-wrap {
        display: none;
      }

      .intro-panel .wave-column-right .animated-text::before {
        display: block;
      }

      .intro-panel .wave-column-right .animated-text:nth-child(1)::before {
        content: "CORE-SITE";
      }

      .intro-panel .wave-column-right .animated-text:nth-child(2)::before {
        content: "GEN-AI VISUAL";
      }

      .intro-panel .wave-column-right .animated-text:nth-child(3)::before {
        content: "MOTION FLOW";
      }

      .intro-panel .wave-column-right .animated-text:nth-child(4)::before {
        content: "WEBGL REALM";
      }

      .intro-panel .wave-column-right .animated-text:nth-child(5)::before {
        content: "3D MATRIX";
      }

      .intro-panel .wave-column-right .animated-text:nth-child(6)::before {
        content: "INTERACTION";
      }

      .intro-panel .wave-column-right .animated-text:nth-child(7)::before {
        content: "PIXEL PERFECT";
      }

      .intro-panel .wave-column-right .animated-text:nth-child(8)::before {
        content: "LOGIC BUILD";
      }

      .intro-panel .wave-column-right .animated-text:nth-child(9)::before {
        content: "FLUID UI";
      }

      .intro-panel .wave-column-right .animated-text:nth-child(10)::before {
        content: "AERO DESIGN";
      }

      .intro-panel .wave-column-right .animated-text:nth-child(11)::before {
        content: "PURE CODE";
      }

      .intro-panel .wave-column-right .animated-text:nth-child(12)::before {
        content: "DIGITAL ART";
      }

      .intro-panel .image-thumbnail-wrapper {
        top: 54%;
        width: min(51vw, 220px);
        gap: 0;
        z-index: 90;
      }

      .intro-panel .ip-thumb-line {
        display: none;
      }

      .intro-panel .image-thumbnail {
        width: min(51vw, 220px);
        height: min(38.25vw, 165px);
        max-width: none;
        max-height: none;
        object-fit: cover;
        display: block;
      }

      .ip-top-chapter1 {
        top: 54%;
        width: auto;
        font-size: clamp(9px, 2.5vw, 11px);
        line-height: 1;
        white-space: nowrap;
        transform: translate(-50%, -50%);
        z-index: 120;
      }

      .scene {
        --scene-size: 120px;
        --scene-depth: 60px;
      }

      .stm-logo,
      .stm-section {
        display: none !important;
      }

      .face-title {
        font-size: var(--text-base);
        margin-bottom: 8px;
      }

      .face-subtitle {
        font-size: var(--text-2xs);
      }

      .link-btn {
        font-size: var(--text-2xs);
        padding: 3px 8px;
      }

      .section-2-content .huge-title,
      .new-text-group .huge-title {
        font-size: 20vw;
      }

      .section-2-content .desc,
      .new-text-group .desc {
        padding: 0 20px;
      }

      /* services-list: no wrapping on mobile */
      .services-list li,
      .services-list.services-list_en.bordered li {
        white-space: nowrap;
      }

      /* hide "Strategy, Design..." tagline on mobile */
      .bottom-footer .footer-col:nth-child(1) {
        display: none !important;
      }

      /* shift remaining cols to fill the gap */
      .bottom-footer .footer-col:nth-child(2) {
        grid-column: 1;
        overflow: visible !important;
      }

      .bottom-footer .footer-col:nth-child(3) {
        grid-column: 4;
      }
      .bottom-footer{
              align-items: start;
      }
      
      /*.overlay-ui {padding: 2vw 3vw;}*/
    }

    /* =========================================================
       SECTION STM: SCROLL TEXT MOTION
       ========================================================= */
    .stm-section {
      position: relative;
      background: transparent;
      overflow: visible;
      pointer-events: none;
      z-index: 25;
   padding-bottom: clamp(10vh, calc(241.2vh - 2265px), 800px);
    }

    .stm-section .stm-el {
      pointer-events: auto;
    }

    .stm-content {
      position: relative;
      z-index: 25;
      padding: 10vh 1.5rem 15vh;
      transform: translateZ(0);
      will-change: transform, opacity;
      contain: paint;
    }

    .stm-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 10vh;
    }

    .stm-el {
      white-space: nowrap;
      filter: blur(0px);
      text-transform: uppercase;
      opacity: 0.6;
      font-family: 'DM Sans', sans-serif;
      font-size: 13px;
      color: #fff;
      mix-blend-mode: difference;
    }

    .stm-el--xl {
      font-size: clamp(2rem, 20vw, 15rem);
      opacity: 1;
      font-family: 'Bitcount Grid Single', sans-serif;
      font-weight: 400;
      mix-blend-mode: difference;
    }

    .stm-pos-2 {
      margin-left: 25vw;
    }

    .stm-pos-3 {
      margin-left: 70vw;
    }

    .stm-pos-4 {
      margin-left: auto;
    }

    .stm-pos-5 {
      margin-top: 200px;
      opacity: 1;
    }

    .stm-pos-6 {
      margin-left: auto;
      margin-top: 200px;
      opacity: 1;
    }

    .stm-pos-7 {
      margin-top: 200px;
      opacity: 1;
      filter: blur(1.2px);
    }

    .stm-pos-8 {
      margin-left: 25vw;
      margin-top: 50px;
      opacity: 1;
      filter: blur(2px);
    }

    .stm-pos-9 {
      margin-left: 25vw;
      margin-top: 250px;
    }

    .stm-pos-10 {
      margin-left: 70vw;
      margin-top: 40vh;
    }

    .stm-logo {
      display: grid;
      place-items: center;
      width: 100%;
      height: 100vh;
      pointer-events: none;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 40;
      opacity: 0;
      transition: opacity 0.5s;
    }

    .stm-logo img {
      width: clamp(120px, 20vw, 60px);
      height: auto;
      display: block;
    }

    .stm-logo.is-visible {
      opacity: 1;
    }

    @keyframes blink-cursor {

      from,
      to {
        opacity: 1;
      }

      50% {
        opacity: 0;
      }
    }

    .stm-typing {
      display: inline-block;
      animation: blink-cursor 0.7s linear infinite;
    }

    /* =========================================================
         SECTION 3: CORE CAPABILITIES
         ========================================================= */
    .ccap-section {
      position: relative;
      overflow: hidden;
      background: var(--color-bg);
      color: #fff;
    }

    #core-capabilities {
      position: relative;
      height: 100vh;
      overflow: hidden;
      background: var(--color-bg);
      z-index: 30;
    }

    .ring-gallery-sticky {
      position: sticky;
      top: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background: var(--color-bg);
      isolation: isolate;
    }

    .ring-gallery-sticky::before,
    .ring-gallery-sticky::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: clamp(96px, 18vh, 220px);
      pointer-events: none;
      z-index: 3;
    }

    .ring-gallery-sticky::before {
      top: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.96) 0%, rgba(0, 0, 0, 0.72) 38%, rgba(0, 0, 0, 0) 100%);
    }

    .ring-gallery-sticky::after {
      bottom: 0;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.78) 36%, rgba(0, 0, 0, 0) 100%);
    }

    .ccap-side-fade {
      position: absolute;
      top: 0;
      bottom: 0;
      width: clamp(72px, 10vw, 180px);
      pointer-events: none;
      z-index: 3;
    }

    .ccap-side-fade-left {
      left: 0;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.96) 0%, rgba(0, 0, 0, 0.68) 36%, rgba(0, 0, 0, 0) 100%);
    }

    .ccap-side-fade-right {
      right: 0;
      background: linear-gradient(270deg, rgba(0, 0, 0, 0.96) 0%, rgba(0, 0, 0, 0.68) 36%, rgba(0, 0, 0, 0) 100%);
    }

    .ccap-exit-overlay {
      position: absolute;
      inset: 0;
      z-index: 1;
      background: #000;
      opacity: 0;
      pointer-events: none;
      will-change: opacity;
    }

    #sketch {
      position: absolute;
      inset: 0;
      width: 100vw;
      height: 100vh;
      background: var(--color-bg);
    }

    #sketch canvas {
      display: block;
      width: 100%;
      height: 100%;
      opacity: .7;
    }

    .hero-dom {
      position: absolute;
      inset: 0;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: clamp(24px, 4vw, 48px);
      pointer-events: none;
      opacity: 1;
      will-change: opacity;
    }

    #core-capabilities main {
      position: relative;
      width: min(100%, 1400px);
      min-height: 100vh;
      margin: 0 auto;
      padding: clamp(24px, 4vw, 48px) 4vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      will-change: transform;
      transform-origin: 50% 50%;
    }

    /* stm section 底部漸層 → 黑色消融進 ccap */
    .stm-section::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40vh;
      background: linear-gradient(to bottom, transparent 0%, #000 100%);
      pointer-events: none;
      z-index: 0;
    }

    #core-capabilities .reveal-wrap {
      overflow: hidden;
      display: inline-flex;
      vertical-align: top;
    }

    #core-capabilities .reveal-inner {
      display: inline-block;
      transform: translateY(110%);
      will-change: transform;
      transition: transform 0.9s cubic-bezier(0.19, 1, 0.22, 1);

    }

    #core-capabilities.is-revealed .reveal-inner {
      transform: translateY(0);
    }

    #core-capabilities .top-nav .nav-left .reveal-inner {
      transition-delay: 0.05s;
    }

    #core-capabilities .top-nav .nav-center .reveal-inner {
      transition-delay: 0.12s;
    }

    #core-capabilities .top-nav .nav-right .reveal-inner {
      transition-delay: 0.19s;
    }

    #core-capabilities .giant-title .reveal-inner {
      transition-duration: 1.1s;
      transition-delay: 0.15s;
    }

    #core-capabilities .sub-title .reveal-wrap:nth-of-type(1) .reveal-inner {
      transition-delay: 0.25s;
    }

    #core-capabilities .sub-title .reveal-wrap:nth-of-type(2) .reveal-inner {
      transition-delay: 0.32s;
    }

    #core-capabilities .service-label .reveal-inner {
      transition-delay: 0.6s;
    }

    #core-capabilities .service-tags .reveal-wrap:nth-child(1) .reveal-inner {
      transition-delay: 0.7s;
    }

    #core-capabilities .service-tags .reveal-wrap:nth-child(2) .reveal-inner {
      transition-delay: 0.74s;
    }

    #core-capabilities .service-tags .reveal-wrap:nth-child(3) .reveal-inner {
      transition-delay: 0.78s;
    }

    #core-capabilities .service-tags .reveal-wrap:nth-child(4) .reveal-inner {
      transition-delay: 0.82s;
    }

    #core-capabilities .footer-desc .reveal-wrap:nth-of-type(1) .reveal-inner {
      transition-delay: 0.8s;
    }

    #core-capabilities .footer-desc .reveal-wrap:nth-of-type(2) .reveal-inner {
      transition-delay: 0.87s;
    }

    #core-capabilities .footer-desc .reveal-wrap:nth-of-type(3) .reveal-inner {
      transition-delay: 0.94s;
    }

    #core-capabilities .media-box,
    #core-capabilities .center-video-box {
      transition: clip-path 1.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    #core-capabilities.is-revealed .media-box,
    #core-capabilities.is-revealed .center-video-box {
      clip-path: inset(0% 0 0 0);
    }

    #core-capabilities .top-nav {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      padding: 1vw 0;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
      color: #a0a0a0;
      margin-bottom: 2vw;
      align-items: start;
      border-bottom: 1px solid #ffffff1f;
    }

    #core-capabilities .nav-left {
      justify-self: start;
      line-height: 1.6;
    }

    #core-capabilities .nav-center {
      justify-self: center;
    }

    #core-capabilities .nav-right {
      justify-self: end;
    }

    #core-capabilities .giant-title {
      text-align: center;
      font-family: 'Zalando Sans SemiExpanded', 'Zalando Sans', -apple-system, sans-serif;
      font-size: 5rem;
      font-weight: 700;
      /* letter-spacing: 0.02em; */
      line-height: 1;
      margin: 0 0 0 0;
      white-space: nowrap;
    }

    #core-capabilities .sub-title {
      text-align: center;
      font-size: 0.85rem;
      line-height: 1.6;
      letter-spacing: 0.02em;
      color: #ffffff;
      margin: 2vw 0 1vw 0;
    }

    #core-capabilities .media-gallery {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      width: 100%;
      margin-bottom: 3vw;
    }

    #core-capabilities .media-track {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5vw;
      padding: 0;
      flex-shrink: 0;
      width: 100%;
      margin: 0 auto;
    }

    /* center-divider: inline in track */
    #core-capabilities .center-divider {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      width: clamp(96px, 10vw, 160px);
    }

    /* media-box & center-video-box shared */
    #core-capabilities .media-box {
      width: 13vw;
      aspect-ratio: 16 / 9;
      background-color: #d9d9d9;
      position: relative;
      clip-path: inset(100% 0 0 0);
    }

    #core-capabilities .media-box img,
    #core-capabilities .media-box video,
    #core-capabilities .center-video-box img,
    #core-capabilities .center-video-box video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    #core-capabilities .center-video-box {
      /* width: clamp(82px, 7vw, 124px); */
      width: 120px;
      position: relative;
      clip-path: inset(100% 0 0 0);
      mix-blend-mode: lighten;
      background: transparent;
    }

    #core-capabilities .center-video-box video {
      mix-blend-mode: lighten;
      background: transparent;
    }

    #core-capabilities .service-label {
      font-size: 0.8rem;
      letter-spacing: 0.05em;
    }

    .text1vw .reveal-inner {
      font-size: clamp(0.875rem, 1vw, 1.2rem);
      font-weight: 400;
      color: #fff;
      white-space: nowrap;
      letter-spacing: 0.05em;
      line-height: 1;
    }

    .text1vw {
      font-size: clamp(0.875rem, 1vw, 1.2rem);
      font-weight: 400;
      color: #fff;
      white-space: nowrap;
      letter-spacing: 0.05em;
      line-height: 1;
    }


    #core-capabilities .service-tags {
      display: flex;
      justify-content: center;
      gap: 1.5vw;
      font-size: 0.85rem;
      color: #a0a0a0;
      margin-bottom: 2vw;
      letter-spacing: 0.05em;
    }

    #core-capabilities .footer-desc {
      text-align: center;
      font-size: 0.85rem;
      line-height: 1.8;
      color: #a0a0a0;
      max-width: 600px;
      margin: 0 auto 5vw auto;
    }

    @media (max-width: 900px) {
      .hero-dom {
        padding: 24px 20px;
      }

      #core-capabilities main {
        padding: 24px 20px;
      }

      #core-capabilities .top-nav {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }

      #core-capabilities .nav-center {
        display: none;
      }

      #core-capabilities .giant-title {
        font-size: 14vw;
        margin-top: 5vw;
      }

      #core-capabilities .media-gallery {
        gap: 3vw;
      }

      #core-capabilities .media-track {
        width: 100%;
        padding: 0;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3vw;
      }

      #core-capabilities .media-box {
        width: 45%;
      }

      #core-capabilities .center-divider {
        width: 100%;
        order: -1;
        margin-bottom: 2rem;
      }

      #core-capabilities .center-video-box {
        width: 82px;
      }

      #core-capabilities .service-tags {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }

      #core-capabilities .footer-desc {
        padding: 0 5vw;
      }
    }

    @media (max-width: 767px) {

      #core-capabilities,
      .ring-gallery-sticky,
      #sketch {
        touch-action: pan-y;
      }
    }

    #s3-gallery {
      position: relative;
      z-index: 3;
    }

    /* =========================================================
       SECTION 3: PARALLAX GALLERY
       ========================================================= */

    .s3-gallery-section {
      position: relative;
      background: #000;
      isolation: isolate;
    }

    .s3-gallery-section::before,
    .s3-gallery-section::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: clamp(96px, 18vh, 220px);
      pointer-events: none;
      z-index: 4;
    }

    .s3-gallery-section::before {
      top: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.96) 0%, rgba(0, 0, 0, 0.72) 38%, rgba(0, 0, 0, 0) 100%);
    }

    .s3-gallery-section::after {
      bottom: 0;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.78) 36%, rgba(0, 0, 0, 0) 100%);
    }

    .gallery-header-video {
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
    }

    .gallery-header-video video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      opacity: 0.5;
    }

    @media (max-width: 768px) {
      .gallery-header-video {
        display: none;
      }
      
        #core-capabilities .media-gallery {
      margin-top: 3vw;
    }
    
    #core-capabilities .center-divider{
        margin-bottom: 1rem;
    }
    
    
    }

    .gallery-header {
      position: sticky;
      top: 0;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
      padding: 0 4vw;
      background: #000;
    }

    .gallery-header-label {
      position: relative;
      z-index: 2;
      font-family: 'DM Sans', sans-serif;
      font-size: clamp(10px, 1vw, 13px);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.35);
      margin-bottom: 3vh;
    }

    .gallery-header-title {
      position: relative;
      z-index: 2;
      font-family: 'Zalando Sans SemiExpanded', sans-serif;
      font-size: clamp(3rem, 8vw, 5rem);
      font-weight: 700;
      color: #fff;
      margin: 0 0 1.5rem;
      line-height: 1.05;
      text-transform: uppercase;
    }

    .gh-side-rails {
      position: absolute;
      inset: 0;
      z-index: 2;
      pointer-events: none;
    }

    .gh-side-rail {
      position: absolute;
      top: 50%;
      display: flex;
      align-items: center;
      gap: clamp(18px, 2.4vw, 40px);
      transform: translateY(-50%);
      color: rgba(255, 255, 255, 0.94);
      will-change: transform, opacity;
    }

    .gh-side-rail-left {
      left: 4vw;
    }

    .gh-side-rail-right {
      right: 4vw;
      flex-direction: row-reverse;
    }

    .gh-side-letter {
      font-family: 'Zalando Sans SemiExpanded', sans-serif;
      font-size: clamp(2.8rem, 4.6vw, 4.8rem);
      font-weight: 700;
      line-height: 0.9;
      letter-spacing: -0.03em;
    }

    .gh-side-line {
      width: clamp(120px, 12vw, 210px);
      height: 1px;
      background: rgba(255, 255, 255, 0.42);
      will-change: transform, opacity;
    }

    .gh-side-rail-left .gh-side-line {
      transform-origin: right center;
    }

    .gh-side-rail-right .gh-side-line {
      transform-origin: left center;
    }

    @media (max-width: 900px) {
      .gh-side-rails {
        display: none;
      }
    }

    .gallery-header-title.exit-zoom-blur {
      will-change: transform, opacity;
      transition: transform 0.6s, filter 0.6s, opacity 0.6s;
      transform: scale(0.7);
      filter: blur(12px);
      opacity: 0;
      pointer-events: none;
    }

    .gh-line {
      display: block;
    }

    .gallery-header-sub {
      position: relative;
      z-index: 2;
      font-family: 'DM Sans', sans-serif;
      font-size: clamp(10px, 1vw, 14px);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.3);
      margin: 0;
    }

    .pg-gallery {
      position: relative;
      z-index: 2;
      width: 100%;
      margin: 0 auto;
      padding: 0 4vw 22vh;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: 2vw;
      row-gap: 12vw;
    }

    .pg-item {
      position: relative;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .pg-hover-copy {
      position: absolute;
      inset: 0;
      z-index: 3;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: clamp(18px, 2.2vw, 34px);
      pointer-events: none;
      color: #fff;
      mix-blend-mode: difference;
    }

    .pg-hover-copy__veil {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.0) 42%, rgba(255, 255, 255, 0.1) 100%);
      opacity: 0;
      transform: scaleY(1.06);
      transform-origin: center bottom;
      transition:
        opacity 0.82s cubic-bezier(0.16, 1, 0.3, 1),
        transform 0.82s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .pg-hover-copy__eyebrow,
    .pg-hover-copy__title,
    .pg-hover-copy__sub {
      display: block;
      position: relative;
      z-index: 1;
      opacity: 0;
      filter: blur(8px);
      will-change: transform, opacity;
    }

    .pg-hover-copy__eyebrow,
    .pg-hover-copy__sub {
      font-family: var(--font-family-body);
      font-size: clamp(0.65rem, 0.62rem + 0.14vw, 0.82rem);
      font-weight: 600;
      letter-spacing: 0.22em;
      text-transform: uppercase;
    }

    .pg-hover-copy__eyebrow {
      align-self: flex-start;
      clip-path: inset(0 0 100% 0);
      transform: translate3d(0, 20px, 0);
      transition:
        opacity 0.62s cubic-bezier(0.16, 1, 0.3, 1),
        transform 0.62s cubic-bezier(0.16, 1, 0.3, 1),
        filter 0.62s cubic-bezier(0.16, 1, 0.3, 1),
        clip-path 0.62s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .pg-hover-copy__body {
      display: grid;
      gap: 0.55rem;
      align-self: flex-start;
      max-width: min(88%, 28rem);
    }

    .pg-hover-copy__title-wrap {
      overflow: hidden;
      padding-bottom: 0.08em;
    }

    .pg-hover-copy__title {
      font-family: var(--font-family-display);
      font-size: clamp(2.1rem, 4.8vw, 4.8rem);
      font-weight: 600;
      line-height: 0.9;
      letter-spacing: -0.045em;
      text-transform: uppercase;
      clip-path: inset(100% 0 0 0);
      transform: translate3d(0, 42px, 0) skewY(7deg);
      transition:
        opacity 0.92s cubic-bezier(0.16, 1, 0.3, 1),
        transform 0.92s cubic-bezier(0.16, 1, 0.3, 1),
        filter 0.92s cubic-bezier(0.16, 1, 0.3, 1),
        clip-path 0.92s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .pg-hover-copy__sub {
      max-width: 24rem;
      line-height: 1.55;
      letter-spacing: 0.1em;
      text-transform: none;
      clip-path: inset(0 0 100% 0);
      transform: translate3d(0, 24px, 0);
      transition:
        opacity 0.78s cubic-bezier(0.16, 1, 0.3, 1),
        transform 0.78s cubic-bezier(0.16, 1, 0.3, 1),
        filter 0.78s cubic-bezier(0.16, 1, 0.3, 1),
        clip-path 0.78s cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* ★ 預設為可見（fallback）：若 GSAP / JS 在 LINE 等內建瀏覽器載入失敗或延遲，
       圖片仍會正常顯示，只是沒有進場動畫，而不是整塊空白。 */
    .pg-img-wrap {
      position: relative;
      width: 100%;
      flex: 1;
      overflow: hidden;
      background-color: #0d0d0d;
      border-radius: 2px;
    }

    /* ★ 只有確認 GSAP 就緒（已加上 pg-anim-ready）後才裁切，準備進場遮罩動畫。 */
    html.pg-anim-ready .pg-img-wrap {
      clip-path: inset(100% 0% 0% 0%);
    }

    /* ★ 高度加大到 140%，負值 -20%，為平移預留足夠空間，絕對不露黑底 */
    .pg-img-wrap img {
      position: absolute;
      top: -20%;
      left: 0;
      width: 100%;
      height: 140%;
      object-fit: cover;
      will-change: transform;
    }

    .pg-item-1 {
      grid-column: 1 / 6;
      grid-row: 1;
      height: 27.9vw;
    }

    .pg-item-2 {
      grid-column: 7 / 13;
      grid-row: 2;
      height: 33.75vw;
    }

    .pg-item-3 {
      grid-column: 4 / 10;
      grid-row: 3;
      height: 33.75vw;
    }

    .pg-item-4 {
      grid-column: 1 / 6;
      grid-row: 4;
      height: 27.9vw;
    }

    .pg-item-5 {
      grid-column: 7 / 13;
      grid-row: 5;
      height: 33.75vw;
    }

    .pg-item-6 {
      grid-column: 4 / 10;
      grid-row: 6;
      height: 33.75vw;
    }

    /* ── Scroll-driven Card Gallery ── */
    .gallery-cards-wrap {
      position: sticky;
      top: 0;
      height: 100vh;
      width: 100%;
      overflow: hidden;
      z-index: 2;
      pointer-events: none;
      margin-top: -100vh;
      /* overlap with gallery-header sticky layer */
    }

    .gc-card {
      position: absolute;
      left: var(--gc-l);
      top: var(--gc-t);
      width: var(--gc-w);
      height: var(--gc-h);
      border-radius: 10px;
      overflow: hidden;
      opacity: 0;
      will-change: transform, opacity;
      box-shadow: 0 24px 64px rgba(0, 0, 0, 0.55);
    }

    .gc-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    @media (max-width: 768px) {
      .gallery-header {
        position: relative;
        top: auto;
        height: auto;
        z-index: 4;
      }

      .pg-gallery {
        display: flex;
        flex-direction: column;
        gap: 15vw;
        padding: 10vw;
      }

      .pg-item {
        height: 70vw !important;
        margin-top: 0 !important;
      }

      .pg-hover-copy {
        padding: 18px;
      }

      .pg-hover-copy__body {
        max-width: 100%;
      }

      .pg-hover-copy__title {
        font-size: clamp(1.9rem, 9vw, 3.2rem);
      }
    }

    @media (hover: none) {
      .pg-item--hover-story .pg-hover-copy__veil {
        opacity: 1;
        transform: scaleY(1);
      }

      .pg-item--hover-story .pg-hover-copy__eyebrow,
      .pg-item--hover-story .pg-hover-copy__title,
      .pg-item--hover-story .pg-hover-copy__sub {
        opacity: 1;
        filter: blur(0px);
        clip-path: inset(0 0 0 0);
        transform: translate3d(0, 0, 0) skewY(0deg);
      }
    }

    .intro-panel .at-en,
    .intro-panel .at-zh {
      display: block;
      transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
      will-change: transform;
    }

    .intro-panel .flip-wrap {
      display: block;
      position: relative;
      clip-path: inset(-0.25em -9999px);
    }

    .intro-panel .at-zh {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(130%);
      white-space: nowrap;
      color: inherit;
    }

    .intro-panel .animated-text:hover .at-en,
    .intro-panel .animated-text.focused .at-en {
      transform: translateY(-130%);
    }

    .intro-panel .animated-text:hover .at-zh,
    .intro-panel .animated-text.focused .at-zh {
      transform: translateY(0);
    }

    @media (max-width: 768px) {
      .intro-panel .animated-text {
        pointer-events: none;
      }

      .intro-panel .animated-text .at-en,
      .intro-panel .animated-text:hover .at-en,
      .intro-panel .animated-text.focused .at-en {
        display: block !important;
        transform: none !important;
      }

      .intro-panel .animated-text .at-zh,
      .intro-panel .animated-text:hover .at-zh,
      .intro-panel .animated-text.focused .at-zh {
        display: none !important;
        transform: translateY(130%) !important;
      }
    }

    /* 🎯 尊重使用者偏好:降低動態 → 關閉血量高的濾鏡 */
    @media (prefers-reduced-motion: reduce) {

      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }

      .glow-bottom-left,
      .glow-center-left {
        filter: none;
      }
    }
  </style>

  <style>
    /* Premium UI Styles */
    #scroll-progress {
      position: fixed;
      top: 0;
      left: 0;
      height: 1.5px;
      width: 100%;
      background: rgba(255, 255, 255, 0.85);
      box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
      z-index: 99997;
      pointer-events: none;
      transform-origin: left;
      transform: scaleX(0);
      will-change: transform;
    }

    /* ── NAV wrapper ── */
    #nav {
      transition: opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1), transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    }

    #fixed-logo {
      position: fixed;
      top: 70px;
      left: 50%;
      transform: translateX(-50%);
      transform-origin: center center;
      z-index: 9999;
      pointer-events: auto;
      mix-blend-mode: difference;
      opacity: 0;
    }

    #fixed-logo img {
      height: clamp(20px, 2.2vw, 25px);
      width: auto;
      display: block;
    }

    /* ── Menu button (top-right) ── */
    #menu-btn {
      position: fixed;
      top: clamp(14px, 2vw, 30px);
      right: clamp(18px, 2.5vw, 40px);
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 18px;
      background: #fff;
      color: #000;
      font-family: 'DM Sans', sans-serif;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      cursor: pointer;
      border: none;
      outline: none;
      opacity: 0;
      transform: translateY(-12px);
      animation: menuBtnIn 0.5s cubic-bezier(0.2, 0.9, 0.3, 1) 3s forwards;
      transition: background 0.2s, color 0.2s, transform 0.55s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* nav 三元素隱藏狀態（向上滑出畫面）*/
    .show-nav-scroll #fixed-logo {
      transform: translateX(-50%) scaleY(0) !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }

    .show-nav-scroll #menu-btn {
      transform: translateY(-60px) !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }

    /* ── NAV_SCROLL bar ── */
    #nav_scroll_container {
      --ns-menu-bg: #efe6d8;
      --ns-menu-text: #171411;
      --ns-menu-accent: #c89a45;
      --ns-menu-line: rgba(23, 20, 17, 0.14);
      position: fixed;
      top: 30px;
      left: 50%;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      width: min(500px, calc(100vw - 80px));
      height: 64px;
      background-color: #141414;
      border-radius: 6px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
      overflow: hidden;
      opacity: 0;
      transform: translateX(-50%);
      will-change: transform, opacity;
      pointer-events: none;
    }

    #nav_scroll_container.is-blend-fadeout {
      filter: brightness(0.965) saturate(0.95) blur(0.2px);
      opacity: 0.965;
    }

    #nav_scroll {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 0 0 64px;
      width: 100%;
      min-height: 64px;
      padding: 0 24px;
      background: transparent;
      box-shadow: none;
      overflow: hidden;
      border-radius: inherit;
    }

    #nav_scroll_container.is-menu-open {
      pointer-events: auto;
      box-shadow: none;
    }

    /* 進場：橫線往左右拉出 → 縱向展開成 bar */
    @keyframes nsBarIn {
      0% {
        transform: translateX(-50%) scaleX(0) scaleY(0.04);
        opacity: 1;
        border-radius: 100px;
      }

      55% {
        transform: translateX(-50%) scaleX(1) scaleY(0.04);
        opacity: 1;
        border-radius: 100px;
      }

      100% {
        transform: translateX(-50%) scaleX(1) scaleY(1);
        opacity: 1;
        border-radius: 6px;
      }
    }

    /* 退場：縮回橫線 → 往中間收點 */
    @keyframes nsBarOut {
      0% {
        transform: translateX(-50%) scaleX(1) scaleY(1);
        opacity: 1;
        border-radius: 6px;
      }

      45% {
        transform: translateX(-50%) scaleX(1) scaleY(0.04);
        opacity: 1;
        border-radius: 100px;
      }

      100% {
        transform: translateX(-50%) scaleX(0) scaleY(0.04);
        opacity: 0;
        border-radius: 100px;
      }
    }

    #nav_scroll_container.ns-enter {
      animation: nsBarIn 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      pointer-events: auto;
    }

    #nav_scroll_container.ns-exit {
      animation: nsBarOut 0.5s cubic-bezier(0.4, 0, 0.6, 1) forwards;
      pointer-events: none;
    }

    /* 內容在 bar 展開後淡入 */
    #nav_scroll .ns-icon,
    #nav_scroll .ns-logo {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 0.18s ease, transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
    }

    #nav_scroll .ns-hamburger {
      transition: opacity 0.18s ease;
    }

    #nav_scroll_container.ns-enter #nav_scroll .ns-icon,
    #nav_scroll_container.ns-enter #nav_scroll .ns-logo {
      opacity: 1;
      transition-delay: 0.42s;
    }

    #nav_scroll_container.ns-exit #nav_scroll .ns-icon,
    #nav_scroll_container.ns-exit #nav_scroll .ns-logo {
      opacity: 0;
      transition-delay: 0s;
    }

    #nav_scroll_container.is-menu-open #nav_scroll {
      border-bottom: 1px solid var(--ns-menu-line);
    }

    #nav_scroll_container.is-menu-open #nav_scroll .ns-icon svg {
      stroke: var(--ns-menu-text);
    }

    #nav_scroll_container.is-menu-open #nav_scroll .ns-logo img {
      filter: brightness(0);
    }

    #nav_scroll .ns-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      cursor: pointer;
      background: none;
      border: none;
    }

    #nav_scroll .ns-icon:hover {
      opacity: 0.7 !important;
    }

    #nav_scroll .ns-icon svg {
      width: 25px;
      height: 25px;
      stroke: #ffffff;
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    #nav_scroll .ns-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    #nav_scroll .ns-logo img {
      height: 22px;
      width: auto;
      display: block;
      filter: brightness(0) invert(1);
    }

    /* ── hamburger → + morph (2 lines) ── */
    .ns-ham-svg {
      overflow: visible;
    }

    /* 關閉 → 兩條線：快 */
    .ns-ham-svg line {
      transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
      transform-origin: 9px 12px;
      transform-box: view-box;
    }

    /* 開啟 → X：慢一點 */
    #nav_scroll_container.is-menu-open .ns-ham-svg line {
      transition: transform 0.45s cubic-bezier(0.76, 0, 0.24, 1);
    }

    .ns-ham-l1 {
      transform: translateY(0);
    }

    .ns-ham-l2 {
      transform: translateY(0);
    }

    #nav_scroll_container.is-menu-open .ns-ham-l1 {
      transform: rotate(45deg);
    }

    #nav_scroll_container.is-menu-open .ns-ham-l2 {
      transform: rotate(-45deg);
    }

    .ns-dropdown {
      position: relative;
      flex: 1 1 auto;
      width: 100%;
      max-width: none;
      margin-top: 0;
      padding: 0;
      border-radius: 0;
      background: transparent;
      overflow: auto;
      opacity: 0;
      transform: translateY(24px);
      pointer-events: none;
      overscroll-behavior: contain;
      scrollbar-width: none;
    }

    .ns-dropdown::-webkit-scrollbar {
      display: none;
    }

    .ns-dropdown::before {
      display: none;
    }

    .ns-dropdown__inner {
      position: relative;
      height: 100%;
      padding: 0;
    }

    .ns-dropdown__eyebrow {
      margin-bottom: 18px;
      color: rgba(255, 255, 255, 0.48);
      font-family: 'DM Sans', sans-serif;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.32em;
      text-transform: uppercase;
    }

    .ns-dropdown__grid {
      display: grid;

      gap: 28px;
      align-items: start;
    }

    .ns-menu-group {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 10px;
    }

    .ns-menu-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding: 10px 0;
      color: rgba(255, 255, 255, 0.88);
      text-decoration: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      transition: color 0.25s ease, border-color 0.25s ease;
    }

    .ns-menu-link:hover,
    .ns-menu-link:focus-visible {
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.36);
      outline: none;
    }

    .ns-menu-link-main {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .ns-menu-link-title {
      font-family: "Zalando Sans SemiExpanded", "DM Sans", sans-serif;
      font-size: 2rem;
      font-weight: 700;
      text-transform: uppercase;
      /* grid stack: width = max(EN, ZH), height = one line */
      display: inline-grid;
      grid-template-rows: 1fr;
      overflow: hidden;
    }

    .ns-menu-link-title .nlt-en,
    .ns-menu-link-title .nlt-zh {
      grid-area: 1 / 1;
      transition: transform 0.42s cubic-bezier(0.76, 0, 0.24, 1);
    }

    /* EN visible by default */
    .ns-menu-link-title .nlt-en {
      transform: translateY(0);
    }

    /* ZH hidden below */
    .ns-menu-link-title .nlt-zh {
      transform: translateY(100%);
      text-transform: none;
      letter-spacing: 0.05em;
    }

    /* hover: EN slides up, ZH slides in */
    .ns-menu-link:hover .ns-menu-link-title .nlt-en,
    .ns-menu-link:focus-visible .ns-menu-link-title .nlt-en {
      transform: translateY(-100%);
    }

    .ns-menu-link:hover .ns-menu-link-title .nlt-zh,
    .ns-menu-link:focus-visible .ns-menu-link-title .nlt-zh {
      transform: translateY(0);
    }

    .ns-menu-link-sub {
      color: rgba(255, 255, 255, 0.44);
      font-family: 'DM Sans', sans-serif;
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .ns-menu-link-icon {
      flex: 0 0 auto;
      width: 16px;
      height: 16px;
      stroke: currentColor;
      fill: none;
      stroke-width: 1.8;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .ns-dropdown__aside {
      display: flex;
      flex-direction: column;
      gap: 18px;
      padding: 16px 18px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.03);
    }

    .ns-dropdown__label {
      color: rgba(255, 255, 255, 0.42);
      font-family: 'DM Sans', sans-serif;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.28em;
      text-transform: uppercase;
    }

    .ns-dropdown__headline {
      color: #fff;
      font-family: "Zalando Sans SemiExpanded", "DM Sans", sans-serif;
      font-size: 18px;
      line-height: 1.25;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .ns-dropdown__copy {
      color: rgba(255, 255, 255, 0.58);
      font-family: 'DM Sans', sans-serif;
      font-size: 13px;
      line-height: 1.7;
    }

    .ns-dropdown__socials {
      display: flex;
      align-items: center;
      gap: 14px;
      padding-top: 4px;
    }

    .ns-social-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 1px solid rgba(163, 255, 0, 0.22);
      color: #a3ff00;
      background: rgba(163, 255, 0, 0.04);
      transition: transform 0.25s ease, opacity 0.25s ease, background 0.25s ease;
    }

    .ns-social-link:hover,
    .ns-social-link:focus-visible {
      opacity: 1;
      transform: translateY(-2px);
      background: rgba(163, 255, 0, 0.1);
      outline: none;
    }

    .ns-social-link svg {
      width: 15px;
      height: 15px;
      fill: currentColor;
    }

    .ns-dropdown__item,
    .ns-social-link {
      opacity: 0;
      transform: translateY(12px);
    }

    .ns-menu-stage {
      position: relative;
      display: flex;
      flex-direction: column;
      min-height: 100%;
      background: var(--ns-menu-bg);
      color: var(--ns-menu-text);
    }

    .ns-menu-topline {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: 16px;
      min-height: 48px;
      padding: 0 28px;
      border-bottom: 1px solid var(--ns-menu-line);
      font-family: 'DM Sans', sans-serif;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .ns-menu-topline__brand,
    .ns-menu-topline__contact {
      color: inherit;
      text-decoration: none;
    }

    .ns-menu-topline__contact:hover,
    .ns-menu-topline__contact:focus-visible {
      color: var(--ns-menu-accent);
      outline: none;
    }

    .ns-menu-rows {
      flex: 1 1 auto;
      display: grid;
      grid-template-rows: repeat(5, minmax(92px, 1fr));
    }

    .ns-showcase-row {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 92px;
      border-bottom: 1px solid var(--ns-menu-line);
      color: var(--ns-menu-text);
      text-decoration: none;
      overflow: hidden;
      transition:
        background-color 0.45s cubic-bezier(0.16, 1, 0.3, 1),
        color 0.45s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .ns-showcase-row:hover,
    .ns-showcase-row:focus-visible {
      background: rgba(23, 20, 17, 0.035);
      outline: none;
    }

    .ns-showcase-row__index {
      position: absolute;
      bottom: 15%;
      /* left: calc(50% - min(16vw, 250px)); */
      font-family: 'DM Sans', sans-serif;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.08em;
    }

    .ns-showcase-row__title {
      position: relative;
      z-index: 2;
      display: block;
      font-family: "Zalando Sans SemiExpanded", "DM Sans", sans-serif;
      font-weight: 600;
      font-size: clamp(56px, 7vw, 90px);
      line-height: 0.92;
      letter-spacing: -0.04em;
      text-transform: uppercase;
      overflow: hidden;
      transition: color 0.58s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .ns-showcase-row__title-track {
      position: relative;
      display: block;
      overflow: hidden;
      padding: 0 0.06em 0.1em;
      will-change: transform;
    }

    .ns-showcase-row__title-layer {
      display: block;
      will-change: transform;
    }

    .ns-showcase-row__title-layer.is-primary {
      position: relative;
      color: inherit;
    }

    .ns-showcase-row__title-layer.is-accent {
      position: absolute;
      inset: 0;
      color: var(--ns-menu-accent);
    }

    .ns-showcase-row.is-previewed {
      color: var(--ns-menu-accent);
    }

    .ns-showcase-row.is-previewed .ns-showcase-row__index {
      color: rgba(23, 20, 17, 0.55);
    }

    .ns-showcase-row__thumb {
      position: absolute;
      top: 50%;
      z-index: 1;
      width: clamp(138px, 18vh, 208px);
      aspect-ratio: 3 / 2;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      will-change: transform, opacity;
      box-shadow: 0 24px 54px rgba(23, 20, 17, 0.18);
      transform: translateY(-50%);
    }

    .ns-showcase-row__thumb.is-left {
      left: calc(50% - min(23vw, 390px));
      clip-path: inset(0% 0% 0% 100%);
    }

    .ns-showcase-row__thumb.is-right {
      left: calc(50% + min(10vw, 188px));
      clip-path: inset(0% 100% 0% 0%);
    }

    .ns-showcase-row__thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transform: scale(1.3);
      filter: saturate(0.92) contrast(1.02);
      will-change: transform;
    }

    .ns-showcase-row__thumb.is-left img {
      object-position: center;
    }

    .ns-showcase-row__thumb.is-right img {
      object-position: center;
    }

    .ns-menu-preview {
      display: none;
    }

    .ns-menu-preview__card {
      display: none;
    }

    .ns-menu-preview__card.is-left {
      left: auto;
    }

    .ns-menu-preview__card.is-right {
      left: auto;
    }



    /* 改大文字跟LOGO大小 */

    @media (min-width: 1730px) {
      .huge-text {
        font-size: clamp(9rem, 10vw, 11.5rem);
      }

      .small-tag {
        font-size: 0.75rem;
      }
    }

    @media (min-width: 1560px) and (max-width: 1730px) {
      .huge-text {
        font-size: 10rem;
      }

      .small-tag {
        padding-top: 10px
      }
    }

    @media (min-width: 1280px) and (max-width: 1560px) {
      .huge-text {
        font-size: 9rem;
      }

      .small-tag {
        padding-top: 30px
      }
    }

    @media (min-width: 1024px) and (max-width: 1280px) {
      .huge-text {
        font-size: 7rem;
      }

      #fixed-logo {
        top: 50px
      }

      .small-tag {
        padding-top: 30px
      }
    }


    @media (min-width: 768px) and (max-width: 1024px) {
      .huge-text {
        font-size: 5rem;
      }

      #fixed-logo {
        top: 30px
      }

      .small-tag {
        padding-top: 30px
      }
    }



    @media (max-width: 1280px) {

      .ns-showcase-row,
      .ns-showcase-row:hover,
      .ns-showcase-row:focus-visible,
      .ns-showcase-row.is-previewed {
        background: transparent;
        color: var(--ns-menu-text);
        transition: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
        touch-action: manipulation;
      }

      .ns-showcase-row__title,
      .ns-showcase-row__title-track,
      .ns-showcase-row__title-layer,
      .ns-showcase-row__index {
        transition: none;
        will-change: auto;
      }

      .ns-showcase-row__title-track,
      .ns-showcase-row__title-layer,
      .ns-showcase-row__index {
        transform: none !important;
      }

      .ns-showcase-row__title-layer.is-accent,
      .ns-showcase-row__thumb,
      .ns-menu-preview {
        display: none !important;
      }

      .ns-showcase-row.is-previewed .ns-showcase-row__index {
        color: inherit;
      }
    }

    .ns-menu-preview__card img {
      display: none;
    }

    /* ── dropdown contact footer ── */
    .ns-dd-contact {
      border-top: 1px solid rgba(255, 255, 255, 0.10);
      margin-top: 12px;
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .ns-dd-contact__row {
      display: flex;
      align-items: center;
      gap: 18px;
      flex-wrap: wrap;
    }

    .ns-dd-social {
      font-family: 'DM Sans', sans-serif;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.62);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .ns-dd-social:hover {
      color: #fff;
    }

    .ns-dd-info {
      font-family: 'DM Sans', sans-serif;
      font-size: 12px;
      letter-spacing: 0.06em;
      color: rgba(255, 255, 255, 0.54);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .ns-dd-info:hover {
      color: rgba(255, 255, 255, 0.9);
    }

    .ns-dd-addr {
      cursor: default;
    }

    @media (max-width: 767px) {
      .scroll-track {
        height: auto;
      }

      #nav {
        display: none;
      }

      .sticky-container {
        position: relative;
        height: auto;
        overflow: visible;
      }

      .hero-section {
        position: relative;
        height: 90vh;
      }

      .overlay-top {
        padding-top: 90px;
      }

      .grid-section {
        display: none;
      }

      .top-header {
        display: none;
      }

      #nav_scroll_container {
        position: fixed;
        top: 16px;
        width: calc(100vw - 24px);
        opacity: 1 !important;
        pointer-events: auto !important;
        animation: none !important;
        transform: translateX(-50%) !important;
        transition: none !important;
        will-change: auto;
      }

      #nav_scroll_container.ns-enter,
      #nav_scroll_container.ns-exit {
        opacity: 1 !important;
        animation: none !important;
        transform: translateX(-50%) !important;
      }

      #nav_scroll {
        width: 100%;
        padding: 0 20px;
      }

      #nav_scroll .ns-icon,
      #nav_scroll .ns-logo {
        opacity: 1 !important;
        transform: none !important;
      }

      .ns-dropdown {
        width: 100%;
      }

      .ns-dropdown__inner {
        padding: 0;
      }

      .ns-menu-topline {
        padding: 0 18px;
        font-size: 11px;
      }

      .ns-menu-rows {
        grid-template-rows: repeat(5, minmax(76px, 1fr));
      }

      .ns-showcase-row {
        min-height: 76px;
      }

      .ns-showcase-row__title {
        font-size: clamp(38px, 11vw, 56px);
      }

      .ns-showcase-row__index {
        bottom: 20%;
        /* left: 18px; */
      }

      .ns-showcase-row__thumb {
        display: none;
      }

      .ns-menu-preview {
        display: none;
      }

      .ns-dropdown__grid {
        grid-template-columns: 1fr;
        gap: 18px;
      }

      .ns-dropdown__headline {
        font-size: 16px;
      }
    }

    #menu-btn:hover {
      background: #e0e0e0;
    }

    #menu-btn .menu-lines {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    #menu-btn .menu-lines span {
      display: block;
      width: 16px;
      height: 1.5px;
      background: currentColor;
    }

    @keyframes menuBtnIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    #cursor-dot,
    #cursor-ring {
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 99998;
    }

    #cursor-dot {
      width: 6px;
      height: 6px;
      background: #fff;
      border-radius: 50%;
      margin: -3px 0 0 -3px;
      mix-blend-mode: difference;
      transition: transform 0.03s ease, opacity 0.3s ease, width 0.3s ease, height 0.3s ease;
      will-change: transform;
      opacity: 0;
      /* Hidden by default to favor grid mouse trail */
    }

    #cursor-ring {
      --cursor-label-enter-duration: 0.16s;
      --cursor-label-exit-duration: 0.14s;
      --cursor-label-ease: cubic-bezier(0.22, 1, 0.36, 1);
      --cursor-ring-size: 68px;
      --cursor-ring-rest-scale: 0.5294117647;
      width: var(--cursor-ring-size);
      height: var(--cursor-ring-size);
      border: 0;
      /* Hidden by default */
      border-radius: 50%;
      margin: calc(var(--cursor-ring-size) / -2) 0 0 calc(var(--cursor-ring-size) / -2);
      mix-blend-mode: difference;
      will-change: transform;
      contain: layout paint style;
      transition: opacity 0.3s ease;
    }

    #cursor-ring::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0);
      transform: scale(var(--cursor-ring-rest-scale));
      transition: transform 0.24s cubic-bezier(0.23, 1, 0.32, 1),
        background-color 0.24s ease,
        opacity 0.24s ease;
      will-change: transform, opacity;
    }




    .mouseTracker--01 {
      animation: mouseTracker_fadeOut 1s forwards;
      border-radius: 2px;
      opacity: 1;
      pointer-events: none;
      position: fixed;
      z-index: 99999;
    }

    @keyframes mouseTracker_fadeOut {
      to {
        opacity: 0;
      }
    }

    #cursor-dot.is-link {
      opacity: 0;
    }

    #cursor-ring.is-link,
    #cursor-ring.is-leaving {
      position: fixed;
      display: block;
      background: transparent;
      border-color: transparent;
      mix-blend-mode: difference;
      translate: none;
      transition: opacity 0.24s ease;
    }

    #cursor-ring.is-link:not(.is-leaving)::before {
      transform: scale(1);
      background: #fff;
    }

    #cursor-ring.is-leaving::before {
      transform: scale(var(--cursor-ring-rest-scale));
      background: rgba(255, 255, 255, 0);
    }

    #cursor-ring.is-link::after,
    #cursor-ring.is-leaving::after {
      content: attr(data-cursor-label);
      position: absolute;
      top: 50%;
      left: 50%;
      width: 52px;
      height: 52px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000;
      font-family: 'DM Sans', sans-serif;
      font-size: 10px;
      font-weight: 800;
      line-height: 1;
      letter-spacing: 0.01em;
      text-align: center;
      text-transform: uppercase;
      white-space: normal;
      overflow-wrap: anywhere;
      pointer-events: none;
      opacity: 0;
      transform: translate(-50%, -50%);
      will-change: opacity;
    }



    #cursor-ring.is-link::after {
      opacity: 1;
      transition: opacity 0.12s ease;
    }

    #cursor-ring.is-leaving::after {
      opacity: 0;
      transition: opacity 0.12s ease;
    }

    @keyframes nd-cursor-label-in {
      from {
        clip-path: inset(0 100% 0 0);
      }

      to {
        clip-path: inset(0 0 0 0);
      }
    }

    @keyframes nd-cursor-label-out {
      from {
        clip-path: inset(0 0 0 0);
      }

      to {
        clip-path: inset(0 100% 0 0);
      }
    }

    @keyframes nd-cursor-label-fade-in {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    @keyframes nd-cursor-label-fade-out {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }

    /* 🎯 自訂鼠標只在 PC(可 hover、精細指標、寬度 > 1024px)顯示;
       iPad/手機/任何觸控裝置一律隱藏 */
    @media (max-width: 1024px),
    (hover: none),
    (pointer: coarse) {

      #cursor-dot,
      #cursor-ring,
      .mouseTracker--01 {
        display: none;
      }
    }

    /* Footer CSS */
    .site-footer {
      position: relative;
      overflow: visible;
      background: #000;
      color: #fff;
      padding: 0;
      font-family: 'DM Sans', sans-serif;
    }

    .footer-top {
      padding: 3vw 2.5vw;
      position: relative;
      z-index: 5;
      background-color: #000000;
    }
    
    

    .footer-brand-title {
      font-family: 'Zalando Sans SemiExpanded', 'DM Sans', sans-serif;
      /* font-size: clamp(3rem, 10vw, 12rem); */
      font-size: clamp(4rem, 15vw, 11.5rem);
      font-weight: 600;
      text-transform: uppercase;
      line-height: 0.88;
      letter-spacing: 0.02em;
      margin-bottom: 40px;
      color: #fff;
    }

    .footer-brand-title sup {
      font-size: 0.13em;
      vertical-align: top;
      letter-spacing: 0;
    }

    .footer-info-bar {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #222;
      padding-top: 30px;
      margin-bottom: 40px;
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #ffffff;
    }

    .footer-main-content {
      display: grid;
      grid-template-columns: 1.4fr 1fr;
      /*gap: 40px;*/
    }

    .footer-description {
      font-size: 14px;
      line-height: 1.65;
      color: #666;
      max-width: 450px;
      margin-bottom: 32px;
    }
.footer-contact-info a:hover{
        opacity: 0.6;
}
    .footer-contact-info a {
      display: block;
      color: #fff;
      text-decoration: none;
      font-size: clamp(20px, 3.5vw, 50px);
      font-weight: 400;
      margin-bottom: 4px;
      transition: opacity 0.2s;
    }

    .footer-contact-info a:hover {
      opacity: 0.6;
    }

    .footer-contact-info span {
      color: #ffffff;
      font-size: clamp(18px, 2.5vw, 30px);
    }

    .web_add {
      color: #575757;
    }

    .footer-nav-links {
      display: flex;
      gap: 28px;
      margin-top: 38px;
    }

    .footer-nav-links a {
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      transition: opacity 0.2s;
    }

    .footer-nav-links a:hover {
      opacity: 0.5;
    }

    .footer-right-panel {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-start;
    }

    .footer-video-thumb {
      width: 100%;
      max-width: 340px;
      aspect-ratio: 16 / 9;
      overflow: hidden;
      position: relative;
    }

    .footer-video-thumb img,
    .footer-video-thumb video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .footer-copyright-bridge {
      position: absolute;
      bottom: 0;
      right: 6%;
      width: clamp(90px, 10vw, 148px);
      height: clamp(90px, 10vw, 148px);

      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateY(50%);
      z-index: 20;
    }

    .footer-copyright-bridge span {
      font-family: 'Zalando Sans SemiExpanded', 'DM Sans', sans-serif;
      font-size: 180px;
      font-weight: 600;
      color: #fff;
      line-height: 1;
    }

   .footer-parallax-section {
      height: 50vh;
      width: 100%;
      overflow: hidden;
      position: relative;
      z-index: 1;
    }
    .footer-parallax-copy {
      position: absolute;
      top: 30px;
      left: 40px;
      z-index: 3;
      color: rgba(255, 255, 255, 0.65);
      font-family: 'DM Sans', sans-serif;
      font-size: 12px;
      letter-spacing: 0.06em;
      line-height: 1.7;
      pointer-events: none;
    }
    
     @media (max-width: 768px) {
      .footer-top {
        padding: 1.5rem;
            line-height: normal;
      }
      
      .footer-nav-links{
          gap: 16px;
        margin-top: 24px;
        flex-wrap: wrap;
          
      }
      .web_add{
             margin-top: 8px;
      }
    


     }

     @media (max-width: 1440px) {
     .footer-parallax-section {
      height: 300px;
      
    }
    }


    .footer-parallax-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: var(--footer-bg-image, none);
      background-attachment: fixed;
      background-size: contain;
      background-position: bottom;
      opacity: 1;
      mix-blend-mode: luminosity;
    }



    /* ── Footer Reveal System ───────────────────────────────── */
    .footer-info-line {
      height: 1px;
      background: #222;
      transform-origin: left center;
      margin-bottom: 18px;
      will-change: transform;
    }
    .frev-wrap {
      overflow: hidden;
      display: inline-block;
      vertical-align: bottom;
    }
    .footer-video-cover {
      position: absolute;
      inset: 0;
      background: #0a0a0a;
      z-index: 2;
      pointer-events: none;
      transform-origin: right center;
      will-change: transform;
    }

    @media (max-width: 1024px) {

      .footer-copyright-bridge,
      .footer-parallax-section {
        display: none !important;
      }
      /*FWA徽章*/
      .fwa-badge{display:none;}
    }

    @media (max-width: 768px) {
      .footer-main-content {
        grid-template-columns: 1fr;
      }

      .footer-right-panel {
        align-items: flex-start;
        margin-top: 40px;
      }
    }
  </style>

  <style>
    /* Loader CSS */
    #nudot-loader {
      position: fixed;
      inset: 0;
      z-index: 99999;
      overflow: hidden;
      color: #fff;
      pointer-events: auto;
      opacity: 1;
      visibility: visible;
      animation: ndLoaderShieldOff 0.01s linear 3.15s forwards;
    }

    #nudot-loader .nd-mask {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      transform: translate(-50%, -50%);
      background: transparent;
      box-shadow: 0 0 0 150vmax #080808;
      animation: ndBoxOpen 1.2s cubic-bezier(0.76, 0, 0.24, 1) 2.6s forwards;
    }

    @keyframes ndBoxOpen {
      0% {
        width: 0;
        height: 0;
      }

      15% {
        width: 7vw;
        height: 4vw;
      }

      100% {
        width: 300vmax;
        height: 300vmax;
      }
    }

    #nudot-loader .nd-logo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
      display: flex;
      align-items: center;
      gap: 28px;
    }

    #nudot-loader .nd-letter {
      font-family: 'Zalando Sans SemiExpanded', 'DM Sans', 'Helvetica Neue', Arial, sans-serif;
      font-size: clamp(44px, 8vw, 104px);
      font-weight: 600;
      letter-spacing: -0.02em;
      line-height: 1;
    }

    #nudot-loader .nd-n {
      opacity: 0;
      filter: blur(10px);
      transform: translateY(6px) scale(1.15);
      animation:
        ndLetterIn 0.55s cubic-bezier(0.2, 0.9, 0.3, 1) 0.3s forwards,
        ndSpreadL 1.1s cubic-bezier(0.76, 0, 0.24, 1) 2.0s forwards,
        ndFadeOut 0.45s ease 2.9s forwards;
    }

    #nudot-loader .nd-d {
      opacity: 0;
      filter: blur(10px);
      transform: translateY(6px) scale(1.15);
      animation:
        ndLetterIn 0.55s cubic-bezier(0.2, 0.9, 0.3, 1) 0.6s forwards,
        ndSpreadR 1.1s cubic-bezier(0.76, 0, 0.24, 1) 2.0s forwards,
        ndFadeOut 0.45s ease 2.9s forwards;
    }

    #nudot-loader .nd-icon {
      width: clamp(44px, 8vw, 104px);
      height: clamp(44px, 8vw, 104px);
      opacity: 1;
      transform: none;
      animation: ndIconOut 0.45s ease 2.0s forwards;
    }

    #nudot-loader .nd-icon video {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    @keyframes ndLetterIn {
      to {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0) scale(1);
      }
    }

    @keyframes ndIconOut {
      to {
        opacity: 0;
        transform: scale(0.5);
      }
    }

    @keyframes ndSpreadL {
      to {
        transform: translateX(calc(-50vw + 120px));
      }
    }

    @keyframes ndSpreadR {
      to {
        transform: translateX(calc(50vw - 120px));
      }
    }

    @keyframes ndFadeOut {
      to {
        opacity: 0;
      }
    }

    @keyframes ndLoaderShieldOff {
      to {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      }
    }
  </style>

 <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NUDOT 核點創意",
    "url": "https://nudot.com.tw/",
    "logo": "https://nudot.com.tw/images/pc_logo.svg",
    "description": "台灣頂尖品牌策略設計工作室，專精品牌識別、數位互動、Gen-AI Visual 與網頁開發，打造 AWW／FWA 等級視覺體驗。",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+886-983-750-522",
      "email": "hello@nudot.com.tw",
      "contactType": "customer service",
      "areaServed": "TW",
      "availableLanguage": ["Chinese", "English"]
    }
  }
  </script>
  <style id="seo-nav-cloak">.ns-showcase-row__index::before,.ns-showcase-row__title-layer::before{content:attr(data-text);}</style>
</head>

<body>

  <div class="page-transition-shell js-page-transition-shell" aria-hidden="true">
    <div class="page-transition-curtain js-page-transition-curtain"></div>
    <div class="page-transition-frame js-page-transition-frame">
      <div class="page-transition-loader js-page-transition-loader"></div>
      <div class="page-transition-counter js-page-transition-counter">[ <span
          class="js-page-transition-counter-num">00</span> ]</div>
      <div class="page-transition-panel js-page-transition-panel">
        <div class="page-transition-meta is-top-left">NUDOT</div>
        <div class="page-transition-meta is-top-right js-page-transition-meta-to">index.html</div>
        <div class="page-transition-copy">
          <div class="page-transition-eyebrow js-page-transition-eyebrow">NUDOT CREATIVE STUDIO</div>
          <div class="page-transition-title js-page-transition-title">HOME</div>
          <div class="page-transition-subtitle js-page-transition-subtitle">Shared page-transition layer for the home
            page and work archive.</div>
        </div>
        <div class="page-transition-meta is-bottom-left">Digital / Motion / Interface</div>
        <div class="page-transition-meta is-bottom-right">2026</div>
      </div>
    </div>
  </div>

  <div data-barba="wrapper">
    <div data-barba="container" data-barba-namespace="home">

      <div id="scroll-progress"></div>
      <!-- ── NAV (頂部原始三元素) ── -->
      <div id="nav">
        <a id="fixed-logo" href="#nav" data-cursor="HOME" aria-label="NUDOT home">
          <img src="images/pc_logo.svg" alt="NUDOT 核點創意" width="45" height="35" fetchpriority="high" decoding="async">
        </a>
        <!-- <button id="menu-btn" aria-label="Open menu">
      <div class="menu-lines">
        <span></span>
        <span></span>
      </div>
      Menu
    </button> -->
      </div>

      <!-- ── NAV_SCROLL (滾動後出現的 bar) ── -->
      <div id="nav_scroll_container" inert>
        <div id="nav_scroll">
          <!-- 左側信封 -->
          <a class="ns-icon" href="contact" data-cursor="CONTACT" aria-label="Contact">
            <svg viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
          <!-- 中間 Logo -->
          <a class="ns-logo" href="index" data-cursor="HOME" aria-label="NUDOT home">
            <img src="images/pc_logo.svg" alt="NUDOT 核點創意" width="45" height="35" loading="lazy" decoding="async">
          </a>
          <!-- 右側漢堡 → + -->
          <button class="ns-icon ns-hamburger" id="nav-scroll-menu-btn" data-cursor="OPEN" aria-label="Open menu"
            aria-expanded="false" aria-controls="nav-scroll-dropdown">
            <svg class="ns-ham-svg" viewBox="0 0 24 24">
              <line class="ns-ham-l1" x1="5" y1="9" x2="19" y2="9" />
              <line class="ns-ham-l2" x1="5" y1="15" x2="19" y2="15" />
            </svg>
          </button>
        </div>
        <div class="ns-dropdown" id="nav-scroll-dropdown" aria-hidden="true">
          <div class="ns-dropdown__inner" id="nav-scroll-dropdown-content">
            <div class="ns-menu-stage">
              <!-- <div class="ns-menu-topline ns-dropdown__item">
            <span class="ns-menu-topline__brand">NUDOT CREATIVE STUDIO</span>
            <a class="ns-menu-topline__contact" href="#site-footer">CONTACT</a>
          </div> -->

                 <div class="ns-menu-rows">
                <a class="ns-showcase-row ns-dropdown__item" href="index" data-transition-label="Home" aria-label="首頁">
                  <span class="ns-showcase-row__index" data-text="( 首頁 )"></span>
                  <span class="ns-showcase-row__thumb is-left" aria-hidden="true">
                    <img src="images/nav/1.webp" data-nav-src="images/nav/1.webp" alt="" width="300" height="200"
                      loading="lazy" decoding="async">
                  </span>
                  <span class="ns-showcase-row__title">
                    <span class="ns-showcase-row__title-track">
                      <span class="ns-showcase-row__title-layer is-primary" data-text="HOME"></span>
                      <span class="ns-showcase-row__title-layer is-accent" aria-hidden="true" data-text="HOME"></span>
                    </span>
                  </span>
                  <span class="ns-showcase-row__thumb is-right" aria-hidden="true">
                    <img src="images/nav/2.webp" data-nav-src="images/nav/2.webp" alt="" width="300" height="200"
                      loading="lazy" decoding="async">
                  </span>
                </a>

                <a class="ns-showcase-row ns-dropdown__item" href="about" data-transition-label="About" aria-label="核點創意">
                  <span class="ns-showcase-row__index" data-text="( 核點創意 )"></span>
                  <span class="ns-showcase-row__thumb is-left" aria-hidden="true">
                    <img src="images/nav/3.webp" data-nav-src="images/nav/3.webp" alt="" width="300" height="200"
                      loading="lazy" decoding="async">
                  </span>
                  <span class="ns-showcase-row__title">
                    <span class="ns-showcase-row__title-track">
                      <span class="ns-showcase-row__title-layer is-primary" data-text="ABOUT"></span>
                      <span class="ns-showcase-row__title-layer is-accent" aria-hidden="true" data-text="ABOUT"></span>
                    </span>
                  </span>
                  <span class="ns-showcase-row__thumb is-right" aria-hidden="true">
                    <img src="images/nav/4.webp" data-nav-src="images/nav/4.webp" alt="" width="300" height="200"
                      loading="lazy" decoding="async">
                  </span>
                </a>

                <a class="ns-showcase-row ns-dropdown__item" href="work" data-transition-label="Work" aria-label="設計案例">
                  <span class="ns-showcase-row__index" data-text="( 設計案例 )"></span>
                  <span class="ns-showcase-row__thumb is-left" aria-hidden="true">
                    <img src="images/nav/5.webp" data-nav-src="images/nav/5.webp" alt="" width="300" height="200"
                      loading="lazy" decoding="async">
                  </span>
                  <span class="ns-showcase-row__title">
                    <span class="ns-showcase-row__title-track">
                      <span class="ns-showcase-row__title-layer is-primary" data-text="WORK"></span>
                      <span class="ns-showcase-row__title-layer is-accent" aria-hidden="true" data-text="WORK"></span>
                    </span>
                  </span>
                  <span class="ns-showcase-row__thumb is-right" aria-hidden="true">
                    <img src="images/nav/6.webp" data-nav-src="images/nav/6.webp" alt="" width="300" height="200"
                      loading="lazy" decoding="async">
                  </span>
                </a>

                <a class="ns-showcase-row ns-dropdown__item" href="lab" data-transition-label="Labs" aria-label="核點實驗室">
                  <span class="ns-showcase-row__index" data-text="( 核點實驗室 )"></span>
                  <span class="ns-showcase-row__thumb is-left" aria-hidden="true">
                    <img src="images/nav/7.webp" data-nav-src="images/nav/7.webp" alt="" width="300" height="200"
                      loading="lazy" decoding="async">
                  </span>
                  <span class="ns-showcase-row__title">
                    <span class="ns-showcase-row__title-track">
                      <span class="ns-showcase-row__title-layer is-primary" data-text="LABS"></span>
                      <span class="ns-showcase-row__title-layer is-accent" aria-hidden="true" data-text="LABS"></span>
                    </span>
                  </span>
                  <span class="ns-showcase-row__thumb is-right" aria-hidden="true">
                    <img src="images/nav/8.webp" data-nav-src="images/nav/8.webp" alt="" width="300" height="200"
                      loading="lazy" decoding="async">
                  </span>
                </a>

                <a class="ns-showcase-row ns-dropdown__item" href="contact" data-transition-label="Contact" aria-label="聯繫我們">
                  <span class="ns-showcase-row__index" data-text="( 聯繫我們 )"></span>
                  <span class="ns-showcase-row__thumb is-left" aria-hidden="true">
                    <img src="images/nav/9.webp" data-nav-src="images/nav/9.webp" alt="" width="300" height="200"
                      loading="lazy" decoding="async">
                  </span>
                  <span class="ns-showcase-row__title">
                    <span class="ns-showcase-row__title-track">
                      <span class="ns-showcase-row__title-layer is-primary" data-text="CONTACT"></span>
                      <span class="ns-showcase-row__title-layer is-accent" aria-hidden="true" data-text="CONTACT"></span>
                    </span>
                  </span>
                  <span class="ns-showcase-row__thumb is-right" aria-hidden="true">
                    <img src="images/nav/10.webp" data-nav-src="images/nav/10.webp" alt="" width="300" height="200"
                      loading="lazy" decoding="async">
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="cursor-dot"></div>
      <div id="cursor-ring" data-cursor-label="EXPLORE" data-cursor-side="right"></div>

      <div id="nudot-loader">
        <div class="nd-mask"></div>
        <div class="nd-logo">
          <span class="nd-letter nd-n">N</span>
          <span class="nd-icon"><video src="images/loading.mp4" autoplay muted playsinline preload="auto"
              disableRemotePlayback fetchpriority="high" aria-hidden="true"></video></span>
          <span class="nd-letter nd-d">D</span>
        </div>
      </div>

      <script>
        // Anchor hero reveal to page-load time using performance.now()
        // DOMContentLoaded fires AFTER all defer scripts → _heroTl is guaranteed to exist
        var _loaderTarget = 2700; // ms from navigation start
        var _loaderDismissTarget = 3200; // release click shield shortly after loader exit

        function dismissNudotLoader() {
          var el = document.getElementById('nudot-loader');
          if (!el || el.dataset.dismissed === 'true') return;
          el.dataset.dismissed = 'true';
          window._nudotLoaderDismissed = true;
          el.style.pointerEvents = 'none';
          el.style.opacity = '0';
          el.style.visibility = 'hidden';
          document.dispatchEvent(new Event('nudot:loader-dismissed'));
          window.setTimeout(function () {
            if (el && el.parentNode) el.remove();
          }, 220);
        }

        document.addEventListener('DOMContentLoaded', function () {
          var remaining = Math.max(0, _loaderTarget - performance.now());
          var dismissRemaining = Math.max(0, _loaderDismissTarget - performance.now());
          setTimeout(function () {
            if (window._heroTl) window._heroTl.play();
          }, remaining);
          setTimeout(dismissNudotLoader, dismissRemaining);
        });
        // bfcache restore: pageshow with persisted=true doesn't re-run scripts
        window.addEventListener('pageshow', function (e) {
          if (e.persisted) {
            // Force full reload to avoid stale GSAP/Lenis state from bfcache
            window.location.reload();
          }
        });
        // Hard fallback: if GSAP never loaded (CDN fail, network block), make everything visible
        setTimeout(function () {
          dismissNudotLoader();
          if (!window._heroTl) {
            // GSAP didn't load — remove all inline visibility overrides
            var style = document.createElement('style');
            style.textContent = '*{visibility:visible!important;opacity:1!important;transform:none!important;filter:none!important;clip-path:none!important}';
            document.head.appendChild(style);
          }
        }, 5500);
      </script>
      <script>
        (function () {
          // 🎯 走訪 ancestor 確認元素真的會被渲染。被 display:none 蓋住的影片
          //    (例如桌機看到的 .mobile-cube-section 內的 video)直接跳過,
          //    避免桌機載入手機素材、手機載入桌機素材造成的重複頻寬浪費。
          function isVideoRenderable(video) {
            if (!video || !video.isConnected) return false;
            try {
              if (typeof video.checkVisibility === 'function') {
                return video.checkVisibility({ checkOpacity: false, checkVisibilityCSS: true });
              }
              var node = video;
              while (node && node !== document.body) {
                var s = window.getComputedStyle(node);
                if (s.display === 'none') return false;
                node = node.parentElement;
              }
            } catch (_) { }
            return true;
          }

          function hydrateVideo(video) {
            if (!video || video.dataset.videoHydrated === 'true') return;
            // 不會被渲染的影片(被 CSS 隱藏)直接跳過,留待之後 viewport 變化或主動觸發
            if (!isVideoRenderable(video)) return;
            video.dataset.videoHydrated = 'true';

            video.querySelectorAll('source[data-src]').forEach(function (source) {
              source.src = source.dataset.src;
            });
            if (video.dataset.src) video.src = video.dataset.src;

            video.load();
            if (video.autoplay || video.hasAttribute('autoplay')) {
              var tryPlay = function () { video.play().catch(function () { }); };
              if (video.readyState >= 2) tryPlay();
              else video.addEventListener('canplay', tryPlay, { once: true });
            }
          }

          function hydrateDeferredImage(img) {
            if (!img || img.dataset.imageHydrated === 'true') return;
            var nextSrc = img.dataset.deferSrc;
            if (!nextSrc) return;
            img.dataset.imageHydrated = 'true';
            img.src = nextSrc;
            img.removeAttribute('data-defer-src');
          }

          function isPriorityVideo(video) {
            if (!video) return false;
            if (video.dataset.lazyPriority === 'high') return true;
            return false;
          }

          document.addEventListener('DOMContentLoaded', function () {
            var videos = Array.prototype.slice.call(document.querySelectorAll('video[data-lazy-video]'));
            var scrollDeferredImages = Array.prototype.slice.call(document.querySelectorAll('img[data-defer-src]'));

            var priorityVideos = [];
            var deferredVideos = [];
            var scrollDeferredVideos = [];

            videos.forEach(function (video) {
              if (video.dataset.lazyOnScroll === 'true') {
                scrollDeferredVideos.push(video);
                return;
              }
              if (isPriorityVideo(video)) priorityVideos.push(video);
              else deferredVideos.push(video);
            });

            priorityVideos.forEach(function (video) {
              requestAnimationFrame(function () { hydrateVideo(video); });
            });

            var requestScrollMediaIdle = window.requestIdleCallback
              ? window.requestIdleCallback.bind(window)
              : function (callback) { return setTimeout(callback, 1200); };

            function hydrateScrollMedia() {
              // 🎯 分幀串流 hydrate：把影片解碼與大圖 GPU 上傳分散到數幀,避開首次滾動 long task。
              var videoQueue = scrollDeferredVideos.slice();
              var imageQueue = scrollDeferredImages.slice();
              scrollDeferredVideos.length = 0;
              scrollDeferredImages.length = 0;

              function pump() {
                if (videoQueue.length) {
                  hydrateVideo(videoQueue.shift());
                }
                for (var i = 0; i < 2 && imageQueue.length; i++) {
                  hydrateDeferredImage(imageQueue.shift());
                }
                if (videoQueue.length || imageQueue.length) {
                  requestAnimationFrame(pump);
                }
              }

              requestAnimationFrame(pump);
            }

            if (scrollDeferredVideos.length || scrollDeferredImages.length) {
              var didHydrateScrollMedia = false;
              var activateScrollMedia = function () {
                if (didHydrateScrollMedia) return;
                didHydrateScrollMedia = true;
                window.removeEventListener('scroll', activateOnScroll);
                window.removeEventListener('keydown', activateOnKey);
                requestAnimationFrame(hydrateScrollMedia);
              };
              var activateOnScroll = function () {
                var scrollY = window._lenis ? window._lenis.scroll : window.scrollY;
                if (scrollY <= 8) return;
                activateScrollMedia();
              };
              var activateOnKey = function (event) {
                if (!/^(ArrowDown|PageDown|Space|End)$/.test(event.code || '')) return;
                activateScrollMedia();
              };

              // 🎯 原本手機是 requestAnimationFrame 立刻 activate(等同沒 lazy),
              //    桌機是 load+2.5s preheat — 兩者都會在 hero 影片還在下載時搶頻寬。
              //    改成統一延後到 load + 5s,讓 hero 第一張影片優先吃滿頻寬;
              //    若使用者在那之前先滾動 / 滑鼠滾輪 / 觸控,既有監聽器會立刻啟動。
              document.addEventListener('nudot:activate-scroll-media', activateScrollMedia, { once: true });
              window.addEventListener('wheel', activateScrollMedia, { passive: true, once: true });
              window.addEventListener('touchstart', activateScrollMedia, { passive: true, once: true });
              window.addEventListener('keydown', activateOnKey);
              window.addEventListener('scroll', activateOnScroll, { passive: true });
              requestAnimationFrame(activateOnScroll);

              // 自動預熱：loader 消失後 5s（讓 hero 影片先吃頻寬），才自動 activate。
              // 使用者若在那之前滾動／觸控／滾輪，上面的監聽器會立刻啟動。
              var autoActivateDelay = 5000;
              var autoActivateTimer = setTimeout(function () {
                document.dispatchEvent(new Event('nudot:activate-scroll-media'));
              }, autoActivateDelay);
              document.addEventListener('nudot:activate-scroll-media', function () {
                clearTimeout(autoActivateTimer);
              }, { once: true });
            }

            if (deferredVideos.length && 'IntersectionObserver' in window) {
              var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                  if (!entry.isIntersecting) return;
                  hydrateVideo(entry.target);
                  observer.unobserve(entry.target);
                });
              }, { rootMargin: '280px 0px 420px 0px' });

              deferredVideos.forEach(function (video) { observer.observe(video); });
            } else if (deferredVideos.length) {
              setTimeout(function () {
                deferredVideos.forEach(hydrateVideo);
              }, 1200);
            }
          });
        })();
      </script>
      <div class="scroll-track">
        <div class="sticky-container">

          <div class="hero-section">
            <div id="webgl-container"></div>
            <!-- 右邊小影片 -->
           <div class="brand-core-video-row">
              <div class="brand-core-video">
                <a href="https://www.youtube.com/watch?v=MyC-JCaQDtI" target="_blank"
                  rel="noopener noreferrer" aria-label="Watch on YouTube" data-cursor="VIDEO"
                  style="display:block;width:100%;height:100%;cursor:pointer;">
                  <video autoplay muted loop playsinline preload="none" disableRemotePlayback data-lazy-video
                    poster="images/home/slider_video02_thumb.jpg"
                    style="cursor:pointer;">
                    <source data-src="images/home/slider_video02.mp4?v=1" type="video/mp4">
                  </video>
                </a>
              </div>
            </div>
            
            
              <!-- FWA of the Day 徽章 -->
            <a class="fwa-badge" href="https://thefwa.com/cases/nudot-studio" target="_blank" rel="noopener noreferrer"
              aria-label="FWA - Favourite Website Awards: Site of the Day" data-cursor="FWA">
              <img src="images/fotd.png" alt="FWA Favourite Website Award" width="100" height="100" loading="lazy" decoding="async">
            </a>
            
            

            <div class="overlay-ui">
              <div class="overlay-top">
                <div class="top-header">
                  <div class="huge-text">STUDIO</div>
                  <div class="small-tag">( Brand Direction )</div>
                  <div class="huge-text">DIGITAL</div>
                </div>

                <div class="grid-4">
                  <div>
                    <ul class="services-list">
                      <li>核心策略規劃</li>
                      <li>品牌識別</li>
                      <li>內容創意</li>
                      <li>技術趨勢實踐</li>
                    </ul>
                  </div>
                  <div class="col-right">
                    <ul class="services-list services-list_en bordered">
                      <li>Creative Strategy</li>
                      <li>Brand Identity</li>
                      <li>Creative Content</li>
                      <li>Web Design</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="overlay-bottom">
                <div class="grid-section">
                  <div class="grid-4 hero-quick-links-row">
                    <div class="hero-quick-links" role="navigation" aria-label="Hero quick links">
                        <!--<a href="index" data-transition-label="Home">Home</a>-->
                      <a href="about" data-transition-label="About">About</a>
                      <a href="work" data-transition-label="Work">Work</a>
                      <a href="lab" data-transition-label="Labs">Labs</a>
                       <a href="blog" data-transition-label="Blog">Blog</a>
                      <a href="contact" data-transition-label="Contact">Contact</a>
                    </div>
                  </div>
                  <div class="grid-4 border-top-line">
                    <div>( 網頁互動開發 )</div>
                    <div>( 動態設計 )</div>
                    <div><h1>( 高階網頁設計 )</h1></div>
                    <div>( 品牌核心識別 )</div>
                  </div>

                  <!-- <div class="cross-container">
                <div class="cross c-tl">+</div>
                <div class="cross c-tr">+</div>
                <div class="cross c-bl">+</div>
                <div class="cross c-br">+</div>
              </div> -->
                </div>

                <div class="grid-4 bottom-footer">
                  <div class="footer-col">
                    Strategy, Design, and<br>
                    Development. Lightning-fast, lean,<br>
                    and sensibly priced.
                  </div>
                  <div class="footer-col">
                    <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="1f777a7373705f716a7b706b317c7072316b68">[email&#160;protected]</a><br>
                    0983-750 522<br>
                    核點 Nudot Studio 2026©
                  </div>
                  <div class="footer-col col-right footer-links">
                    <!-- <a href="https://www.behance.net/dotnu" target="_blank">Behance</a>
                     <a href="https://www.pinterest.com/nudotlabs/" target="_blank">Pinterest</a> -->
                    <a href="https://www.instagram.com/nudotlabs/" target="_blank">Instagram</a>
                    <a href="https://www.threads.com/@nudotlabs" target="_blank">Threads</a>
                    <a href="https://www.facebook.com/profile.php?id=61588727983387&locale=zh_TW" target="_blank" rel="noopener noreferrer">Facebook</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="bottom-ui-container">
              <div class="slide-section">COSMIC SERIES</div>
              <div class="slide-counter">
                <div class="counter-nav prev-slide">⟪</div>
                <div class="counter-display">
                  <span class="current-slide">01</span>
                  <span class="counter-divider">//</span>
                  <span class="total-slides">05</span>
                </div>
                <div class="counter-nav next-slide">⟫</div>
              </div>
              <div class="slide-title-container">
                <div class="slide-title">Cosmic Harmony</div>
              </div>
              <div class="drag-indicator"></div>
              <div class="thumbs-container">
                <div class="slide-thumbs"></div>
              </div>
            </div>


            <div class="slides">


              <div class="slide">
                <div class="slide__img" data-video="images/home/slider1/slider01.mp4"
                  data-mobile-video="images/home/slider1/slider01_s.mp4" data-thumb="images/home/slider1/slider01.webp"
                  data-mobile-thumb="images/home/slider1/slider01_s.webp" data-title="Nudot Creative Studio">
                </div>
              </div>



              <div class="slide">
                <div class="slide__img" data-video="images/home/slider2/slider02pro.mp4"
                  data-mobile-video="images/home/slider2/slider02_s.mp4" data-thumb="images/home/slider2/slider02.webp"
                  data-mobile-thumb="images/home/slider2/slider02_s.webp" data-title="Visual Direction">
                </div>
              </div>





              <!-- 新增輪播時，只要複製一個 .slide，改 data-image 或 data-video，並補上 data-title。
                   手機版可另外填 data-mobile-image / data-mobile-video / data-mobile-thumb；未填會沿用桌機素材。 -->
              <div class="slide">
                <!-- <div class="slide__img" data-video="images/home/banner05.mp4" data-thumb="images/home/banner05.jpg"
              data-title="Brand Film"></div> -->
                <div class="slide__img" data-image="images/home/slider3/slider03.webp"
                  data-mobile-image="images/home/slider3/slider03_m.webp"
                  data-thumb="images/home/slider3/slider03_pc.webp"
                  data-mobile-thumb="images/home/slider3/slider03_s.webp" data-title="High-End Skincare"></div>
              </div>



              <!-- <div class="slide">
                <div class="slide__img" data-image="images/home/banner01.webp"  data-mobile-image="images/home/banner01_s.webp"
                  data-mobile-thumb="images/home/banner01_s.webp" data-title="Cosmic Harmony"></div>
              </div> -->



              <div class="slide">
                <div class="slide__img" data-image="images/home/slider4/slider04.webp"
                  data-mobile-image="images/home/slider4/slider04_m.webp"
                  data-thumb="images/home/slider4/slider04_pc.webp"
                  data-mobile-thumb="images/home/slider4/slider04_s.webp" data-title="METERSEVEN"></div>
              </div>





              <div class="slide">
                <div class="slide__img" data-image="images/home/slider5/slider05.webp"
                  data-mobile-image="images/home/slider5/slider05_m.webp"
                  data-thumb="images/home/slider5/slider05_pc.webp"
                  data-mobile-thumb="images/home/slider5/slider05_s.webp" data-title="PERFORMANCE FLUIDS"></div>
              </div>

            </div>
          </div>

          <div class="dark-wrapper-mask" id="dark-wrapper-mask">
            <div class="dark-wrapper" id="dark-wrapper">
              <div id="dw-black-overlay"
                style="position:absolute;inset:0;background:#000;z-index:9;pointer-events:none;opacity:0;transition:opacity 0.05s;">
              </div>
              <!-- bg.mp4 在 dark-wrapper(首屏下方),不該跟 hero 影片搶頻寬;
                   改用 IntersectionObserver 路徑(移除 data-lazy-priority="high") -->
              <video autoplay muted loop playsinline preload="none" disableRemotePlayback data-lazy-video
                data-lazy-on-scroll="true"
                style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; opacity: 0.45;">
                <source data-src="images/wavebg.mp4" type="video/mp4">
              </video>

              <div class="glow-bottom-left" id="ui-glow1"></div>
              <div class="glow-center-left" id="ui-glow2"></div>

            <nav class="dark-nav" id="ui-nav">
                <a href="/about" data-transition-label="About">核點創意</a>
                <a href="/work" data-transition-label="Work">設計案例</a>
                  <a href="/lab" data-transition-label="Labs">核點實驗室</a>
                  <a href="/news" data-transition-label="Contact">核點洞察</a>
                  <a href="/contact" data-transition-label="Contact">聯繫我們</a>
              </nav>
              <div class="scroll-indicator" id="ui-scroll">
                <div class="si-block">
                  <div class="si-letter"><img src="images/down.svg" alt="" aria-hidden="true"></div>
                  <div class="si-label">DOWN</div>
                  <!-- <div class="si-line"></div> -->
                </div>
              </div>

              <div id="intro-panel" class="intro-panel">
                <div class="ip-top-chapter1">( 品牌策略專家 )</div>
                <div class="ip-top-header">
                  <h2 class="ip-top-chapter">( 守護美學核心，定義數位落點 )</h2>
                </div>
                <div class="ip-bottom-letter"></div>

                <div class="dual-wave-wrapper" id="ip-wave-wrapper">
                  <div class="wave-column wave-column-left">
                    <div class="animated-text" data-image="images/home/company/1.webp">Core-Site</div>
                    <div class="animated-text" data-image="images/home/company/2.webp">Gen-AI Visual</div>
                    <div class="animated-text" data-image="images/home/company/3.webp">Motion Flow</div>
                    <div class="animated-text" data-image="images/home/company/4.webp">WebGL Realm</div>
                    <div class="animated-text" data-image="images/home/company/5.webp">3D Matrix</div>
                    <div class="animated-text" data-image="images/home/company/6.webp">Interaction</div>
                    <div class="animated-text" data-image="images/home/company/7.webp">Pixel Perfect</div>
                    <div class="animated-text" data-image="images/home/company/8.webp">Logic Build</div>
                    <div class="animated-text" data-image="images/home/company/9.webp">Fluid UI</div>
                    <div class="animated-text" data-image="images/home/company/10.webp">Aero Design</div>
                    <div class="animated-text" data-image="images/home/company/11.webp">Pure Code</div>
                    <div class="animated-text" data-image="images/home/company/12.webp">Digital Art</div>
                  </div>
                  <div class="wave-column wave-column-right">
                    <div class="animated-text">Strategy</div>
                    <div class="animated-text">Design</div>
                    <div class="animated-text">Tech</div>
                    <div class="animated-text">Creative</div>
                    <div class="animated-text">Motion</div>
                    <div class="animated-text">Brand</div>
                    <div class="animated-text">Future</div>
                    <div class="animated-text">Vision</div>
                    <div class="animated-text">System</div>
                    <div class="animated-text">Labs</div>
                    <div class="animated-text">Core</div>
                    <div class="animated-text">Craft</div>
                  </div>
                </div>
                <div class="image-thumbnail-wrapper">
                  <div class="ip-thumb-row">
                    <div class="ip-thumb-line"></div>
                    <img src="images/home/company/1.webp" alt="" class="image-thumbnail" id="ip-wave-thumb" width="128"
                      height="64" loading="lazy" decoding="async">
                    <div class="ip-thumb-line"></div>
                  </div>
                </div>
                <canvas id="ip-reveal-canvas" data-reveal-mode="css-mask"
                  style="position:absolute;inset:0;width:100%;height:100%;mix-blend-mode:destination-out;pointer-events:none;z-index:200;display:none;"></canvas>
              </div>

              <div id="section-2-content" class="section-2-content">
                <div class="subtitle" id="title-subtitle"
                  style="position:absolute;opacity:0;pointer-events:none;width:0;height:0;overflow:hidden;margin:0;padding:0;">
                </div>
                <p class="desc" id="title-desc"
                  style="position:absolute;opacity:0;pointer-events:none;width:0;height:0;overflow:hidden;margin:0;padding:0;">
                </p>
                <!-- <div class="title-reveal-wrap">
            <div class="subtitle" id="title-subtitle">( 核心落點，構築數位地標 )</div>
          </div> -->
                <div class="title-wrapper marquee-wrapper">
                  <!-- ghost elements kept for GSAP scroll-reveal JS compatibility -->
                  <h2 id="title-line1"
                    style="position:absolute;opacity:0;pointer-events:none;width:0;height:0;overflow:hidden;margin:0;padding:0;">
                  </h2>
                  <h2 id="title-line2"
                    style="position:absolute;opacity:0;pointer-events:none;width:0;height:0;overflow:hidden;margin:0;padding:0;">
                  </h2>
                  <div class="title-reveal-wrap">
                    <div id="title-marquee" class="marquee-outer">
                      <div class="marquee-inner js-scroll-marquee" id="marquee-inner" data-marquee-dir="-1">
                        <div class="marquee-set">
                          <span class="marquee-block">
                            <span class="huge-title marquee-item">WEBDESIGN</span>
                            <span class="marquee-label">（ 網頁設計 ）</span>
                          </span>
                          <span class="marquee-block">
                            <span class="huge-title marquee-item">UI/UX</span>
                            <span class="marquee-label">（ 介面/體驗 ）</span>
                          </span>
                          <span class="marquee-block">
                            <span class="huge-title marquee-item">MOTION</span>
                            <span class="marquee-label">（ 動態設計 ）</span>
                          </span>
                          <span class="marquee-block">
                            <span class="huge-title marquee-item">BRANDING</span>
                            <span class="marquee-label">（ 品牌識別 ）</span>
                          </span>
                        </div>
                        <div class="marquee-set">
                          <span class="marquee-block">
                            <span class="huge-title marquee-item">WEBDESIGN</span>
                            <span class="marquee-label">（ 網頁設計 ）</span>
                          </span>
                          <span class="marquee-block">
                            <span class="huge-title marquee-item">UI/UX</span>
                            <span class="marquee-label">（ 介面/體驗 ）</span>
                          </span>
                          <span class="marquee-block">
                            <span class="huge-title marquee-item">MOTION</span>
                            <span class="marquee-label">（ 動態設計 ）</span>
                          </span>
                          <span class="marquee-block">
                            <span class="huge-title marquee-item">BRANDING</span>
                            <span class="marquee-label">（ 品牌識別 ）</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="title-reveal-wrap">
            <p class="desc" id="title-desc">從核心策略到技術實作，核點致力於讓每一組代碼都承載美學，讓每一個像素都具備商業靈魂<br>讓您的創意，在數位世界中自由呼吸</p>
          </div> -->
              </div>

              <div class="new-text-group" id="new-text-group">
                <div class="title-reveal-wrap">
                  <div class="subtitle" id="new-subtitle"></div>
                </div>
                <div class="title-wrapper">
                  <div class="title-reveal-wrap">
                    <h2 class="huge-title title-outline" id="new-line1"></h2>
                  </div>
                  <div class="title-reveal-wrap">
                    <h2 class="huge-title" id="new-line2"></h2>
                  </div>
                </div>
                <div class="title-reveal-wrap">
                  <p class="desc" id="new-desc"> </p>
                </div>
              </div>

              <div class="scene-wrapper" id="sceneWrapper">
                <div class="scene" id="cubeScene">
                  <div class="cube" id="cube">
                    <div class="face front" style="padding: 0;">
                      <video class="face-media" autoplay muted loop playsinline preload="none" disableRemotePlayback
                        data-lazy-video data-lazy-on-scroll="true">
                        <source data-src="images/cube/t1.mp4" type="video/mp4">
                      </video>
                      <div id="img-overlay"
                        style="position: absolute; inset: 0; background: #000; opacity: 0; transition: opacity 0.1s;">
                      </div>
                    </div>
                    <div class="face right"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                        data-defer-src="images/cube/t2.webp" alt="Cube right" class="face-media" width="2752"
                        height="1536" loading="lazy" decoding="async"></div>
                    <div class="face back"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                        data-defer-src="images/cube/t3.webp" alt="Cube back" class="face-media" width="2752"
                        height="1536" loading="lazy" decoding="async"></div>
                    <div class="face left"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                        data-defer-src="images/cube/t4.webp" alt="Cube left" class="face-media" width="5504"
                        height="3072" loading="lazy" decoding="async"></div>
                    <div class="face top"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                        data-defer-src="images/cube/t5.webp" alt="Cube top" class="face-media" width="7360"
                        height="4912" loading="lazy" decoding="async"></div>
                    <div class="face bottom"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                        data-defer-src="images/cube/t6.webp" alt="Cube bottom" class="face-media" width="3000"
                        height="2000" loading="lazy" decoding="async"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="stm-logo" id="stmLogo"><img src="images/textlogo.svg" alt="NUDOT" width="387" height="68"
            loading="lazy" decoding="async"></div>
        <section class="stm-section" id="stm-section">
          <div class="stm-content">

            <div class="stm-group">
              <div class="stm-el stm-pos-4" data-stm-alt="stm-pos-2">Brand identity</div>
              <div class="stm-el stm-pos-4" data-stm-alt="stm-pos-2">Visual strategy</div>
              <div class="stm-el stm-pos-4" data-stm-alt="stm-pos-2">核點創意</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-pos-1" data-stm-alt="stm-pos-3">Motion design</div>
              <div class="stm-el stm-pos-1" data-stm-alt="stm-pos-3">Micro interactions</div>
              <div class="stm-el stm-pos-1" data-stm-alt="stm-pos-3">Type system</div>
              <div class="stm-el stm-pos-1" data-stm-alt="stm-pos-3">Creative direction</div>
              <div class="stm-el stm-pos-1" data-stm-alt="stm-pos-3">設計語言</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-el--xl stm-pos-1" data-stm-alt="stm-pos-2" data-stm-scramble="2.5">N</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-pos-1" data-stm-alt="stm-pos-3" data-stm-scramble="0">品牌識別系統建構中</div>
              <div class="stm-el stm-pos-1 stm-typing" data-stm-alt="stm-pos-3" data-stm-scramble="0">█</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-pos-2" data-stm-alt="stm-pos-5">Interface design</div>
              <div class="stm-el stm-pos-2" data-stm-alt="stm-pos-5">Web experience</div>
              <div class="stm-el stm-pos-2" data-stm-alt="stm-pos-5">Digital storytelling</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-el--xl stm-pos-3" data-stm-alt="stm-pos-9" data-stm-scramble="2.5">U</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-2">Art direction</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-2">Campaign design</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-2">視覺敘事</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-2">Brand experience</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-pos-1" data-stm-alt="stm-pos-3" data-stm-scramble="0">視覺系統載入中</div>
              <div class="stm-el stm-pos-1 stm-typing" data-stm-alt="stm-pos-3" data-stm-scramble="0">█</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-pos-2" data-stm-alt="stm-pos-4">UX strategy</div>
              <div class="stm-el stm-pos-2" data-stm-alt="stm-pos-4">Creative coding</div>
              <div class="stm-el stm-pos-2" data-stm-alt="stm-pos-4">Logo design</div>
              <div class="stm-el stm-pos-2" data-stm-alt="stm-pos-4">Editorial layout</div>
              <div class="stm-el stm-pos-2" data-stm-alt="stm-pos-4">Packaging design</div>
              <div class="stm-el stm-pos-2" data-stm-alt="stm-pos-4">數位體驗</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-el--xl stm-pos-1" data-stm-alt="stm-pos-3" data-stm-scramble="2.5">D</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-pos-2" data-stm-alt="stm-pos-9">Interaction design</div>
              <div class="stm-el stm-pos-2" data-stm-alt="stm-pos-9">Brand guidelines</div>
              <div class="stm-el stm-pos-2" data-stm-alt="stm-pos-9">Typography</div>
              <div class="stm-el stm-pos-2" data-stm-alt="stm-pos-9">Colour systems</div>
              <div class="stm-el stm-pos-2" data-stm-alt="stm-pos-9">品牌顧問</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-el--xl stm-pos-3" data-stm-alt="stm-pos-10" data-stm-scramble="2.5"
                data-stm-flip-ease="expo.in">O</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-pos-4" data-stm-alt="stm-pos-3">Social media design</div>
              <div class="stm-el stm-pos-4" data-stm-alt="stm-pos-3">Video production</div>
              <div class="stm-el stm-pos-4" data-stm-alt="stm-pos-3">Illustration</div>
              <div class="stm-el stm-pos-4" data-stm-alt="stm-pos-3">創意策略</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-pos-1" data-stm-alt="stm-pos-3" data-stm-scramble="0">創意能量持續輸出中</div>
              <div class="stm-el stm-pos-1 stm-typing" data-stm-alt="stm-pos-3" data-stm-scramble="0">█</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-5">Print design</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-5">Space branding</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-5">Exhibition design</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-5">Sound identity</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-el--xl stm-pos-2" data-stm-alt="stm-pos-3" data-stm-scramble="2.5">T</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-6">Concept development</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-6">Market positioning</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-6">品牌個性定義</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-6">Audience insight</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-pos-2" data-stm-alt="stm-pos-7">Design thinking</div>
              <div class="stm-el stm-pos-2" data-stm-alt="stm-pos-7">Prototyping</div>
              <div class="stm-el stm-pos-2" data-stm-alt="stm-pos-7">User research</div>
              <div class="stm-el stm-pos-2" data-stm-alt="stm-pos-7">Content strategy</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-8">Visual identity</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-8">Responsive design</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-8">Animation direction</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-8">UI component design</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-8">Design system</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-8">Cross-media branding</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-8">Landing page</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-8">數位品牌規範</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-8">Scroll experience</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-8">WebGL interface</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-8">Kinetic typography</div>
              <div class="stm-el stm-pos-3" data-stm-alt="stm-pos-8">動態視覺設計</div>
            </div>

            <div class="stm-group">
              <div class="stm-el stm-pos-1" data-stm-alt="stm-pos-1">Brand audit</div>
              <div class="stm-el stm-pos-1" data-stm-alt="stm-pos-2">Competitor analysis</div>
              <div class="stm-el stm-pos-1" data-stm-alt="stm-pos-4">Mood board</div>
              <div class="stm-el stm-pos-1" data-stm-alt="stm-pos-5">品牌核心價值</div>
              <div class="stm-el stm-pos-1" data-stm-alt="stm-pos-6">Style guide</div>
              <div class="stm-el stm-pos-1" data-stm-alt="stm-pos-4">Launch strategy</div>
            </div>

          </div>
        </section>

      </div>

      <section class="mobile-cube-section" aria-label="Mobile cube showcase">
        <div class="mobile-cube-bg" aria-hidden="true">
          <video autoplay muted loop playsinline preload="none" disableRemotePlayback data-lazy-video
            data-lazy-on-scroll="true">
            <source data-src="images/bg.mp4" type="video/mp4">
          </video>
        </div>
        <div class="mcube-title">
          <h2 class="mcube-title__eye">（ 專注本質的數位實踐 ）</h2>
          <div class="mcube-title__line">WHO WE ARE</div>
        </div>
        <div class="mobile-cube-scene">
          <div class="mobile-cube">
            <div class="mobile-cube-face is-front">
              <video autoplay muted loop playsinline preload="none" disableRemotePlayback data-lazy-video
                data-lazy-on-scroll="true">
                <source data-src="images/cube/t1.mp4" type="video/mp4">
              </video>
            </div>
            <div class="mobile-cube-face is-right">
              <img src="data:image/gif;base64,R0lGODlhAQABAAAAACw=" data-defer-src="images/cube/t2.webp" alt=""
                width="2752" height="1536" loading="lazy" decoding="async">
            </div>
            <div class="mobile-cube-face is-back">
              <img src="data:image/gif;base64,R0lGODlhAQABAAAAACw=" data-defer-src="images/cube/t3.webp" alt=""
                width="2752" height="1536" loading="lazy" decoding="async">
            </div>
            <div class="mobile-cube-face is-left">
              <img src="data:image/gif;base64,R0lGODlhAQABAAAAACw=" data-defer-src="images/cube/t4.webp" alt=""
                width="5504" height="3072" loading="lazy" decoding="async">
            </div>
            <div class="mobile-cube-face is-top">
              <img src="data:image/gif;base64,R0lGODlhAQABAAAAACw=" data-defer-src="images/cube/t5.webp" alt=""
                width="7360" height="4912" loading="lazy" decoding="async">
            </div>
            <div class="mobile-cube-face is-bottom">
              <img src="data:image/gif;base64,R0lGODlhAQABAAAAACw=" data-defer-src="images/cube/t6.webp" alt=""
                width="3000" height="2000" loading="lazy" decoding="async">
            </div>
          </div>
        </div>
        <div class="mcube-copy">
          <p class="mcube-copy__desc">
            任何強大的數位體驗，都源自一個精準的「核點」。NUDOT 核點創意專注台中網頁設計、高階商業視覺圖像生成與 AI 動態影像製作，以最精準的數位工藝，讓每一個像素都發揮最大的品牌商業價值。
          </p>
        </div>
      </section>



      <!-- =========================================================
       DRAFT.X & MUSEUM — WebGL Marquee + Stacked Cards Section
       ========================================================= -->
      <!-- DXM section 已移除：對應 CSS 一併清除 -->

      <style>
        /* Typography system overrides */
        #core-capabilities .top-nav,
        #core-capabilities .service-label,
        #core-capabilities .service-tags,
        .gallery-header-label,
        .ns-menu-topline,
        .footer-info-bar,
        .footer-nav-links a {
          font-family: var(--font-family-body);
          font-size: var(--text-xs);
          letter-spacing: var(--tracking-meta);
          line-height: 1.4;
          text-transform: uppercase;
        }

        .gallery-header-label {
          font-size: var(--text-xs);
        }

        .ns-dropdown__eyebrow,
        .ns-menu-link-sub,
        .ns-dropdown__label,
        .ns-showcase-row__index {
          font-family: var(--font-family-body);
          font-size: var(--text-2xs);
          letter-spacing: var(--tracking-caps);
          line-height: 1.4;
          text-transform: uppercase;
        }

        #core-capabilities .giant-title,
        .gallery-header-title,
        .gh-side-letter,
        .ns-menu-link-title,
        .ns-dropdown__headline,
        .footer-brand-title,
        .footer-copyright-bridge span {
          font-family: var(--font-family-display);
        }

        #core-capabilities .giant-title {
          font-size: clamp(2.5rem, 1.35rem + 2.875vw, 5rem);
          letter-spacing: var(--tracking-brand);
          line-height: var(--leading-tight);
        }

        .gallery-header-title {
          font-size: clamp(2.5rem, 1.35rem + 2.875vw, 5rem);
          letter-spacing: var(--tracking-brand);
          line-height: 1.05;
        }

        .gh-side-letter {
          font-size: var(--text-display-sm);
          letter-spacing: var(--tracking-display);
          line-height: 0.9;
        }

        .ns-menu-link-title {
          font-size: var(--text-display-xs);
          letter-spacing: var(--tracking-brand);
          line-height: var(--leading-tight);
        }

        .ns-dropdown__headline {
          font-size: var(--text-md);
          letter-spacing: var(--tracking-label);
          line-height: 1.25;
        }

        .footer-brand-title {
          font-size: var(--text-display-lg);
          line-height: var(--leading-display);
          letter-spacing: var(--tracking-brand);
        }

        .footer-copyright-bridge span {
          font-size: clamp(6rem, 12vw, 11.25rem);
          line-height: var(--leading-tight);
        }

        #core-capabilities .sub-title,
        #core-capabilities .footer-desc,
        .ns-dropdown__copy, {
          font-family: var(--font-family-body);
          font-size: var(--text-sm);
          letter-spacing: var(--tracking-copy);
          line-height: var(--leading-body);
        }
        .footer-description{
            font-family: var(--font-family-body);
           font-size: var(--text-xs);
             letter-spacing: var(--tracking-copy);
          line-height: var(--leading-body);
        }

      

        @media (max-width: 900px) {
          #core-capabilities .giant-title {
            font-size: 10vw;
          }
        }

        @media (max-width: 768px) {

          #core-capabilities .top-nav,
          .footer-brand-title,
          .footer-info-bar {
            display: none;
          }

          .footer-video-thumb {
            width: auto;
            max-width: none;
          }

          .footer-info-bar,
          .footer-nav-links a {
           color: #fff;
    text-decoration: none;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transition: opacity 0.2s;
          }
        }
      </style>


      <!-- WebGL Marquee Section -->


      <!-- /DRAFT.X & MUSEUM -->

      <section class="ccap-section" id="core-capabilities">
        <div class="ring-gallery-sticky">
          <div class="ccap-exit-overlay" id="ccap-exit-overlay"></div>
          <div id="sketch"></div>
          <div class="ccap-side-fade ccap-side-fade-left" aria-hidden="true"></div>
          <div class="ccap-side-fade ccap-side-fade-right" aria-hidden="true"></div>
          <div class="hero-dom">
            <main>
              <div class="giant-title">
                <span class="reveal-wrap"><span class="reveal-inner">THE SECTORS</span></span>
              </div>

              <div class="sub-title">
                <div class="reveal-wrap"><span class="reveal-inner">DEFINING THE CORE DNA OF</span></div><br>
                <div class="reveal-wrap"><span class="reveal-inner">BRAND AESTHETICS</span></div>
              </div>

              <div class="top-nav">
                <div class="nav-left">
                  <span class="reveal-wrap"><span class="reveal-inner">14Y_VISUAL_MASTERY</span></span>
                </div>
                <div class="nav-center reveal-wrap"><span class="reveal-inner">400+_DEPLOYED_WORKS</span></div>
                <div class="nav-right reveal-wrap"><span class="reveal-inner">ESTABLISHED_2026</span></div>
              </div>

              <div class="media-gallery">
                <div class="media-track">
                  <div class="center-divider">
                    <div class="center-video-box">
                      <video autoplay loop muted playsinline preload="auto" disableRemotePlayback data-lazy-video
                        data-lazy-priority="high">
                        <source data-src="images/home/star.mp4" type="video/mp4">
                      </video>
                    </div>
                    <div class="service-label reveal-wrap text1vw"><h2 class="reveal-inner" style="margin: 0;">跨領域視覺與數位整合</h2></div>
                  </div>
                </div>
              </div>

              <div class="service-tags">
                <span class="reveal-wrap"><h3 class="reveal-inner">( 網頁視覺美學 )</h3></span>
                <span class="reveal-wrap"><h3 class="reveal-inner">( 高階商業視覺 )</h3></span>
                <span class="reveal-wrap"><h3 class="reveal-inner">( 使用體驗與介面 )</h3></span>
                <span class="reveal-wrap"><h3 class="reveal-inner">( AI 圖像 · 影像 )</h3></span>
              </div>

              <!-- <div class="footer-desc">
            <div class="reveal-wrap"><span class="reveal-inner">Nudot is committed to the art of subtraction. We offer a curated</span></div><br>
            <div class="reveal-wrap"><span class="reveal-inner">selection of essentials that balance contemporary form with everyday</span></div><br>
            <div class="reveal-wrap"><span class="reveal-inner">functionality.</span></div>
          </div> -->
            </main>
          </div>
        </div>
      </section>

      <section class="s3-gallery-section" id="s3-gallery">
        <div class="gallery-header">
          <div class="gallery-header-video" aria-hidden="true">
            <video autoplay muted playsinline loop preload="none" disableRemotePlayback data-lazy-video>
              <source data-src="images/wavebg.mp4" type="video/mp4">
            </video>
          </div>
          <!-- <div class="gh-side-rails" aria-hidden="true">
        <div class="gh-side-rail gh-side-rail-left">
          <span class="gh-side-letter">N</span>
          <span class="gh-side-line"></span>
        </div>
        <div class="gh-side-rail gh-side-rail-right">
           <span class="gh-side-letter">D</span>
          <span class="gh-side-line"></span>
          
        </div>
      </div> -->
          <h2 class="gallery-header-label" data-reveal="fade">( 重新定義品牌的視覺思維 )</h2>
          <div class="gallery-header-title">
            <span class="gh-line" data-reveal="word">ARCHIVE OF</span>
            <span class="gh-line" data-reveal="word">THE SELECTED WORKS</span>
            <span class="gh-line" data-reveal="word">BY NUDOT</span>
          </div>
          <p class=" text1vw" data-reveal="fade" data-reveal-delay="0.3">數位視覺能量釋放點</p>
        </div>

        <div class="pg-gallery">
          <div class="pg-item pg-item-1">
            <a href="work_co" data-transition-label="Work" data-cursor="VIEW" aria-label="View work"
              style="position:absolute;inset:0;z-index:5;"></a>
            <div class="pg-img-wrap"><img src="images/home/list/01.webp" alt="Work 01" loading="lazy" decoding="async">
            </div>
          </div>
          <div class="pg-item pg-item-2">
            <a href="work_food" data-transition-label="Work" data-cursor="VIEW" aria-label="View work"
              style="position:absolute;inset:0;z-index:5;"></a>
            <div class="pg-img-wrap"><img src="images/home/list/02.webp" alt="Work 02" loading="lazy" decoding="async">
            </div>
          </div>
          <div class="pg-item pg-item-3">
            <a href="work_nod" data-transition-label="Work" data-cursor="VIEW" aria-label="View work"
              style="position:absolute;inset:0;z-index:5;"></a>
            <div class="pg-img-wrap"><img src="images/home/list/03.webp" alt="Work 03" loading="lazy" decoding="async">
            </div>
          </div>
          <div class="pg-item pg-item-4">
            <a href="work_oil" data-transition-label="Work" data-cursor="VIEW" aria-label="View work"
              style="position:absolute;inset:0;z-index:5;"></a>
            <div class="pg-img-wrap"><img src="images/home/list/04.webp" alt="Work 04" loading="lazy" decoding="async">
            </div>
          </div>
          <div class="pg-item pg-item-5">
            <a href="work_camp" data-transition-label="Work" data-cursor="VIEW" aria-label="View work"
              style="position:absolute;inset:0;z-index:5;"></a>
            <div class="pg-img-wrap"><img src="images/home/list/05.webp" alt="Work 05" loading="lazy" decoding="async">
            </div>
          </div>
          <div class="pg-item pg-item-6">
            <a href="work_cnc" data-transition-label="Work" data-cursor="VIEW" aria-label="View work"
              style="position:absolute;inset:0;z-index:5;"></a>
            <div class="pg-img-wrap"><img src="images/home/list/06.webp" alt="Work 06" loading="lazy" decoding="async">
            </div>
          </div>
        </div>
      </section>

      <footer class="site-footer" id="site-footer">

        <div class="footer-top">
          <!-- <div class="footer-brand-title">NUDOT. STUDIO<sup>TM</sup></div> -->

          <div class="footer-info-bar">
            <span>Web Design Studio</span>
            <span>Commercial Visual · AI Motion</span>
            <span>Est. 2026 · Taichung</span>
          </div>

          <div class="footer-main-content">
            <div>
              <p class="footer-description">
                NUDOT 核點創意｜台中網頁設計・高階商業視覺生成・AI 動態影像。整合品牌識別、互動體驗設計與 Gen-AI 視覺技術，為品牌打造具備國際競爭力的數位視覺敘事。
              </p>
              <div class="footer-contact-info">
                <a href="/cdn-cgi/l/email-protection#93fbf6fffffcd3fde6f7fce7bdf0fcfebde7e4"><span class="__cf_email__" data-cfemail="6b030e0707042b051e0f041f45080406451f1c">[email&#160;protected]</span></a>
                <span>+8869 83 750 522 </span>
              </div>
              <div style="color:#444;font-size:14px;margin-top:8px;">臺中市北屯區文心路三段447號</div>
              <div class="footer-nav-links">
                <a href="https://www.instagram.com/nudotlabs" target="_blank" rel="noopener noreferrer" data-transition-label="Instagram">Instagram</a>
                <a href="https://www.threads.com/@nudotlabs" target="_blank" rel="noopener noreferrer" data-transition-label="Threads">Threads</a>
                <a href="https://www.facebook.com/profile.php?id=61588727983387&locale=zh_TW" target="_blank" rel="noopener noreferrer" data-transition-label="Facebook">Facebook</a>
                 <a href="blog">blog</a>
              </div>
            </div>

            <div class="footer-right-panel">
              <div class="footer-video-thumb">
                <video autoplay muted loop playsinline preload="metadata" width="320" height="180" disableRemotePlayback data-lazy-video>
                  <source data-src="images/footer.mp4" type="video/mp4">
                </video>
              </div>
            </div>
          </div>

          <div class="footer-copyright-bridge" id="footer-c-bridge">
            <span>&copy;</span>
          </div>
        </div>

        <div class="footer-parallax-section" id="footer-parallax-section">
          <div class="footer-parallax-bg" id="footer-parallax-bg" data-bg="images/footer.webp"></div>
          <div class="footer-parallax-copy">
            <div>核點創意有限公司</div>
            <div>&#169; 2026 NUDOT STUDIO. ALL RIGHTS RESERVED.</div>
          </div>        </div>

      </footer>

    </div>
  </div>

  <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>
    // =========================================================
    // SLIDESHOW LOGIC (Variables)
    // =========================================================
    const NEXT = 1;
    const PREV = -1;

    let currentHoveredThumb = null;
    let mouseOverThumbnails = false;
    let lastHoveredThumbIndex = null;
    let heroSlides = [];
    let heroSlideCount = 0;
    let dragLinesCache = null;
    let webglManager = null;

    let isAnimating = false;
    let pendingNavigation = null;
    let sliderLocked = false;

    function ensureTopAndLock() {
      if (window.scrollY > 0) {
        // 🎯 優先走 Lenis,跟全站滾動引擎一致;沒 Lenis 才 fallback 原生
        if (window._lenis) window._lenis.scrollTo(0, { duration: 1.2 });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    function updateNavigationUI(disabled) {
      document.querySelectorAll(".counter-nav, .slide-thumb").forEach(el => {
        el.style.opacity = disabled && el.classList.contains('counter-nav') ? "0.3" : "";
        el.style.pointerEvents = disabled ? "none" : "auto";
      });
    }

    function updateSlideCounter(index) {
      const el = document.querySelector(".current-slide");
      if (el) el.textContent = String(index + 1).padStart(2, "0");
    }

    const HERO_MOBILE_MEDIA_QUERY = "(max-width: 767px)";

    function shouldUseMobileHeroMedia() {
      if (window.matchMedia) return window.matchMedia(HERO_MOBILE_MEDIA_QUERY).matches;
      return window.innerWidth <= 767;
    }

    function readHeroMediaAttr(el, key) {
      return (el.dataset[key] || "").trim();
    }

    function collectHeroSlides() {
      const useMobileMedia = shouldUseMobileHeroMedia();

      return Array.from(document.querySelectorAll(".slide__img"))
        .map((el, index) => {
          const desktopImage = readHeroMediaAttr(el, "image");
          const desktopVideo = readHeroMediaAttr(el, "video");
          const desktopThumb = readHeroMediaAttr(el, "thumb");
          const mobileImage = readHeroMediaAttr(el, "mobileImage");
          const mobileVideo = readHeroMediaAttr(el, "mobileVideo");
          const mobileThumb = readHeroMediaAttr(el, "mobileThumb");
          const hasMobileAsset = Boolean(mobileImage || mobileVideo);
          const assetUrl = useMobileMedia && hasMobileAsset
            ? (mobileVideo || mobileImage)
            : (desktopVideo || desktopImage);

          if (!assetUrl) return null;

          const isVideo = /\.(mp4|webm|ogg|m3u8)$/i.test(assetUrl);
          const thumbUrl = useMobileMedia
            ? (mobileThumb || mobileImage || desktopThumb || desktopImage || (!isVideo ? assetUrl : ""))
            : (desktopThumb || mobileThumb || mobileImage || desktopImage || (!isVideo ? assetUrl : ""));

          return {
            assetUrl,
            thumbUrl,
            title: (el.dataset.title || `Slide ${String(index + 1).padStart(2, "0")}`).trim()
          };
        })
        .filter(Boolean);
    }

    function updateSlideTitle(index) {
      const container = document.querySelector(".slide-title-container");
      const current = document.querySelector(".slide-title");
      if (!container || !current) return;

      const newTitle = document.createElement("div");
      newTitle.className = "slide-title enter-up";
      newTitle.textContent = heroSlides[index]?.title || "";

      container.appendChild(newTitle);
      current.classList.add("exit-up");

      requestAnimationFrame(() => newTitle.classList.remove("enter-up"));
      setTimeout(() => current.remove(), 500);
    }

    // 🎯 效能快取:line-base-height CSS var 只需讀取一次,避免重複 getComputedStyle
    let _lineBaseHeight = 15;
    try {
      const _rootStyle = getComputedStyle(document.documentElement);
      _lineBaseHeight = parseInt(_rootStyle.getPropertyValue("--line-base-height")) || 15;
    } catch (e) { }

    function updateDragLines(activeIndex, forceUpdate = false) {
      const lines = dragLinesCache || Array.from(document.querySelectorAll(".drag-line"));
      if (!lines.length) return;

      lines.forEach(line => {
        line.style.height = "var(--line-base-height)";
        line.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
      });

      if (activeIndex === null) return;

      const thumbWidth = 720 / Math.max(heroSlideCount || heroSlides.length || 1, 1);
      const centerPosition = (activeIndex + 0.5) * thumbWidth;
      const lineWidth = 720 / lines.length;

      // 🎯 效能優化:因 CSS 上已有 transition-delay 效果,這裡直接同步寫入,
      //    移除 60 個 setTimeout 造成的 timer overhead 與閉包記憶體壓力
      lines.forEach((line, i) => {
        const linePosition = (i + 0.5) * lineWidth;
        const distFromCenter = Math.abs(linePosition - centerPosition);
        const maxDistance = thumbWidth * 0.7;

        if (distFromCenter <= maxDistance) {
          const normalizedDist = distFromCenter / maxDistance;
          const waveHeight = Math.cos((normalizedDist * Math.PI) / 2);
          const height = _lineBaseHeight + waveHeight * 35;
          const opacity = 0.3 + waveHeight * 0.4;

          // CSS 的 cubic-bezier transition 本身就會產生波浪進場效果,不需 setTimeout
          line.style.transitionDelay = `${normalizedDist * 0.08}s`;
          line.style.height = `${height}px`;
          line.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
        } else {
          line.style.transitionDelay = '0s';
        }
      });
    }

    function getOptimalDPR() {
      const dpr = window.devicePixelRatio || 1;
      const mem = navigator.deviceMemory || 8;
      if (mem <= 4) return 1;
      if (window.innerWidth <= 768) return Math.min(dpr, 1.5);
      return Math.min(dpr, 2);
    }

    // =========================================================
    // HLS Helper — 讓 HLS (.m3u8) 影片無縫融入 WebGLManager
    // =========================================================
    /**
     * 將 HLS 串流附加到 <video> 元素。
     * 執行順序優先級：
     *   1. Safari / iOS — 原生支援 HLS，直接設定 vid.src
     *   2. Chrome / Firefox / Edge — 透過 hls.js 軟解
     *   3. 萬用 fallback — 嘗試同名 .mp4（server 端需準備好 fallback）
     */
    function attachHLSToVideo(vid, hlsUrl) {
      // ① Safari / iOS 原生 HLS
      if (vid.canPlayType('application/vnd.apple.mpegurl')) {
        vid.src = hlsUrl;
        return;
      }
      // ② hls.js（Chrome / Firefox / Edge）
      if (typeof Hls !== 'undefined' && Hls.isSupported()) {
        const hls = new Hls({
          maxBufferLength: 30,       // 預緩衝 30 秒
          maxMaxBufferLength: 60,
          startLevel: -1,            // ABR：自動選畫質（-1 = auto）
          autoStartLoad: true,
          enableWorker: true,
        });
        hls.loadSource(hlsUrl);
        hls.attachMedia(vid);
        vid._hls = hls;             // 保存參照供 cleanup 使用
        return;
      }
      // ③ 最終 fallback：把 .m3u8 換成 .mp4（需 server 同時提供）
      const mp4 = hlsUrl.replace(/\.m3u8(\?.*)?$/i, '.mp4');
      if (mp4 !== hlsUrl) vid.src = mp4;
    }

    // =========================================================
    // WebGL Ultra-Premium Manager
    // =========================================================
    class WebGLManager {
      constructor(containerId, imageUrls) {
        this.container = document.getElementById(containerId);
        this.imageUrls = imageUrls;
        this.textures = [];
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
        this.renderPaused = false;
        this.activeTextureIndex = 0;
        this.textureLoader = new THREE.TextureLoader();
        this.texturePromises = {};
        this.videoEls = {};
        this.textureResolutions = {};

        const initialRenderSize = this.getRenderSize();

        this.renderer.setPixelRatio(window.devicePixelRatio || 1);
        this.renderer.setSize(initialRenderSize.width, initialRenderSize.height);
        this.container.appendChild(this.renderer.domElement);

        this.mouse = new THREE.Vector2(0, 0);
        this.targetMouse = new THREE.Vector2(0, 0);

        this.initShader();
        this.loadTextures();

        this._resizeRaf = 0;
        this._boundResize = () => {
          if (this._resizeRaf) return;
          this._resizeRaf = requestAnimationFrame(() => {
            this._resizeRaf = 0;
            this.onResize();
          });
        };

        window.addEventListener('resize', this._boundResize, { passive: true });
        window.addEventListener('mousemove', this.onMouseMove.bind(this), { passive: true });
      }

      getRenderSize() {
        if (!this.container) {
          return {
            width: window.innerWidth,
            height: window.innerHeight
          };
        }

        const width = Math.max(1, Math.round(this.container.clientWidth || window.innerWidth));
        const height = Math.max(1, Math.round(this.container.clientHeight || window.innerHeight));

        return { width, height };
      }

      onMouseMove(e) {
        this.targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      }

      initShader() {
        const initialRenderSize = this.getRenderSize();
        const vertexShader = `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `;

        const fragmentShader = `
          uniform sampler2D uTex1;
          uniform sampler2D uTex2;
          uniform float uProgress;
          uniform float uDirection;
          uniform float uTexReady;
          uniform vec2 uResolution;
          uniform vec2 uImageResolution;   // tex1's intrinsic resolution
          uniform vec2 uImageResolution2;  // tex2's intrinsic resolution
          uniform vec2 uMouse;
          varying vec2 vUv;

          vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
          float snoise(vec2 v){
            const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
            vec2 i  = floor(v + dot(v, C.yy) );
            vec2 x0 = v -   i + dot(i, C.xx);
            vec2 i1;
            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod(i, 289.0);
            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m = m*m ; m = m*m ;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
          }

          // 🎯 修正手機輪播圖片變形 0.5s bug:
          //    原本兩張圖共用同一組 ratio,導致桌機/手機素材切換時(長寬比不同),
          //    新圖會被舊圖的比例壓扁,等 transition 結束才彈回。
          //    現在每張圖都依自己的 uImageResolution 計算 cover ratio。
          vec2 fitCover(vec2 vUv, vec2 imgRes) {
            vec2 ratio = vec2(
                min((uResolution.x / uResolution.y) / (imgRes.x / imgRes.y), 1.0),
                min((uResolution.y / uResolution.x) / (imgRes.y / imgRes.x), 1.0)
            );
            return vec2(
                vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
                vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
            );
          }

          void main() {
            vec2 uvA = fitCover(vUv, uImageResolution);
            vec2 uvB = fitCover(vUv, uImageResolution2);

            uvA = (uvA - 0.5) * 0.95 + 0.5;
            uvA -= uMouse * 0.015;
            uvB = (uvB - 0.5) * 0.95 + 0.5;
            uvB -= uMouse * 0.015;

            float p = uProgress;

            vec2 uvNoise = mix(uvA, uvB, 0.5);
            float noiseVal = (p > 0.001 && p < 0.999) ? snoise(uvNoise * 3.0 + p * 2.0) : 0.0;
            float warp = noiseVal * p * (1.0 - p) * 0.3;

            vec2 center = vec2(0.5, 0.5);
            vec2 uv1 = mix(uvA, center, p * 0.15) + vec2(0.0, uDirection * p * 0.3) + warp;
            vec2 uv2 = mix(uvB, center, (1.0 - p) * 0.15) - vec2(0.0, uDirection * (1.0 - p) * 0.3) + warp;

            float shift = 0.04 * p * (1.0 - p) * (noiseVal + 1.0);

            vec4 t1 = vec4(
                texture2D(uTex1, uv1 + vec2(shift, 0.0)).r,
                texture2D(uTex1, uv1).g,
                texture2D(uTex1, uv1 - vec2(shift, 0.0)).b,
                1.0
            );

            vec4 t2 = vec4(
                texture2D(uTex2, uv2 + vec2(shift, 0.0)).r,
                texture2D(uTex2, uv2).g,
                texture2D(uTex2, uv2 - vec2(shift, 0.0)).b,
                1.0
            );

            // 影片紋理未就緒時輸出透明，讓底層 poster 顯示
            if (uTexReady < 0.5) { gl_FragColor = vec4(0.0); return; }
            gl_FragColor = mix(t1, t2, smoothstep(0.0, 1.0, p));
          }
        `;

        this.material = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          uniforms: {
            uTex1: { value: null },
            uTex2: { value: null },
            uProgress: { value: 0 },
            uDirection: { value: 1 },
            uTexReady: { value: 0 },
            uResolution: { value: new THREE.Vector2(initialRenderSize.width, initialRenderSize.height) },
            uImageResolution: { value: new THREE.Vector2(1920, 1080) },   // for uTex1
            uImageResolution2: { value: new THREE.Vector2(1920, 1080) },  // for uTex2
            uMouse: { value: new THREE.Vector2(0, 0) }
          }
        });

        this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material);
        this.scene.add(this.mesh);
      }

      loadTextures() {
        this.loadTextureAt(0);
        if (this.imageUrls.length > 1) {
          requestAnimationFrame(() => this.loadTextureAt(1));
        }
      }

      rememberTextureResolution(index, width, height) {
        if (!width || !height) return;
        this.textureResolutions[index] = { width, height };
        // 同步把這張紋理的解析度寫進對應 slot,避免動畫進行中突然切換 ratio。
        if (index === this.activeTextureIndex) {
          this.applyTextureResolution(index, null, 1);
          // 若 uTex2 也指向同一張(初始狀態),把 slot2 一併補上,避免第一次切換還沒拿到 nextRes 時被擠壓
          this.applyTextureResolution(index, null, 2);
        }
      }

      applyTextureResolution(index, texture, slot) {
        // slot: 1 → uImageResolution (對應 uTex1);2 → uImageResolution2 (對應 uTex2)
        const targetSlot = slot === 2 ? 2 : 1;
        const uniformName = targetSlot === 2 ? 'uImageResolution2' : 'uImageResolution';
        const resolution = this.textureResolutions[index];
        if (resolution) {
          this.material.uniforms[uniformName].value.set(resolution.width, resolution.height);
          return;
        }
        if (texture && texture.image && texture.image.width && texture.image.height) {
          this.material.uniforms[uniformName].value.set(texture.image.width, texture.image.height);
        }
      }

      loadTextureAt(index) {
        if (this.texturePromises[index]) return this.texturePromises[index];
        if (this.textures[index]) return Promise.resolve(this.textures[index]);

        const url = this.imageUrls[index];
        if (!url) return Promise.resolve(null);

        if (/\.(mp4|webm|ogg|m3u8)$/i.test(url)) {
          this.texturePromises[index] = new Promise((resolve) => {
            // 🎯 index=0 嘗試複用 prewarm video element（已在 decode，readyState 通常 >= 2）
            //    複用成功 → 跳過二次 decode，uTexReady 可立刻設 1，徹底消除黑屏空窗。
            let vid;
            const prewarm = window._prewarmVideo;
            const canReuse = index === 0 && prewarm && prewarm.el && prewarm.src === url && !/\.m3u8/i.test(url);
            if (canReuse) {
              vid = prewarm.el;
              window._prewarmVideo = null; // 認領，阻止 8s timer 清除
              vid.loop = true;
              // ⚠️ 修正：不在這裡立刻縮成 1×1！
              //    原本的寫法會在 texture 還沒 ready（readyState < 2，影片還在下載）時
              //    就把 promotePrwarmToHeroBg 升格的可見背景縮掉 → hero 變回 #000 黑屏，
              //    整個「治本」流程被自己下一行同步打掉。
              //    改成：維持 hero 背景可見，等 resolveTexture（uTexReady=1）後
              //    再等 2 個 RAF（確保 WebGL canvas 已實際畫出第一幀）才縮小收進 container。
            } else {
              vid = document.createElement('video');
              // 先設定所有播放屬性，再掛入 src / HLS，確保 iOS Safari autoplay policy 能命中
              vid.loop = true;
              vid.muted = true;
              vid.playsInline = true;
              vid.preload = 'auto';
              vid.setAttribute('muted', '');
              vid.setAttribute('playsinline', '');
              vid.setAttribute('webkit-playsinline', '');
              // 手機版直接設 autoplay，確保 iOS / Android 能在無使用者互動下播放
              if (window.matchMedia && window.matchMedia('(max-width: 767px)').matches) {
                vid.autoplay = true;
                vid.setAttribute('autoplay', '');
              }
              // 掛入 src：HLS (.m3u8) 走 attachHLSToVideo()，其餘直接設 src
              if (/\.m3u8(\?.*)?$/i.test(url)) {
                attachHLSToVideo(vid, url);
              } else {
                vid.src = url;
              }
              this.container.appendChild(vid);
              vid.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;';
            } // end else (new video element)
            this.videoEls[index] = vid;
            const texture = new THREE.VideoTexture(vid);
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            this.textures[index] = texture;
            const rememberVideoResolution = () => {
              this.rememberTextureResolution(index, vid.videoWidth || 1920, vid.videoHeight || 1080);
            };
            vid.addEventListener('loadedmetadata', rememberVideoResolution, { once: true });
            let didResolveTexture = false;
            let textureFallbackTimer = null;
            const clearTextureFallback = () => {
              if (!textureFallbackTimer) return;
              clearTimeout(textureFallbackTimer);
              textureFallbackTimer = null;
            };
            const resolveTexture = () => {
              if (didResolveTexture) return;
              didResolveTexture = true;
              clearTextureFallback();
              rememberVideoResolution();
              if (index === 0) {
                this.material.uniforms.uTex1.value = texture;
                this.material.uniforms.uTexReady.value = 1;
                this.applyTextureResolution(index, texture, 1);
                // 初始時 uTex2 還沒綁紋理,把 slot2 也補上同一比例,避免第一次切換瞬間的壓扁
                this.applyTextureResolution(index, texture, 2);
              }
              // 🎯 reuse 路徑：紋理 ready 後再等 2 個 RAF（GSAP ticker 已用新 uTexReady 畫出至少一幀），
              //    才把 hero 背景影片縮成 1×1 收進 webgl container → 全程無黑屏空窗。
              if (canReuse && index === 0) {
                requestAnimationFrame(() => requestAnimationFrame(() => {
                  vid.dataset.ndPromoted = '';
                  vid.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;';
                  try { this.container.appendChild(vid); } catch (_) { }
                }));
              }
              resolve(texture);
            };
            const resolveEmptyTexture = () => {
              if (didResolveTexture) return;
              didResolveTexture = true;
              clearTextureFallback();
              resolve(null);
            };
            // ⚠️ 修正：原本 2.5 秒後無條件 resolveTexture() 會在影片連第一幀都還沒有
            //    （readyState < 2）時就把 uTexReady 設 1 → shader 取樣空白 VideoTexture → 黑屏。
            //    改成輪詢：時間到了但幀還沒好就每 400ms 再檢查，等到 readyState >= 2 才 resolve。
            const fallbackTick = () => {
              textureFallbackTimer = null;
              if (didResolveTexture) return;
              if (vid.readyState >= 2) { resolveTexture(); return; }
              textureFallbackTimer = setTimeout(fallbackTick, 400);
            };
            textureFallbackTimer = setTimeout(fallbackTick, 2500);
            if (vid.readyState >= 2) resolveTexture();
            else vid.addEventListener('loadeddata', resolveTexture, { once: true });
            vid.addEventListener('error', resolveEmptyTexture, { once: true });
            // hls.js 自己管理載入流程，不需要也不該呼叫 vid.load()（會重置串流）
            if (vid.readyState === 0 && !vid._hls) vid.load();
            if (index === 0) this._safePlay(vid);
          });
          return this.texturePromises[index];
        }

        this.texturePromises[index] = new Promise((resolve) => {
          this.textureLoader.load(
            url,
            (texture) => {
              texture.generateMipmaps = true;
              texture.minFilter = THREE.LinearMipmapLinearFilter;
              this.textures[index] = texture;
              if (texture.image) {
                this.rememberTextureResolution(index, texture.image.width, texture.image.height);
              }
              if (index === 0) {
                this.material.uniforms.uTex1.value = texture;
                this.applyTextureResolution(index, texture, 1);
                // 同步補上 slot2,讓第一次切換前的渲染就以正確比例顯示
                this.applyTextureResolution(index, texture, 2);
              }
              resolve(texture);
            },
            undefined,
            () => resolve(null)
          );
        });
        return this.texturePromises[index];
      }

      preloadTexture(index) {
        return this.loadTextureAt(index);
      }

      _safePlay(vid) {
        if (!vid) return;
        const playPromise = vid.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(function (e) {
            if (e && (e.name === 'AbortError' || e.name === 'NotAllowedError')) {
              vid.addEventListener('canplay', function onCanPlay() {
                vid.removeEventListener('canplay', onCanPlay);
                vid.play().catch(function () { });
              }, { once: true });
            }
          });
        }
      }

      syncVideoPlayback() {
        const active = this.renderPaused
          ? new Set()
          : new Set(Array.prototype.slice.call(arguments).map(Number));
        Object.keys(this.videoEls || {}).forEach((key) => {
          const vid = this.videoEls[key];
          if (!vid) return;
          if (active.has(Number(key))) {
            this._safePlay(vid);
          } else if (!vid.paused) {
            vid.pause();
          }
        });
      }

      setRenderPaused(paused) {
        if (this.renderPaused === paused) return;
        this.renderPaused = paused;
        if (this.container) this.container.style.visibility = paused ? 'hidden' : '';
        if (paused) this.syncVideoPlayback();
        else this.syncVideoPlayback(this.activeTextureIndex);
      }

      onResize() {
        const nextRenderSize = this.getRenderSize();
        const nextDpr = window.devicePixelRatio || 1;
        if (this.renderer.getPixelRatio && this.renderer.getPixelRatio() !== nextDpr) {
          this.renderer.setPixelRatio(nextDpr);
        }
        this.renderer.setSize(nextRenderSize.width, nextRenderSize.height);
        this.material.uniforms.uResolution.value.set(nextRenderSize.width, nextRenderSize.height);
      }

      render() {
        // 🎯 dark-wrapper 蓋住首屏後,hero WebGL 不再可見;直接停 render 與影片 texture
        const scrollY = window._lenis && typeof window._lenis.scroll === 'number'
          ? window._lenis.scroll
          : window.scrollY;
        if (scrollY > window.innerHeight * 1.1) {
          this.setRenderPaused(true);
          return;
        }
        this.setRenderPaused(false);

        this.mouse.lerp(this.targetMouse, 0.05);
        this.material.uniforms.uMouse.value.copy(this.mouse);

        const t1 = this.material.uniforms.uTex1.value;
        const t2 = this.material.uniforms.uTex2.value;

        for (const idx in this.videoEls) {
          const vid = this.videoEls[idx];
          const tex = this.textures[idx];
          if (tex && (tex === t1 || tex === t2) && vid.readyState >= 2) {
            tex.needsUpdate = true;
          }
        }
        this.renderer.render(this.scene, this.camera);
      }

      transition(currentIndex, nextIndex, direction, onCompleteCallback) {
        const transitionToken = {};
        this._transitionToken = transitionToken;

        Promise.all([
          this.loadTextureAt(currentIndex),
          this.loadTextureAt(nextIndex)
        ]).then(([currentTexture, nextTexture]) => {
          if (this._transitionToken !== transitionToken) return;
          if (!currentTexture || !nextTexture) {
            if (onCompleteCallback) onCompleteCallback();
            return;
          }

          this.material.uniforms.uTex1.value = currentTexture;
          this.material.uniforms.uTex2.value = nextTexture;
          // 🎯 同步把兩張紋理各自的解析度寫進對應 slot,避免動畫途中圖片被舊比例壓扁
          this.applyTextureResolution(currentIndex, currentTexture, 1);
          this.applyTextureResolution(nextIndex, nextTexture, 2);
          this.material.uniforms.uDirection.value = direction;
          this.material.uniforms.uProgress.value = 0;
          this.activeTextureIndex = currentIndex;
          this.syncVideoPlayback(currentIndex, nextIndex);

          gsap.to(this.material.uniforms.uProgress, {
            value: 1,
            duration: 1.4,
            ease: "expo.inOut",
            onComplete: () => {
              this.material.uniforms.uTex1.value = nextTexture;
              this.material.uniforms.uProgress.value = 0;
              this.activeTextureIndex = nextIndex;
              // uTex1 現在指向 nextTexture,同步把 slot1 的解析度更新成 next
              this.applyTextureResolution(nextIndex, nextTexture, 1);
              this.applyTextureResolution(nextIndex, nextTexture, 2);
              this.syncVideoPlayback(nextIndex);
              if (onCompleteCallback) onCompleteCallback();
            }
          });
        });
      }
    }

    class Slideshow {
      constructor(webglManager, totalSlides) {
        this.webgl = webglManager;
        this.current = 0;
        this.slidesTotal = totalSlides;
      }

      next() { this.navigate(NEXT); }
      prev() { this.navigate(PREV); }

      goTo(index) {
        if (isAnimating) {
          pendingNavigation = { type: "goto", index };
          return false;
        }
        if (index === this.current) return false;

        isAnimating = true;
        updateNavigationUI(true);

        const previous = this.current;
        this.current = index;
        const direction = index > previous ? 1 : -1;

        document.querySelectorAll(".slide-thumb").forEach((thumb, i) => thumb.classList.toggle("active", i === index));
        updateSlideCounter(index);
        updateSlideTitle(index);
        updateDragLines(index, true);

        this.webgl.transition(previous, this.current, direction, () => {
          isAnimating = false;
          updateNavigationUI(false);
          if (pendingNavigation) {
            const { type, index, direction } = pendingNavigation;
            pendingNavigation = null;
            setTimeout(() => type === "goto" ? this.goTo(index) : this.navigate(direction), 50);
          }
          const hoverIdx = (mouseOverThumbnails && lastHoveredThumbIndex !== null) ? lastHoveredThumbIndex : this.current;
          updateDragLines(hoverIdx, true);
        });
      }

      navigate(direction) {
        if (isAnimating) {
          pendingNavigation = { type: "navigate", direction };
          return false;
        }

        isAnimating = true;
        updateNavigationUI(true);

        const previous = this.current;
        this.current = direction === 1
          ? this.current < this.slidesTotal - 1 ? ++this.current : 0
          : this.current > 0 ? --this.current : this.slidesTotal - 1;

        document.querySelectorAll(".slide-thumb").forEach((thumb, index) => {
          thumb.classList.toggle("active", index === this.current);
        });
        updateSlideCounter(this.current);
        updateSlideTitle(this.current);
        updateDragLines(this.current, true);

        this.webgl.transition(previous, this.current, direction, () => {
          isAnimating = false;
          updateNavigationUI(false);
          if (pendingNavigation) {
            const { type, index, direction } = pendingNavigation;
            pendingNavigation = null;
            setTimeout(() => type === "goto" ? this.goTo(index) : this.navigate(direction), 50);
          }
          const hoverIdx2 = (mouseOverThumbnails && lastHoveredThumbIndex !== null) ? lastHoveredThumbIndex : this.current;
          updateDragLines(hoverIdx2, true);
        });
      }
    }

    // =========================================================
    // INITIALIZATION & SCROLL ANIMATION TIE-IN
    // =========================================================
    document.addEventListener("DOMContentLoaded", () => {

      let winW = window.innerWidth;
      let winH = window.innerHeight;
      const isMobileInit = winW <= 768;
      window.addEventListener('resize', () => {
        winW = window.innerWidth;
        winH = window.innerHeight;
      }, { passive: true });

      const HERO_RENDER_SLEEP_VH = 1.1;
      function getPerformanceScrollY() {
        return window._lenis && typeof window._lenis.scroll === 'number'
          ? window._lenis.scroll
          : window.scrollY;
      }
      function isHeroRenderSleeping() {
        return getPerformanceScrollY() > winH * HERO_RENDER_SLEEP_VH;
      }

      let heroSlideshowInitialized = false;
      function initHeroSlideshow() {
        if (heroSlideshowInitialized) return;

        heroSlides = collectHeroSlides();
        const imageUrls = heroSlides.map(slide => slide.assetUrl);
        const slideCount = imageUrls.length;

        if (!slideCount) return;
        heroSlideshowInitialized = true;
        heroSlideCount = slideCount;

        const initialTitle = document.querySelector(".slide-title");
        if (initialTitle) initialTitle.textContent = heroSlides[0].title;

        webglManager = new WebGLManager("webgl-container", imageUrls);
        const slideshow = new Slideshow(webglManager, slideCount);

        const thumbsContainer = document.querySelector(".slide-thumbs");
        if (thumbsContainer) {
          thumbsContainer.innerHTML = "";
          heroSlides.forEach((slide, index) => {
            const thumb = document.createElement("div");
            thumb.className = "slide-thumb";
            if (slide.thumbUrl) {
              thumb.style.backgroundImage = `url("${slide.thumbUrl}")`;
            } else if (/\.(mp4|webm|ogg)$/i.test(slide.assetUrl)) {
              thumb.style.background = '#111';
              thumb.innerHTML = '<span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:22px;opacity:0.6;">&#9654;</span>';
            } else {
              thumb.style.backgroundImage = `url("${slide.assetUrl}")`;
            }
            if (index === 0) thumb.classList.add("active");

            thumb.addEventListener("click", () => {
              lastHoveredThumbIndex = index;
              webglManager?.preloadTexture(index);
              ensureTopAndLock();
              slideshow.goTo(index);
            });

            thumb.addEventListener("mouseenter", () => {
              currentHoveredThumb = index;
              lastHoveredThumbIndex = index;
              mouseOverThumbnails = true;
              webglManager?.preloadTexture(index);
              if (!isAnimating) updateDragLines(index, true);
            });

            thumb.addEventListener("mouseleave", () => {
              if (currentHoveredThumb === index) currentHoveredThumb = null;
            });

            thumbsContainer.appendChild(thumb);
          });
        }

        const dragIndicator = document.querySelector(".drag-indicator");
        if (dragIndicator) {
          dragIndicator.innerHTML = "";
          const linesContainer = document.createElement("div");
          linesContainer.className = "lines-container";
          dragIndicator.appendChild(linesContainer);
          dragLinesCache = [];
          for (let i = 0; i < 60; i++) {
            const line = document.createElement("div");
            line.className = "drag-line";
            linesContainer.appendChild(line);
            dragLinesCache.push(line);
          }
        }

        const totalSlidesEl = document.querySelector(".total-slides");
        if (totalSlidesEl) totalSlidesEl.textContent = String(slideCount).padStart(2, "0");
        document.documentElement.style.setProperty("--thumb-width", `${720 / slideCount}px`);

        document.querySelector(".prev-slide")?.addEventListener("click", () => { ensureTopAndLock(); slideshow.prev(); });
        document.querySelector(".next-slide")?.addEventListener("click", () => { ensureTopAndLock(); slideshow.next(); });

        updateSlideCounter(0);
        updateDragLines(0, true);

        // 🎯 滑鼠懸停／拖曳：只在桌機綁定（touch 設備不觸發 mouse events）
        if (!isMobileInit) {
          const thumbsArea = document.querySelector(".thumbs-container");
          if (thumbsArea) {
            thumbsArea.addEventListener("mouseenter", () => { mouseOverThumbnails = true; stopAutoLoop(); });
            thumbsArea.addEventListener("mouseleave", () => { mouseOverThumbnails = false; currentHoveredThumb = null; updateDragLines(slideshow.current, true); startAutoLoop(); });
          }

          let dragStartX = 0;
          let isDragging = false;
          const heroEl = document.querySelector('.hero-section');
          if (heroEl) {
            heroEl.style.cursor = 'grab';
            heroEl.addEventListener('mousedown', (e) => {
              isDragging = true;
              dragStartX = e.clientX;
              heroEl.style.cursor = 'grabbing';
              stopAutoLoop();
            }, { passive: true });
            document.addEventListener('mouseup', (e) => {
              if (!isDragging) return;
              isDragging = false;
              heroEl.style.cursor = 'grab';
              const diff = dragStartX - e.clientX;
              if (Math.abs(diff) > 50 && !isAnimating) {
                if (diff > 0) slideshow.next();
                else slideshow.prev();
              }
              startAutoLoop();
            }, { passive: true });
            heroEl.addEventListener('mouseleave', () => { isDragging = false; heroEl.style.cursor = 'grab'; }, { passive: true });
          }
        }

        let autoLoopTimer = null;
        let autoLoopStartToken = 0;
        function startAutoLoop() {
          stopAutoLoop();
          const token = ++autoLoopStartToken;
          const armAutoLoop = () => {
            if (token !== autoLoopStartToken) return;
            autoLoopTimer = setInterval(() => {
              if (!isAnimating && !isHeroRenderSleeping()) slideshow.next();
            }, 5000);
          };
          const loaderReady = (window._nudotLoaderDismissed === true || !document.getElementById('nudot-loader'))
            ? Promise.resolve()
            : new Promise((resolve) => {
              document.addEventListener('nudot:loader-dismissed', resolve, { once: true });
            });
          const activeTextureReady = webglManager?.preloadTexture(slideshow.current);
          const textureReady = activeTextureReady && typeof activeTextureReady.then === 'function'
            ? Promise.race([
              activeTextureReady.catch(() => null),
              new Promise((resolve) => setTimeout(resolve, 1800))
            ])
            : Promise.resolve();
          Promise.allSettled([loaderReady, textureReady]).then(armAutoLoop);
        }
        function stopAutoLoop() {
          autoLoopStartToken++;
          if (autoLoopTimer) { clearInterval(autoLoopTimer); autoLoopTimer = null; }
        }
        startAutoLoop();

        // 🎯 loader 消失後 600ms 靜默預載 slide 1（slider02）
        //    讓第一次自動切換或手動切換時 Promise.all 立刻 resolve，消除轉場延遲。
        //    600ms 是讓 hero canvas 先穩定播放、不搶 slider01 的頻寬。
        (function () {
          function _preloadSlide1() {
            if (webglManager && heroSlideCount > 1) webglManager.preloadTexture(1);
          }
          if (window._nudotLoaderDismissed) {
            setTimeout(_preloadSlide1, 600);
          } else {
            document.addEventListener('nudot:loader-dismissed', function () {
              setTimeout(_preloadSlide1, 600);
            }, { once: true });
          }
        }());

        let touchStartY = 0;
        document.addEventListener("touchstart", (e) => { touchStartY = e.touches[0].clientY; window._touchStartX = e.touches[0].clientX; }, { passive: true });

        // 🎯 移除空的 touchmove 處理器(原本什麼也沒做卻佔事件排程)

        document.addEventListener("touchend", (e) => {
          const touchEndX = e.changedTouches[0].clientX;
          const touchDiffX = (window._touchStartX || touchEndX) - touchEndX;
          if (Math.abs(touchDiffX) > 50 && window.scrollY < window.innerHeight && !isAnimating) {
            if (touchDiffX > 0) slideshow.next();
            else slideshow.prev();
          }
        }, { passive: true });

        document.addEventListener("keydown", (e) => {
          if (window.scrollY <= window.innerHeight * 0.5 && !isAnimating) {
            if (e.key === "ArrowRight") slideshow.next();
            else if (e.key === "ArrowLeft") slideshow.prev();
          }
        });
      }

      function revealSetup(el) {
        if (!el) return null;
        el.style.overflow = 'hidden';
        const inner = document.createElement('div');
        inner.style.willChange = 'transform';
        while (el.firstChild) inner.appendChild(el.firstChild);
        el.appendChild(inner);
        gsap.set(inner, { yPercent: 110 });
        return inner;
      }

      // 🎯 手機版：top-header 和 grid-section 在 mobile CSS 中 display:none，跳過 DOM wrapping
      const rvHuge = isMobileInit ? [] : [...document.querySelectorAll('.overlay-top .huge-text')].map(revealSetup);
      const rvTag = isMobileInit ? null : revealSetup(document.querySelector('.overlay-top .small-tag'));
      const rvSvcLi = isMobileInit ? [] : [...document.querySelectorAll('.overlay-top .services-list li')].map(revealSetup);
      const rvGrid = isMobileInit ? [] : [...document.querySelectorAll('.overlay-bottom .hero-quick-links-row > div, .overlay-bottom .border-top-line > div')].map(revealSetup);
      const rvFooter = [...document.querySelectorAll('.overlay-bottom .footer-col')].map(revealSetup);
      gsap.set('.bottom-ui-container', { autoAlpha: 0, y: 22 });

      const heroTl = gsap.timeline({ paused: true });
      window._heroTl = heroTl;
      heroTl
        .to(rvHuge, {
          yPercent: 0, duration: 0.85, stagger: 0.14, ease: 'power4.out'
        }, 0.4)
        .to(rvTag, {
          yPercent: 0, duration: 0.75, ease: 'power3.out'
        }, '-=0.9')
        .to(rvSvcLi, {
          yPercent: 0, duration: 0.5, stagger: 0.04, ease: 'power3.out'
        }, '-=0.65')
        .to(rvGrid, {
          yPercent: 0, duration: 0.42, stagger: 0.05, ease: 'power3.out'
        }, 0.35)
        .to(rvFooter, {
          yPercent: 0, duration: 0.25, stagger: 0.03, ease: 'power3.out'
        }, 0.3)
        .to('.bottom-ui-container', {
          autoAlpha: 1, y: 0, duration: 0.55, ease: 'power3.out'
        }, 0.7);

      // 🎯 治本：把 prewarm video 升格為 hero 可見背景層
      //    prewarm 從 <head> 就在 decode，此時 readyState 通常 >= 2（影片本身很小）。
      //    把它移進 hero-section 並設 opacity:1 → 立刻有畫面，完全無黑屏空窗。
      //    之後 WebGLManager.loadTextureAt(0) 會認領它做 VideoTexture，
      //    並把 uTexReady 設為 1，WebGL canvas（z-index:1, alpha:true）從此覆蓋它。
      (function promotePrwarmToHeroBg() {
        const pw = window._prewarmVideo;
        if (!pw || !pw.el) return;
        const heroSec = document.querySelector('.hero-section');
        if (!heroSec) return;
        const pv = pw.el;
        pv.dataset.ndPromoted = '1'; // 🛡️ 告知 head 的 8s 清除 timer：此影片正在當可見背景，不可移除
        pv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;pointer-events:none;opacity:1;';
        heroSec.insertBefore(pv, heroSec.firstChild);
      })();

      // 🎯 刻意在 DOMContentLoaded 立即啟動：
      //    loader 動畫期間（約 3.2 秒）讓 WebGL 紋理與影片在背景靜靜預載，
      //    loader 淡出時畫面已 ready，使用者不會看到空白或等待。
      initHeroSlideshow();

      const cube = document.getElementById('cube');
      const sceneWrapper = document.getElementById('sceneWrapper');
      const section2 = document.getElementById('section-2-content');
      const imgOverlay = document.getElementById('img-overlay');
      const darkWrapper = document.getElementById('dark-wrapper');
      const darkWrapperMask = document.getElementById('dark-wrapper-mask');
      const dwBlackOverlay = document.getElementById('dw-black-overlay');
      const stmLogoEl = document.getElementById('stmLogo');
      const titleLine1 = document.getElementById('title-line1');
      const titleLine2 = document.getElementById('title-line2');
      const titleMarquee = document.getElementById('title-marquee');
      const titleSubtitle = document.getElementById('title-subtitle');
      const titleDesc = document.getElementById('title-desc');
      const newSubtitle = document.getElementById('new-subtitle');
      const newLine1 = document.getElementById('new-line1');
      const newLine2 = document.getElementById('new-line2');
      const newDesc = document.getElementById('new-desc');
      const newTextGroup = document.getElementById('new-text-group');
      const uiNav = document.getElementById('ui-nav');
      const uiScroll = document.getElementById('ui-scroll');
      const uiGlow1 = document.getElementById('ui-glow1');
      const uiGlow2 = document.getElementById('ui-glow2');
      const fixedLogoEl = document.getElementById('fixed-logo');

      // 🎯 dark-wrapper-mask 在手機版 display:none，跳過相關初始化
      if (!isMobileInit) {
        if (uiNav) { gsap.set(uiNav, { opacity: 0, y: -25 }); }
        if (uiScroll) { gsap.set(uiScroll, { opacity: 0 }); }
        if (uiGlow1) { gsap.set(uiGlow1, { opacity: 0, scale: 0.4 }); }
        if (uiGlow2) { gsap.set(uiGlow2, { opacity: 0, scale: 0.4 }); }
        if (darkWrapper) gsap.set(darkWrapper, { force3D: true });
      }

      // 🎯 #nav display:none 在手機版，跳過 logo 動畫
      if (!isMobileInit && fixedLogoEl) {
        gsap.set(fixedLogoEl, { y: -16 });
        gsap.to(fixedLogoEl, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 2.8 });
      }

      function resetReveal() {
        gsap.set(titleSubtitle, { yPercent: 130 });
        gsap.set(titleLine1, { yPercent: 130 });
        gsap.set(titleLine2, { yPercent: 130 });
        gsap.set(titleMarquee, { yPercent: 130 });
        gsap.set(titleDesc, { yPercent: 130 });
        gsap.set(newSubtitle, { yPercent: 130 });
        gsap.set(newLine1, { yPercent: 130 });
        gsap.set(newLine2, { yPercent: 130 });
        gsap.set(newDesc, { yPercent: 130 });
      }
      // 🎯 dark-wrapper 元素手機版隱藏，無需初始化位置
      if (!isMobileInit) resetReveal();

      const faceFront = document.querySelector('.face.front');
      const scene = document.querySelector('.scene');
      const introPanel = document.getElementById('intro-panel');
      const introTopHeader = document.querySelector('.ip-top-header');
      const introBottomLetter = document.querySelector('.ip-bottom-letter');
      const introTopTitle = introTopHeader?.querySelector('.ip-top-title');
      const introBottomTitle = introBottomLetter?.querySelector('.ip-top-title');

      // 🎯 _ipWave 在 intro-panel（dark-wrapper 內），手機版 display:none，完全跳過
      const _ipWave = !isMobileInit ? (function () {
        const wrapper = document.getElementById('ip-wave-wrapper');
        const leftCol = wrapper.querySelector('.wave-column-left');
        const rightCol = wrapper.querySelector('.wave-column-right');
        const thumb = document.getElementById('ip-wave-thumb');
        const leftTexts = gsap.utils.toArray(leftCol.querySelectorAll('.animated-text'));
        const rightTexts = gsap.utils.toArray(rightCol.querySelectorAll('.animated-text'));
        const WAVE_NUM = 12;
        const WAVE_SPD = 1;
        let currentSrc = '';
        let _ranges = null;
        let _lastFocused = -1; // 加入快取，避免重複操作 DOM
        let _wrapperH = 0; // 🎯 效能優化:快取 offsetHeight,避免每幀 layout 讀取
        let _initialized = false;

        const lqx = leftTexts.map(t => gsap.quickTo(t, 'x', { duration: 0.6, ease: 'power4.out' }));
        const rqx = rightTexts.map(t => gsap.quickTo(t, 'x', { duration: 0.6, ease: 'power4.out' }));

        function calcRanges() {
          const maxLW = Math.max(...leftTexts.map(t => t.offsetWidth));
          const maxRW = Math.max(...rightTexts.map(t => t.offsetWidth));
          return {
            l: { min: 0, max: Math.max(0, leftCol.offsetWidth - maxLW) },
            r: { min: 0, max: Math.max(0, rightCol.offsetWidth - maxRW) },
          };
        }

        function waveX(index, progress, range) {
          const phase = WAVE_NUM * index + WAVE_SPD * progress * Math.PI * 2 - Math.PI / 2;
          return range.min + ((Math.sin(phase) + 1) / 2) * (range.max - range.min);
        }

        function closestToCenter(progress) {
          const total = leftTexts.length;
          if (total === 0) return 0;
          let index = Math.round(progress * (total - 1));
          return Math.max(0, Math.min(total - 1, index));
        }

        function ensureInit() {
          if (_initialized) return;
          _ranges = calcRanges();
          _wrapperH = wrapper.offsetHeight; // 🎯 初始化時讀取一次
          leftTexts.forEach((t, i) => gsap.set(t, { x: waveX(i, 0, _ranges.l) }));
          rightTexts.forEach((t, i) => gsap.set(t, { x: -waveX(i, 0, _ranges.r) }));
          _initialized = true;
        }
        window.addEventListener('resize', () => {
          if (!_initialized) return;
          _ranges = calcRanges();
          _wrapperH = wrapper.offsetHeight; // 🎯 resize 時更新快取
        }, { passive: true });

        return {
          update(progress) {
            ensureInit();
            if (!_ranges) _ranges = calcRanges();
            if (!_wrapperH) _wrapperH = wrapper.offsetHeight;

            // 🎯 使用快取值,消除每幀的 layout thrashing
            const centerBias = winW <= 768 ? 0.36 : 0.5;
            gsap.set(wrapper, { y: _wrapperH * (centerBias - progress) });

            const focused = closestToCenter(progress);
            const focusChanged = focused !== _lastFocused;

            leftTexts.forEach((t, i) => {
              lqx[i](waveX(i, progress, _ranges.l));
              if (focusChanged) t.classList.toggle('focused', i === focused);
            });
            rightTexts.forEach((t, i) => {
              rqx[i](-waveX(i, progress, _ranges.r));
              if (focusChanged) t.classList.toggle('focused', i === focused);
            });

            if (focusChanged) {
              const src = leftTexts[focused] && leftTexts[focused].dataset.image;
              if (src && src !== currentSrc) { currentSrc = src; thumb.src = src; }
              _lastFocused = focused;
            }
          }
        };
      })() : { update() { } };
      // 🎯 ip-wave-wrapper 翻轉效果 DOM 操作，手機版完全跳過
      if (!isMobileInit) (function () {
        const zhMap = {
          'Core-Site': '（核心網站）', 'Gen-AI Visual': '（生成式 AI 視覺）',
          'Motion Flow': '（動態流動）', 'WebGL Realm': '（WebGL 領域）',
          '3D Matrix': '（3D 矩陣）', 'Interaction': '（交互設計）',
          'Pixel Perfect': '（完美像素）', 'Logic Build': '（邏輯建構）',
          'Fluid UI': '（流動介面）', 'Aero Design': '（輕量化設計）',
          'Pure Code': '（純粹代碼）', 'Digital Art': '（數位藝術）',
          'Strategy': '（策略）', 'Design': '（設計）', 'Tech': '（技術）',
          'Creative': '（創意）', 'Motion': '（動態）', 'Brand': '（品牌）',
          'Future': '（未來）', 'Vision': '（願景）', 'System': '（系統）',
          'Labs': '（實驗室）', 'Core': '（核心）', 'Craft': '（工藝）',
        };
        document.querySelectorAll('#ip-wave-wrapper .animated-text').forEach(el => {
          const en = el.textContent.trim();
          const zh = zhMap[en];
          if (!zh) return;
          el.innerHTML = '';
          const wrap = document.createElement('span');
          wrap.className = 'flip-wrap';
          const enS = document.createElement('span');
          enS.className = 'at-en'; enS.textContent = en;
          const zhS = document.createElement('span');
          zhS.className = 'at-zh'; zhS.textContent = zh;
          wrap.appendChild(enS);
          wrap.appendChild(zhS);
          el.appendChild(wrap);
        });
      })();

      let baseRotY = -45;
      let targetScrollProgress = 0;
      let currentScrollProgress = 0;
      let scrollMediaActivated = false;
      const scrollTrack = document.querySelector('.scroll-track');
      let maxScroll = 0;

      function activateScrollMediaOnce() {
        if (scrollMediaActivated) return;
        scrollMediaActivated = true;
        document.dispatchEvent(new Event('nudot:activate-scroll-media'));
      }

      function updateMaxScroll() {
        maxScroll = scrollTrack ? Math.max(0, scrollTrack.offsetHeight - winH) : 0;
      }

      function syncScrollState(jumpToCurrent = false) {
        const currentScrollY = window._lenis ? window._lenis.scroll : window.scrollY;
        const nextProgress = maxScroll > 0
          ? Math.max(0, Math.min(currentScrollY / maxScroll, 1))
          : 0;
        targetScrollProgress = nextProgress;
        if (jumpToCurrent) currentScrollProgress = nextProgress;
      }

      // 🎯 效能優化:加上節流旗標,避免 window 'scroll' 與 lenis 'scroll' 重複觸發
      let _scrollSyncScheduled = false;
      function scheduleSyncScrollState() {
        if (_scrollSyncScheduled) return;
        _scrollSyncScheduled = true;
        requestAnimationFrame(() => {
          _scrollSyncScheduled = false;
          syncScrollState();
        });
      }

      window.addEventListener('scroll', scheduleSyncScrollState, { passive: true });

      window.addEventListener('pageshow', () => {
        updateMaxScroll();
        syncScrollState(true);
      });

      window.addEventListener('resize', () => {
        updateMaxScroll();
        syncScrollState(true);
      }, { passive: true });

      if (window._lenis) {
        window._lenis.on('scroll', scheduleSyncScrollState);
      }

      if (scrollTrack && 'ResizeObserver' in window) {
        const scrollTrackResizeObserver = new ResizeObserver(() => {
          updateMaxScroll();
          scheduleSyncScrollState();
        });
        scrollTrackResizeObserver.observe(scrollTrack);
      }

      updateMaxScroll();

      requestAnimationFrame(() => {
        updateMaxScroll();
        syncScrollState(true);
      });

      function easeInOutCubic(x) {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
      }

      function setDarkWrapperReveal(hiddenPercent) {
        if (winW <= 768) {
          if (darkWrapperMask) darkWrapperMask.style.height = '';
          if (darkWrapperMask) {
            darkWrapperMask.style.clipPath = '';
            darkWrapperMask.style.webkitClipPath = '';
          }
          if (darkWrapper) darkWrapper.style.clipPath = 'none';
          return;
        }
        if (darkWrapperMask) {
          const safeHiddenPercent = Math.max(0, Math.min(hiddenPercent, 100));
          const nextClip = `inset(${safeHiddenPercent}% 0 0 0)`;
          if (darkWrapperMask.style.clipPath !== nextClip) {
            darkWrapperMask.style.clipPath = nextClip;
            darkWrapperMask.style.webkitClipPath = nextClip;
          }
          return;
        }
        if (darkWrapper) {
          gsap.set(darkWrapper, { clipPath: `inset(${hiddenPercent}% 0 0 0)` });
        }
      }

      class RevealGL {
        constructor(canvas) {
          this.canvas = canvas;
          this.gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false });
          if (!this.gl) return;
          this._build();
          this._resize();
          this._resizeRaf = 0;
          window.addEventListener('resize', () => {
            if (this._resizeRaf) return;
            this._resizeRaf = requestAnimationFrame(() => {
              this._resizeRaf = 0;
              this._resize();
            });
          }, { passive: true });
        }
        _build() {
          const gl = this.gl;
          const vert = `attribute vec2 a_pos; varying vec2 vUv;
            void main(){ vUv=a_pos*0.5+0.5; gl_Position=vec4(a_pos,0.,1.); }`;
          const frag = `
            precision highp float;
            varying vec2 vUv;
            uniform float uReveal;
            uniform float uTime;
            vec3 permute(vec3 x){return mod(((x*34.)+1.)*x,289.);}
            float snoise(vec2 v){
              const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
              vec2 i=floor(v+dot(v,C.yy)), x0=v-i+dot(i,C.xx);
              vec2 i1=(x0.x>x0.y)?vec2(1.,0.):vec2(0.,1.);
              vec4 x12=x0.xyxy+C.xxzz; x12.xy-=i1;
              i=mod(i,289.);
              vec3 p=permute(permute(i.y+vec3(0.,i1.y,1.))+i.x+vec3(0.,i1.x,1.));
              vec3 m=max(.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.);
              m=m*m; m=m*m;
              vec3 xv=2.*fract(p*C.www)-1., h=abs(xv)-.5, ox=floor(xv+.5), a0=xv-ox;
              m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
              vec3 g; g.x=a0.x  * x0.x  + h.x  * x0.y;
              g.yz = a0.yz * x12.xz + h.yz * x12.yw;
              return 130.0 * dot(m, g);
            }
            void main(){
              float yBias = vUv.y * 0.50;
              float n = snoise(vUv*3.6 + vec2(uTime*0.08, uTime*0.05)) * 0.68
                      + snoise(vUv*7.8 + vec2(-uTime*0.06, uTime*0.12)) * 0.32;
              float thr  = uReveal * 2.8 - 1.4 + yBias;
              float edge = 0.13 + (1.0 - uReveal) * 0.05;
              float mask = smoothstep(thr - edge, thr + edge, n);
              gl_FragColor = vec4(0., 0., 0., mask);
            }`;
          const mk = (type, src) => {
            const s = gl.createShader(type);
            gl.shaderSource(s, src); gl.compileShader(s); return s;
          };
          this.prog = gl.createProgram();
          gl.attachShader(this.prog, mk(gl.VERTEX_SHADER, vert));
          gl.attachShader(this.prog, mk(gl.FRAGMENT_SHADER, frag));
          gl.linkProgram(this.prog);
          const buf = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, buf);
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
          const loc = gl.getAttribLocation(this.prog, 'a_pos');
          gl.enableVertexAttribArray(loc);
          gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
          this.uReveal = gl.getUniformLocation(this.prog, 'uReveal');
          this.uTime = gl.getUniformLocation(this.prog, 'uTime');

          gl.useProgram(this.prog);
          gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        }
        _resize() {
          const dpr = typeof getOptimalDPR === 'function' ? getOptimalDPR() : Math.min(devicePixelRatio || 1, 2);
          const nextWidth = Math.max(1, Math.floor(this.canvas.offsetWidth * dpr));
          const nextHeight = Math.max(1, Math.floor(this.canvas.offsetHeight * dpr));
          if (this.canvas.width === nextWidth && this.canvas.height === nextHeight) return;
          this.canvas.width = nextWidth;
          this.canvas.height = nextHeight;
          if (this.gl) this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        }
        render(reveal) {
          const gl = this.gl; if (!gl) return;
          gl.disable(gl.BLEND);
          gl.clearColor(0, 0, 0, reveal <= 0 ? 1 : 0);
          gl.clear(gl.COLOR_BUFFER_BIT);
          if (reveal <= 0 || reveal >= 1) return;
          gl.useProgram(this.prog);
          gl.uniform1f(this.uReveal, reveal);
          gl.uniform1f(this.uTime, performance.now() * 0.001);
          gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        }
      }

      const revealCanvas = document.getElementById('ip-reveal-canvas');
      // WebGL reveal is currently opt-in. The default path uses the CSS clip-path mask above
      // because the canvas stays display:none and should not allocate a WebGL context.
      const enableIpRevealGL = revealCanvas?.dataset.revealMode === 'webgl';
      const revealGL = enableIpRevealGL
        ? new RevealGL(revealCanvas)
        : null;

      // 🎯 效能優化:快取上一幀的 progress,當變化極小時跳過整個動畫管線,
      //    大幅降低 gsap.set 的呼叫頻率,修復 scroll 卡頓
      let _lastAppliedProgress = -2;

      const heroBlendHintEls = Array.from(document.querySelectorAll('.overlay-ui, .huge-text, .small-tag'));
      let heroBlendHintsEnabled = true;
      const heroSectionEl = document.querySelector('.hero-section');
      let heroSectionHidden = false;

      function setHeroBlendHints(enabled) {
        if (heroBlendHintsEnabled === enabled) return;
        heroBlendHintsEnabled = enabled;
        heroBlendHintEls.forEach(el => { el.style.willChange = enabled ? 'transform' : 'auto'; });
      }

      function setHeroSectionHidden(hidden) {
        if (!heroSectionEl) return;
        if (window.innerWidth <= 767) {
          heroSectionHidden = false;
          heroSectionEl.style.visibility = '';
          return;
        }
        if (heroSectionHidden === hidden) return;
        heroSectionHidden = hidden;
        heroSectionEl.style.visibility = hidden ? 'hidden' : '';
      }

      let mobileHeroStaticReady = false;
      let _mobileWebglFrameToggle = 0;

      function updateMobileSceneSize() {
        if (!scene) return;
        const mobileSceneSize = Math.min(window.innerWidth * 0.56, 220);
        scene.style.setProperty('--scene-size', `${mobileSceneSize}px`);
        scene.style.setProperty('--scene-depth', `${mobileSceneSize / 2}px`);
      }

      function applyMobileHeroStaticState() {
        if (mobileHeroStaticReady) return;
        mobileHeroStaticReady = true;
        if (darkWrapperMask) darkWrapperMask.style.height = '';
        if (darkWrapper) darkWrapper.style.clipPath = 'none';
        if (dwBlackOverlay) gsap.set(dwBlackOverlay, { opacity: 0 });
        if (stmLogoEl) stmLogoEl.classList.remove('is-visible');
        if (section2) gsap.set(section2, { opacity: 0, pointerEvents: 'none', zIndex: 18 });
        if (newTextGroup) gsap.set(newTextGroup, { opacity: 0 });
        if (sceneWrapper) {
          gsap.set(sceneWrapper, { xPercent: -50, yPercent: -50, scale: 1, top: '50%', opacity: 1 });
        }
        updateMobileSceneSize();
      }

      window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) updateMobileSceneSize();
      }, { passive: true });

      if (winW <= 768) applyMobileHeroStaticState();

      // =========================================================
      // Gallery Header WebGL Wave Effect
      // =========================================================
      gsap.ticker.add(() => {
        const heroRenderSleeping = isHeroRenderSleeping();
        setHeroSectionHidden(heroRenderSleeping);
        setHeroBlendHints(!heroRenderSleeping);
        if (webglManager) {
          if (heroRenderSleeping) webglManager.setRenderPaused(true);
          else {
            const isMobileNow = winW <= 768;
            if (!isMobileNow || (++_mobileWebglFrameToggle & 1)) {
              webglManager.render();
            }
          }
        }

        // 🎯 Lenis 已平滑一層,此處再 lerp 0.1 (原 0.06) 避免雙重平滑的「拖延感」
        //    lerp 0.1 = 約 10 幀完成過渡,動畫貼指又不抖
        currentScrollProgress += (targetScrollProgress - currentScrollProgress) * 0.1;
        if (currentScrollProgress < 0.0001) currentScrollProgress = 0;

        const isMobile = winW <= 768;

        // 🎯 當 progress 跟上一幀幾乎相同且已經趨近目標時,完全跳過動畫管線
        //    這是最關鍵的效能修復:避免穩定狀態下仍持續刷新 20+ 個 gsap.set
        //    mobile scene 目前要靠同一條 ticker 維持 cube 可見，所以這裡保留 mobile 更新
        const progressDelta = Math.abs(currentScrollProgress - _lastAppliedProgress);
        const targetDelta = Math.abs(targetScrollProgress - currentScrollProgress);
        if (!isMobile && progressDelta < 0.0001 && targetDelta < 0.0001) {
          return;
        }
        _lastAppliedProgress = currentScrollProgress;

        let progress = currentScrollProgress;
        if (progress > 0.035 || targetScrollProgress > 0.035) activateScrollMediaOnce();

        const p_Reveal = 0.12;
        const p_TextIn = 0.24;
        const p_TextOut = 0.44;
        const p_Tumble = 0.60;
        const p_Spin = 0.78;
        const p_PreExit = p_Spin - 0.06;
        const p_Zoom = 1.00;
        document.documentElement.classList.remove('is-dark-wrapper-mobile-intro');

        if (isMobile) {
          applyMobileHeroStaticState();
          baseRotY += 0.25;
          if (cube) {
            cube.style.transform = `rotateX(-12deg) rotateY(${baseRotY}deg)`;
          }
          window._marqueeRAFActive = false;
          return;
        }

        // 🎯 marquee rAF 只在 title 出現期間（p_TextOut → p_Spin + buffer）執行
        //    zoom 階段完全暫停，消除 GPU 競爭造成的卡頓
        window._marqueeRAFActive = (progress > p_TextOut && progress < p_Zoom);
        if (window._marqueeRAFActive && typeof window._requestMarqueeRAF === 'function') {
          window._requestMarqueeRAF();
        }

        let pr_Reveal = Math.max(0, Math.min(progress / p_Reveal, 1));
        let easeReveal = easeInOutCubic(pr_Reveal);

        if (progress <= p_Reveal) {
          baseRotY += 0.4;
        }
        let targetY_Phase1 = Math.ceil(baseRotY / 360) * 360 + 360;

        let currentTop = isMobile ? 40 : 50;
        let baseSceneSize = isMobile ? 173 : 230;
        const cubeZoomScale = 0.9; //修改cubeZoomScale 可以微調整 zoom 後的場景大小，建議保持在 0.85 ~ 0.95 之間
        const zoomedSceneSize = Math.min(
          winW * (isMobile ? 0.78 : 0.44) * cubeZoomScale,
          winH * (isMobile ? 0.58 : 0.72) * cubeZoomScale
        );
        let currentSceneSize = baseSceneSize;

        setDarkWrapperReveal((1 - easeReveal) * 100);

        const uiEntrance = Math.max(0, Math.min((pr_Reveal - 0.60) / 0.40, 1));
        const uiEase = easeInOutCubic(uiEntrance);

        if (uiNav) gsap.set(uiNav, { opacity: uiEase, y: (1 - uiEase) * -25 });
        if (uiScroll) gsap.set(uiScroll, { opacity: uiEase * 0.7 });

        // 🎯 封印光暈：當透明度為 0 時直接拔除可視性，釋放 GPU
        if (uiGlow1) gsap.set(uiGlow1, { opacity: uiEase, scale: 0.4 + uiEase * 0.6, visibility: uiEase > 0 ? 'visible' : 'hidden' });
        if (uiGlow2) gsap.set(uiGlow2, { opacity: uiEase * 0.8, scale: 0.4 + uiEase * 0.6, visibility: uiEase > 0 ? 'visible' : 'hidden' });

        {
          const waveRp = progress <= p_Reveal
            ? Math.max(0, (pr_Reveal - 0.45) / 0.55)
            : 1.0;

          if (progress <= p_TextOut) {
            // 🎯 封印面板：不顯示時徹底隱藏
            gsap.set(introPanel, { opacity: waveRp > 0 ? 1 : 0, visibility: waveRp > 0 ? 'visible' : 'hidden' });

            if (waveRp > 0) {
              if (revealGL) revealGL.render(waveRp);
              const panelT = progress <= p_Reveal
                ? 0
                : (progress - p_Reveal) / (p_TextOut - p_Reveal);
              const ndIn = easeInOutCubic(Math.max(0, Math.min((waveRp - 0.30) / 0.65, 1)));
              const ndOut = easeInOutCubic(Math.max(0, (panelT - 0.84) / 0.16));
              const ndOpacity = Math.max(0, ndIn * (1 - ndOut));

              if (introTopHeader) gsap.set(introTopHeader, { opacity: ndOpacity });
              if (introTopTitle) gsap.set(introTopTitle, { yPercent: (1 - ndIn) * 110 });
              if (introBottomLetter) gsap.set(introBottomLetter, { opacity: ndOpacity });
              if (introBottomTitle) gsap.set(introBottomTitle, { yPercent: (1 - ndIn) * -110 });

              const outT = easeInOutCubic(Math.max(0, (panelT - 0.83) / 0.17));
              if (outT > 0) gsap.set(introPanel, { opacity: Math.max(0, 1 - outT) });

              _ipWave.update(panelT);
            }
          } else {
            // 完全重置並隱藏
            gsap.set(introPanel, { opacity: 0, visibility: 'hidden' });
            if (introTopHeader) gsap.set(introTopHeader, { opacity: 0 });
            if (introTopTitle) gsap.set(introTopTitle, { yPercent: 110 });
            if (introBottomLetter) gsap.set(introBottomLetter, { opacity: 0 });
            if (introBottomTitle) gsap.set(introBottomTitle, { yPercent: -110 });
          }
        }

        let currentScale = 0.0001;
        let currentX = -15;
        let currentY = baseRotY;

        if (progress > p_TextOut) {

          const revealTotal = p_PreExit - p_TextOut;
          const revealPr = Math.max(0, Math.min((progress - p_TextOut) / revealTotal, 1));

          // 🎯 取代字串串接，啟動 GSAP 高速變形
          gsap.set(titleSubtitle, { yPercent: (1 - easeInOutCubic(Math.max(0, Math.min(revealPr / 0.40, 1)))) * 130 });
          gsap.set(titleLine1, { yPercent: (1 - easeInOutCubic(Math.max(0, Math.min((revealPr - 0.08) / 0.42, 1)))) * 130 });
          gsap.set(titleLine2, { yPercent: (1 - easeInOutCubic(Math.max(0, Math.min((revealPr - 0.18) / 0.42, 1)))) * 130 });
          gsap.set(titleMarquee, { yPercent: (1 - easeInOutCubic(Math.max(0, Math.min((revealPr - 0.08) / 0.42, 1)))) * 130 });
          gsap.set(titleDesc, { yPercent: (1 - easeInOutCubic(Math.max(0, Math.min((revealPr - 0.32) / 0.42, 1)))) * 130 });

          gsap.set(newTextGroup, { opacity: 0 });
          gsap.set(newSubtitle, { yPercent: 130 });
          gsap.set(newLine1, { yPercent: 130 });
          gsap.set(newLine2, { yPercent: 130 });
          gsap.set(newDesc, { yPercent: 130 });

          if (progress <= p_Tumble) {
            let pr = (progress - p_TextOut) / (p_Tumble - p_TextOut);
            let ease = easeInOutCubic(pr);

            currentScale = 1.5 * ease;
            currentX = -15 * (1 - ease) + 360 * ease;
            currentY = baseRotY * (1 - ease) + targetY_Phase1 * ease;

            gsap.set(section2, { opacity: 1, pointerEvents: 'none', zIndex: 18 });
            gsap.set(imgOverlay, { opacity: 0 });
            gsap.set(faceFront, { boxShadow: 'inset 0 0 40px rgba(0,0,0,1)', border: '1px solid rgba(255,255,255,0.05)' });

          } else if (progress <= p_Spin) {
            let pr = (progress - p_Tumble) / (p_Spin - p_Tumble);
            let ease = easeInOutCubic(pr);

            currentScale = 1.5;
            currentX = 360;
            currentY = targetY_Phase1 + 360 * ease;

            gsap.set(section2, { opacity: 1, pointerEvents: 'none', zIndex: 18 });
            gsap.set(imgOverlay, { opacity: 0 });
            gsap.set(faceFront, { boxShadow: 'inset 0 0 40px rgba(0,0,0,1)', border: '1px solid rgba(255,255,255,0.05)' });

          } else {
            let pr = (progress - p_Spin) / (p_Zoom - p_Spin);
            let ease = easeInOutCubic(pr);

            const spinDisplaySize = baseSceneSize * 1.5;
            const targetSceneSize = zoomedSceneSize;
            currentSceneSize = spinDisplaySize + (targetSceneSize - spinDisplaySize) * ease;
            currentScale = 1;
            currentX = 360;
            currentY = targetY_Phase1 + 360;

            const titleExitPr = Math.max(0, Math.min(ease, 1));
            const titleExitEase = easeInOutCubic(titleExitPr);

            gsap.set(section2, { opacity: Math.max(0, 1 - titleExitEase), pointerEvents: 'none', zIndex: 18 });
            gsap.set(imgOverlay, { opacity: ease * 0 });
            gsap.set(faceFront, {
              boxShadow: `inset 0 0 ${40 * (1 - ease)}px rgba(0,0,0,1)`,
              border: `1px solid rgba(255,255,255,${0.05 * (1 - ease)})`
            });

            if (dwBlackOverlay) gsap.set(dwBlackOverlay, { opacity: ease });
            if (stmLogoEl) stmLogoEl.classList.remove('is-visible');

            gsap.set(titleDesc, { yPercent: -easeInOutCubic(Math.min(titleExitPr, 1)) * 130 });
            gsap.set(titleLine2, { yPercent: -easeInOutCubic(Math.max(0, Math.min((titleExitPr - 0.10) / 0.90, 1))) * 130 });
            gsap.set(titleLine1, { yPercent: -easeInOutCubic(Math.max(0, Math.min((titleExitPr - 0.20) / 0.80, 1))) * 130 });
            gsap.set(titleMarquee, { yPercent: -easeInOutCubic(Math.max(0, Math.min((titleExitPr - 0.10) / 0.90, 1))) * 130 });
            gsap.set(titleSubtitle, { yPercent: -easeInOutCubic(Math.max(0, Math.min((titleExitPr - 0.30) / 0.70, 1))) * 130 });

            gsap.set(newTextGroup, { opacity: titleExitPr > 0 ? 1 : 0 });
            const enterPr = Math.max(0, Math.min(titleExitPr / 0.70, 1));
            gsap.set(newSubtitle, { yPercent: (1 - easeInOutCubic(Math.min(enterPr / 0.60, 1))) * 130 });
            gsap.set(newLine1, { yPercent: (1 - easeInOutCubic(Math.max(0, Math.min((enterPr - 0.10) / 0.60, 1)))) * 130 });
            gsap.set(newLine2, { yPercent: (1 - easeInOutCubic(Math.max(0, Math.min((enterPr - 0.20) / 0.60, 1)))) * 130 });
            gsap.set(newDesc, { yPercent: (1 - easeInOutCubic(Math.max(0, Math.min((enterPr - 0.35) / 0.55, 1)))) * 130 });
          }

        } else if (progress > p_Zoom) {
          const targetSceneSize = zoomedSceneSize;
          currentSceneSize = targetSceneSize;
          currentScale = 1;
          currentX = 360;
          currentY = targetY_Phase1 + 360;

          gsap.set(section2, { opacity: 0, pointerEvents: 'none', zIndex: 18 });
          gsap.set(imgOverlay, { opacity: 0 });

          if (dwBlackOverlay) gsap.set(dwBlackOverlay, { opacity: 1 });
          if (stmLogoEl) stmLogoEl.classList.remove('is-visible');

          gsap.set(newTextGroup, { opacity: 1 });
          gsap.set([titleDesc, titleLine2, titleLine1, titleMarquee, titleSubtitle], { yPercent: -130 });
        } else {
          currentScale = 0.0001;

          gsap.set(section2, { opacity: 0, pointerEvents: 'none', zIndex: 22 });
          gsap.set(imgOverlay, { opacity: 0 });

          if (dwBlackOverlay) gsap.set(dwBlackOverlay, { opacity: 0 });
          if (stmLogoEl) stmLogoEl.classList.remove('is-visible');
          gsap.set(newTextGroup, { opacity: 0 });

          resetReveal();
        }

        gsap.set(scene, {
          '--scene-size': `${currentSceneSize}px`,
          '--scene-depth': `${currentSceneSize / 2}px`
        });

        gsap.set(cube, {
          rotationX: currentX,
          rotationY: currentY,
          rotationZ: 0
        });

        gsap.set(sceneWrapper, {
          xPercent: -50,
          yPercent: -50,
          scale: currentScale,
          top: `${currentTop}%`
        });

        if (stmLogoEl && progress <= p_TextOut) {
          stmLogoEl.classList.remove('is-visible');
        }
      });

      gsap.registerPlugin(ScrollTrigger);
      // Flip / ScrambleTextPlugin：桌機非同步載入，存在才註冊（手機不載入這兩個 library）
      if (typeof Flip !== 'undefined') gsap.registerPlugin(Flip);
      if (typeof ScrambleTextPlugin !== 'undefined') gsap.registerPlugin(ScrambleTextPlugin);

      // 🎯 ScrollTrigger 全域效能設定:
      //   - limitCallbacks: 限制 callback 頻率,避免快速滑動時 CPU 爆炸
      //   - ignoreMobileResize: 行動裝置 URL bar 收合不觸發重算
      ScrollTrigger.config({
        limitCallbacks: true,
        ignoreMobileResize: true,
      });

      // 🎯 延遲非關鍵動畫初始化，讓主執行緒優先完成 paint
      var _ric = typeof requestIdleCallback === 'function' ? requestIdleCallback : function (cb) { setTimeout(cb, 200); };

      function runWhenNear(target, callback, rootMargin = '1600px 0px') {
        let didRun = false;
        const run = () => {
          if (didRun) return;
          didRun = true;
          callback();
        };

        if (!target || !('IntersectionObserver' in window)) {
          _ric(run);
          return;
        }

        const observer = new IntersectionObserver((entries) => {
          if (!entries.some(entry => entry.isIntersecting)) return;
          observer.disconnect();
          _ric(run);
        }, { rootMargin });
        observer.observe(target);
      }

      runWhenNear(document.getElementById('stm-section'), function () {
        if (isMobileInit) return; // 手機版 stm-section display:none，跳過全部初始化
        _ric(function () {
          (function initSTM() {
            const stmSection = document.getElementById('stm-section');
            if (!stmSection) return;
            // 非同步載入的 plugin 此時應已到位；若還沒則補充註冊
            if (typeof Flip !== 'undefined') gsap.registerPlugin(Flip);
            if (typeof ScrambleTextPlugin !== 'undefined') gsap.registerPlugin(ScrambleTextPlugin);
            const stmLogo = document.getElementById('stmLogo');
            const stmEls = stmSection.querySelectorAll('.stm-el');

            stmEls.forEach(el => { el.dataset.text = el.textContent; });

            const scrambleChars = 'upperAndLowerCase';
            function stmScramble(el) {
              const text = el.dataset.text ?? el.textContent;
              const dur = el.dataset.stmScramble !== undefined ? parseFloat(el.dataset.stmScramble) : 1;
              gsap.killTweensOf(el);
              gsap.fromTo(el,
                { scrambleText: { text: '', chars: '' } },
                { scrambleText: { text, chars: scrambleChars, revealDelay: 0 }, duration: dur }
              );
            }

            stmEls.forEach(el => {
              ScrollTrigger.create({
                id: 'stm-scramble',
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                onEnter: () => stmScramble(el),
                onEnterBack: () => stmScramble(el),
              });
            });

            stmEls.forEach(el => {
              const originalClass = [...el.classList].find(c => c.startsWith('stm-pos-'));
              const targetClass = el.dataset.stmAlt;
              if (!originalClass || !targetClass) return;
              const flipEase = el.dataset.stmFlipEase || 'expo.inOut';

              el.classList.add(targetClass);
              el.classList.remove(originalClass);
              const flipState = Flip.getState(el, { props: 'opacity, filter, width' });
              el.classList.add(originalClass);
              el.classList.remove(targetClass);

              Flip.to(flipState, {
                ease: flipEase,
                scrollTrigger: { trigger: el, start: 'clamp(bottom bottom-=10%)', end: 'clamp(center center)', scrub: true }
              });
              Flip.from(flipState, {
                ease: flipEase,
                scrollTrigger: { trigger: el, start: 'clamp(center center)', end: 'clamp(top top)', scrub: true }
              });
            });
          })();
        });
      }, '2200px 0px'); // end lazy initSTM

      runWhenNear(document.querySelector('.gallery-header'), function () {
        _ric(function () {
          (function initMaskedReveal() {
            document.querySelectorAll('[data-reveal]').forEach(function (el) {
              var type = el.dataset.reveal || 'line';
              var delay = parseFloat(el.dataset.revealDelay || 0);
              var stagger = parseFloat(el.dataset.revealStagger || 0.08);
              var alreadyPastStart = el.getBoundingClientRect().top <= window.innerHeight * 0.85;
              var targets = [];

              if (type === 'word' || type === 'line') {
                var text = el.innerText.trim();
                var words = text.split(/\s+/);
                el.innerHTML = '';
                words.forEach(function (w, i) {
                  var wrap = document.createElement('span');
                  wrap.style.cssText = 'display:inline-block;overflow:clip;vertical-align:bottom;';
                  var inner = document.createElement('span');
                  inner.style.cssText = 'display:inline-block;';
                  inner.textContent = w + (i < words.length - 1 ? '\u00A0' : '');
                  wrap.appendChild(inner);
                  el.appendChild(wrap);
                  targets.push(inner);
                });
              } else {
                if (alreadyPastStart) {
                  gsap.set(el, { autoAlpha: 1, y: 0 });
                  return;
                }

                gsap.set(el, { autoAlpha: 0, y: 28 });
                gsap.to(el, {
                  autoAlpha: 1, y: 0, duration: 1.1, ease: 'power3.out',
                  delay: delay,
                  scrollTrigger: { trigger: el, start: 'top 85%', once: true }
                });
                return;
              }

              if (alreadyPastStart) {
                gsap.set(targets, { yPercent: 0 });
                return;
              }

              gsap.set(targets, { yPercent: 130 });
              gsap.to(targets, {
                yPercent: 0,
                duration: 1.2,
                ease: 'power4.out',
                stagger: stagger,
                delay: delay,
                scrollTrigger: { trigger: el, start: 'top 85%', once: true }
              });
            });
          })();
        });
      }, '1800px 0px'); // end lazy initMaskedReveal

      runWhenNear(document.querySelector('.gallery-header'), function () {
        _ric(function () {
          (function initGalleryHeader() {
            const header = document.querySelector('.gallery-header');
            if (!header) return;
            const lastItem = document.querySelector('.pg-item-6') || document.querySelector('.pg-item-5');
            if (!lastItem) return;

            // ── 退場文字動畫 ──
            const textLastItem = document.querySelector('.pg-item-5') || lastItem;
            let wordSpans = header.querySelectorAll('.gh-line span span');
            if (!wordSpans.length) wordSpans = header.querySelectorAll('.gh-line');
            const label = header.querySelector('.gallery-header-label');
            const sub = header.querySelector('.gallery-header-sub');
            const sideRails = header.querySelectorAll('.gh-side-rail');
            const sideLines = header.querySelectorAll('.gh-side-line');
            const sideLetters = header.querySelectorAll('.gh-side-letter');

            const exitTl = gsap.timeline({
              scrollTrigger: {
                trigger: textLastItem,
                start: 'bottom 65%',
                end: 'bottom 5%',
                scrub: 1.2,
              }
            });

            if (wordSpans.length) {
              exitTl.to(wordSpans, { yPercent: -130, ease: 'power2.in', stagger: { each: 0.04, from: 'start' } }, 0);
            }
            if (label) exitTl.to(label, { autoAlpha: 0, y: -15, ease: 'power2.in' }, 0);
            if (sub) exitTl.to(sub, { autoAlpha: 0, y: -15, ease: 'power2.in' }, 0.05);
            if (sideLines.length) exitTl.to(sideLines, { scaleX: 0.35, opacity: 0, ease: 'power2.in' }, 0);
            if (sideLetters.length) exitTl.to(sideLetters, { autoAlpha: 0, ease: 'power2.in' }, 0);
            if (sideRails.length) {
              exitTl.to(sideRails[0], { x: 44, ease: 'power2.in' }, 0);
              exitTl.to(sideRails[1], { x: -44, ease: 'power2.in' }, 0);
            }
          })();
        });
      }, '1800px 0px'); // end lazy initGalleryHeader

      // ★ 延遲到 macro-task，確保 DXM pin spacer 已插入 + ScrollTrigger.refresh() 已執行
      //   才建立 pg-item ScrollTriggers，否則 pin 造成的位移會讓 trigger 位置算錯
      runWhenNear(document.querySelector('.pg-gallery') || document.querySelector('.gallery-header'), function () {
        setTimeout(function initPgItems() {
          // ★ 確認 GSAP 已就緒，才啟用「裁切→進場」機制（對應 CSS 的 html.pg-anim-ready）。
          //   若 gsap 不存在（LINE 等內建瀏覽器 CDN 失敗），直接放棄遮罩動畫，圖片維持可見。
          if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
          document.documentElement.classList.add('pg-anim-ready');

          // ── core-capabilities 垂直線條進場（必須在 refresh 後才能取得正確 trigger 位置）──
          const ccapSection = document.getElementById('core-capabilities');
          /* .gh-vline 元素已隨 DXM 區塊移除 */
          const headerEl = document.querySelector('.gallery-header');
          const sideRails = headerEl ? headerEl.querySelectorAll('.gh-side-rail') : [];
          const sideLines = headerEl ? headerEl.querySelectorAll('.gh-side-line') : [];
          const sideLetters = headerEl ? headerEl.querySelectorAll('.gh-side-letter') : [];



          if (sideRails.length) {
            gsap.set(sideRails[0], { x: 44, autoAlpha: 0 });
            gsap.set(sideRails[1], { x: -44, autoAlpha: 0 });
          }
          if (sideLines.length) gsap.set(sideLines, { scaleX: 0, opacity: 0.24 });
          if (sideLetters.length) gsap.set(sideLetters, { autoAlpha: 0 });

          if (sideRails.length || sideLines.length || sideLetters.length) {
            const headerRect = headerEl ? headerEl.getBoundingClientRect() : null;
            if (headerRect && headerRect.bottom < window.innerHeight * 0.5) {
              if (sideRails.length) gsap.set(sideRails, { x: 0, autoAlpha: 1 });
              if (sideLines.length) gsap.set(sideLines, { scaleX: 1, opacity: 1 });
              if (sideLetters.length) gsap.set(sideLetters, { autoAlpha: 1 });
            } else if (headerEl) {
              ScrollTrigger.create({
                trigger: headerEl,
                start: 'top center',
                once: true,
                onEnter: () => {
                  const headerIntroTl = gsap.timeline();
                  if (sideRails.length) {
                    headerIntroTl.to(sideRails[0], {
                      x: 0,
                      autoAlpha: 1,
                      duration: 1.05,
                      ease: 'power3.out'
                    }, 0.18);
                    headerIntroTl.to(sideRails[1], {
                      x: 0,
                      autoAlpha: 1,
                      duration: 1.05,
                      ease: 'power3.out'
                    }, 0.18);
                  }
                  if (sideLines.length) {
                    headerIntroTl.to(sideLines, {
                      scaleX: 1,
                      opacity: 1,
                      duration: 0.95,
                      ease: 'power3.out',
                      stagger: 0.06
                    }, 0.28);
                  }
                  if (sideLetters.length) {
                    headerIntroTl.to(sideLetters, {
                      autoAlpha: 1,
                      duration: 0.72,
                      ease: 'power2.out',
                      stagger: 0.05
                    }, 0.22);
                  }
                }
              });
            }
          }

          document.querySelectorAll('.pg-item').forEach((item, i) => {
            const wrap = item.querySelector('.pg-img-wrap');
            const media = item.querySelector('.pg-img-wrap img') || item.querySelector('.pg-img-wrap video');
            const isVideo = media && media.tagName === 'VIDEO';

            // 若元素已在 viewport 內（頁面首屏的 pg-item-1），直接給終態，不做遮罩動畫
            const rect = item.getBoundingClientRect();
            const alreadyVisible = rect.top < window.innerHeight * 0.9;

            if (wrap) gsap.set(wrap, { clipPath: alreadyVisible ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)' });
            if (media && !isVideo) gsap.set(media, { scale: alreadyVisible ? 0.9 : 1.3 });

            const enterTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
              }
            });

            if (wrap) {
              enterTl.to(wrap, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.7, ease: 'expo.out' }, 0);
            }
            if (media && !isVideo) {
              enterTl.to(media, { scale: 1.0, duration: 1.0, ease: 'power3.out' }, 0);
            }

            if (media && !isVideo) {
              const speed = [12, 18, 10, 20, 15, 22][i % 6];
              gsap.fromTo(media,
                { yPercent: -speed },
                {
                  yPercent: speed,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: item,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.2
                  }
                }
              );
              if (!isMobileInit) {
                item.addEventListener('mouseenter', () =>
                  gsap.to(media, { scale: 1.0, duration: 0.8, ease: 'power2.out', overwrite: 'auto' })
                );
                item.addEventListener('mouseleave', () =>
                  gsap.to(media, { scale: 1.0, duration: 1.2, ease: 'expo.out', overwrite: 'auto' })
                );
              }
            }
          });
          // 建完所有 pg-item triggers 後再做一次 refresh，確保位置精準
          if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();

          // ── 註：pg-item 高度以 vw 固定、圖片為 position:absolute 填滿，圖片載入不會
          //   改變版面，故不需在每張圖 load 後再 refresh（那會讓 scrub 視差瞬間 snap、跳一下）。

          // ★ LINE 等內建瀏覽器保險：逾時看門狗。若 ScrollTrigger 始終未把目前在
          //   視窗內的項目 reveal（仍維持 inset(100%) 完全裁切），就強制打開，避免空白。
          const pgRevealStuck = () => {
            document.querySelectorAll('.pg-gallery .pg-item').forEach((item) => {
              const wrap = item.querySelector('.pg-img-wrap');
              if (!wrap) return;
              const rect = item.getBoundingClientRect();
              const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
              const clipped = (getComputedStyle(wrap).clipPath || '').indexOf('100%') !== -1;
              if (inView && clipped) gsap.set(wrap, { clipPath: 'inset(0% 0% 0% 0%)' });
            });
          };
          setTimeout(pgRevealStuck, 1500);
          setTimeout(pgRevealStuck, 4000);
          window.addEventListener('load', () => setTimeout(pgRevealStuck, 600), { once: true });
        }, 0);
      }, '2200px 0px');

      // =========================================================
      // pg-item Hover Copy Effect (AWW-style float reveal)
      // =========================================================
      (function initPgHoverStories() {
        document.querySelectorAll('.pg-gallery .pg-item').forEach((item) => {
          item.classList.remove('pg-item--hover-story', 'is-hovered');
        });
        document.querySelectorAll('.pg-gallery .pg-hover-copy').forEach((overlay) => overlay.remove());
      })();

      const _prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const _useNativeTouchScroll = window.matchMedia('(hover: none), (pointer: coarse)').matches;

      // 🎯 無論是否使用 Lenis，都要在資源就緒後重新校準 ScrollTrigger
      window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => ScrollTrigger.refresh()).catch(() => { });
      }

      if (typeof Lenis !== 'undefined' && !_useNativeTouchScroll) {

        // 🎯 滾動絲滑核心配置：
        //   - 改用 lerp 模式（取代 duration 模式），消除起步遲鈍的「漂浮感」
        //   - lerp 0.09：每一幀靠近目標 9%，~12 幀完成輸入，貼指又不抖
        //   - wheelMultiplier 1.0：尊重使用者滾輪原始力道，不放大也不削弱
        //   - touchMultiplier 1.5：觸控比滾輪略保守，行動裝置避免衝過頭
        const lenis = new Lenis({
          lerp: _prefersReducedMotion ? 1 : 0.09,
          smoothWheel: !_prefersReducedMotion,
          wheelMultiplier: 1.0,
          touchMultiplier: 1.5,
          syncTouch: false,
          infinite: false,
          // 兼容舊版 Lenis 1.0.42 的二級 fallback（lerp 設了會優先生效）
          duration: 1.0,
          easing: t => 1 - Math.pow(1 - t, 3),
        });
        lenis.on('scroll', ScrollTrigger.update);
        lenis.on('scroll', scheduleSyncScrollState);

        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
        window._lenis = lenis;

        // 🎯 分頁切回前景時,Lenis 可能因背景時 rAF 暫停而留下殘餘速度,重置一次避免「進場閃移」
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible' && window._lenis) {
            // 立即同步到當前位置,清除 velocity
            window._lenis.scrollTo(window._lenis.scroll, { immediate: true, force: true });
          }
        });

        // 🎯 全站錨點連結 (href="#xxx") 統一走 Lenis,避免原生跳轉跟 Lenis 衝突造成卡頓
        document.addEventListener('click', (e) => {
          const a = e.target.closest('a[href^="#"]');
          if (!a) return;
          const href = a.getAttribute('href');
          if (!href || href === '#' || href.length < 2) return;
          const target = document.querySelector(href);
          if (!target) return;
          e.preventDefault();
          window._lenis.scrollTo(target, { duration: 1.4, offset: 0 });
        }, { passive: false });
      } else {
        window._lenis = null;
      }

      let currentVelocity = 0;
      const isMobileHomeNav = () => window.innerWidth <= 767;
      const isSimpleTouchNavMode = () => window.innerWidth <= 1024;

      // scroll > 300px → 隱藏 #nav，顯示 #nav_scroll
      let _showingScrollNav = false;
      const navScrollContainer = document.getElementById('nav_scroll_container');
      const navScrollEl = document.getElementById('nav_scroll');
      const navScrollMenuBtn = document.getElementById('nav-scroll-menu-btn');
      const navScrollDropdown = document.getElementById('nav-scroll-dropdown');
      const navScrollDropdownContent = document.getElementById('nav-scroll-dropdown-content');
      const navScrollDropdownItems = navScrollDropdown
        ? navScrollDropdown.querySelectorAll('.ns-dropdown__item, .ns-social-link')
        : [];
      const navScrollLinks = navScrollDropdown
        ? navScrollDropdown.querySelectorAll('a')
        : [];
      const navShowcaseRows = navScrollDropdown
        ? navScrollDropdown.querySelectorAll('.ns-showcase-row')
        : [];
      const navShowcaseThumbs = navScrollDropdown
        ? navScrollDropdown.querySelectorAll('.ns-showcase-row__thumb')
        : [];
      const navShowcaseThumbImages = navScrollDropdown
        ? navScrollDropdown.querySelectorAll('.ns-showcase-row__thumb img')
        : [];
      let isNavScrollMenuOpen = false;
      let navScrollMenuAnimating = false;
      let navScrollMenuTl = null;
      let navScrollMenuCloseTl = null;
      let navScrollHoverCloseTimer = null;
      let navScrollBlendFadeTimer = null;
      let activeNavShowcaseRow = null;
      const navRowHoverTimelines = new Map();
      const NAV_SCROLL_CLOSED_HEIGHT = 64;
      const NAV_SCROLL_COLLAPSED_HEIGHT = 4;
      const NAV_SCROLL_CLOSED_RADIUS = 6;
      const NAV_SCROLL_LINE_RADIUS = 999;
      const NAV_SCROLL_CLOSED_BG = '#141414';
      const NAV_SCROLL_OPEN_BG = '#efe6d8';
      const NAV_SCROLL_THUMB_IDLE_SCALE = 1.3;
      const NAV_SCROLL_TITLE_SHIFT = 104;
      const NAV_SCROLL_HOVER_TRACK_SHIFT = 26;
      const NAV_SCROLL_HOVER_INDEX_SHIFT = 9;

      function clearNavScrollBlend() {
        if (!navScrollContainer) return;
        if (navScrollBlendFadeTimer) {
          clearTimeout(navScrollBlendFadeTimer);
          navScrollBlendFadeTimer = null;
        }
        navScrollContainer.classList.remove('is-blend-fadeout');
      }

      function activateNavScrollBlend() {
        if (!navScrollContainer) return;
        clearNavScrollBlend();
      }

      function releaseNavScrollBlend() {
        if (!navScrollContainer) return;
        clearNavScrollBlend();
        navScrollContainer.classList.add('is-blend-fadeout');
        navScrollBlendFadeTimer = setTimeout(() => {
          navScrollContainer.classList.remove('is-blend-fadeout');
          navScrollBlendFadeTimer = null;
        }, 260);
      }

      function stopNavScrollCloseTimeline() {
        if (!navScrollMenuCloseTl) return;
        navScrollMenuCloseTl.kill();
        navScrollMenuCloseTl = null;
      }

      function syncNavScrollMenuCursorLabel() {
        if (!navScrollMenuBtn) return;
        const isMenuOpen = navScrollMenuBtn.getAttribute('aria-expanded') === 'true';
        const cursorLabel = isMenuOpen ? 'CLOSE' : 'OPEN';
        const cursorSide = isMenuOpen ? 'left' : 'right';
        navScrollMenuBtn.dataset.cursor = cursorLabel;
        navScrollMenuBtn.dataset.cursorSide = cursorSide;

        const cursorRing = document.getElementById('cursor-ring');
        if (cursorRing && navScrollMenuBtn.matches(':hover')) {
          cursorRing.setAttribute('data-cursor-label', cursorLabel);
          cursorRing.setAttribute('data-cursor-side', cursorSide);
        }
      }

      function finalizeNavScrollClosedState() {
        navScrollMenuAnimating = false;
        stopNavScrollCloseTimeline();
        navScrollContainer?.classList.remove('is-menu-open', 'is-menu-animating');
        navScrollDropdown.style.pointerEvents = 'none';
        navScrollMenuBtn?.setAttribute('aria-expanded', 'false');
        syncNavScrollMenuCursorLabel();
        navScrollDropdown.setAttribute('aria-hidden', 'true');
        setNavScrollShellState('closed');
        releaseNavScrollBlend();
        setNavScrollPointerState();
      }

      function getNavScrollClosedWidth() {
        const inset = window.innerWidth <= 767 ? 24 : 80;
        return Math.min(500, Math.max(280, window.innerWidth - inset));
      }

      function getNavScrollClosedTop() {
        return window.innerWidth <= 767 ? 16 : 30;
      }

      function getNavScrollCollapsedTop() {
        return getNavScrollClosedTop() + ((NAV_SCROLL_CLOSED_HEIGHT - NAV_SCROLL_COLLAPSED_HEIGHT) / 2);
      }

      function getNavScrollOpenWidth() {
        return window.innerWidth;
      }

      function getNavScrollOpenRadius() {
        return 0;
      }

      function getNavScrollOpenHeight() {
        return window.innerHeight;
      }

      function setActiveNavShowcaseRow(row = null) {
        if (isSimpleTouchNavMode()) {
          activeNavShowcaseRow = null;
          navShowcaseRows.forEach((item) => {
            item.classList.remove('is-previewed');
          });
          return;
        }
        activeNavShowcaseRow = row;
        navShowcaseRows.forEach((item) => {
          item.classList.toggle('is-previewed', item === row);
        });
      }

      function getNavShowcaseThumbHiddenClip(target) {
        return target.classList.contains('is-right')
          ? 'inset(0% 100% 0% 0%)'
          : 'inset(0% 0% 0% 100%)';
      }

      function getNavShowcaseThumbTargets(row = null) {
        const thumbs = row
          ? Array.from(row.querySelectorAll('.ns-showcase-row__thumb'))
          : Array.from(navShowcaseThumbs);
        const images = row
          ? thumbs.map((thumb) => thumb.querySelector('img')).filter(Boolean)
          : Array.from(navShowcaseThumbImages);
        return { thumbs, images };
      }

      function getNavShowcaseTitleTargets(row = null) {
        const track = row ? row.querySelector('.ns-showcase-row__title-track') : null;
        const primary = row ? row.querySelector('.ns-showcase-row__title-layer.is-primary') : null;
        const accent = row ? row.querySelector('.ns-showcase-row__title-layer.is-accent') : null;
        const indexEl = row ? row.querySelector('.ns-showcase-row__index') : null;
        return { track, primary, accent, indexEl };
      }

      function hydrateNavShowcaseImages(scope = navScrollDropdown) {
        if (!scope) return;
        scope.querySelectorAll('img[data-nav-src]').forEach((img) => {
          img.src = img.dataset.navSrc;
          img.removeAttribute('data-nav-src');
        });
      }

      function setNavShowcaseThumbsHidden(row = null) {
        if (typeof gsap === 'undefined') return;
        const { thumbs, images } = getNavShowcaseThumbTargets(row);
        if (!thumbs.length) return;
        gsap.set(thumbs, {
          autoAlpha: 0,
          clipPath: (_, target) => getNavShowcaseThumbHiddenClip(target)
        });
        if (images.length) gsap.set(images, { scale: NAV_SCROLL_THUMB_IDLE_SCALE });
      }

      function resetNavShowcaseHoverState(row = null) {
        if (!row) {
          navShowcaseRows.forEach((item) => resetNavShowcaseHoverState(item));
          setActiveNavShowcaseRow(null);
          return;
        }

        const timeline = navRowHoverTimelines.get(row);
        if (timeline) {
          timeline.pause(0);
        } else {
          setNavShowcaseThumbsHidden(row);
        }

        const { track, primary, accent, indexEl } = getNavShowcaseTitleTargets(row);
        if (typeof gsap !== 'undefined') {
          if (track) gsap.set(track, { x: 0 });
          if (primary) gsap.set(primary, { yPercent: 0 });
          if (accent) gsap.set(accent, { yPercent: NAV_SCROLL_TITLE_SHIFT });
          if (indexEl) gsap.set(indexEl, { x: 0, color: '' });
          gsap.set(row, { clearProps: 'backgroundColor' });
        }
      }

      function initNavShowcaseHoverTimelines() {
        if (typeof gsap === 'undefined') return;

        navShowcaseRows.forEach((row) => {
          if (navRowHoverTimelines.has(row)) return;

          const { thumbs, images } = getNavShowcaseThumbTargets(row);
          const { track, primary, accent, indexEl } = getNavShowcaseTitleTargets(row);

          if (!thumbs.length || !track || !primary || !accent) return;

          gsap.set(thumbs, {
            autoAlpha: 0,
            clipPath: (_, target) => getNavShowcaseThumbHiddenClip(target)
          });
          if (images.length) gsap.set(images, { scale: NAV_SCROLL_THUMB_IDLE_SCALE });
          gsap.set(track, { x: 0 });
          gsap.set(primary, { yPercent: 0 });
          gsap.set(accent, { yPercent: NAV_SCROLL_TITLE_SHIFT });
          if (indexEl) gsap.set(indexEl, { x: 0 });

          const tl = gsap.timeline({
            paused: true,
            defaults: { overwrite: 'auto' },
            onStart: () => {
              setActiveNavShowcaseRow(row);
            },
            onReverseComplete: () => {
              if (activeNavShowcaseRow === row) {
                setActiveNavShowcaseRow(null);
              }
            }
          });

          tl.to(thumbs, {
            autoAlpha: 1,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 0.42,
            ease: 'expo.out',
            stagger: 0.025
          }, 0);
          if (images.length) {
            tl.to(images, {
              scale: 1,
              duration: 0.46,
              ease: 'expo.out',
              stagger: 0.025
            }, 0.02);
          }
          tl.to(primary, {
            yPercent: -NAV_SCROLL_TITLE_SHIFT,
            duration: 0.46,
            ease: 'expo.out'
          }, 0.02)
            .to(accent, {
              yPercent: 0,
              duration: 0.46,
              ease: 'expo.out'
            }, 0.02);

          if (indexEl) {
            tl.to(indexEl, {
              color: 'rgba(23, 20, 17, 0.55)',
              duration: 0.38,
              ease: 'expo.out'
            }, 0.04);
          }

          navRowHoverTimelines.set(row, tl);
        });
      }

      function hideNavScrollPreview(row = activeNavShowcaseRow, immediate = false) {
        if (typeof gsap === 'undefined') return;
        if (navScrollHoverCloseTimer) {
          clearTimeout(navScrollHoverCloseTimer);
          navScrollHoverCloseTimer = null;
        }

        if (isSimpleTouchNavMode()) {
          resetNavShowcaseHoverState(row || null);
          return;
        }

        if (!row) {
          resetNavShowcaseHoverState();
          return;
        }

        const timeline = navRowHoverTimelines.get(row);
        if (!timeline) {
          resetNavShowcaseHoverState(row);
          return;
        }

        if (immediate || isSimpleTouchNavMode()) {
          resetNavShowcaseHoverState(row);
        } else {
          timeline.timeScale(1.8).reverse();
        }
      }

      function showNavScrollPreview(row) {
        if (!row || typeof gsap === 'undefined') return;
        if (isSimpleTouchNavMode() || !isNavScrollMenuOpen) return;
        hydrateNavShowcaseImages(row);

        if (navScrollHoverCloseTimer) {
          clearTimeout(navScrollHoverCloseTimer);
          navScrollHoverCloseTimer = null;
        }

        if (activeNavShowcaseRow && activeNavShowcaseRow !== row) {
          const previousTimeline = navRowHoverTimelines.get(activeNavShowcaseRow);
          previousTimeline?.timeScale(1.6).reverse();
        }

        setActiveNavShowcaseRow(row);
        const timeline = navRowHoverTimelines.get(row);
        if (!timeline) return;
        timeline.timeScale(1).play();
      }

      function scheduleHideNavScrollPreview(row = activeNavShowcaseRow) {
        if (navScrollHoverCloseTimer) clearTimeout(navScrollHoverCloseTimer);
        navScrollHoverCloseTimer = setTimeout(() => {
          hideNavScrollPreview(row);
          navScrollHoverCloseTimer = null;
        }, 110);
      }

      function setNavScrollShellState(state = 'closed') {
        if (!navScrollContainer || !navScrollDropdown || typeof gsap === 'undefined') return;

        if (state === 'open') {
          gsap.set(navScrollContainer, {
            top: 0,
            width: getNavScrollOpenWidth(),
            height: getNavScrollOpenHeight(),
            borderRadius: getNavScrollOpenRadius(),
            backgroundColor: NAV_SCROLL_OPEN_BG
          });
          gsap.set(navScrollDropdown, { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)', filter: 'blur(0px)' });
          if (navScrollDropdownItems.length) gsap.set(navScrollDropdownItems, { y: 0, opacity: 1, filter: 'blur(0px)' });
          return;
        }

        gsap.set(navScrollContainer, {
          top: getNavScrollClosedTop(),
          width: getNavScrollClosedWidth(),
          height: NAV_SCROLL_CLOSED_HEIGHT,
          borderRadius: NAV_SCROLL_CLOSED_RADIUS,
          backgroundColor: NAV_SCROLL_CLOSED_BG
        });
        gsap.set(navScrollDropdown, { opacity: 0, y: 24, clipPath: 'inset(6% 0% 0% 0%)', filter: 'blur(12px)' });
        if (navScrollDropdownItems.length) gsap.set(navScrollDropdownItems, { y: 34, opacity: 0, filter: 'blur(14px)' });
        resetNavShowcaseHoverState();
      }

      function setNavScrollPointerState() {
        if (!navScrollContainer) return;
        const isInteractive = isMobileHomeNav() || _showingScrollNav || isNavScrollMenuOpen;
        navScrollContainer.style.pointerEvents = isInteractive ? 'auto' : 'none';
        if (isInteractive) {
          navScrollContainer.removeAttribute('inert');
        } else {
          if (navScrollContainer.contains(document.activeElement)) {
            document.activeElement?.blur?.();
          }
          navScrollContainer.setAttribute('inert', '');
        }
      }

      function initNavScrollMenu() {
        if (!navScrollContainer || !navScrollDropdown || !navScrollDropdownContent || typeof gsap === 'undefined') return;

        setNavScrollShellState('closed');
        syncNavScrollMenuCursorLabel();
        initNavShowcaseHoverTimelines();
        resetNavShowcaseHoverState();
        stopNavScrollCloseTimeline();

        if (isMobileHomeNav()) {
          _showingScrollNav = true;
          document.documentElement.classList.add('show-nav-scroll');
          navScrollContainer.classList.remove('ns-enter', 'ns-exit');
          setNavScrollPointerState();
        }

        navScrollMenuTl = gsap.timeline({
          paused: true,
          defaults: { ease: 'expo.inOut' },
          onStart: () => {
            stopNavScrollCloseTimeline();
            navScrollMenuAnimating = true;
            navScrollDropdown.style.pointerEvents = 'auto';
            navScrollContainer?.classList.add('is-menu-open', 'is-menu-animating');
            activateNavScrollBlend();
            navScrollMenuBtn?.setAttribute('aria-expanded', 'true');
            syncNavScrollMenuCursorLabel();
            navScrollDropdown.setAttribute('aria-hidden', 'false');
            setNavScrollPointerState();
          },
          onComplete: () => {
            navScrollMenuAnimating = false;
            navScrollContainer?.classList.remove('is-menu-animating');
          },
          onReverseComplete: () => {
            finalizeNavScrollClosedState();
          }
        });

        navScrollMenuTl
          .to(navScrollContainer, {
            top: () => getNavScrollCollapsedTop(),
            height: NAV_SCROLL_COLLAPSED_HEIGHT,
            borderRadius: NAV_SCROLL_LINE_RADIUS,
            duration: 0.2,
            ease: 'power3.inOut'
          }, 0)
          .to(navScrollContainer, {
            width: () => getNavScrollOpenWidth(),
            duration: 0.25,
            ease: 'power3.inOut'
          }, 0.1)
          .to(navScrollContainer, {
            top: 0,
            height: () => getNavScrollOpenHeight(),
            borderRadius: () => getNavScrollOpenRadius(),
            backgroundColor: NAV_SCROLL_OPEN_BG,
            duration: 0.35,
            ease: 'power3.inOut'
          }, 0.3)
          .to(navScrollDropdown, {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0% 0% 0% 0%)',
            filter: 'blur(0px)',
            duration: 0.3,
            ease: 'power2.out'
          }, 0.35)
          .to(navScrollDropdownItems, {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.35,
            stagger: 0.02,
            ease: 'power2.out'
          }, 0.4);
      }

      function openNavScrollMenu() {
        if (!navScrollMenuTl || isNavScrollMenuOpen || navScrollMenuAnimating) return;
        stopNavScrollCloseTimeline();
        hydrateNavShowcaseImages();
        isNavScrollMenuOpen = true;
        navScrollMenuAnimating = true;
        navScrollMenuTl.timeScale(1);
        navScrollMenuTl.play(0);
      }

      function closeNavScrollMenu(options = {}) {
        const menuClassOpen = navScrollContainer?.classList.contains('is-menu-open');
        if (!navScrollMenuTl || (!isNavScrollMenuOpen && !navScrollMenuAnimating && !menuClassOpen)) return;
        const immediate = options.immediate === true;
        const onAfterClose = typeof options.onAfterClose === 'function' ? options.onAfterClose : null;
        isNavScrollMenuOpen = false;
        navScrollMenuAnimating = true;
        hideNavScrollPreview(activeNavShowcaseRow, true);
        if (immediate) {
          stopNavScrollCloseTimeline();
          navScrollMenuTl.pause(0);
          finalizeNavScrollClosedState();
          if (onAfterClose) onAfterClose();
          return;
        }
        hideNavScrollPreview(activeNavShowcaseRow, true);
        // 立刻移除 is-menu-open，讓漢堡 CSS 快速還原
        stopNavScrollCloseTimeline();
        navScrollMenuTl.pause();
        navScrollDropdown.style.pointerEvents = 'none';
        navScrollContainer?.classList.add('is-menu-animating');

        navScrollMenuCloseTl = gsap.timeline({
          defaults: { overwrite: 'auto' },
          onComplete: () => {
            finalizeNavScrollClosedState();
            if (onAfterClose) onAfterClose();
          }
        });

        navScrollMenuCloseTl
          .to(navScrollDropdown, {
            opacity: 0,
            y: 10,
            clipPath: 'inset(2% 0% 0% 0%)',
            filter: 'blur(4px)',
            duration: 0.18,
            ease: 'power2.in'
          }, 0)
          .to(navScrollContainer, {
            top: () => getNavScrollCollapsedTop(),
            height: NAV_SCROLL_COLLAPSED_HEIGHT,
            borderRadius: NAV_SCROLL_LINE_RADIUS,
            duration: 0.2,
            ease: 'power3.inOut'
          }, 0.05)
          .to(navScrollContainer, {
            width: () => getNavScrollClosedWidth(),
            duration: 0.25,
            ease: 'power3.inOut'
          }, 0.2)
          .add(() => {
            navScrollContainer?.classList.remove('is-menu-open');
          }, 0.45)
          .to(navScrollContainer, {
            top: () => getNavScrollClosedTop(),
            height: NAV_SCROLL_CLOSED_HEIGHT,
            borderRadius: NAV_SCROLL_CLOSED_RADIUS,
            backgroundColor: NAV_SCROLL_CLOSED_BG,
            duration: 0.25,
            ease: 'power3.out'
          }, 0.45);
      }

      function syncNavScrollMenuLayout() {
        if (!navScrollContainer || typeof gsap === 'undefined') return;
        if (isNavScrollMenuOpen) {
          setNavScrollShellState('open');
          return;
        }
        if (!navScrollMenuAnimating) {
          setNavScrollShellState('closed');
        }
      }

      initNavScrollMenu();

      // hover auto-open removed — menu opens only on hamburger click

      navScrollMenuBtn?.addEventListener('click', (event) => {
        event.stopPropagation();
        if (!_showingScrollNav || navScrollMenuAnimating) return;
        if (isNavScrollMenuOpen) closeNavScrollMenu();
        else openNavScrollMenu();
      });

      navScrollLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
          const menuClassOpen = navScrollContainer?.classList.contains('is-menu-open');
          if (!isNavScrollMenuOpen && !navScrollMenuAnimating && !menuClassOpen) return;
          e.preventDefault();
          e.stopPropagation();
          const href = link.getAttribute('href');
          const label = link.dataset.transitionLabel || '';
          document.documentElement.classList.add('is-menu-link-transition');
          closeNavScrollMenu({
            onAfterClose: () => {
              document.documentElement.classList.remove('is-menu-link-transition');
              if (!href) return;
              const dest = new URL(href, window.location.href);
              const isSamePage = isSameOriginSamePath(dest);
              if (isSamePage && dest.hash) {
                const target = document.querySelector(dest.hash);
                if (target) {
                  if (window._lenis && typeof window._lenis.scrollTo === 'function') {
                    window._lenis.scrollTo(target, { duration: 1.15, offset: -24 });
                  } else {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }
              } else if (window._nudotNavigate) {
                window._nudotNavigate(dest.href, label);
              } else {
                window.location.href = dest.href;
              }
            }
          });
        });
      });

      function isSameOriginSamePath(url) {
        if (url.origin !== window.location.origin) return false;
        const normalize = (p) => p.replace(/\/index\.html$/i, '/').replace(/\/$/, '') || '/';
        return normalize(url.pathname) === normalize(window.location.pathname);
      }

      navShowcaseRows.forEach((row) => {
        row.addEventListener('pointerenter', () => {
          showNavScrollPreview(row);
        });
        row.addEventListener('focus', () => {
          showNavScrollPreview(row);
        });
        row.addEventListener('pointerleave', () => {
          scheduleHideNavScrollPreview(row);
        });
        row.addEventListener('blur', () => {
          scheduleHideNavScrollPreview(row);
        });
      });

      navScrollDropdown?.addEventListener('pointerenter', () => {
        if (navScrollHoverCloseTimer) {
          clearTimeout(navScrollHoverCloseTimer);
          navScrollHoverCloseTimer = null;
        }
      });

      navScrollDropdown?.addEventListener('pointerleave', () => {
        hideNavScrollPreview();
      });

      document.addEventListener('click', (event) => {
        if (!isNavScrollMenuOpen || !navScrollContainer) return;
        if (!navScrollContainer.contains(event.target)) {
          closeNavScrollMenu();
        }
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeNavScrollMenu();
      });

      window.addEventListener('resize', () => {
        syncNavScrollMenuLayout();
        if (isSimpleTouchNavMode()) {
          hideNavScrollPreview(null, true);
        } else if (activeNavShowcaseRow && isNavScrollMenuOpen) {
          showNavScrollPreview(activeNavShowcaseRow);
        }
      }, { passive: true });

      let navScrollAnimRaf = 0;
      function scheduleNavScrollState(nextClass) {
        if (!navScrollContainer) return;
        if (isMobileHomeNav()) {
          if (navScrollAnimRaf) cancelAnimationFrame(navScrollAnimRaf);
          navScrollAnimRaf = 0;
          navScrollContainer.classList.remove('ns-enter', 'ns-exit');
          return;
        }
        if (navScrollAnimRaf) cancelAnimationFrame(navScrollAnimRaf);
        navScrollContainer.classList.remove('ns-enter', 'ns-exit');
        navScrollAnimRaf = requestAnimationFrame(() => {
          navScrollAnimRaf = 0;
          navScrollContainer.classList.add(nextClass);
        });
      }

      function triggerNavScrollEnter() {
        if (!navScrollContainer) return;
        if (isMobileHomeNav()) {
          navScrollContainer.classList.remove('ns-enter', 'ns-exit');
          setNavScrollShellState('closed');
          setNavScrollPointerState();
          return;
        }
        clearNavScrollBlend();
        setNavScrollShellState('closed');
        scheduleNavScrollState('ns-enter');
        setNavScrollPointerState();
      }
      function triggerNavScrollExit() {
        if (!navScrollContainer) return;
        if (isMobileHomeNav()) {
          navScrollContainer.classList.remove('ns-enter', 'ns-exit');
          setNavScrollShellState('closed');
          setNavScrollPointerState();
          return;
        }
        closeNavScrollMenu({ immediate: true });
        scheduleNavScrollState('ns-exit');
        setNavScrollPointerState();
      }

      const syncNavScrollFromPosition = (scroll, velocity = 0) => {
        currentVelocity = velocity;
        if (isMobileHomeNav()) {
          if (!_showingScrollNav) {
            _showingScrollNav = true;
            document.documentElement.classList.add('show-nav-scroll');
            navScrollContainer?.classList.remove('ns-enter', 'ns-exit');
            setNavScrollShellState('closed');
          }
          setNavScrollPointerState();
          return;
        }
        const shouldSwitch = scroll > 300;
        if (shouldSwitch !== _showingScrollNav) {
          _showingScrollNav = shouldSwitch;
          document.documentElement.classList.toggle('show-nav-scroll', _showingScrollNav);
          if (_showingScrollNav) triggerNavScrollEnter();
          else triggerNavScrollExit();
        }
      };

      if (window._lenis && typeof window._lenis.on === 'function') {
        window._lenis.on('scroll', ({ velocity, scroll }) => {
          syncNavScrollFromPosition(scroll, velocity);
        });
      } else {
        window.addEventListener('scroll', () => {
          syncNavScrollFromPosition(window.scrollY || window.pageYOffset || 0, 0);
        }, { passive: true });
        syncNavScrollFromPosition(window.scrollY || window.pageYOffset || 0, 0);
      }

      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        let currentWidth = 0;
        let targetWidth = 0;
        let progressRaf = 0;
        let _lastWrittenWidth = -1; // 🎯 避免每幀都寫入 style
        let _progressMax = 1;
        let _progressMaxRaf = 0;

        function updateProgressMax() {
          _progressMax = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
          updateProgressTarget();
        }

        function requestProgressTick() {
          if (!progressRaf) progressRaf = requestAnimationFrame(progressTick);
        }

        function updateProgressTarget() {
          const scrollY = window._lenis ? window._lenis.scroll : window.scrollY;
          targetWidth = _progressMax > 0 ? (scrollY / _progressMax) * 100 : 0;
          requestProgressTick();
        }

        function progressTick() {
          progressRaf = 0;
          currentWidth += (targetWidth - currentWidth) * 0.12;
          if (Math.abs(currentWidth - _lastWrittenWidth) > 0.05) {
            progressBar.style.transform = 'scaleX(' + (currentWidth / 100) + ')';
            _lastWrittenWidth = currentWidth;
          }
          if (Math.abs(targetWidth - currentWidth) > 0.05) requestProgressTick();
        }

        function scheduleProgressMaxUpdate() {
          if (_progressMaxRaf) return;
          _progressMaxRaf = requestAnimationFrame(() => {
            _progressMaxRaf = 0;
            updateProgressMax();
          });
        }

        updateProgressMax();
        window.addEventListener('load', scheduleProgressMaxUpdate, { once: true });
        window.addEventListener('resize', scheduleProgressMaxUpdate, { passive: true });
        window.addEventListener('scroll', updateProgressTarget, { passive: true });
        if (window._lenis) window._lenis.on('scroll', updateProgressTarget);
        if ('ResizeObserver' in window && document.body) {
          new ResizeObserver(scheduleProgressMaxUpdate).observe(document.body);
        }
      }

      /* footer-time 元素已從版面移除，原 initFooterClock 時鐘 JS 一併清除 */

      runWhenNear(document.getElementById('site-footer'), function () {
        _ric(function () {
          (function initFooterReveal() {
            const footer = document.getElementById('site-footer');
            if (!footer) return;

            const infoBar    = footer.querySelector('.footer-info-bar');
            const description = footer.querySelector('.footer-description');
            const contactInfo = footer.querySelector('.footer-contact-info');
            const webAdd     = footer.querySelector('.web_add');
            const navLinks   = footer.querySelector('.footer-nav-links');
            const thumb      = footer.querySelector('.footer-video-thumb');
            const cBridge    = document.getElementById('footer-c-bridge');
            const parallaxBg = document.getElementById('footer-parallax-bg');

            if (parallaxBg && parallaxBg.dataset.bg) {
              parallaxBg.style.setProperty('--footer-bg-image', `url("${parallaxBg.dataset.bg}")`);
            }

            // ── 1. Animated border line (replaces CSS border-top on infoBar)
            let infoLine = null;
            if (infoBar) {
              infoLine = document.createElement('div');
              infoLine.className = 'footer-info-line';
              infoBar.parentNode.insertBefore(infoLine, infoBar);
              infoBar.style.borderTop = 'none';
              gsap.set(infoLine, { scaleX: 0 });
            }

            // ── 2. Wrap info-bar spans for y-clip reveal
            const rawSpans = infoBar ? [...infoBar.querySelectorAll('span')] : [];
            const spanInners = rawSpans.map(span => {
              const wrap = document.createElement('span');
              wrap.className = 'frev-wrap';
              const inner = document.createElement('span');
              inner.style.display = 'inline-block';
              inner.textContent = span.textContent;
              span.textContent = '';
              wrap.appendChild(inner);
              span.appendChild(wrap);
              return inner;
            });
            if (spanInners.length) gsap.set(spanInners, { y: '110%' });

            // ── 3. Wrap nav links for y-clip reveal
            const navAnchors = navLinks ? [...navLinks.querySelectorAll('a')] : [];
            navAnchors.forEach(a => {
              const wrap = document.createElement('span');
              wrap.className = 'frev-wrap';
              a.parentNode.insertBefore(wrap, a);
              wrap.appendChild(a);
            });
            if (navAnchors.length) gsap.set(navAnchors, { y: '120%' });

            // ── 4. Wrap email / phone individually for y reveal
            const contactEmail = contactInfo ? contactInfo.querySelector('a') : null;
            const contactPhone = contactInfo ? contactInfo.querySelector('span') : null;
            if (contactEmail) {
              const ew = document.createElement('div');
              ew.style.overflow = 'hidden';
              contactEmail.parentNode.insertBefore(ew, contactEmail);
              ew.appendChild(contactEmail);
              gsap.set(contactEmail, { y: '105%' });
            }
            if (contactPhone) {
              const pw = document.createElement('div');
              pw.style.cssText = 'overflow:hidden;display:block;';
              contactPhone.parentNode.insertBefore(pw, contactPhone);
              pw.appendChild(contactPhone);
              gsap.set(contactPhone, { display: 'inline-block', y: '105%' });
            }

            // ── 5. Video cover overlay (wipe reveal)
            let videoCover = null;
            if (thumb) {
              videoCover = document.createElement('div');
              videoCover.className = 'footer-video-cover';
              thumb.appendChild(videoCover);
            }

            // ── Entry timeline
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: footer,
                start: 'top 82%',
              }
            });

            // Border line: scaleX wipe left→right
            if (infoLine) {
              tl.to(infoLine, {
                scaleX: 1, duration: 1.1, ease: 'power3.inOut'
              }, 0);
            }

            // Info-bar spans: stagger slide up from clip
            if (spanInners.length) {
              tl.to(spanInners, {
                y: '0%', duration: 1.0, stagger: 0.1, ease: 'power4.out'
              }, 0.2);
            }

            // Description: clipPath reveal upward
            if (description) {
              tl.fromTo(description,
                { clipPath: 'inset(0 0 100% 0)', y: 20 },
                { clipPath: 'inset(0 0 0% 0)', y: 0, duration: 1.1, ease: 'power4.out' },
                0.5
              );
            }

            // Email: slide up from overflow wrap
            if (contactEmail) {
              tl.to(contactEmail, {
                y: '0%', duration: 1.2, ease: 'power4.out'
              }, 0.68);
            }

            // Phone: clip reveal
            if (contactPhone) {
              tl.to(contactPhone, {
                y: '0%', duration: 0.9, ease: 'power3.out'
              }, 0.85);
            }

            // Address
            if (webAdd) {
              tl.from(webAdd, {
                y: 14, opacity: 0, duration: 0.8, ease: 'power3.out'
              }, 0.95);
            }

            // Nav links: stagger slide up
            if (navAnchors.length) {
              tl.to(navAnchors, {
                y: '0%', duration: 0.85, stagger: 0.07, ease: 'power4.out'
              }, 1.05);
            }

            // Video cover: wipe right→left (sweep away) — faster entrance
            if (videoCover) {
              tl.fromTo(videoCover,
                { scaleX: 1 },
                { scaleX: 0, duration: 0.85, ease: 'power4.inOut', transformOrigin: 'right center' },
                0.15
              );
            }

            // © bridge: scale + rotation
            if (cBridge) {
              tl.from(cBridge, {
                scale: 0, rotation: -20, duration: 1.1, ease: 'back.out(1.3)'
              }, 0.8);
            }

            // ── Parallax scroll
            if (cBridge) {
              gsap.to(cBridge, {
                y: '30%',
                ease: 'none',
                scrollTrigger: {
                  trigger: '#footer-parallax-section',
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: true
                }
              });
            }
          })();
        });
      }, '2200px 0px'); // end lazy initFooterReveal

      runWhenNear(document.querySelector('.pg-gallery'), function () {
        _ric(function () {
          (function initGalleryExit() {
            const pgGallery = document.querySelector('.pg-gallery');
            if (!pgGallery) return;
            gsap.to(pgGallery, {
              opacity: 0,
              y: -30,
              ease: 'power2.in',
              scrollTrigger: {
                trigger: pgGallery,
                start: 'bottom 55%',
                end: 'bottom top',
                scrub: 1.5,
              }
            });
          })();
        });
      }, '1800px 0px'); // end lazy initGalleryExit

      // 🎯 自訂鼠標:只在 PC(寬 >1024、可 hover、精細指標)啟用,iPad/手機停用
      const disableCustomCursor = window.matchMedia('(max-width: 1024px), (hover: none), (pointer: coarse)').matches;

      if (!disableCustomCursor) {
        // ── Grid Mouse Tracker ──
        (function () {
          const settings = {
            GRID_SIZE: 5,
            MAX_BLOCKS: 50,
            FADE_OUT_DURATION: 1.0,
            COLOR: '#ffffff'
          };

          const pool = [];
          let poolIndex = 0;
          const activeBlockKeys = new Set();
          let prevX = null;
          let prevY = null;
          let gridCols = 0;
          let gridRows = 0;

          const updateDynamicStyles = () => {
            const styleId = 'dynamic-block-style';
            let styleElement = document.getElementById(styleId);
            if (!styleElement) {
              styleElement = document.createElement('style');
              styleElement.id = styleId;
              document.head.appendChild(styleElement);
            }
            styleElement.innerHTML = `
                .mouseTracker--01 {
                    width: ${settings.GRID_SIZE}px;
                    height: ${settings.GRID_SIZE}px;
                    background-color: ${settings.COLOR};
                    animation: none !important;
                    opacity: 0;
                    top: 0; left: 0;
                    will-change: transform, opacity;
                }
            `;
          };

          const initializeGrid = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            gridCols = Math.ceil(width / settings.GRID_SIZE);
            gridRows = Math.ceil(height / settings.GRID_SIZE);

            activeBlockKeys.clear();

            if (pool.length === 0) {
              const fragment = document.createDocumentFragment();
              for (let i = 0; i < settings.MAX_BLOCKS; i++) {
                const el = document.createElement('div');
                el.className = 'mouseTracker--01';
                fragment.appendChild(el);
                pool.push(el);
              }
              document.body.appendChild(fragment);
            }
          };

          const getInterpolatedPoints = (x1, y1, x2, y2) => {
            const points = [];
            const dx = x2 - x1;
            const dy = y2 - y1;
            const dist = Math.max(Math.abs(dx), Math.abs(dy));
            const steps = dist / settings.GRID_SIZE;

            for (let i = 0; i <= steps; i++) {
              const t = steps > 0 ? i / steps : 0;
              const x = Math.round(x1 + dx * t);
              const y = Math.round(y1 + dy * t);
              points[i] = { x, y };
            }
            return points;
          };

          const handleMouseMove = (e) => {
            const currX = e.clientX;
            const currY = e.clientY;

            if (prevX !== null && prevY !== null) {
              const points = getInterpolatedPoints(prevX, prevY, currX, currY);
              points.forEach(({ x, y }) => {
                const cellX = Math.floor(x / settings.GRID_SIZE);
                const cellY = Math.floor(y / settings.GRID_SIZE);
                if (cellX >= 0 && cellX < gridCols && cellY >= 0 && cellY < gridRows) {
                  drawBlock(cellX * settings.GRID_SIZE, cellY * settings.GRID_SIZE);
                }
              });
            }
            prevX = currX;
            prevY = currY;
          };

          const drawBlock = (x, y) => {
            const key = `${x},${y}`;
            if (activeBlockKeys.has(key)) return;

            const el = pool[poolIndex];
            poolIndex = (poolIndex + 1) % settings.MAX_BLOCKS;

            if (el.dataset.pos) {
              activeBlockKeys.delete(el.dataset.pos);
            }

            el.dataset.pos = key;
            activeBlockKeys.add(key);

            el.style.transform = `translate3d(${x}px, ${y}px, 0)`;

            if (el._anim) {
              el._anim.cancel();
            }

            el._anim = el.animate([
              { opacity: 1 },
              { opacity: 0 }
            ], {
              duration: settings.FADE_OUT_DURATION * 1000,
              fill: 'forwards'
            });

            el._anim.onfinish = () => {
              activeBlockKeys.delete(key);
              el.dataset.pos = "";
            };
          };

          updateDynamicStyles();
          initializeGrid();
          window.addEventListener('mousemove', handleMouseMove, { passive: true });
          window.addEventListener('resize', initializeGrid, { passive: true });
        })();

        const dot = document.getElementById('cursor-dot');
        const ring = document.getElementById('cursor-ring');
        if (dot && ring) {
          let mx = 0, my = 0, rx = 0, ry = 0;
          let magnetTarget = null;
          let magRect = null;
          let magnetStrength = 0.22;
          let cursorLeaveTimer = null;
          let cursorEnterRaf = 0;
          const cursorExitDuration = 140;

          // 🎯 效能優化:追蹤上次寫入值,靜止時跳過 style.transform 寫入
          let _lastDotX = -1, _lastDotY = -1, _lastRingX = -1, _lastRingY = -1;
          let _cursorRaf = 0;
          let _lastCursorWake = 0;

          const wakeCursorLoop = () => {
            _lastCursorWake = performance.now();
            if (!_cursorRaf) _cursorRaf = requestAnimationFrame(cursorLoop);
          };

          const showCursorLabel = (label, side) => {
            if (cursorLeaveTimer) {
              clearTimeout(cursorLeaveTimer);
              cursorLeaveTimer = null;
            }

            dot.classList.add('is-link');
            ring.classList.remove('is-leaving');
            ring.classList.remove('is-link');
            ring.setAttribute('data-cursor-label', label);
            ring.setAttribute('data-cursor-side', side);

            if (cursorEnterRaf) cancelAnimationFrame(cursorEnterRaf);
            cursorEnterRaf = requestAnimationFrame(() => {
              cursorEnterRaf = 0;
              ring.classList.add('is-link');
              wakeCursorLoop();
            });
          };

          const hideCursorLabel = () => {
            if (cursorEnterRaf) {
              cancelAnimationFrame(cursorEnterRaf);
              cursorEnterRaf = 0;
            }
            ring.classList.remove('is-link');
            ring.classList.add('is-leaving');
            wakeCursorLoop();

            if (cursorLeaveTimer) {
              clearTimeout(cursorLeaveTimer);
            }

            cursorLeaveTimer = window.setTimeout(() => {
              ring.classList.remove('is-leaving');
              dot.classList.remove('is-link');
              ring.setAttribute('data-cursor-label', 'EXPLORE');
              ring.setAttribute('data-cursor-side', 'right');
              cursorLeaveTimer = null;
              wakeCursorLoop();
            }, cursorExitDuration);
          };

          document.addEventListener('mousemove', e => {
            mx = e.clientX;
            my = e.clientY;
            wakeCursorLoop();
          }, { passive: true });

          function cursorLoop() {
            _cursorRaf = 0;

            const targetX = (magnetTarget && magRect)
              ? mx + ((magRect.left + magRect.width / 2) - mx) * magnetStrength
              : mx;
            const targetY = (magnetTarget && magRect)
              ? my + ((magRect.top + magRect.height / 2) - my) * magnetStrength
              : my;

            rx += (targetX - rx) * 0.18;
            ry += (targetY - ry) * 0.18;

            // 🎯 只在有變化時才寫 style,避免冗餘 DOM 寫入
            if (targetX !== _lastDotX || targetY !== _lastDotY) {
              dot.style.transform = `translate(${targetX}px,${targetY}px)`;
              _lastDotX = targetX;
              _lastDotY = targetY;
            }
            if (Math.abs(rx - _lastRingX) > 0.05 || Math.abs(ry - _lastRingY) > 0.05) {
              ring.style.transform = `translate(${rx}px,${ry}px)`;
              _lastRingX = rx;
              _lastRingY = ry;
            }

            const ringSettled = Math.abs(rx - targetX) < 0.08 && Math.abs(ry - targetY) < 0.08;
            const recentlyAwake = performance.now() - _lastCursorWake < 260;
            if (!ringSettled || recentlyAwake) {
              _cursorRaf = requestAnimationFrame(cursorLoop);
            }
          }

          const linkSelectors = 'a, button, .slide-thumb, .pg-item, [data-cursor]';
          const getCursorTarget = (node) => node && typeof node.closest === 'function'
            ? node.closest(linkSelectors)
            : null;

          document.addEventListener('pointerover', (e) => {
            const el = getCursorTarget(e.target);
            if (!el) return;

            const previous = getCursorTarget(e.relatedTarget);
            if (previous === el) return;

            const shouldMagnetize = el.offsetWidth < 300;
            const nextMagRect = shouldMagnetize ? el.getBoundingClientRect() : null;

            showCursorLabel(el.dataset.cursor || 'EXPLORE', el.dataset.cursorSide || 'right');
            if (shouldMagnetize) {
              magnetTarget = el;
              magRect = nextMagRect;
            } else {
              magnetTarget = null;
              magRect = null;
            }
            wakeCursorLoop();
          });

          document.addEventListener('pointerout', (e) => {
            const el = getCursorTarget(e.target);
            if (!el) return;

            const next = getCursorTarget(e.relatedTarget);
            if (next) return;

            hideCursorLabel();
            magnetTarget = null;
            magRect = null;
            wakeCursorLoop();
          });

          document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; wakeCursorLoop(); });
          document.addEventListener('mouseenter', () => { dot.style.opacity = ''; ring.style.opacity = ''; wakeCursorLoop(); });
        }
      }

      // ── 手機版 mobile-cube-section：scroll-driven 平轉 ──
      (function () {
        var cube = document.querySelector('.mobile-cube');
        var scene = document.querySelector('.mobile-cube-scene');
        if (!cube) return;

        var angle = 0;
        var extra = 0;
        var touchRotateX = 0;
        var touchRotateY = 0;
        var isTouching = false;
        var snapBackBoost = 0;
        var BASE = 0.21;   // deg/frame baseline (~13°/s @ 60fps)
        var FRIC = 0.87;   // 慣性衰減
        var K = 0.07;   // scroll velocity → extra 係數
        var MAX_EXTRA = 1.12;
        var TOUCH_DRAG_X = 0.55;
        var TOUCH_DRAG_Y = 0.48;
        var TOUCH_MOMENTUM = 0.16;
        var RETURN_EASE = 0.1;
        var RETURN_EASE_SCROLL = 0.22;
        var rafId = 0;
        var isVisible = false;

        function addVelocity(v) {
          extra += v * K;
          if (extra > MAX_EXTRA) extra = MAX_EXTRA;
          if (extra < -MAX_EXTRA) extra = -MAX_EXTRA;
        }

        // Lenis scroll velocity
        function hookLenis() {
          if (window._lenis) {
            window._lenis.on('scroll', function (e) { addVelocity(e.velocity * 3.2); });
          } else {
            setTimeout(hookLenis, 300);
          }
        }
        hookLenis();

        if (scene) {
          var lastTouchX = 0;
          var lastTouchY = 0;

          scene.addEventListener('touchstart', function (e) {
            if (!e.touches || !e.touches.length) return;
            isTouching = true;
            snapBackBoost = 0;
            lastTouchX = e.touches[0].clientX;
            lastTouchY = e.touches[0].clientY;
          }, { passive: true });

          scene.addEventListener('touchmove', function (e) {
            if (!e.touches || !e.touches.length) return;
            var touchX = e.touches[0].clientX;
            var touchY = e.touches[0].clientY;
            var deltaX = touchX - lastTouchX;
            var deltaY = touchY - lastTouchY;
            lastTouchX = touchX;
            lastTouchY = touchY;
            touchRotateY += deltaX * TOUCH_DRAG_X;
            touchRotateX -= deltaY * TOUCH_DRAG_Y;
            addVelocity(deltaX * TOUCH_MOMENTUM);
          }, { passive: true });

          scene.addEventListener('touchend', function () {
            isTouching = false;
            snapBackBoost = RETURN_EASE_SCROLL;
            lastTouchX = 0;
            lastTouchY = 0;
          }, { passive: true });

          scene.addEventListener('touchcancel', function () {
            isTouching = false;
            snapBackBoost = RETURN_EASE_SCROLL;
            lastTouchX = 0;
            lastTouchY = 0;
          }, { passive: true });
        }

        // native scroll fallback
        var lastY = window.scrollY;
        window.addEventListener('scroll', function () {
          var deltaY = window.scrollY - lastY;
          addVelocity(deltaY);
          if (deltaY > 0) snapBackBoost = RETURN_EASE_SCROLL;
          lastY = window.scrollY;
        }, { passive: true });

        function tick() {
          rafId = 0;
          extra *= FRIC;
          angle += BASE + extra;

          if (!isTouching) {
            var returnEase = Math.max(RETURN_EASE, snapBackBoost);
            touchRotateX += (0 - touchRotateX) * returnEase;
            touchRotateY += (0 - touchRotateY) * returnEase;
            snapBackBoost *= 0.92;
          }

          cube.style.transform = 'rotateX(' + touchRotateX + 'deg) rotateY(' + (angle + touchRotateY) + 'deg)';
          rafId = isVisible ? requestAnimationFrame(tick) : 0;
        }

        if ('IntersectionObserver' in window && scene) {
          const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !isVisible) {
                isVisible = true;
                if (!rafId) tick();
              } else if (!entry.isIntersecting && isVisible) {
                isVisible = false;
                if (rafId) {
                  cancelAnimationFrame(rafId);
                  rafId = 0;
                }
              }
            });
          }, { rootMargin: '200px 0px' });
          io.observe(scene);
        } else {
          isVisible = true;
          tick();
        }
      })();

      // ── Scroll-driven marquee (支援多個 .js-scroll-marquee 同時運作) ──
      (function () {
        const inners = Array.from(document.querySelectorAll('.js-scroll-marquee'));
        // 相容舊有單一 ID 寫法
        const legacy = document.getElementById('marquee-inner');
        if (legacy && !inners.includes(legacy)) inners.unshift(legacy);
        if (!inners.length) return;

        const baseSpeed = 1;   // px per tick baseline
        let lenisVel = 0;
        let marqueeRaf = 0;

        const tracks = inners.map(function (inner) {
          const dirAttr = parseFloat(inner.getAttribute('data-marquee-dir'));
          const firstSet = inner.querySelector('.marquee-set');
          const templateSet = firstSet ? firstSet.cloneNode(true) : null;
          return {
            inner: inner,
            templateSet: templateSet,
            xPos: 0,
            setWidth: 0,
            dir: isFinite(dirAttr) && dirAttr !== 0 ? Math.sign(dirAttr) : -1
          };
        }).filter(function (track) {
          return !!track.templateSet;
        });

        function rebuildTrack(track) {
          if (!track.templateSet) return;
          const outer = track.inner.parentElement;
          track.inner.innerHTML = '';
          const firstClone = track.templateSet.cloneNode(true);
          track.inner.appendChild(firstClone);

          const setWidth = firstClone.scrollWidth || Math.ceil(firstClone.getBoundingClientRect().width) || 0;
          const outerWidth = outer ? outer.clientWidth : window.innerWidth;
          track.setWidth = setWidth;

          if (!setWidth) return;

          const minTrackWidth = outerWidth + setWidth * 2;
          const cloneCount = Math.max(2, Math.ceil(minTrackWidth / setWidth));
          for (let i = 1; i < cloneCount; i++) {
            track.inner.appendChild(track.templateSet.cloneNode(true));
          }
          track.xPos = ((track.xPos % setWidth) + setWidth) % setWidth;
          if (track.dir < 0 && track.xPos > 0) track.xPos -= setWidth;
          track.inner.style.transform = 'translate3d(' + track.xPos + 'px, 0, 0)';
        }

        function rebuildMarquees() {
          tracks.forEach(rebuildTrack);
        }

        window.addEventListener('load', rebuildMarquees, { once: true });
        window.addEventListener('resize', rebuildMarquees, { passive: true });
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(rebuildMarquees).catch(function () { });
        }
        rebuildMarquees();

        // Hook into Lenis velocity
        setTimeout(function () {
          if (window._lenis) {
            window._lenis.on('scroll', function (e) {
              lenisVel = (e.velocity || 0) * 0.25;
              if (shouldRunMarquee()) requestMarqueeTick();
            });
          }
        }, 200);

        function requestMarqueeTick() {
          if (!marqueeRaf) marqueeRaf = requestAnimationFrame(tick);
        }
        window._requestMarqueeRAF = requestMarqueeTick;

        // 🎯 手機版有獨立的 marquee section,不受桌機 cube ScrollTrigger 控制
        const isMobileBreakpoint = window.matchMedia && window.matchMedia('(max-width: 767px)').matches;
        let mobileMarqueeVisible = !isMobileBreakpoint;

        function shouldRunMarquee() {
          return isMobileBreakpoint ? mobileMarqueeVisible : window._marqueeRAFActive;
        }

        if (isMobileBreakpoint && 'IntersectionObserver' in window && inners.length) {
          const observedSections = new Set();
          const io = new IntersectionObserver((entries) => {
            mobileMarqueeVisible = entries.some((entry) => entry.isIntersecting);
            if (mobileMarqueeVisible) requestMarqueeTick();
          }, { rootMargin: '300px 0px' });

          inners.forEach(function (inner) {
            const section = inner.closest('.mobile-marquee-section, .section-2-content, section') || inner.parentElement;
            if (section && !observedSections.has(section)) {
              observedSections.add(section);
              io.observe(section);
            }
          });
        } else if (isMobileBreakpoint) {
          mobileMarqueeVisible = true;
        }

        function tick() {
          marqueeRaf = 0;
          lenisVel *= 0.93;
          if (!shouldRunMarquee()) return;

          tracks.forEach(function (t) {
            // dir = -1 → 往左走(預設),+1 → 往右走;與 Lenis 滾動速度疊加
            t.xPos += (baseSpeed + lenisVel) * t.dir;
            if (t.setWidth > 0) {
              while (t.xPos <= -t.setWidth) t.xPos += t.setWidth;
              while (t.xPos >= t.setWidth) t.xPos -= t.setWidth;
            }
            t.inner.style.transform = 'translate3d(' + t.xPos + 'px, 0, 0)';
          });
          requestMarqueeTick();
        }
        if (shouldRunMarquee()) requestMarqueeTick();
      })();

    });
  </script>

  <canvas id="film-grain-canvas" aria-hidden="true"></canvas>
  <script src="noise.js?v=5" defer></script>

  <!-- =========================================================
       SECTION 3: CORE CAPABILITIES (3D Ring Gallery JS)
       ========================================================= -->
  <script>
    const ccapVertexShader = /* glsl */ `
    varying vec2 vUv;

    void main(){
        vUv=uv;
        gl_Position=vec4(position,1.);
    }
    `;

    const fragmentShader = /* glsl */ `
    uniform float iTime;
    uniform vec2 iResolution;
    uniform vec2 iMouse;

    uniform sampler2D tDiffuse;

    varying vec2 vUv;

    uniform vec3 uBgColor;
    uniform float uRGBShiftIntensity;
    uniform float uGrainIntensity;
    uniform float uVignetteIntensity;
    uniform float uTransitionProgress;

    highp float random(vec2 co)
    {
        highp float a=12.9898;
        highp float b=78.233;
        highp float c=43758.5453;
        highp float dt=dot(co.xy,vec2(a,b));
        highp float sn=mod(dt,3.14);
        return fract(sin(sn)*c);
    }

    vec3 grain(vec2 uv,vec3 col,float amount){
        float noise=random(uv+iTime);
        col+=(noise-.5)*amount;
        return col;
    }

    vec4 RGBShift(sampler2D tex,vec2 uv,float amount){
        vec2 rUv=uv;
        vec2 gUv=uv;
        vec2 bUv=uv;
        float noise=random(uv+iTime)*.5+.5;
        vec2 offset=amount*vec2(cos(noise),sin(noise));
        rUv+=offset;
        gUv+=offset*.5;
        bUv+=offset*.25;
        vec4 rTex=texture(tex,rUv);
        vec4 gTex=texture(tex,gUv);
        vec4 bTex=texture(tex,bUv);
        vec4 col=vec4(rTex.r,gTex.g,bTex.b,gTex.a);
        return col;
    }

    vec3 vignette(vec2 uv,vec3 col,vec3 vigColor,float amount){
        vec2 p=uv;
        p-=.5;
        float d=length(p);
        float mask=smoothstep(.5,.3,d);
        mask=pow(mask,.6);
        float mixFactor=(1.-mask)*amount;
        col=mix(col,vigColor,mixFactor);
        return col;
    }

    float sdCircle(vec2 p,float r)
    {
        return length(p)-r;
    }

    vec3 transition(vec2 uv,vec3 col,float progress){
        float ratio=iResolution.x/iResolution.y;

        vec2 p=uv;
        p-=.5;
        p.x*=ratio;
        float d=sdCircle(p,progress*sqrt(2.2));
        float c=smoothstep(-.2,0.,d);
        col=mix(uBgColor,col,1.-c);
        return col;
    }

    void main(){
        vec2 uv=vUv;
        vec4 tex=RGBShift(tDiffuse,uv,uRGBShiftIntensity);
        vec3 col=tex.xyz;
        col=grain(uv,col,uGrainIntensity);
        col=vignette(uv,col,uBgColor,uVignetteIntensity);
        col=transition(uv,col,uTransitionProgress);
        gl_FragColor=vec4(col,1.);
    }
    `;

    const CCAP_RING_GALLERY_CONFIG = (() => {
      const sumFormula = (count) => (count * (count + 1)) / 2;
      const circleCount = 3;
      const circleImgCountUnit = 12;
      const circleImgTotalCount = circleImgCountUnit * sumFormula(circleCount);

      return {
        circleCount,
        circleImgCountUnit,
        circleImgTotalCount,
        customImageUrls: [
          // Optional manual override.
          // You can use fewer than 72 images; the gallery will loop them automatically.
          // "images/core-capabilities/ring/01.jpg",
          // "images/core-capabilities/ring/02.jpg",
          // "images/core-capabilities/ring/03.jpg",
        ],
        // Automatic folder scan uses contiguous names like:
        // images/core-capabilities/ring/01.jpg
        // images/core-capabilities/ring/02.jpg
        // images/core-capabilities/ring/03.jpg
        autoImageFolder: "images/core-capabilities/ring",
        autoImageBaseName: "",
        autoImageStartIndex: 1,
        autoImageCount: 25,
        autoImageZeroPad: 2,
        autoImageExtension: ".webp",
        placeholderImageUrls: Array.from({ length: circleImgTotalCount }, (_, index) => {
          return `https://picsum.photos/id/${index + 1}/320/400`;
        })
      };
    })();

    class Sketch {
      constructor(selector) {
        this.container = document.querySelector(selector);
        this.config = {
          bgColor: "#000000"
        };
        this.params = {
          transitionProgress: 0,
          enterProgress: 0,
          rotateSpeed: 15
        };
        this.rings = [];
        this.lines = [];
        this.dragDelta = 0;
        this.isDragging = false;
        this.dragEnabled = true;
        this.isRendering = false;
        this.isPrewarmed = false;
        this.viewportObserver = null;
        this.lastPointer = { x: 0, y: 0 };
        this.mouse = new THREE.Vector2(0, 0);
        this.clock = new THREE.Clock();

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(this.config.bgColor);

        this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100);
        this.camera.position.set(0, 0, 16);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setClearColor(new THREE.Color(this.config.bgColor), 1);
        this.renderer.domElement.style.width = "100%";
        this.renderer.domElement.style.height = "100%";
        this.renderer.domElement.style.display = "block";

        this.renderTarget = new THREE.WebGLRenderTarget(1, 1, {
          minFilter: THREE.LinearFilter,
          magFilter: THREE.LinearFilter,
          format: THREE.RGBAFormat,
          depthBuffer: true,
          stencilBuffer: false
        });

        this.postScene = new THREE.Scene();
        this.postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        this.postCamera.position.z = 1;
        this.postMaterial = new THREE.ShaderMaterial({
          uniforms: {
            iTime: { value: 0 },
            iResolution: { value: new THREE.Vector2(1, 1) },
            iMouse: { value: new THREE.Vector2(0, 0) },
            tDiffuse: { value: this.renderTarget.texture },
            uBgColor: { value: new THREE.Color(this.config.bgColor) },
            uRGBShiftIntensity: { value: 0.0025 },
            uGrainIntensity: { value: 0.025 },
            uVignetteIntensity: { value: 0.8 },
            uTransitionProgress: { value: 0 }
          },
          vertexShader: ccapVertexShader,
          fragmentShader,
          depthWrite: false,
          depthTest: false
        });
        this.postQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.postMaterial);
        this.postScene.add(this.postQuad);

        this.handleResize = this.handleResize.bind(this);
        this.handlePointerDown = this.handlePointerDown.bind(this);
        this.handlePointerMove = this.handlePointerMove.bind(this);
        this.handlePointerUp = this.handlePointerUp.bind(this);
        this.renderFrame = this.renderFrame.bind(this);
      }

      async create() {
        if (!this.container) return;

        this.container.innerHTML = "";
        this.container.appendChild(this.renderer.domElement);
        this.updateInteractionMode();

        this.handleResize();
        this.bindEvents();

        const textures = await this.loadTextures();
        this.buildGallery(textures);
        this.setupScrollAnimations();

        // 預熱 GPU：在 IntersectionObserver 開始 loop 之前強制編譯 shader 和上傳貼圖
        // 避免第一幀因 shader compile / texture upload 造成主執行緒凍結（卡頓感）
        try {
          this.renderer.compile(this.scene, this.camera);
          this.renderer.compile(this.postScene, this.postCamera);
        } catch (_) { }

        this.schedulePrewarm();
        this.setupViewportRendering();
      }

      schedulePrewarm() {
        const runPrewarm = () => this.prewarmRenderer();
        if (window.requestIdleCallback) {
          window.requestIdleCallback(runPrewarm, { timeout: 700 });
        } else {
          window.setTimeout(runPrewarm, 160);
        }
      }

      prewarmRenderer() {
        if (this.isPrewarmed) return;
        this.isPrewarmed = true;
        try {
          this.renderFrame();
        } catch (_) { }
      }

      setupViewportRendering() {
        const start = () => {
          if (this.isRendering) return;
          this.prewarmRenderer();
          this.isRendering = true;
          this.renderer.setAnimationLoop(this.renderFrame);
        };

        const stop = () => {
          if (!this.isRendering) return;
          this.isRendering = false;
          this.renderer.setAnimationLoop(null);
        };

        if (!('IntersectionObserver' in window)) {
          start();
          return;
        }

        const leadPx = Math.round(Math.max(900, window.innerHeight * 1.25));
        this.viewportObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) start();
            else stop();
          });
        }, { rootMargin: `${leadPx}px 0px` });
        this.viewportObserver.observe(this.container);
      }

      bindEvents() {
        window.addEventListener("resize", this.handleResize);
        this.container.addEventListener("pointerdown", this.handlePointerDown);
        window.addEventListener("pointermove", this.handlePointerMove);
        window.addEventListener("pointerup", this.handlePointerUp);
        window.addEventListener("pointercancel", this.handlePointerUp);
      }

      updateInteractionMode() {
        const useTouchScrollMode = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;
        this.dragEnabled = !useTouchScrollMode;
        if (this.container) {
          this.container.style.touchAction = useTouchScrollMode ? "pan-y" : "none";
        }
      }

      handleResize() {
        if (!this.container) return;

        this.updateInteractionMode();

        const width = this.container.clientWidth || window.innerWidth;
        const height = this.container.clientHeight || window.innerHeight;
        const pixelRatio = this.getRenderPixelRatio();
        const renderWidth = Math.max(1, Math.floor(width * pixelRatio));
        const renderHeight = Math.max(1, Math.floor(height * pixelRatio));

        this.renderer.setPixelRatio(pixelRatio);
        this.renderer.setSize(width, height, false);
        this.renderTarget.setSize(renderWidth, renderHeight);
        this.postMaterial.uniforms.iResolution.value.set(renderWidth, renderHeight);

        this.camera.aspect = width / Math.max(height, 1);
        this.camera.updateProjectionMatrix();
      }

      handlePointerDown(event) {
        if (!this.dragEnabled || event.pointerType !== "mouse") return;
        this.isDragging = true;
        this.lastPointer.x = event.clientX;
        this.lastPointer.y = event.clientY;
      }

      handlePointerMove(event) {
        const rect = this.container ? this.container.getBoundingClientRect() : null;
        if (rect) {
          this.mouse.set(event.clientX - rect.left, rect.height - (event.clientY - rect.top));
        }

        if (!this.isDragging || event.pointerType !== "mouse") return;

        const deltaX = event.clientX - this.lastPointer.x;
        const deltaY = event.clientY - this.lastPointer.y;
        this.dragDelta -= (deltaX || deltaY) * 2;
        this.lastPointer.x = event.clientX;
        this.lastPointer.y = event.clientY;
      }

      handlePointerUp() {
        this.isDragging = false;
      }

      createTextureUrlList(sourceList = []) {
        const {
          circleImgTotalCount,
          placeholderImageUrls
        } = CCAP_RING_GALLERY_CONFIG;
        const activeSourceList = sourceList.length > 0 ? sourceList : placeholderImageUrls;

        return Array.from({ length: circleImgTotalCount }, (_, index) => {
          return activeSourceList[index % activeSourceList.length];
        });
      }

      getRenderPixelRatio() {
        const baseDpr = typeof getOptimalDPR === 'function'
          ? getOptimalDPR()
          : Math.min(window.devicePixelRatio || 1, 2);

        if (window.innerWidth <= 768) return Math.min(baseDpr, 1.1);
        return Math.min(baseDpr, 1.35);
      }

      probeImageUrl(url) {
        return new Promise((resolve) => {
          const image = new Image();

          image.onload = () => resolve(true);
          image.onerror = () => resolve(false);
          image.src = url;
        });
      }

      async resolveAutoTextureUrlList() {
        const {
          autoImageFolder,
          autoImageBaseName,
          autoImageStartIndex,
          autoImageCount,
          autoImageZeroPad,
          autoImageExtension,
          circleImgTotalCount
        } = CCAP_RING_GALLERY_CONFIG;
        const buildAutoUrl = (index) => {
          const fileNumber = String(autoImageStartIndex + index).padStart(autoImageZeroPad, "0");
          return `${autoImageFolder}/${autoImageBaseName}${fileNumber}${autoImageExtension}`;
        };
        const safeAutoImageCount = Number.isFinite(autoImageCount)
          ? Math.max(0, Math.min(circleImgTotalCount, Math.floor(autoImageCount)))
          : 0;

        if (safeAutoImageCount > 0) {
          return Array.from({ length: safeAutoImageCount }, (_, index) => buildAutoUrl(index));
        }

        const discoveredUrls = [];

        for (let index = 0; index < circleImgTotalCount; index += 1) {
          const candidateUrl = buildAutoUrl(index);
          const exists = await this.probeImageUrl(candidateUrl);

          if (!exists) {
            break;
          }

          discoveredUrls.push(candidateUrl);
        }

        return discoveredUrls;
      }

      async resolveTextureUrlList() {
        const { customImageUrls } = CCAP_RING_GALLERY_CONFIG;

        if (customImageUrls.length > 0) {
          return this.createTextureUrlList(customImageUrls);
        }

        const autoImageUrls = await this.resolveAutoTextureUrlList();

        if (autoImageUrls.length > 0) {
          return this.createTextureUrlList(autoImageUrls);
        }

        return this.createTextureUrlList();
      }

      createFallbackTexture(index) {
        const canvas = document.createElement("canvas");
        canvas.width = 320;
        canvas.height = 400;

        const context = canvas.getContext("2d");
        const hue = (index * 37) % 360;
        context.fillStyle = "#050505";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = `hsl(${hue} 45% 34%)`;
        context.fillRect(24, 24, canvas.width - 48, canvas.height - 48);
        context.fillStyle = "rgba(255,255,255,0.88)";
        context.font = "600 28px Arial";
        context.textAlign = "center";
        context.fillText(`CCAP ${index + 1}`, canvas.width / 2, canvas.height / 2);

        return new THREE.CanvasTexture(canvas);
      }

      async loadTextures() {
        const loader = new THREE.TextureLoader();
        loader.setCrossOrigin("anonymous");

        const textureUrls = await this.resolveTextureUrlList();
        const textureCache = new Map();

        const loadTextureOnce = (url, index) => {
          if (!textureCache.has(url)) {
            textureCache.set(url, new Promise((resolve) => {
              loader.load(
                url,
                (texture) => {
                  texture.minFilter = THREE.LinearFilter;
                  texture.magFilter = THREE.LinearFilter;
                  resolve(texture);
                },
                undefined,
                () => {
                  resolve(this.createFallbackTexture(index));
                }
              );
            }));
          }
          return textureCache.get(url);
        };

        return Promise.all(textureUrls.map((url, index) => loadTextureOnce(url, index)));
      }

      buildGallery(textures) {
        const sumFormula = (count) => (count * (count + 1)) / 2;
        const isOdd = (count) => count % 2 === 1;
        const { circleCount, circleImgCountUnit } = CCAP_RING_GALLERY_CONFIG;
        const radius = 6.4;
        const radiusOffset = 2.3;
        const firstRingInset = 0.65;
        const secondRingInset = 0.8;
        const scale = 0.8;
        const baseMaterial = new THREE.MeshBasicMaterial({ transparent: true });

        this.isOddRing = isOdd;

        for (let ringIndex = 0; ringIndex < circleCount; ringIndex += 1) {
          const start = sumFormula(ringIndex) * circleImgCountUnit;
          const end = sumFormula(ringIndex + 1) * circleImgCountUnit;
          const ringTextures = textures.slice(start, end);

          const ring = new THREE.Group();
          this.scene.add(ring);
          this.rings.push(ring);

          ringTextures.forEach((texture, textureIndex) => {
            const line = new THREE.Group();
            ring.add(line);
            this.lines.push(line);

            const aspect = texture.image.width / Math.max(texture.image.height, 1);
            const targetHeight = 2 * scale * (ringIndex * 0.36 + 1);
            const height = targetHeight;
            const width = targetHeight * aspect;
            const geometry = new THREE.PlaneGeometry(width, height);
            const material = baseMaterial.clone();
            material.map = texture;
            material.needsUpdate = true;

            const mesh = new THREE.Mesh(geometry, material);
            const ringRadius = radius * (ringIndex + 1) + radiusOffset - (ringIndex === 0 ? firstRingInset : 0) - (ringIndex === 1 ? secondRingInset : 0);
            const ratio = textureIndex / Math.max(ringTextures.length, 1);
            const angle = ratio * Math.PI * 2;

            mesh.position.x = ringRadius;
            mesh.rotation.z = -Math.PI / 2;
            line.rotation.z = angle;
            line.add(mesh);
          });
        }
      }

      setupScrollAnimations() {
        const ccapSection = document.getElementById("core-capabilities");
        const heroDom = ccapSection ? ccapSection.querySelector(".hero-dom") : null;
        if (!ccapSection || !heroDom || !window.gsap || !window.ScrollTrigger) return;

        window.gsap.registerPlugin(window.ScrollTrigger);
        const titleTargets = ccapSection.querySelectorAll(".giant-title .reveal-inner, .sub-title .reveal-inner");
        const staticTextTargets = ccapSection.querySelectorAll(".top-nav .reveal-inner, .service-label .reveal-inner, .service-tags .reveal-inner, .footer-desc .reveal-inner");
        const mediaTargets = ccapSection.querySelectorAll(".media-box, .center-video-box");
        const initialRect = ccapSection.getBoundingClientRect();
        const alreadyVisible = initialRect.top <= window.innerHeight * 0.95;

        const setTitleTransform = (transformValue) => {
          titleTargets.forEach((target) => {
            target.style.transform = transformValue;
          });
        };

        const resolveTitleState = (rect) => {
          if (rect.top > window.innerHeight * 0.8) {
            return "hidden";
          }
          if (rect.bottom < window.innerHeight * 0.45) {
            return "exiting";
          }
          return "visible";
        };

        const revealCoreContent = () => {
          if (ccapSection.dataset.revealReady === "true") return;

          ccapSection.dataset.revealReady = "true";
          staticTextTargets.forEach((target) => {
            target.style.transform = "translateY(0)";
          });
          mediaTargets.forEach((target) => {
            target.style.clipPath = "inset(0% 0 0 0)";
          });
        };

        let titleState = null;

        const applyTitleState = (nextTitleState) => {
          if (nextTitleState === titleState) {
            return;
          }

          titleState = nextTitleState;

          if (titleState === "hidden") {
            setTitleTransform("translateY(110%)");
          } else if (titleState === "visible") {
            setTitleTransform("translateY(0)");
          } else {
            setTitleTransform("translateY(-110%)");
          }
        };

        if (alreadyVisible) {
          revealCoreContent();
        }
        applyTitleState(resolveTitleState(initialRect));

        window.ScrollTrigger.create({
          trigger: ccapSection,
          start: "top 80%",
          end: "bottom 45%",
          onEnter: () => {
            revealCoreContent();
            applyTitleState("visible");
          },
          onEnterBack: () => {
            applyTitleState("visible");
          },
          onLeave: () => {
            applyTitleState("exiting");
          },
          onLeaveBack: () => {
            applyTitleState("hidden");
          }
        });

        const enterTl = window.gsap.timeline({
          scrollTrigger: {
            trigger: ccapSection,
            start: "top 80%",
            end: "top 30%",
            scrub: 1
          }
        });

        enterTl
          .to(this.params, { transitionProgress: 1, duration: 1, ease: "power1.inOut" })
          .fromTo(this.params, { enterProgress: 0, rotateSpeed: 10 }, { enterProgress: 1, rotateSpeed: 1, duration: 1.5, ease: "power1.inOut" }, "-=1")
          .to(heroDom, { opacity: 1, duration: 1 }, "-=1");

        const exitTl = window.gsap.timeline({
          scrollTrigger: {
            trigger: ccapSection,
            start: "bottom 90%",
            end: "bottom 20%",
            scrub: 1
          }
        });

        exitTl
          .to(heroDom, { opacity: 0, duration: 1 })
          .to(this.params, { transitionProgress: 0, duration: 1, ease: "power1.inOut" }, "-=0.5");
      }

      renderFrame() {
        let scrollDelta = 0;
        if (window._lenis) {
          scrollDelta = window._lenis.velocity * 0.02;
        }

        this.rings.forEach((ring, ringIndex) => {
          ring.rotation.z +=
            0.0025 *
            (this.isOddRing(ringIndex) ? -1 : 1) *
            (1 + Math.abs(scrollDelta * 10) + Math.abs(this.dragDelta)) *
            this.params.rotateSpeed;
        });

        this.dragDelta *= 0.9;

        this.lines.forEach((line) => {
          line.position.z =
            -THREE.MathUtils.lerp(0, 100, 1 - this.params.enterProgress) +
            THREE.MathUtils.lerp(10, 0, this.params.enterProgress);
        });

        this.postMaterial.uniforms.iTime.value = this.clock.getElapsedTime();
        this.postMaterial.uniforms.iMouse.value.copy(this.mouse);
        this.postMaterial.uniforms.uTransitionProgress.value = this.params.transitionProgress;

        this.renderer.setRenderTarget(this.renderTarget);
        this.renderer.render(this.scene, this.camera);
        this.renderer.setRenderTarget(null);
        this.renderer.render(this.postScene, this.postCamera);
      }
    }

    document.addEventListener("DOMContentLoaded", () => {
      // 直接在 idle 時初始化，不等滾到附近再載，消除進場黑畫面
      let sketchInitialized = false;
      const initSketch = () => {
        if (sketchInitialized) return;
        const sketchRoot = document.querySelector("#core-capabilities #sketch");
        if (!sketchRoot) return;
        sketchInitialized = true;
        const sketch = new Sketch("#core-capabilities #sketch");
        sketch.create();
      };
      const ccapSection = document.getElementById("core-capabilities");
      if (typeof runWhenNear === "function" && ccapSection) {
        runWhenNear(ccapSection, initSketch, "2200px 0px");
      } else if (window.requestIdleCallback) {
        window.requestIdleCallback(initSketch, { timeout: 600 });
      } else {
        window.setTimeout(initSketch, 180);
      }
    });
  </script>

  <!-- DXM section 已移除：對應 JS（dxm-strip / dxm-scrollTopBtn / #dxm-marquee ScrollTrigger）一併清除 -->

  <!-- =========================================================
       SECTION TRANSITIONS: stm → ccap → s3  (rAF, same pattern as hero→dark-wrapper)
       ========================================================= -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      if (typeof gsap === 'undefined') return;

      const stm = document.getElementById('stm-section');
      const stmContent = stm ? stm.querySelector('.stm-content') : null;
      const ccap = document.getElementById('core-capabilities');
      const ccapOverlay = document.getElementById('ccap-exit-overlay');
      const ccapMain = ccap ? ccap.querySelector('main') : null;

      if (!stmContent && !ccapOverlay) return;

      let sectionTransitionsInitialized = false;
      function initSectionTransitions() {
        if (sectionTransitionsInitialized) return;
        sectionTransitionsInitialized = true;

        function _ease(t) {
          return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        /* ── STM EXIT: content scales + fades out as stm scrolls off top ── */
        if (stm && stmContent && typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.create({
            trigger: stm,
            start: 'bottom bottom',
            end: 'bottom top',
            scrub: 0.35,
            onUpdate: (self) => {
              const e = _ease(self.progress);
              gsap.set(stmContent, {
                scale: 1 - e * 0.04,
                y: -e * 18,
                opacity: 1 - e * 0.78,
                force3D: true
              });
            }
          });
        }

        /* ── CCAP EXIT: overlay darkens + main content pulls back ── */
        if (ccap && ccapOverlay && ccapMain && typeof ScrollTrigger !== 'undefined') {
          const setCcapOverlayOpacity = gsap.quickSetter(ccapOverlay, 'opacity');
          const setCcapMainScale = gsap.quickSetter(ccapMain, 'scale');
          const setCcapMainY = gsap.quickSetter(ccapMain, 'y', 'px');
          ScrollTrigger.create({
            trigger: ccap,
            start: 'bottom bottom',
            end: 'bottom top',
            scrub: 0.35,
            onUpdate: (self) => {
              const e = _ease(self.progress);
              setCcapOverlayOpacity(e * 0.74);
              setCcapMainScale(1 - e * 0.046);
              setCcapMainY(-e * 24);
            }
          });
        }

      }

      const transitionTarget = stm || ccap;
      if (!transitionTarget || !('IntersectionObserver' in window)) {
        initSectionTransitions();
        return;
      }

      const leadPx = 2200;
      const transitionObserver = new IntersectionObserver((entries) => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        transitionObserver.disconnect();
        initSectionTransitions();
      }, { rootMargin: `${leadPx}px 0px` });
      transitionObserver.observe(transitionTarget);

    });
  </script>


<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v4513226cdae34746b4dedf0b4dfa099e1781791509496" integrity="sha512-ZE9pZaUXND66v380QUtch/5sE9tPFh2zg45pR2PB0CVkCtOREv2AJKkSidISWkysEuQ0EH8faUU5du78bx87UQ==" data-cf-beacon='{"version":"2024.11.0","token":"d4b157dbd1fd4977bad7e3a062761f49","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
</body>

</html>
