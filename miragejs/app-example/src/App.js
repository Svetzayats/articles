import './App.css';
import React, { useState } from 'react';
import createMirageServer from './server';

createMirageServer();

function App() {
  const [data, setData] = useState(null);
  const [list, setList] = useState(null);

  function fetchData() {
    fetch('/data')
    //  parsing the responce body text as JSON, 
    // more about it https://developer.mozilla.org/en-US/docs/Web/API/Response/json
    .then((responce) => responce.json())
    .then((res) => {
      setData(res.name);
      setList(res.list);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Trying have fun with MirageJS</h1>
      </header>
      <div>{data + ' from our mirage server' || 'There is no data yet'}</div>
      { list && list.map((el) => <div key={el.id}>{el.value}</div>)}
      {!data && <button onClick={fetchData}>Fetch data</button>}
    </div>
  );
}

export default App;
