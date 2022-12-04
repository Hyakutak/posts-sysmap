const size = {
    mobileL: '678px',
    tablet: '680px',
    laptop: '1124px',
    desktop: '1366px'
}

export const device = {
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`
};