import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductDetail from '../../components/ProductDetail/ProductDetail';

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: string;
  description: string;
  category: string;

}

function GetPageId(): string | null {
  return new URLSearchParams(window.location.search).get('id');
}

export default function ProductDetailPage() {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productId = GetPageId();
        if (productId) {
          const result = await axios.get(`https://dummyjson.com/products/${productId}`);
          const fetchedProduct: Product = result.data;
          setProduct(fetchedProduct);
        }
      } catch (error) {
        console.error('Error fetching product:', error);

      }
    };

    fetchData();
  }, []);

  return (
    <>
      {product ? <ProductDetail product={product} /> : null}
    </>
  );
}
