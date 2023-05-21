import { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const currentLocation = useLocation()

    if (loading) return <div className='min-w-full min-h-screen flex items-center justify-center'><img className='w-20' src="/images/loading.gif" alt="Loader image" /></div>
    if (user) return children
    


    return (
        <Navigate to="/login" state={{ from: currentLocation }} replace />
    )
}

export default Private