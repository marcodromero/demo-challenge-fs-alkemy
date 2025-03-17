import { create } from "zustand";
import { formatDate, formatDateToYMD } from "../utils/formatDate";
import {
  getOperations,
  createOperation,
  updateOperation,
  deleteOperation,
} from "../services/operations";

export const useOperationStore = create((set, get) => ({
  token:'',
  operation: null,
  operations: [],
  message: "",
  filled: false,
  isError: false,
  setToken: (userToken)=>{
     set({ token: userToken });
  },
  resetStates: () => {
    set({ filled: false });
    set({ isError: false });
    set({ message: "" });
  },
  setOperation: (operation) => {
    let { date, ...data } = operation;
    //const formattedDate = formatDateToYMD(date);
    const formattedDate = "2025-03-16"; //fake data
    data = { ...data, date, formattedDate };
    set({ operation: data });
  },
  getOperations: async (categoryId = undefined) => {
    //const token =  get().token;
    //const response = await getOperations({categoryId, token});
    //const {data, error} = await response.json();
    const {data, error} = {error: false, data: [
      {
      id: 3,
      concept: "Gané la rifa del almacén",
      amount: 5200,
      date: "10-03-2025",
      Category:{name:"Otros"}
    },
    {
      id: 2,
      concept: "Compra de verduras y carne",
      amount: -10000,
      date: "05-03-2025",
      Category:{name:"Alimentos y bebidas"}
    },
      {//fake data
      id: 1,
      concept: "Cobré mi sueldo",
      amount: 50000,
      date: "01-03-2025",
      Category:{name:"Sueldo"}
    },
    
    
  ]} 
    if(!error){
        set({ operations: data });
    }
  },
  createOperation: async (operationData) => {
    //const token =  get().token;
    //const response = await createOperation({operationData, token});
    //const {error, message} = await response.json();
    const {error,} = {error: false}; //fake data
    if(!error){
      set({ message: "La operación fue agregada a la lista." });
      //get().getOperations();
      set({ filled: true });
      set({ isError: false });
    } else {
      //set({ message: message});
      set({ isError: true });
    }
  },
  updateOperation: async (operationData) => {
    //const token =  get().token;
    //let response = await updateOperation({operationData, token});
    //const {error, message} = await response.json();
    const {error} = {error: false};
    if(!error){
      set({ message: "La operación fue actualizada." });
      //get().getOperations();
      set({ filled: true });
      set({ isError: false });
    } else {
      //set({ message: message });
      set({ isError: true });
    }
  },
  deleteOperation: async (id) => {
    //const token =  get().token;
    //let response = await deleteOperation({id, token});
    //const {data, error, message} = await response.json();
    const {error} = {error: false}//fake data
    if(!error){
      set({ message: "La operación fue eliminada." });
      //get().getOperations();
      set({ filled: true });
      set({ isError: false });
    } else {
      //set({ message: message });
      set({ isError: true });
    }
  },
}));
