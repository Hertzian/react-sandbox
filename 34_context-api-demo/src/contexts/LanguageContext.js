import React, { Component, createContext } from 'react'

export const LanguageContext = createContext()

export class LanguageProvider extends Component {
  constructor(props) {
    super(props)
    this.state = { language: 'french' }
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  changeLanguage(e) {
    this.setState({ language: e.target.value })
  }

  render() {
    return (
      //<LanguageContext.Provider value={{ language: this.state.language }}>
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}

export const withLanguageContext = (Component) => (props) =>
  (
    <LanguageContext.Consumer>
      {(value) => <Component LanguageContext={value} {...props} />}
    </LanguageContext.Consumer>
  )
