import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CharListComponent (){
    let [characterData, setCharacterData] = useState([]);

    useEffect(() => {fetch("http://localhost:3007/api/characters")
    .then(response => response.json())
    .then(data => {setCharacterData(data);  console.log(data);});
    console.log(characterData);
}, []);

const listItems = characterData.map((characterData) =><Link to={`/characters/${characterData.id}`} ><li>{characterData.name}</li> </Link> );

    return(
        
        <>
       
        <ul >{listItems}</ul>
      
        </>
    );
}

export default CharListComponent