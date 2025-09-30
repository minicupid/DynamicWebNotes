import {useState} from 'react'
import cx from 'classnames'

import { GoChevronDown } from 'react-icons/go'

const Dropdown = (props) => {
  const {options, onChange, value} = props
  // local state
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    // need other func defined by parent component passed in as a prop
   onChange(option)

  }
  const renderedOptions = options.map((opt, index) => {
    return (
      <div onClick = {() => handleOptionClick(opt)}
      key={index} className="hover:bg-sky-100 rounded cursor-pointer p-1">
        {opt.label}
      </div>
    )
  })
  return (
    <div className="w-48 relative">
      <Panel onClick = { handleClick } className="flex justify-between items-center cursor-pointer">
        {/* conditional text coming soon */}
        { value ? value.label : 'Select...'} < GoChevronDown /> 
        {/* {value?.value} -> if this value exists (not null / undef), check for the key (great use of a turnary ; */}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  )
}

const Panel = (props) => {
  const {className, children, ...rest} = props
  const finalClassNames = cx(
    className,
    'border rounded p-3 shadow bg-white w-full'
  )
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  )
}

// named export
export {Panel}
// default export (usually the file name should give you a hint about what to be the default export)
export default Dropdown
