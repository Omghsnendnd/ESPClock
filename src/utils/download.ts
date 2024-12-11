export function downloadFirmware() {
  const link = document.createElement('a');
  link.href = '/release.bin';
  link.download = 'esp8266-firmware.bin';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}