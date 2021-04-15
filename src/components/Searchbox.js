import React from 'react';

const Searchbox = ({searchfield, searchChange}) =>{

  return(
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search-Robots"
        onChange={searchChange} //proprietà HTML nativa onChange
        >
      </input>
    </div>

  );

}

export default Searchbox;
