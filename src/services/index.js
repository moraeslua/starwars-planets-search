const STAR_WARS_API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetsInfo = async () => {
  try {
    const response = await fetch(STAR_WARS_API_URL);
    const { results } = await response.json();
    results.forEach((result) => delete result.residents);
    return results;
  } catch (error) {
    return error;
  }
};

export default getPlanetsInfo;
