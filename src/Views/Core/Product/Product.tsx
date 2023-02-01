/* eslint-disable eqeqeq */
import { useState, useEffect } from "react";
import DetailsProduct from "../../../components/DetailsProduct/DetailsProduct";
import { Product } from "../../../interface/Product/Products";

import { useParams } from "react-router-dom";
import { db } from "../../../Firebase/index";
import { getDoc, collection, doc, DocumentData } from "firebase/firestore";

function ProductById() {
  const { id } = useParams();
  console.log(id, "ljnsalnad");
  let [product, setProduct] = useState<Array<Product>>([]);

  useEffect(() => {
    if (!id) {
      return;
    }
    const coleccion_product = collection(db, "productos");
    const doc_main = doc(coleccion_product, id);

    getDoc(doc_main)
      .then((data: DocumentData) => {
        console.log(data, "verificamos");
        return setProduct(data.data());
      })
      .catch((err) => {
        return err;
      });
  }, [id]);
  return <DetailsProduct product={product} />;
}

export default ProductById;
