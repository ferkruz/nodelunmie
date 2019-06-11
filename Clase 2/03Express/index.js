const express = require('express');
const app = express();
 
app.use(express.static("estatico"));
app.use("/estilos",express.static("css"));

app.listen(3000, () => {
    console.log("Server iniciado");
});
console.log("Fin del archivo index.js");