'use client'
import { useState } from 'react';

export default function CreateEventForm() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    availability: '',
    start_time: '',
    end_time: '',
    status: '',
    photo: null,
  });
  const [preview, setPreview] = useState(null); // Estado para la vista previa de la foto

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        photo: file,
      });
      setPreview(URL.createObjectURL(file)); // Genera la URL de vista previa
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await fetch('http://localhost:8000/api/events', {
        method: 'POST',
        body: data,
      });
      

      if (response.ok) {
        alert('Evento creado con éxito');
        setFormData({
          name: '',
          type: '',
          availability: '',
          start_time: '',
          end_time: '',
          status: '',
          photo: null,
        });
        setPreview(null); // Limpiar la vista previa
      } else {
        alert('Error al crear el evento');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al crear el evento');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center pt-20 pb-20'>
      <form
        className="p-4 rounded-xl bg-slate-800 border border-[rgba(255,255,255,0.1)] bg-blend-normal shadow-md backdrop-blur-[27px] text-white max-w-3xl mx-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Event</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Name of Space', name: 'name', type: 'text' },
            { label: 'Type of Space', name: 'type', type: 'select', options: ['Salón de Convenciones', 'Auditorio', 'Espacio al aire libre', 'Museo', 'Restaurante', 'Coworking'] },
            { label: 'Avaliability', name: 'availability', type: 'select', options: ['Disponible', 'No disponible'] },
            { label: 'State', name: 'status', type: 'select', options: ['Activo', 'Inactivo'] },
            { label: 'Start Hour', name: 'start_time', type: 'datetime-local' },
            { label: 'End Hour', name: 'end_time', type: 'datetime-local' },
          ].map((field) => (
            <label key={field.name} className="block">
              <span className="block text-white mb-2">{field.label}</span>
              {field.type === 'select' ? (
                <select
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="w-full p-1 rounded-md bg-white bg-opacity-10 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white placeholder-gray-300"
                  required
                >
                  <option value="">Selecciona {field.label.toLowerCase()}</option>
                  {field.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="w-full p-1 rounded-md bg-white bg-opacity-10 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white placeholder-gray-300"
                  required
                />
              )}
            </label>
          ))}
        </div>

        <div className="mt-4">
          <label className="block text-white mb-2">Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
          />
          {preview && (
            <div className="mt-4">
              <p className="text-sm text-gray-400">Preview:</p>
              <img
                src={preview}
                alt="Vista previa"
                className="w-full max-h-48 object-contain rounded-md border border-gray-300 mt-2"
              />
            </div>
          )}
        </div>

        <div className="flex w-full items-center justify-center mt-6">
          <button
            type="submit"
            className="w-50 py-2 px-4 bg-indigo-600 rounded-md shadow-md hover:bg-indigo-500 transition-colors duration-200 text-sm"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
}
