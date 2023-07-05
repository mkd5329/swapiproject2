import { useEffect, useState } from "react";

function CharListComponent (){
    let [characterData, setCharacterData] = useState([]);
   // const characters = [];
   

    useEffect(() => {fetch("https://localhost:3007/api/characters")
    .then(response => response.json())
    .then(data => {setCharacterData({characterData})});
});

const listItems = characterData.map((characterData) => <li>{characterData}</li> );

    return(
        
        <>
        <ul>{listItems}</ul>
        </>
    );
}

export default CharListComponent