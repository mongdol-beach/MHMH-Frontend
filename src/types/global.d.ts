import { KakaoInstance } from './kakao';

declare global {
  interface Window {
    Kakao: KakaoInstance;
  }
}

export { };
