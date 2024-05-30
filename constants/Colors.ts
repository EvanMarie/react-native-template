export const col= {
  "light": "rgba(254, 251, 214, 1)",
  "dark": "rgba(31, 0, 22, 1)",
          100: "rgba(254, 196, 215, 1)",
          110: "rgba(254, 196, 215, 0.1)",
          120: "rgba(254, 196, 215, 0.2)",
          130: "rgba(254, 196, 215, 0.3)",
          140: "rgba(254, 196, 215, 0.4)",
          150: "rgba(254, 196, 215, 0.5)",
          160: "rgba(254, 196, 215, 0.6)",
          170: "rgba(254, 196, 215, 0.7)",
          180: "rgba(254, 196, 215, 0.8)",
          190: "rgba(254, 196, 215, 0.9)",

          200: "rgba(255, 216, 86, 1)",
          210: "rgba(255, 216, 86, 0.1)",
          220: "rgba(255, 216, 86, 0.2)",
          230: "rgba(255, 216, 86, 0.3)",
          240: "rgba(255, 216, 86, 0.4)",
          250: "rgba(255, 216, 86, 0.5)",
          260: "rgba(255, 216, 86, 0.6)",
          270: "rgba(255, 216, 86, 0.7)",
          280: "rgba(255, 216, 86, 0.8)",
          290: "rgba(255, 216, 86, 0.9)",

          300: "rgba(231, 84, 189, 1)",
          310: "rgba(231, 84, 189, 0.1)",
          320: "rgba(231, 84, 189, 0.2)",
          330: "rgba(231, 84, 189, 0.3)",
          340: "rgba(231, 84, 189, 0.4)",
          350: "rgba(231, 84, 189, 0.5)",
          360: "rgba(231, 84, 189, 0.6)",
          370: "rgba(231, 84, 189, 0.7)",
          380: "rgba(231, 84, 189, 0.8)",
          390: "rgba(231, 84, 189, 0.9)",

          400: "rgba(123, 103, 201, 1)",
          410: "rgba(123, 103, 201, 0.1)",
          420: "rgba(123, 103, 201, 0.2)",
          430: "rgba(123, 103, 201, 0.3)",
          440: "rgba(123, 103, 201, 0.4)",
          450: "rgba(123, 103, 201, 0.5)",
          460: "rgba(123, 103, 201, 0.6)",
          470: "rgba(123, 103, 201, 0.7)",
          480: "rgba(123, 103, 201, 0.8)",
          490: "rgba(123, 103, 201, 0.9)",

          500: "rgba(255, 147, 23, 1)",
          510: "rgba(255, 147, 23, 0.1)",
          520: "rgba(255, 147, 23, 0.2)",
          530: "rgba(255, 147, 23, 0.3)",
          540: "rgba(255, 147, 23, 0.4)",
          550: "rgba(255, 147, 23, 0.5)",
          560: "rgba(255, 147, 23, 0.6)",
          570: "rgba(255, 147, 23, 0.7)",
          580: "rgba(255, 147, 23, 0.8)",
          590: "rgba(255, 147, 23, 0.9)",

          600: "rgba(246, 75, 1, 1)",
          610: "rgba(246, 75, 1, 0.1)",
          620: "rgba(246, 75, 1, 0.2)",
          630: "rgba(246, 75, 1, 0.3)",
          640: "rgba(246, 75, 1, 0.4)",
          650: "rgba(246, 75, 1, 0.5)",
          660: "rgba(246, 75, 1, 0.6)",
          670: "rgba(246, 75, 1, 0.7)",
          680: "rgba(246, 75, 1, 0.8)",
          690: "rgba(246, 75, 1, 0.9)",

          700: "rgba(127, 0, 53, 1)",
          710: "rgba(127, 0, 53, 0.1)",
          720: "rgba(127, 0, 53, 0.2)",
          730: "rgba(127, 0, 53, 0.3)",
          740: "rgba(127, 0, 53, 0.4)",
          750: "rgba(127, 0, 53, 0.5)",
          760: "rgba(127, 0, 53, 0.6)",
          770: "rgba(127, 0, 53, 0.7)",
          780: "rgba(127, 0, 53, 0.8)",
          790: "rgba(127, 0, 53, 0.9)",

          800: "rgba(79, 1, 110, 1)",
          810: "rgba(79, 1, 110, 0.1)",
          820: "rgba(79, 1, 110, 0.2)",
          830: "rgba(79, 1, 110, 0.3)",
          840: "rgba(79, 1, 110, 0.4)",
          850: "rgba(79, 1, 110, 0.5)",
          860: "rgba(79, 1, 110, 0.6)",
          870: "rgba(79, 1, 110, 0.7)",
          880: "rgba(79, 1, 110, 0.8)",
          890: "rgba(79, 1, 110, 0.9)",

          900: "rgba(9, 14, 56, 1)",
          910: "rgba(9, 14, 56, 0.1)",
          920: "rgba(9, 14, 56, 0.2)",
          930: "rgba(9, 14, 56, 0.3)",
          940: "rgba(9, 14, 56, 0.4)",
          950: "rgba(9, 14, 56, 0.5)",
          960: "rgba(9, 14, 56, 0.6)",
          970: "rgba(9, 14, 56, 0.7)",
          980: "rgba(9, 14, 56, 0.8)",
          990: "rgba(9, 14, 56, 0.9)",
        }

export const buttonBg = col[500];
export const buttonText = col[800];
export const buttonPressBg = col[800];
export const buttonPressText = col[100];

const tintColorLight = col[500];
const tintColorDark = col[300];

export const Colors = {
  light: {
    text: col["100"],
    background: col[990],
    tint: tintColorLight,
    icon: col[500],
    tabIconDefault: col[100],
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: col[100],
    background: col[800],
    tint: tintColorLight,
    icon: col[200],
    tabIconDefault: col[300],
    tabIconSelected: tintColorLight,
  },
};
