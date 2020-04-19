import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Countdown from "react-countdown-now";
// import Moment from 'react-moment';
import moment from 'moment';

const FeaturePage = () => {
  const [today, setToday] = useState(new Date());
  const [newYear] = useState(new Date(2021, 1, 12, 0, 0, 0, 0));
  const [income, setIncome] = useState("");
  const [totalIncome, setTotalIncome] = useState(
    parseInt(localStorage.getItem("totalIncome")) || 0
  );
  const [financialData] = useState(
    JSON.parse(localStorage.getItem("financialData"))
  );
  const [statusIncome, setStatusIncome] = useState("income");
  const [paidFor, setPaidFor] = useState('');
  let todayMoment = moment().format('DD/MM/YYYY');

	const [data, setData] = useState([{
		id: 1,
		day: '1',
		items: {
			paidFor: 'Ăn sáng',
			price: '30000'
		}
  }]);

  useEffect(() => {
    setInterval(() => {
      setToday(new Date().toString());
    }, 1000);
  }, [today]);

  useEffect(() => {
    localStorage.setItem("totalIncome", totalIncome);
    localStorage.setItem("financialData", JSON.stringify(financialData));
    setData(data);
    console.log(data);
  }, [totalIncome, financialData, data]);

  //set status if it's income/outcome
  const handleStatus = e => {
    setStatusIncome(e.target.value);
  };

  // set value income when fill input
  const handleChange = e => {
    let value = e.target.value;
    setIncome(parseInt(value));
  };

  //set value paidFor by fill input
  const handlePaidForOnchange = e => {
    let value = e.target.value;
    setPaidFor(value);
	};

  //set value input when enter
  const handleInput = e => {
    if (statusIncome === "income" && e.charCode === 13) {
      setTotalIncome(income + totalIncome);
      setIncome("");
      
    } else if (statusIncome === "outcome" && e.charCode === 13) {
      setTotalIncome(totalIncome - income);
      setIncome("");
      data.push({
        id: data.length + 1,
        day: todayMoment,
        items: {
          paidFor: paidFor,
          price: income
        }
      })
    }
  };
	
  return (
    <div>
      <div>DateTime {today.toString()}</div>
			{/* <Moment format='DD/MM/YYYY'>{today}</Moment> */}

			{data && data.map(item => (
				<div key={item.id}>
					{/* <span>{item.id} </span> */}
          <span>{item.day} </span>
					<span>{item.items.paidFor} </span>
					<span>{item.items.price} </span>
				</div>
			))}

      {/* {financialData &&
        financialData.total.map(item => (
          <div key={item.id}>
            <div> {item.paidFor} {item.price.formatedValue} </div>
          </div>
        ))} */}

      <div className="countdown-box">
        <Countdown date={newYear} />
      </div>
      <FormControl component="fieldset">
        <RadioGroup
          defaultValue="income"
          aria-label="status"
          name="status"
          value={statusIncome}
          onChange={handleStatus}
        >
          <FormControlLabel value="income" control={<Radio />} label="Income" />
          <FormControlLabel
            value="outcome"
            control={<Radio />}
            label="Outcome"
          />
        </RadioGroup>
      </FormControl>
      <div>
        <TextField
          id="paid-for"
          type="string"
          label="Paid For"
          variant="outlined"
          value={paidFor}
          onChange={handlePaidForOnchange}
          required
        />
        <TextField
          id="outlined-basic"
          type="number"
          label="Input"
          variant="outlined"
          value={income}
          onChange={handleChange}
          onKeyPress={handleInput}
          required
        />
      </div>

      <div>Income : {totalIncome} </div>
    </div>
  );
};

export default FeaturePage;
