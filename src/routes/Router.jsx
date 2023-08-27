import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import RecipeDetail from "../pages/home/recipe/recipeDetail";
import RecipeLayout from "../layout/recipeLayout";
import SingleChef from "../pages/home/chef/singleChef";
import ChefLayout from "../layout/chefLayout";
import LogRegLayout from "../layout/logRegLayout";
import Login from "../pages/loginRegister/Login";
import Register from "../pages/loginRegister/Register";
import Terms from "../pages/loginRegister/terms";

const router = createBrowserRouter([
   

    {
        path:'/',
        element:<Main></Main>,
    },
    {
        path:'/recipeDetails',
        element:<RecipeLayout></RecipeLayout>,
        children:[
            {
                path:':id',
                element:<RecipeDetail></RecipeDetail>,
                loader: ({params}) => fetch(`http://localhost:8000/recipeDetails/${params.id}`)
            }
        ]
    },
    {
        path:'/chefinfo',
        element:<ChefLayout></ChefLayout>,
        children:[
            {
                path:':id',
                element:<SingleChef></SingleChef>,
                loader: ({params}) => fetch(`http://localhost:8000/chefinfo/${params.id}`)
            }
        ]
    },
    {
        path:'/',
        element:<LogRegLayout></LogRegLayout>,
        children:[
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'terms',
                element:<Terms></Terms>
            }
        ]
         
    }
]);
export default router;