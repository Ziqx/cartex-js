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
  theme: { primary: string; secondary?: string };
}
