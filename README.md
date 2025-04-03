# 🏋️ Bearstorm Training Timer

This is a custom frontend plugin (Lovelace card) for [Home Assistant](https://www.home-assistant.io/), designed for managing **interval training sessions**.  
You can easily set **Work**, **Rest**, and **Rounds**, send commands via **MQTT**, and use a visual timer directly in your dashboard.

---

## 🔧 Features

- ⏱️ Set Work Time / Rest Time / Number of Rounds
- 📡 Sends data via MQTT to ESPHome or other MQTT clients
- 🖥️ Built as a standalone frontend plugin with TypeScript + Vite
- 🧩 Fully compatible with [HACS](https://hacs.xyz)

---

## 📦 Installation via HACS

1. In Home Assistant, go to:

   **HACS → Frontend → ⋮ → Custom repositories**

2. Add repository:

   ```
   https://github.com/Bearstorm/bearstorm-training-timer-hacs
   ```

   - Type: `Plugin`

3. Search in HACS frontend and install **Bearstorm Training Timer**

4. Add the resource manually if not automatically added:

   ```yaml
   url: /hacsfiles/bearstorm-training-timer-hacs/bearstorm-timer.iife.js
   type: module
   ```

5. Use the card in Lovelace UI:

   ```yaml
   type: custom:bearstorm-timer
   ```

---

## 🖼️ Example UI

```yaml
type: custom:bearstorm-timer
```

> UI contains 3 inputs: Work, Rest, Rounds  
> + Send, Start, Stop buttons and current status preview.

---

## 🧪 Development & Building

To build your own version of the plugin:

```bash
npm install
npm run build
```

This creates the production file here:

```
dist/bearstorm-timer.iife.js
```

---

## 📂 Repository Structure

```
├── src/                    # Source TypeScript code
├── dist/                   # Final compiled JS for Home Assistant (HACS uses this)
├── package.json            # NPM scripts and dependencies
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript config
├── hacs.json               # HACS metadata
├── manifest.json           # HA plugin resource reference
├── README.md               # This file
└── LICENSE                 # Apache 2.0 with attribution
```

---

## 🪪 License

Licensed under **Apache 2.0**.  
Modification is allowed, but attribution to `Bearstorm` is required in derivative work or forks.

---

## 🛠 Suggestions or bugs?

Please open an [issue](https://github.com/Bearstorm/bearstorm-training-timer-hacs/issues) or create a pull request if you'd like to contribute.

---

**Built with ❤️ by Bearstorm**
