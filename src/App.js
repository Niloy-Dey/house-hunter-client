import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./Component/Home/Home";
import SignUp from './Component/Register/SignUp';
import SignIn from './Component/Register/SignIn';
import Dashboard from './Component/Dashboard/Dashboard';


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
      // children:[
    //     /* Profile router for all user, admin, hotel owner etc */
    //     {path:"/dashboard" , element: <Profile></Profile>},
    //     {path:"/dashboard/profile" , element: <Profile></Profile>},


    //     /* here routes for Admin */
    //     {path:"/dashboard/AllUser" , element: <AllUser></AllUser>},
    //     {path:"/dashboard/AllHotel" , element: <AllHotel></AllHotel>},
    //     {path:"/dashboard/AllHotelBookingDetails" , element: <AllHotelBookingDetails></AllHotelBookingDetails>},
    //     {path:"/dashboard/AllReview" , element: <AllReview></AllReview>},


    //     /* here routes for Hotel owner */
    //     {path:"/dashboard/addHotel" , element: <AddHotel></AddHotel>},


    //     /* here routes for normal user or tourist */
    //     {path:"/dashboard/BookedHotel" , element: <BookedHotel></BookedHotel>},
    //     {path:"/dashboard/specialTours" , element: <SpecialTours></SpecialTours>},

    //   ]
    },
  ])



  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
