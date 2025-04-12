import type { StackProps } from '@mui/material/Stack';

import { useState } from 'react';
import { m } from 'framer-motion';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionDetails, { accordionDetailsClasses } from '@mui/material/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatPlusIcon, FloatTriangleDownIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const FAQs = [
  {
    question: 'K89Bet có uy tín không?',
    answer: (
      <Typography>
       K89Bet là một nền tảng cá cược trực tuyến uy tín với giấy phép hoạt động hợp pháp và tuân thủ các quy định về an toàn, bảo mật. Nền tảng này sử dụng công nghệ mã hóa dữ liệu cao cấp để bảo vệ thông tin của người chơi, đảm bảo an toàn trong quá trình giao dịch và tham gia cá cược.
      </Typography>
    ),
  },
  {
    question: 'Tôi có thể tải ứng dụng K89Bet ở đâu?',
    answer: (
     <Typography>
      Bạn có thể tải app K89Bet trực tiếp từ trang web chính thức tại <Link
          href="https://k89bet68.com/"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5, fontWeight:"bold" }}
        >
          https://k89bet68.com
        </Link> cho cả Android và iOS. Đảm bảo rằng bạn chỉ tải app K89Bet từ nguồn chính thức để tránh những trang giả mạo nhà cái K89Bet.
     </Typography>
    ),
  },
  {
    question: 'Tôi có thể nạp tiền K89Bet bằng những phương thức nào?',
    answer: (
      <Typography>
      K89Bet hỗ trợ nhiều phương thức nạp tiền như chuyển khoản ngân hàng, thẻ ATM nội địa, ví điện tử và các phương thức thanh toán quốc tế. Thời gian nạp tiền thường diễn ra nhanh chóng, trong vòng vài phút.
    </Typography>
    ),
  },
  {
    question: 'Làm thế nào để rút tiền K89Bet?',
    answer: (
      <Typography>
        Để rút tiền, bạn cần đăng nhập vào tài khoản K89Bet, chọn mục Rút tiền, sau đó điền thông tin tài khoản ngân hàng và số tiền muốn rút. Thời gian xử lý rút tiền có thể mất từ 30 phút đến vài giờ, tùy thuộc vào phương thức thanh toán và thời gian xử lý của ngân hàng.
      </Typography>
    ),
  },
  {
    question: 'Khuyến mãi K89Bet có điều kiện gì không?',
    answer: (
      <Typography>
        Các chương trình khuyến mãi K89Bet thường đi kèm với các điều kiện nhất định, như yêu cầu về số lần đặt cược hoặc số tiền tối thiểu. Bạn nên đọc kỹ điều khoản và điều kiện của từng chương trình khuyến mãi để biết cách tham gia và nhận thưởng một cách hiệu quả.
      </Typography>
    ),
  },
  {
    question: 'K89Bet có hỗ trợ khách hàng 24/7 không?',
    answer: (
      <Typography>
        K89Bet có đội ngũ hỗ trợ khách hàng hoạt động 24/7, sẵn sàng giải đáp mọi thắc mắc và hỗ trợ bạn trong quá trình nạp tiền, rút tiền, hoặc gặp vấn đề kỹ thuật. Bạn có thể liên hệ qua chat trực tuyến, email, hoặc điện thoại.
      </Typography>
    ),
  },
  {
    question: 'Làm thế nào để đăng ký tài khoản K89Bet?',
    answer: (
      <Typography>
       Để đăng ký tài khoản, bạn truy cập trang web chính thức K89Bet tại <Link
          href="https://k89bet68.com/"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5, fontWeight:"bold" }}
        >
          https://k89bet68.com
        </Link>   hoặc mở ứng dụng, nhấn vào Đăng ký, điền thông tin cá nhân như tên đăng nhập, mật khẩu, và số điện thoại. Sau đó nhấn Đăng ký để hoàn tất.
      </Typography>
    ),
  },
  {
    question: 'K89Bet có chương trình khuyến mãi dành cho người mới không?',
    answer: (
      <Typography>
      Có, K89Bet có nhiều chương trình khuyến mãi hấp dẫn dành cho người chơi mới, bao gồm tiền thưởng khi nạp lần đầu, thưởng nạp lần thứ hai, và nhiều ưu đãi khác. Hãy theo dõi các chương trình khuyến mãi mới nhất để không bỏ lỡ cơ hội nhận thưởng.
      </Typography>
    ),
  },
];

// ----------------------------------------------------------------------

export function HomeFAQs({ sx, ...other }: StackProps) {
  const [expanded, setExpanded] = useState<string | false>(FAQs[0].question);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderDescription = (
    <SectionTitle
      title="FAQ - Những"
      txtGradient="câu hỏi thường gặp"
      sx={{ textAlign: 'center' }}
    />
  );

  const renderContent = (
    <Stack
      spacing={1}
      sx={{
        mt: 8,
        mx: 'auto',
        maxWidth: 720,
        mb: { xs: 5, md: 8 },
      }}
    >
      {FAQs.map((item, index) => (
        <Accordion
          key={item.question}
          component={m.div}
          variants={varFade({ distance: 24 }).inUp}
          expanded={expanded === item.question}
          onChange={handleChange(item.question)}
          sx={{
            borderRadius: 2,
            transition: (theme) =>
              theme.transitions.create(['background-color'], {
                duration: theme.transitions.duration.short,
              }),
            '&::before': { display: 'none' },
            '&:hover': {
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.16),
            },
            '&:first-of-type, &:last-of-type': { borderRadius: 2 },
            [`&.${accordionClasses.expanded}`]: {
              m: 0,
              borderRadius: 2,
              boxShadow: 'none',
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            },
            [`& .${accordionSummaryClasses.root}`]: {
              py: 3,
              px: 2.5,
              minHeight: 'auto',
              [`& .${accordionSummaryClasses.content}`]: {
                m: 0,
                [`&.${accordionSummaryClasses.expanded}`]: { m: 0 },
              },
            },
            [`& .${accordionDetailsClasses.root}`]: { px: 2.5, pt: 0, pb: 3 },
          }}
        >
          <AccordionSummary
            expandIcon={
              <Iconify
                width={20}
                icon={expanded === item.question ? 'mingcute:minimize-line' : 'mingcute:add-line'}
              />
            }
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography variant="h3" sx={{fontSize:"18px !important"}}> {item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.answer}</AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );

  const renderContact = (
    <Stack
      alignItems="center"
      sx={{
        px: 3,
        py: 8,
        textAlign: 'center',
        background: (theme) =>
          `linear-gradient(270deg, ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}, ${varAlpha(theme.vars.palette.grey['500Channel'], 0)})`,
      }}
    >
      <m.div variants={varFade().in}>
        <Typography variant="h4">Nếu bạn vẫn còn thắc mắc?</Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
        Hãy mô tả trường hợp của bạn để nhận được sự tư vấn chính xác nhất
        </Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <Button
          color="inherit"
          variant="contained"
          href="https://chat.ichatlink.net/widget/standalone.html?eid=6233a0539bdc913d59eb5539c1e4cbf7&language=vi"
          startIcon={<Iconify icon="fluent:mail-24-filled" />}
        >
          Liên hệ ngay với chúng tôi
        </Button>
      </m.div>
    </Stack>
  );

  return (
    <Stack component="section" sx={{ ...sx }} {...other}>
      <MotionViewport sx={{ py: 10, position: 'relative' }}>
        <TopLines />

        <Container>
          {renderDescription}
          {renderContent}
        </Container>

        <Stack sx={{ position: 'relative' }}>
          <BottomLines />
          {renderContact}
        </Stack>
      </MotionViewport>
    </Stack>
  );
}

// ----------------------------------------------------------------------

function TopLines() {
  return (
    <>
      <Stack
        spacing={8}
        alignItems="center"
        sx={{
          top: 64,
          left: 80,
          position: 'absolute',
          transform: 'translateX(-15px)',
        }}
      >
        <FloatTriangleDownIcon sx={{ position: 'static', opacity: 0.12 }} />
        <FloatTriangleDownIcon
          sx={{
            position: 'static',
            opacity: 0.24,
            width: 30,
            height: 15,
          }}
        />
      </Stack>
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </>
  );
}

function BottomLines() {
  return (
    <>
      <FloatLine sx={{ top: 0, left: 0 }} />
      <FloatLine sx={{ bottom: 0, left: 0 }} />
      <FloatPlusIcon sx={{ top: -8, left: 72 }} />
      <FloatPlusIcon sx={{ bottom: -8, left: 72 }} />
    </>
  );
}
