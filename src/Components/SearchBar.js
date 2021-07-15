import { Form, FormGroup } from 'react-bootstrap'
import FloatingLabel from "react-bootstrap-floating-label"
function SearchBar({setSearchTerm, searchTerm}) {
    function handleChange(event) {
        event.preventDefault()
        setSearchTerm(event.target.value)
    }
    return (
            <form>
                <input type= "text" placeholder= "Search players.." value = {searchTerm} onChange= {handleChange}/>
            </form>
    )
}

export default SearchBar