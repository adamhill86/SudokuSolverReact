import React, { Component } from "react";
import "./Table.css";

/*
const table = () => {
  return (
    <div className="container">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td className="data">
              <input className="text-center" type="text"/>
            </td>
            <td className="data">
              <input className="text-center" type="text" />
            </td>
            <td className="data">
              <input className="text-center" type="text" />
            </td>
            <td className="data">
              <input className="text-center" type="text" />
            </td>
            <td className="data">
              <input className="text-center" type="text" />
            </td>
            <td className="data">
              <input className="text-center" type="text" />
            </td>
            <td className="data">
              <input className="text-center" type="text" />
            </td>
            <td className="data">
              <input className="text-center" type="text" />
            </td>
            <td className="data">
              <input className="text-center" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
            <td>
              <input className="text-center" type="text" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};*/

class Table extends Component {
  // state = {
  //   puzzle: [
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0]
  //   ]
  // };

  /**
   * Handle a change in the sudoku table
   * Gets any input from the user and stores it in the state puzzle
   */
  // handleChange = (row, col, event) => {
  //   let updatedPuzzle = this.props.puzzle;
  //   console.log(event);
  //   updatedPuzzle[row][col] = parseInt(event.target.value, 10);
  //   this.setState({puzzle: updatedPuzzle});
  //   console.log(this.props.puzzle);
  // }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center mb-3">
          <table>
            <tbody>
              <tr id="0">
                <td className="data top outside-left">
                  <input className="text-center" type="text" value={this.props.puzzle[0][0]} onChange={(e) => this.props.changed(0, 0, e)}/>
                </td>
                <td className="data top">
                  <input className="text-center" type="text" value={this.props.puzzle[0][1]} onChange={(e) => this.props.changed(0, 1, e)}/>
                </td>
                <td className="data top inner">
                  <input className="text-center" type="text" value={this.props.puzzle[0][2]} onChange={(e) => this.props.changed(0, 2, e)}/>
                </td>
                <td className="data top">
                  <input className="text-center" type="text" value={this.props.puzzle[0][3]} onChange={(e) => this.props.changed(0, 3, e)}/>
                </td>
                <td className="data top">
                  <input className="text-center" type="text" value={this.props.puzzle[0][4]} onChange={(e) => this.props.changed(0, 4, e)}/>
                </td>
                <td className="data top inner">
                  <input className="text-center" type="text" value={this.props.puzzle[0][5]} onChange={(e) => this.props.changed(0, 5, e)}/>
                </td>
                <td className="data top">
                  <input className="text-center" type="text" value={this.props.puzzle[0][6]} onChange={(e) => this.props.changed(0, 6, e)}/>
                </td>
                <td className="data top">
                  <input className="text-center" type="text" value={this.props.puzzle[0][7]} onChange={(e) => this.props.changed(0, 7, e)}/>
                </td>
                <td className="data top outside-right">
                  <input className="text-center" type="text" value={this.props.puzzle[0][8]} onChange={(e) => this.props.changed(0, 8, e)}/>
                </td>
              </tr>
              <tr id="1">
                <td className="data outside-left">
                  <input className="text-center" type="text" value={this.props.puzzle[1][0]} onChange={(e) => this.props.changed(1, 0, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[1][1]} onChange={(e) => this.props.changed(1, 1, e)}/>
                </td>
                <td className="data inner">
                  <input className="text-center" type="text" value={this.props.puzzle[1][2]} onChange={(e) => this.props.changed(1, 2, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[1][3]} onChange={(e) => this.props.changed(1, 3, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[1][4]} onChange={(e) => this.props.changed(1, 4, e)}/>
                </td>
                <td className="data inner">
                  <input className="text-center" type="text" value={this.props.puzzle[1][5]} onChange={(e) => this.props.changed(1, 5, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[1][6]} onChange={(e) => this.props.changed(1, 6, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[1][7]} onChange={(e) => this.props.changed(1, 7, e)}/>
                </td>
                <td className="data outside-right">
                  <input className="text-center" type="text" value={this.props.puzzle[1][8]} onChange={(e) => this.props.changed(1, 8, e)}/>
                </td>
              </tr>
              <tr id="2">
                <td className="data outside-left bottom">
                  <input className="text-center" type="text" value={this.props.puzzle[2][0]} onChange={(e) => this.props.changed(2, 0, e)}/>
                </td>
                <td className="data bottom">
                  <input className="text-center" type="text" value={this.props.puzzle[2][1]} onChange={(e) => this.props.changed(2, 1, e)}/>
                </td>
                <td className="data bottom inner">
                  <input className="text-center" type="text" value={this.props.puzzle[2][2]} onChange={(e) => this.props.changed(2, 2, e)}/>
                </td>
                <td className="data bottom">
                  <input className="text-center" type="text" value={this.props.puzzle[2][3]} onChange={(e) => this.props.changed(2, 3, e)}/>
                </td>
                <td className="data bottom">
                  <input className="text-center" type="text" value={this.props.puzzle[2][4]} onChange={(e) => this.props.changed(2, 4, e)}/>
                </td>
                <td className="data bottom inner">
                  <input className="text-center" type="text" value={this.props.puzzle[2][5]} onChange={(e) => this.props.changed(2, 5, e)}/>
                </td>
                <td className="data bottom">
                  <input className="text-center" type="text" value={this.props.puzzle[2][6]} onChange={(e) => this.props.changed(2, 6, e)}/>
                </td>
                <td className="data bottom">
                  <input className="text-center" type="text" value={this.props.puzzle[2][7]} onChange={(e) => this.props.changed(2, 7, e)}/>
                </td>
                <td className="data bottom outside-right">
                  <input className="text-center" type="text" value={this.props.puzzle[2][8]} onChange={(e) => this.props.changed(2, 8, e)}/>
                </td>
              </tr>
              <tr id="3">
                <td className="data outside-left">
                  <input className="text-center" type="text" value={this.props.puzzle[3][0]} onChange={(e) => this.props.changed(3, 0, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[3][1]} onChange={(e) => this.props.changed(3, 1, e)}/>
                </td>
                <td className="data inner">
                  <input className="text-center" type="text" value={this.props.puzzle[3][2]} onChange={(e) => this.props.changed(3, 2, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[3][3]} onChange={(e) => this.props.changed(3, 3, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[3][4]} onChange={(e) => this.props.changed(3, 4, e)}/>
                </td>
                <td className="data inner">
                  <input className="text-center" type="text" value={this.props.puzzle[3][5]} onChange={(e) => this.props.changed(3, 5, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[3][6]} onChange={(e) => this.props.changed(3, 6, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[3][7]} onChange={(e) => this.props.changed(3, 7, e)}/>
                </td>
                <td className="data outside-right">
                  <input className="text-center" type="text" value={this.props.puzzle[3][8]} onChange={(e) => this.props.changed(3, 8, e)}/>
                </td>
              </tr>
              <tr id="4">
                <td className="data outside-left">
                  <input className="text-center" type="text" value={this.props.puzzle[4][0]} onChange={(e) => this.props.changed(4, 0, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[4][1]} onChange={(e) => this.props.changed(4, 1, e)}/>
                </td>
                <td className="data inner">
                  <input className="text-center" type="text" value={this.props.puzzle[4][2]} onChange={(e) => this.props.changed(4, 2, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[4][3]} onChange={(e) => this.props.changed(4, 3, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[4][4]} onChange={(e) => this.props.changed(4, 4, e)}/>
                </td>
                <td className="data inner">
                  <input className="text-center" type="text" value={this.props.puzzle[4][5]} onChange={(e) => this.props.changed(4, 5, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[4][6]} onChange={(e) => this.props.changed(4, 6, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[4][7]} onChange={(e) => this.props.changed(4, 7, e)}/>
                </td>
                <td className="data outside-right">
                  <input className="text-center" type="text" value={this.props.puzzle[4][8]} onChange={(e) => this.props.changed(4, 8, e)}/>
                </td>
              </tr>
              <tr id="5">
                <td className="data outside-left bottom">
                  <input className="text-center" type="text" value={this.props.puzzle[5][0]} onChange={(e) => this.props.changed(5, 0, e)}/>
                </td>
                <td className="data bottom">
                  <input className="text-center" type="text" value={this.props.puzzle[5][1]} onChange={(e) => this.props.changed(5, 1, e)}/>
                </td>
                <td className="data bottom inner">
                  <input className="text-center" type="text" value={this.props.puzzle[5][2]} onChange={(e) => this.props.changed(5, 2, e)}/>
                </td>
                <td className="data bottom">
                  <input className="text-center" type="text" value={this.props.puzzle[5][3]} onChange={(e) => this.props.changed(5, 3, e)}/>
                </td>
                <td className="data bottom">
                  <input className="text-center" type="text" value={this.props.puzzle[5][4]} onChange={(e) => this.props.changed(5, 4, e)}/>
                </td>
                <td className="data bottom inner">
                  <input className="text-center" type="text" value={this.props.puzzle[5][5]} onChange={(e) => this.props.changed(5, 5, e)}/>
                </td>
                <td className="data bottom">
                  <input className="text-center" type="text" value={this.props.puzzle[5][6]} onChange={(e) => this.props.changed(5, 6, e)}/>
                </td>
                <td className="data bottom">
                  <input className="text-center" type="text" value={this.props.puzzle[5][7]} onChange={(e) => this.props.changed(5, 7, e)}/>
                </td>
                <td className="data bottom outside-right">
                  <input className="text-center" type="text" value={this.props.puzzle[5][8]} onChange={(e) => this.props.changed(5, 8, e)}/>
                </td>
              </tr>
              <tr id="6">
                <td className="data outside-left">
                  <input className="text-center" type="text" value={this.props.puzzle[6][0]} onChange={(e) => this.props.changed(6, 0, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[6][1]} onChange={(e) => this.props.changed(6, 1, e)}/>
                </td>
                <td className="data inner">
                  <input className="text-center" type="text" value={this.props.puzzle[6][2]} onChange={(e) => this.props.changed(6, 2, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[6][3]} onChange={(e) => this.props.changed(6, 3, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[6][4]} onChange={(e) => this.props.changed(6, 4, e)}/>
                </td>
                <td className="data inner">
                  <input className="text-center" type="text" value={this.props.puzzle[6][5]} onChange={(e) => this.props.changed(6, 5, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[6][6]} onChange={(e) => this.props.changed(6, 6, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[6][7]} onChange={(e) => this.props.changed(6, 7, e)}/>
                </td>
                <td className="data outside-right">
                  <input className="text-center" type="text" value={this.props.puzzle[6][8]} onChange={(e) => this.props.changed(6, 8, e)}/>
                </td>
              </tr>
              <tr id="7">
                <td className="data outside-left">
                  <input className="text-center" type="text" value={this.props.puzzle[7][0]} onChange={(e) => this.props.changed(7, 0, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[7][1]} onChange={(e) => this.props.changed(7, 1, e)}/>
                </td>
                <td className="data inner">
                  <input className="text-center" type="text" value={this.props.puzzle[7][2]} onChange={(e) => this.props.changed(7, 2, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[7][3]} onChange={(e) => this.props.changed(7, 3, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[7][4]} onChange={(e) => this.props.changed(7, 4, e)}/>
                </td>
                <td className="data inner">
                  <input className="text-center" type="text" value={this.props.puzzle[7][5]} onChange={(e) => this.props.changed(7, 5, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[7][6]} onChange={(e) => this.props.changed(7, 6, e)}/>
                </td>
                <td className="data">
                  <input className="text-center" type="text" value={this.props.puzzle[7][7]} onChange={(e) => this.props.changed(7, 7, e)}/>
                </td>
                <td className="data outside-right">
                  <input className="text-center" type="text" value={this.props.puzzle[7][8]} onChange={(e) => this.props.changed(7, 8, e)}/>
                </td>
              </tr>
              <tr id="8">
                <td className="data bottom outside-left">
                  <input className="text-center" type="text" value={this.props.puzzle[8][0]} onChange={(e) => this.props.changed(8, 0, e)}/>
                </td>
                <td className="data bottom">
                  <input className="text-center" type="text" value={this.props.puzzle[8][1]} onChange={(e) => this.props.changed(8, 1, e)}/>
                </td>
                <td className="data bottom inner">
                  <input className="text-center" type="text" value={this.props.puzzle[8][2]} onChange={(e) => this.props.changed(8, 2, e)}/>
                </td>
                <td className="data bottom">
                  <input className="text-center" type="text" value={this.props.puzzle[8][3]} onChange={(e) => this.props.changed(8, 3, e)}/>
                </td>
                <td className="data bottom">
                  <input className="text-center" type="text" value={this.props.puzzle[8][4]} onChange={(e) => this.props.changed(8, 4, e)}/>
                </td>
                <td className="data bottom inner">
                  <input className="text-center" type="text" value={this.props.puzzle[8][5]} onChange={(e) => this.props.changed(8, 5, e)}/>
                </td>
                <td className="data bottom">
                  <input className="text-center" type="text" value={this.props.puzzle[8][6]} onChange={(e) => this.props.changed(8, 6, e)}/>
                </td>
                <td className="data bottom">
                  <input className="text-center" type="text" value={this.props.puzzle[8][7]} onChange={(e) => this.props.changed(8, 7, e)}/>
                </td>
                <td className="data bottom outside-right">
                  <input className="text-center" type="text" value={this.props.puzzle[8][8]} onChange={(e) => this.props.changed(8, 8, e)}/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;