import conf from '../conf/conf.js'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client);

        this.bucket = new Storage(this.client);
    }

    //createPost method......................................
    async createPost({ title, slug, content, featuredImage, status, userId }) {

        try {

            return this.databases.createDocument(
                conf.appwriteBucketId,
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
    //slug using as unique id to identify which post will update.
    async updatePost(slug, { title, content, featuredImage, status }) {  //slug using to identify which post will uodate
        try {
            return await this.databases.updateDocument(
                conf.appwriteBucketId, //database id
                conf.appwriteCollectionId, //coolection id
                slug, //document id
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
    async deletePost(slug) {

        try {
            await this.databases.deleteDocument(
                conf.appwriteBucketId, //database id
                conf.appwriteCollectionId, //coolection id
                slug //document id
            )
            return true;

        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error)
            return false;
        }
    }

    //get Post (particular one post)...............................
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteBucketId, //database id
                conf.appwriteCollectionId, //coolection id
                slug //document id
            )

        } catch (error) {
            console.log("Appwrite service :: getPost /one Post :: error", error);
            return false
        }
    }

    //get Posts (all posts)............................................
    async getPosts( queries = [Query.equal("status", "active")] ) { 
        try {
            return await this.databases.listDocuments(
                conf.appwriteBucketId,  //database id
                conf.appwriteCollectionId, //collection id
                queries
            )
        } 
        catch (error) {
            console.log(" Appwrite service :: getPosts / all Post :: error ", error)
            return false;
        }
    }

}

//object of Service
const service = new Service();

export default service;
