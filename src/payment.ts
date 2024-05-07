import axios from "axios";
import crypto from "crypto";

export class PhonepeGateway {
  private isDev: boolean;
  private merchatId: string;
  private saltKey: string;

  private redirectUrl: string;
  private callbackUrl: string;

  constructor(p: {
    merchantId: string;
    saltKey: string;
    redirectUrl: string;
    callbackUrl?: string;
    isDev?: boolean;
  }) {
    this.merchatId = p.merchantId;
    this.saltKey = p.saltKey;
    this.redirectUrl = p.redirectUrl;
    this.isDev = p.isDev || false;

    this.callbackUrl = p.callbackUrl || "";
  }

  async initPayment(amount: number, transactionId: string, userId: string) {
    const DEV_SALT = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
    const DEV_MERCHANT_ID = "PGTESTPAYUAT";
    const PROD_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";
    const DEV_URL: string =
      "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

    const data: any = {
      merchantId: this.isDev ? DEV_MERCHANT_ID : this.merchatId,
      merchantTransactionId: transactionId,
      merchantUserId: userId,
      amount: amount * 100,
      redirectUrl: this.redirectUrl,
      callbackUrl: this.callbackUrl,
      redirectMode: "REDIRECT",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const payload = JSON.stringify(data);

    const payloadMain = Buffer.from(payload).toString("base64");
    const keyIndex = 1;
    const SALT_KEY: string = this.isDev ? DEV_SALT : this.saltKey;
    const string = payloadMain + "/pg/v1/pay" + SALT_KEY;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;

    const headers: any = {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
    };

    const options = {
      method: "POST",
      url: this.isDev ? DEV_URL : PROD_URL,
      headers: headers,
      data: {
        request: payloadMain,
      },
    };
    const resp: any = await axios
      .request(options)
      .then(function (response: any) {
        return response.data;
      })
      .catch(function (error: any) {
        console.error(error);
        return null;
      });
    return resp;
  }
}
