import React from 'react';

export function Troubleshooting() {
  return (
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
  );
}