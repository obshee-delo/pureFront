import { randomUUID } from "crypto";
import { Client } from "square";
BigInt.prototype.toJSON = function () {
  return this.toString;
};
const { paymantApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: "sanbox",
});
export default async function handler(reg, res) {
  if (reg.method === "POST") {
    const { result } = await paymantApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: reg.body.sourceID,
    });
  }
}
