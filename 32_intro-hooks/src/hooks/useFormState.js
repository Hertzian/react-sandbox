import { useState } from 'react'

//export default (initialVal) => {
function useFormState(initialVal) {
  const [value, setValue] = useState(initialVal)
  const handleChange = (e) => setValue(e.target.value)
  const reset = () => setValue('')

  return [value, handleChange, reset]
}

export default useFormState
