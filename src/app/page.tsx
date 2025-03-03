import './globals.css';
import DonutChart from './components/DonutChart';

function App() {
  return (
    <div className='container flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold'>Donut Chart</h1>
      <DonutChart />
    </div>
  );
}

export default App;
