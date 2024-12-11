import React from 'react';
import { Clock, Cpu, Wifi } from 'lucide-react';
import { downloadFirmware } from '../utils/download';

export function ProductHeader() {
  return (
    <header className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-violet-600 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex items-center space-x-6 animate-float">
            <Clock className="w-12 h-12 text-violet-400" />
            <Cpu className="w-12 h-12 text-blue-400" />
            <Wifi className="w-12 h-12 text-indigo-400" />
          </div>
          
          <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-400">
            SmartESPClock
          </h1>
          
          <p className="text-xl text-center text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transform your ESP8266 into a smart clock with wave display and multiple time zones.
            Perfect for makers and IoT enthusiasts.
          </p>
          
          <div className="flex space-x-4">
            <button 
              onClick={downloadFirmware}
              className="px-8 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg font-medium transition-all duration-300 animate-pulse-glow"
            >
              Download Now
            </button>
            <button 
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-all duration-300">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}