import { Navigate, useParams } from 'react-router-dom'

// Redirect for retired routes; `to` may be a function of the route params.
export default function RedirectTo({ to }) {
  const params = useParams()
  return <Navigate to={typeof to === 'function' ? to(params) : to} replace />
}
