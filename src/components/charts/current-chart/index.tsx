import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ApexChart from 'react-apexcharts';
import { data } from '../../../tempdata/chartdata';
import * as s from "./styles";

const CurrentChart = () => {

    const [startX, setStartX] = useState(data[0].x);
    const [endX, setEndX] = useState(data[data.length-1].x);

    // const beforeZoom = (chartContext, {})

    const series = [{
        data: [] // startX ~ endX 까지의 data만 가져옴
    }]

    const chart = new ApexChart(series);

    return (
        <s.Wrapper>
            
            <ApexChart
                type="candlestick"
                series={[
                    {
                        data: data
                    }
                ]}
                options={{
                    chart: {
                        // height: 1000,
                        // width: 1000
                        zoom: {
                            zoomedArea: {

                            }
                        }
                    }
                }}
            />
        </s.Wrapper>
    );
};

export default CurrentChart;
