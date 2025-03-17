import { create } from "zustand";
import {
  getBalance
} from "../services/balance";

export const useBalanceStore = create((set, get) => ({
    token: '',
    balance: [],
    setToken: (userToken)=>{
        set({ token: userToken });
    },
    getBalance: async () => {
        //const response = await getBalance(get().token);
        //const {data, error} = await response.json();
        const {data, error} = {error: false , data:[
            {
            id:3, amount: 45200, date:"10-03-25"
        },
            {
            id:2, amount: 40000, date:"05-03-25"
        },
            {//fake data
            
            id:1, amount: 50000, date:"01-03-25"
        },
        
        
    ]}; 
        if(!error){
            set({ balance: data });
        }
    },
    
}))