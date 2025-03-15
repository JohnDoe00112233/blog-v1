import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navData = [
  { title: 'K89BET', path: '/', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'ĐĂNG KÝ K89BET',
    path: paths.register,
    icon: <Iconify width={22} icon="solar:atom-bold-duotone" />,
  },
  {
    title: 'NẠP TIỀN K89BET',
    path: paths.recharge,
    icon: <Iconify width={22} icon="solar:file-bold-duotone" />,
  },
  {
    title: 'RÚT TIỀN K89BET',
    icon: <Iconify width={22} icon="solar:notebook-bold-duotone" />,
    path: paths.withdraw,
  },
  {
    title: 'TẢI APP K89BET',
    icon: <Iconify width={22} icon="solar:notebook-bold-duotone" />,
    path: paths.download,
  },
];
