import type { FC } from 'react';
import { Navigate } from 'react-router-dom';
import Routes from './routeConfig';


interface RouterProps {
    component?: any;
    authenticated?: any;
}

const PrivateRoute: FC<RouterProps> = (props) => {
    const { component: Component, ...rest } = props;
    // const { isAuthenticated } = useAuthStore();
    const isAuthenticated=true;
    return isAuthenticated?(
        <Component {...rest}/>
    ):(
        <Navigate to={Routes.DASHBOARD} replace />
    )
}

export default PrivateRoute