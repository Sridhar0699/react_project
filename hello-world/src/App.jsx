import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Welcome} from './Welcome'
import {Button} from './Button';
import {ContactForm} from './ContactForm';
import { CandidateProfile } from './CandidateProfile'


/* Welcome is the component.It should start with uppercase letter.
Component is a JS function that returns HTML.
Component is a piece of UI .It can be a button or as large as an entire page.
Components are reusable.
Combination of all components makes us the entire application. */
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ContactForm/>
      <h1>Code Evaluation</h1>
      <Welcome/>
      <CandidateProfile/>
      <Button/>
    </div>
  )
}

export default App
