const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer({ dest: "uploads/" });
// Configurar ruta para mostrar el formulario de carga de archivos
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

// Configurar ruta para manejar la carga de archivos
app.post("/upload", upload.single("archivo"), (req, res) => {
	const file = req.file;
	if (!file) {
		return res.status(400).send("No se seleccionó ningún archivo.");
	}
	res.send("Archivo subido con éxito.");
});

// Iniciar el servidor
app.listen(3000, () => {
	console.log("Servidor escuchando en el puerto 3000");
});
