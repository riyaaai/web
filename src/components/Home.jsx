const Home = (props) => {
    
    return (
        <div className="text-[#7F011F] p-6 px-7 flex gap-20 justify-center bg-[#F5EBD0] h-screen items-center">
            {/* left section */}
            <div className="flex flex-col gap-7">
                <p className="text-sm tracking-wider">DESIGNED FOR THE EVERYDAY</p>
                <p className="text-7xl max-w-md leading-23 font-ply"> {props.title} </p>
                <p className="font-out">Discover thoughtfully curated pieces that bring simplicity,<br></br>
                character, and timeless style into your everyday life.</p>
                <div className="flex gap-4 ">
                    <button className="bg-[#7F011F] text-[#F5EBD0] p-4 font-out">EXPLORE COLLECTION </button>
                    <button className="border border-[#7F011F] text-[#7F011F] p-4">OUR STORY</button>
                </div>
                <div className="bg-[#7F011F]/20 h-[1px]"/>
                <div className="flex justify-between">
                    <div>
                        <p className="text-2xl font-bold ">100%  </p>
                        <p className="text-sm">Thoughtfully curated</p>
                    </div>
                    <div className="bg-[#7F011F]/20 h-[40px]  w-[1px]"/>
                    <div>
                        <p className="text-2xl font-bold">Timeless</p>
                        <p className="text-sm">by design</p>
                    </div>
                </div>
            </div>


            {/* right section */}

            <div  className="relative ">

                <img className="max-w-3xl rounded-md  " src="https://maison-ui-self.vercel.app/assets/mens-fashion-B0stqacK.png" alt="" />

                <div className="bg-[#F5EBD0] text-xl absolute left-10 bottom-10 p-4">
                    <p>The new collection </p>
                    <p className="font-ply"> Season of simplicity</p>
                </div>

            </div>


        </div>
    )
}

export default Home