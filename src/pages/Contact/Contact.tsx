import React from "react";
import { Forms } from "./styleContact";

export function Contact() {
  return (
    <Forms>
      <div>
        <label>Nome:</label>
        <input type="text" required />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" required />
      </div>
      <div>
        <label>Mensagem:</label>
        <textarea className="msg" required />
      </div>
      <button>Enviar</button>
    </Forms>
  );
}
