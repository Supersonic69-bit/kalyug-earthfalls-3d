
/*
 * KALYUG: EARTHFALLS
 * Game engine module
 *
 * Three.js game logic will be moved here
 * from index.html in the next step.
 */

export const EARTHFALLS = {
  title: "KALYUG: EARTHFALLS",
  version: "0.1.0",
  mode: "third-person-shooter",
  platform: "mobile-web",
  status: "development"
};

export function getGameStatus() {
  return {
    title: EARTHFALLS.title,
    version: EARTHFALLS.version,
    ready: false,
    message: "Game engine integration pending"
  };
}

console.log("KALYUG: EARTHFALLS engine module loaded.");
