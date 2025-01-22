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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Evento creado con éxito');
        setFormData({
          name: '',
          type: '',
          availability: '',
          user_id: '',
          space_id: '',
          start_time: '',
          end_time: '',
          status: '',
          photo: null,
        });
      } else {
        alert('Error al crear el evento');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al crear el evento');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-800 pt-20 pb-20'>
      <form
        className="p-6 rounded-xl bg-black border border-[rgba(255,255,255,0.1)] bg-blend-normal shadow-md backdrop-blur-[27px] text-white max-w-3xl mx-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Crear Evento</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Nombre del Espacio', name: 'name', type: 'text' },
            { label: 'Tipo de Espacio', name: 'type', type: 'text' },
            { label: 'Disponibilidad', name: 'availability', type: 'text' },,
            { label: 'Estado', name: 'status', type: 'text' },
            { label: 'Hora de Inicio', name: 'start_time', type: 'datetime-local' },
            { label: 'Hora de Fin', name: 'end_time', type: 'datetime-local' },
          ].map((field) => (
            <label key={field.name} className="block">
              <span className="block text-white mb-2">{field.label}</span>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md bg-white bg-opacity-10 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white placeholder-gray-300"
                required
              />
            </label>
          ))}

          <label className="block sm:col-span-2">
            <span className="block text-white mb-2">Foto</span>
            <input
              type="file"
              name="photo"
              onChange={handleFileChange}
              className="w-full p-2 rounded-md bg-white bg-opacity-10 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white"
              accept="image/*"
              required
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-2 px-4 bg-blue-500 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-200"
        >
          Crear Evento
        </button>
      </form>
    </div>
  );
}
