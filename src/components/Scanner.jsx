import React, { useRef, useEffect, useState } from 'react';
import { BrowserBarcodeReader } from '@zxing/library';

function Scanner({ setScannedCode }) {
  const videoRef = useRef('');
  const [videoDevices, setVideoDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const codeReader = new BrowserBarcodeReader();

    // Получаем список доступных устройств видеозахвата и обновляем состояние
    codeReader
      .getVideoInputDevices()
      .then((devices) => {
        setVideoDevices(devices);
        // Если есть устройства, выбираем первое в списке по умолчанию
        if (devices.length > 0) {
          setSelectedDeviceId(devices[0].deviceId);
        }
      })
      .catch((error) => {
        console.error('Error getting video input devices:', error);
      });

    return () => {
      codeReader.reset();
    };
  }, []);

  // Функция для обработки выбора камеры
  const handleCameraChange = (event) => {
    setSelectedDeviceId(event.target.value);
  };

  // Функция для запуска сканирования с выбранной камеры
  const startScanning = () => {
    setIsScanning(false);
    const codeReader = new BrowserBarcodeReader();
    // Запускаем сканирование с выбранного устройства
    codeReader
      .decodeFromInputVideoDevice(selectedDeviceId, videoRef.current)
      .then((result) => {
        console.log('Result:', result.getText());
        setScannedCode(result.getText());
      })
      .catch((err) => {
        console.error('Barcode scanning error:', err);
      });
  };

  return (
    <div className='pt-5'>
      <select className='input' value={selectedDeviceId} onChange={handleCameraChange}>
        {videoDevices.map((device) => (
          <option key={device.deviceId} value={device.deviceId}>{device.label}</option>
        ))}
      </select>
      <video ref={videoRef} className='mt-3 mb-3' style={{ width: '100%', maxWidth: '300px' }}></video>
      <div className='px-3 py-1.5 border w-fit border-gray-300 cursor-pointer text-lg bg-white' onClick={startScanning}>Scan</div>
    </div>
  );
}

export default Scanner;
