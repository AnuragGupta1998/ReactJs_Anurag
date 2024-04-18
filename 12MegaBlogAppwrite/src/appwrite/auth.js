import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";


export class AuthService{

    client=new Client();
    account;
    constructor(){
        //setting client and account.....
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account=new Account(this.client);
    }

    //creating account.......
    async creatAccount({email,password,name}){

        try {

           const userAccount=await this.account.create(ID.unique(),email,password,name);

           if(userAccount){
            //calling login method "if userAccount created successfullythen login the user into his account"
            return this.login({email,password})
           }
           else {
              return userAccount;
            }

            
        }
        catch (error) {
            throw error   
        }



    }













}



//creating object of class...........
const authService=new AuthService()

export default authService;