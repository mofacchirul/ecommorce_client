import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()







import MainLayout from './MainLayout/MainLayout';
import Shop from './Pages/Shop/Shop';
import Login from './Provider/Login/Login';
import Woman from './Pages/Woman/Woman';
import View_detels from './Pages/Woman/View_detels/View_detels';
import Man_collection from './Pages/Man/Man_collection/Man_collection';
import Man_detels from './Pages/Man/Man_detels/Man_detels';
import Kids from './Pages/Kids/Kids/Kids';
import Kids_detels from './Pages/Kids/Kids_detels/Kids_detels';
import Singup from './Provider/Singup/Singup';
import ProviderAuth from './Provider/ProviderAuth/ProviderAuth';
import Dashbord from './MainLayout/Dashbord/Dashbord';
import Card from './Dashbord_item/Card/Card';
import Add_reciew from './Dashbord_item/Add_review/Add_review';
import Profile from './Dashbord_item/Profile/Profile';
// import UserHom from './Dashbord_item/UserHom/UserHom';
import UserHome from './Dashbord_item/UserHom/UserHom';
import ALl_user from './Dashbord_item/ALl_user/ALl_user';
import Add_Men from './MainLayout/Dashbord/Add_Men/Add_Men';
import Add_women from './MainLayout/Dashbord/Add_women/Add_women';
import Add_kids from './MainLayout/Dashbord/Add_kids/Add_kids';
import Pay from './Dashbord_item/Pay/Pay';
import PaymentHistory from './Dashbord_item/PaymentHistory/PaymentHistory';
import Add_home from './MainLayout/Dashbord/Add_home/Add_home';
import Booking from './MainLayout/Dashbord/Booking/Booking';
import ContactPage from './Pages/Contacl/Contack';
import AdminPrivat from './Private/AdminPrivat/AdminPrivat';
import Private from './Private/Privateuser/Privateuser';
// import AdminPrivat from './Private/AdminPrivat/AdminPrivat';
// import ProviderAuth from './Provider/ProviderAuth/ProviderAuth';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'/contact',
        element:<ContactPage></ContactPage>
      },
      {
        path:'/Login',
        element:<Login></Login>
      },
      {
            path:'/singup',
            element:<Singup></Singup>
      },

      //------------------------- women
      {
        path:'women',
        element: <Private><Woman></Woman> </Private>
      },
      {
        path:'/view_detels/:id',
        element:<Private> <View_detels></View_detels> </Private>,
        loader:({params})=>fetch(`https://ecommerce-server-six.vercel.app/woman/${params.id}`)
      },

    //  ------------------man_collection -----------
      {
        path:'/men',
        element:<Private> <Man_collection></Man_collection> </Private>
      },
      {
        path:'/man_detels/:id',
        element: <Private> <Man_detels></Man_detels> </Private>,
        loader: ({params})=> fetch(`https://ecommerce-server-six.vercel.app/man/${params.id}`)
      },


      //  kids 
       
      {
        path:'/kids',
        element:<Private> <Kids></Kids> </Private>
      },
      {
        path:"/kids_detels/:id",
        element:<Private> <Kids_detels></Kids_detels> </Private>,
        loader:({params})=> fetch(`https://ecommerce-server-six.vercel.app/kids/${params.id}`)
      }
    ]
  },
  {
    path:'/dashbord',
    element:<Dashbord></Dashbord>,
    children:[
      
      // user item 
      {
        path:'card',
        element:<Private> <Card>

        </Card> </Private>
      },
      {
         path:'pay',
         element:<Private> <Pay></Pay> </Private>
      },
      {
        path:'review',
        element:<Private> <Add_reciew></Add_reciew> </Private>
      },
      {
        path:'profile',
        element:<Private> <Profile></Profile> </Private>
      },
      {
        path:'home',
        element:<Private> <UserHome></UserHome> </Private>
      },
      {
   path:'payment',
   element: <Private> <PaymentHistory></PaymentHistory> </Private> 
      },




      // admin USer COmponets
      {
        path:'all-users',
        element:
          <AdminPrivat>
            <ALl_user></ALl_user>
          </AdminPrivat>
       
      },
      {
        path:'men',
        element: <AdminPrivat><Add_Men></Add_Men></AdminPrivat>
      },
      {
        path:'women',
        element:<AdminPrivat><Add_women></Add_women></AdminPrivat>

      },
      {
        path:'kids',

        element:<AdminPrivat><Add_kids></Add_kids></AdminPrivat>
      },
      {
        path:'adminhome',
        element: <AdminPrivat>
                 <Add_home></Add_home>
        </AdminPrivat>  
      },{
        path:'booking',
        element:<AdminPrivat>
          <Booking></Booking>
        </AdminPrivat>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
  <ProviderAuth>
  <RouterProvider router={router} />
  </ProviderAuth>
    </QueryClientProvider>
  </StrictMode>,
);
