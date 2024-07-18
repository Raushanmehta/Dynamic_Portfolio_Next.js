import React from 'react';
import Image from 'next/image';

interface Product {
    id: number;
    imageUrl: string;
    description: string;
    price: number;
}

const products: Product[] = [
    { id: 1, imageUrl: "/assets/Product-image.jpg", description: "Lorem ipsum dolor sit.", price: 4166 },
    { id: 2, imageUrl: "/assets/Product-image.jpg", description: "Lorem ipsum dolor sit.", price: 4166 },
    { id: 3, imageUrl: "/assets/Product-image.jpg", description: "Lorem ipsum dolor sit.", price: 4166 },
    { id: 4, imageUrl: "/assets/Product-image.jpg", description: "Lorem ipsum dolor sit.", price: 4166 },
    { id: 5, imageUrl: "/assets/Product-image.jpg", description: "Lorem ipsum dolor sit.", price: 4166 },
];

const Card: React.FC = () => {
    return (
        <div className='min-h-screen'>
            <h2 className='text-black md:flex-col text-3xl font-bold flex justify-center items-center'>All Product</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10 px-10'>
                {products.map(product => (
                    <div key={product.id} className='bg-white shadow-lg rounded-lg'>
                        <div>
                            <Image src={product.imageUrl} alt='product' width={500} height={700} className='rounded-lg w-full' />
                            <div className='p-4'>
                                <p>{product.description}</p>
                                <h3>{product.price}</h3>
                                <button className='bg-black text-white flex w-full h-12 items-center justify-center rounded-full border border-slate-800 hover:bg-gray-800'>Buy</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
