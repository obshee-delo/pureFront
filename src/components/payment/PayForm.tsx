// Dependencies
import * as React from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";

const PayForm = () => (
  <div className="max-w-[30%] mx-[auto]">
    <PaymentForm
      /**
       * Identifies the calling form with a verified application ID generated from
       * the Square Application Dashboard.
       */
      applicationId="sq0idp-Y0QZQ-Xx-Xx-Xx-Xx"
      // locationId="dsfg"
      /**
       * Invoked when payment form receives the result of a tokenize generation
       * request. The result will be a valid credit card or wallet token, or an error.
       */
      cardTokenizeResponseReceived={async (token, buyer) => {
        // console.info({ token, buyer });
        alert(JSON.stringify(token, null, 2));
      }}
      /**
       * This function enable the Strong Customer Authentication (SCA) flow
       *
       * We strongly recommend use this function to verify the buyer and reduce
       * the chance of fraudulent transactions.
       */
      // createVerificationDetails={() => ({
      //   amount: "1.00",
      //   /* collected from the buyer */
      //   billingContact: {
      //     addressLines: ["123 Main Street", "Apartment 1"],
      //     familyName: "Doe",
      //     givenName: "John",
      //     countryCode: "GB",
      //     city: "London",
      //   },
      //   currencyCode: "GBP",
      //   intent: "CHARGE",
      // })}
      /**
       * Identifies the location of the merchant that is taking the payment.
       * Obtained from the Square Application Dashboard - Locations tab.
       */
      locationId="LID"
    >
      {/* <CreditCard /> */}
      <CreditCard />
    </PaymentForm>
  </div>
);

export default PayForm;
