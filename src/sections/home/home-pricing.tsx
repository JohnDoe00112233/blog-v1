import type { StackProps } from '@mui/material/Stack';

import React from 'react';
import Image from "next/image"
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { Markdown } from 'src/components/markdown';
import { varFade, AnimateBorder, MotionViewport } from 'src/components/animate';

import { FloatLine, } from './components/svg-elements';


// ----------------------------------------------------------------------

interface ButtonData {
  label: string;
  href: string;
}

const buttonData: ButtonData[] = [
  { label: '⭐️ Đăng Ký Nhận 89.000 vnđ ⭐️', href: paths.about },
  { label: '⭐️ Tặng 200% nạp lần đầu ⭐️', href: paths.about },
  { label: '⭐️ Ưu đãi nổ hũ - bắn cá ⭐️', href: paths.about },
];


const contentData = `
   <h2>Hướng dẫn nhanh cách đăng ký tài khoản K89bet</h2>
     <img src="/assets/images/huong-dan-nhanh-cach-dang-ky-tai-khoan-k89bet.webp" alt="Hướng dẫn nhanh cách đăng ký tài khoản K89bet"/>
        <ol>
            <li>
                <strong>Truy cập trang chủ chính thức K89bet:</strong>
                <a href="https://k89bet89.com/">https://k89bet68.com/</a>. Nhấn vào nút "Đăng ký" nổi bật ngay góc phải màn hình.
            </li>
            <li>
                <strong>Điền thông tin cá nhân cơ bản:</strong>
                Hoàn thành biểu mẫu đăng ký với các thông tin như tên đăng nhập, mật khẩu, số điện thoại và mã xác nhận.
            </li>
            <li>
                <strong>Xác nhận điều khoản và hoàn tất đăng ký:</strong>
                Kiểm tra lại thông tin, tích vào ô "Tôi đồng ý với điều khoản và chính sách người dùng". Nhấn "Hoàn tất đăng ký" để nhận thông báo kích hoạt tài khoản thành công.
            </li>
        </ol>
    <section>
        <h2>Vì sao nên chọn K89bet?</h2>
        <ul>
            <li><strong>Giao diện hiện đại:</strong> Thiết kế tối ưu cho mọi thiết bị, từ di động đến máy tính bảng.</li>
            <li><strong>Đa dạng sản phẩm:</strong> Cá cược thể thao, sòng bạc trực tuyến, xổ số, và nhiều hơn nữa.</li>
            <li><strong>Bảo mật tuyệt đối:</strong> Hệ thống mã hóa hiện đại, bảo vệ thông tin cá nhân của bạn.</li>
            <li><strong>Ưu đãi liên tục:</strong> Nhận thưởng ngay khi đăng ký tài khoản và tham gia các chương trình khuyến mãi độc quyền.</li>
        </ul>
    </section>
    <section>
        <h2>Lợi ích khi đăng ký tài khoản K89bet</h2>
        <ul>
            <li><strong>Thời gian giao dịch nhanh chóng:</strong> Nạp tiền và rút tiền chỉ trong vài phút.</li>
            <li><strong>Chăm sóc khách hàng 24/7:</strong> Đội ngũ hỗ trợ nhiệt tình luôn sẵn sàng giải đáp mọi thắc mắc.</li>
            <li><strong>Chương trình khách hàng thân thiết:</strong> Tích điểm và nhận quà hấp dẫn khi tham gia thường xuyên tại K89bet.</li>
        </ul>
    </section>
    <section>
    <h2>Lời kết</h2>
     <p>
            K89bet không chỉ là nơi bạn thử vận may mà còn là điểm đến lý tưởng để trải nghiệm cá cược chuyên nghiệp. Với các hướng dẫn chi tiết đăng ký tài khoản K89bet, bạn sẽ dễ dàng bắt đầu hành trình khám phá thế giới giải trí đẳng cấp. Tham gia ngay hôm nay để nhận ưu đãi hấp dẫn và tận hưởng các dịch vụ đỉnh cao!
        </p>
    </section>
`

export function HomePricing({ sx, ...other }: StackProps) {
  const theme = useTheme();



  const renderAnimateButton = ({ label, href }: ButtonData) => (
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
        href={href}
        startIcon={<Iconify icon="iconoir:flash" width={40} />}
        sx={{ p: 4, fontSize: 40 }}
      >
        {label}
      </Button>
    </Box>
  )

  const renderContentDesktop = (
    <Box >
      <Stack direction="row" flexWrap="wrap" gap={{ xs: 4, }}>
        <Box sx={{
          mx: { xs: "auto", lg: "0" }
        }}>
          <Image width={256} height={256} src={`${CONFIG.site.basePath}/logo/k89bet-logo.png`} alt="k89bet logo" />
        </Box>
        <Stack direction="column" gap={{ xs: 1.5, sm: 4 }} sx={{
          mx: { xs: "auto", lg: "0" }
        }}>
          {buttonData.map((button, index) => (
            <React.Fragment key={index}>
              {renderAnimateButton(button)}
            </React.Fragment>
          ))}
        </Stack>
      </Stack>
      <Box mt={8}>
      <Markdown children={contentData}/>
      </Box>
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





