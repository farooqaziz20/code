import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { app } from ".././config/firebase";





const db = app.firestore();





export default function EditProducts() {
    const {id}=useParams();
    console.log(id)





    useEffect(()=>{
        const fetchData=async()=>{
            const res=await db.collection("noman").doc(id).get();
        console.log(res.data())
        }
        fetchData();
    },[])


    
    return (
        <div>
            <div style={{marginLeft:"200px",marginTop:"200px"}}>
            <h1>Checking it is working or not</h1>
            </div>
        </div>
    )
}
