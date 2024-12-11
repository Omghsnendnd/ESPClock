import React from 'react';
import { Cpu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-8">
          <Cpu className="w-12 h-12 mr-4" />
          <h1 className="text-4xl font-bold">ESP8266 Firmware Hub</h1>
        </div>
        <p className="text-center text-xl text-blue-100 max-w-2xl mx-auto">
          Download and flash the latest firmware for your ESP8266 devices.
          Explore our collection of reliable, feature-rich firmware options.
        </p>
      </div>
    </header>
  );
}