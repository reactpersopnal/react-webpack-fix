import Loadable from 'react-loadable'

const LoadableBar = Loadable({
    loader: () => import('./components/Bar'),
    loading() {
        return <div>Loading...</div>
    }
})

class MyComponent extends React.Component {
    render() {
        return <LoadableBar/>
    }
}

export default MyComponent
