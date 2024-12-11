export interface Firmware {
  id: string;
  name: string;
  description: string;
  version: string;
  category: 'Home Automation' | 'Development' | 'IoT' | 'Custom';
  size: string;
  downloadUrl: string;
  releaseDate: string;
  features: string[];
  author: string;
}