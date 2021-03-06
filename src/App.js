import {
  Routes,
  Route,

} from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { autoLogin } from './redux/action/user.action'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignInUp from './page/signInUp'
import VerifyAccount from './page/verifyAccount'
import CompanyProfile from './page/CompanyProfile'
import Home from './page/Home'
import Company from './page/Company'
import Career from './page/CompanyCareer'
import './App.css'
import AuthRoute from './utils/AuthRoute'
import ManagePosition from './page/ManagePosition'
import CompanyManagement from './page/CompanyManagement'
import NotFound from './component/NotFound'
import InfoUser from './page/InfoUser'
import UserPersonal from './page/UserPersonal'
import UserAccount from './page/UserAccount'
import UserApplication from './page/UserApplication'
import UserTable from './page/UserTable'
import CompanyTablePosition from './page/CompanyTablePosition'
import CompanyTableJobApp from './page/CompanyTableJobApp'
import DragAndDrop from './component/DragAndDrop'

function App() {
  const dispatch = useDispatch()

  const alreadyLogin = () => {
    if (window.localStorage.getItem('userToken')) {
      dispatch(autoLogin())
    }
  }

  useEffect(() => {
    alreadyLogin()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Routes>
      <Route exact path="/" element={<AuthRoute page={Home} drawer />} />
      <Route exact path="/login" element={<SignInUp />} />
      <Route exact path="/login/verify-account" element={<VerifyAccount />} />

      <Route
        exact
        path="/candidatePersonal"
        element={<AuthRoute loginRequired footer drawer page={UserPersonal} />}
      />
      <Route
        exact
        path="/candidateAccount"
        element={<AuthRoute loginRequired drawer page={UserAccount} />}
      />

      <Route
        exact
        path="/candidateTable"
        element={<AuthRoute loginRequired drawer page={UserTable} />}
      />
      <Route
        exact
        path="/application/:id"
        element={<AuthRoute loginRequired drawer page={UserApplication} />}
      />
      <Route
        exact
        path="/companyAccount"
        element={<AuthRoute loginRequired drawer page={UserAccount} />}
      />
      <Route
        exact
        path="/announcement"
        element={<AuthRoute loginRequired drawer page={CompanyTablePosition} />}
      />
      <Route
        exact
        path="/JobApplication"
        element={<AuthRoute loginRequired drawer page={CompanyTableJobApp} />}
      />
      <Route
        exact
        path="/managePosition"
        element={<AuthRoute loginRequired drawer page={ManagePosition} />}

      />
      <Route exact path="/companyPersonal" element={<AuthRoute loginRequired drawer page={CompanyProfile} />} />
      <Route
        exact
        path="/managePosition"
        element={<AuthRoute loginRequired drawer page={ManagePosition} />}

      />
      <Route
        exact
        path="/company/:id"
        element={(
          <AuthRoute loginRequired page={Company} drawer />
        )}
      />
      <Route exact path="/companyPersonal" element={<AuthRoute loginRequired drawer page={CompanyProfile} footer />} />
      <Route exact path="/InfoUser" element={<AuthRoute loginRequired drawer page={InfoUser} footer />} />
      <Route exact path="/DragAndDrop" element={<AuthRoute loginRequired drawer page={DragAndDrop} footer />} />
      <Route exact path="/companyCareer/:id" element={<AuthRoute loginRequired drawer page={Career} footer />} />
      <Route
        exact
        path="/CompanyManagement"
        element={(
          <AuthRoute page={CompanyManagement} loginRequired drawer={false} />
)}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
