//import Header from "./components/Header";
//import DynamicTable from "./dynamic-table/DynamicTable";

//import FetchData from "./pages/FetchData";
//import FetchData from "./pages/FetchDataPython";
//import FetchData from "./pages/FetchDataPython2";
//import FetchShareMarket from "./pages/FetchShareMarket";
//import Footer from "./pages/Footer";

//import Home from "./pages/Home";
//import CountApp from "./components/ButtonTesting";
//import TableDataDynamic from "./pages/TableDataDynamic";
//import TestCors from "./pages/TestCors";
//import FetchShareMarketCORS from "./pages/FetchShareMarketCORS";
//import PlotlyAndReact from "./pages/PlotlyAndReact";
//import Test002 from "./components/practice/Test002";
import Login from "./pages/LoginPage/Login";
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*
function App_bak() {
  let theValue = 'My first webpage';
  let theJsonThing = [
    {
      name: "Aklak ansari",
      role: "api developer",
      city: "Nagpur",
    },
  ];

  return (
    <div>
      <Header />
      <Home />
      <Login/>


    </div>
  );
}

//<Test002 value22={theValue} />
//<FetchShareMarketCORS/>
//<TestCors/>
//<FetchShareMarket/>
//<TableDataDynamic/>
//<FetchData/>
//<DynamicTable/>
//<PlotlyAndReact/>
*/
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Homepage />} />
                {/* Add other routes as needed */}
                <Route path="/" element={<Login />} /> {/* Optional: Redirect root to login */}
            </Routes>
        </Router>
    );
}



export default App;
