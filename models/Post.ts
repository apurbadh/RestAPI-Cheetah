import { Model, dbTypes, specialTypes } from "@apurbadh/cheetah/database";

class Post extends Model{
  
    setValues(){
        return {
            "id" : [dbTypes.Integer, specialTypes.primaryKey],
            "title" : [dbTypes.String],
            "description" : [dbTypes.Text]
        }
    }
    
}
const post = new Post("post")
post.migrate()
export default post;

