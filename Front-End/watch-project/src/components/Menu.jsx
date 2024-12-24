function Menu() {
    return (
        <header>

            <ul className="Logo">
                <li><a href="" title="Logo"><img src="/images/G-shock logo.png" alt="" /></a></li>
            </ul>

            <nav>

                <ul className="Menus">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Contact</a></li>

                    <ul className="buttons">
                    <li><a href=""><button className="button button-1">Login</button></a></li>
                    <li><a href=""><button className="button button-2">Sign Up</button></a></li>
                    </ul>

                </ul>
            </nav>
        </header>
    );
}

export default Menu; 