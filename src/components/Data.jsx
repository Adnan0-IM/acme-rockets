import {data} from "./objects";
import Card from "./Card";

const Data = () => {
   return (
    <>
      {data.map((item) => (
        <Card
          key={crypto.randomUUID()}
          title={item.title}
          price={item.price}
          image={item.image}
          complement={item.complement}
          />
          
        ))}
        
      
    </>
  );
};

export default Data;
