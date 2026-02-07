import { useEffect, useState, useCallback, useContext } from "react";
import CurrencyContext from '../contexts/CurrencyContext';

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [output, setOutput] = useState(0);
  const { fromCurrency, toCurrency } = useContext(CurrencyContext);

  useEffect(() => {
    // // ACTUAL CODE
    // fetch(`https://v6.exchangerate-api.com/v6/---/pair/${fromCurrency}/${toCurrency}/${amount}`, {
    //     method: "GET",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(response => response.json())
    //     .then(data => setOutput(data.conversion_result))
    //     .catch(err => console.log(err))

    // // FOR TESTING
    setOutput(amount * 2);
  }, [fromCurrency, toCurrency, amount]);

  const handleAmountChange = useCallback((event) => {
    setAmount(event.target.value);
  }, []);

  return (
    <>
      <div className="container">
        <input
          value={amount}
          placeholder="Enter amount"
          className="converter-input"
          onChange={handleAmountChange}
        />
        <p>{fromCurrency}</p>
        <p className="equal-sign">=</p>
        <p className="converter-result">{amount === "" ? "0" : output}</p>
        <p>{toCurrency}</p>
      </div>
    </>
  );
}

export default CurrencyConverter;