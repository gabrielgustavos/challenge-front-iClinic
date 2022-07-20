import { MASTER_NAME } from "../API";

import Luke from "../assets/images/luke-skywalker.png";
import Darth from "../assets/images/darth-vader.png";

let light = "Luke Skywalker";
let dark = "Darth Vader";

const Master = () => {
  return (
    <>
      <h1>{MASTER_NAME[0]}</h1>
      <img src={MASTER_NAME[0] === light ? Luke : Darth} alt={MASTER_NAME[0]} />
    </>
  );
};

export default Master;
