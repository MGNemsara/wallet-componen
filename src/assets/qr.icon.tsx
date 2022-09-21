import * as React from 'react';
import { SvgCss } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const QrIcon: React.FC<Props> = ({ width, height, color = '#FF9800' }) => {
  return (
    <SvgCss
      xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H8.01V2H2V8H4V4ZM4 16H2V22H8.01V20H4V16ZM20 20H16V22H22V16H20V20ZM16 4H20V8H22V2H16V4Z" fill="#F8981D"/>
<path d="M5 11H11V5H5V11ZM7 7H9V9H7V7ZM5 19H11V13H5V19ZM7 15H9V17H7V15ZM19 5H13V11H19V5ZM17 9H15V7H17V9ZM13.01 13H15.01V15H13.01V13ZM15.01 15H17.01V17H15.01V15ZM17.01 17H19.01V19H17.01V17ZM17.01 13H19.01V15H17.01V13Z" fill="#F8981D"/>
</svg>
`}
      width={width}
      height={height}
    />
  );
};
export { QrIcon };
