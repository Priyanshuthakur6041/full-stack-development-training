import { MongoClient } from "mongodb";

let isDbConnected= null;
const CLUSTER_URL = "mongodb+srv://ptthakurthakur9991:V2KJlTw5XbxB2WOi@cluster0.f5shcwa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(CLUSTER_URL);

async function connectToDatabase(dbName) {

   if (isDbConnected == null){
    try{
    //await is keyword for waiting time
    await client.connect();
    isDbConnected = client.db(dbName);
    console.log("Connected to the database")}
    catch(e){
        console.log(`database connection error: ${e.message}`)
    }

   }else{
    console.log("database already connected");
   }
    return isDbConnected;
}
export default connectToDatabase;