import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AddProduct.css'

export default function AddProduct(props: any) {
  const [newProduct, setNewProduct] = useState({ id: 0, title: '', thumbnail: '', price: '', description: '', category: '' });
  const navigate = useNavigate();
  const OnChangeInput = (input: any) => {
    const { name, value } = input.target;
    setNewProduct({ ...newProduct, [name]: value });
  };
  function AddProduct() {
    navigate('/', { state: newProduct });
  }

  return (
    <div className='container-md'>
      <h1>Add Product</h1>
      <div>
        <label>Product Name:</label>
        <input type="text" name="title" value={newProduct.title} onChange={OnChangeInput} />
      </div>

      <div>
        <label>Image URL:</label>
        <input type="text" name="thumbnail" value={newProduct.thumbnail} onChange={OnChangeInput} />
      </div>

      <div>
        <label>Price:</label>
        <input type="text" name="price" value={newProduct.price} onChange={OnChangeInput} />
      </div>

      <div>
        <label>Description:</label>
        <input type="text" name="description" value={newProduct.description} onChange={OnChangeInput} />
      </div>

      <div>
        <label>Category:</label>
        <input type="text" name="category" value={newProduct.category} onChange={OnChangeInput} />
      </div>

      <div>
        <button type="button" className="btn btn-primary" onClick={() => AddProduct()}>
          Add
        </button>
      </div>
    </div>
  )
}
