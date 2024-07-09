// FormInput.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
const FormInput = () => {
const dispatch = useDispatch();
const [shoe, setShoe] = useState({
merk: '',
nama: '',
ukuran: '',
stok: '',
harga: '',
});
const handleChange = (e) => {
setShoe({
...shoe,
[e.target.name]: e.target.value,
});
};
const handleSubmit = (e) => {
e.preventDefault();
dispatch({ type: 'ADD_SHOE', payload: shoe });
setShoe({
merk: '',
nama: '',
ukuran: '',
stok: '',
harga: '',
});
};
return (
<Form onSubmit={handleSubmit} className="form">
<Form.Group controlId="formMerk">
<Form.Label>Merk Sepatu</Form.Label>
<Form.Control
type="text"
name="merk"
value={shoe.merk}
onChange={handleChange}
required
/>
</Form.Group>
<Form.Group controlId="formNama">
<Form.Label>Nama Sepatu</Form.Label>
<Form.Control
type="text"
name="nama"
value={shoe.nama}
onChange={handleChange}
required
/>
</Form.Group>
<Form.Group controlId="formUkuran">
<Form.Label>Ukuran Sepatu</Form.Label>
<Form.Control
type="text"
name="ukuran"
value={shoe.ukuran}
onChange={handleChange}
required
/>
</Form.Group>
<Form.Group controlId="formStok">
<Form.Label>Stok</Form.Label>
<Form.Control
type="text"
name="stok"
value={shoe.stok}
onChange={handleChange}
required
/>
</Form.Group>
<Form.Group controlId="formHarga">
<Form.Label>Harga</Form.Label>
<Form.Control
type="text"
name="harga"
value={shoe.harga}
onChange={handleChange}
required
/>
</Form.Group>
<Button variant="primary" type="submit">
Tambah
</Button>
</Form>
);
};
export default FormInput;