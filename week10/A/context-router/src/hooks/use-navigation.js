import {useContext} from 'react'
import NavigationContext from '../components/Navigation'

const useNavigation = () => {
    return useContext(NavigationContext)
}

export default useNavigation