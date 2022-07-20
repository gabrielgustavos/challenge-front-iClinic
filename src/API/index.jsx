export const MASTER_NAME = []
export const forceSides = async (setLoading, navigate) => {
  try {
    setLoading(true);
    const res = await Promise.race([
      fetch("https://swapi.dev/api/people/1"),
      fetch("https://swapi.dev/api/people/4"),
    ]);
    const data = await res.json();
    MASTER_NAME.unshift(data.name)
    console.log(MASTER_NAME[0])
    setLoading(false);

    if(MASTER_NAME[0] === "Luke Skywalker"){
      navigate("master")
    } else {
      navigate("master")
    }

  } catch (error) {
    setLoading(false);
    console.log(`This API is not working, there is the reason: ${error}`);
  }
};
