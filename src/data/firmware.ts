import { Firmware } from '../types';

export const firmware: Firmware = {
  id: 'smart-esp-clock',
  name: 'SmartESPClock',
  description: 'Advanced WiFi-enabled clock firmware for ESP8266 with weather display, multiple time zones, and customizable LED display support.',
  version: '0.1.4-beta',
  category: 'IoT',
  size: '339 KB',
  downloadUrl: '#',
  releaseDate: '11-12-2024',
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