import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise= fetch("/category.json").then((res)=>res.json());

const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div className="">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 items-center gap-4">
                {
                categories.map(category=><NavLink key={category.id} className={({ isActive }) =>
            `btn text-xl rounded-lg border-0 font-semibold transition duration-300 ease-in-out 
            ${isActive 
              ? "bg-blue-500 text-white scale-105" 
              : "bg-linear-to-r from-blue-500 to-cyan-400 text-white hover:from-blue-600 hover:to-cyan-500 hover:-translate-y-1 hover:scale-105"
            }`
          }
                to={`/category/${category.id}`}
                >{category.name}</NavLink>)
            }
            </div>
        </div>
    );
};

export default Categories;