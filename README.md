# Burger Queen

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Consideraciones generales](#4-consideraciones-generales)
* [3. Página web](#3-página-web)


***

## 1. Resumen del proyecto

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente.


La interfaz muestra dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario puede ir eligiendo qué _productos_
agregar y la interfaz muestra el _resumen del pedido_ con el
costo total.


## 2. Consideraciones generales

La lógica del proyecto esta implementada completamente en JavaScript
(ES6+), HTML y CSS y empaquetada de manera automatizada en el framework Angular. Utilizando una base de datos almacenada en

La aplicación es un _Single Page App_. Los pedidos se tomaran desde una
_tablet_, siendo una web app **responsive**.

### Definición del producto

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* Anotar nombre de cliente.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

#### [Historia de usuario 2] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un cliente.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.

#### [Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a los clientes que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.


## 3. Página Web
Usuario mesero: mesero@bq.pe
contraseña: mesero123
![login](/src/assets/vm-1.png)
![take order](/src/assets/vm-2.png)
![status order](/src/assets/vm-3.png)

Usuario chef: jefedecocina@bq.pe
contraseña: jefedecocina123
![take order](/src/assets/c-1.png)
![status order](/src/assets/c-2.png)