import { varTranEnter } from './transition';

import type { VariantsType } from '../types';

// ----------------------------------------------------------------------

export const varBounce = (props?: VariantsType) => {
  const durationIn = props?.durationIn;
  const easeIn = props?.easeIn;
  return {
    // IN
    in: {
      initial: {},
      animate: {
        scale: [0.3, 1.1, 0.9, 1.03, 0.97, 1],
        opacity: [0, 1, 1, 1, 1, 1],
        transition: varTranEnter({ durationIn, easeIn }),
      },
      exit: { scale: [0.9, 1.1, 0.3], opacity: [1, 1, 0] },
    },
};
}
