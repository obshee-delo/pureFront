// Dependencies
import * as React from "react";
import {
  Ach,
  CreditCard,
  PaymentForm,
  ApplePay,
} from "react-square-web-payments-sdk";

const MyPaymentForm = () => (
  <PaymentForm
    /**
     * Identifies the calling form with a verified application ID generated from
     * the Square Application Dashboard.
     */

    applicationId="sandbox-sq0idb-B-i4MbEZEARTWqSj7Gs9Ww"
    /**
     * Invoked when payment form receives the result of a tokenize generation
     * request. The result will be a valid credit card or wallet token, or an error.
     */
    cardTokenizeResponseReceived={(token, buyer) => {
      console.info({ token, buyer });
    }}
    /**
     * This function enable the Strong Customer Authentication (SCA) flow
     *
     * We strongly recommend use this function to verify the buyer and reduce
     * the chance of fraudulent transactions.
     */
    createVerificationDetails={() => ({
      amount: "1.00",
      /* collected from the buyer */
      billingContact: {
        addressLines: ["123 Main Street", "Apartment 1"],
        familyName: "Doe",
        givenName: "John",
        countryCode: "GB",
        city: "London",
      },
      currencyCode: "RUSSIA",
      intent: "CHARGE",
    })}
    /**
     * Identifies the location of the merchant that is taking the payment.
     * Obtained from the Square Application Dashboard - Locations tab.
     */
    locationId="LID"
  >
    <CreditCard />
    <p className="mb-2"></p>
    <Ach
      accountHolderName="John Doe"
      redirectURI="https://example.com/"
      transactionId="12345"
    />
    <p></p>
    {/* <ApplePay /> */}
  </PaymentForm>
);

export default MyPaymentForm;
