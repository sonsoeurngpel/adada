import React from "react";

const Navbar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }    
    return(
                <div className="w-full border-b border-pale-yellow max-w-1xl ">
                    <div className="relative flex items-center justify-between h-20 mx-0 max-w-1xl">
                        <div className="items items-center mx-20 justify-between w-full text-center sm:flex lg:flex">
                            <div className="flex justify-center items-center flex-shrink-0">
                                <h1 className="font-justanotherhand text-5xl cursor-pointer text-maastricht">
                                Adex<span className="text-pale-yellow">Story</span>
                                </h1>
                            </div>
                            {/* Connect */}
                            <div className="hidden md:block">
                                {isConnected ? (
                                    <button className="bg-pale-yellow text-teal text-4xl font-justanotherhand inline-flex items-center px-5 py-2 shadow-sm rounded-md">Connected Wallet</button>
                                ) : (
                                    <button className="bg-pale-yellow text-teal text-4xl font-justanotherhand inline-flex items-center px-5 py-2 shadow-sm rounded-md"
                                    onClick={connectAccount}>Connect Wallet</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Navbar;