import { connect } from 'react-redux'
import App from './App'
import { increment, decrement } from './actions'

console.log(increment)

const mapStateToProps = (state) => ({
    count: state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onInc: () => dispatch(increment),
    onDec: () => dispatch(decrement)
})

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer