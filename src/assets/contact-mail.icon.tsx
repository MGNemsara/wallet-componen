import * as React from 'react';
import { SvgCss } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const ContactMailIcon: React.FC<Props> = ({
  width,
  height,
  color = '#F8981D',
}) => {
  return (
    <SvgCss
      xml={`<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.83341 2.83334H14.1667C14.9459 2.83334 15.5834 3.47084 15.5834 4.25001V12.75C15.5834 13.5292 14.9459 14.1667 14.1667 14.1667H2.83341C2.05425 14.1667 1.41675 13.5292 1.41675 12.75V4.25001C1.41675 3.47084 2.05425 2.83334 2.83341 2.83334Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.5834 4.25L8.50008 9.20833L1.41675 4.25" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `}
      width={width ?? 19}
      height={height ?? 14}
    />
  );
};

export { ContactMailIcon };
