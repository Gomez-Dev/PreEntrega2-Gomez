import React from "react";

const Item = ({item}) => {
    return (
        <div className="card border boeder-0 fondobody">
            <img src={item.imagen} className="card-img-top" alt={item.nombre} />
            <div className="card-body">
                <p className="card-text">{item.nombre}</p>
            </div>
        </div>
    )
};

export default Item;