import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ApexChart from 'react-apexcharts';
import { data } from '../../../tempdata/chartdata';
import * as s from "./styles";
import { useRecoilValue } from 'recoil';
import { stockInfo, stockValue } from '../../../store/stocks';

const PastChart = () => {

  const curValues = useRecoilValue(stockValue);
  const curStockInfo = useRecoilValue(stockInfo);
  const [startX, setStartX] = useState(curValues[0].x);
  const [endX, setEndX] = useState(curValues[curValues.length - 1].x);

  const transformedValues = curValues.slice(-365);

  return (
    <s.Wrapper>

      <ApexChart
        type="candlestick"
        series={[
          {
            data: transformedValues
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
