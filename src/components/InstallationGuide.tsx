import React from 'react';
import { Terminal, Wifi, Clock, Settings } from 'lucide-react';

export function InstallationGuide() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-8 mt-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-violet-400 mb-6">Installation Guide</h2>
      
      <div className="space-y-8">
        <div className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Prerequisites</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>ESP8266 development board</li>
            <li>USB cable for programming</li>
            <li>Arduino IDE or ESP Flash Tool</li>
            <li>SSD1306 OLED Display (128x64)</li>
          </ul>
        </div>

        <div className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Hardware Connections</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left px-4 py-2 text-violet-400">ESP8266 Pin</th>
                  <th className="text-left px-4 py-2 text-violet-400">Connection</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="hover:bg-gray-600 transition-colors duration-200">
                  <td className="px-4 py-2">D1</td>
                  <td className="px-4 py-2">SCL (OLED Display)</td>
                </tr>
                <tr className="hover:bg-gray-600 transition-colors duration-200">
                  <td className="px-4 py-2">D2</td>
                  <td className="px-4 py-2">SDA (OLED Display)</td>
                </tr>
                <tr className="hover:bg-gray-600 transition-colors duration-200">
                  <td className="px-4 py-2">GPIO0</td>
                  <td className="px-4 py-2">Mode Button</td>
                </tr>
                <tr className="hover:bg-gray-600 transition-colors duration-200">
                  <td className="px-4 py-2">A0</td>
                  <td className="px-4 py-2">Battery Monitoring</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          {[Wifi, Clock, Settings].map((Icon, index) => (
            <div key={index} className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300">
              <Icon className="w-6 h-6 text-violet-400 mr-3" />
              <p className="text-gray-300">Setup step {index + 1}</p>
            </div>
          ))}
        </div>

        <div className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Troubleshooting</h3>
          <div className="bg-gray-800 border-l-4 border-violet-500 p-4">
            <p className="text-violet-400">If you encounter any issues:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-300">
              <li>Check all hardware connections</li>
              <li>Verify WiFi credentials are correct</li>
              <li>Ensure proper power supply (3.3V)</li>
              <li>Check serial monitor for debug messages</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}