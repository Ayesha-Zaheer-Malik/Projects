
import React, { useMemo } from "react";
import { useMyContext } from "./useContext";



export default function DisplayName() {
  const { name, setName } = useMyContext();

 const memoVal = useMemo(() => {
  
  const convert=name.toUpperCase();
  return convert
}, [name]);


  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
     <h2 style={{ marginTop: "1rem" }} >
        {name ? `Converting to UC: ${memoVal}` : "enter name..."}
      </h2>
     
    </div>
  );
}
