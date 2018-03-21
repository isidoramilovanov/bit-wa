import React from 'react';

const Search = (props)=>{
  return (
  
  <div className="nav-wrapper">
    <form>
      <div className="input-field">
        <input onChange = {props.searchFilter} value={props.inputValue} id="search" type="search" placeholder='Search users' required />
        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
        <i className="material-icons">close</i>
      </div>
    </form>
  </div>

)

}

export default Search