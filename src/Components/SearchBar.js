import { Form, FormGroup } from 'react-bootstrap'
import FloatingLabel from "react-bootstrap-floating-label"
import '../App.css'
function SearchBar ({setSearchTerm, searchTerm, handleChange}) {
    
    return (
        <div>
            <br></br>
            <form onSubmit={handleChange}>
                <input type= "text" placeholder= "Search players.."/>
                <button type= "submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar