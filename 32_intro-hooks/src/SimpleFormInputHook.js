import useFormState from './hooks/useFormState'

export default function SimpleFormInputHook() {
  const [email, updateEmail, resetEmail] = useFormState('')
  const [password, updatePassword, resetPassword] = useFormState('')

  return (
    <div>
      <h1>Input with hooks</h1>
      <h2>
        email: {email}, & password: {password}
      </h2>
      <input type='text' value={email} onChange={updateEmail} />
      <button onClick={resetEmail}>Erase email</button>
      <br />
      <input type='text' value={password} onChange={updatePassword} />
      <button onClick={resetPassword}>Erase password</button>
    </div>
  )
}
