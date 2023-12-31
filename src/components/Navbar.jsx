import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="bg-[#101012] px-44 py-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/" className="text-white text-2xl font-bold">Sharpe AI</Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/transaction" href="#" className="text-slate-300 mx-10 text-base hover:text-white transition duration-300">Transaction</Link>
                    <Link to="/data" href="#" className="text-slate-300 mx-10 text-base hover:text-white transition duration-300">Data</Link>
                </div>
            </div>
        </nav>
    )
}