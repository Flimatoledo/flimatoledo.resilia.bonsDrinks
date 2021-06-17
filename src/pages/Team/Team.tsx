import React from "react";
import { Container } from "./styleTeam";

export function Team() {
  return (
    <Container>
      <div>
        <img
          src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/000391721b866ca784868674b7ff1bffe34b3d77_full.jpg"
          alt="Foto de perfil"
        />
        <p>Jonh Doe</p>
        <p>
          Nasci no Chile mas vim para o Brasil muito pequeno. Porem não nego
          minhas origens e gosto de drinks derivados de um bom vinho!
        </p>
      </div>

      <div>
        <img
          src="https://avatars.githubusercontent.com/u/75772611?v=4"
          alt="Foto de perfil"
        />
        <p>Felipe Toledo</p>
        <p>
          Me chamo Felipe, moro no Rio de Janeiro e não consigo resistir ao meu
          chopp artesanal.
        </p>
      </div>

      <div>
        <img
          src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/80/8061bed3b7d4f540c5954bf5217c76c6183d140d_full.jpg"
          alt="Foto de perfil"
        />
        <p>Janaina Souza</p>
        <p>Apaixonada por drinks derivados da tequila.</p>
      </div>
    </Container>
  );
}
