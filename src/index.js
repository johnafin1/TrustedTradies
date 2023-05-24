import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import Root from "./routes/root";
import Home from "./routes/home";
import ProfessionalHome from "./routes/professionalhome";
import ProfessionalProfile from "./routes/professionalprofile";
import ProfessionalStats from "./routes/professionalstats";
import ProfessionalHistory from "./routes/professionalhistory";
import ProfessionalReviews from "./routes/professionalreviews";
import ProfessionalInbox from "./routes/professionalinbox";
import ProfessionalSupport from "./routes/professionalsupport";
import MemberSignup from "./routes/membersignup";
import ProfessionalSignup from "./routes/professionalsignup";
import Login from "./routes/login";
import Search from "./routes/search";
import Results from "./routes/results";
import UserPanel from "./routes/userpanel";
import UserProfile from "./routes/userprofile";
import UserServices from "./routes/userservices";
import UserMembership from "./routes/usermembership";
import UserPaymentinfo from "./routes/userpaymentinfo";
import UserSupport from "./routes/usersupport";
import ProfessionalMembership from "./routes/professionalmembership";
// ----
// Firebase Setup
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebaseConfigObj from "./firebaseConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebaseConfigObj;

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const analytics = firebase.analytics(app);

// ----

// export const firebase = require('firebase');
// const firebaseui = require('firebaseui');
// export const ui = new firebaseui.auth.AuthUI(firebase.auth());
// export const uiConfig = {
//   callbacks: {
//     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//       // User successfully signed in.
//       // Return type determines whether we continue the redirect automatically
//       // or whether we leave that to developer to handle.
//       return true;
//     },
//     uiShown: function() {
//       // The widget is rendered.
//       // Hide the loader.
//       document.getElementById('loader').style.display = 'none';
//     }
//   },
//   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//   signInFlow: 'popup',
//   signInSuccessUrl: '<url-to-redirect-to-on-success>',
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//   ],
//   // Terms of service url.
//   tosUrl: '<your-tos-url>',
//   // Privacy policy url.
//   privacyPolicyUrl: '<your-privacy-policy-url>'
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "professionalhome",
        element: <ProfessionalHome />,
      },
      {
        path: "signup/member",
        element: <MemberSignup></MemberSignup>,
      },
      {
        path: "signup/professional",
        element: <ProfessionalSignup></ProfessionalSignup>,
      },
      {
        path: "professionalprofile",
        element: <ProfessionalProfile />,
      },
      {
        path: "professionalstats",
        element: <ProfessionalStats />,
      },
      {
        path: "professionalhistory",
        element: <ProfessionalHistory />,
      },
      {
        path: "professionalreviews",
        element: <ProfessionalReviews />,
      },
      {
        path: "professionalinbox",
        element: <ProfessionalInbox />,
      },
      {
        path: "professionalsupport",
        element: <ProfessionalSupport />,
      },
      {
        path: "professionalmembership",
        element: <ProfessionalMembership />,
      },
      {
        path: "search",
        element: <Search></Search>,
      },
      {
        path: "results",
        element: <Results></Results>,
      },
      {
        path: "userprofile",
        element: <UserProfile/>,
      },
      {
        path: "userservices",
        element: <UserServices/>,
      },
      {
        path: "usermembership",
        element: <UserMembership/>,
      },
      {
        path: "userpayment",
        element: <UserPaymentinfo/>,
      },
      {
        path: "usersupport",
        element: <UserSupport/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
