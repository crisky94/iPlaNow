import formidable from 'formidable';

// Desactivamos el body parser de Next.js
export const config = {
    api: {
        bodyParser: false, // Desactivamos el parser para manejar FormData con formidable
    },
};

export default function handler(req, res) {
    if (req.method === 'POST') {
        const form = new formidable.IncomingForm();
        form.uploadDir = './public/uploads'; // Define la carpeta para guardar los archivos
        form.keepExtensions = true;

        form.parse(req, (err, fields, files) => {
            if (err) {
                return res.status(500).json({ message: 'Error procesando los datos' });
            }

            // Aquí puedes procesar los datos (guardar el evento, el archivo, etc.)
            return res.status(200).json({ message: 'Evento creado exitosamente' });
        });
    } else {
        return res.status(405).json({ message: 'Método no permitido' });
    }
}
