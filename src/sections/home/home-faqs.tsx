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
    question: 'K89Bet có giấy phép kinh doanh hợp pháp không?',
    answer: (
      <Typography>
        K89Bet có
        <Link
          href="https://k89.app/giay-phep-kinh-doanh"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
          giấy phép kinh doanh
        </Link>
        hợp pháp được cấp bởi các cơ quan quản lý uy tín như Curacao eGaming, Malta Gaming Authority, và UK Gambling Commission. Những giấy phép này đảm bảo rằng K89Bet hoạt động tuân thủ các quy định quốc tế và bảo vệ quyền lợi người chơi.
      </Typography>
    ),
  },
  {
    question: 'K89Bet có an toàn cho người chơi không?',
    answer: (
     <Typography>
       K89Bet cam kết mang đến môi trường cá cược trực tuyến an toàn với các biện pháp bảo vệ dữ liệu và giao dịch nghiêm ngặt. Giấy phép từ các cơ quan quản lý uy tín cũng là một bảo chứng cho sự an toàn của người chơi trên nền tảng này.
     </Typography>
    ),
  },
  {
    question: 'Những lợi ích khi tham gia cá cược tại K89Bet là gì?',
    answer: (
      <Typography>
      Tham gia cá cược tại K89Bet, người chơi sẽ được trải nghiệm một nền tảng uy tín với giấy phép hợp pháp, bảo mật cao, hỗ trợ khách hàng chuyên nghiệp, và các chương trình khuyến mãi hấp dẫn, tạo ra giá trị gia tăng đáng kể.
    </Typography>
    ),
  },
  {
    question: 'Làm thế nào để đăng ký tài khoản K89Bet an toàn?',
    answer: (
      <Typography>
        Để
        <Link
          href="https://k89.app/huong-dan/dang-ky-k89bet"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
          đăng ký K89Bet,
        </Link>
        bạn chỉ cần truy cập vào
        <Link
          href="https://k89.app/"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
         trang web chính thức K89Bet com,
        </Link>
        cung cấp thông tin cần thiết như số điện thoại và mật khẩu và kiểm tra chính xác thông tin rồi xác nhận. K89Bet đảm bảo rằng mọi thông tin cá nhân của bạn được bảo mật tuyệt đối.
      </Typography>
    ),
  },
  {
    question: 'K89Bet có chương trình khuyến mãi nào dành cho người chơi mới không?',
    answer: (
      <Typography>
        K89Bet thường xuyên cung cấp các chương trình khuyến mãi hấp dẫn cho người chơi mới, bao gồm các gói thưởng chào mừng và các khuyến mãi đặc biệt theo sự kiện. Bạn có thể kiểm tra trang
        <Link
          href="https://k89.app/huong-dan/khuyen-mai-k89bet"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
          khuyến mãi K89Bet,
        </Link>
        để cập nhật những ưu đãi mới nhất.
      </Typography>
    ),
  },
  {
    question: 'Làm thế nào để rút tiền K89Bet một cách an toàn và nhanh chóng?',
    answer: (
      <Typography>
        K89Bet cung cấp nhiều phương thức rút tiền an toàn và nhanh chóng, bao gồm chuyển khoản ngân hàng, ví điện tử, Thời gian xử lý thường từ vài giờ đến vài ngày, tùy thuộc vào phương thức bạn chọn.Nếu bạn vẫn còn thắc mắc hãy đọc chi tiết
         <Link
          href="https://k89.app/huong-dan/rut-tien-k89bet"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
         cách rút tiền K89Bet
        </Link>
          để biết thêm những thông tin cần thiết.
      </Typography>
    ),
  },
  {
    question: 'Những loại cược nào phổ biến nhất tại K89Bet?',
    answer: (
      <Typography>
        K89Bet cung cấp đa dạng các loại cược, từ cá cược thể thao như bóng đá, bóng rổ, đến các trò chơi casino trực tuyến. Các loại cược phổ biến nhất bao gồm cược theo kèo châu Á, cược tỷ số chính xác, và cược live (cược trực tiếp khi trận đấu đang diễn ra).
      </Typography>
    ),
  },
  {
    question: 'K89Bet có chính sách bảo mật nào để bảo vệ thông tin của người chơi?',
    answer: (
      <Typography>
       K89Bet sử dụng công nghệ mã hóa tiên tiến và tuân thủ các quy định bảo mật quốc tế để bảo vệ thông tin cá nhân và tài khoản của người chơi.
        <Link
          href="https://k89.app/chinh-sach-bao-mat"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
        Chính sách bảo mật của K89Bet
        </Link>
       đảm bảo rằng mọi giao dịch và dữ liệu của bạn được bảo mật tuyệt đối.
      </Typography>
    ),
  },
  {
    question: 'K89Bet có hỗ trợ cá cược trên app không?',
    answer: (
      <Typography>
       Có, K89Bet cung cấp một nền tảng cá cược được tối ưu hóa cho điện thoại, cho phép người chơi đặt cược mọi lúc, mọi nơi. App K89Bet được thiết kế để dễ sử dụng và nhanh chóng đáp ứng nhu cầu của người dùng. Nếu bạn vẫn chưa tải app K89Bet về điện thoại của mình. Hãy truy cập vào ngay
       <Link
          href="https://k89.app/huong-dan/tai-app-k89bet"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
        link tải app K89bet chính thức
        </Link>
       và làm theo hướng dẫn.
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
            <Typography variant="h6"> {item.question}</Typography>
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
