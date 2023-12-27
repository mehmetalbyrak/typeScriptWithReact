import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";
import { useLocation } from "react-router-dom";
import './Homepage.css';

export default function Homepage() {
  const location = useLocation();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (location.state != null) {
      addNewProduct(location.state);
    }
  }, [location.state]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      setError("Error fetching products. Please try again later.");
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      await axios.delete(`https://dummyjson.com/products/${id}`);
      const updatedProducts = products.filter((item) => item.id !== id);
      setProducts(updatedProducts);
      alert("Product deleted.");
    } catch (error) {
      setError("Error deleting product. Please try again later.");
      console.error("Error deleting product:", error);
    }
  };

  const addNewProduct = async (product: any) => {
    try {
      await axios.post("https://dummyjson.com/products/add", product);
      fetchProducts();
      alert("Product added.");
    } catch (error) {
      setError("Error adding product. Please try again later.");
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="container mt-5">
      {loading && <p>Loading...</p>}
      {error && <p className="error-msg">{error}</p>}
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 col-12 mb-5">
            <ProductCard product={product} delete={() => deleteProduct(product.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}
