import logo from './logo.svg';
import './App.css';
import { Dashboard } from './Component/Dashboard';
import { SignIn } from './Component/SignIn';
// import { Chart } from './Component/Chart';


function App() {
  return (
    <div className="App">
      <SignIn/>
      <Dashboard/>
      {/* <NewLineChart/> */}
    </div>
  );
}

export default App;
