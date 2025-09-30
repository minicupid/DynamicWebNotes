import {useState} from 'react'
import {GoChevronDown, GoChevronLeft} from 'react-icons/go'
/*
const Props = {
  label: string,
  content: string,
  onClick: function,
}

// const state = {
//   isExpanded: false,
// }
*/

const DUMMYDATA = {
  id: 'l1kj2i0g',
  label: 'When do chickens molt?',
  content:
    'Duis eget turpis vel ligula imperdiet suscipit eu ut felis. Ut eget neque at ligula aliquam ultricies eu vitae dolor. Proin eu dignissim velit. Morbi convallis volutpat nisl at vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam non dignissim sem. Aliquam cursus, tortor at iaculis fermentum, felis tortor interdum justo, eu ornare lorem dui eu lorem. Phasellus nibh sem, tempus at fermentum vel, pulvinar at tellus. Nunc eleifend velit at massa bibendum placerat. Sed tincidunt vestibulum ante ut pellentesque. Duis eget nisl varius, dapibus nunc sed, aliquam diam',
}

const Accordion = (props) => {
  // pull out our props with destructuring
  const {items} = props
  // state, needs to update to accomondate multiple items
  const [expandedIndex, setExpandedIndex] = useState(0)

  // event handling function
  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if(currentExpandedIndex === nextIndex) {
        return -1
      }
      else {
        return nextIndex
      }
    })
  }

  // YAY your first ternary (shorthand if/else)
  /*
    1 ? 2 : 3

   1- condition we are checking (like a boolean)
   2- what to return if 1 is true
   3- what to return if 1 is false
  */

  const renderedItems = items.map((item, index) => {
  const isExpanded = index === expandedIndex
     // this will also have to update because it references our state
  const icon = (
    <span className="text-2xl">
      {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
    </span>
  )
  return (
    <div key = {item.id}>
      <div
      onClick = {() => handleClick(index)}
      className="flex justify-between items-center p-3 bg-gray-100 border-b cursor-pointer"
      >
      {item.label}
      {icon}
      </div>
      {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
      )
    })
  return <div> {renderedItems}</div>
}

export default Accordion
