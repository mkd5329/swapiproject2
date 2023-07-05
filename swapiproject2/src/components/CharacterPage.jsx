import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function CharacterPage (){
    let [characterData, setCharacterData] = useState([]);
    const {id} = useParams();
    useEffect(() => {fetch(`http://localhost:3007/api/characters/${id}`)
    .then(response => response.json())
    .then(data => {setCharacterData(data);  console.log(data);});
    console.log(characterData);
    console.log("test test");
}, []);


    return(
        
        <>
       
        <h1>character {characterData.name}</h1>
      
        </>
    );
}

export default CharacterPage