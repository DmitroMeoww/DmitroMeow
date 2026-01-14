import { writable } from 'svelte/store';
import '../app.css';
export const pink_theme = writable(`
:root {
  color-scheme: light dark;
}
@layer tokens {
  :root {
    --m3c-surface: light-dark(#fff8f8, #120d0f);
    --m3c-surface-container-lowest: light-dark(#fff, #000);
    --m3c-surface-container-low: light-dark(#fff0f4, #191114);
    --m3c-surface-container: light-dark(#fbe9ef, #20171b);
    --m3c-surface-container-high: light-dark(#f6e4e9, #271d21);
    --m3c-surface-container-highest: light-dark(#f2dde4, #2e2327);
    --m3c-on-surface: light-dark(#3b2f34, #f5e0e7);
    --m3c-on-surface-variant: light-dark(#6a5b61, #b9a6ad);
    --m3c-outline: light-dark(#87767c, #817177);
    --m3c-outline-variant: light-dark(#c0adb3, #52444a);
    --m3c-inverse-surface: light-dark(#120d0f, #fff8f8);
    --m3c-inverse-on-surface: light-dark(#a59a9d, #5b5356);
    --m3c-primary: light-dark(#854e69, #efb7cf);
    --m3c-on-primary: light-dark(#fff7f8, #5c3447);
    --m3c-primary-container: light-dark(#feb8d7, #70455a);
    --m3c-on-primary-container: light-dark(#66334d, #ffd9e8);
    --m3c-inverse-primary: light-dark(#feb8d7, #7e5267);
    --m3c-secondary: light-dark(#735763, #e0bdcb);
    --m3c-on-secondary: light-dark(#fff7f8, #523944);
    --m3c-secondary-container: light-dark(#fdd9e7, #4c343f);
    --m3c-on-secondary-container: light-dark(#654a56, #d8b6c4);
    --m3c-tertiary: light-dark(#71557c, #fae0ff);
    --m3c-on-tertiary: light-dark(#fff7fc, #664b71);
    --m3c-tertiary-container: #f1cefc;
    --m3c-on-tertiary-container: #5d4368;
    --m3c-error: light-dark(#a8364b, #f97386);
    --m3c-on-error: light-dark(#fff7f7, #490013);
    --m3c-error-container: light-dark(#f97386, #871c34);
    --m3c-on-error-container: light-dark(#6e0523, #ff97a3);
    --m3c-shadow: #000;
    --m3c-scrim: #000;
    --m3c-on-on-primary: light-dark(#844e69, #eeb7cf);
    --m3c-primary-container-subtle: light-dark(#ffcce2, #452033);
    --m3c-on-primary-container-subtle: light-dark(#703c56, #d19cb4);
    --m3c-secondary-container-subtle: light-dark(#f4d1df, #3c2530);
    --m3c-on-secondary-container-subtle: light-dark(#5f4551, #c3a2af);
    --m3c-tertiary-container-subtle: light-dark(#f1cefc, #3b2246);
    --m3c-on-tertiary-container-subtle: light-dark(#5d4368, #c0a0cb);
    --m3c-error-container-subtle: light-dark(#ffced2, #5f001c);
    --m3c-on-error-container-subtle: light-dark(#8f2339, #ff8796);
  }
}
`);

export const green_theme = writable(`
:root {
  color-scheme: light dark;
}
@layer tokens {
  :root {
    --m3c-surface: light-dark(#f8faf3, #0b0f0b);
    --m3c-surface-container-lowest: light-dark(#fff, #000);
    --m3c-surface-container-low: light-dark(#f0f5ec, #101510);
    --m3c-surface-container: light-dark(#eaf0e6, #151b15);
    --m3c-surface-container-high: light-dark(#e4eae0, #1b211b);
    --m3c-surface-container-highest: light-dark(#dde5d9, #202820);
    --m3c-on-surface: light-dark(#2d342d, #e0e8dc);
    --m3c-on-surface-variant: light-dark(#596158, #a5ada3);
    --m3c-outline: light-dark(#757d73, #6f786e);
    --m3c-outline-variant: light-dark(#acb4a9, #424a41);
    --m3c-inverse-surface: light-dark(#0b0f0b, #f8faf3);
    --m3c-inverse-on-surface: light-dark(#9b9e98, #525651);
    --m3c-primary: light-dark(#3c6944, #aad0ac);
    --m3c-on-primary: light-dark(#e9ffe7, #26472c);
    --m3c-primary-container: light-dark(#bcefc0, #385a3d);
    --m3c-on-primary-container: light-dark(#2e5b37, #c6edc7);
    --m3c-inverse-primary: light-dark(#cafecd, #456749);
    --m3c-secondary: light-dark(#516452, #b8ccb6);
    --m3c-on-secondary: light-dark(#eaffe7, #334434);
    --m3c-secondary-container: light-dark(#d3e8d1, #2e4030);
    --m3c-on-secondary-container: light-dark(#445645, #b0c5af);
    --m3c-tertiary: light-dark(#5b6331, #f6ffc0);
    --m3c-on-tertiary: light-dark(#f5ffbd, #5b6330);
    --m3c-tertiary-container: light-dark(#edf7b6, #e7f1b0);
    --m3c-on-tertiary-container: light-dark(#565e2c, #535b29);
    --m3c-error: light-dark(#a73b21, #f97758);
    --m3c-on-error: light-dark(#fff7f6, #450900);
    --m3c-error-container: light-dark(#fd795a, #85230a);
    --m3c-on-error-container: light-dark(#6e1400, #ff9b82);
    --m3c-shadow: #000;
    --m3c-scrim: #000;
    --m3c-on-on-primary: light-dark(#3b6843, #aad0ab);
    --m3c-primary-container-subtle: light-dark(#b4e6b8, #113319);
    --m3c-on-primary-container-subtle: light-dark(#295632, #8fb491);
    --m3c-secondary-container-subtle: light-dark(#cbe0c9, #1f3021);
    --m3c-on-secondary-container-subtle: light-dark(#3f5140, #9cb09b);
    --m3c-tertiary-container-subtle: light-dark(#d6e0a1, #282f02);
    --m3c-on-tertiary-container-subtle: light-dark(#495020, #a7b075);
    --m3c-error-container-subtle: light-dark(#ffcfc4, #5a0e00);
    --m3c-on-error-container-subtle: light-dark(#8e2910, #ff8a6e);
  }
}
`);

export const blue_theme = writable(`
:root {
  color-scheme: light dark;
}
@layer tokens {
  :root {
    --m3c-surface: light-dark(#f8f9fe, #0c0e11);
    --m3c-surface-container-lowest: light-dark(#fff, #000);
    --m3c-surface-container-low: light-dark(#f1f4f9, #101418);
    --m3c-surface-container: light-dark(#eaeef5, #151a1f);
    --m3c-surface-container-high: light-dark(#e4e8f0, #1b2025);
    --m3c-surface-container-highest: light-dark(#dde3eb, #20262d);
    --m3c-on-surface: light-dark(#2d333a, #e0e6ee);
    --m3c-on-surface-variant: light-dark(#5a6067, #a6acb4);
    --m3c-outline: light-dark(#757b83, #70767d);
    --m3c-outline-variant: light-dark(#adb2ba, #42484f);
    --m3c-inverse-surface: light-dark(#0c0e11, #f8f9fe);
    --m3c-inverse-on-surface: light-dark(#9b9da1, #535559);
    --m3c-primary: light-dark(#386386, #abcae9);
    --m3c-on-primary: light-dark(#f6f9ff, #23435d);
    --m3c-primary-container: light-dark(#acd6ff, #375570);
    --m3c-on-primary-container: light-dark(#1d4b6d, #cee6ff);
    --m3c-inverse-primary: light-dark(#acd6ff, #43627d);
    --m3c-secondary: light-dark(#526170, #b9c8da);
    --m3c-on-secondary: light-dark(#f6f9ff, #334250);
    --m3c-secondary-container: light-dark(#d4e4f6, #2e3d4b);
    --m3c-on-secondary-container: light-dark(#445362, #b1c1d2);
    --m3c-tertiary: light-dark(#5c5b85, #d9d6ff);
    --m3c-on-tertiary: light-dark(#fbf7ff, #494971);
    --m3c-tertiary-container: #cac7f8;
    --m3c-on-tertiary-container: #404068;
    --m3c-error: light-dark(#a83836, #fa746f);
    --m3c-on-error: light-dark(#fff7f6, #490006);
    --m3c-error-container: light-dark(#fa746f, #871f21);
    --m3c-on-error-container: light-dark(#6e0a12, #ff9993);
    --m3c-shadow: #000;
    --m3c-scrim: #000;
    --m3c-on-on-primary: light-dark(#386286, #aacae9);
    --m3c-primary-container-subtle: light-dark(#bddeff, #0b2e47);
    --m3c-on-primary-container-subtle: light-dark(#235072, #8faecd);
    --m3c-secondary-container-subtle: light-dark(#ccdcee, #1f2e3b);
    --m3c-on-secondary-container-subtle: light-dark(#3f4e5d, #9dadbe);
    --m3c-tertiary-container-subtle: light-dark(#d9d6ff, #29284e);
    --m3c-on-tertiary-container-subtle: light-dark(#494971, #a8a7d5);
    --m3c-error-container-subtle: light-dark(#ffcfcb, #60000a);
    --m3c-on-error-container-subtle: light-dark(#8f2526, #ff8983);
  }
}
`);
