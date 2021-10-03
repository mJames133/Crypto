import React, { useState, useEffect, useCallback } from "react";
import { Chart, Line } from "react-chartjs-2";
import { numberWithCommas } from "../helpers";

const CryptoChart = (props) => {
  const [coinChart, setCoinChart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);

  const getDates = (data) => {
    let tempDates = [];
    for (let i = 0; i < 70; i++) {
      const date_ob = new Date(data.market_caps[i][0]);
      const year = date_ob.getFullYear();
      const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
      const date = ("0" + date_ob.getDate()).slice(-2);
      tempDates.push(year + "-" + month + "-" + date);
    }
    setIsLoaded(true);
    setSelectedDates(tempDates);
  };

  const getData = useCallback(async () => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${props.coin}/market_chart?vs_currency=usd&days=70&interval=daily`
    );
    const data = await res.json();
    setCoinChart(data);
    getDates(data);
  }, [props]);

  useEffect(() => {
    getData();
  }, [getData]);

  Chart.defaults.LineWithLine = Chart.defaults.line;
  Chart.controllers.LineWithLine = Chart.controllers.line.extend({
    draw: function (ease) {
      Chart.controllers.line.prototype.draw.call(this, ease);

      if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
        var activePoint = this.chart.tooltip._active[0],
          ctx = this.chart.ctx,
          x = activePoint.tooltipPosition().x,
          topY = this.chart.legend.bottom,
          bottomY = this.chart.chartArea.bottom;

        // draw line
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#07C";
        ctx.stroke();
        ctx.restore();
      }
    },
  });

  const data = {
    labels: selectedDates,
    datasets: [
      {
        label: "Total Volumes",
        data: coinChart.total_volumes?.map(
          (_, index) => coinChart.total_volumes[index][1]
        ),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        hidden: true,
      },
      {
        label: "Price",
        data: coinChart.prices?.map((_, index) => coinChart.prices[index][1]),
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        fill: false,
      },
    ],
  };

  const options = {
    legend: { display: false },
    maintainAspectRatio: false,

    tooltips: {
      displayColors: false,

      mode: "index",
      intersect: false,
      callbacks: {
        label: (tooltipItem, chart) =>
          data.datasets.map(
            (ds) =>
              ds.label +
              ": $" +
              numberWithCommas(ds.data[tooltipItem.index].toFixed(2))
          ),
      },
    },
  };

  return (
    <div>
      {isLoaded && (
        <div style={{ position: "relative", height: 300 }}>
          <Line data={data} options={options} />
        </div>
      )}
    </div>
  );
};

export default CryptoChart;
