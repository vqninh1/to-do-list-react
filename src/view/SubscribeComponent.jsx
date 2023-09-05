import '../App.css'

const SubscribeComponent = () => {
    return (
        <main className="main">
            <h1 className="title">subscribe</h1>
            <h2 className="title-small">Sign in with your email address to receive news and updates</h2>
            <div className="button-group">
                <button type="submit">Firstname</button>
                <button type="submit">Lastname</button>
                <button type="submit">Email</button>
            </div>
            <button type="submit">Subscribe</button>
        </main>
    )
}

export default SubscribeComponent

