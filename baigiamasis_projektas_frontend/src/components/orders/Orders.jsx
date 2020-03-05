import React, {Component} from "react";

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {buyerName: '', buyerSurname:'', buyerAddress:'', productId:'',
        productQty:'', OrderSum:''};

        this.handleBuyerName = this.handleBuyerName.bind(this);
        this.handleBuyerSurname = this.handleBuyerSurname.bind(this);
        this.handleBuyerAddress = this.handleBuyerAddress.bind(this);
        this.handleProductId = this.handleProductId.bind(this);
        this.handleProductQty = this.handleProductQty.bind(this);
        this.handleOrderSum = this.handleOrderSum.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleBuyerName(event) {
        this.setState({buyerName: event.target.value});
    }

    handleBuyerSurname(event) {
        this.setState({handleBuyerSurname: event.target.value});
    }

    handleBuyerAddress(event) {
        this.setState({handleBuyerAddress: event.target.value});
    }

    handleProductId(event) {
        this.setState({handleProductId: event.target.value});
    }

    handleProductQty(event) {
        this.setState({handleProductQty: event.target.value});
    }

    handleOrderSum(event) {
        this.setState({handleOrderSum: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Buyer Name:
                    <input type="text" value={this.state.buyerName} onChange={this.handleBuyerName} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Orders;