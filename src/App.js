import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./Component/Home/Home";
import SignUp from './Component/Register/SignUp';
import SignIn from './Component/Register/SignIn';
import Dashboard from './Component/Dashboard/Dashboard';
import HouseOwner from './Component/Dashboard/HouseOwner';
import HouseRenter from './Component/Dashboard/HouseRenter';


function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Home></Home> },
    { path: "home", element: <Home></Home> },
    // {path:"explorePlace/:id" , element: <ExplorePlace></ExplorePlace>},
    // {path:"bookingTopPlaces" , element: <BookingTopPlaces></BookingTopPlaces>},
    // {path:"contact" , element: <Contact></Contact>},
    // {path:"services" , element: <Services></Services>},
    // {path:"career" , element: <Career></Career>},
    // {path:"about" , element: <About></About>},
    // { path: "*", element: <NotFound></NotFound> },
    // { path: "termsCondition", element: <TermsCondition></TermsCondition> },
    // { path: "privacyPolicy", element: <PrivacyPolicy></PrivacyPolicy> },
    // {path:"terms" , element: <TermsOfUse></TermsOfUse>},
    // {path:"services" , element: <Services></Services>},
    {path:"signUp" , element: <SignUp></SignUp>},
    {path:"signIn" , element: <SignIn></SignIn>},
    // {path:"registration" , element: <Registration></Registration>},
    {
      path:"dashboard" , 
      element: <Dashboard></Dashboard>,
      children:[
        {path:"/dashboard/houseOwner" , element: <HouseOwner></HouseOwner>},
        {path:"/dashboard/houseRenter" , element: <HouseRenter></HouseRenter>},
      ]
    },
  ])



  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
