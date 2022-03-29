import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeSelectId: countryAndCapitalsList[0].id}

  onChangeSelect = event => {
    this.setState({activeSelectId: event.target.value})
  }

  getCountryDetails = () => {
    const {activeSelectId} = this.state

    const countryDetails = countryAndCapitalsList.find(
      eachCountryDetails => eachCountryDetails.id === activeSelectId,
    )

    return countryDetails
  }

  render() {
    const {activeSelectId} = this.state

    const countryInfo = this.getCountryDetails(activeSelectId)

    return (
      <div className="capitals-app-container">
        <div className="capitals-card-container">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              value={countryInfo.id}
              className="capitals"
              onChange={this.onChangeSelect}
            >
              {countryAndCapitalsList.map(eachCountryInfo => (
                <option
                  value={eachCountryInfo.id}
                  key={eachCountryInfo.id}
                  className="option"
                >
                  {eachCountryInfo.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="capitals" className="qeustion">
              is capital of which country?
            </label>
          </div>
          <p className="country-name">{countryInfo.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
