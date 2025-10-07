import { useState } from 'react'
import SearchBar from './components/SearchBar'
import searchImages from './api'

const App = () => {

    const [images, setImage] = useState('')
    const handleFormSubmit = async (term) => {
        console.log(term)
        const result = await searchImages(term)
        console.log(result)
    }
    return (
        <div>
            <h3> type a term and click enter </h3>
            <SearchBar onSubmit = {handleFormSubmit}/>
        </div>
    )
    }

export default App
