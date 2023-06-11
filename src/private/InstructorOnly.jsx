import { Navigate, useLocation } from 'react-router-dom';
import { useAuthGlobally } from '../context/AuthProvider';
import useAuthorization from '../hook/useAuthorization';



const InstructorOnly = ({children}) => {
    const {loading, user} = useAuthGlobally()
    const {isLoading, role} = useAuthorization()
    const location = useLocation();
    if(loading || isLoading){
        return 
    }
    
    if(user.email && role === "instructor"){
        return children;
    }
    return <Navigate state={{from: location}} to="/" replace/>;
};

export default InstructorOnly;