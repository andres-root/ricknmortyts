

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const breakpoints = {
  mobileS: `@media screen and (min-width: ${size.mobileS})`,
  mobileM: `@media screen and (min-width: ${size.mobileM})`,
  mobileL: `@media screen and (min-width: ${size.mobileL})`,
  tablet: `@media screen and (min-width: ${size.tablet})`,
  laptop: `@media screen and (min-width: ${size.laptop})`,
  laptopL: `@media screen and (min-width: ${size.laptopL})`,
  desktop: `@media screen and (min-width: ${size.desktop})`,
  desktopL: `@media screen and (min-width: ${size.desktop})`
};

export { breakpoints };
