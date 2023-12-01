export const Transaction = () => {
    return (
        <div className="max-w-md mx-auto my-44">
            <form className="space-y-8">
                <div>
                    <label htmlFor="walletAddress" className="text-lg block text-white mb-4 font-bold">Wallet Address</label>
                    <input type="text" id="walletAddress" name="walletAddress" placeholder="Enter wallet address"
                           className="text-sm block border border-white w-full rounded bg-[#101012] py-3 px-3 text-white focus:outline-none focus:ring focus:border-slate-800"/>
                </div>
                <div>
                    <label htmlFor="amount" className="text-lg block text-white mb-4 font-bold">Amount</label>
                    <input type="number" id="amount" name="amount" placeholder="Enter amount"
                           className="text-sm block border border-white w-full rounded bg-[#101012] py-3 px-3 text-white focus:outline-none focus:ring focus:border-blue-300"/>
                </div>
                <div>
                    <button type="submit"
                            className="bg-[#FF592C] hover:bg-blue-600 text-white px-6 py-3 rounded-md text-sm transition duration-300">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}