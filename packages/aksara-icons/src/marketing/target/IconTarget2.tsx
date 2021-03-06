import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconTarget2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11.3 12.693a1 1 0 00.7.3 1 1 0 00.71-.29l5.33-5.327h1.49a1.651 1.651 0 001.3-.64l.92-1.178a.829.829 0 00-.16-1.3l-1-.58a.81.81 0 01-.29-.289l-.58-1a.83.83 0 00-1.3-.16l-1.31 1.35a1.648 1.648 0 00-.48 1.17v1.248l-5.33 5.287a1 1 0 000 1.409z"
      fill={fill}
    />
    <path
      d="M11.33 10.104a1 1 0 00-.66-1.878 4 4 0 00-2.517 4.879 3.997 3.997 0 004.73 2.79 4.002 4.002 0 002.887-2.573.997.997 0 00-.58-1.354 1 1 0 00-1.3.695 2 2 0 11-2.56-2.559z"
      fill={fill}
    />
    <path
      d="M20.56 8.995a1 1 0 00-.76 1.2c.133.59.2 1.193.2 1.798a7.99 7.99 0 01-4.938 7.386 8.006 8.006 0 01-8.719-1.733A7.993 7.993 0 0113.78 4.198a1 1 0 10.46-1.948A9.696 9.696 0 0012 2a10.005 10.005 0 00-9.239 6.169 9.987 9.987 0 002.168 10.89A10.003 10.003 0 0022 11.993a9.681 9.681 0 00-.25-2.218.999.999 0 00-1.19-.78z"
      fill={fill}
    />
    <path
      d="M12.83 7.066a1.015 1.015 0 00.34-1.998 6.604 6.604 0 00-1.17-.07 7.003 7.003 0 00-6.467 4.318A6.99 6.99 0 007.05 16.94 7.002 7.002 0 0019 11.993a6.483 6.483 0 00-.1-1.16 1.012 1.012 0 00-2 .32c.058.277.092.558.1.84a4.994 4.994 0 01-3.087 4.616 5.003 5.003 0 01-6.817-3.641 4.993 4.993 0 012.126-5.13 5.002 5.002 0 013.608-.772z"
      fill={fill}
    />
  </svg>
);

IconTarget2.defaultProps = {
  ...iconDefaultProps,
};

export default IconTarget2;
