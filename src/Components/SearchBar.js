import { Form, FormGroup } from 'react-bootstrap'
import FloatingLabel from "react-bootstrap-floating-label"
function SearchBar ({setSearchTerm, searchTerm, handleChange}) {
    
    return (
            <form onSubmit={handleChange}>
                <input type= "text" placeholder= "Search players.."/>
                <input type= "submit" value = "SEARCH"/>
            </form>
    )
}

export default SearchBar