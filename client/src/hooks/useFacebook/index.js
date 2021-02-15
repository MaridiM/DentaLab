import { useState } from 'react'
import 'utils/facebookSDK'

export const useFacebook = () => {
    const [facebookData, setFacebookData] = useState({})

    function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
        if (response.status === 'connected') {   // Logged into your webpage and Facebook.
            login();  
            console.log(window.FB.getAuthResponse())
        } else {                        
            if(response.status === 'unknown') {
                window.FB.login(function(response) {
                    console.log(response)
                }, {scope: 'public_profile,name,email,picture'})    // Not logged into your webpage or we are unable to tell.
            }
        }
    }


    function checkLoginState() {               // Called when a person is finished with the Login Button.
        window.FB.getLoginStatus(function(response) {   // See the onlogin handler
            statusChangeCallback(response);
        }, true);
    }


    window.fbAsyncInit = async () => {
        await window.FB.init({
            appId      : '462259068265305',
            cookie     : true,                                  // Enable cookies to allow the server to access the session.
            xfbml      : true,                                  // Parse social plugins on this webpage.
            version    : 'v9.0'                                 // Use this Graph API version for this call.
        });
        await window.FB.getLoginStatus(function(response) {     // Called after the JS SDK has been initialized.
            statusChangeCallback(response)                      // Returns the login status.
        });
        console.log('Initial login by facebook')
    }
    
    function login() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
        console.log('Welcome!  Fetching your information.... ');
        window.FB.api('/me', { fields: 'name,email,picture' }, function(response) {
            console.log(response);
        });
    }
      
    return { checkLoginState }

}
