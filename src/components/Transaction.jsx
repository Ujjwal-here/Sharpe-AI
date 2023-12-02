import {useState} from "react";
import {addDoc, collection} from "firebase/firestore"
import {db} from "../config/firebase-config";

export const Transaction = () => {

    const [walletAddress,setWalletAddress]=useState("")
    const [amount,setAmount]=useState("")
    const [err, setErr] = useState({})

   function walletAddressHandler(e){
        setWalletAddress(e.target.value)
   }
   function amountHandler(e){
        setAmount(e.target.value)
   }

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        // Check if the address is a valid Ethereum wallet address
        const addressRegex = /^(0x)?[0-9a-fA-F]{40}$/;
        if (!walletAddress) {
            newErrors.address = 'Wallet Address cannot be empty';
            valid = false;
        } else if (!(addressRegex.test(walletAddress))) {
            newErrors.address = 'Wallet Address should follow standard format';
            valid = false;
        }

        // Check if the amount is not empty
        if (!amount.trim()) {
            newErrors.amount = 'Please enter an amount';
            valid = false;
        }

        setErr(newErrors);
        return valid;
    };

    async function onSubmitHandler(e) {
        e.preventDefault()
        if (validateForm()) {
            await addDoc(collection(db, "wallet"), {
                walletAddress,
                amount
            })
        }
    }

    return (
        <div className="max-w-md mx-auto my-44">
            <form onSubmit={onSubmitHandler} className="space-y-8">
                <div>
                    <label htmlFor="walletAddress" className="text-lg block text-white mb-4 font-bold">Wallet Address</label>
                    <input type="text" id="walletAddress" name="walletAddress" placeholder="Enter wallet address"
                           value={walletAddress} onChange={walletAddressHandler}
                           className="text-sm block border border-white w-full rounded bg-[#101012] py-3 px-3 text-white focus:outline-none focus:ring focus:border-slate-800"/>
                    {err.address && <p className="my-4 text-slate-500">{err.address}</p>}
                </div>
                <div>
                    <label htmlFor="amount" className="text-lg block text-white mb-4 font-bold">Amount</label>
                    <input type="number" id="amount" name="amount" placeholder="Enter amount" value={amount}
                           onChange={amountHandler}
                           className="text-sm block border border-white w-full rounded bg-[#101012] py-3 px-3 text-white focus:outline-none focus:ring focus:border-blue-300"/>
                    {err.amount && <p className="my-4 text-slate-500">{err.amount}</p>}
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