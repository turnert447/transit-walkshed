mapboxgl.accessToken = "pk.eyJ1IjoidHRob21wNCIsImEiOiJjbWg4ZnZ4cTUxMGQ5MmtwdWR4MTNnbm40In0.JHg_sbayM5UCtQkYhC2LEA";

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10", 
    center: [-122.3321, 47.6062],
    zoom: 11
});