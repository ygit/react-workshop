import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ReactJS at Of10 by Geekabyte 🚀</h1>
          <h2 className="App-subtitle">This is a nice subtitle 🎉</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-detail">Following are some observations on the workshop 🙂</p>
        // ----------
        <td className="App-list">
          1. Need volunteers pre;
          2. Need Fast WiFi
          3. Volunteers should be able to solve attendees queries in fastest way possible
          4. There should always be a single fast path to get things done
          5. Consider Mac - Windows - Ubuntu OS supports
        </td>

        // ----------

        <table><tr>
        <td class="nopre">Line A
        Line B
        Line C
        This is a cell with no whitespace setting</td>

        </tr></table><table><tr>

        <td class="withpre">Line 1
        Line 2
        Line 3
        This is a cell with white-space: pre</td>

        </tr></table><table><tr>

        <td class="withprewrap">Line 1
        Line 2
        Line 3
        This is a cell with white-space: pre-wrap</td>

        </tr></table>

        // ----------
      </div>
    );
  }
}

export default App;
