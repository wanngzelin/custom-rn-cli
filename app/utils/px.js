import { PixelRatio } from 'react-native';

const dpr = PixelRatio.get();
//px转dp

export function scaleSize(px) {
  return px / dpr
}