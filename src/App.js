import logo from './logo.svg';
import './App.css';
import { Dashboard } from './Component/Dashboard';
import { SignIn } from './Component/SignIn';
import { PieChart1 } from './Component/PieChart';
// import { PieChartComp } from './Component/PieChartComp';
// import { Chart } from './Component/Chart';


function App() {
  return (
    <div className="App">
      <SignIn/>
      <Dashboard/>
      
    </div>
  );
}

export default App;
