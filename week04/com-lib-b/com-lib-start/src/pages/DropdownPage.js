import {useState} from 'react'
import Dropdown from '../components/Dropdown'
// import {Panel} from '../components/Dropdown'
const OPTIONS = [
  {label: 'Red', value: 'red'},
  {label: 'Green', value: 'green'},
  {label: 'Blue', value: 'blue'},
]

const COLOR_MAP = {
  red: 'bg-red-500',
  green: 'bg-green-400',
  blue: 'bg-blue-500'
}

const DATA_TO_FILTER = [
  {id: 1, name: 'katie', team: 'red'},
  {id: 2, name: 'mike', team: 'green'},
  {id: 3, name: 'sally', team: 'blue'},
  {id: 4, name: 'jordon', team: 'red'},
  {id: 5, name: 'pete', team: 'green'}
]
// template literals
// const colorClass = `bg-${value?.value}-500`

const DropdownPage = () => {
      // this pc of state is where we recieve dropdown selected value
    // wee keep track of it in the parent component so that all children of the parent 
    // have access to this state value and can update and rerender when it changes

  const [ value, setValue ] = useState(null)

  let filteredData = DATA_TO_FILTER

  // if user selected a option , find val key
  if (value?.value) {
    // filter by selected opts and return team val
    filteredData = DATA_TO_FILTER.filter((student) => student.team === value.value )
  }

  const handleChange = (option) => {
    setValue(option)
  }

  return (
    <div>
      <h1 className = {COLOR_MAP[value?.value] || null }> dropdown pg with user selected value of : {value?.label} </h1>
      <Dropdown options={OPTIONS} onChange = {handleChange} value = {value} />
    <h2 className = {COLOR_MAP[value?.value]}> students from {value?.label}:</h2>
    {
      filteredData.map((student) => {
        return <p key = {student.id}> {student.name} </p>
      })
    }
    
    </div>
  )
}

export default DropdownPage
