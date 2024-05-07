export default class Cartex {
  constructor() {
    console.log("🧺 Cartex Initiated");
  }
}

export interface CartexConfigs {
  ziqx: { appkey: string; url?: string };
  dev?: { port?: number };
  site: { title: string; homeUrl: string; logo?: string; description?: string };
  server: {
    api: string;
    root: {
      prod: string;
      dev: string;
    };
  };
  payments?: {
    gateway: {
      provider: "phonepe";
      merchantId: string;
      saltKey: string;
      redirectUrl: string;
      callbackUrl?: string;
      isDev?: boolean;
    };
  };
  theme: { primary: string; secondary?: string };
}
