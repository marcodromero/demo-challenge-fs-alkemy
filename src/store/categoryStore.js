import { create } from "zustand";
import {
  getCategories
} from "../services/categories";

export const useCategoryStore = create((set, get) => ({
    categories: [],
    getCategories: async () => {
        //const response = await getCategories();
        //const {data, error} = await response.json();
        const {data, error} = {error: false, data:[
            { name: "Alimentos y bebidas"},
            { name: "Otros"},
            { name: "Servicios"},
            { name: "Sueldo"},
            { name: "Transporte"},
        ]
        }
        if(!error){
            set({ categories: data });
        }
    },
    
}))