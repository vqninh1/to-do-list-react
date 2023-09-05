import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    return (
        <div>
            <ChildComponent textInfo={['This is child component']}/>
        </div>
    )
} 

export default ParentComponent