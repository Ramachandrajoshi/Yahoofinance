import { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import './App.css';
import { useEffect } from 'react';

var timeout;
function App() {
  const stockOptions = ["AAPL", "GOOG", "GOOGL", "MSFT"];
  const [filterVloume, setFilterVolume] = useState(10);
  const [stock, setStock] = useState(stockOptions[0]);

  const fetchStock = async () => {
    if (timeout) { clearTimeout(timeout); timeout = null };
    const result = await (fetch(`http://localhost:4000/${stock}?min=${filterVloume}`).then(r => r.json()));
    console.log(result);

    timeout = setTimeout(async () => await fetchStock(), 10000);
  }

  useEffect(() => {
    fetchStock();
  }, [filterVloume, stock]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <label>Filter out min volumes </label>
            <input type="number" value={filterVloume} onChange={e => setFilterVolume(e.target.value)} />
          </div>
          <div className="col">
            <label>Stock From</label>
            <select value={stock} onChange={e => setStock(e.target.value)}>
              {stockOptions.map(s => <option value={s}>{s}</option>)}
            </select>
          </div>
        </div>
        {/* <ReactECharts
          option={{}}
          notMerge={true}
          lazyUpdate={true}
        /> */}
      </div>
    </div>
  );
}

export default App;
