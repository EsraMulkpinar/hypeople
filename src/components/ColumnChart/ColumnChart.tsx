import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ColumnChartState {
  options: ApexOptions;
  series: ApexAxisChartSeries;
}

class ColumnChart extends React.Component<{}, ColumnChartState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "bar",
          height: 105,
          toolbar: {
            show: false,
          },
        },

        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: ["M", "T", "W", "T", "F", "S"],
          labels: {
            style: {
              colors: "#8C8C8C",
            },
          },
          offsetY: -12,
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          min: 0,
          max: 100,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        fill: {
          opacity: 1,
        },
        colors: ["#1677FF", "#80E6FF"],
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
        legend: {
          show: false,
        },
        grid: {
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
      },
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 32],
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 27],
        },
      ],
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
        />
      </div>
    );
  }
}

export default ColumnChart;
