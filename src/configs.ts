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
  payments: {
    currency: {
      default: "INR" | "USD" | "AED" | "SAR";
      symbol: string;
    };
    gateway?: {
      provider: "phonepe";
      merchantId: string;
      saltKey: string;
      redirectUrl: string;
      callbackUrl?: string;
      isDev?: boolean;
    };
  };
  docs: {
    entityName: string;
    address: string;
    email: string;
    terms: {
      updatedAt: string;
      email?: string;
    };
    privacy: {
      updatedAt: string;
      email?: string;
    };
    refund: {
      updatedAt: string;
      email?: string;
    };
  };
  theme: { primary: string; secondary?: string };
}
