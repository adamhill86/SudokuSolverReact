import React, { Component } from 'react';
import Table from "./Table/Table";
import './App.css';

class App extends Component {
  state = {
    puzzle: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  };

  MAX_SIZE = 9;

  /**
   * Handle a change in the sudoku table
   * Gets any input from the user and stores it in the state puzzle
   */
  handleChange = (row, col, event) => {
    let updatedPuzzle = this.state.puzzle;
    //console.log(event);

    let value = parseInt(event.target.value, 10);

    // validate input
    if (value > 9 || value < 1) {
      value = 0; // reset the value
    }

    updatedPuzzle[row][col] = value;
    this.setState({puzzle: updatedPuzzle});
    //console.log(this.state.puzzle);
  }

  handleSolveClick = () => {
    this.solve(0, 0); // start solving from the top left corner
    console.log(this.state.puzzle);
  }

  /**
   * A naive backtracking algorithm to solve a Sudoku puzzle
   */
  solve = (row, col) => {
    // If we've gone through all the positions in the puzzle, start backtracking
    if (row === 9) {
      return true;
    }

    // Check the current position to see if it has been set
    if (this.state.puzzle[row][col] !== 0) {
      if (col === 8) {
        return this.solve(row + 1, (col + 1) % 9); // move to the next row and start at the first column
      } else {
        return this.solve(row, (col + 1) % 9); // otherwise, move to the column
      }
    }

    // Get a list of valid numbers from this position
    let availableNumbers = this.findValidNumbers(row, col);

    // plug in each valid number one at a time and then advance to the next open position
    for (let n of availableNumbers) {
      let updatedPuzzle = this.state.puzzle;
      updatedPuzzle[row][col] = n;
      this.setState({puzzle: updatedPuzzle});

      if (col === 8) {
        if (this.solve(row + 1, (col + 1) % 9)) {
          return true;
        }
      } else {
        if (this.solve(row, (col + 1) % 9)) {
          return true;
        }
      }
    }

    // reset on backtrack
    let updatedPuzzle = this.state.puzzle;
    updatedPuzzle[row][col] = 0;
    this.setState({puzzle: updatedPuzzle});
  }

  /**
   * Finds all the numbers that can be inserted into a given row and column.
   * Checks if numbers are present in the row, column, and 3x3 grid.
   * @param startRow The row to check
   * @param startCol The column to check
   * @return An array of integers representing the valid values.
   */
  findValidNumbers = (startRow, startCol) => {
    let validNumbers = [];

    for (let i = 1; i <= 9; i++) {
      if (!this.containedInRow(startRow, i) && !this.containedInCol(startCol, i) && !this.containedInGrid(startRow, startCol, i)) {
        validNumbers.push(i);
      }
    }

    return validNumbers;
  }

  /**
   * Checks to see if a number is in a row.
   * @param row The current row
   * @param number the value to be checked
   * @return True if the number is in the row; false otherwise
   */
  containedInRow = (row, number) => {
    for (let j = 0; j < this.MAX_SIZE; j++) {
      if (this.state.puzzle[row][j] === number) return true;
    }
    return false;
  }

  /**
   * Checks to see if a number is in a column.
   * @param col The current column
   * @param number The value to be checked
   * @return True if the number is in the row; false otherwise
   */
  containedInCol = (col, number) => {
    for (let i = 0; i < this.MAX_SIZE; i++) {
      if (this.state.puzzle[i][col] === number) return true;
    }
    return false;
  }

  /**
   * Checks to see if a number is in its 3x3 grid
   * @param row The current row
   * @param col The current column
   * @param number The value to be checked
   * @return True if the number is in the box; false otherwise
   */
  containedInGrid = (row, col, number) => {
    //console.log(`row: ${row}, col: ${col}`);
    //console.log((row / 3) * 3);
    //console.log(Math.floor(col / 3));

    // we only want the integer part here
    // Math.floor is used to simulate integer division
    let startingRow = Math.floor((row / 3));
    let startingCol = Math.floor((col / 3));
    startingRow *= 3;
    startingCol *= 3;

    //console.log(`startingRow: ${startingRow}, startingCol: ${startingCol}`);

    for (let i = startingRow; i < startingRow + 3; i++) {
      for (let j = startingCol; j < startingCol + 3; j++) {
        if (this.state.puzzle[i][j] === number) return true;
      }
    }

    return false;
  }

  handleResetClick = () => {
    let newPuzzle = this.state.puzzle;
    for (let i = 0; i < this.MAX_SIZE; i++) {
      newPuzzle[i].fill(0);
    }
    this.setState({puzzle: newPuzzle});
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1 className="display-3">Sudoku Solver</h1>
          <p className="lead">Fill in the squares with the numbers you know (leave any unknown squares as 0). Then hit Solve Puzzle to see the solution.</p>
        </div>
        <Table 
        puzzle={this.state.puzzle}
        changed={this.handleChange}/>
        <div className="container">
          <div className="row justify-content-center mb-3">
            <button 
              className="btn btn-lg btn-primary"
              onClick={this.handleSolveClick}>Solve Puzzle</button>
          </div>
          <div className="row justify-content-center">
            <button
              className="btn btn-lg btn-danger"
              onClick={this.handleResetClick}>Reset Puzzle
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
