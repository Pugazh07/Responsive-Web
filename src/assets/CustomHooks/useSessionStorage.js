import {useState} from "react";

export const useSessionStorage=(initailValue)=>{
    const getValue=()=>{
        return sessionStorage.getItem('showNotification') ? JSON.parse(sessionStorage.getItem('showNotification')) : initailValue;
    }

    const [value, setValue]=useState(()=>getValue())
    return[value, setValue]
}