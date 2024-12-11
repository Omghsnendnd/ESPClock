import { Download, Calendar, HardDrive } from 'lucide-react';
import { Firmware } from '../types';
import { downloadFirmware } from '../utils/download';

interface ProductDetailsProps {
  firmware: Firmware;
}

export function ProductDetails({ firmware }: ProductDetailsProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-lg overflow-hidden p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-violet-400">
              Version {firmware.version}
            </div>
            <div className="flex items-center text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              Released: {firmware.releaseDate}
            </div>
            <div className="flex items-center text-gray-400">
              <HardDrive className="w-4 h-4 mr-2" />
              Size: {firmware.size}
            </div>
          </div>
          <button 
            onClick={downloadFirmware}
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 animate-pulse-glow flex items-center"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Firmware
          </button>
        </div>

        {/* Rest of the component remains the same */}
      </div>
    </div>
  );
}