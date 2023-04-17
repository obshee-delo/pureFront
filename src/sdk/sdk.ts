import { Sdk } from "obsheedelo-sdk/dist/sdk";
import {
  ApiAdapter,
  Connection,
  Credentials,
} from "obsheedelo-sdk/dist/adapter";
// ИНИЦИАЛИЗАЦИЯ
export const sdk = new Sdk(
  new ApiAdapter(
    { transport: "http", host: "0.0.0.0", port: 5432 } as Connection,
    { token: "" } as Credentials
  )
);
// ТИП КУРСА
export type Course = {
  id: string;
  name: string;
  category: string;
};
