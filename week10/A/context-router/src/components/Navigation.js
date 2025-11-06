import { createContext, use, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useffect(() => {
        const handler = () => { setCurrentPath(window.location.pathname);
    }
    window.addEventListener('popState', handler);

    return () => {
        window.removeEventListener('popState', handler);
    }
}, []);

const navigate = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
}
    return (
    <NavigationContext.Provider value={{}}>
        {currentPath}
        {children}
    </NavigationContext.Provider>
    )
}

export { NavigationProvider };
export default NavigationContext;