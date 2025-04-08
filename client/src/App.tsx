
import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import { AUTH_ROUTE } from './pages/auth/authRoute'
import Login from './pages/login/Login'

function App() {

  return (
    <Box w={'full'} h={'100vh'} bg={'#121A21'}>
      <Routes>
        {/** Login route */}
        <Route index path={AUTH_ROUTE.LOGIN} element={<Login/>}/>
      </Routes>
    </Box>
  )
}

export default App
