import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconLike: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18.355 9.511h-2.3l.15-.947a.891.891 0 000-.17V6.468a2.609 2.609 0 00-.698-1.65 2.567 2.567 0 00-3.32-.377 2.6 2.6 0 00-1.044 1.452 4.44 4.44 0 01-1.37 2.418l-1.681.927a1.992 1.992 0 00-1.23-.433H5c-.531 0-1.04.212-1.415.59S3 10.286 3 10.821v7.164c0 .534.21 1.047.586 1.425.375.378.884.59 1.415.59h1.86a1.988 1.988 0 001.65-.887 3.745 3.745 0 002.412.887h4.23a4.24 4.24 0 002.363-.72 4.285 4.285 0 001.57-1.92l1.71-4.15a2.686 2.686 0 00-.24-2.507 2.635 2.635 0 00-2.202-1.192zm.6 2.922l-1.72 4.151c-.17.416-.458.771-.828 1.02a2.23 2.23 0 01-1.253.38h-4.231a1.79 1.79 0 01-1.38-.654l-.681-.816v-5.4l1.87-1.008c1.601-.887 2.281-3.466 2.351-3.748a.595.595 0 01.56-.464.578.578 0 01.58.575v1.843l-.22 1.2h-.91a.997.997 0 00-.707.295 1.011 1.011 0 000 1.424.997.997 0 00.707.296h5.242a.648.648 0 01.647.591.659.659 0 01-.047.315h.02z"
      fill={fill}
    />
  </svg>
);

IconLike.defaultProps = {
  ...iconDefaultProps,
};

export default IconLike;