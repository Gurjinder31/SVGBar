// import React from 'react'
// import {Link} from 'react-router-dom';
// import axios from 'axios';


// import style from './css/login.css'
   


// class Login extends React.Component {

//     state = {
//         listdata: [],
//     }

//     // curl --location --request POST 'https://boltageidentityserver.azurewebsites.net/connect/token' \
//     // --header 'Authorization: Basic Y2xpZW50OnNlY3JldA==' \
//     // --header 'Content-Type: application/x-www-form-urlencoded' \
//     // --data-urlencode 'grant_type=client_credentials'
    
   
//     async componentDidMount(){
        
//     //   const accessToken =  "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhCb21pS09YSTBmNHZZOVo5RlJpUkEiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE1OTkyNjk2OTUsImV4cCI6MTU5OTI3MzI5NSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMiIsImF1ZCI6IkJvbHRBZ2UuQ29uc3VtZXIuQVBJIiwiY2xpZW50X2lkIjoiY2xpZW50Iiwic2NvcGUiOlsiQm9sdEFnZS5Db25zdW1lci5BUEkiXX0.hv3--oa7r176goHK4sI2UyLf_oIxJyrz11j6-iq10N6390wsMOybZ2zh4rJhCnuFeXO7ZE1I3FQPebBBi7FrD0IVnc94Ukl49f52AhJTlC68hArnBNND8FbcVATCYGfg_2zZUcpxdCcLRqzl8Kc3Xl7FsD7clzfPFE5mkyCw-MeNwAPCYlYf9GiSpiOpaXqKDb0XvOk9J7QTc3uby48BBoUXmAx3z_wrWNRxWn54ovWGvaylFzcgiyeNi8CWaGThd58J4I2XubIHZtvaSi8VlUKE22B9-ZCciCWT-kS8-Dq3nzVukQutn_paG5qVh_gBtYuPT7T6TMlvHMrogwGLdg";  
//         const response = await axios({
//             method: 'post',
//             auth: {username:'client',        password:'secret'},
//             url: 'https://boltageidentityserver.azurewebsites.net/connect/token',
//             headers: {'Content-Type':'application/x-www-form-urlencoded'}, 
//             data: "grant_type=client_credentials", // This is the body part
            
//           });

//         this.setState({listdata: response})
//         console.log(response);

//     }
      
    
//     render(){
//     return (
//         <div  className="login-container">
            
//         <form  className="form-container">
//             <div className="login-top">
//                 <h2>Get started with your account ⬇</h2>
//                 <p>Enhance your experience with us and we will get your work done once we know how to done 😁</p>
//             </div>

//             <div className="login-middle">
//                 <label>Email</label>
//                 <input type="email" placeholder="Email" required/>

    

//                 <label>Password</label><span>show</span>
//                 <input type="password" placeholder="passweord" required />
                
//             </div>

//                 <ul className="list-container">
//                     <li>One lower case character</li>
//                     <li>One upper case character</li>
//                     <li>One number</li>
//                     <li>One special character</li>
//                     <li>One 8 character minimum</li>
//                 </ul>

//             <div className="form-bottom">
//               <button className="btn btn-light" type="button">Get started</button>
//               <p>By clicking get started button, you are creating Boltage account, and you are agree to our <Link to="/terms">Terms, Data Policy and Cookies Policy.</Link></p>
//             </div>
           
//         </form>

            
//         </div>
//     )
//     }
// }

// export default Login;
