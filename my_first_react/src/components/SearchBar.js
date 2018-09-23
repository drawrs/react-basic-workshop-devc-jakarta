import React from 'react'

const SearchBar = props => { //parameteritu props > property
    return(
        <div>
            {/* Props : {props.name} */}
            <input type="text" 
            placeholder="Search here..."
            value={props.search}
            onChange={props.onChange}
            />
        </div>
    )
}

export default SearchBar