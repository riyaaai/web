import React from 'react'
import products from '../product'
import { Link } from 'react-router-dom'

const Collection = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-7 p-5">
                    {products.map((item,indx)=>(
                        <Link to={`/product/${item.id}`} key={item.id} className="relative" >
                                <img src={item.image} alt="" className="w-full h-64 object-cover rounded-2xl "/>
                                <p className=" absolute top-3 left-3 bg-white rounded-full px-7 py-3 text-sm ">
                                    {item.category}
                                </p>
                                
                                <p className="text-left mt-2">{item.name}</p>

                                
                                <p className="text-left"> ${item.price}</p>
                                <button className="w-full border-2 border-black bg-white text-black mt-4 hover:bg-amber-800 hover:text-white transition duration-200">
                                    view product
                                </button>
                        </Link>
                    ))}
                </div>
    </div>
  )
}

export default Collection
// rafce