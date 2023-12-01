export const Home = () => {
    return (
        <div className="flex justify-center items-center my-44">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-2 text-white">Hi, My name is Ujjwal Maurya</h1>
                <p className="text-lg mb-10 text-slate-400">A Frontend Developer at Company Sharpe AI</p>
               <div className="mx-96 mb-10">
                   <p className="text-slate-200 text-md">"I am a dedicated and skilled Software Engineer with a
                       B.Tech in Computer Science from Graphic Era Hill University. My professional journey includes
                       experiences as a Frontend Developer, Research Intern, and project contributor on diverse
                       applications, such as real-time chat systems, NFT generators, and COVID assistance platforms.</p>
               </div>
                <div className="flex justify-center space-x-6">
                    <a href="#"
                       className="bg-[#FF592C] hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm transition duration-300">Transaction
                        Page</a>
                    <a href="#"
                       className="bg-[#FF592C] hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm transition duration-300">Data
                        Page</a>
                </div>
            </div>
        </div>

    )
}