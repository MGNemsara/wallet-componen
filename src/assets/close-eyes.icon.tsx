import * as React from 'react';
import { SvgCss } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

// const xml = ``;
//
// const EyesIcon: React.FC<Props> = ({ width, height, color="#DDD9E4" }) => {
//   return <SvgCss xml={xml} width={width} height={height} fill={'white'} />;
// };

const CloseEyesIcon: React.FC<Props> = ({ width, height,color="#DDD9E4" }) => {
  return (
    <SvgCss
      xml={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2895_9550)">
<path d="M11.7668 11.7666C11.538 12.0122 11.262 12.2092 10.9553 12.3459C10.6486 12.4825 10.3176 12.556 9.9819 12.5619C9.64623 12.5678 9.3128 12.5061 9.0015 12.3803C8.69021 12.2546 8.40743 12.0675 8.17003 11.8301C7.93264 11.5927 7.74549 11.3099 7.61975 10.9986C7.49402 10.6873 7.43227 10.3539 7.43819 10.0182C7.44411 9.68252 7.51759 9.35148 7.65423 9.04481C7.79087 8.73815 7.98787 8.46215 8.2335 8.23327M14.9502 14.9499C13.5257 16.0358 11.7911 16.6373 10.0002 16.6666C4.16683 16.6666 0.833496 9.99994 0.833496 9.99994C1.87007 8.06819 3.30778 6.38045 5.05016 5.04994L14.9502 14.9499ZM8.25016 3.53327C8.82377 3.39901 9.41105 3.33189 10.0002 3.33327C15.8335 3.33327 19.1668 9.99994 19.1668 9.99994C18.661 10.9463 18.0577 11.8372 17.3668 12.6583L8.25016 3.53327Z" stroke="#F8981D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.833496 0.833252L19.1668 19.1666" stroke="#F8981D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2895_9550">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

`}
      width={width}
      height={height}
    />
  );
};
export { CloseEyesIcon };
