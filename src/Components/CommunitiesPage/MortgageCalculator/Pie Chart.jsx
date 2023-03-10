import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
import { FaDollarSign } from "react-icons/fa";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// this.props.loanDuration;
//
class PieChart extends Component {
  render() {
    const options = {
      exportEnabled: true,
      animationEnabled: true,
      //   title: {
      //     text: "Mortgage Calculator",
      //   },
      data: [
        {
          type: "pie",
          startAngle: 75,
          toolTipContent: "<b>{label}</b>: {y}%",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}%",
          dataPoints: [
            { y: this.props.homeValue, label: "Home Value" },
            { y: this.props.downPayment, label: "Down Payment" },
            { y: this.props.loanAmount, label: "Loan Amount" },
            { y: this.props.interestRate, label: "Referral" },
          ],
        },
      ],
    };

    return (
      <div>
        <h1>
          Monthly payment: <FaDollarSign />
          {parseFloat(this.props.monthlyPayment.toFixed(2))}/month
        </h1>
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default PieChart;
