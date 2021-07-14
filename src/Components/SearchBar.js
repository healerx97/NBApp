import { FloatingLabel, Form, FormGroup } from 'react-bootstrap'
function SearchBar({setSearchTerm}) {
    function handleChange(e) {
        setSearchTerm(e.target.value)
    }
    return (
            <FloatingLabel
                controlId= "floatingInput"
                label= "Search players"
                className= "mb-3"
            >
                <Form.Control type="text" placeholder="Player name goes here" onChange = {handleChange}/>
            </FloatingLabel>
    )
}

export default SearchBar