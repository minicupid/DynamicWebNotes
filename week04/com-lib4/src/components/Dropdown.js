import React from "react"
import cx from "classnames"

const {options} = props
const [isOpen, setIsOpen] = useState(false)
const Dropdown = (props) => {
    const renderedOptions = options.map ((opt, index) = {
        return <div key = {index} className = "hover: bg-sky-100 rounded cursor-pointer p-1">
        {opt.label}
        </div>
    })

    return (
    <div className = 'w-48 relative'>
        <Panel className = "flex justify-between items-center cursor-pointer"> 
            {}
            Select..
        </Panel> 
        {isOpen &&
        <Panel className = "absolute top-full>
        {renderedOptions}
        </Panel>
    </div>
    )
}

const Panel = (props) => {
    const {className, children, ...rest} = props
    const finalClassNames = cx(
        props.className, 'border rounded p-3 shadow bg-white w-full')
    return (
    <div {...rest} className = {finalClassNames}>
        {children} 
        </div>
    )
}

export {Panel}
export default DropDown