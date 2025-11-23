import { writable } from 'svelte/store';

export const grey_theme = writable(`
@media (prefers-color-scheme: light) {
  :root {
    color-scheme: light;
  }
  :root, ::backdrop {
    --m3-scheme-background: 252 248 248;
    --m3-scheme-on-background: 28 27 27;
    --m3-scheme-surface: 252 248 248;
    --m3-scheme-surface-dim: 221 217 217;
    --m3-scheme-surface-bright: 252 248 248;
    --m3-scheme-surface-container-lowest: 255 255 255;
    --m3-scheme-surface-container-low: 246 243 242;
    --m3-scheme-surface-container: 241 237 236;
    --m3-scheme-surface-container-high: 235 231 231;
    --m3-scheme-surface-container-highest: 229 226 225;
    --m3-scheme-on-surface: 28 27 27;
    --m3-scheme-on-surface-variant: 68 71 72;
    --m3-scheme-outline: 116 120 120;
    --m3-scheme-outline-variant: 196 199 200;
    --m3-scheme-inverse-surface: 49 48 48;
    --m3-scheme-inverse-on-surface: 244 240 239;
    --m3-scheme-primary: 93 95 95;
    --m3-scheme-primary-dim: 81 83 83;
    --m3-scheme-on-primary: 255 255 255;
    --m3-scheme-primary-container: 255 255 255;
    --m3-scheme-on-primary-container: 116 118 118;
    --m3-scheme-primary-fixed: 226 226 226;
    --m3-scheme-primary-fixed-dim: 198 198 199;
    --m3-scheme-on-primary-fixed: 26 28 28;
    --m3-scheme-on-primary-fixed-variant: 69 71 71;
    --m3-scheme-inverse-primary: 198 198 199;
    --m3-scheme-secondary: 94 94 94;
    --m3-scheme-secondary-dim: 82 82 82;
    --m3-scheme-on-secondary: 255 255 255;
    --m3-scheme-secondary-container: 228 226 226;
    --m3-scheme-on-secondary-container: 100 100 100;
    --m3-scheme-secondary-fixed: 228 226 226;
    --m3-scheme-secondary-fixed-dim: 200 198 198;
    --m3-scheme-on-secondary-fixed: 27 28 28;
    --m3-scheme-on-secondary-fixed-variant: 71 71 71;
    --m3-scheme-tertiary: 93 95 95;
    --m3-scheme-tertiary-dim: 81 83 83;
    --m3-scheme-on-tertiary: 255 255 255;
    --m3-scheme-tertiary-container: 255 255 255;
    --m3-scheme-on-tertiary-container: 116 118 118;
    --m3-scheme-tertiary-fixed: 226 226 226;
    --m3-scheme-tertiary-fixed-dim: 198 198 199;
    --m3-scheme-on-tertiary-fixed: 26 28 28;
    --m3-scheme-on-tertiary-fixed-variant: 69 71 71;
    --m3-scheme-error: 186 26 26;
    --m3-scheme-error-dim: 168 7 16;
    --m3-scheme-on-error: 255 255 255;
    --m3-scheme-error-container: 255 218 214;
    --m3-scheme-on-error-container: 147 0 10;
    --m3-scheme-shadow: 0 0 0;
    --m3-scheme-scrim: 0 0 0;
    --m3-scheme-on-on-primary: 97 98 99;
    --m3-scheme-primary-container-subtle: 218 218 218;
    --m3-scheme-on-primary-container-subtle: 75 77 77;
    --m3-scheme-secondary-container-subtle: 219 217 217;
    --m3-scheme-on-secondary-container-subtle: 76 76 76;
    --m3-scheme-tertiary-container-subtle: 218 218 218;
    --m3-scheme-on-tertiary-container-subtle: 75 77 77;
    --m3-scheme-error-container-subtle: 255 207 201;
    --m3-scheme-on-error-container-subtle: 158 0 11;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
  }
  :root, ::backdrop {
    --m3-scheme-background: 20 19 19;
    --m3-scheme-on-background: 229 226 225;
    --m3-scheme-surface: 20 19 19;
    --m3-scheme-surface-dim: 20 19 19;
    --m3-scheme-surface-bright: 58 57 57;
    --m3-scheme-surface-container-lowest: 14 14 14;
    --m3-scheme-surface-container-low: 28 27 27;
    --m3-scheme-surface-container: 32 31 31;
    --m3-scheme-surface-container-high: 42 42 42;
    --m3-scheme-surface-container-highest: 53 52 52;
    --m3-scheme-on-surface: 229 226 225;
    --m3-scheme-on-surface-variant: 196 199 200;
    --m3-scheme-outline: 142 145 146;
    --m3-scheme-outline-variant: 68 71 72;
    --m3-scheme-inverse-surface: 229 226 225;
    --m3-scheme-inverse-on-surface: 49 48 48;
    --m3-scheme-primary: 255 255 255;
    --m3-scheme-primary-dim: 240 241 241;
    --m3-scheme-on-primary: 47 49 49;
    --m3-scheme-primary-container: 226 226 226;
    --m3-scheme-on-primary-container: 99 101 101;
    --m3-scheme-primary-fixed: 226 226 226;
    --m3-scheme-primary-fixed-dim: 198 198 199;
    --m3-scheme-on-primary-fixed: 26 28 28;
    --m3-scheme-on-primary-fixed-variant: 69 71 71;
    --m3-scheme-inverse-primary: 93 95 95;
    --m3-scheme-secondary: 200 198 198;
    --m3-scheme-secondary-dim: 228 226 226;
    --m3-scheme-on-secondary: 48 48 48;
    --m3-scheme-secondary-container: 73 73 73;
    --m3-scheme-on-secondary-container: 185 184 184;
    --m3-scheme-secondary-fixed: 228 226 226;
    --m3-scheme-secondary-fixed-dim: 200 198 198;
    --m3-scheme-on-secondary-fixed: 27 28 28;
    --m3-scheme-on-secondary-fixed-variant: 71 71 71;
    --m3-scheme-tertiary: 255 255 255;
    --m3-scheme-tertiary-dim: 240 241 241;
    --m3-scheme-on-tertiary: 47 49 49;
    --m3-scheme-tertiary-container: 226 226 226;
    --m3-scheme-on-tertiary-container: 99 101 101;
    --m3-scheme-tertiary-fixed: 226 226 226;
    --m3-scheme-tertiary-fixed-dim: 198 198 199;
    --m3-scheme-on-tertiary-fixed: 26 28 28;
    --m3-scheme-on-tertiary-fixed-variant: 69 71 71;
    --m3-scheme-error: 255 180 171;
    --m3-scheme-error-dim: 255 85 74;
    --m3-scheme-on-error: 105 0 5;
    --m3-scheme-error-container: 147 0 10;
    --m3-scheme-on-error-container: 255 218 214;
    --m3-scheme-shadow: 0 0 0;
    --m3-scheme-scrim: 0 0 0;
    --m3-scheme-on-on-primary: 175 176 177;
    --m3-scheme-primary-container-subtle: 55 57 58;
    --m3-scheme-on-primary-container-subtle: 187 188 188;
    --m3-scheme-secondary-container-subtle: 57 57 57;
    --m3-scheme-on-secondary-container-subtle: 189 188 187;
    --m3-scheme-tertiary-container-subtle: 55 57 58;
    --m3-scheme-on-tertiary-container-subtle: 187 188 188;
    --m3-scheme-error-container-subtle: 121 0 6;
    --m3-scheme-on-error-container-subtle: 255 164 154;
  }
}
`);

export const pink_theme = writable(`
@media (prefers-color-scheme: light) {
  :root {
    color-scheme: light;
  }
  :root, ::backdrop {
    --m3-scheme-background: 255 248 248;
    --m3-scheme-on-background: 59 47 52;
    --m3-scheme-surface: 255 248 248;
    --m3-scheme-surface-dim: 233 213 219;
    --m3-scheme-surface-bright: 255 248 248;
    --m3-scheme-surface-container-lowest: 255 255 255;
    --m3-scheme-surface-container-low: 255 240 244;
    --m3-scheme-surface-container: 251 233 239;
    --m3-scheme-surface-container-high: 246 228 233;
    --m3-scheme-surface-container-highest: 242 221 228;
    --m3-scheme-on-surface: 59 47 52;
    --m3-scheme-on-surface-variant: 106 91 97;
    --m3-scheme-outline: 135 118 124;
    --m3-scheme-outline-variant: 192 173 179;
    --m3-scheme-inverse-surface: 18 13 15;
    --m3-scheme-inverse-on-surface: 165 154 157;
    --m3-scheme-primary: 133 78 105;
    --m3-scheme-primary-dim: 119 66 93;
    --m3-scheme-on-primary: 255 247 248;
    --m3-scheme-primary-container: 254 184 215;
    --m3-scheme-on-primary-container: 102 51 77;
    --m3-scheme-primary-fixed: 254 184 215;
    --m3-scheme-primary-fixed-dim: 238 171 201;
    --m3-scheme-on-primary-fixed: 79 32 57;
    --m3-scheme-on-primary-fixed-variant: 112 60 86;
    --m3-scheme-inverse-primary: 254 184 215;
    --m3-scheme-secondary: 115 87 99;
    --m3-scheme-secondary-dim: 102 76 87;
    --m3-scheme-on-secondary: 255 247 248;
    --m3-scheme-secondary-container: 253 217 231;
    --m3-scheme-on-secondary-container: 101 74 86;
    --m3-scheme-secondary-fixed: 253 217 231;
    --m3-scheme-secondary-fixed-dim: 239 203 217;
    --m3-scheme-on-secondary-fixed: 81 56 67;
    --m3-scheme-on-secondary-fixed-variant: 111 84 96;
    --m3-scheme-tertiary: 113 85 124;
    --m3-scheme-tertiary-dim: 100 73 111;
    --m3-scheme-on-tertiary: 255 247 252;
    --m3-scheme-tertiary-container: 241 206 252;
    --m3-scheme-on-tertiary-container: 93 67 104;
    --m3-scheme-tertiary-fixed: 241 206 252;
    --m3-scheme-tertiary-fixed-dim: 227 192 238;
    --m3-scheme-on-tertiary-fixed: 73 48 84;
    --m3-scheme-on-tertiary-fixed-variant: 103 76 114;
    --m3-scheme-error: 168 54 75;
    --m3-scheme-error-dim: 107 2 33;
    --m3-scheme-on-error: 255 247 247;
    --m3-scheme-error-container: 249 115 134;
    --m3-scheme-on-error-container: 110 5 35;
    --m3-scheme-shadow: 0 0 0;
    --m3-scheme-scrim: 0 0 0;
    --m3-scheme-on-on-primary: 132 78 105;
    --m3-scheme-primary-container-subtle: 255 204 226;
    --m3-scheme-on-primary-container-subtle: 112 60 86;
    --m3-scheme-secondary-container-subtle: 244 209 223;
    --m3-scheme-on-secondary-container-subtle: 95 69 81;
    --m3-scheme-tertiary-container-subtle: 241 206 252;
    --m3-scheme-on-tertiary-container-subtle: 93 67 104;
    --m3-scheme-error-container-subtle: 255 206 210;
    --m3-scheme-on-error-container-subtle: 143 35 57;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
  }
  :root, ::backdrop {
    --m3-scheme-background: 18 13 15;
    --m3-scheme-on-background: 245 224 231;
    --m3-scheme-surface: 18 13 15;
    --m3-scheme-surface-dim: 18 13 15;
    --m3-scheme-surface-bright: 53 41 46;
    --m3-scheme-surface-container-lowest: 0 0 0;
    --m3-scheme-surface-container-low: 25 17 20;
    --m3-scheme-surface-container: 32 23 27;
    --m3-scheme-surface-container-high: 39 29 33;
    --m3-scheme-surface-container-highest: 46 35 39;
    --m3-scheme-on-surface: 245 224 231;
    --m3-scheme-on-surface-variant: 185 166 173;
    --m3-scheme-outline: 129 113 119;
    --m3-scheme-outline-variant: 82 68 74;
    --m3-scheme-inverse-surface: 255 248 248;
    --m3-scheme-inverse-on-surface: 91 83 86;
    --m3-scheme-primary: 239 183 207;
    --m3-scheme-primary-dim: 224 170 193;
    --m3-scheme-on-primary: 92 52 71;
    --m3-scheme-primary-container: 112 69 90;
    --m3-scheme-on-primary-container: 255 217 232;
    --m3-scheme-primary-fixed: 248 191 216;
    --m3-scheme-primary-fixed-dim: 233 178 202;
    --m3-scheme-on-primary-fixed: 76 38 57;
    --m3-scheme-on-primary-fixed-variant: 108 66 86;
    --m3-scheme-inverse-primary: 126 82 103;
    --m3-scheme-secondary: 224 189 203;
    --m3-scheme-secondary-dim: 210 176 189;
    --m3-scheme-on-secondary: 82 57 68;
    --m3-scheme-secondary-container: 76 52 63;
    --m3-scheme-on-secondary-container: 216 182 196;
    --m3-scheme-secondary-fixed: 253 217 231;
    --m3-scheme-secondary-fixed-dim: 239 203 217;
    --m3-scheme-on-secondary-fixed: 81 56 67;
    --m3-scheme-on-secondary-fixed-variant: 111 84 96;
    --m3-scheme-tertiary: 250 224 255;
    --m3-scheme-tertiary-dim: 241 206 252;
    --m3-scheme-on-tertiary: 102 75 113;
    --m3-scheme-tertiary-container: 241 206 252;
    --m3-scheme-on-tertiary-container: 93 67 104;
    --m3-scheme-tertiary-fixed: 241 206 252;
    --m3-scheme-tertiary-fixed-dim: 227 192 238;
    --m3-scheme-on-tertiary-fixed: 73 48 84;
    --m3-scheme-on-tertiary-fixed-variant: 103 76 114;
    --m3-scheme-error: 249 115 134;
    --m3-scheme-error-dim: 196 75 95;
    --m3-scheme-on-error: 73 0 19;
    --m3-scheme-error-container: 135 28 52;
    --m3-scheme-on-error-container: 255 151 163;
    --m3-scheme-shadow: 0 0 0;
    --m3-scheme-scrim: 0 0 0;
    --m3-scheme-on-on-primary: 238 183 207;
    --m3-scheme-primary-container-subtle: 69 32 51;
    --m3-scheme-on-primary-container-subtle: 209 156 180;
    --m3-scheme-secondary-container-subtle: 60 37 48;
    --m3-scheme-on-secondary-container-subtle: 195 162 175;
    --m3-scheme-tertiary-container-subtle: 59 34 70;
    --m3-scheme-on-tertiary-container-subtle: 192 160 203;
    --m3-scheme-error-container-subtle: 95 0 28;
    --m3-scheme-on-error-container-subtle: 255 135 150;
  }
}
`);

export const green_theme = writable(`
@media (prefers-color-scheme: light) {
  :root {
    color-scheme: light;
  }
  :root, ::backdrop {
    --m3-scheme-background: 248 250 243;
    --m3-scheme-on-background: 45 52 45;
    --m3-scheme-surface: 248 250 243;
    --m3-scheme-surface-dim: 212 220 209;
    --m3-scheme-surface-bright: 248 250 243;
    --m3-scheme-surface-container-lowest: 255 255 255;
    --m3-scheme-surface-container-low: 240 245 236;
    --m3-scheme-surface-container: 234 240 230;
    --m3-scheme-surface-container-high: 228 234 224;
    --m3-scheme-surface-container-highest: 221 229 217;
    --m3-scheme-on-surface: 45 52 45;
    --m3-scheme-on-surface-variant: 89 97 88;
    --m3-scheme-outline: 117 125 115;
    --m3-scheme-outline-variant: 172 180 169;
    --m3-scheme-inverse-surface: 11 15 11;
    --m3-scheme-inverse-on-surface: 155 158 152;
    --m3-scheme-primary: 60 105 68;
    --m3-scheme-primary-dim: 48 92 56;
    --m3-scheme-on-primary: 233 255 231;
    --m3-scheme-primary-container: 188 239 192;
    --m3-scheme-on-primary-container: 46 91 55;
    --m3-scheme-primary-fixed: 188 239 192;
    --m3-scheme-primary-fixed-dim: 175 225 178;
    --m3-scheme-on-primary-fixed: 27 72 38;
    --m3-scheme-on-primary-fixed-variant: 56 101 64;
    --m3-scheme-inverse-primary: 202 254 205;
    --m3-scheme-secondary: 81 100 82;
    --m3-scheme-secondary-dim: 69 88 70;
    --m3-scheme-on-secondary: 234 255 231;
    --m3-scheme-secondary-container: 211 232 209;
    --m3-scheme-on-secondary-container: 68 86 69;
    --m3-scheme-secondary-fixed: 211 232 209;
    --m3-scheme-secondary-fixed-dim: 197 218 196;
    --m3-scheme-on-secondary-fixed: 50 68 51;
    --m3-scheme-on-secondary-fixed-variant: 78 96 78;
    --m3-scheme-tertiary: 91 99 49;
    --m3-scheme-tertiary-dim: 79 87 38;
    --m3-scheme-on-tertiary: 245 255 189;
    --m3-scheme-tertiary-container: 237 247 182;
    --m3-scheme-on-tertiary-container: 86 94 44;
    --m3-scheme-tertiary-fixed: 237 247 182;
    --m3-scheme-tertiary-fixed-dim: 223 232 168;
    --m3-scheme-on-tertiary-fixed: 68 76 28;
    --m3-scheme-on-tertiary-fixed-variant: 96 105 53;
    --m3-scheme-error: 167 59 33;
    --m3-scheme-error-dim: 121 25 3;
    --m3-scheme-on-error: 255 247 246;
    --m3-scheme-error-container: 253 121 90;
    --m3-scheme-on-error-container: 110 20 0;
    --m3-scheme-shadow: 0 0 0;
    --m3-scheme-scrim: 0 0 0;
    --m3-scheme-on-on-primary: 59 104 67;
    --m3-scheme-primary-container-subtle: 180 230 184;
    --m3-scheme-on-primary-container-subtle: 41 86 50;
    --m3-scheme-secondary-container-subtle: 203 224 201;
    --m3-scheme-on-secondary-container-subtle: 63 81 64;
    --m3-scheme-tertiary-container-subtle: 214 224 161;
    --m3-scheme-on-tertiary-container-subtle: 73 80 32;
    --m3-scheme-error-container-subtle: 255 207 196;
    --m3-scheme-on-error-container-subtle: 142 41 16;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
  }
  :root, ::backdrop {
    --m3-scheme-background: 11 15 11;
    --m3-scheme-on-background: 224 232 220;
    --m3-scheme-surface: 11 15 11;
    --m3-scheme-surface-dim: 11 15 11;
    --m3-scheme-surface-bright: 38 46 38;
    --m3-scheme-surface-container-lowest: 0 0 0;
    --m3-scheme-surface-container-low: 16 21 16;
    --m3-scheme-surface-container: 21 27 21;
    --m3-scheme-surface-container-high: 27 33 27;
    --m3-scheme-surface-container-highest: 32 40 32;
    --m3-scheme-on-surface: 224 232 220;
    --m3-scheme-on-surface-variant: 165 173 163;
    --m3-scheme-outline: 111 120 110;
    --m3-scheme-outline-variant: 66 74 65;
    --m3-scheme-inverse-surface: 248 250 243;
    --m3-scheme-inverse-on-surface: 82 86 81;
    --m3-scheme-primary: 170 208 172;
    --m3-scheme-primary-dim: 157 194 158;
    --m3-scheme-on-primary: 38 71 44;
    --m3-scheme-primary-container: 56 90 61;
    --m3-scheme-on-primary-container: 198 237 199;
    --m3-scheme-primary-fixed: 197 236 198;
    --m3-scheme-primary-fixed-dim: 184 222 185;
    --m3-scheme-on-primary-fixed: 37 70 43;
    --m3-scheme-on-primary-fixed-variant: 65 99 70;
    --m3-scheme-inverse-primary: 69 103 73;
    --m3-scheme-secondary: 184 204 182;
    --m3-scheme-secondary-dim: 170 190 169;
    --m3-scheme-on-secondary: 51 68 52;
    --m3-scheme-secondary-container: 46 64 48;
    --m3-scheme-on-secondary-container: 176 197 175;
    --m3-scheme-secondary-fixed: 211 232 209;
    --m3-scheme-secondary-fixed-dim: 197 218 196;
    --m3-scheme-on-secondary-fixed: 50 68 51;
    --m3-scheme-on-secondary-fixed-variant: 78 96 78;
    --m3-scheme-tertiary: 246 255 192;
    --m3-scheme-tertiary-dim: 223 232 168;
    --m3-scheme-on-tertiary: 91 99 48;
    --m3-scheme-tertiary-container: 231 241 176;
    --m3-scheme-on-tertiary-container: 83 91 41;
    --m3-scheme-tertiary-fixed: 237 247 182;
    --m3-scheme-tertiary-fixed-dim: 223 232 168;
    --m3-scheme-on-tertiary-fixed: 68 76 28;
    --m3-scheme-on-tertiary-fixed-variant: 96 105 53;
    --m3-scheme-error: 249 119 88;
    --m3-scheme-error-dim: 196 79 52;
    --m3-scheme-on-error: 69 9 0;
    --m3-scheme-error-container: 133 35 10;
    --m3-scheme-on-error-container: 255 155 130;
    --m3-scheme-shadow: 0 0 0;
    --m3-scheme-scrim: 0 0 0;
    --m3-scheme-on-on-primary: 170 208 171;
    --m3-scheme-primary-container-subtle: 17 51 25;
    --m3-scheme-on-primary-container-subtle: 143 180 145;
    --m3-scheme-secondary-container-subtle: 31 48 33;
    --m3-scheme-on-secondary-container-subtle: 156 176 155;
    --m3-scheme-tertiary-container-subtle: 40 47 2;
    --m3-scheme-on-tertiary-container-subtle: 167 176 117;
    --m3-scheme-error-container-subtle: 90 14 0;
    --m3-scheme-on-error-container-subtle: 255 138 110;
  }
}
`);

export const blue_theme = writable(`
@media (prefers-color-scheme: light) {
  :root {
    color-scheme: light;
  }
  :root, ::backdrop {
    --m3-scheme-background: 248 249 254;
    --m3-scheme-on-background: 45 51 58;
    --m3-scheme-surface: 248 249 254;
    --m3-scheme-surface-dim: 213 218 227;
    --m3-scheme-surface-bright: 248 249 254;
    --m3-scheme-surface-container-lowest: 255 255 255;
    --m3-scheme-surface-container-low: 241 244 249;
    --m3-scheme-surface-container: 234 238 245;
    --m3-scheme-surface-container-high: 228 232 240;
    --m3-scheme-surface-container-highest: 221 227 235;
    --m3-scheme-on-surface: 45 51 58;
    --m3-scheme-on-surface-variant: 90 96 103;
    --m3-scheme-outline: 117 123 131;
    --m3-scheme-outline-variant: 173 178 186;
    --m3-scheme-inverse-surface: 12 14 17;
    --m3-scheme-inverse-on-surface: 155 157 161;
    --m3-scheme-primary: 56 99 134;
    --m3-scheme-primary-dim: 43 87 121;
    --m3-scheme-on-primary: 246 249 255;
    --m3-scheme-primary-container: 172 214 255;
    --m3-scheme-on-primary-container: 29 75 109;
    --m3-scheme-primary-fixed: 172 214 255;
    --m3-scheme-primary-fixed-dim: 158 200 240;
    --m3-scheme-on-primary-fixed: 0 55 88;
    --m3-scheme-on-primary-fixed-variant: 40 84 119;
    --m3-scheme-inverse-primary: 172 214 255;
    --m3-scheme-secondary: 82 97 112;
    --m3-scheme-secondary-dim: 70 85 99;
    --m3-scheme-on-secondary: 246 249 255;
    --m3-scheme-secondary-container: 212 228 246;
    --m3-scheme-on-secondary-container: 68 83 98;
    --m3-scheme-secondary-fixed: 212 228 246;
    --m3-scheme-secondary-fixed-dim: 198 214 232;
    --m3-scheme-on-secondary-fixed: 50 65 79;
    --m3-scheme-on-secondary-fixed-variant: 78 93 108;
    --m3-scheme-tertiary: 92 91 133;
    --m3-scheme-tertiary-dim: 80 79 120;
    --m3-scheme-on-tertiary: 251 247 255;
    --m3-scheme-tertiary-container: 202 199 248;
    --m3-scheme-on-tertiary-container: 64 64 104;
    --m3-scheme-tertiary-fixed: 202 199 248;
    --m3-scheme-tertiary-fixed-dim: 188 186 233;
    --m3-scheme-on-tertiary-fixed: 45 44 83;
    --m3-scheme-on-tertiary-fixed-variant: 74 73 113;
    --m3-scheme-error: 168 56 54;
    --m3-scheme-error-dim: 103 4 13;
    --m3-scheme-on-error: 255 247 246;
    --m3-scheme-error-container: 250 116 111;
    --m3-scheme-on-error-container: 110 10 18;
    --m3-scheme-shadow: 0 0 0;
    --m3-scheme-scrim: 0 0 0;
    --m3-scheme-on-on-primary: 56 98 134;
    --m3-scheme-primary-container-subtle: 189 222 255;
    --m3-scheme-on-primary-container-subtle: 35 80 114;
    --m3-scheme-secondary-container-subtle: 204 220 238;
    --m3-scheme-on-secondary-container-subtle: 63 78 93;
    --m3-scheme-tertiary-container-subtle: 217 214 255;
    --m3-scheme-on-tertiary-container-subtle: 73 73 113;
    --m3-scheme-error-container-subtle: 255 207 203;
    --m3-scheme-on-error-container-subtle: 143 37 38;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
  }
  :root, ::backdrop {
    --m3-scheme-background: 12 14 17;
    --m3-scheme-on-background: 224 230 238;
    --m3-scheme-surface: 12 14 17;
    --m3-scheme-surface-dim: 12 14 17;
    --m3-scheme-surface-bright: 39 45 51;
    --m3-scheme-surface-container-lowest: 0 0 0;
    --m3-scheme-surface-container-low: 16 20 24;
    --m3-scheme-surface-container: 21 26 31;
    --m3-scheme-surface-container-high: 27 32 37;
    --m3-scheme-surface-container-highest: 32 38 45;
    --m3-scheme-on-surface: 224 230 238;
    --m3-scheme-on-surface-variant: 166 172 180;
    --m3-scheme-outline: 112 118 125;
    --m3-scheme-outline-variant: 66 72 79;
    --m3-scheme-inverse-surface: 248 249 254;
    --m3-scheme-inverse-on-surface: 83 85 89;
    --m3-scheme-primary: 171 202 233;
    --m3-scheme-primary-dim: 157 188 219;
    --m3-scheme-on-primary: 35 67 93;
    --m3-scheme-primary-container: 55 85 112;
    --m3-scheme-on-primary-container: 206 230 255;
    --m3-scheme-primary-fixed: 187 219 251;
    --m3-scheme-primary-fixed-dim: 173 205 236;
    --m3-scheme-on-primary-fixed: 26 59 84;
    --m3-scheme-on-primary-fixed-variant: 57 87 114;
    --m3-scheme-inverse-primary: 67 98 125;
    --m3-scheme-secondary: 185 200 218;
    --m3-scheme-secondary-dim: 171 186 204;
    --m3-scheme-on-secondary: 51 66 80;
    --m3-scheme-secondary-container: 46 61 75;
    --m3-scheme-on-secondary-container: 177 193 210;
    --m3-scheme-secondary-fixed: 212 228 246;
    --m3-scheme-secondary-fixed-dim: 198 214 232;
    --m3-scheme-on-secondary-fixed: 50 65 79;
    --m3-scheme-on-secondary-fixed-variant: 78 93 108;
    --m3-scheme-tertiary: 217 214 255;
    --m3-scheme-tertiary-dim: 202 199 248;
    --m3-scheme-on-tertiary: 73 73 113;
    --m3-scheme-tertiary-container: 202 199 248;
    --m3-scheme-on-tertiary-container: 64 64 104;
    --m3-scheme-tertiary-fixed: 202 199 248;
    --m3-scheme-tertiary-fixed-dim: 188 186 233;
    --m3-scheme-on-tertiary-fixed: 45 44 83;
    --m3-scheme-on-tertiary-fixed-variant: 74 73 113;
    --m3-scheme-error: 250 116 111;
    --m3-scheme-error-dim: 197 77 74;
    --m3-scheme-on-error: 73 0 6;
    --m3-scheme-error-container: 135 31 33;
    --m3-scheme-on-error-container: 255 153 147;
    --m3-scheme-shadow: 0 0 0;
    --m3-scheme-scrim: 0 0 0;
    --m3-scheme-on-on-primary: 170 202 233;
    --m3-scheme-primary-container-subtle: 11 46 71;
    --m3-scheme-on-primary-container-subtle: 143 174 205;
    --m3-scheme-secondary-container-subtle: 31 46 59;
    --m3-scheme-on-secondary-container-subtle: 157 173 190;
    --m3-scheme-tertiary-container-subtle: 41 40 78;
    --m3-scheme-on-tertiary-container-subtle: 168 167 213;
    --m3-scheme-error-container-subtle: 96 0 10;
    --m3-scheme-on-error-container-subtle: 255 137 131;
  }
}
`);
