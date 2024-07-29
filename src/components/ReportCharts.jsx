import React, { useState } from 'react'
import Chart from 'react-apexcharts'

function ReportCharts() {
    const[data, setData] = useState({
        series: [
            {
                name: 'Sales',
                data: [31, 40, 28, 51, 42, 82, 56],
            },
            {
                name: 'Revenu',
                data: [11, 32, 45, 32, 34, 52, 41],
            },
            {
                name: 'Customers',
                data: [15, 11, 32, 18, 9, 24, 11],
            },
        ],
        options:{
            Chart:{
                height:350,
                type: 'area',
                toolbar:{
                    show:false
                },
            },
            markers:{
                size: 4,
                colors: ['#4154f1', '#2eca6a', '#ff771d'],
                fills:{
                    type: 'gradient',
                    gradient:{
                        shadeIntensity:1,
                        opacityFrom:0.3,
                        opacityTo: 0.4,
                        stops: [0, 90, 100],
                    },
                },
                dataLabels:{
                    enabled:false,
                },
                stroke:{
                    curve: 'smoothh',
                    width: 2,
                },
                xaxis: {
                    type: 'datatime',
                    categories: [
                        '2024-07-26T00:00:00.000Z',
                        '2024-07-26T00:01:00.000Z',
                        '2024-07-26T00:02:00.000Z',
                        '2024-07-26T00:03:00.000Z',
                        '2024-07-26T00:04:00.000Z',
                        '2024-07-26T00:05:00.000Z',
                        '2024-07-26T00:06:00.000Z',
                    ],
                },
                tooltip: {
                    x: {
                        format: 'dd/mm/yy HH:mm',
                    },
                },
            },
        },
    });
  return (
    <Chart
    options = {data.options}
    series={data.series}
    type={data.options.Chart.type}
    height={data.options.Chart.height}
    />
  );
}

export default ReportCharts