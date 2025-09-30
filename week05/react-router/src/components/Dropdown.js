import {useState, useEffect} from 'react'

import {GoChevronDown} from 'react-icons/go'
import Panel from './Panel'

const Dropdown = (props) => {
  const {options, onChange, value} = props
  // local state
  const [isOpen, setIsOpen] = useState(false)

  // useffect takes 2 arguments
  // the first is the function you want to call 
  // 2nd is an array of props, state, any js variables available to this componetn to watch

  // useeffect fires when the component mounts (first time displaying)
  // if anything is in the second array, these are js cars aka state, variables, props
  // these are items we are watching. if one of those variables changes, use effect will fire the func from the first argument again 
  // fires the first time component mounts. this is great for api calls or adding event listeners old fashioned


  // const useEffect(() => {
  //   const handler = (event) => {
  //     // we are calling setisopen in a better way
  //     if(!divEl.current.contains(event.target)){
  //       setIsOpen(false)
  //     }
  //     document.addEventListener('click', handler, true)
  //     return () => {
  //       document.removeEventListener('click', handler)
  //     }
  //   }
  // }, [])

  {/* fire on mount and every time the value of PieceOfState changes changes
    const useEffect(() => {}, [PieceOfState]) */}


  }
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    // need some other function defined by the
    // parent component passed in as a prop to call here
    onChange(option)
  }

  const renderedOptions = options.map((opt, index) => {
    return (
      <div
        onClick={() => handleOptionClick(opt)}
        key={index}
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
      >
        {opt.label}
      </div>
    )
  })

  return (
    <div className="w-48 relative">
      <Panel
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer"
      >
        {/* if value exists (aka not null or undefined) find the value key within{{value?.value} */
        /* great use of a ternary */}
        {value ? value.label : 'Select...'} <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  )


/* const Panel = (props) => {
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
*/
// default export (usually the file name should give you a hint about what to be the default export)
export default Dropdown