import React from "react";
import {useState} from 'react';
import * as Yup from "yup";
import orderSchema from "../validations/OrderSchema";
/* 


*/
const Note = ({orderNote}) => {
    const [note, setNote] = useState('');
    orderNote(note);
    const [formState,setFormState] = useState({isim:"" });
    const [formErrors,setformErrors] = useState({isim:""})
    const inputChange= e=>{
        setNote(e.target.value)
        const {name, value}=e.target;
        Yup.reach(orderSchema,name)
            .validate(value)
            .then(valid=>{setformErrors({...formErrors,[name]:""});})
            .catch(err=>{setformErrors({...formErrors,[name]:err.errors[0]});})
        setFormState({...formState,[name]:value}) 
    }
    return (
        <div className="ordernote">
            <h4>Sipariş Notu</h4>
            <input name="name" type="text" id="name-input" placeholder="Lütfen isminizi giriniz." onChange={(e)=>inputChange(e)}></input>
            <input type="text" name="note" id="special-text" placeholder="Siparişine eklemek istediğin bir not var mı?"></input>
            <hr></hr>
        </div>
    )
};
export default Note;