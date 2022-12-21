import React, {useState, useEffect} from "react";
import ItemList from "./Item";
import ItemCount from "./ItemCount";
import arrayProductos from "./json/arrayProductos.json";


const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() =>{
        const promesa = new Promise((resolve) =>{
            setTimeout(() =>{
                resolve(arrayProductos);
            })
        })

        promesa.then((data) =>{
            setItems(data);
        })

    }, []);

    return (
        <div className="container py-5">
            <ItemList items={items} />
            <ItemCount stockItems={12} />  
        </div>
    )
}

export default ItemListContainer;

