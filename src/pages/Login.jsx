import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import{jwtDecode } from 'jwt-decode';
import logo from '../assets/logo.png';  // Path to your logo
import googleLogo from '../assets/google.png';  // Path to your Google logo
import { useNavigate } from 'react-router-dom';

const clientId = '676115310866-b5d5n72apsp5kcvbc12112ai53dvqomv.apps.googleusercontent.com';  // Your clientId

const Login = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleSuccess = (response) => {
    const { credential } = response;
    try {
      const decoded = jwtDecode(credential);
      
      // Store user information in localStorage
      localStorage.setItem('authToken', credential);
      localStorage.setItem('user', JSON.stringify(decoded));

      console.log('Login Successful', decoded);
      
      // Navigate to the Onebox page after successful login
      navigate('/onebox');
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  };

  const handleError = (error) => {
    console.error('Google Sign-In Error:', error);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <nav className="bg-black py-2">
        <div className="container mx-auto flex justify-center">
          <img src={logo} alt="Logo" className="h-12" />
        </div>
      </nav>

      <div className="border-t border-white border-opacity-30"></div>

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
                <img src={googleLogo} alt="Google" className="w-6 h-6 mr-3" />
                Sign Up with Google
              </button>
            )}
          />
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-1.5 rounded-md mt-4 mb-8">
            Create an Account
          </button>
          <p className="text-gray-400">
            Already have an account?{' '}
            <span className="text-white cursor-pointer">Sign In</span>
          </p>
        </div>
      </main>

      <footer className="bg-black text-gray-400 text-opacity-70 py-1 flex flex-col items-center border-t border-white border-opacity-30">
        <div className="text-center mb-2">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
