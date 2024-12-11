import { Firmware } from '../types';

export const firmware: Firmware = {
  id: 'smart-esp-clock',
  name: 'SmartESPClock',
  description: 'Advanced WiFi-enabled clock firmware for ESP8266 with weather display, multiple time zones, and customizable LED display support.',
  version: '1.2.0',
  category: 'IoT',
  size: '356 KB',
  downloadUrl: '#',
  releaseDate: '2024-03-20',
  features: [
    'NTP Time Synchronization',
    'Multiple Time Zone Support',
    'Weather Display Integration',
    'Customizable LED Brightness',
    'Web-based Configuration',
    'OTA Updates',
    'Temperature Display',
    'Multiple Display Formats (12/24h)'
  ],
  author: 'ESP Clock Team'
};