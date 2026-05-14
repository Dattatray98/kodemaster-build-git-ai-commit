import dotenv from "dotenv";

dotenv.config();

export const configEnv = {
    OPEN_API_KEY : process.env.OPEN_API_KEY
};


export const ValidationConfig = ()=>{
    if (!configEnv.OPEN_API_KEY){
        console.error("Error : OPEN_API_KEY is missing in .env file");
        process.exit(1);
    }
}