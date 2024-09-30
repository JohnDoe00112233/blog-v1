import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navData = [
  { title: 'Trang chủ', path: '/', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Nổ Hũ',
    path: paths.jackpot,
    icon: <Iconify width={22} icon="solar:atom-bold-duotone" />,
  },
  {
    title: 'Casino',
    path: paths.casino,
    icon: <Iconify width={22} icon="solar:file-bold-duotone" />,
  },
  {
    title: 'Xổ số',
    icon: <Iconify width={22} icon="solar:notebook-bold-duotone" />,
    path: paths.lottery,
  },
  {
    title: 'Thể Thao',
    icon: <Iconify width={22} icon="solar:notebook-bold-duotone" />,
    path: paths.comingSoon,
  },
  {
    title: 'Hướng dẫn',
    icon: <Iconify width={22} icon="solar:notebook-bold-duotone" />,
    path: "/huong-dan",
    children: [
      {
        subheader: 'Hướng dẫn người chơi tại nhà cái K89BET',
        items: [
          { title: 'Tải App K89BET', path: paths.download },
          { title: 'Đăng ký K89BET', path: paths.register },
          { title: 'Nạp tiền K89BET', path: paths.recharge },
          { title: 'Rút tiền K89BET', path: paths.withdraw },
        ],
      },
    ],
  },
  {
    title: 'Liên hệ',
    icon: <Iconify width={22} icon="solar:notebook-bold-duotone" />,
    path: paths.contact,
  },
];
