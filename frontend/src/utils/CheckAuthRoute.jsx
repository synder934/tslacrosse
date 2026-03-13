import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CheckAuthRoute = ({ children, check, onCheckFail = null }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const verifyAuth = async () => {
            try {
                const result = await check();
                setIsAuthenticated(result);
                if (!result && onCheckFail) {
                    onCheckFail();
                }
            } catch (error) {
                console.error('Auth check failed:', error);
                setIsAuthenticated(false);
                if (onCheckFail) onCheckFail();
            }
        };

        verifyAuth();
    }, [check, onCheckFail]);

    if (isAuthenticated === null) return <div>Loading...</div>;
    if (!isAuthenticated) return <Navigate to="/login" replace />;

    return children;
};

export const createProtectedRoute = (check, onCheckFail) => {
    return (component) => (
        <CheckAuthRoute check={check} onCheckFail={onCheckFail}>
            {component}
        </CheckAuthRoute>
    );
};

export default CheckAuthRoute;