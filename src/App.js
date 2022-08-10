import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "./components/Header";
import Login from "./components/Login";
import About from "./components/About";
import Menu from "./components/Menu";

export default function App() {
  return (
    <Container className="app">
      <Routes>
        <Route exact path="/" element={<Header />}></Route>
        <Route exact path="/menu" element={<Menu />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </Container>
  );
}



// import React, { useState, useEffect } from "react";
// import fire from './firebase/config'
// import Header from "./components/Header";
// import Login from './components/Login'


// function App() {

//   const [user, setUser] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [emailError, setEmailError] = useState('')
//   const [passwordError, setPasswordError] = useState('')
//   const [hasAccount, setHasAccount] = useState(false)

//   const clearInputs = () => {
//     setEmail('')
//     setPassword('')
//   }

//   const clearErrors = () => {
//     setEmailError('')
//     setPasswordError('')
//   }


//   const handleLogin = () => {
//     clearErrors()
//     fire
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .catch((err) => {
//         switch(err.code){
//           case "auth/invalid-email":
//           case "auth/user-disabled":
//           case "auth/user-not-found":
//             setEmailError(err.message)
//             break
//           case "auth/wrong-password":
//             setPasswordError(err.message)
//             break
//         }
//       })
//   }

//   const handleSignup = () => {
//     clearErrors()
//     fire
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
//     .catch((err) => {
//       switch (err.code) {
//         case "auth/email-already-in-use":
//         case "auth/invalid-email":
//           setEmailError(err.message)
//           break
//         case "auth/weak-password":
//           setPasswordError(err.message)
//           break
//       }
//     })
//   }

//   const handleLogout = () => {
//     fire.auth().signOut()
//   }

//   const authListener = () => {
//     fire.auth().onAuthStateChanged(user => {
//       if(user) {
//         clearInputs()
//         setUser(user)
//       } else {
//         setUser('')
//       }
      
//     })
//   }

//   useEffect(() => {
//     authListener()
//   }, [])


 
//     return (
//     <div>
//     <div className="App">
//       {user ? (
//         <Header handleLogout={handleLogout} />
//       ) : (
//         <Login 
//      email={email}
//      setEmail={setEmail}
//      password={password}
//      setPassword={setPassword}
//      handleLogin={handleLogin}
//      handleSignup={handleSignup}
//      hasAccount={hasAccount}
//      setHasAccount={setHasAccount}
//      emailError={emailError}
//      passwordError={passwordError}
//      />
//       )}
     
    
//     </div>
//     </div>
 
//   );
// }

// export default App;


