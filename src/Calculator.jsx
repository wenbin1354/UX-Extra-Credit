import { useState } from "react";
import "./Calculator.css";

function Calculator() {
	const [displayValue, setDisplayValue] = useState("");

	const handleButtonClick = (value) => {
		if (value === "^") {
			setDisplayValue((prevValue) => prevValue + "**");
		} else {
			setDisplayValue((prevValue) => prevValue + value);
		}
	};

	const handleClear = () => {
		setDisplayValue("");
	};

	const handleCalculate = () => {
		try {
			const result = eval(displayValue);
			setDisplayValue(result.toString());
		} catch (error) {
			setDisplayValue("Error");
		}
	};

	return (
		<div className="calculator">
			<div className="calculator-display">{displayValue}</div>
			<div className="calculator-buttons">
				<div className="calculator-row">
					<button
						className="calculator-button calculator-button--gray"
						onClick={() => handleButtonClick("7")}
					>
						7
					</button>
					<button
						className="calculator-button calculator-button--gray"
						onClick={() => handleButtonClick("8")}
					>
						8
					</button>
					<button
						className="calculator-button calculator-button--gray"
						onClick={() => handleButtonClick("9")}
					>
						9
					</button>
					<button
						className="calculator-button calculator-button--orange"
						onClick={() => handleButtonClick("/")}
					>
						÷
					</button>
				</div>
				<div className="calculator-row">
					<button
						className="calculator-button calculator-button--gray"
						onClick={() => handleButtonClick("4")}
					>
						4
					</button>
					<button
						className="calculator-button calculator-button--gray"
						onClick={() => handleButtonClick("5")}
					>
						5
					</button>
					<button
						className="calculator-button calculator-button--gray"
						onClick={() => handleButtonClick("6")}
					>
						6
					</button>
					<button
						className="calculator-button calculator-button--orange"
						onClick={() => handleButtonClick("*")}
					>
						×
					</button>
				</div>
				<div className="calculator-row">
					<button
						className="calculator-button calculator-button--gray"
						onClick={() => handleButtonClick("1")}
					>
						1
					</button>
					<button
						className="calculator-button calculator-button--gray"
						onClick={() => handleButtonClick("2")}
					>
						2
					</button>
					<button
						className="calculator-button calculator-button--gray"
						onClick={() => handleButtonClick("3")}
					>
						3
					</button>
					<button
						className="calculator-button calculator-button--orange"
						onClick={() => handleButtonClick("-")}
					>
						-
					</button>
				</div>
				<div className="calculator-row">
					<button
						className="calculator-button calculator-button--gray"
						onClick={() => handleButtonClick("0")}
					>
						0
					</button>
					<button
						className="calculator-button calculator-button--gray"
						onClick={() => handleButtonClick(".")}
					>
						.
					</button>
					<button
						className="calculator-button calculator-button--gray"
						onClick={() => handleClear()}
					>
						Clear
					</button>
					<button
						className="calculator-button calculator-button--orange"
						onClick={() => handleButtonClick("+")}
					>
						+
					</button>
				</div>
				<div className="calculator-row">
					<button
						className="calculator-button calculator-button--gray"
						onClick={() => handleButtonClick("(")}
					>
						(
					</button>
					<button
						className="calculator-button calculator-button--gray"
						onClick={() => handleButtonClick(")")}
					>
						)
					</button>

					<button
						className="calculator-button calculator-button--gray"
						onClick={() => handleButtonClick("^")}
					>
						^
					</button>
					<button
						className="calculator-button calculator-button--orange"
						onClick={() => handleCalculate()}
					>
						=
					</button>
				</div>
			</div>
		</div>
	);
}

export default Calculator;
