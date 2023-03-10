import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import DoughnutChart from "./Doughnut Chart";
import FormInputGroup from "./FormInputGroup";
import PieChart from "./Pie Chart";
import Grid from "@mui/material/Unstable_Grid2";

function Form() {
  const [homeValue, setHomeValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  function calculateLoanAmount() {
    setLoanAmount(homeValue - downPayment);
    return loanAmount;
  }

  function calculateMonthlyPayment() {
    // Percentage conversion
    function percentageToDecimal(percent) {
      return percent / 12 / 100;
    }

    // years to month conversion
    function yearsToMonths(year) {
      return year * 12;
    }

    setMonthlyPayment(
      (percentageToDecimal(interestRate) * loanAmount) /
        (1 -
          Math.pow(
            1 + percentageToDecimal(interestRate),
            -yearsToMonths(loanDuration)
          ))
    );

    return monthlyPayment;
  }

  return (
    <Grid container>
      <Grid xs={6}>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ padding: "0 2rem" }}
        >
          <FormInputGroup
            text="Home Value "
            icon={<FaDollarSign />}
            placeholder={"Enter the value of the home"}
            value={homeValue}
            onInput={(e) => setHomeValue(e.target.value)}
            onkeyup={calculateLoanAmount}
          />
          <FormInputGroup
            text="Down payment"
            icon={<FaDollarSign />}
            placeholder={"Enter your funds"}
            value={downPayment}
            onInput={(e) => setDownPayment(e.target.value)}
            onkeyup={calculateLoanAmount}
          />
          <FormInputGroup
            text="Loan amount"
            icon={<FaDollarSign />}
            placeholder={"Enter your funds"}
            readOnly={true}
            value={loanAmount}
          />
          <FormInputGroup
            text="Interest Rate %"
            placeholder={"Enter your interest rate"}
            value={interestRate}
            onInput={(e) => setInterestRate(e.target.value)}
          />
          <FormInputGroup
            text="Loan Duration (years)"
            placeholder={"Enter the duration of your loan in years"}
            value={loanDuration}
            onInput={(e) => setLoanDuration(e.target.value)}
          />
          <h4
            className="fw-bold"
            style={{
              color: "rgba(21, 101, 192,1)",
              backgroundColor: "rgba(21, 101, 192,0.2)",
              padding: "1rem 0.6rem",
            }}
          >
            Monthly payment: <FaDollarSign />
            {parseFloat(monthlyPayment.toFixed(2))}
          </h4>
          <button
            type="submit"
            onClick={calculateMonthlyPayment}
            className="btn  btn-lg w-100 center"
            style={{
              color: "white",
              backgroundColor: "#1565C0",
            }}
          >
            Calculate
          </button>
        </form>
      </Grid>
      <Grid xs={5}>
        <DoughnutChart
          homeValue={homeValue}
          downPayment={downPayment}
          loanAmount={loanAmount}
          interestRate={interestRate}
          loanDuration={loanDuration}
          monthlyPayment={monthlyPayment}
        />
      </Grid>
    </Grid>
  );
}

export default Form;
