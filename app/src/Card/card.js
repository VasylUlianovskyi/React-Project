function Card() {
    return (
        <div className="os-product-card">
            <div className="os-product-img">
            <img src="https://content1.rozetka.com.ua/goods/images/big_tile/178060622.jpg" alt="laptop"></img>
            </div>
            <div className="os-product-content">
                <div className="os-product-price-wrapper">
                    <div className="os-product-rating">
                        <span>1.96</span>
                        <i className="bi bi-star"></i>
                    </div>
                    <div className="os-product-price">21500</div>
                </div>
                <h5 className="os-product-title">Ноутбук Acer Aspire 7 A715-41G-R9KP (NH.Q8QEU.00L) Charcoal Black</h5>
                <p className="os-product-description">laptops</p>
            </div>
            <footer className="os-product-footer">
                <button className="os-btn-primary" data-element="addToCartBtn">
                    Add To Cart
                </button>
            </footer>
        </div>
    );
}

export default Card;