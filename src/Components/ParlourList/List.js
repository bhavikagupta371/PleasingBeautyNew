
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loading/Loading";

const List = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const { cityName } = useParams()
  


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch("https://fakestoreapi.com/products")
      setData(await response.json());
      setLoading(false)
      console.log(data);
    }
    fetchData()
  }, []);

  useEffect(() => {
    document.title = `Beauty Parlours In ${cityName}`;
  });

  const ShowParlours = () => {
    return (
      <div className="List">
        {data.map((item, index) => {
          item.quantity = 1;
          return (
            <Link to={`/${cityName}/${item.id}`}>
              <div className="ListCard" key={data.id}>
                <img src={item.image} alt="" />
                <div>
                  <h3> {item.title} [Parlour Name]</h3>
                  <p>{item.price} [Parlour Location]</p>
                  <p>{item.price} [Other Info]</p>
                  <button className='cart' onClick={()=>addToCart(product)}>Add to cart</button>
                </div>
              </div>
             </Link>
          );
        })}

      </div>
      
    )
  }
  return (
    <>
      {loading ? <Loader /> : <ShowParlours />}
    </>
  );
};

export default List;