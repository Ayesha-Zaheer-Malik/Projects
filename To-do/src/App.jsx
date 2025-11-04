import React, { Suspense, lazy, useState } from "react";
import "./App.css";
import { ProviderFunc } from "./Context";
import { Input } from "./Input";
import { Display } from "./Tasks";


const Lazi = lazy(() =>
  import("./Fetch").then((m) => ({ default: m.Fetching }))
);
function App() {
  const[load,setLoad]=useState(true);

  return (
    <>
      <Suspense fallback={<p>Loading Fetching Component...</p>}>
      {load?<Lazi />:null}
        
      </Suspense>

      <ProviderFunc>
        <h1>React Js To-Do</h1>
        <Input />
        <Display />
      </ProviderFunc>
    </>
  );
}

export default App;
