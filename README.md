
# Mi Proyecto de Simulación Frontend y Backend

Este proyecto simula una aplicación con frontend y backend separados para demostrar cómo interactúan entre sí.

## Requisitos Previos

Tener Node.js instalado en tu sistema para poder ejecutar los comandos de npm y node.

## Configuración del Proyecto

Para configurar y ejecutar el proyecto, sigue estos pasos:

### Instalación

1. Clona este repositorio en tu máquina local usando:
   ```bash
   git clone .....
   ```
2. Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:
   ```bash
   npm install
   ```

### Ejecución

#### Levantar el Frontend

Para iniciar el servidor frontend, ejecuta:
```bash
npm start
```
Esto levantará el servidor de desarrollo y abrirá automáticamente la aplicación en tu navegador.

#### Levantar el Backend

Necesitas abrir una nueva terminal para el servidor backend. Navega al directorio del proyecto si no estás ya allí y ejecuta:
```bash
node server.js
```
Este comando levantará el servidor backend que maneja las peticiones API del frontend.

## Estructura de la Interfaz

La interfaz está diseñada para mostrar preguntas agrupadas en secciones para facilitar la visualización y el orden. Las preguntas están organizadas de la siguiente manera:

- **Preguntas 1 y 2**: Para ver estas preguntas, haz click en el botón o link correspondiente en la interfaz.
- **Preguntas 3 y 4**: Similar a las preguntas 1 y 2, usa el botón o link proporcionado para ver estas preguntas.

#Respuesta Ejercicios:
3.1. Tonelaje de cada equipo de carga a zona de descarga.
  Para el componente ListaViajes, utilicé React y ECharts, siguiendo la solicitud de la prueba de emplear específicamente ECharts para visualizar los datos. A pesar de no tener experiencia previa con ECharts, apliqué useState y useEffect en React para manejar el estado y procesar los datos dinámicamente. Este enfoque facilitó la integración efectiva de visualizaciones complejas
3.2 Tonelaje por material para cada hora del turno.
  Para el reporte de tonelaje por material y hora, utilicé React con useState y useEffect para manejar el estado y procesar los datos dinámicamente. Usé reduce() para agrupar el tonelaje por material y hora, y luego ordené los datos en orden descendente por hora. Este enfoque permitió una estructuración eficiente y una renderización optimizada en la tabla.
3.3 . Diferencia de tonelaje por hora.
  Para el componente DiferenciaDeTonelaje, utilicé React con useState y useEffect para recibir datosAct y datosPrev como props y calcular la diferencia de tonelaje por hora relativa. Ajusté relativehour para emparejar correctamente los turnos y utilicé reduce() para agrupar los valores por hora. Este enfoque optimizó el procesamiento de datos antes de renderizarlos en una tabla ordenada. 
3.4 Tonelaje por turno
  En el componente TonelajePorTurno, recibí datosAct y datosPrev como props y utilicé useState y useEffect para filtrar y agrupar el tonelaje por material y hora relativa. Implementé un select para que el usuario pudiera elegir un material, y luego utilicé reduce() para calcular el tonelaje total por turno, diferenciándolo visualmente en la tabla. 
