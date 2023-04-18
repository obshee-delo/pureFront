import 'dotenv/config';
import { Sdk } from "obsheedelo-sdk/dist/sdk";
import {
  ApiAdapter,
  Connection,
  Credentials,
} from "obsheedelo-sdk/dist/adapter";

export const sdk = new Sdk(
  new ApiAdapter(
    { transport: "http", host: "0.0.0.0", port: 5432 } as Connection,
    { token: process.env.ADMIN_JWT } as Credentials
  )
);

export type Course = {
  id: string;
  name: string;
  category: string;
};
