"use client";
import React, { useEffect, useState } from 'react';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    // add other properties as needed
}

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                console.log(data);
                setProducts(data.products);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>I am product</h1>
            {products.map((item) => (
                <h1 key={item.id}>Id: {item.id}, Title: {item.title}</h1>
            ))}
        </div>
    );
};

export default ProductList;
