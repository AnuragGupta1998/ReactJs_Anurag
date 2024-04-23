import conf from '../conf/conf.js'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);

        this.bucket = new Storage(this.client);
    }

 //databases services of appwrite.........................................................................................................

    //createPost method    creating document in database............................
    async createPost({ title, slug, content, featuredImage, status, userId }) {

        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,  //using as like unique ID
                {
                    //all attribute that we defined inside database collection
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    //updatePost method........................................
    async updatePost(slug, { title, content, featuredImage, status }) {  //slug using to identify which post will uodate
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId, //database id
                conf.appwriteCollectionId, //coolection id
                slug, //using as id
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )

        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error)

        }
    }

    //delete Post............................................
    async deletePost(slug) {   //using slug as id to delete

        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId, //database id
                conf.appwriteCollectionId, //coolection id
                slug //document id
            )
            return true;

        }
        catch (error) {
            console.log("Appwrite service :: deletePost :: error", error)
            return false;
        }
    }

    //get Post (particular one post)...............................

    async getPost(slug) {      //using slug as id to getPost
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId, //database id
                conf.appwriteCollectionId, //coolection id
                slug //document id
            )

        }
        catch (error) {
            console.log("Appwrite service :: getPost /one Post :: error", error);
            return false
        }
    }

    //get Posts (all posts) using Query............................................
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,  //database id
                conf.appwriteCollectionId, //collection id
                queries
            )
        }
        catch (error) {
            console.log(" Appwrite service :: getPosts / all Post :: error ", error)
            return false;
        }
    }


 //file upload services (storage service of appwrite).............................................................................................

    //file create service upload file...........
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }
        catch (error) {
            console.log("appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    //delete file..................
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        }
        catch (error) {
            console.log("appwrite service :: deleteFile :: error", error)
            return false
        }
    }

    //getFile preview
    getFilePreview(fileId) {
        return this.databases.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}




//object of Service
const service = new Service();

export default service;
