import React from 'react';
import { Prerequisites } from './Prerequisites';
import { HardwareConnections } from './HardwareConnections';
import { SetupSteps } from './SetupSteps';
import { Troubleshooting } from './Troubleshooting';

export function InstallationGuide() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-8 mt-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-violet-400 mb-6">Installation Guide</h2>
      <div className="space-y-8">
        <Prerequisites />
        <HardwareConnections />
        <SetupSteps />
        <Troubleshooting />
      </div>
    </div>
  );
}