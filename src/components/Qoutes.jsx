import { qoutes } from "./objects";
import Template from "./Template";

const Qoutes = () => {
  return qoutes.map((item) => {
    return (
      <Template
        key={crypto.randomUUID()}
        qoute={item.qoute}
        author={item.author}
      />
    );
  });
};

export default Qoutes;
