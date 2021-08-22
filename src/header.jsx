import React from 'react';

function Header(props){
    return (
        <header>
            <h1>Users</h1>
            <button className="btn" onClick={props.btnClicked}>Get Users</button>
        </header>
    )
}

export default Header;