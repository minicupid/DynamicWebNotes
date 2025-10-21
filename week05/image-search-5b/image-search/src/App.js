import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImages from './api'

const App = () => {

    const [images, setImage] = useState([])
    const handleFormSubmit = async (term) => {
        console.log('do search with', term)
        const result = await searchImages(term)
        console.log(result)
        setImage(result)
    }
    return (
        <div>
            <SearchBar onSubmit = {handleFormSubmit}/>
            <ImageList images = {images}/>
        </div>
    )
    }

export default App
