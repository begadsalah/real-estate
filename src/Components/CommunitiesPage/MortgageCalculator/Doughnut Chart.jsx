import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
import { FaDollarSign } from "react-icons/fa";
import "./MortgageCalculator.css";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DoughnutChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      //   title: {
      //     text: "Customer Satisfaction",
      //   },
      subtitles: [
        {
          text: `${parseFloat(this.props.monthlyPayment.toFixed(2))}/month`,
          verticalAlign: "center",
          fontSize: 22,
          dockInsidePlotArea: true,
        },
      ],
      data: [
        {
          type: "doughnut",
          showInLegend: true,
          // indexLabel: "{name}: {y}",
          yValueFormatString: "#,###",
          dataPoints: [
            { name: "Down Payment", y: this.props.downPayment },
            // { name: "Loan Amount", y: this.props.loanAmount },
            { name: "Interest Rate", y: this.props.interestRate },
            { name: "Home Value", y: this.props.homeValue },
            { name: "Loan Duration", y: this.props.loanDuration },
          ],
        },
      ],
    };

    return (
      <div>
        {/* <h1>React Doughnut Chart</h1> */}
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default DoughnutChart;
