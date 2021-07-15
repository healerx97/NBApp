import { Form, FormGroup } from 'react-bootstrap'
import FloatingLabel from "react-bootstrap-floating-label"
function SearchBar({setSearchTerm, searchTerm}) {
    function handleChange(event) {
        console.log(event.target.value)
        setSearchTerm(event.target.value)
    }
    return (
            <div>
                <form>
                    <input type= "text" placeholder= "Search players.." value = {searchTerm} onChange= {handleChange}/>
                </form>
            </div>
    )
}

export default SearchBar