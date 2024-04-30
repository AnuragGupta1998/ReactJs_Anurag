import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";


export class AuthService {

    client = new Client();
    account;
    constructor() {
        //setting up client and account.....
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    //creating account by appwrite createAccount method .............................
    //Signup
    async createAccount({ email, password, name }) {

        try {

            const userAccount = await this.account.create(ID.unique(), email, password, name);

            //if userAccount created then login the user
            if (userAccount) {

                //calling login method "if userAccount created successfullythen login the user into his account"
                return this.login({ email, password })
            }
            else {
                return userAccount;
            }
        }
        catch (error) {
            throw error
        }
    }
    //login the user if they successfukky created theit account....
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        }
        catch (error) {
            console.log("appwrite service error in login", error)
        }
    }

    //getCurrentUser who is logined......
    async getCurrentUser() {
        try {
            return await this.account.get();

        } catch (error) {
            console.log("Appwrite error in getCurrentUser", error)
        }
        return null;
    }

    //logout the user.........
    async logout() {
        try {
            await this.account.deleteSessions()

        } catch (error) {
            console.log('appwrite service :: logout :: error', error)

        }
    }
}

//creating object of class...........
const authService = new AuthService()

export default authService;