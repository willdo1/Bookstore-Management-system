import React from "react";
import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice]=useState('')
    const { BookCreate } = useBooksContext();
 
    const handleSubmit = (event) => {
        event.preventDefault();
        BookCreate(title, description, quantity, price);
        setTitle('');
        setDescription('');
        setQuantity('');
        setPrice('');
    };
    return <div>
           <form onSubmit={handleSubmit}>
            <h2>Add Book</h2>
            <label>Title</label>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} />
            <label>Description of Book</label>
            <input value={description} onChange={(e) => setDescription(e.target.value)} />
            <label>Quantity</label>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <label>Price</label>
            <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} />
            <button>Add</button>
            </form> 
        </div>;
    
}
export default BookCreate;