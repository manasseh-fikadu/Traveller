import { createContext, useContext, useMemo, useEffect, useState } from "react";
import * as anchor from "@project-serum/anchor";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import idl from "../idl.json";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { set } from "mongoose";

const PostContext = createContext();

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
};

export const PostProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [initialize, setInitialize] = useState(false);
  const [transactionPending, setTransactionPending] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [lastPostId, setLastPostId] = useState(0);
  const [posts, setPosts] = useState([])

  const anchorWallet = useAnchorWallet();
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const program = useMemo(() => {
    if (anchorWallet) {
      const provider = new anchor.AnchorProvider(
        connection,
        anchorWallet,
        anchor.AnchorProvider.defaultOptions
      );
      return new anchor.Program(idl, PROGRAM_KEY, provider);
    }
  }, [connection, anchorWallet]);

  useEffect(() => {
    const start = async () => {
      if (program && publicKey) {
        setTransactionPending(true);
        try {
          const [userPda] = await findProgramAddressSync(
            [utf8.encode("user"), publicKey.toBuffer()],
            program.programId
          );
          const user = await program.account.userAccount.fetch(userPda);
          if (user) {
            setInitialize(true);
            setUser(user);
            setLastPostId(user.lastPostId);

            const postAccounts = await program.account.postAccount.all()
            setPosts(postAccounts)

          }
        } catch (err) {
          console.log("No User!");
          setInitialize(false);
        } finally {
          setTransactionPending(false);
        }
      }
    };
    start();
  }, [program, publicKey, transactionPending]);

  const initUser = async () => {
    if (program && publicKey) {
      setTransactionPending(true);
      try {
        const name = "Minase Fikadu";
        const avatar = "";
        const [userPda] = await findProgramAddressSync(
          [utf8.encode("user"), publicKey.toBuffer()],
          program.programId
        );

        await program.methods
          .initUser(name, avatar)
          .accounts({
            userAccount: userPda,
            authority: publicKey,
            systemProgram: SystemProgram.programId,
          })
          .rpc();
        setInitialize(true);
      } catch (err) {
        console.log(err);
      } finally {
        setTransactionPending(false);
      }
    }
  };

  const createPost = async (title, content) => {
    if (program && publicKey) {
      setTransactionPending(true);
      try {
        const [userPda] = await findProgramAddressSync(
          [utf8.encode("user"), publicKey.toBuffer()],
          program.programId
        );
        const [postPda] = findProgramAddressSync(
          [
            utf8.encode("post"),
            publicKey.toBuffer(),
            Uint8Array.from([lastPostId]),
          ],
          program.programId
        );
        await program.methods.createPost(title, content).accounts({
          postAccount: postPda,
          userAccount: userPda,
          authority: publicKey,
          systemProgram: SystemProgram.programId,
        }).rpc;

        setShowModal(false);
      } catch (err) {
        console.log(err);
      } finally {
        setTransactionPending(false);
      }
    }
  };

  return (
    <PostContext.Provider
      value={{
        user,
        initialize,
        initUser,
        showModal,
        setShowModal,
        createPost,
        posts
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
