import { styled, TextField } from '@mui/material';

// const MuiTextFieldStyled = styled(TextField, {
//     shouldForwardProp: (props) => props !== 'hasBorder' && props !== 'bgColor' && props !== 'error',
//   })<MuiTextFieldProps>(({ theme, size, hasBorder = false, bgColor = 'white', error = false }) => ({
//     ...{
//       input: {
//         backgroundColor: theme.palette.background[bgColor],
//         borderRadius: '10px',
//         padding: '9px 14px',
//         border: renderBorder(hasBorder, error),
//       },
//       fieldset: {
//         border: '0',
//       },
//     },
//   }));
