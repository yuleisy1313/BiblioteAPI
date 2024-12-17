export default function handler(req, res) {
    res.status(200).json({
        mensaje: "Bienvenido a la API de la biblioteca",
        rutas: {
            "/api/autores": "Lista de autores",
            "/api/libros": "Lista de todos los libros",
            "/api/disponibles": "Libros disponibles",
            "/api/titulo?titulo=palabra": "Buscar libros por título"
        }
    });
}
