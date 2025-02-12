
export interface KakaoShareButton {
  title: string;
  link: {
    mobileWebUrl: string;
    webUrl: string;
  };
}

export interface KakaoShareContent {
  title: string;
  description: string;
  imageUrl: string;
  link: {
    mobileWebUrl: string;
    webUrl: string;
  };
}

export interface KakaoShareOptions {
  objectType: string;
  content: KakaoShareContent;
  buttons: KakaoShareButton[];
}

export interface KakaoInstance {
  init(apiKey: string): void;
  isInitialized(): boolean;
  Share: {
    sendDefault(options: KakaoShareOptions): void;
  };
}

