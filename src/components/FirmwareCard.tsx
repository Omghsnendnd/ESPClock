import React from 'react';
import { Download, Calendar, HardDrive, Check } from 'lucide-react';
import { Firmware } from '../types';

interface FirmwareCardProps {
  firmware: Firmware;
}

export function FirmwareCard({ firmware }: FirmwareCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{firmware.name}</h3>
            <span className="inline-block px-2 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mt-2">
              {firmware.category}
            </span>
          </div>
          <span className="text-sm font-medium text-gray-500">v{firmware.version}</span>
        </div>
        
        <p className="mt-4 text-gray-600">{firmware.description}</p>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            Released: {firmware.releaseDate}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <HardDrive className="w-4 h-4 mr-2" />
            Size: {firmware.size}
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {firmware.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
            <Download className="w-4 h-4 mr-2" />
            Download Firmware
          </button>
        </div>
      </div>
    </div>
  );
}