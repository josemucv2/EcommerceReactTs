import { useEffect, useState } from "react";
import { Product } from "../../../interface/Product/Products";
// import { getProducts } from "../../../Api/AllProducts/getAllProduct";
import Card from "../../../components/Card/Card";
import { db } from "../../../Firebase/index";
import {
  getDocs,
  collection,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";

function Home() {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    const coleccion = collection(db, "productos");

    getDocs(coleccion)
      .then((data: DocumentData) => {
        const docs = data.docs;
        const list = docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
          const data = doc.data();
          const id = doc.id;

          const product = {
            id: id,
            ...data,
          };
          return product;
        });
        setProducts(list);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  return (
    <div className="flex flex-wrap overflow-auto h-full">
      {products.map((element: Product) => {
        return (
          <div key={element.id}>
            <Card
              title={element.title}
              image={element.image}
              description={element.description}
              price={element.price}
              element={element}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
