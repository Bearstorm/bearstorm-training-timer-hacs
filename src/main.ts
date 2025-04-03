
class BearstormTimer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: sans-serif;
          background: #111;
          color: white;
          padding: 1em;
        }
        input, button {
          display: block;
          width: 100%;
          margin: 0.3em 0;
          padding: 0.5em;
          font-size: 1em;
        }
        .status {
          margin-top: 1em;
          background: #222;
          padding: 0.5em;
          border-radius: 4px;
        }
      </style>
      <label>Work Time (s or mm:ss)</label>
      <input id="work" />
      <label>Rest Time</label>
      <input id="rest" />
      <label>Rounds</label>
      <input id="rounds" type="number" min="1" max="99" />
      <button id="send">Send Settings</button>
      <button id="start">Start</button>
      <button id="stop">Stop</button>
      <div class="status" id="status">Status: Waiting...</div>
    `;

    const sendBtn = this.querySelector("#send")!;
    const startBtn = this.querySelector("#start")!;
    const stopBtn = this.querySelector("#stop")!;

    sendBtn.addEventListener("click", () => {
      const work = this.parseTime((this.querySelector("#work") as HTMLInputElement).value);
      const rest = this.parseTime((this.querySelector("#rest") as HTMLInputElement).value);
      const rounds = parseInt((this.querySelector("#rounds") as HTMLInputElement).value);
      const payload = { work, rest, rounds };
      this.publish("bearstorm/timer/settings", payload);
    });

    startBtn.addEventListener("click", () => this.publish("bearstorm/timer/command", "start"));
    stopBtn.addEventListener("click", () => this.publish("bearstorm/timer/command", "stop"));
  }

  parseTime(val: string): number {
    if (val.includes(":")) {
      const [m, s] = val.split(":").map(Number);
      return m * 60 + s;
    }
    return parseInt(val);
  }

  publish(topic: string, payload: any) {
    const evt = new CustomEvent("mqtt-publish", {
      detail: {
        topic,
        payload: typeof payload === "string" ? payload : JSON.stringify(payload)
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(evt);
  }
}
customElements.define("bearstorm-timer", BearstormTimer);
