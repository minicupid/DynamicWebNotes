import {useState} from 'react'

const SearchBar = (props) => {
    const {onSubmit} = props
    const [term, setTerm] = useState('')

    // handler to prevent default form submission behavior
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

    const handleChange = (event) => {
        // get the value from the input field
        setTerm(event.target.value)
    }
  return (
    <div>
        <form onSubmit = {handleFormSubmit}>
            {/* every element to be properly bound needs an onChange and value prop.
            onChange fires every time the use changes the input
            for a text input, that's every time the user clicks a key.
            the value needs to be tied to a piece of local state */}
            <input type = "text" onChange = {handleChange} value = {term}/>
            <button type = "submit"> Search </button>
        </form>
    </div>
  )
}

export default SearchBar
