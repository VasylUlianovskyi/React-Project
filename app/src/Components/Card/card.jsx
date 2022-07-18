import { Component } from "react";

export default class Card extends Component{
    constructor(props) {
        super(props);

        this.product = props.product;
        this.state = {

        };
    }

    render () {
      console.log(this.props);

        const { images, rating, price,title, category } = this.product;

    return (
        <div className="os-product-card">
            <div className="os-product-img" style={{ "backgroundImage": `url(${images[0]})`}}></div>
            <div className="os-product-content">
                <div className="os-product-price-wrapper">
                    <div className="os-product-rating">
                        <span>{rating}</span>
                        <i className="bi bi-star"></i>
                    </div>
                    <div className="os-product-price">{price}</div>
                </div>
                <h5 className="os-product-title">{title}</h5>
                <p className="os-product-description">{category}</p>
            </div>
            <footer className="os-product-footer">
                <button className="os-btn-primary" data-element="addToCartBtn">
                    Add To Cart
                </button>
            </footer>
        </div>
    );
    }
}
