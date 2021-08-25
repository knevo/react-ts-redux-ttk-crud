import { FC } from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import styled from 'styled-components'
import { createBrowserHistory } from 'history'
import { AppHeader } from './cmps/AppHeader'
import { Home } from './pages/Home'
import { ROUTE } from './route.const'
import { headerHeight } from './styles/globals'
import { ContactDetails } from './pages/ContactDetails'
const StyledContainer = styled.main`
max-width: 450px;
min-width: 300px;
margin: 0 auto;
padding-top: ${headerHeight}px;
`
const history = createBrowserHistory()

export const App: FC = () => {

  return (
    <Router history={history}>
      <AppHeader />
      <StyledContainer>
        <Switch>
          <Route path={ROUTE.contactDetails} component={ContactDetails} />
          <Route path={ROUTE.home} component={Home} />
        </Switch>
      </StyledContainer>
    </Router>
  )
}

