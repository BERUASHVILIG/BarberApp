import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
  fontFamily: ['DM-Sans', 'Roboto'].join(','),
  h1Roboto: {
    fontSize: '1.625rem', //26px
    fontWeight: 700,
  },
  h1: {
    fontSize: '1.625rem', //26px
    fontWeight: 500,
    lineHeight: '2rem',
  },
  h2Roboto: {
    fontSize: '1.5rem', //24px
    fontWeight: 400,
    lineHeight: '2rem',
  },
  h2: {
    fontSize: '1.375rem', //22px
    fontWeight: 500,
    lineHeight: '2rem',
  },
  h3Roboto: {
    fontSize: '1rem', //16px
    fontWeight: 500,
    lineHeight: '2rem',
  },
  h3: {
    fontSize: '1rem', //16px
    fontWeight: 700,
    lineHeight: '2rem',
  },
  h4Roboto: {
    fontSize: '0.875rem', //14px
    fontWeight: 700,
    lineHeight: '2rem',
  },
  h4: {
    fontSize: '0.875rem', //14px
    fontWeight: 700,
    lineHeight: '1rem',
  },
  subtitle1Roboto: {
    fontSize: '0.625rem', //10px
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: '0.75rem', //12px
    fontWeight: 500,
    lineHeight: '1rem',
  },
  subtitle2Roboto: {
    fontSize: '0.625rem', //10px
    fontWeight: 300,
    lineHeight: '2rem',
  },
  subtitle2: {
    fontSize: '0.875rem', //14px
    fontWeight: 500,
    lineHeight: '1.5rem',
  },
  body1: {
    fontSize: '1rem', //16px
    fontWeight: 400,
    lineHeight: '2rem',
  },
  body2: {
    fontSize: '0.875rem', //14px
    fontWeight: 400,
    lineHeight: '2rem',
  },
  caption: {
    fontSize: '0.75rem', //12px
    fontWeight: 400,
    lineHeight: '2rem',
  },
  button: {
    fontSize: '1rem', //16px
    fontWeight: 700,
    lineHeight: '2rem',
    textTransform: 'none',
  },
};

export default typography;
