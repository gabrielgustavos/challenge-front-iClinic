export const FORCE_SIDE = [];

export const forceSides = async (setLoading) => {

  try {
    setLoading = true;
    const res = await Promise.race([
      fetch("https://swapi.dev/api/people/1"),
      fetch("https://swapi.dev/api/people/4"),
    ]);
    const data = await res.json();
    FORCE_SIDE.unshift(data.name);
    setLoading = false
    console.log(FORCE_SIDE);
  } catch (error) {
    console.log(`This API is not working, there is the reason: ${error}`);
  }
};
