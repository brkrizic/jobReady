import { serialize } from "v8";
import { cvType } from "../types/cvType";



export function saveToLocalStorage(key: string, cvVal: cvType ){
    try {
        const serialized = JSON.stringify(cvVal);
        if(cvVal.header.fullname === ''){
            alert("Fullname is required!");
        }

        localStorage.setItem(key, serialized);
        alert("Saved!");
    } catch (error) {
        console.error("Error saving to localStorage", error);
    }
}

export function loadFromLocalStorage<T>(key: string): T | null {
  try {
    const serialized = localStorage.getItem(key);
    return serialized ? JSON.parse(serialized) as T : null;
  } catch (error) {
    console.error("Error loading from localStorage:", error);
    return null;
  }
}