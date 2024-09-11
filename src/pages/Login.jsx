import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import logo from '../assets/logo.png';
import googleLogo from '../assets/google.png';

const clientId = '676115310866-85lrotcf4ha99kql33rjqu5ak5tj02pi.apps.googleusercontent.com';

const Login = () => {
  const handleSuccess = async (response) => {
    const { tokenId } = response;
    try {
      const res = await axios.post('/api/auth/google', { idToken: tokenId });
      const { token } = res.data;
      localStorage.setItem('authToken', token);
      // Redirect or handle successful login logic
    } catch (error) {
      console.error('Error authenticating with Google:', error);
    }
  };

  const handleError = (error) => {
    console.error('Google Sign-In Error:', error);
  };

  const handleSignIn = () => {
    // Add sign-in logic or navigation
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Navbar */}
      <nav className="bg-black py-2 overflow-hidden">
        <div className="container mx-auto flex justify-center">
          <img src={logo} alt="Logo" className="h-12" />
        </div>
      </nav>

      <div className="border-t border-white border-opacity-30"></div>

      {/* Login Form */}
      <main className="flex-grow flex items-center justify-center bg-black">
        <div className="bg-gray-950 px-14 py-9 rounded-md shadow-lg text-center border border-white border-opacity-30">
          <h2 className="text-white text-2xl mb-6 font-semibold">Create a new account</h2>

          <GoogleLogin
            clientId={clientId}
            buttonText="Sign Up with Google"
            onSuccess={handleSuccess}
            onError={handleError}
            render={renderProps => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="bg-gray-950 text-white w-full px-32 py-3 rounded-md flex items-center justify-center mb-6 border border-white border-opacity-20"
              >
                <img
                  src={googleLogo}
                  alt="Google"
                  className="w-6 h-6 mr-3"
                />
                Sign Up with Google
              </button>
            )}
          />

          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-1.5 rounded-md mt-4 mb-8">
            Create an Account
          </button>
          <p className="text-gray-400">
            Already have an account?{' '}
            <button onClick={handleSignIn} className="text-white">Sign In</button>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-opacity-70 py-1 flex flex-col items-center border-t border-white border-opacity-30">
        <div className="text-center mb-2">
          <p>&copy; {new Date().getFullYear()} CHAITHANYA K J. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
