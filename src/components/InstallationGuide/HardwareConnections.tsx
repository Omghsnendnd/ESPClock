import React from 'react';

export function HardwareConnections() {
  return (
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
  );
}