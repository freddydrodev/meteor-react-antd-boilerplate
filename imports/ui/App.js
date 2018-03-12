import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import P from './components/P'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'
import PageWrapper from './pages/PageWrapper'

export default class App extends Component {
    render() {
        return (
            <PageWrapper>
                <Switch>
                    <Route path="/page-one" component={PageOne} />
                    <Route path="/page-two" component={PageTwo} />
                    <Route path="/" exact component={P} />
                    <Route render={() => <h1>404 Page Not Found</h1>} />
                </Switch>
            </PageWrapper>
        )
    }
}
