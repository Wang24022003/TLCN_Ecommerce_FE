import { useState } from "react";
import publicRoutes from "./router/routes/publicRoutes";
import Router from "./router/Router";


function App() {
  const [allRouters, setAllRouters] = useState([...publicRoutes])
  console.log(allRouters)
  return <Router allRouters={allRouters} />

}

export default App;
