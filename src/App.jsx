import { useState } from 'react';
import './App.css';
import Modal from './component/Modal.jsx';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/api/invitations', {  // Cambiado el puerto aquí
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, surname }),
    });
    if (response.ok) {
      setShowModal(true);
      setName('');
      setSurname('');
    } else {
      alert('Hubo un problema con la confirmación');
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-gray-100 pt-12">
        <div className="text-center mb-8">
          <h1 className="text-6xl text-white p-10">BBQ en la Casa de Brian</h1>
          <p className="text-white mb-2 text-xl p-10">
            ¡Hola <strong>DEVELOPER</strong>! <br />Hace tiempo dije que cuando nos graduaramos, en verano os invitaba a todos a una BBQ en mi casa para que no perdaramos el contacto y que lo pasemos bien todos juntos ya que de este DAW he hecho buenos amigos.
          </p>
          <p className="text-white mb-2 text-xl p-5">La fecha de la BBQ Miranda será el XX de Julio a las XX:XX PM.</p>
          <p className="text-white mb-10 text-xl">
            Si quieres asistir, por favor, confirma tu asistencia llenando el siguiente formulario.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white-transparent p-6 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl mb-4 text-center">Confirmación de Asistencia a la BBQ</h2>
          <div className="mb-4">
            <label className="block mb-1">Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Apellido</label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-lime-600 text-black p-2 rounded w-full hover:bg-lime-700 hover:text-white transition duration-300 ease-in-out"
          >
            Confirmar Asistencia
          </button>
        </form>
      </div>
      <Modal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
}

export default App;
