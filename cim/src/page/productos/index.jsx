import ListadoProductos from "../../components/listadoProductos";
import { useState, useEffect } from "react";
import React from "react";

const Products = () => {
    return(
        <div>
            <main className="contenedor">
                <h1 className="heading">Nuestra colección</h1>

                <ListadoProductos />
            </main>
        </div>
    )
}

export default Products;
