import React from 'react';
import { Button } from '@/components/ui/button'; // shadcn/ui Button
import { Input } from '@/components/ui/input'; // shadcn/ui Input
import { Slider } from '@/components/ui/slider'; // shadcn/ui Slider
import { Checkbox } from '@/components/ui/checkbox'; // shadcn/ui Checkbox
import Footer from '../../components/Footer/Footer';

const page = () => {
  // Dummy product data
  const products = [
    { id: 1, name: 'Product 1', price: '$20', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$25', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: '$30', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: '$35', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: '$40', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 6', price: '$45', image: 'https://via.placeholder.com/150' },
  ];

  // Dummy categories
  const categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Home & Kitchen' },
    { id: 4, name: 'Books' },
  ];

  return (
    <div className="flex bg-white flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
        <p className="text-lg mb-6">Discover the best products at amazing prices</p>
        <Input
          type="text"
          placeholder="Search for products..."
          className="max-w-md mx-auto bg-white/20 border-white/30 placeholder:text-white/70"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 p-6 gap-6">
        {/* Sidebar */}
        <aside className="w-64 p-4 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Category</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id} className="flex items-center">
                  <Checkbox id={`category-${category.id}`} className="mr-2" />
                  <label htmlFor={`category-${category.id}`} className="text-sm">
                    {category.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range Filter */}
          <div>
            <h3 className="font-medium mb-2">Price Range</h3>
            <Slider defaultValue={[0, 100]} max={100} step={1} className="mb-4" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>$0</span>
              <span>$100</span>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.price}</p>
                <Button className="w-full">Add to Cart</Button>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default page;