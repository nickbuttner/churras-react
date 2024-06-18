import { cssElevation } from "css-elevation";

const baseSpacing = 8;

const theme = {
  colors: {
    primary: "#FFD836",
    bg: "#FAFAFA",
    lightGray: "#F1F1F1",
  },

  spacing: {
    base: baseSpacing,
    small: baseSpacing * 2,
    medium: baseSpacing * 4,
    big: baseSpacing * 6,
    huge: baseSpacing * 8,
  },

  borderRadius: {
    small: 2,
    big: 50,
  },

  elevation: (level) => cssElevation({ z: level }),
};

export default theme;
