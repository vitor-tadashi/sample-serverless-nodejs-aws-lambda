const PokemonService = require('./pokemon-service');

module.exports.getById = (event, context, callback) => {
    const pokemonService = new PokemonService();
    const idPokemon = event.pathParameters.id;

    pokemonService.getById(idPokemon).then(res => {
        const response = {
            statusCode: 200,
            body: res,
        };

        callback(null, response);
    }).catch(err => {
        const response = {
            statusCode: 200,
            body: err,
        };

        callback(null, response);
    });
};
