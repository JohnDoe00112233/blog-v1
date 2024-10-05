import type { ButtonProps } from '@mui/material/Button';

import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export function SignInButton({ sx, ...other }: ButtonProps) {
  return (
    <Button
      component={RouterLink}
      href={paths.login}
      variant="outlined"
      sx={sx}
      {...other}
    >
      Đăng nhập
    </Button>
  );
}
