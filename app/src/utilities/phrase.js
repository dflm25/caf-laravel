const fitnessPhrases = [
  "Sigue avanzando siempre.",
  "Tú puedes más.",
  "No te rindas.",
  "Fuerza y constancia.",
  "Nunca te detengas.",
  "Cada día cuenta.",
  "Supera tus límites.",
  "Sé más fuerte.",
  "Empieza hoy mismo.",
  "Hazlo con pasión.",
];

function getRandomPhrase() {
  const randomIndex = Math.floor(Math.random() * fitnessPhrases.length);
  return fitnessPhrases[randomIndex];
}

export default getRandomPhrase;
