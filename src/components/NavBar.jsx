export default function NavBar({icon}) {
    return (
        <div className="NavBar">
            <h3 className="NavUser">Hello, username</h3>
            <h2 className="NavTitle">Groceries App &#x1F34E;</h2>
            <img className="NavCart" src={icon} alt=""/>
        </div>
    )
}