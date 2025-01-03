import { quotes } from "./objects";
import Template from "./Template";

const Quotes = () => {
  return quotes.map((item) => {
    return (
      <Template
        key={crypto.randomUUID()}
        quote={item.quote}
        author={item.author}
      />
    );
  });
};

export default Quotes;
