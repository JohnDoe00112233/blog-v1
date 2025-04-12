'use client';

import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeFAQs } from '../home-faqs';
import { HomeMinimal } from '../home-minimal';
import { HomePricing } from '../home-pricing';


// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <HomeMinimal />

        <HomePricing />

        <HomeFAQs />
      </Stack>
    </>
  );
}
