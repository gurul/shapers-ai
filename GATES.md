# Gates: Shapers AI design refresh

OWNS: client/src/**, app/layout.tsx, public/fonts/**, package.json, pnpm-lock.yaml, GATES.md

Scope: Give the existing homepage a cohesive editorial design, preserve its content and destinations, and verify responsive navigation and production readiness.

- [x] G1: The redesigned application passes TypeScript checking.
  CHECK: pnpm check && node -e "console.log('TYPECHECK_PASSED')"
  EXPECT: TYPECHECK_PASSED
  EVIDENCE: exit=0; shell=/bin/sh; cwd=/Users/gurucharan/Documents/personal/shapers-ai; path=a1243dd9c479/21 entries; output=TYPECHECK_PASSED | [WARN] The "pnpm" field in package.json is no longer read by pnpm. The following keys were ignored: "pnpm.overrides". See https://pnpm.io/settings for the new home of each setting.

- [x] G2: The application builds successfully for production.
  CHECK: pnpm build && node -e "console.log('BUILD_PASSED')"
  EXPECT: BUILD_PASSED
  EVIDENCE: exit=0; shell=/bin/sh; cwd=/Users/gurucharan/Documents/personal/shapers-ai; path=a1243dd9c479/21 entries; output=(Use `node --trace-deprecation ...` to show where the warning was created) | ⚠ metadataBase property in metadata export is not set for resolving social open graph or twitter images, using "http://localhost:3000". See https://nextjs.org/docs

- [x] G3: Desktop and mobile layouts are visually reviewed, with readable text, resolved images, and no horizontal overflow.
  EVIDENCE: Manual browser review at 1440, 884, 390, and 320 px. At mobile widths, document scrollWidth equals clientWidth (375/375 and 305/305); at desktop 869/869. All 12 images loaded. Reviewed hero, project, team/partners, and contact layouts. The overflow measurement first detected overflowing foliage before the viewport clipping fix, providing a positive control.

- [x] G4: Navigation and the mobile menu work, project and contact destinations are preserved, and keyboard focus is visible.
  EVIDENCE: Browser: mobile menu opens with aria-expanded=true, Escape closes it and returns focus to Open menu with a 2px outline. Selecting Our work/Get involved closes the menu and reaches #projects/#contact. All local anchors resolve. GitHub, Google Forms, LinkedIn, partner/social destinations match the original sources; no forms submitted.

- [x] G5: Custom local fonts load; general page motion and the floating motion controller are removed.
  EVIDENCE: Browser: document.fonts.status=loaded; computed heading/body fonts are local displayFont/bodyFont (Fraunces/Space Grotesk). Final DOM has zero motion controls and zero main elements with a CSS animation; computed scroll-behavior=auto. Removed reveal/leaf animation code and hover transforms.

- [x] G6: The bottom mark uses Morphicons, changes shape while visible, honors reduced-motion preferences, and replaces both orbit illustrations.
  EVIDENCE: Browser: bottom SVG changes from shape 2 (sparkle path) to shape 0 (asterisk path) while visible. Orbit elements are absent. Source review confirms Morphicons 1.7.1, reducedMotion=user/always, a live prefers-reduced-motion listener, visibility-gated intervals and cleanup; OS preference was reviewed in code, not toggled on the user’s computer.
