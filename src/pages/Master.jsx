import { FORCE_SIDE, forceSides } from "../API";

const Master = () => {
  return (
    <div>
      <h1>{FORCE_SIDE[0]}</h1>
      <button disabled={loading} onClick={forceSides}>
        Clique aqui
      </button>
    
    </div>
  );
};

export default Master;
