import useMediaQuery from './useMediaQuery';

export default function useBreakpoints() {
  const breakpoints = {
    isPhoneOnly: useMediaQuery('(max-width: 599px)'),
    isTabletPortraitUp: useMediaQuery('(min-width: 600px)'),
    isTabletLandscapeUp: useMediaQuery('(min-width: 900px)'),
    isDesktopUp: useMediaQuery('(min-width: 1200px)'),
    isBigDesktopUp: useMediaQuery('(min-width: 1800px)'),
    active: 'bigDesktopUp',
  };

  if (breakpoints.isPhoneOnly) breakpoints.active = 'phoneOnly';
  if (breakpoints.isTabletPortraitUp) breakpoints.active = 'tabletPortraitUp';
  if (breakpoints.isTabletLandscapeUp) breakpoints.active = 'tabletLandscapeUp';
  if (breakpoints.isDesktopUp) breakpoints.active = 'desktopUp';
  if (breakpoints.isBigDesktopUp) breakpoints.active = 'bigDesktopUp';

  return breakpoints;
}
