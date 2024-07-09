// ShoeContext.js
import React, { createContext, useState } from 'react';
export const ShoeContext = createContext();
export const ShoeProvider = ({ children }) => {
const [shoes, setShoes] = useState([]);
const addShoe = (shoe) => {
setShoes([...shoes, shoe]);
};
const deleteShoe = (index) => {
const newShoes = [...shoes];
newShoes.splice(index, 1);
setShoes(newShoes);
};
return (
<ShoeContext.Provider value={{ shoes, addShoe, deleteShoe }}>
{children}
</ShoeContext.Provider>
);
};
