import { useCallback, useState } from 'react';


/** A custom hook that fetchs grid data. */
const GridData = () => {
  const [items, setItems] = useState([]);

  /**
   * Makes a random number given a range.
   * @param {int} min
   * @param {int} max
   * @return {int}
  */
  const randomNumber = useCallback((min: number, max: number) => {
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
  }, []);

  /**
   * Makes a comma separated list of IDs.
   * @return {string}
  */
  const generateIds = useCallback(() => {
    const idSet = new Set();

    while (idSet.size < 21) {
      idSet.add(randomNumber(1, 671));
    }
    return Array.from(idSet).join();
  }, []);

  /**
   * Fetchs API.
   * @return {object}
  */
  const fetchItems = useCallback(async () => {
    const urlParams = generateIds();
    const SERVER = 'https://rickandmortyapi.com/api/character';
    const URI = `${SERVER}/${urlParams}`;

    const data = await fetch(URI)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      }).catch((error) => {
        console.log(error);
      });

      setItems(data);
  }, []);

  return [
    items,
    fetchItems
  ] as const;
};

export default GridData
