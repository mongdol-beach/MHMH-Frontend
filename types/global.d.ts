
export {}

declare global {
    interface Window {
      Kakao: {
        init(apiKey: string): void;
        isInitialized(): boolean;
        Link: {
          sendDefault(options: {
            objectType: string;
            content: {
              title: string;
              description: string;
              imageUrl: string;
              link: {
                mobileWebUrl: string;
                webUrl: string;
              };
            };
            buttons: Array<{
              title: string;
              link: {
                mobileWebUrl: string;
                webUrl: string;
              };
            }>;
          }): void;
        };
      };
    }
  }
  