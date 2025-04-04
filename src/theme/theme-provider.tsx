'use client';

import type {} from '@mui/lab/themeAugmentation';
import type {} from '@mui/material/themeCssVarsAugmentation';

import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

import { defaultSettings } from 'src/components/settings';

import { createTheme } from './create-theme';
import { schemeConfig } from './color-scheme-script';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {


  const theme = createTheme(defaultSettings);

  return (
    <AppRouterCacheProvider options={{ key: 'css' }}>
      <CssVarsProvider
        theme={theme}
        defaultMode={schemeConfig.defaultMode}
        modeStorageKey={schemeConfig.modeStorageKey}
      >
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </AppRouterCacheProvider>
  );
}
