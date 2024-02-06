import { initialServer } from "./app";
import dotenv from 'dotenv';
dotenv.config();


async function init() {
    const app=await initialServer();
     app.listen(8000,()=>{
        console.log('srver is running on 8000');
    })
    
}

init();