import type { StackProps } from '@mui/material/Stack';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { Markdown } from 'src/components/markdown';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { CircleSvg, FloatLine, FloatPlusIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

export function HomeMinimal({ sx, ...other }: StackProps) {

  const data = {
    title: 'Giới thiệu về nhà cái K89Bet',
    content: `<h3>🥈Nhà cái K89Bet uy tín,chất lượng</h3>
  <p><strong><a href="https://k89.app/">K89Bet</a></strong> là nhà cái cá cược trực tuyến hàng đầu, cung cấp các sản phẩm cá cược chất lượng cao và uy tín. Với giấy phép hoạt động hợp pháp tại Costa Rica, K89Bet đảm bảo tuân thủ nghiêm ngặt các quy định và chính sách, mang đến sự công bằng cho người chơi.</p>
  <h3>🥈Môi trường cá cược minh bạch</h3>
  <p>K89Bet cam kết tạo ra một sân chơi minh bạch, không gian lận. Mọi kết quả trong các ván chơi đều được đảm bảo ngẫu nhiên và công bằng. Bất kỳ hành vi gian lận nào đều bị xử phạt nghiêm khắc.</p>
  <h3>🥈Sự đa dạng trong các trò chơi</h3>
  <p><strong>K89Bet.app</strong> cung cấp một kho trò chơi phong phú với hàng nghìn phiên bản nổi bật. Từ Casino đến các trò chơi khác, mọi sản phẩm đều được áp dụng công nghệ cá cược hiện đại, mang lại trải nghiệm đỉnh cao cho người chơi.</p>
  <h3>🥈K89Bet bảo mật thông tin cá nhân cực kỳ tốt</h3>
  <p><strong>K89Bet app</strong> sử dụng công nghệ mã hóa SSL 128-bit để bảo vệ thông tin cá nhân của người chơi. Mỗi thành viên đều được cấp một ID và mật khẩu riêng biệt, giúp quản lý các lần đăng nhập an toàn và hiệu quả.</p>
  `
  }
  const renderLines = (
    <>
      <FloatPlusIcon sx={{ top: 72, left: 72 }} />
      <FloatPlusIcon sx={{ bottom: 72, left: 72 }} />
      <FloatLine sx={{ top: 80, left: 0 }} />
      <FloatLine sx={{ bottom: 80, left: 0 }} />
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </>
  );

  const renderDescription = (
    <>
      <SectionTitle
        title="Giới thiệu về nhà cái"
        txtGradient="K89BET"
        sx={{ mb: { xs: 5, md: 8 }, textAlign: { xs: 'center', md: 'left' } }}
      />

      <Stack
        spacing={6}
        sx={{
          mx: { xs: 'auto', md: 'unset' },
        }}
      >
          <Box
            component={m.div}
            key={data.title}
            variants={varFade({ distance: 24 }).inUp}
            gap={3}
            display="flex"
          >
            <Stack spacing={1}>
             <Markdown children={data.content}/>
            </Stack>
          </Box>
      </Stack>
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

        <Container sx={{ position: 'relative' }}>
          <Grid container columnSpacing={{ xs: 0, md: 8 }} sx={{ position: 'relative', zIndex: 9 }}>
            <Grid xs={12} md={6} lg={7}>
              {renderDescription}
            </Grid>
          </Grid>

          <CircleSvg variants={varFade().in} sx={{ display: { xs: 'none', md: 'block' } }} />
        </Container>
      </MotionViewport>
    </Stack>
  );
}

// ----------------------------------------------------------------------

