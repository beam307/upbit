import * as React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import * as querystring from 'querystring';


export interface TransactionProp {

}

export interface orderBookProp {
  currency: string;
  errorCode: string;
  result: string;
  timestamp: string;
  ask: {price: string,qty: string}[]
  bid: {price: string,qty: string}[]
}

export const TransactionList: React.FC<TransactionProp> = () => {
  const { data } = useQuery<orderBookProp>('orderbook',
      () => axios.get('/orderbook').then(res => res.data));
  console.log(data);

  if (data?.result === 'success') {
    return (
        <div>
          <table className="ty01">
            <thead>
            <tr>
              <th className="cAlign">체결시간</th>
              <th>체결가격(KRW)</th>
              <th>체결량(BTC)</th>
              <th className="rAlign">체결금액(KRW)</th>
            </tr>
            </thead>
          </table>
        </div>
    );
  }

  return null;

};
