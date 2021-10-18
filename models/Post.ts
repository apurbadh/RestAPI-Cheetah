import { Model, dbTypes, specialTypes } from "@apurbadh/cheetah/database";

class Post extends Model{
  
    setValues(){
        return {

        }
    }
    
}
const post = new Post("post")
post.migrate()
export default post;

