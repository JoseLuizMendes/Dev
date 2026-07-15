
<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script>
		(function () {
			if (!window.matchMedia) {
				return;
			}
			var isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			if (!isReduced) {
				return;
			}
			document.documentElement.classList.add("is-reduced-motion");
			window.okdSmoothScrollDisabled = true;
		})();
	</script>
		<script>
		(function () {
			try {
				if (
					sessionStorage.getItem("okdPageTx") === "1" &&
					window.matchMedia &&
					!window.matchMedia("(prefers-reduced-motion: reduce)").matches
				) {
					document.documentElement.classList.add("okd-pt-entering");
				}
			} catch (e) {}
		})();
	</script>
		<style id="okd-inline-css-view-transitions-gsap-css" type="text/css">
/**
 * GSAP column curtain mode — cross-document View Transitions off.
 *
 * With `navigation: auto`, supporting browsers still snapshot and composite the
 * outgoing/incoming documents; that can produce a brief flash alongside the overlay.
 * `navigation: none` keeps a normal full navigation so only the curtain is visible.
 *
 * https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@view-transition
 */

@view-transition {
    navigation: none;
}
</style>
<style id="okd-inline-css-reset-css" type="text/css">
/**
 * The New CSS Reset - version 1.11.3
 * https://github.com/elad2412/the-new-css-reset
 * License: MIT
 */

*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    position: relative;
}

html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
}

a,
button {
    cursor: revert;
}

ol,
ul,
menu,
summary {
    list-style: none;
}

ol {
    counter-reset: revert;
}

img {
    max-inline-size: 100%;
    max-block-size: 100%;
}

table {
    border-collapse: collapse;
}

input,
textarea {
    -webkit-user-select: auto;
}

textarea {
    white-space: revert;
}

meter {
    -webkit-appearance: revert;
    appearance: revert;
}

:where(pre) {
    all: revert;
    box-sizing: border-box;
}

::placeholder {
    color: unset;
}

:where([hidden]) {
    display: none;
}

:where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
}

:where([draggable="true"]) {
    -webkit-user-drag: element;
}

::-webkit-details-marker {
    display: none;
}
</style>
<title>Cipher Digital - Built for Hyperscale</title>

<!-- The SEO Framework by Sybre Waaijer -->
<meta name="robots" content="max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
<link rel="canonical" href="https://cipherdigital.com/" />
<meta name="description" content="Rapidly scaling the energy capabilities of today, to power the potential of tomorrow." />
<meta name="theme-color" content="#abd233" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="en_US" />
<meta property="og:site_name" content="Cipher Digital" />
<meta property="og:title" content="Cipher Digital - Built for Hyperscale" />
<meta property="og:description" content="Rapidly scaling the energy capabilities of today, to power the potential of tomorrow." />
<meta property="og:url" content="https://cipherdigital.com/" />
<meta property="og:image" content="https://cipherdigital.com/wp-content/uploads/2026/04/Open-Graph_2.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Cipher Digital - Built for Hyperscale" />
<meta name="twitter:description" content="Rapidly scaling the energy capabilities of today, to power the potential of tomorrow." />
<meta name="twitter:image" content="https://cipherdigital.com/wp-content/uploads/2026/04/Open-Graph_2.png" />
<script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":"https://cipherdigital.com/#/schema/WebSite","url":"https://cipherdigital.com/","name":"Cipher Digital","description":"Built for Hyperscale","inLanguage":"en-US","potentialAction":{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://cipherdigital.com/search/{search_term_string}/"},"query-input":"required name=search_term_string"},"publisher":{"@id":"https://cipherdigital.com/#/schema/Organization"}},{"@type":"WebPage","@id":"https://cipherdigital.com/","url":"https://cipherdigital.com/","name":"Cipher Digital - Built for Hyperscale","description":"Rapidly scaling the energy capabilities of today, to power the potential of tomorrow.","inLanguage":"en-US","isPartOf":{"@id":"https://cipherdigital.com/#/schema/WebSite"},"breadcrumb":{"@type":"BreadcrumbList","@id":"https://cipherdigital.com/#/schema/BreadcrumbList","itemListElement":{"@type":"ListItem","position":1,"name":"Cipher Digital"}},"potentialAction":{"@type":"ReadAction","target":"https://cipherdigital.com/"},"about":{"@id":"https://cipherdigital.com/#/schema/Organization"}},{"@type":"Organization","@id":"https://cipherdigital.com/#/schema/Organization","name":"Cipher Digital","url":"https://cipherdigital.com/","sameAs":["https://x.com/CipherInc","https://www.linkedin.com/company/cipherdigitalinc/"],"logo":{"@type":"ImageObject","url":"https://cipherdigital.com/wp-content/uploads/2026/03/cropped-favicon.png","contentUrl":"https://cipherdigital.com/wp-content/uploads/2026/03/cropped-favicon.png","width":512,"height":512,"contentSize":"21733"}}]}</script>
<!-- / The SEO Framework by Sybre Waaijer | 13.10ms meta | 1.21ms boot -->

<link rel='dns-prefetch' href='//cdn.jsdelivr.net' />
<style id="wp-img-auto-sizes-contain-inline-css">
img:is([sizes=auto i],[sizes^="auto," i]){contain-intrinsic-size:3000px 1500px}
/*# sourceURL=wp-img-auto-sizes-contain-inline-css */
</style>
<link rel='stylesheet' id='okd-view-transitions-css' href='https://cipherdigital.com/wp-content/themes/okd/static/css/view-transitions-gsap.css?ver=1779486584' media='all' />
<style id="global-styles-inline-css">
:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--hypergreen: #abd233;--wp--preset--color--error: #E43A3A;--wp--preset--color--neutral-110: #0d0e10;--wp--preset--color--neutral-100: #141618;--wp--preset--color--neutral-90: #202427;--wp--preset--color--neutral-80: #2d3438;--wp--preset--color--neutral-70: #3d454b;--wp--preset--color--neutral-60: #4c555c;--wp--preset--color--neutral-50: #5a636a;--wp--preset--color--neutral-40: #939ca2;--wp--preset--color--neutral-30: #c4ccd1;--wp--preset--color--neutral-20: #e4e9ed;--wp--preset--color--neutral-10: #eff0f1;--wp--preset--color--neutral-05: #f5f6f7;--wp--preset--color--neutral-0: #ffffff;--wp--preset--color--base: #ffffff;--wp--preset--color--contrast: #0d0e10;--wp--preset--color--accent-4: #939ca2;--wp--preset--color--accent-5: #e4e9ed;--wp--preset--color--accent-6: #c4ccd1;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--font-size--h-1: clamp(41px, calc(-5.666667px + 5.833333vw), 69px);--wp--preset--font-size--h-2: clamp(36px, calc(1px + 4.375vw), 57px);--wp--preset--font-size--h-3: clamp(32px, calc(5.333333px + 3.333333vw), 48px);--wp--preset--font-size--h-4: clamp(29px, calc(10.666667px + 2.291667vw), 40px);--wp--preset--font-size--h-5: clamp(26px, calc(14.333333px + 1.458333vw), 33px);--wp--preset--font-size--h-6: clamp(23px, calc(14.666667px + 1.041667vw), 28px);--wp--preset--font-size--body-lg: 19px;--wp--preset--font-size--body-md: 16px;--wp--preset--font-size--body-sm: 13px;--wp--preset--font-size--body-xs: 12px;--wp--preset--font-family--sans: articulat-cf, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, Adwaita Sans, Cantarell, Ubuntu, roboto, noto, helvetica, arial, sans-serif;--wp--preset--font-family--mono: Roboto Mono, Menlo, Consolas, Monaco, Adwaita Mono, Liberation Mono, Lucida Console, monospace;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--spacing--8: 8px;--wp--preset--spacing--16: 16px;--wp--preset--spacing--24: 24px;--wp--preset--spacing--32: 32px;--wp--preset--spacing--48: 48px;--wp--preset--spacing--72: 72px;--wp--preset--spacing--96: 96px;--wp--preset--spacing--128: 128px;--wp--preset--spacing--164: 164px;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);--wp--custom--body--lg--font-weight: 400;--wp--custom--body--lg--letter-spacing: 0.01em;--wp--custom--body--lg--line-height: 1.5;--wp--custom--body--md--font-weight: 400;--wp--custom--body--md--letter-spacing: 0.01em;--wp--custom--body--md--line-height: 1.5;--wp--custom--body--sm--font-weight: 400;--wp--custom--body--sm--letter-spacing: 0.02em;--wp--custom--body--sm--line-height: 1.5;--wp--custom--body--xs--font-weight: 400;--wp--custom--body--xs--letter-spacing: 0.01em;--wp--custom--body--xs--line-height: 1.5;}:root { --wp--style--global--content-size: 100%;--wp--style--global--wide-size: 100%; }:where(body) { margin: 0; }.wp-site-blocks > .alignleft { float: left; margin-right: 2em; }.wp-site-blocks > .alignright { float: right; margin-left: 2em; }.wp-site-blocks > .aligncenter { justify-content: center; margin-left: auto; margin-right: auto; }:where(.wp-site-blocks) > * { margin-block-start: 24px; margin-block-end: 0; }:where(.wp-site-blocks) > :first-child { margin-block-start: 0; }:where(.wp-site-blocks) > :last-child { margin-block-end: 0; }:root { --wp--style--block-gap: 24px; }:root :where(.is-layout-flow) > :first-child{margin-block-start: 0;}:root :where(.is-layout-flow) > :last-child{margin-block-end: 0;}:root :where(.is-layout-flow) > *{margin-block-start: 24px;margin-block-end: 0;}:root :where(.is-layout-constrained) > :first-child{margin-block-start: 0;}:root :where(.is-layout-constrained) > :last-child{margin-block-end: 0;}:root :where(.is-layout-constrained) > *{margin-block-start: 24px;margin-block-end: 0;}:root :where(.is-layout-flex){gap: 24px;}:root :where(.is-layout-grid){gap: 24px;}.is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}.is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}.is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}.is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}.is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}body{background-color: var(--wp--preset--color--neutral-100);color: #fff;font-family: var(--wp--preset--font-family--sans);font-size: var(--wp--preset--font-size--body-md);font-weight: 400;letter-spacing: 0.01em;line-height: 1.5;padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}a:where(:not(.wp-element-button)){color: var(--wp--preset--color--accent);}h1, h2, h3, h4, h5, h6{font-family: var(--wp--preset--font-family--sans);}h1{font-size: var(--wp--preset--font-size--h1);font-weight: 400;letter-spacing: -0.01em;line-height: 1;}h2{font-size: var(--wp--preset--font-size--h2);font-weight: 400;letter-spacing: -0.01em;line-height: 1.05;}h3{font-size: var(--wp--preset--font-size--h3);font-weight: 400;letter-spacing: -0.01em;line-height: 1.05;}h4{font-size: var(--wp--preset--font-size--h4);font-weight: 400;letter-spacing: -0.01em;line-height: 1.1;}h5{font-size: var(--wp--preset--font-size--h5);font-weight: 400;letter-spacing: -0.01em;line-height: 1.1;}h6{font-size: var(--wp--preset--font-size--h6);font-weight: 400;letter-spacing: -0.01em;line-height: 1.1;}:root :where(.wp-element-button, .wp-block-button__link){background-color: #32373c;border-width: 0;color: #fff;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;letter-spacing: inherit;line-height: inherit;padding-top: calc(0.667em + 2px);padding-right: calc(1.333em + 2px);padding-bottom: calc(0.667em + 2px);padding-left: calc(1.333em + 2px);text-decoration: none;text-transform: inherit;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-hypergreen-color{color: var(--wp--preset--color--hypergreen) !important;}.has-error-color{color: var(--wp--preset--color--error) !important;}.has-neutral-110-color{color: var(--wp--preset--color--neutral-110) !important;}.has-neutral-100-color{color: var(--wp--preset--color--neutral-100) !important;}.has-neutral-90-color{color: var(--wp--preset--color--neutral-90) !important;}.has-neutral-80-color{color: var(--wp--preset--color--neutral-80) !important;}.has-neutral-70-color{color: var(--wp--preset--color--neutral-70) !important;}.has-neutral-60-color{color: var(--wp--preset--color--neutral-60) !important;}.has-neutral-50-color{color: var(--wp--preset--color--neutral-50) !important;}.has-neutral-40-color{color: var(--wp--preset--color--neutral-40) !important;}.has-neutral-30-color{color: var(--wp--preset--color--neutral-30) !important;}.has-neutral-20-color{color: var(--wp--preset--color--neutral-20) !important;}.has-neutral-10-color{color: var(--wp--preset--color--neutral-10) !important;}.has-neutral-05-color{color: var(--wp--preset--color--neutral-05) !important;}.has-neutral-0-color{color: var(--wp--preset--color--neutral-0) !important;}.has-base-color{color: var(--wp--preset--color--base) !important;}.has-contrast-color{color: var(--wp--preset--color--contrast) !important;}.has-accent-4-color{color: var(--wp--preset--color--accent-4) !important;}.has-accent-5-color{color: var(--wp--preset--color--accent-5) !important;}.has-accent-6-color{color: var(--wp--preset--color--accent-6) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-hypergreen-background-color{background-color: var(--wp--preset--color--hypergreen) !important;}.has-error-background-color{background-color: var(--wp--preset--color--error) !important;}.has-neutral-110-background-color{background-color: var(--wp--preset--color--neutral-110) !important;}.has-neutral-100-background-color{background-color: var(--wp--preset--color--neutral-100) !important;}.has-neutral-90-background-color{background-color: var(--wp--preset--color--neutral-90) !important;}.has-neutral-80-background-color{background-color: var(--wp--preset--color--neutral-80) !important;}.has-neutral-70-background-color{background-color: var(--wp--preset--color--neutral-70) !important;}.has-neutral-60-background-color{background-color: var(--wp--preset--color--neutral-60) !important;}.has-neutral-50-background-color{background-color: var(--wp--preset--color--neutral-50) !important;}.has-neutral-40-background-color{background-color: var(--wp--preset--color--neutral-40) !important;}.has-neutral-30-background-color{background-color: var(--wp--preset--color--neutral-30) !important;}.has-neutral-20-background-color{background-color: var(--wp--preset--color--neutral-20) !important;}.has-neutral-10-background-color{background-color: var(--wp--preset--color--neutral-10) !important;}.has-neutral-05-background-color{background-color: var(--wp--preset--color--neutral-05) !important;}.has-neutral-0-background-color{background-color: var(--wp--preset--color--neutral-0) !important;}.has-base-background-color{background-color: var(--wp--preset--color--base) !important;}.has-contrast-background-color{background-color: var(--wp--preset--color--contrast) !important;}.has-accent-4-background-color{background-color: var(--wp--preset--color--accent-4) !important;}.has-accent-5-background-color{background-color: var(--wp--preset--color--accent-5) !important;}.has-accent-6-background-color{background-color: var(--wp--preset--color--accent-6) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-hypergreen-border-color{border-color: var(--wp--preset--color--hypergreen) !important;}.has-error-border-color{border-color: var(--wp--preset--color--error) !important;}.has-neutral-110-border-color{border-color: var(--wp--preset--color--neutral-110) !important;}.has-neutral-100-border-color{border-color: var(--wp--preset--color--neutral-100) !important;}.has-neutral-90-border-color{border-color: var(--wp--preset--color--neutral-90) !important;}.has-neutral-80-border-color{border-color: var(--wp--preset--color--neutral-80) !important;}.has-neutral-70-border-color{border-color: var(--wp--preset--color--neutral-70) !important;}.has-neutral-60-border-color{border-color: var(--wp--preset--color--neutral-60) !important;}.has-neutral-50-border-color{border-color: var(--wp--preset--color--neutral-50) !important;}.has-neutral-40-border-color{border-color: var(--wp--preset--color--neutral-40) !important;}.has-neutral-30-border-color{border-color: var(--wp--preset--color--neutral-30) !important;}.has-neutral-20-border-color{border-color: var(--wp--preset--color--neutral-20) !important;}.has-neutral-10-border-color{border-color: var(--wp--preset--color--neutral-10) !important;}.has-neutral-05-border-color{border-color: var(--wp--preset--color--neutral-05) !important;}.has-neutral-0-border-color{border-color: var(--wp--preset--color--neutral-0) !important;}.has-base-border-color{border-color: var(--wp--preset--color--base) !important;}.has-contrast-border-color{border-color: var(--wp--preset--color--contrast) !important;}.has-accent-4-border-color{border-color: var(--wp--preset--color--accent-4) !important;}.has-accent-5-border-color{border-color: var(--wp--preset--color--accent-5) !important;}.has-accent-6-border-color{border-color: var(--wp--preset--color--accent-6) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}.has-h-1-font-size{font-size: var(--wp--preset--font-size--h-1) !important;}.has-h-2-font-size{font-size: var(--wp--preset--font-size--h-2) !important;}.has-h-3-font-size{font-size: var(--wp--preset--font-size--h-3) !important;}.has-h-4-font-size{font-size: var(--wp--preset--font-size--h-4) !important;}.has-h-5-font-size{font-size: var(--wp--preset--font-size--h-5) !important;}.has-h-6-font-size{font-size: var(--wp--preset--font-size--h-6) !important;}.has-body-lg-font-size{font-size: var(--wp--preset--font-size--body-lg) !important;}.has-body-md-font-size{font-size: var(--wp--preset--font-size--body-md) !important;}.has-body-sm-font-size{font-size: var(--wp--preset--font-size--body-sm) !important;}.has-body-xs-font-size{font-size: var(--wp--preset--font-size--body-xs) !important;}.has-sans-font-family{font-family: var(--wp--preset--font-family--sans) !important;}.has-mono-font-family{font-family: var(--wp--preset--font-family--mono) !important;}
/*# sourceURL=global-styles-inline-css */
</style>

<link rel='stylesheet' id='contact-form-7-css' href='https://cipherdigital.com/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=6.1.6' media='all' />
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QFB6X2KXL7"></script>

<script>
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());
 gtag('config', 'G-QFB6X2KXL7');
</script><style class="wp-fonts-local">
@font-face{font-family:articulat-cf;font-style:normal;font-weight:400;font-display:swap;src:url('https://cipherdigital.com/wp-content/themes/okd/static/fonts/ArticulatCF-Normal.woff2') format('woff2');}
</style>
<link rel="icon" href="https://cipherdigital.com/wp-content/uploads/2026/03/cropped-favicon-32x32.png" sizes="32x32" />
<link rel="icon" href="https://cipherdigital.com/wp-content/uploads/2026/03/cropped-favicon-192x192.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://cipherdigital.com/wp-content/uploads/2026/03/cropped-favicon-180x180.png" />
<meta name="msapplication-TileImage" content="https://cipherdigital.com/wp-content/uploads/2026/03/cropped-favicon-270x270.png" />
<style id="wp-block-group-inline-css">
.wp-block-group{box-sizing:border-box}:where(.wp-block-group.wp-block-group-is-layout-constrained){position:relative}
/*# sourceURL=https://cipherdigital.com/wp-includes/blocks/group/style.min.css */
</style>

<style id="blockstudio-tailwind">:root,:host{--font-sans:var(--wp--preset--font-family--sans);--font-mono:var(--wp--preset--font-family--mono);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}*,::after,::before,::backdrop,::file-selector-button{box-sizing:border-box;margin:0;padding:0;border:0 solid}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji');font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea,::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;border-radius:0;background-color:transparent;opacity:1}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type='button'],[type='reset'],[type='submit']),::file-selector-button{-webkit-appearance:button;appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden='until-found'])){display:none !important}.pointer-events-none{pointer-events:none}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}</style>
<link rel='stylesheet' data-processed id='blockstudio-okd-header-style-scss' href='https://cipherdigital.com/wp-content/themes/okd/blockstudio/blocks/header/_dist/style-b321296498e15e856a4aa17adc8b5e64.css?ver=1779737838'><link rel='stylesheet' data-processed id='blockstudio-okd-ctext-style-scss' href='https://cipherdigital.com/wp-content/themes/okd/blockstudio/blocks/ctext/_dist/style-2fc50d37df7811ff628a4fb9765cddc0.css?ver=1779544698'><link rel='stylesheet' data-processed id='blockstudio-okd-hero-fs-headline-style-scss' href='https://cipherdigital.com/wp-content/themes/okd/blockstudio/blocks/hero-fs-headline/_dist/style-7acf847bd3929536f04a71c72fc74b71.css?ver=1779544698'><link rel='stylesheet' data-processed id='blockstudio-okd-footer-style-scss' href='https://cipherdigital.com/wp-content/themes/okd/blockstudio/blocks/footer/_dist/style-2fc50d37df7811ff628a4fb9765cddc0.css?ver=1779544698'><link rel='stylesheet' data-processed id='blockstudio-okd-horiz-scroll-style-scss' href='https://cipherdigital.com/wp-content/themes/okd/blockstudio/blocks/horiz-scroll/_dist/style-2fc50d37df7811ff628a4fb9765cddc0.css?ver=1779544698'><link rel='stylesheet' data-processed id='blockstudio-okd-metrics-style-scss' href='https://cipherdigital.com/wp-content/themes/okd/blockstudio/blocks/metrics/_dist/style-2fc50d37df7811ff628a4fb9765cddc0.css?ver=1779544698'><link rel='stylesheet'  id='blockstudio-blockstudio-3457f03e5bfb-5-0-1-dist-locomotive-scroll-css' href='https://cipherdigital.com/wp-content/themes/okd/blockstudio/assets/_dist/modules/locomotive-scroll/5.0.1-dist-locomotive-scroll.css?ver=1779487109'><link rel='stylesheet'  id='blockstudio-blockstudio-3457f03e5bfb-1-3-18-dist-lenis-css' href='https://cipherdigital.com/wp-content/themes/okd/blockstudio/assets/_dist/modules/lenis/1.3.18-dist-lenis.css?ver=1779486579'><link rel='stylesheet' data-processed id='blockstudio-blockstudio-3457f03e5bfb-global-styles-scss' href='https://cipherdigital.com/wp-content/themes/okd/blockstudio/assets/_dist/global-styles-3ac036748dee846d2964f15789f26de2.css?ver=1779544697'></head>
<body class="home wp-singular page-template-default page page-id-87 wp-theme-okd okd-frontend">

	<div id="okd-page-transition" class="okd-page-transition" aria-hidden="true">
			<span class="okd-page-transition__col"></span>
			<span class="okd-page-transition__col"></span>
			<span class="okd-page-transition__col"></span>
			<span class="okd-page-transition__col"></span>
			<span class="okd-page-transition__col"></span>
			<span class="okd-page-transition__col"></span>
	</div>

<header class="header wp-block-okd-header">
		<div class="header_inline">
        <div class="okd-block-container -no-padding inline_shell-wrap">
            <div class="inline_shell u-grid">
                <div class="inline_brand">
                    <a class="inline_logo" href="https://cipherdigital.com/" aria-label="Cipher" data-scroll-top-only="true">
                        <svg class="inline_logo_img" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 176 26" preserveaspectratio="xMinYMid meet" aria-hidden="true" focusable="false">
                            <path fill="#eff0f1" d="M39.787 11.46c0-5.643 3.138-8.732 7.807-8.732 3.526 0 6.276 1.777 6.762 5.498h-2.482c-.534-2.213-2.165-3.309-4.354-3.309-3.26 0-5.18 2.457-5.18 6.543 0 4.085 1.896 6.566 5.18 6.566 2.19 0 3.82-1.095 4.354-3.33h2.482c-.486 3.745-3.236 5.52-6.787 5.52-4.646 0-7.782-3.09-7.782-8.756M57.157 2.218c.779 0 1.46.656 1.46 1.46 0 .802-.681 1.459-1.46 1.459s-1.459-.632-1.459-1.46c0-.827.68-1.459 1.46-1.459M55.94 7.326h2.457v12.648H55.94zM60.708 7.326h2.457v1.993c.754-1.386 2.36-2.237 4.232-2.237 2.82 0 5.642 1.969 5.642 6.567s-2.821 6.566-5.642 6.566c-1.872 0-3.478-.851-4.232-2.237v6.615h-2.457zm6.176 10.822c1.97 0 3.82-1.41 3.82-4.5s-1.848-4.5-3.82-4.5-3.843 1.411-3.843 4.5 1.896 4.5 3.843 4.5M80.14 9.149c-1.993 0-3.38 1.24-3.38 3.501v7.321h-2.457V2.948h2.457v6.908h.074c.22-.95 1.435-2.772 4.255-2.772 2.482 0 4.476 1.435 4.476 5.01v7.88h-2.457v-7.321c0-2.262-.974-3.502-2.968-3.502zM86.732 13.673c0-4.646 2.772-6.591 6.032-6.591s5.764 1.969 5.764 6.396c0 .437-.024.68-.073.949H89.09c.196 2.65 1.533 3.868 3.795 3.868 1.557 0 2.748-.559 3.285-2.043h2.189c-.754 2.821-2.919 3.966-5.498 3.966-3.405 0-6.13-1.994-6.13-6.543zm9.46-1.093c-.048-2.214-1.288-3.575-3.452-3.575-2.019 0-3.405 1.166-3.624 3.575zM100.148 7.326h2.458v2.918h.073c.366-1.483 1.557-3.065 3.868-3.065.317 0 .656.025.949.122v2.067a6 6 0 0 0-.925-.073c-2.359 0-3.965 1.533-3.965 4.354v6.322h-2.458V7.323zM113.987 2.948h5.813c5.352 0 8.051 3.065 8.051 8.512 0 5.446-2.699 8.511-8.051 8.511h-5.813zm5.569 14.812c4.037 0 5.715-2.018 5.715-6.298s-1.678-6.299-5.715-6.299h-3.04v12.6h3.04zM130.984 2.218c.779 0 1.46.656 1.46 1.46a1.48 1.48 0 0 1-1.46 1.459 1.463 1.463 0 0 1-1.459-1.46c0-.827.681-1.459 1.459-1.459m-1.217 5.108h2.457v12.648h-2.457zM134.12 20.97h2.165c.073 1.434 1.63 2.164 3.404 2.164 2.091 0 3.795-.998 3.795-3.429V17.59h-.049c-.779 1.313-2.409 2.09-4.183 2.09-2.772 0-5.498-1.824-5.498-6.297 0-4.474 2.748-6.299 5.498-6.299 1.777 0 3.404.778 4.183 2.091h.049V7.328h2.457v12.38c0 4.353-3.551 5.351-6.203 5.351-2.507 0-5.594-.876-5.618-4.085zm5.718-3.332c1.945 0 3.77-1.361 3.77-4.256 0-2.894-1.823-4.231-3.77-4.231s-3.771 1.337-3.771 4.232c0 2.894 1.801 4.255 3.771 4.255M149.35 2.218c.779 0 1.459.656 1.459 1.46 0 .802-.68 1.459-1.459 1.459a1.463 1.463 0 0 1-1.459-1.46c0-.827.681-1.459 1.459-1.459m-1.215 5.108h2.457v12.648h-2.457zM154.045 16.762V9.271h-2.067V7.326h2.067V4.139h2.458v3.187h2.506V9.27h-2.506v7.076c0 1.24.412 1.801 1.776 1.801.293 0 .51 0 .901-.048v1.85a6.2 6.2 0 0 1-1.582.195c-2.115 0-3.55-.9-3.55-3.38zM159.663 16.665c0-2.433 1.776-3.429 4.036-3.697l3.138-.366c1.167-.147 1.557-.367 1.557-.755v-.341c0-2.018-1.047-2.555-2.821-2.555s-2.845.534-2.845 2.14v.293h-2.36v-.51c0-2.53 1.777-3.795 5.254-3.795 3.478 0 5.23 1.337 5.23 4.403v8.49h-2.311v-2.043h-.098c-.244.485-1.435 2.286-4.549 2.286-2.359 0-4.231-1.046-4.231-3.55m4.841 1.63c2.675 0 3.893-1.655 3.893-3.016v-1.386c-.171.268-.486.436-1.728.583l-2.384.317c-1.582.195-2.165.754-2.165 1.752 0 1.191.852 1.752 2.384 1.752zM172.772 2.948h2.458v17.026h-2.458z"></path>
                            <path fill="#abd233" d="M27.376 14.369a2.928 2.928 0 1 0 0-5.857 2.928 2.928 0 1 0 0 5.857m-.04 8.514a2.928 2.928 0 1 0 0-5.857 2.928 2.928 0 1 0 0 5.857M10.25 17.046a2.928 2.928 0 1 0 0 5.856 2.928 2.928 0 1 0 0-5.856m0-8.515a2.928 2.928 0 1 0 0 5.857 2.928 2.928 0 1 0 0-5.857m8.543 8.515a2.928 2.928 0 1 0 0 5.856 2.928 2.928 0 1 0 0-5.856m0-8.515a2.928 2.928 0 1 0 0 5.857 2.928 2.928 0 1 0 0-5.857"></path>
                            <path class="inline_logo_img_dot -a" fill="#abd233" d="M0 2.948a2.928 2.928 0 1 1 5.857 0 2.928 2.928 0 1 1-5.857 0"></path>
                            <path class="inline_logo_img_dot -b" fill="#abd233" d="M0 2.948a2.928 2.928 0 1 1 5.857 0 2.928 2.928 0 1 1-5.857 0"></path>
                            <path class="inline_logo_img_dot -c" fill="#abd233" d="M15.904 2.948a2.928 2.928 0 1 1 5.857 0 2.928 2.928 0 1 1-5.857 0"></path>
                            <path class="inline_logo_img_dot -d" fill="#abd233" d="M27.376 5.857a2.928 2.928 0 1 0 0-5.857 2.928 2.928 0 1 0 0 5.857"></path>
                        </svg>
                    </a>
                </div>

                <div class="inline_toggle-wrap">
                    <button type="button" class="inline_toggle" aria-expanded="false" aria-controls="okd-site-menu" aria-haspopup="dialog" data-label-open="Open menu" data-label-close="Close menu" aria-label="Open menu">
                        <span class="nav_menu" aria-hidden="true">
                            <span class="menu_dot -upper-left"></span>
                            <span class="menu_dot -upper-right"></span>
                            <span class="menu_dot -center"></span>
                            <span class="menu_dot -lower-left"></span>
                            <span class="menu_dot -lower-right"></span>
                        </span>
                    </button>
                </div>

                <nav class="inline_nav header_nav" aria-label="Primary">
                                                                    <a class="header_nav_link u-btn--1 -inline" href="/company" aria-label="Company" target="_self"><span class="btn_label" data-button-animate-chars aria-hidden="true">Company</span></a>                                                                    <a class="header_nav_link u-btn--1 -inline" href="/infrastructure" aria-label="Infrastructure" target="_self"><span class="btn_label" data-button-animate-chars aria-hidden="true">Infrastructure</span></a>                                                                    <a class="header_nav_link u-btn--1 -inline" href="/insights" aria-label="Insights" target="_self"><span class="btn_label" data-button-animate-chars aria-hidden="true">Insights</span></a>                                                                    <a class="header_nav_link u-btn--1 -inline" href="https://investors.cipherdigital.com/" aria-label="Investors" target="_blank" rel="noopener noreferrer"><span class="btn_label" data-button-animate-chars aria-hidden="true">Investors</span><span class="u-btn__icon-external" aria-hidden="true" data-u-btn-no-split><span class="u-btn__icon-external-viewport"><span class="u-btn__icon-external-track"><svg class="u-btn__icon-external-svg" xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewbox="0 0 7 7" fill="none" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.36703 0.000976562C6.37081 0.00090299 6.37494 0 6.37874 0C6.69606 0.000295429 6.95394 0.257814 6.95394 0.575195V5.8125C6.95394 6.12988 6.69605 6.3874 6.37874 6.3877C6.06118 6.3877 5.80355 6.13006 5.80355 5.8125V1.93457L0.977378 6.7959C0.753769 7.02073 0.391472 7.02064 0.167807 6.7959C-0.0559357 6.57054 -0.0559359 6.20485 0.167807 5.97949L4.96175 1.15039H1.16585C0.848356 1.15039 0.590765 0.892669 0.590659 0.575195C0.590659 0.257632 0.848291 0 1.16585 0H6.35726C6.36053 1.13284e-06 6.36377 0.000921122 6.36703 0.000976562Z"></path></svg><svg class="u-btn__icon-external-svg" xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewbox="0 0 7 7" fill="none" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.36703 0.000976562C6.37081 0.00090299 6.37494 0 6.37874 0C6.69606 0.000295429 6.95394 0.257814 6.95394 0.575195V5.8125C6.95394 6.12988 6.69605 6.3874 6.37874 6.3877C6.06118 6.3877 5.80355 6.13006 5.80355 5.8125V1.93457L0.977378 6.7959C0.753769 7.02073 0.391472 7.02064 0.167807 6.7959C-0.0559357 6.57054 -0.0559359 6.20485 0.167807 5.97949L4.96175 1.15039H1.16585C0.848356 1.15039 0.590765 0.892669 0.590659 0.575195C0.590659 0.257632 0.848291 0 1.16585 0H6.35726C6.36053 1.13284e-06 6.36377 0.000921122 6.36703 0.000976562Z"></path></svg></span></span></span></a>                                                                    <a class="header_nav_link u-btn--1 -inline" href="/careers" aria-label="Careers" target="_self"><span class="btn_label" data-button-animate-chars aria-hidden="true">Careers</span></a>                                    </nav>

                                    <div class="inline_cta-wrap">
                        <a class="inline_cta-btn u-btn--1 -on-dark" href="/contact" aria-label="Contact" target="_self"><span class="btn_label" data-button-animate-chars aria-hidden="true">Contact</span></a>                    </div>
                            </div>
            <div class="okd-block-container-lines"></div>
        </div>
	</div>

		<div id="okd-site-menu" class="header_mobile" role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden="true" inert data-lenis-prevent>
		<div class="mobile_inner">
			<nav class="mobile_nav" aria-label="Primary">
														<a class="mobile_nav_link" href="/company" aria-label="Company" target="_self"><span class="btn_label" data-button-animate-chars aria-hidden="true">Company</span></a>														<a class="mobile_nav_link" href="/infrastructure" aria-label="Infrastructure" target="_self"><span class="btn_label" data-button-animate-chars aria-hidden="true">Infrastructure</span></a>														<a class="mobile_nav_link" href="/insights" aria-label="Insights" target="_self"><span class="btn_label" data-button-animate-chars aria-hidden="true">Insights</span></a>														<a class="mobile_nav_link" href="https://investors.cipherdigital.com/" aria-label="Investors" target="_blank" rel="noopener noreferrer"><span class="btn_label" data-button-animate-chars aria-hidden="true">Investors</span><span class="u-btn__icon-external" aria-hidden="true" data-u-btn-no-split><span class="u-btn__icon-external-viewport"><span class="u-btn__icon-external-track"><svg class="u-btn__icon-external-svg" xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewbox="0 0 7 7" fill="none" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.36703 0.000976562C6.37081 0.00090299 6.37494 0 6.37874 0C6.69606 0.000295429 6.95394 0.257814 6.95394 0.575195V5.8125C6.95394 6.12988 6.69605 6.3874 6.37874 6.3877C6.06118 6.3877 5.80355 6.13006 5.80355 5.8125V1.93457L0.977378 6.7959C0.753769 7.02073 0.391472 7.02064 0.167807 6.7959C-0.0559357 6.57054 -0.0559359 6.20485 0.167807 5.97949L4.96175 1.15039H1.16585C0.848356 1.15039 0.590765 0.892669 0.590659 0.575195C0.590659 0.257632 0.848291 0 1.16585 0H6.35726C6.36053 1.13284e-06 6.36377 0.000921122 6.36703 0.000976562Z"></path></svg><svg class="u-btn__icon-external-svg" xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewbox="0 0 7 7" fill="none" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.36703 0.000976562C6.37081 0.00090299 6.37494 0 6.37874 0C6.69606 0.000295429 6.95394 0.257814 6.95394 0.575195V5.8125C6.95394 6.12988 6.69605 6.3874 6.37874 6.3877C6.06118 6.3877 5.80355 6.13006 5.80355 5.8125V1.93457L0.977378 6.7959C0.753769 7.02073 0.391472 7.02064 0.167807 6.7959C-0.0559357 6.57054 -0.0559359 6.20485 0.167807 5.97949L4.96175 1.15039H1.16585C0.848356 1.15039 0.590765 0.892669 0.590659 0.575195C0.590659 0.257632 0.848291 0 1.16585 0H6.35726C6.36053 1.13284e-06 6.36377 0.000921122 6.36703 0.000976562Z"></path></svg></span></span></span></a>														<a class="mobile_nav_link" href="/careers" aria-label="Careers" target="_self"><span class="btn_label" data-button-animate-chars aria-hidden="true">Careers</span></a>								<div class="okd-block-container-lines"></div>
			</nav>
			<div class="mobile_mobile_footer">
									<a class="mobile_cta u-btn--1 -wide -on-dark" href="/contact" aria-label="Get in Touch" target="_self"><span class="btn_label" data-button-animate-chars aria-hidden="true">Get in Touch</span></a>													<div class="mobile_copyright">&copy; 2026 Cipher Digital Inc.</div>
													<nav class="mobile_terms" aria-label="Legal">
													<a class="mobile_terms_link" href="/terms-of-use/" aria-label="Terms of Use" target="_self"><span class="btn_label" data-button-animate-chars aria-hidden="true">Terms of Use</span></a>													<a class="mobile_terms_link" href="/privacy-policy/" aria-label="Privacy Policy" target="_self"><span class="btn_label" data-button-animate-chars aria-hidden="true">Privacy Policy</span></a>											</nav>
							</div>
		</div>
	</div>
</header>
<main>
<section class="hero-fs-headline -theme-neutral-100 wp-block-okd-hero-fs-headline" data-hero-fsh-init="1">
    	<div class="hero-fs-headline__bg" aria-hidden="true">
		<div class="okd-c-media okd-c-media--block hero-fs-headline__media-el" aria-hidden="true" data-scroll="" data-scroll-speed="-0.2"><video class="okd-c-media__video hero-fs-headline__media-video" playsinline muted autoplay data-okd-video-candidates='{"default":{"mov":"","movMime":"","webm":"https://cipherdigital.com/wp-content/uploads/2026/04/Cipher_Hero_60fps.webm","webmMime":"video/webm","mp4":"https://cipherdigital.com/wp-content/uploads/2026/04/Cipher_Hero_60fps.mp4","mp4Mime":"video/mp4","hls":""},"alts":[{"mq":"(orientation: portrait)","mov":"","movMime":"","webm":"https://cipherdigital.com/wp-content/uploads/2026/04/Cipher_Hero_60fps_Mobile.webm","webmMime":"video/webm","mp4":"https://cipherdigital.com/wp-content/uploads/2026/04/Cipher_Hero_60fps_Mobile.mp4","mp4Mime":"video/mp4","hls":""}]}' fetchpriority="high"><source src="https://cipherdigital.com/wp-content/uploads/2026/04/Cipher_Hero_60fps.webm" type="video/webm"></source><source src="https://cipherdigital.com/wp-content/uploads/2026/04/Cipher_Hero_60fps.mp4" type="video/mp4"></source></video></div>
	</div>
	<div class="hero-fs-headline__shell">
		<div class="hero-fs-headline__main">
			<div class="hero-fs-headline__main-inner u-grid" style="--gap-col: 0; --gap: 0;">
				<div class="hero-fs-headline__main-spacer" aria-hidden="true" style="--md: 1/2; --lg: 1/2; --xl: 1/3;"></div>
				<div class="hero-fs-headline__main-title" style="--sm: 1/-1; --md: 3/7; --lg: 3/7; --xl: 3/13;"><div class="hero-fs-headline__title-wrap"><span class="hero-fs-headline__title-rule" aria-hidden="true"></span><h1 class="hero-fs-headline__title">Built for<br>
Hyperscale.</h1></div></div>
			</div>
			<div class="hero-fs-headline__main-line hero-fs-headline__main-line--h" aria-hidden="true">
				<span class="hero-fs-headline__main-line-bar"></span>
			</div>
		</div>
		<div class="hero-fs-headline__spacer" aria-hidden="true">
			<div class="hero-fs-headline__spacer-lines">
				<span class="hero-fs-headline__spacer-line hero-fs-headline__spacer-line--a"></span>
				<span class="hero-fs-headline__spacer-line hero-fs-headline__spacer-line--b"></span>
			</div>
		</div>
		
			<div class="hero-fs-headline__logos" aria-label="Partner logos">
				<div class="hero-fs-headline__logos-bar">
					<div class="hero-fs-headline__logos-label">
						<p class="hero-fs-headline__logos-label-text">Trusted by</p>
					</div>
					<div class="hero-fs-headline__logos-rail">
						<div class="okd-marquee-advanced hero-fs-headline__logos-marquee" data-marquee-duplicate="4" data-marquee-scroll-direction-target="" data-marquee-direction="left" data-marquee-status="normal" data-marquee-speed="28" data-marquee-scroll-speed="10">
							<div class="okd-marquee-advanced__scroll" data-marquee-scroll-target="">
								<div class="okd-marquee-advanced__collection" data-marquee-collection-target="">
									<div class="okd-marquee-advanced__item hero-fs-headline__logos-item"><img src="https://cipherdigital.com/wp-content/uploads/2026/03/google.svg" class="hero-fs-headline__logos-img" alt="" loading="lazy" decoding="async"></div><div class="okd-marquee-advanced__item hero-fs-headline__logos-item"><img src="https://cipherdigital.com/wp-content/uploads/2026/03/aws.svg" class="hero-fs-headline__logos-img" alt="" loading="lazy" decoding="async"></div><div class="okd-marquee-advanced__item hero-fs-headline__logos-item"><img src="https://cipherdigital.com/wp-content/uploads/2026/03/fluidstack.svg" class="hero-fs-headline__logos-img" alt="" loading="lazy" decoding="async"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
	<div class="okd-block-container-lines" aria-hidden="true"></div>
</section>


<section class="wp-block-group alignfull is-layout-flow wp-block-group-is-layout-flow"><section class="horiz-scroll -theme-neutral-100 wp-block-okd-horiz-scroll">
    <div class="horiz-scroll__pin" data-horiz-scroll-pin>
        <div class="horiz-scroll__viewport" data-horiz-scroll-viewport>
            <script type="application/json" data-hs-copy-config>{"holdScrollPx":300,"windowLeadPx":100,"slideWindowExtras":[{"holdExtraPx":-160},{"leadExtraPx":300,"holdExtraPx":200,"endExtendPx":300}]}</script>
            <div class="horiz-scroll__track" data-horiz-scroll-track>
                <div class="horiz-scroll__slide" data-horiz-scroll-slide="1">
                    <div class="u-grid -pad horiz-scroll__grid" style="--gap: 0; --gap-col: 0;">
                        <div class="horiz-scroll__cell horiz-scroll__cell--s1-media" data-hs-rect="s1" style="--sm: 1/-1; --md: 1/4; --lg: 1/4; --xl: 2/7;"></div>
                        <div class="horiz-scroll__cell horiz-scroll__text-marker" data-hs-text-rect="t1" style="--sm: 1/-1; --md: 4/7; --lg: 4/7; --xl: 7/13;" aria-hidden="true"></div>
                    </div>
                </div>
                <div class="horiz-scroll__slide" data-horiz-scroll-slide="2">
                    <div class="u-grid -pad horiz-scroll__grid" style="--gap: 0; --gap-col: 0;">
                        <div class="horiz-scroll__cell horiz-scroll__text-marker" data-hs-text-rect="t2" style="--sm: 1/-1; --md: 1/5; --lg: 1/5; --xl: 2/8;" aria-hidden="true"></div>
                        <div class="horiz-scroll__cell horiz-scroll__cell--s2-media" data-hs-rect="s2" style="--sm: 1/-1; --md: 5/6; --lg: 5/6; --xl: 9/12;"></div>
                    </div>
                </div>
                <div class="horiz-scroll__slide horiz-scroll__slide--3" data-horiz-scroll-slide="3">
                    <div class="horiz-scroll__slide3-wrap">
                        <div class="u-grid -pad horiz-scroll__grid horiz-scroll__slide3-grid" style="--gap: 0; --gap-col: 0;">
                            <div class="horiz-scroll__cell horiz-scroll__cell--s3" data-hs-rect="s3" aria-hidden="true" style="--sm: 1/-1; --md: 1/-1; --lg: 1/-1; --xl: 4/10;"></div>
                            <div class="horiz-scroll__cell horiz-scroll__text-marker" data-hs-text-rect="t3" style="--sm: 1/-1; --md: 1/-1; --lg: 1/-1; --xl: 4/10; --row-sm: 2; --row-md: 2; --row-lg: 2; --row-xl: 2;" aria-hidden="true"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="horiz-scroll__float" data-hs-float><div class="horiz-scroll__frame" data-hs-frame data-hs-float-magnet data-hs-magnetic-strength="34"><span class="horiz-scroll__frame-magnetic" data-hs-magnetic-inner><figure class="horiz-scroll__figure" aria-hidden="true"><span class="horiz-scroll__frame-diagonal" data-hs-frame-diagonal aria-hidden="true"><svg class="horiz-scroll__frame-diagonal-svg" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 100 100" preserveaspectratio="none" aria-hidden="true"><path vector-effect="non-scaling-stroke" fill="none" stroke="currentColor" stroke-width="1" d="M0 100 L100 0"></path></svg></span><span class="horiz-scroll__figure-stack" data-hs-figure-stack><div class="horiz-scroll__figure-layer horiz-scroll__figure-layer--1" data-hs-figure-layer="0" aria-hidden="true"><div class="okd-c-media horiz-scroll__figure-media"><video class="horiz-scroll__figure-video okd-c-media__video" playsinline muted loop autoplay><source src="https://cipherdigital.com/wp-content/uploads/2026/04/4019389d-71ed1c21.webm" type="video/webm"></source><source src="https://cipherdigital.com/wp-content/uploads/2026/04/4019389d-71ed1c21.mp4" type="video/mp4"></source></video></div></div><div class="horiz-scroll__figure-layer horiz-scroll__figure-layer--2" data-hs-figure-layer="1" aria-hidden="true"><div class="okd-c-media horiz-scroll__figure-media"><video class="horiz-scroll__figure-video okd-c-media__video" playsinline muted loop autoplay><source src="https://cipherdigital.com/wp-content/uploads/2026/04/695c0d26-b27bcdf8-1.webm" type="video/webm"></source><source src="https://cipherdigital.com/wp-content/uploads/2026/04/695c0d26-b27bcdf8-1.mp4" type="video/mp4"></source></video></div></div><div class="horiz-scroll__figure-layer horiz-scroll__figure-layer--3" data-hs-figure-layer="2" aria-hidden="true"><div class="okd-c-media horiz-scroll__figure-media"><img width="2560" height="1707" src="https://cipherdigital.com/wp-content/uploads/2026/03/Home_KPI-Image-scaled.webp" class="horiz-scroll__figure-img okd-c-media__img" alt="" loading="lazy" decoding="async" srcset="https://cipherdigital.com/wp-content/uploads/2026/03/Home_KPI-Image-scaled.webp 2560w, https://cipherdigital.com/wp-content/uploads/2026/03/Home_KPI-Image-300x200.webp 300w, https://cipherdigital.com/wp-content/uploads/2026/03/Home_KPI-Image-1024x683.webp 1024w, https://cipherdigital.com/wp-content/uploads/2026/03/Home_KPI-Image-768x512.webp 768w, https://cipherdigital.com/wp-content/uploads/2026/03/Home_KPI-Image-1536x1024.webp 1536w, https://cipherdigital.com/wp-content/uploads/2026/03/Home_KPI-Image-2048x1365.webp 2048w" sizes="auto, (max-width: 2560px) 100vw, 2560px"></div></div></span></figure><span class="horiz-scroll__media-line horiz-scroll__media-line--left" aria-hidden="true"></span><span class="horiz-scroll__media-line horiz-scroll__media-line--right" aria-hidden="true"></span><span class="horiz-scroll__media-line horiz-scroll__media-line--top" aria-hidden="true"></span><span class="horiz-scroll__media-line horiz-scroll__media-line--bottom" aria-hidden="true"></span><span class="horiz-scroll__media-circle horiz-scroll__media-circle--tl" aria-hidden="true"></span><span class="horiz-scroll__media-circle horiz-scroll__media-circle--tr" aria-hidden="true"></span><span class="horiz-scroll__media-circle horiz-scroll__media-circle--bl" aria-hidden="true"></span><span class="horiz-scroll__media-circle horiz-scroll__media-circle--br" aria-hidden="true"></span></span></div></div>
            <div class="horiz-scroll__copy-float" data-hs-copy-float><div class="horiz-scroll__copy-inner" data-hs-copy-inner><div class="horiz-scroll__copy-panels" data-hs-copy-panels><div class="horiz-scroll__copy-panel" data-hs-copy-panel="0"><p class="horiz-scroll__split horiz-scroll__split--1" data-hs-copy-slot="text">Cipher develops and operates industrial-scale data centers engineered for next-generation compute at the highest standards of innovation, precision, and excellence.</p></div><div class="horiz-scroll__copy-panel" data-hs-copy-panel="1"><p class="horiz-scroll__split horiz-scroll__split--2" data-hs-copy-slot="text">Cipher brings together deep expertise across power sourcing, construction, engineering, operations, real estate, and technology to deliver high-quality data centers purpose built for HPC workloads.</p><div class="horiz-scroll__copy-cta" data-hs-copy-cta><a class="maside__cta u-btn--1" href="https://cipherdigital.com/company/" aria-label="Our Expertise" target="_self"><span class="btn_label" data-button-animate-chars aria-hidden="true">Our Expertise</span></a></div></div><div class="horiz-scroll__copy-panel" data-hs-copy-panel="2"><p class="horiz-scroll__split horiz-scroll__split--3" data-hs-copy-slot="text">Rapidly scaling data center infrastructure today, to power the potential of tomorrow.</p></div></div></div></div>
            <div class="horiz-scroll__gutter-dots" aria-hidden="true" data-hs-gutter-dots>
                <span class="horiz-scroll__gutter-dot horiz-scroll__gutter-dot--tl"></span>
                <span class="horiz-scroll__gutter-dot horiz-scroll__gutter-dot--bl"></span>
                <span class="horiz-scroll__gutter-dot horiz-scroll__gutter-dot--tr"></span>
                <span class="horiz-scroll__gutter-dot horiz-scroll__gutter-dot--br"></span>
            </div>
        </div>
    </div>
    <div class="okd-block-container-lines" aria-hidden="true"></div>
</section>

<section class="metrics -theme-neutral-100 wp-block-okd-metrics">
    <div class="metrics__bg-slot pointer-events-none" aria-hidden="true"><div class="okd-c-media okd-c-media--metrics-bg metrics__bg-el" aria-hidden="true" data-scroll="" data-scroll-speed="-0.2"><img width="2560" height="1707" src="https://cipherdigital.com/wp-content/uploads/2026/03/Home_KPI-Image-scaled.webp" class="okd-c-media__img metrics__bg-img" alt="" loading="lazy" decoding="async" srcset="https://cipherdigital.com/wp-content/uploads/2026/03/Home_KPI-Image-scaled.webp 2560w, https://cipherdigital.com/wp-content/uploads/2026/03/Home_KPI-Image-300x200.webp 300w, https://cipherdigital.com/wp-content/uploads/2026/03/Home_KPI-Image-1024x683.webp 1024w, https://cipherdigital.com/wp-content/uploads/2026/03/Home_KPI-Image-768x512.webp 768w, https://cipherdigital.com/wp-content/uploads/2026/03/Home_KPI-Image-1536x1024.webp 1536w, https://cipherdigital.com/wp-content/uploads/2026/03/Home_KPI-Image-2048x1365.webp 2048w" sizes="auto, (max-width: 2560px) 100vw, 2560px"></div></div>
    <div class="metrics__content okd-block-container">
        <hgroup class="metrics__hgroup"><div class="metrics__heading" style="font-size: clamp(26.00px, calc(26.00px + (33.00 - 26.00) * ((100cqw - 420.00px) / (1620.00 - 420.00))), 33.00px); line-height: 1.1;" data-okd-scroll-text-reveal>Rapidly scaling data center infrastructure today, to power the potential of tomorrow.</div></hgroup>
        <div class="metrics__grid-wrap">
            <div class="u-grid -no-gap metrics__grid" style="--span-md: span 3; --span-lg: span 2; --span-xl: span 4;">
                <div class="metrics__item"><div class="metrics__decor" aria-hidden="true"><span class="metrics__line metrics__line--top"></span><span class="metrics__line metrics__line--right"></span><span class="metrics__line metrics__line--bottom"></span><span class="metrics__dot metrics__dot--tl"></span><span class="metrics__dot metrics__dot--tr"></span><span class="metrics__dot metrics__dot--bl"></span><span class="metrics__dot metrics__dot--br"></span></div><div class="metrics__value-row"><span class="metrics__number" data-metrics-odometer data-odometer-duration="1.2" data-odometer-start="000" data-odometer-target="700">000</span><span class="metrics__suffix">MW</span></div><div class="metrics__label">Contracted Capacity</div></div><div class="metrics__item"><div class="metrics__decor" aria-hidden="true"><span class="metrics__line metrics__line--top"></span><span class="metrics__line metrics__line--right"></span><span class="metrics__line metrics__line--bottom"></span><span class="metrics__dot metrics__dot--tl"></span><span class="metrics__dot metrics__dot--tr"></span><span class="metrics__dot metrics__dot--bl"></span><span class="metrics__dot metrics__dot--br"></span></div><div class="metrics__value-row"><span class="metrics__number" data-metrics-odometer data-odometer-duration="1.2" data-odometer-start="0.0" data-odometer-target="3.3">0.0</span><span class="metrics__suffix">GW</span></div><div class="metrics__label">Pipeline Capacity</div></div><div class="metrics__item"><div class="metrics__decor" aria-hidden="true"><span class="metrics__line metrics__line--top"></span><span class="metrics__line metrics__line--right"></span><span class="metrics__line metrics__line--bottom"></span><span class="metrics__dot metrics__dot--tl"></span><span class="metrics__dot metrics__dot--tr"></span><span class="metrics__dot metrics__dot--bl"></span><span class="metrics__dot metrics__dot--br"></span></div><div class="metrics__value-row"><span class="metrics__number" data-metrics-odometer data-odometer-duration="1.2" data-odometer-start="000" data-odometer-target="207">000</span><span class="metrics__suffix">MW</span></div><div class="metrics__label">Operating Capacity</div></div>
            </div>
        </div>
        <div class="metrics__cta-wrap"><a class="metrics__cta u-btn--1" href="https://cipherdigital.com/infrastructure/" aria-label="Our Infrastructure" target="_self" data-okd-scroll-reveal=""><span class="btn_label" data-button-animate-chars aria-hidden="true">Our Infrastructure</span></a></div>
    </div>
    <div class="okd-block-container-lines" aria-hidden="true"></div>
</section></section>


<section class="ctext -theme-neutral-100 wp-block-okd-ctext">
	<div class="ctext__row okd-block-container">
		<div class="ctext__copy">
			<div class="ctext__title" data-okd-scroll-text-reveal>Investor Resources</div>
			<div class="ctext__text" data-okd-scroll-text-reveal>For more information and the latest company updates, please visit our Investor Resources site.</div>
			<a class="ctext__cta u-btn--1" href="https://investors.cipherdigital.com/" aria-label="View Resources" target="_blank" rel="noopener noreferrer" data-okd-scroll-reveal=""><span class="btn_label" data-button-animate-chars aria-hidden="true">View Resources</span><span class="u-btn__icon-external" aria-hidden="true" data-u-btn-no-split><span class="u-btn__icon-external-viewport"><span class="u-btn__icon-external-track"><svg class="u-btn__icon-external-svg" xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewbox="0 0 7 7" fill="none" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.36703 0.000976562C6.37081 0.00090299 6.37494 0 6.37874 0C6.69606 0.000295429 6.95394 0.257814 6.95394 0.575195V5.8125C6.95394 6.12988 6.69605 6.3874 6.37874 6.3877C6.06118 6.3877 5.80355 6.13006 5.80355 5.8125V1.93457L0.977378 6.7959C0.753769 7.02073 0.391472 7.02064 0.167807 6.7959C-0.0559357 6.57054 -0.0559359 6.20485 0.167807 5.97949L4.96175 1.15039H1.16585C0.848356 1.15039 0.590765 0.892669 0.590659 0.575195C0.590659 0.257632 0.848291 0 1.16585 0H6.35726C6.36053 1.13284e-06 6.36377 0.000921122 6.36703 0.000976562Z"></path></svg><svg class="u-btn__icon-external-svg" xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewbox="0 0 7 7" fill="none" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.36703 0.000976562C6.37081 0.00090299 6.37494 0 6.37874 0C6.69606 0.000295429 6.95394 0.257814 6.95394 0.575195V5.8125C6.95394 6.12988 6.69605 6.3874 6.37874 6.3877C6.06118 6.3877 5.80355 6.13006 5.80355 5.8125V1.93457L0.977378 6.7959C0.753769 7.02073 0.391472 7.02064 0.167807 6.7959C-0.0559357 6.57054 -0.0559359 6.20485 0.167807 5.97949L4.96175 1.15039H1.16585C0.848356 1.15039 0.590765 0.892669 0.590659 0.575195C0.590659 0.257632 0.848291 0 1.16585 0H6.35726C6.36053 1.13284e-06 6.36377 0.000921122 6.36703 0.000976562Z"></path></svg></span></span></span></a>
		</div>
	</div>
	<div class="okd-block-container-lines" aria-hidden="true"></div>
</section></main>
<footer class="footer wp-block-okd-footer">
			<div class="footer_media footer_media--bg" aria-hidden="true" data-scroll data-scroll-css-progress="" data-scroll-position="start, end">
			<div class="okd-c-media okd-c-media--footer footer_media_inner" data-scroll="" data-scroll-speed="-0.1"><video class="okd-c-media__video footer_media_video" playsinline muted data-okd-video-candidates='{"default":{"mov":"","movMime":"","webm":"https://cipherdigital.com/wp-content/uploads/2026/04/COMP_ONBOX-CipherDigital_APPS_Arch-Sun_01-1.webm","webmMime":"video/webm","mp4":"https://cipherdigital.com/wp-content/uploads/2026/03/COMP_ONBOX-CipherDigital_APPS_Arch-Sun_01-1.mp4","mp4Mime":"video/mp4","hls":""},"alts":[{"mq":"(orientation: portrait)","mov":"","movMime":"","webm":"https://cipherdigital.com/wp-content/uploads/2026/04/Web_Footer-Mobile.webm","webmMime":"video/webm","mp4":"https://cipherdigital.com/wp-content/uploads/2026/04/Web_Footer-Mobile.mp4","mp4Mime":"video/mp4","hls":""}]}'><source src="https://cipherdigital.com/wp-content/uploads/2026/04/COMP_ONBOX-CipherDigital_APPS_Arch-Sun_01-1.webm" type="video/webm"></source><source src="https://cipherdigital.com/wp-content/uploads/2026/03/COMP_ONBOX-CipherDigital_APPS_Arch-Sun_01-1.mp4" type="video/mp4"></source></video></div>		</div>
		<div class="footer_block_inner">
		<div class="footer_main okd-block-container">
			<div class="footer_main_inner">
                <div class="main_eyebrow">
                                    </div>

				<div class="main_content u-grid">
					<div class="main_col main_col--heading">
													<div class="footer_heading" data-okd-scroll-text-reveal>
								Building the future<br>
of digital progress.							</div>
											</div>

					<div class="main_col main_col--aside">
													<nav class="footer_nav" aria-label="Footer" data-okd-scroll-reveal>
																										<div class="footer_nav_item">
										<a class="footer_nav_link u-btn--1 -dot-indicator" href="/company" aria-label="Company" target="_self">Company</a>									</div>
																										<div class="footer_nav_item">
										<a class="footer_nav_link u-btn--1 -dot-indicator" href="https://investors.cipherdigital.com/" aria-label="Investor Resources" target="_blank" rel="noopener noreferrer">Investor Resources</a>									</div>
																										<div class="footer_nav_item">
										<a class="footer_nav_link u-btn--1 -dot-indicator" href="/infrastructure/" aria-label="Infrastructure" target="_self">Infrastructure</a>									</div>
																										<div class="footer_nav_item">
										<a class="footer_nav_link u-btn--1 -dot-indicator" href="/careers/" aria-label="Careers" target="_self">Careers</a>									</div>
																										<div class="footer_nav_item">
										<a class="footer_nav_link u-btn--1 -dot-indicator" href="/insights/" aria-label="Insights" target="_self">Insights</a>									</div>
																										<div class="footer_nav_item">
										<a class="footer_nav_link u-btn--1 -dot-indicator" href="/terms-of-use/" aria-label="Terms of Use" target="_self">Terms of Use</a>									</div>
																										<div class="footer_nav_item">
										<a class="footer_nav_link u-btn--1 -dot-indicator" href="/privacy-policy/" aria-label="Privacy Policy" target="_self">Privacy Policy</a>									</div>
															</nav>
						
													<div class="footer_cta-wrap" data-okd-scroll-reveal>
								<a class="footer_cta-btn u-btn--1" href="/contact/" aria-label="Get in Touch" target="_self"><span class="btn_label" data-button-animate-chars aria-hidden="true">Get in Touch</span></a>							</div>
						
													<ul class="footer_socials" aria-label="Social media" data-okd-scroll-reveal>
																										<li class="footer_social_item">
										<a class="footer_social_link" href="https://www.linkedin.com/company/cipherdigitalinc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
											<img src="https://cipherdigital.com/wp-content/uploads/2026/03/social-linkedin.svg" class="footer_social_icon" alt="" loading="lazy" decoding="async">										</a>
									</li>
																										<li class="footer_social_item">
										<a class="footer_social_link" href="https://x.com/CipherInc" target="_blank" rel="noopener noreferrer" aria-label="X">
											<img src="https://cipherdigital.com/wp-content/uploads/2026/03/social-x.svg" class="footer_social_icon" alt="" loading="lazy" decoding="async">										</a>
									</li>
															</ul>
											</div>
				</div>
			</div>
		</div>

		<div class="footer_bottom okd-block-container">
			<div class="footer_bottom_inner">
				<div class="footer_bottom_row">
					<div class="footer_copyright">
						&copy; 2026 Cipher Digital Inc.					</div>

					<p class="footer_credit">
						Site by 						<a class="footer_credit-link u-btn--1 -inline -underline-retract" href="https://www.onboxcreative.com/" aria-label="ONBOX" target="_blank" rel="noopener noreferrer"><span class="btn_label" data-button-animate-chars aria-hidden="true">ONBOX</span></a>					</p>
				</div>

			</div>
		</div>

	</div>
    <div class="okd-block-container-lines" aria-hidden="true"></div>
</footer>

<script type="speculationrules">
{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/wp-*.php","/wp-admin/*","/wp-content/uploads/*","/wp-content/*","/wp-content/plugins/*","/wp-content/themes/okd/*","/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}
</script>
<script id="gsap-js" src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js?ver=3.14.2"></script>
<script id="gsap-scrolltrigger-js" src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/ScrollTrigger.min.js?ver=3.14.2"></script>
<script id="gsap-splittext-js" src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/SplitText.min.js?ver=3.14.2"></script>
<script id="wp-hooks-js" src="https://cipherdigital.com/wp-includes/js/dist/hooks.min.js?ver=7496969728ca0f95732d"></script>
<script id="wp-i18n-js" src="https://cipherdigital.com/wp-includes/js/dist/i18n.min.js?ver=781d11515ad3d91786ec"></script>
<script id="wp-i18n-js-after">
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
//# sourceURL=wp-i18n-js-after
</script>
<script id="swv-js" src="https://cipherdigital.com/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=6.1.6"></script>
<script id="contact-form-7-js-before">
var wpcf7 = {
    "api": {
        "root": "https:\/\/cipherdigital.com\/wp-json\/",
        "namespace": "contact-form-7\/v1"
    }
};
//# sourceURL=contact-form-7-js-before
</script>
<script id="contact-form-7-js" src="https://cipherdigital.com/wp-content/plugins/contact-form-7/includes/js/index.js?ver=6.1.6"></script>
<script id="okd-media-responsive-video-js" src="https://cipherdigital.com/wp-content/themes/okd/static/js/okd-media-responsive-video.js?ver=1779486585"></script>
<script type='module' data-processed id='blockstudio-okd-header-script-js' src='https://cipherdigital.com/wp-content/themes/okd/blockstudio/blocks/header/_dist/script-1779486581.js?ver=1779486581'></script><script type='module' data-processed id='blockstudio-okd-hero-fs-headline-script-js' src='https://cipherdigital.com/wp-content/themes/okd/blockstudio/blocks/hero-fs-headline/_dist/script-1779486581.js?ver=1779486581'></script><script type='module' data-processed id='blockstudio-okd-footer-script-view-js' src='https://cipherdigital.com/wp-content/themes/okd/blockstudio/blocks/footer/_dist/script.view-1779544698.js?ver=1779544698'></script><script type='module' data-processed id='blockstudio-okd-horiz-scroll-script-js' src='https://cipherdigital.com/wp-content/themes/okd/blockstudio/blocks/horiz-scroll/_dist/script-1779486581.js?ver=1779486581'></script><script type='module' data-processed id='blockstudio-okd-metrics-script-js' src='https://cipherdigital.com/wp-content/themes/okd/blockstudio/blocks/metrics/_dist/script-1779486581.js?ver=1779486581'></script><script type='module' data-processed id='blockstudio-blockstudio-3457f03e5bfb-global-scripts-js' src='https://cipherdigital.com/wp-content/themes/okd/blockstudio/assets/_dist/global-scripts-1779486579.js?ver=1779486579'></script></body>
</html>
