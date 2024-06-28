import { useLocation } from 'react-router-dom';
import { ForgotPassword, Login, RegisterSchoolForm, ResetPassword, VerifyAccount } from '.';



export const AuthLayout = () => {
    const location = useLocation();
    
    const renderForm = () => {
        switch (location.pathname) {
            case '/signin':
                return <Login />;
            case '/register':
                return <RegisterSchoolForm />;
            case '/reset-password':
                return <ResetPassword />;
            case '/verify-account':
                return <VerifyAccount />;
            case '/forgot-password':
                return <ForgotPassword />;
            
            default:
                return <Login />; // Default to login if no match
        }
    };
    return (
        <div className="flex h-screen w-full">
            {/* Left side with background image and text */}
            <div className="hidden md:block md:w-1/2 bg-cover bg-gray-600 bg-center h-full">
                {/* Replace the URL with your actual background image */}
                <img src="https://media.licdn.com/dms/image/D5612AQEN4dV-DgLwNA/article-cover_image-shrink_600_2000/0/1690814547641?e=2147483647&v=beta&t=qU7ECD33uYKDYm0TVqj3p-Hcia9t4n_i7ztjUnATawM"
                    alt="Background" className="w-full h-full object-cover opacity-50" />
            </div>
            {/* Right side with form */}
            <div className="w-full bg-white overflow-y-auto">
                {renderForm()}
            </div >
        </div >
    );

};

