import './App.css';
import Test from './components/Test/Test';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 3600);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='test' element={<Test expiryTimestamp={time} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;