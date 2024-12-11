import React from 'react';
import { ProductHeader } from './components/ProductHeader';
import { ProductDetails } from './components/ProductDetails';
import { InstallationGuide } from './components/InstallationGuide';
import { firmware } from './data/firmware';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="gradient-bg min-h-screen">
        <ProductHeader />
        <main className="container mx-auto px-4 py-12">
          <ProductDetails firmware={firmware} />
          <InstallationGuide />
        </main>
      </div>
    </div>
  );
}