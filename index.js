import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppContainer from './AppContainer'
import reducer from './reducer'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
)