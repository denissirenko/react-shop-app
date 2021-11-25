export const Header = () => {
    return <nav className="green darken-1">
        <div className="nav-wrapper">
        <a href="https://github.com/denissirenko" className="brand-logo">React Shop</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
                <a 
                    href="https://github.com/denissirenko"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        My Repo
                </a>
            </li>
        </ul>
        </div>
    </nav>
}