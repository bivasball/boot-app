import Header from "./components/Header";
//import DynamicTable from "./dynamic-table/DynamicTable";

import FetchData from "./pages/FetchData";
//import FetchData from "./pages/FetchDataPython";
//import FetchData from "./pages/FetchDataPython2";
import FetchShareMarket from "./pages/FetchShareMarket";
import Footer from "./pages/Footer";

import Home from "./pages/Home";
import CountApp from "./components/ButtonTesting";
//import TableDataDynamic from "./pages/TableDataDynamic";
//import TestCors from "./pages/TestCors";
import FetchShareMarketCORS from "./pages/FetchShareMarketCORS";
import PlotlyAndReact from "./pages/PlotlyAndReact";
import Test002 from "./components/practice/Test002";


function App() {
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

      <Test002 value22={theValue} />

    </div>
  );
}
//<FetchShareMarketCORS/>
//<TestCors/>
//<FetchShareMarket/>
//<TableDataDynamic/>
//<FetchData/>
//<DynamicTable/>
//<PlotlyAndReact/>
export default App;
