// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React, { useState } from 'react';

const IndecisionApp = () => {
  const [options, setOptions] = useState([]);

  const handleDeleteOptions = () => {
    setOptions([]);
  };

  const handlePick = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    alert(option);
  };

  const handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (options.includes(option)) {
      return 'This option already exists';
    }

    setOptions((prevOptions) => [...prevOptions, option]);
  };

  return (
    <div>
      <Header title="Indecision" subtitle="Put your life in the hands of a computer" />
      <Action hasOptions={options.length > 0} handlePick={handlePick} />
      <Options options={options} handleDeleteOptions={handleDeleteOptions} />
      <AddOption handleAddOption={handleAddOption} />
    </div>
  );
};

const Header = ({ title, subtitle }) => (
  <div>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
);

const Action = ({ hasOptions, handlePick }) => (
  <div>
    <button onClick={handlePick} disabled={!hasOptions}>
      What should I do?
    </button>
  </div>
);

const Options = ({ options, handleDeleteOptions }) => (
  <div>
    <button onClick={handleDeleteOptions}>Remove All</button>
    {options.map((option) => (
      <Option key={option} optionText={option} />
    ))}
  </div>
);

const Option = ({ optionText }) => <div>{optionText}</div>;

const AddOption = ({ handleAddOption }) => {
  const [error, setError] = useState();

  const onAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = handleAddOption(option);
    setError(error);

    if (!error) {
      e.target.elements.option.value = '';
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={onAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
};

export default IndecisionApp;
