import React, { Component } from 'react';
import { connect } from 'react-redux';
// import  from './MainContent.scss';
import { Button, Card } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import {fetchProducts} from '../../actions'
import {getProductsError, getProducts,  getProductsPending} from '../../reducers';
class MainContent extends Component {

  constructor(props){
    super(props)
    console.log("sabka baap  :D")
  }
  componentWillMount(){
      console.log("componentWillMount")
  }
  componentDidMount(){
    const {fetchProducts} = this.props;
        fetchProducts();
      console.log("componentDidMount")
  }
  componentWillUpdate(prevState, nextState){
      console.log("componentWillUpdate", nextState)
  }
  componentDidUpdate(prevState){
      console.log("componentDidUpdate", prevState)
  }
  componentWillReceiveProps(nextProps, nextState){
      console.log("componentWillReceiveProps", nextProps, nextState)
  }
  shouldComponentUpdate(nextState){
    return true
      console.log("shouldComponentUpdate", nextState)
  }
  componentWillUnmount(){
      console.log("componentWillUnmount")
  }
  render() {

const {products} = this.props;
  console.log("-------------------> renderrrr")
    return (
      <div>
    {products && products.length > 0 && products.map(item =>  <Card>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Button variant="primary" onClick={() => alert(item.id)}>Go somewhere</Button>
        </Card.Body>
      </Card>)}
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
