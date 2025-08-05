declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';

declare module 'react-js-loader' {
  interface LoaderProps {
    type?: string;
    bgColor?: string;
    size?: string | number;
    color?: string;
    width?: string | number;
    height?: string | number;
  }

  const Loader: React.FC<LoaderProps>;
  export default Loader;
}
