import React, { useState, useEffect, useRef } from 'react';
import "./App.css";

function App() {
    const [result, setResult] = useState("");
    const [showSc, setShowSc] = useState(false);
    const [mode, setMode] = useState("light");
    const inputRef = useRef(null);

    useEffect(() => inputRef.current.focus());

    function handleClick(e) {
        setResult(result.concat(e.target.name));
    }

    function backspace() {
        setResult(result.slice(0, result.length - 1));
    }

    function clear() {
        setResult("");
    }

    function calculate() {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("Error")
        }
    }

    function toggleScintific() {
        setShowSc((value) => !value);
    }

    function negative() {
        try {
            setResult((value) => {
                const num = parseFloat(value);
                return -num;
            });
        } catch (error) {
            setResult("Error");
        }
    }

    function square() {
        try {
            setResult((value) => {
                const num = parseFloat(value);
                return num * num;
            });
        } catch (error) {
            setResult("Error");
        }
    }

    function squareRoot() {
        try {
            setResult((value) => {
                const num = parseFloat(value);
                return Math.sqrt(num);
            });
        } catch (error) {
            setResult("Error");
        }
    }

    return (
        <div className={`shell ${mode}`}>
            <div className="calc-app">
                <from>
                    <input type="text" value={result} ref={inputRef} />
                </from>
                <div className="ui-controls">
                    <button onClick={() => setMode("light")}>Light</button>
                    <button onClick={() => setMode("dark")}>Dark</button>
                </div>
                <div className="keypad">
                    <button onClick={toggleScintific}>Sc</button>
                    <button id="clear" onClick={clear}>Clear</button>
                    <button id="backspace" onClick={backspace}>C</button>
                    <button name="+" onClick={handleClick}>+</button>
                    <button name="7" onClick={handleClick}>7</button>
                    <button name="8" onClick={handleClick}>8</button>
                    <button name="9" onClick={handleClick}>9</button>
                    <button name="-" onClick={handleClick}>-</button>
                    <button name="4" onClick={handleClick}>4</button>
                    <button name="5" onClick={handleClick}>5</button>
                    <button name="6" onClick={handleClick}>6</button>
                    <button name="*" onClick={handleClick}>&times;</button>
                    <button name="1" onClick={handleClick}>1</button>
                    <button name="2" onClick={handleClick}>2</button>
                    <button name="3" onClick={handleClick}>3</button>
                    <button name="/" onClick={handleClick}>/</button>
                    <button name="0" onClick={handleClick}>0</button>
                    <button name="." onClick={handleClick}>.</button>
                    <button id="result" onClick={calculate}>Result</button>


                </div>
                {showSc && <div className="scientific">
                    <button onClick={negative}>(-)</button>
                    <button onClick={square}><i>X<sup>2</sup></i></button>
                    <button onClick={squareRoot}>&radic;</button>
                </div>}

            </div>
        </div>
    );
}

export default App;