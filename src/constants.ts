export const COLORS = {
  primary: '9deg 100% 64%',
  gray: {
    100: '0deg 0% 96%',
    700: '220deg 5% 40%',
    900: '222deg 14% 15%',
  },
  white: '0deg 0% 100%',
};

export const WEIGHTS = {
  normal: 400,
  medium: 500,
  bold: 700,
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
