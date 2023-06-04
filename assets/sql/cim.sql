CREATE DATABASE cim;

CREATE TABLE usuarios(
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre_usuario VARCHAR(30),
    apellido_P VARCHAR(30),
    apellido_M VARCHAR(30),
    email VARCHAR(50),
    num_celular VARCHAR(10),
    ciudad VARCHAR(30)
);


CREATE TABLE productos(
    id_producto INT PRIMARY KEY AUTO_INCREMENT,
    nombre_producto VARCHAR(30),
    descripcion_producto VARCHAR(100),
    contenido VARCHAR(20),
    en_existencia INT,
    proveedor VARCHAR(30),
    caducidad VARCHAR(10)
);