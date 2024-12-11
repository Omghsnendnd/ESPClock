import { ExternalLink } from 'lucide-react';

export function Prerequisites() {
  const items = [
    {
      name: 'ESP8266 NodeMCU Development Board',
      link: 'https://www.espressif.com/en/products/socs/esp8266',
      description: 'V3 recommended, CP2102 USB chip'
    },
    {
      name: 'USB Data Cable',
      link: 'https://www.usb.org/getting-vendor-id',
      description: 'Micro USB with data transfer capability'
    },
    {
      name: 'ESP Flash Tool',
      link: 'https://www.espressif.com/en/support/download/other-tools',
      description: 'Latest version for your OS'
    },
    {
      name: 'SSD1306 OLED Display',
      link: 'https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf',
      description: '128x64 I2C interface'
    },
    {
      name: 'Jumper Wires',
      link: 'https://learn.adafruit.com/adafruit-guide-excellent-solderless-breadboard',
      description: 'Female-to-female for connections'
    }
  ];

  return (
    <div className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300">
      <h3 className="text-xl font-semibold text-blue-400 mb-4">Prerequisites</h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-start group">
            <ExternalLink className="w-4 h-4 text-violet-400 mt-1 mr-2 flex-shrink-0" />
            <div>
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-violet-400 transition-colors duration-200"
              >
                {item.name}
              </a>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}