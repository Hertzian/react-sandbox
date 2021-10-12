import { useState } from 'react'

function SimpleFormHooks() {
  const [email, setEmail] = useState('')
  const handleChange = (e) => setEmail(e.target.value)

  return (
    <div>
      <h1>Forms with hooks</h1>
      <h2>This is the email: {email}</h2>
      <input type='text' value={email} onChange={handleChange} />
      <button onClick={() => setEmail('')}>Submit</button>
    </div>
  )
}

export default SimpleFormHooks
