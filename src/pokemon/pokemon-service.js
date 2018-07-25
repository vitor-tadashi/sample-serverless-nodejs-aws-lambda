const request = require('request');

function PokemonService() {
}

PokemonService.prototype.getById = function getById(idPokemon) {
  return new Promise(async (resolve, reject) => {
    await request(`${process.env.URL_POKEMON_API}/pokemon/${idPokemon}`, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
};

module.exports = PokemonService;
