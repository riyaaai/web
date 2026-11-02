import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../product'

const ProductDetails = () => {
    const{id} = useParams()
    const productFound=products.find((item)=> item.id === Number(id) )
console.log(productFound );

  return (
    <div className=" flex items-center justify-center max-w-5xl mx-auto gap-6 pt-20 pb-20">

<img  className="h-[400px] w-[400px] object-cover rounded-2xl  "src={productFound.image} alt="" />
     
<div>
  <p className="pb-4 text-amber-800"> Back to Collections</p>

  <p className="text-xs uppercase text-mist-500 mb-4 tracking-[6px]">{productFound.category}</p>
<p className="text-3xl font-ply text-amber-900 mb-5">  {productFound.name}</p>

     
     <p className="mb-6"> {productFound.price}</p>
     <p className="text-amber-800">A timeless addition to your wardrobe.Discover effortless style,
      considered details,and everyday comfort with MAISON.
     </p>
     <button className= " hover:bg-amber-950 bg-amber-900 text-white px-8 py-3 mt-5 w-[500px]  "> ADD TO BAG </button>
     <p className="text-center text-amber-900 p-5">Timeless style.Made for everyday</p>
</div>

     
    </div>
  )
}
export default ProductDetails
