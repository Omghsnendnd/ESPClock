# ESPClock

## Overview
This project uses an ESP8266 microcontroller to control an OLED display, enabling the visualization of battery levels, animations, and clock functionality. Additionally, a web-based interface allows for the configuration of wave animation parameters and the display of custom text on the OLED.

## Features
- **WiFi Connectivity**: Connects to a specified WiFi network.
- **Web Interface**: Provides a control panel for:
  - Adjusting wave animation speed and height.
  - Toggling between clock and animation display modes.
  - Sending custom messages to the OLED display.
- **OLED Display**:
  - Displays battery level with a graphical indicator.
  - Shows wave animation or clock based on user selection.
  - Displays custom messages.
- **Battery Monitoring**: Continuously monitors and displays battery percentage.
- **EEPROM Storage**: Saves user settings for wave speed, wave height, and clock timezone.
- **Button Control**: GPIO0 button toggles between clock mode and clears custom messages.

## Hardware Requirements
- **ESP8266 Microcontroller** (e.g., NodeMCU or Wemos D1 Mini)
- **OLED Display** with I2C interface (e.g., SSD1306)
- Button connected to GPIO0
- Battery for power monitoring

## Pin Configuration
- **OLED SDA**: D2 (GPIO4)
- **OLED SCL**: D1 (GPIO5)
- **Button**: GPIO0
- **Battery Voltage Monitoring**: A0

## Software Requirements
- Arduino IDE with the following libraries installed:
  - `ESP8266WiFi.h`
  - `ESP8266WebServer.h`
  - `SSD1306Wire.h`
  - `Wire.h`
  - `NTPClient.h`
  - `EEPROM.h`

## Setup Instructions
1. **Install Arduino IDE and Libraries**:
   - Ensure the necessary libraries listed above are installed in your Arduino IDE.

2. **Hardware Connections**:
   - Connect the OLED display to the ESP8266 using the specified pins.
   - Attach a button to GPIO0.
   - Connect the battery voltage to the A0 pin (using a voltage divider if necessary).

3. **Code Configuration**:
   - Update the `ssid` and `password` variables with your WiFi credentials.
   - Ensure the I2C pins (SDA and SCL) match your hardware configuration.

4. **Upload the Code**:
   - Connect your ESP8266 to your computer via USB.
   - Select the appropriate board and port in the Arduino IDE.
   - Compile and upload the provided sketch.

5. **Access the Web Interface**:
   - After the ESP8266 connects to WiFi, it will display its IP address in the Serial Monitor.
   - Open a browser and navigate to the displayed IP address to access the control panel.

## Web Interface
The web interface allows you to:
- **View Battery Status**: Displays the current battery percentage.
- **Toggle Modes**: Switch between clock and wave animation modes.
- **Set Wave Speed**: Adjust the speed of the wave animation.
- **Set Wave Height**: Adjust the height of the wave animation.
- **Send Custom Message**: Input text to be displayed on the OLED screen.

## Custom Message Functionality
- Send a message via the web interface to display it on the OLED.
- Press the button (GPIO0) to clear the custom message and revert to the default display (clock or animation).

## EEPROM Usage
- **Wave Height**: Stored at address 0
- **Wave Speed**: Stored at address 4
- **Timezone Offset**: Stored at address 8

## Additional Notes
- The button has a debounce delay to prevent multiple toggles from a single press.
- Battery percentage is updated every 10 seconds to avoid unnecessary ADC reads.
- The OLED display supports both small and large fonts for clear readability.

## Future Enhancements
- Add more customization options via the web interface.
- Improve animations and include more display modes.
- Enhance power efficiency for battery-powered operation.

---
**Version**: 0.1.4-beta
