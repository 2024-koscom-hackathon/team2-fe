import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ApexChart from 'react-apexcharts';
import { data } from '../../../tempdata/chartdata';
import * as s from "./styles";

const CurrentChart = () => {

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
                    }
                }}
            />
        </s.Wrapper>
    );
};

export default CurrentChart;
