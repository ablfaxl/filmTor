import { useContext, createContext } from "react";
import React from "react";
import { useState, useEffect } from "react";


export const DbContex = createContext();
//

//
function Contex({ children }) {
  const [list, setList] = useState(null);
  useEffect(() => {
    if(list){
      localStorage.setItem("dataBase", JSON.stringify(list));
    }
  }, [list]);

  const addUser = (Obj) => {
    const clone = { ...list };
    clone.Users.push(Obj);
    console.log(clone.Users);
    setList(clone);
  };
  return (
    <DbContex.Provider
      value={{
        list,
        setList,
        addUser,
      }}
    >
      {children}
    </DbContex.Provider>
  );
}

export function List() {
  return useContext(DbContex);
}

export default Contex;
