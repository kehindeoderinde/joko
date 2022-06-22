import React, { useEffect, useState } from "react";
import { Close, Search } from "@material-ui/icons";
import "./SearchBar.scss"

const SearchBar : React.FC = ()=> {
    const [searchString, setSearchString] = useState('');
    const [isSearching, setIsSearching] = useState(false);


    useEffect(()=> {

    }, [])
    
    const onChange = (input: React.ChangeEvent<HTMLInputElement>) => {
        console.log(input.target.value)
        if(input.target.value.trim().length > 0){
            setIsSearching(true)
            setSearchString(input.target.value)
            window.focus()
        } else {
            setSearchString('');
            setIsSearching(false);
        }
    }

    const clearInput = ()=> {
        setSearchString('');
        setIsSearching(false);
    }

    return (
        <div className="searchbar">
            <Search className="searchbar_icon"/>
            <input type="text" className="searchbar_input" placeholder="Search here" value={searchString} onChange={onChange}/>
            {isSearching ? <Close className="searchbar_icon searchbar_icon--close" onClick={clearInput}/> : <Close style={{color: 'transparent'}}/>}
        </div>
    )
}

export default SearchBar;