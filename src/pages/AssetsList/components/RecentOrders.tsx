import React from "react";
import { Card } from "@mui/material";
import RecentOrdersTable from "./RecentOrderTable";

const RecentOrders = () => {
  const cryptoOrders = [
    {
      id: "1",
      orderDetails: "enjoy",
      orderDate: new Date().getTime(),
      status: "available",
      orderID: "VUVX709ET7BY",
      sourceName: "Bank Account",
      sourceDesc: "*** 1111",
      amountCrypto: 34.4565,
      amount: 56787,
      cryptoCurrency: "ETH",
      currency: "$"
    },
    {
      id: "2",
      orderDetails: "shade",
      orderDate: new Date().getTime(),
      status: "available",
      orderID: "23M3UOG65G8K",
      sourceName: "Bank Account",
      sourceDesc: "*** 1111",
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: "BTC",
      currency: "$"
    },
    {
      id: "3",
      orderDetails: "police",
      orderDate: new Date().getTime(),
      status: "under-maintenance",
      orderID: "F6JHK65MS818",
      sourceName: "Bank Account",
      sourceDesc: "*** 1111",
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: "BTC",
      currency: "$"
    },
    {
      id: "4",
      orderDetails: "movement",
      orderDate: new Date().getTime(),
      status: "available",
      orderID: "QJFAI7N84LGM",
      sourceName: "Bank Account",
      sourceDesc: "*** 1111",
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: "BTC",
      currency: "$"
    },
    {
      id: "5",
      orderDetails: "production",
      orderDate: new Date().getTime(),
      status: "allocated",
      orderID: "BO5KFSYGC0YW",
      sourceName: "Bank Account",
      sourceDesc: "*** 1111",
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: "BTC",
      currency: "$"
    },
    {
      id: "6",
      orderDetails: "mother",
      orderDate: new Date().getTime(),
      status: "available",
      orderID: "6RS606CBMKVQ",
      sourceName: "Bank Account",
      sourceDesc: "*** 1111",
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: "BTC",
      currency: "$"
    },
    {
      id: "7",
      orderDetails: "equator",
      orderDate: new Date().getTime(),
      status: "allocated",
      orderID: "479KUYHOBMJS",
      sourceName: "Bank Account",
      sourceDesc: "*** 1212",
      amountCrypto: 2.346546,
      amount: 234234,
      cryptoCurrency: "BTC",
      currency: "$"
    },
    {
      id: "8",
      orderDetails: "Paypal Withdraw",
      orderDate: new Date().getTime(),
      status: "available",
      orderID: "W67CFZNT71KR",
      sourceName: "Paypal Account",
      sourceDesc: "*** 1111",
      amountCrypto: 3.345456,
      amount: 34544,
      cryptoCurrency: "BTC",
      currency: "$"
    },
    {
      id: "9",
      orderDetails: "her",
      orderDate: new Date().getTime(),
      status: "available",
      orderID: "63GJ5DJFKS4H",
      sourceName: "Bank Account",
      sourceDesc: "*** 2222",
      amountCrypto: 1.4389567945,
      amount: 123843,
      cryptoCurrency: "BTC",
      currency: "$"
    },
    {
      id: "10",
      orderDetails: "Wallet Transfer",
      orderDate: new Date().getTime(),
      status: "under-maintenance",
      orderID: "17KRZHY8T05M",
      sourceName: "Wallet Transfer",
      sourceDesc: "John's Cardano Wallet",
      amountCrypto: 765.5695,
      amount: 7567,
      cryptoCurrency: "ADA",
      currency: "$"
    }
  ];

  return (
    <Card>
      {/* @ts-expect-error change */}
      <RecentOrdersTable cryptoOrders={cryptoOrders} />
    </Card>
  );
};

export default RecentOrders;
