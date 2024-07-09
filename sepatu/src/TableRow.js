import React from "react";
import { Button } from "react-bootstrap";
const TableRow = ({ shoe, onDelete, index }) => {
return (
<tr>
<td>{shoe.merk}</td>
<td>{shoe.nama}</td>
<td>{shoe.ukuran}</td>
<td>{shoe.stok}</td>
<td>{shoe.harga}</td>
<td>
<Button variant="danger" onClick={() => onDelete(index)}>
Hapus
</Button>
</td>
</tr>
);
};
export default TableRow;