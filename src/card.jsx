import React from 'react';

function Card(props){
    return(
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <img 
                    className="circle-img"
                    src={props.img} 
                    alt="avatar_img"
                
                />
            </div>
            <div className="bottom">
                <p className="info" >+ 123 546 879</p>
                <p className="info" >savan23@gmail.com</p>
            </div>
        </div>
    ) 
}

export default Card;