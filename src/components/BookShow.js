import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useState} from "react";
import useBooksContext from "../hooks/use-books-context";
import BookEdit from "./BookEdit";
function BookShow({book}) {
    const [showEdit, setShowEdit] = useState(false);
    const [open ,setOpen]=useState(false)
    const [qty, setQty]=useState(0)
    const { deleteBookById, editBookById } = useBooksContext();
    const handleClick = () => {
        deleteBookById(book.id);
    }
  
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };
    const handleSubmit = () => {
        setShowEdit(false);
    };
    //
    const handleQuantity = (id) => {
          
                if(book.quantity < qty) {
                    alert(" please your quantity entered is greater than exist")
                    return 0;
                    }
       
                    book.quantity= Number(book.quantity) -qty;
        editBookById(id, book.title, book.description, book.quantity, book.price);
        setOpen((o) => !o)
        setQty(0)
    }
    return <div className="show-book">

        {showEdit?<BookEdit onSubmit= {handleSubmit} book={book}/>:  <>
        <div className="btn-container">
                <button onClick={handleEditClick}><AiFillEdit/></button>
                <button onClick={handleClick}><AiFillDelete/></button>
        </div>
        <div className="img">
        <img alt="img" src={`https://picsum.photos/seed//${book.id}125/125`} />
        </div>
            <div>Title: {book.title} </div>
            <div>Description: {book.description} </div>
            <div>quantity: { book.quantity}</div>
            <div>price: {book.price}</div>
            {open &&
                <label>
                    <span>Number Of Quantity</span>
                    <input type="number" value={qty} onChange={(e)=>setQty(e.target.value) }/>
                </label>
           }
            <button onClick={()=>handleQuantity(book.id)}>{book.quantity?"buy":"sold out"}</button>
       
    </>
    }
        </div>;
}
export default BookShow;