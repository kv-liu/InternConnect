import React, { useState } from 'react'
import '../css/SearchButton.css'
import { useNavigate } from 'react-router-dom'

const SearchButton = props => {
  let navigateTo = useNavigate()

  const handleInputChange = e => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const [input, setInput] = useState('')

  const onSearch = () => {
    navigateTo('/results', { state: { searchVal: input } })
  }

  return (
    <div className="search-box">
      <form onSubmit={onSearch}>
        <button className="btn-search" type="button">
          <i className="fas fa-search"></i>
        </button>
        <input
          value={input}
          type="text"
          className="input-search"
          placeholder="Type in a company..."
          required
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}

export default SearchButton
