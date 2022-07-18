export const SITH_NAME = "Darth Vader";
export const JEDI_NAME = "Luke Skywalker";

export const forceSides = async () => {
  try {
    const response = await Promise.race([
      fetch("https://swapi.dev/api/people/1"),
      fetch("https://swapi.dev/api/people/4"),
    ]);

    const req = await response.json();
    console.log(req.name);
  } catch (error) {
    console.log(`This API is not working, there is the reason: ${error}`);
  }
};
