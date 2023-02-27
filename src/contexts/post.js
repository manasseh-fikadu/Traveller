import { createContext, useContext } from "react";
import * as anchor from "@project-serum/anchor";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import idl from "../idl.json";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";

const PostContext = createContext();

export const usePost = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error("usePost must be used within a PostProvider");
    }
    return context;
};

export const PostProvider = ({ children }) => {
    const [post, setPost] = useState({});

    return (
        <PostContext.Provider value={{ post, setPost }}>
            {children}
        </PostContext.Provider>
    );
}