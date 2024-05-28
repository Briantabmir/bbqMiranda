// src/Modal.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Modal = ({ show, handleClose }) => {
    const containerStyle = {
        width: '400px',
        height: '300px'
    };

    const center = {
        lat: -3.745,  // Reemplaza con la latitud de tu casa
        lng: -38.523  // Reemplaza con la longitud de tu casa
    };

    return (
        show ? (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-4 rounded shadow-lg">
                    <h2 className="text-xl mb-4">Confirmación Recibida</h2>
                    <p className="mb-4">¡Gracias por confirmar tu asistencia! Aquí tienes la ubicación:</p>
                    <LoadScript googleMapsApiKey="TU_API_KEY">
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                        >
                            <Marker position={center} />
                        </GoogleMap>
                    </LoadScript>
                    <button onClick={handleClose} className="mt-4 bg-blue-500 text-white p-2 rounded">Cerrar</button>
                </div>
            </div>
        ) : null
    );
};

export default Modal;
