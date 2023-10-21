import { useContext } from "react";
import BooksContext from "../content/books";
function useBooksContext() {
    return useContext(BooksContext)
}
export default useBooksContext; 