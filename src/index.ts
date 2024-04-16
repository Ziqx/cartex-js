export default class Cartex {
  constructor() {
    console.log("🧺 Cartex Initiated");
  }
}

export interface CartexConfigs {
  ziqx: { appkey: string; url?: string };
  dev?: { port?: number };
  site: { title: string; logo?: string; description?: string };
  theme: { primary: string; secondary?: string };
}
