import React, {Component} from "react";

class InputPanel extends Component {
    constructor(){
        super();
        this.state = {
            minNumber:0,
            maxNumber:10,
            guessedNumber:0,
            chosenNumber:0,
            resultPhrase : ""
        };

        this.clear = this.clear.bind(this);
        this.reset = this.reset.bind(this);
        this.setInputNumbers = this.setInputNumbers.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    chooseRandomNumber(min, max){//still has problems
        let chosen = (Math.floor() * (max - min)) + min;
        console.log (chosen);
        return (chosen);
    }

    chackGuessedNumber (guessedNumber, chosenNumber){
        if (guessedNumber === chosenNumber)
            return "Correct!"
        else if (guessedNumber>chosenNumber)
            return "Too high. Try Again."
        else
            return "Too low. Try Again."
    }

    setInputNumbers(e){
        let { name, value } = e.target;
        this.setState({
            [name]: parseInt(value)
        });
    }

    handleSubmit(){
        this.setState({
            chosenNumber : this.chooseRandomNumber(this.state.minNumber, this.state.maxNumber),
            resultPhrase : this.chackGuessedNumber(this.state.guessedNumber , this.state.chosenNumber)
        })
    }

    reset(){
        this.setState ({
            minNumber:0,
            maxNumber:10,
            guessedNumber:0,
            chosenNumber:0,
            resultPhrase : ""
        });
    }

    clear(){
        this.setState({
            guessedNumber:0
        })
    }
    render(){
        return (
            <div>
                <div class = "inputPanel">
                    <input type = "number" placeholder = "min" name = "minNumber" onChange = {this.setInputNumbers}></input>
                    <input type = "number" placeholder = "max" name = "maxNumber" onChange = {this.setInputNumbers}></input>
                    <button type="submit" fullWidth variant="contained" color="primary" className="button">Submit</button>
                    <p>Guess a number between {this.state.minNumber} and {this.state.maxNumber}</p>
                    <input type = "number" placeholder = "Your best Guess" name = "guessNumber" onChange = {this.setInputNumbers}></input>
                    <button onClick = {this.handleSubmit}>Guess</button>
                    <button onClick = {this.clear}>Clear</button>
                    <button onClick = {this.reset}>Reset</button>
                </div>
                <div class = "resultPanel">
                <p>Your last guess was:</p>
                <h1>{this.state.guessedNumber}</h1>
                <h5>{this.state.resultPhrase}</h5>
            </div>
            </div>
        );
    }
}

export default InputPanel;