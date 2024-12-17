export default function handler(req, res) {
    const libros = [
        { titulo: "Los 4 acuerdos", autor: "Don Miguel Ruiz", anioPublicacion: 1997, disponibilidad: true },
        { titulo: "El sutil arte de que te importe un carajo", autor: "Mark Manson", anioPublicacion: 2016, disponibilidad: true },
        { titulo: "No creas todo lo que piensas", autor: "Jennice Vilhauer", anioPublicacion: 2014, disponibilidad: true },
        { titulo: "Como hacer que te pasen cosas buenas", autor: "Marian Rojas Estapé", anioPublicacion: 2018, disponibilidad: false }
    ];

    res.status(200).json(libros);
}
