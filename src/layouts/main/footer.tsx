import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _socials } from 'src/_mock';

import { Logo } from 'src/components/logo';
import { SocialIcon } from 'src/components/iconify';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'K89BET',
    children: [
      { name: 'Giới thiệu K89Bet', href: paths.about },
      { name: 'Liên hệ K89Bet', href: paths.contact },
      { name: 'RSS Feed', href: paths.feed },
    ],
  },
  {
    headline: 'Pháp lý',
    children: [
      { name: 'Điều khoản điều kiện', href: paths.terms },
      { name: 'Chính sách bảo mật', href: paths.privacyPolicy },
    ],
  },
];

// ----------------------------------------------------------------------

export type FooterProps = {
  layoutQuery: Breakpoint;
  sx?: SxProps<Theme>;
};

export function Footer({ layoutQuery, sx }: FooterProps) {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ position: 'relative', bgcolor: 'background.default', ...sx }}>
      <Divider />

      <Container
        sx={{
          pb: 5,
          pt: 10,
          textAlign: 'center',
          [theme.breakpoints.up(layoutQuery)]: { textAlign: 'unset' },
        }}
      >
        <Logo width="100px" />

        <Grid
          container
          sx={{
            mt: 3,
            justifyContent: 'center',
            [theme.breakpoints.up(layoutQuery)]: { justifyContent: 'space-between' },
          }}
        >
          <Grid {...{ xs: 12, [layoutQuery]: 3 }}>
            <Typography
              variant="body2"
              sx={{
                mx: 'auto',
                maxWidth: 280,
                [theme.breakpoints.up(layoutQuery)]: { mx: 'unset' },
              }}
            >
              <span><Link
                href="https://k89bet68.com"
                target="_blank"
                rel="noopener"
                sx={{ mx: 0.5 }}
              >
                K89bet
              </Link></span>
              tự hào mang đến nền tảng cá cược trực tuyến vượt trội, không chỉ đảm bảo tính uy tín mà còn khẳng định chất lượng hàng đầu trên thị trường. Với sự công nhận chính thức từ các cơ quan quản lý danh tiếng tại châu Mỹ, K89bet là một trong những nhà cái hiếm hoi sở hữu giấy phép hoạt động do Bộ Nội vụ và Liên bang tại Schleswig-Holstein cấp phép. Đây chính là minh chứng cho cam kết về tính hợp pháp và tiêu chuẩn cao mà K89bet luôn hướng đến.
            </Typography>
            <Typography><strong>Hashtag:</strong> #K89Bet, #K89betcom, #K89betcasino, #nhacaiK89Bet  #trangchuK89bet #linkvaoK89bet</Typography>
            <Stack
              direction="row"
              sx={{
                mt: 3,
                mb: 5,
                justifyContent: 'center',
                [theme.breakpoints.up(layoutQuery)]: { mb: 0, justifyContent: 'flex-start' },
              }}
            >
              {_socials.map((social) => (
                <IconButton aria-label='socical-button' key={social.name}>
                  <SocialIcon icon={social.name} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid {...{ xs: 12, [layoutQuery]: 7.5 }}>
            <Stack
              spacing={5}
              sx={{
                flexDirection: 'column',
                [theme.breakpoints.up(layoutQuery)]: { flexDirection: 'row' },
              }}
            >
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  sx={{
                    width: 1,
                    alignItems: 'center',
                    [theme.breakpoints.up(layoutQuery)]: { alignItems: 'flex-start' },
                  }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}

              <Stack
                spacing={2}
                sx={{
                  width: 1,
                  alignItems: 'center',
                  [theme.breakpoints.up(layoutQuery)]: { alignItems: 'flex-start' },
                }}
              >
                <Typography component="div" variant="overline">
                  Liện hệ K89BET
                </Typography>
                <Box component="ul" sx={{ listStyleType: { xs: "none", md: "disc" } }}>
                  <li>
                    <Typography variant="body2">
                      <strong>Địa chỉ:</strong> 200 Bát Nàn, Phường Thạnh Mỹ Lợi, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      <strong>Live Chat CSKH</strong>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      <strong>Hotline: </strong> (+84) 335410591
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      <strong>Mail:</strong> support@k89bet68.com
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      <strong>Website:</strong>  <Link
                        href="https://k89bet68.com/"
                        target="_blank"
                        rel="noopener"
                        sx={{ mx: 0.5 }}
                      >
                        https://k89bet68.com/
                      </Link>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      <Link
                        href="https://k89bet68.com/sitemap.xml"
                        target="_blank"
                        rel="noopener"
                        sx={{ mx: 0.5 }}
                      >
                        Sơ đồ trang web
                      </Link>
                    </Typography>
                  </li>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 10 }}>
          © 2025 K89BET All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

