# Bearstorm Training Interval Timer

Custom frontend plugin (Lovelace card) for Home Assistant, allowing you to configure interval training with MQTT control for ESPHome devices.

## 💡 Features

- Set **Work / Rest / Rounds**
- Display current status
- Send commands via MQTT
- Built with Vite + TypeScript

## 🛠 Installation (via HACS)

1. Add this GitHub repository as a **custom HACS repository**:
   - Type: `Plugin`
   - URL: `https://github.com/Bearstorm/bearstorm-training-interval-timer`

2. Install the plugin via HACS

3. In **Settings → Dashboards → Resources**, add:

```yaml
url: /hacsfiles/bearstorm-training-interval-timer/bearstorm-timer.iife.js
type: module
```

4. Add the card to your dashboard:

```yaml
type: custom:bearstorm-timer
```

---

## ⚙ Build Locally (for development)

```bash
npm install
npm run build
```

Build output will appear in:

```
dist/bearstorm-timer.iife.js
```

---

## 📄 License

This project is under the Apache 2.0 license with attribution requirement on modification. See `LICENSE` for details.
