import { Theme } from '@mui/material';
import { natural } from './schemes/natural';
import { dimmed } from './schemes/dimmed';

export type ThemeType = 'natural' | 'dimmed';

export type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: (theme: ThemeType) => void;
};

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
    };
  }

  interface ThemeOptions {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
    };
  }

  interface Palette {
    accent: Palette['info'];
  }

  interface PaletteOptions {
    accent: PaletteOptions['info'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    accent: true;
  }
}
declare module '@mui/material/Checkbox' {
  interface CheckboxPropsColorOverrides {
    accent: true;
  }
}

export function themeCreator(theme: ThemeType): Theme {
  return schemes[theme];
}

const schemes: { [key: string]: Theme } = { natural, dimmed };
