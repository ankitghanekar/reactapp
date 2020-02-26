import React, { Component } from 'react';
import { connect } from 'react-redux';
// import s from './MainContent.scss';
import { bindActionCreators } from 'redux';
import {fetchProducts} from '../../actions'
import {getProductsError, getProducts,  getProductsPending} from '../../reducers';
class MainContent extends Component {

  componentDidMount(){
    const {fetchProducts} = this.props;
        fetchProducts();
  }
  render() {

    return (
      <div>
        <h1>MainContent</h1>
      </div>
    );
  }
}
const mapStateToProps = state => ({
    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProducts
}, dispatch)


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContent );
