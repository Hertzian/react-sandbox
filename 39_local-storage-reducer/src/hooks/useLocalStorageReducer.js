import { useReducer, useEffect } from 'react'

function UseLocalStorageReducer(key, defaultVal, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
    } catch (err) {
      val = defaultVal
    }
    return val
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, dispatch]
}
export default UseLocalStorageReducer
