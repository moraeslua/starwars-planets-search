import { NEGATIVE_ONE } from '../context/PlanetsProvider';

const STAR_WARS_API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetsInfo = async () => {
  try {
    const response = await fetch(STAR_WARS_API_URL);
    const { results } = await response.json();
    const newResults = results.map(
      ({ residents, url, edited, created, films, ...rest }) => ({
        ...rest,
      }),
    );
    return newResults.sort((a, b) => {
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
