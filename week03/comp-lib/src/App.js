import React from 'react'
import Button from './components/Button'

const App = () => {
  return (
    <>
      <div>
        <Button primary outline> buy? </Button>
      </div>
        <div>
        <Button secondary rounded> sure? </Button>
      </div>
      <div>
        <Button warning outline rounded> rly? </Button>
      </div>
      <div>
        <Button success outline> yay </Button>
      </div>

    </>
  )
}

export default App