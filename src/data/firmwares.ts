import { Firmware } from '../types';

export const firmwares: Firmware[] = [
  {
    id: 'tasmota',
    name: 'Tasmota',
    description: 'Popular open-source firmware for home automation devices',
    version: '12.5.0',
    category: 'Home Automation',
    size: '544 KB',
    downloadUrl: '#',
    releaseDate: '2024-03-15',
    features: ['Web UI', 'MQTT Support', 'OTA Updates', 'Timer Functions'],
    author: 'Theo Arends'
  },
  {
    id: 'esphome',
    name: 'ESPHome',
    description: 'Firmware creation tool for ESP8266/ESP32 devices',
    version: '2024.2.0',
    category: 'Development',
    size: '468 KB',
    downloadUrl: '#',
    releaseDate: '2024-02-28',
    features: ['Home Assistant Integration', 'Custom Sensors', 'Over-the-Air Updates'],
    author: 'ESPHome Team'
  },
  {
    id: 'nodemcu',
    name: 'NodeMCU',
    description: 'Lua-based firmware for IoT projects',
    version: '3.0.1',
    category: 'IoT',
    size: '512 KB',
    downloadUrl: '#',
    releaseDate: '2024-03-01',
    features: ['Lua Runtime', 'WiFi Management', 'GPIO Control'],
    author: 'NodeMCU Team'
  }
];