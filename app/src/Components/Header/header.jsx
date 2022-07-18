const Header = () => {

    return (
        <header className="os-header">
            <span className="os-logo-text">Online Store</span>
            <button className="cart os-btn-primary" data-element="cartBtn">
                <i className="bi bi-cart">
                    CART
                </i>
            </button>
        </header>
    )
}

export default Header;