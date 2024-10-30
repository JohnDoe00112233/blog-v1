import type { BoxProps} from '@mui/material';
import type { StackProps } from '@mui/material/Stack';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Button, Typography, useTheme } from '@mui/material';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport, MotionContainer } from 'src/components/animate';

import { HeroBackground } from './components/hero-background';
import {  FloatLine, FloatPlusIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const smKey = 'sm';
const mdKey = 'md';
const lgKey = 'lg';

export function HomeMinimal({ sx, ...other }: StackProps) {
  const theme = useTheme();

  const renderLines = (
    <>
      <FloatPlusIcon sx={{ top: 72, left: 72 }} />
      <FloatPlusIcon sx={{ bottom: 72, left: 72 }} />
      <FloatLine sx={{ top: 80, left: 0 }} />
      <FloatLine sx={{ bottom: 80, left: 0 }} />
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </>
  );


  const renderHeading = (
    <MInview>
      <Box
        component="h1"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          ...theme.typography.h2,
          my: 0,
          mx: 'auto',
          maxWidth: 680,
          fontFamily: theme.typography.fontSecondaryFamily,
          [theme.breakpoints.up(lgKey)]: { fontSize: 72, lineHeight: '90px' },
        }}
      >
         <Box
          component={m.span}
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          sx={{
            ...textGradient(
              `300deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.warning.main} 25%, ${theme.vars.palette.primary.main} 50%, ${theme.vars.palette.warning.main} 75%, ${theme.vars.palette.primary.main} 100%`
            ),
            backgroundSize: '400%',
            ml: { xs: 0.75, md: 1, xl: 1.5 },
          }}
        >
          K89BET COM
        </Box>
        <Box component="span" sx={{ width: 1, opacity: 0.24 }}>
        Link vào K89Bet mới nhất
        </Box>
        Tặng 89K
      </Box>
    </MInview>
  );

  const renderText = (
    <MInview>
      <Typography
        variant="body1"
        sx={{
          mx: 'auto',
          [theme.breakpoints.up(smKey)]: { whiteSpace: 'pre' },
          [theme.breakpoints.up(lgKey)]: { fontSize: 20, lineHeight: '36px' },
        }}
      >
        {`K89Bet, một tên tuổi mới trong thị trường cá cược Việt Nam, đã nhanh chóng gây ấn tượng với người chơi nhờ sự uy tín, an toàn, xanh chín và công bằng. \nNền tảng này đáp ứng đầy đủ nhu cầu của bet thủ, đặc biệt là những người chơi khó tính, đảm bảo một sân chơi minh bạch và đáng tin cậy.`}
      </Typography>
    </MInview>
  );

  const renderButtons = (
    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={{ xs: 1.5, sm: 2 }}>
      <MInview>
        <Stack alignItems="center" spacing={2.5}>
          <Button
            component={RouterLink}
            href={paths.registerNow}
            color="inherit"
            size="large"
            variant="contained"
            startIcon={<Iconify width={24} icon="iconoir:flash" />}
          >
              Đăng ký ngay
          </Button>
        </Stack>
      </MInview>

      <MInview>
        <Button
          color="inherit"
          size="large"
          variant="outlined"
          target="_blank"
          rel="noopener"
          href={paths.dowload}
          startIcon={<Iconify width={24} icon="eva:external-link-fill" />}
          sx={{ borderColor: 'text.primary' }}
        >
          Tải App K89Bet
        </Button>
      </MInview>
    </Box>
  );

  return (
    <Stack
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        py: { xs: 10, md: 20 },
        ...sx,
      }}
      {...other}
    >
      <MotionViewport>
        {renderLines}

        <Container
          component={MotionContainer}
          sx={{
            py: 3,
            gap: 5,
            zIndex: 9,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            [theme.breakpoints.up(mdKey)]: {
              flex: '1 1 auto',
              justifyContent: 'center',
              py: 'var(--layout-header-desktop-height)',
            },
          }}
        >
          <Stack spacing={3} sx={{ textAlign: 'center' }}>
           {renderHeading}
           {renderText}
          </Stack>

          {renderButtons}

        </Container>
      </MotionViewport>
    </Stack>
  );
}

// ----------------------------------------------------------------------


type MInviewProps = BoxProps & {
  children: React.ReactNode;
};

function MInview({ children, component = m.div }: MInviewProps) {
  return (
    <Box component={component} variants={varFade({ distance: 24 }).inUp}>
      {children}
    </Box>
  );
}

