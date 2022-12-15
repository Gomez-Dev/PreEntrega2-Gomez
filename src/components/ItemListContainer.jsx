import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="container py-5">
            <div className="row">
                
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">
                            <p>{greeting}</p>
                        </div>
                    </div>
                    <ItemCount stock={22} />
            </div> 
        </div>
    )
}

export default ItemListContainer;

