import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPhoneCoins: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M9.73 17.36a.82.82 0 100 1.64.82.82 0 000-1.64z" fill={fill} />
    <path
      d="M16.471 5.9V5c0-.796-.316-1.559-.88-2.121A3.007 3.007 0 0013.467 2H6.005c-.797 0-1.561.316-2.125.879A2.998 2.998 0 003 5v14c0 .796.317 1.559.88 2.121A3.007 3.007 0 006.005 22h7.462c.796 0 1.56-.316 2.124-.879.564-.562.88-1.325.88-2.121v-1.47a6.01 6.01 0 003.264-2.132A5.994 5.994 0 0016.47 5.9zM14.468 19a1 1 0 01-1.002 1H6.005a1.003 1.003 0 01-1.002-1V5a1 1 0 011.002-1h7.462a1.003 1.003 0 011.001 1v.74a6.014 6.014 0 00-4.25 1.757 5.995 5.995 0 000 8.486 6.014 6.014 0 004.25 1.757V19zm1.302-4.06v.2a.75.75 0 01-1.282.53.75.75 0 01-.22-.53v-.2a2.335 2.335 0 01-1.553-1.19.77.77 0 01.36-1 .754.754 0 011.003.36 1.052 1.052 0 00.941.43c.59 0 1.002-.32 1.002-.54 0-.22-.08-.25-.18-.29a3.933 3.933 0 00-1.002-.25l-.591-.12a2.004 2.004 0 01-1.673-1.91 2.089 2.089 0 011.693-1.93v-.21a.75.75 0 01.751-.75.752.752 0 01.751.75v.2a2.336 2.336 0 011.553 1.19.759.759 0 01-.646 1.071.752.752 0 01-.716-.431 1.051 1.051 0 00-.942-.43c-.59 0-1.002.32-1.002.54 0 .22.31.41.501.45l.511.1c.457.058.905.176 1.332.35A1.752 1.752 0 0117.483 13a2.088 2.088 0 01-1.713 1.94z"
      fill={fill}
    />
  </svg>
);

IconPhoneCoins.defaultProps = {
  ...iconDefaultProps,
};

export default IconPhoneCoins;