import { Button } from "@material-ui/core"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"

import '../styles/components/question-form.css'

export default function QuestionForm({next, question, current = 1}){
  const controls = useAnimation()

  const [value, setValue] = useState('')

  useEffect(() => {
    setValue("")
    controls.start({
      x: 0,
      opacity: 1,
      transition: {duration: 0.5}
    })
  }, [controls, question])
  
  function transition(e) {
    e.preventDefault()
    next(value)
    controls.start({
      x: "-100%",
      opacity: 0,
      transitionEnd: { x: "100%"},
      transition: {duration: 0.3 }
    })
  }
  return (
    <motion.form
     className="form-question"
     animate={controls}
      onSubmit={(e) => transition(e)}>
      <label htmlFor={`question${current}`}>{question}</label>
      <input
        id={`question${current}`} 
        name={`question${current}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value && <Button variant="contained" color="default" type="submit">Enviar</Button>}
    </motion.form> 
  )
}
