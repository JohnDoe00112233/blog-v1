import type { StackProps } from '@mui/material/Stack';

import Image from "next/image"
import { m} from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, AnimateBorder, MotionViewport } from 'src/components/animate';

import { FloatLine, } from './components/svg-elements';


// ----------------------------------------------------------------------

export function HomePricing({ sx, ...other }: StackProps) {
  const theme = useTheme();

  const renderContentDesktop = (
    <Box >
      <Stack direction="row" flexWrap="wrap" gap={{ xs: 4,}}>
        <Box sx={{
          mx:{xs:"auto", lg:"0"}
        }}>
        <Image width={256} height={256} src={`${CONFIG.site.basePath}/logo/k89bet-logo.png`} alt="k89bet logo" />
        </Box>
        <Stack  direction="column"  gap={{ xs: 1.5, sm: 4 }} sx={{
          mx:{xs:"auto", lg:"0"}
        }}>
          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inLeft}
            sx={{
              display: 'flex',
              borderRadius: 1.25,
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AnimateBorder
              animate={{
                duration: 12,
                distance: 40,
                color: [theme.vars.palette.primary.main, theme.vars.palette.warning.main],
                outline: `135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}`,
              }}
              sx={{ width: 1, height: 1, position: 'absolute' }}
            />

            <Button
              size="large"
              color="primary"
              variant="text"
              target="_blank"
              rel="noopener"
              href={paths.about}
              startIcon={<Iconify icon="iconoir:flash" width={40}/>}
              sx={{ p: 4, fontSize:40 }}
            >
              ⭐️ Đăng Ký Nhận 89.000 vnđ ⭐️
            </Button>
          </Box>

          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inLeft}
            sx={{
              display: 'flex',
              borderRadius: 1.25,
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AnimateBorder
              animate={{
                duration: 12,
                distance: 40,
                color: [theme.vars.palette.primary.main, theme.vars.palette.warning.main],
                outline: `135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}`,
              }}
              sx={{ width: 1, height: 1, position: 'absolute' }}
            />

            <Button
              size="large"
              color="primary"
              variant="text"
              target="_blank"
              rel="noopener"
              href={paths.about}
              startIcon={<Iconify icon="iconoir:flash" width={40}/>}
              sx={{ p: 4, fontSize:40 }}
            >
             ⭐️ Tặng 200% nạp lần đầu ⭐️
            </Button>
          </Box>

          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inLeft}
            sx={{
              display: 'flex',
              borderRadius: 1.25,
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AnimateBorder
              animate={{
                duration: 12,
                distance: 40,
                color: [theme.vars.palette.primary.main, theme.vars.palette.warning.main],
                outline: `135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}`,
              }}
              sx={{ width: 1, height: 1, position: 'absolute' }}
            />

            <Button
              size="large"
              color="primary"
              variant="text"
              target="_blank"
              rel="noopener"
              href={paths.about}
              startIcon={<Iconify icon="iconoir:flash" width={40}/>}
              sx={{ p: 4, fontSize:40 }}
            >
             ⭐️ Ưu đãi nổ hũ - bắn cá ⭐️
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );



  return (
    <Stack component="section" sx={{ pb: 5, position: 'relative', ...sx }} {...other}>
      <MotionViewport>
        <FloatLine vertical sx={{ top: 0, left: 80 }} />
        <Container>{renderContentDesktop}</Container>
      </MotionViewport>
    </Stack>
  );
}


// ----------------------------------------------------------------------





