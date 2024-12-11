import React from 'react';

export function Prerequisites() {
  return (
    <div className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300">
      <h3 className="text-xl font-semibold text-blue-400 mb-4">Prerequisites</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li>ESP8266 development board</li>
        <li>USB cable for programming</li>
        <li>Arduino IDE or ESP Flash Tool</li>
        <li>SSD1306 OLED Display (128x64)</li>
      </ul>
    </div>
  );
}