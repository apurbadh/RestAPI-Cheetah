import { extendedURL, url } from "@apurbadh/cheetah";
import HomeController from './controllers/HomeController';
import PostsController from './controllers/PostsController';
import PostController from './controllers/PostController';

url("/", HomeController)
url('/post', PostsController)
extendedURL('/post/{id}', PostController)