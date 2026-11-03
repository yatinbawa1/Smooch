import { BrowserRouter, Route } from 'react-router-dom'
import Login from '../Components/Login/Login'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Route path='/login' element={<Login />} />
    </BrowserRouter>
  )
}

export default AppRouter