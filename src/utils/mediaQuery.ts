export default {
  phoneOnly: '@media (max-width: 599px)',

  tabletPortraitUp: '@media (min-width: 600px)',

  tabletLandscapeUp: '@media (min-width: 900px)',

  desktopUp: '@media (min-width: 1200px)',

  bigDesktopUp: '@media (min-width: 1800px)',

  custom: (size: number, type?: 'min' | 'max') =>
    `@media (${type || 'min'}-width: ${size}px)`,
};
