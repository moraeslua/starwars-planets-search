import { NEGATIVE_ONE } from '../context/PlanetsProvider';

const STAR_WARS_API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetsInfo = async () => {
  try {
    const response = await fetch(STAR_WARS_API_URL);
    const { results } = await response.json();
    results.forEach((result) => delete result.residents);
    return results.sort((a, b) => {
      if (a.name < b.name) {
        return NEGATIVE_ONE;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  } catch (error) {
    return error;
  }
};

export default getPlanetsInfo;
