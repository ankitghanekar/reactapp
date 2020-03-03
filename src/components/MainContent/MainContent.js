import React, { Component } from 'react';
import { connect } from 'react-redux';
// import  from './MainContent.scss';
import { Card, Col, Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import {fetchProducts} from '../../actions'
import {getProductsError, getProducts,  getProductsPending} from '../../reducers';
import Button from '@material-ui/core/Button';

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
      <Row>
      <Col lg={8}>
      <Button variant="contained" color="primary">
            Hello World
        </Button>
      </Col>
      <Col lg={4}>
      {products && products.length > 0 && products.map(item =>  <Card>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>

          </Card.Body>
        </Card>)}
      </Col>


      </Row>
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
)(MainContent);
