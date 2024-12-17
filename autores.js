export default function handler(req, res) {
    const autores = [
        { nombre: "Don Miguel Ruiz", nacionalidad: "Mexicana" },
        { nombre: "Mark Manson", nacionalidad: "Estadounidense" },
        { nombre: "Jennice Vilhauer", nacionalidad: "Estadounidense" },
        { nombre: "Marian Rojas Estapé", nacionalidad: "Española" }
    ];

    res.status(200).json(autores);
}
