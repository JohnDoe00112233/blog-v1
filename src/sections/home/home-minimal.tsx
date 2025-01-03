import type { StackProps } from '@mui/material/Stack';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Button, useTheme ,Typography } from '@mui/material';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { MotionViewport, MotionContainer } from 'src/components/animate';

import { FloatLine, FloatPlusIcon } from './components/svg-elements';

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
                 K89bet Điểm Đến Giải Trí
              </Box>
              Đổi Thưởng Uy Tín

            </Box>
            <Typography
              variant="body1"
              sx={{
                mx: 'auto',
                [theme.breakpoints.up(smKey)]: { whiteSpace: 'pre' },
                [theme.breakpoints.up(lgKey)]: { fontSize: 20, lineHeight: '36px' },
              }}
            >
              <a style={{textDecoration:"none", color:"red"}} href="https://k89bet68.com">K89bet</a>
              {` thương hiệu cá cược uy tín, đang tạo nên sức hút lớn trong cộng đồng người chơi nhờ sự chuyên nghiệp và đa dạng dịch vụ. \n Với cam kết mang đến trải nghiệm đáng nhớ, K89bet không chỉ là nơi bạn thỏa mãn đam mê cá cược mà còn là cánh cửa mở ra cơ hội chinh phục các phần thưởng hấp dẫn. \n Cùng khám phá những điểm đặc biệt của nhà cái này qua bài viết dưới đây!`}
            </Typography>
          </Stack>

          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={{ xs: 1.5, sm: 2 }}>
            <Stack alignItems="center" spacing={2.5}>
              <Button
                component={RouterLink}
                href={paths.registerNow}
                color="inherit"
                size="large"
                variant="contained"
                startIcon={<Iconify width={24} icon="iconoir:flash" />}
              >
                Đăng ký nhanh
              </Button>
            </Stack>
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
          </Box>

        </Container>
      </MotionViewport>
    </Stack>
  );
}

// ----------------------------------------------------------------------



