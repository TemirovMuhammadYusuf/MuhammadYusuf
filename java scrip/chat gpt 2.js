function App() {
  const [color, setColor] = React.useState('#000000');
  const [result, setResult] = React.useState('');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleCalculate = () => {
    const red = parseInt(color.substr(1, 2), 16);
    const green = parseInt(color.substr(3, 2), 16);
    const blue = parseInt(color.substr(5, 2), 16);

    const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
    const calculatedResult = luminance > 0.5 ? 'Light' : 'Dark';
    setResult(calculatedResult);
    console.log(calculatedResult); // Natijani konsolga chiqarish
  };

  return (
    <div>
      <h1>Rangbarang Kalkulyator</h1>
      <input type="color" value={color} onChange={handleColorChange} />
      <button onClick={handleCalculate}>Hisoblash</button>
      <p className="result">{result}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
