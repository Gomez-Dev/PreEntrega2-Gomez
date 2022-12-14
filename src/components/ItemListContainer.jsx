import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <p>{greeting}</p>
                </div>
                <ItemCount />
            </div>
        </div>
    )
}

export default ItemListContainer;

