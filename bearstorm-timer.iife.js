(function(){"use strict";class i extends HTMLElement{connectedCallback(){this.innerHTML=`
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
    `;const t=this.querySelector("#send"),e=this.querySelector("#start"),s=this.querySelector("#stop");t.addEventListener("click",()=>{const n=this.parseTime(this.querySelector("#work").value),r=this.parseTime(this.querySelector("#rest").value),o=parseInt(this.querySelector("#rounds").value),a={work:n,rest:r,rounds:o};this.publish("bearstorm/timer/settings",a)}),e.addEventListener("click",()=>this.publish("bearstorm/timer/command","start")),s.addEventListener("click",()=>this.publish("bearstorm/timer/command","stop"))}parseTime(t){if(t.includes(":")){const[e,s]=t.split(":").map(Number);return e*60+s}return parseInt(t)}publish(t,e){const s=new CustomEvent("mqtt-publish",{detail:{topic:t,payload:typeof e=="string"?e:JSON.stringify(e)},bubbles:!0,composed:!0});this.dispatchEvent(s)}}customElements.define("bearstorm-timer",i)})();
