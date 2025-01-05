import React, {useState} from 'react'

const Player = ({initialName,symbol,isActive, onChangeName}) => {

    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setisEditing] = useState(false);

    function handleEditClick (){
        // setisEditing(!isEditing);  
        setisEditing(editing => !editing);  // --- > Best Practice

        if(isEditing){
            onChangeName(symbol, playerName)
        }
    }

    function handleChange(e){
        setPlayerName(e.target.value);
    }

    let editablePlayerName = <span className='player-name'>{playerName}</span>;
    //let btnCaption = "Edit";

    if(isEditing){
        editablePlayerName = <input type='text' value={playerName} onChange={handleChange} required />;
        //btnCaption = "Save";
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {editablePlayerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}

export default Player
