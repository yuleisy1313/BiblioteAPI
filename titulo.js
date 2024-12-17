export default function handler(req, res) {
    const { titulo } = req.query;

    const libros = [
        { titulo: "Los 4 acuerdos", autor: "Don Miguel Ruiz", anioPublicacion: 1997 },
        { titulo: "El sutil arte de que te importe un carajo", autor: "Mark Manson", anioPublicacion: 2016 },
        { titulo: "No creas todo lo que piensas", autor: "Jennice Vilhauer", anioPublicacion: 2014 },
        { titulo: "Como hacer que te pasen cosas buenas", autor: "Marian Rojas Estapé", anioPublicacion: 2018 }
    ];

    const resultado = libros.filter(libro => libro.titulo.toLowerCase().includes(titulo.toLowerCase()));

    if (resultado.length > 0) {
        res.status(200).json(resultado);
    } else {
        res.status(404).json({ mensaje: `No se encontraron libros con el título '${titulo}'.` });
    }
}
