/* ═══════════════════════════════════════════════════════════════
   Site colour themes.

   To switch the whole site (backgrounds, text, intro video) change
   ACTIVE_THEME below. 'velvet' is the original dark maroon palette,
   kept here verbatim so it can be restored with a one-word change.
   ═══════════════════════════════════════════════════════════════ */

export interface Theme {
  /** Page / section background. */
  bg: string;
  /** Raised surfaces — RSVP card, image-less event cards. */
  surface: string;
  /** Names, section headings, primary text. */
  heading: string;
  /** Running text — parents' names, closing message. */
  body: string;
  /** Gold used for text, icons and solid accents. */
  gold: string;
  /** RGB triplet of `gold`, for rgba() tints. */
  goldRgb: string;
  /** RGB triplet for hairline dividers and card borders. */
  lineRgb: string;
  /** Frosted pill behind the music / language toggles. */
  glass: string;
  inputBg: string;
  /** Solid fill painted over browser autofill backgrounds. */
  autofillBg: string;
  error: string;
  /** Intro curtain video and how it blends with `bg`. */
  introVideo: string;
  introBlend: 'lighten' | 'normal';
  confetti: string[];
}

export const THEMES = {
  /** Original dark theme (until Nov 2026). */
  velvet: {
    bg: '#1A0E0E',
    surface: '#1E1212',
    heading: '#F5EBD9',
    body: '#EDE6D6',
    gold: '#E0B84F',
    goldRgb: '224, 184, 79',
    lineRgb: '201, 154, 79',
    glass: 'rgba(26, 14, 14, 0.75)',
    inputBg: 'rgba(255, 255, 255, 0.06)',
    autofillBg: 'rgba(30, 18, 18, 1)',
    error: '#e57373',
    // The video's stage is pure black; 'lighten' swaps it for the maroon
    // behind it while leaving the brighter red curtains untouched.
    introVideo: '/curtain.mp4',
    introBlend: 'lighten',
    confetti: ['#C99A4F', '#E5C589', '#B91C1C', '#8B1A2B', '#F5EBD9'],
  },

  /** Lighter, dusty maroon — same ivory/gold text as velvet. */
  rosewood: {
    bg: '#4F2629',
    surface: '#5C2E32',
    heading: '#F5EBD9',
    body: '#EDE6D6',
    gold: '#E0B84F',
    goldRgb: '224, 184, 79',
    lineRgb: '201, 154, 79',
    glass: 'rgba(79, 38, 41, 0.75)',
    inputBg: 'rgba(255, 255, 255, 0.08)',
    autofillBg: 'rgba(92, 46, 50, 1)',
    error: '#FFB4AB',
    introVideo: '/curtain.mp4',
    introBlend: 'lighten',
    confetti: ['#C99A4F', '#E5C589', '#B91C1C', '#8B1A2B', '#F5EBD9'],
  },

  /** Light parchment theme. Contrast vs bg: heading 10:1, body 10.5:1, gold 4.7:1. */
  ivory: {
    bg: '#F7F0E3',
    surface: '#FFFBF4',
    heading: '#6E1A22',
    body: '#4E2F28',
    gold: '#8C6420',
    goldRgb: '140, 100, 32',
    lineRgb: '168, 124, 52',
    glass: 'rgba(255, 251, 244, 0.8)',
    inputBg: 'rgba(255, 255, 255, 0.7)',
    autofillBg: 'rgba(255, 251, 244, 1)',
    error: '#B3261E',
    // Pre-rendered from curtain.mp4 with the black stage keyed to `bg`.
    introVideo: '/curtain-ivory.mp4',
    introBlend: 'normal',
    confetti: ['#C99A4F', '#E5C589', '#B91C1C', '#8B1A2B', '#6E1A22'],
  },
} satisfies Record<string, Theme>;

export const ACTIVE_THEME: keyof typeof THEMES = 'rosewood';

export const THEME: Theme = THEMES[ACTIVE_THEME];

/** Gold for text sitting on dark imagery (photo overlays, the curtain) — same in every theme. */
export const GOLD_ON_DARK = '#E0B84F';
/** Ivory for text sitting on dark imagery — same in every theme. */
export const IVORY_ON_DARK = '#F5EBD9';
