import logo from './logo.svg';
import './App.css';

import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';


async function data() {
  // Create
  await DataStore.save(
    new Todo({
		"name": "Lorem ipsum dolor sit amet",
		"description": "Lorem ipsum dolor sit amet"
	})
  );
	
  // Query
  const models = await DataStore.query(Todo);
  console.log(models);
}


function App() {

  data()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
