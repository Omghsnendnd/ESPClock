import { Wifi, Clock, Settings } from 'lucide-react';

export function SetupSteps() {
  const steps = [
    { Icon: Wifi, text: 'Configure WiFi settings' },
    { Icon: Clock, text: 'Set up time synchronization' },
    { Icon: Settings, text: 'Customize display settings' }
  ];

  return (
    <div className="space-y-4">
      {steps.map(({ Icon, text }, index) => (
        <div key={index} className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300">
          <Icon className="w-6 h-6 text-violet-400 mr-3" />
          <p className="text-gray-300">{text}</p>
        </div>
      ))}
    </div>
  );
}