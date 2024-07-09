// Home.js
import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import TableRow from './TableRow';
const Home = () => {
const shoes = useSelector(state => state.shoes);
const dispatch = useDispatch();
const deleteShoe = (index) => {
dispatch({ type: 'DELETE_SHOE', payload: index });
};
return (
<>
<h1 className="title">Daftar Sepatu</h1>
<Table striped bordered hover className="mt-4">
<thead>
{/* Table headers */}
</thead>
<tbody>
{shoes.map((shoe, index) => (
<TableRow key={index} shoe={shoe} onDelete={() =>
deleteShoe(index)} />
))}
</tbody>
</Table>
</>
);
};
export default Home;
