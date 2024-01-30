import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ApexChart from 'react-apexcharts';
import { data } from '../../../tempdata/chartdata';
import * as s from "./styles";
import { useRecoilValue } from 'recoil';
import { stockInfo, stdStockValue, comStockValue } from '../../../store/stocks';

const PastChart = () => {

  const curValues = useRecoilValue(comStockValue);
  const curStockInfo = useRecoilValue(stockInfo);

  return (
    <s.Wrapper>

      <ApexChart
        type="candlestick"
        series={[
          {
            data: curValues
          }
        ]}
        
        options={{
          chart: {
            defaultLocale: "en"
          },
          
          plotOptions: {
            candlestick: {
              colors: {
                upward: "#FF0000",
                downward: "#0500FF"
              }
            }
          },
          xaxis: {
            type: 'datetime',
            tickPlacement: "on",
            labels: {
              show: true,
              trim: true,
            },
            title: {
              text: "날짜/시간"
            }
          },
          yaxis: {
            forceNiceScale: true,
          }
        }} 
      />
    </s.Wrapper>
  );
};

export default PastChart;
