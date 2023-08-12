## Descripción

API REST en formato JSON que entrega la información de los equipos y jugadores de fútbol que formaron parte de la primera division en Chile durante el 2021. 

### A continuación se listan los endpoint que formarán parte de esta API:

**/api/team**

Entrega una lista de todos los equipos disponibles en la base de datos.

**/api/teams/:idTeam/players**

Entrega una lista de jugadores pertenecientes al equipo con id igual a idTeam.

**/api/teams/players/:position**

Entrega una lista de jugadores de todos los equipos de acuerdo a la posicion que ocupan (Arquero, Defensor, Volante, Delantero o DT) agrupados por su equipo correspondiente.


**/api/teams/:idTeam/players/?country=Country**

Entrega una lista filtrada de jugadores de acuerdo al pais de nacimiento (Chile, Paraguay, Argentina entre otros).

**/api/teams/players/:position/?page=numero&limit=numero**

Permite paginar la información 

## Instalación

- Ejecutar en la terminal:

Instalar las dependencias del proyecto.

```js
$ npm install
```

Correr la api en modo desarrollo:

```js
$ docker-compose up
```

Para visualizarlo en el navegador utilizar http://localhost:3001.

El proyecto también puede ser visualizado sin ninguna instalación mediante la URL pública [DEMO](https://api-equipos-de-futbol-nfk4-dev.fl0.io/api/teams/players/Arquero)
