import Aguila_Sixpack from "./imgProductos/Cervezas/Aguila_Sixpack.jpg";
import Chesfield_blue from "./imgProductos/Cigarrillos/Chesfield blue.jpg";
import Doritos from "./imgProductos/Galgerias/Doritos.jpg";
import Aguardiente_Rojo from "./imgProductos/Licores/Aguardiente Rojo/Aguardiente Caja Roja.png";

const productos =[

    {
        id:1,
        nombre:"Cerveza Aguila",
        tipoProducto:"Cerveza",
        precio: 18000,
        calificacion:2,
        image:
            Aguila_Sixpack,
        descripcion:
            "Cispack de cerveza Aguila por 6 unidades"    
    },
    {
        id:2,
        nombre:"Cigarrillos marca Chesfield",
        tipoProducto:"Cigarrillos",
        precio: 8000,
        calificacion:1,
        image:
        Chesfield_blue,
        descripcion:
            "Paquete de cigarrillos Chesfield blue"    
    },
    {
        id:3,
        nombre:"Doritos",
        tipoProducto:"Galgerias",
        precio: 10000,
        calificacion:5,
        image:
            Doritos,
        descripcion:
            "Paquete de Doritos tadricinal familiar 80 gm"    
    },
    {
        id:4,
        nombre:"Aguardiente",
        tipoProducto:"Licores",
        precio: 29000,
        calificacion:3,
        image:
            Aguardiente_Rojo,
        descripcion:
            "Litro de aguardiente Rojo tradicional"    
    },
];
export default productos;   