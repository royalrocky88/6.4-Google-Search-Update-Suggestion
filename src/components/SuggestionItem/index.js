// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchResult, updateInput} = props
  const {suggestion} = searchResult
  const updateSearchInput = () => {
    updateInput(suggestion)
  }

  return (
    <li className="list-card">
      <p className="text-word">{suggestion}</p>
      <button type="button" className="btn" onClick={updateSearchInput}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-card"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
