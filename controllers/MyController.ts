
import {Controller, Request, Response} from "../cheetah-api"

export default class MyController extends Controller{

    get(req : Request, res : Response){
        console.log(this.pathParameters)
    }

    post(req : Request, res : Response){
        
    }

    put(req : Request, res : Response){

    }

    delete(req : Request, res : Response){

    }

    patch(req : Request, res : Response){

    }

}
