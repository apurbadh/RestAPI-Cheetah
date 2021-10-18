import { Controller, Request, Response, render, sendJSON } from '@apurbadh/cheetah';
import Post from "../models/Post"

export default class PostsController extends Controller{

    get(req : Request, res : Response){
        let posts : Object = Post.getAll({});
        sendJSON(res, posts)
    }

    post(req : Request, res : Response){
        Post.create(this.requestData)
    }

    put(req : Request, res : Response){

    }

    delete(req : Request, res : Response){

    }

    patch(req : Request, res : Response){

    }
    
}

