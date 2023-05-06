import React, { useContext, createContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract("0x9F435Fa5D3Ef2104D43f9eF30b5fF24AA36f7776");
  const { mutateAsync: storeString, isLoading } = useContractWrite(contract, "storeString")

  const address = useAddress();
  const connect = useMetamask();

  const saveStrings = async (key, value) => {
    try {
      const data = await storeString(key, value);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  const readByKeys = async (keys) => {
    console.log("keys", typeof(keys));
    try {
      const data = await contract.call("getAllValuesByKey", [
        keys,
      ]);
      
      console.info("contract call successs");
      return data;
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        saveStrings,
        readByKeys,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);