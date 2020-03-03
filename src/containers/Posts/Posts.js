import React, { Component } from 'react';
import { connect } from 'react-redux';
// import  from './MainContent.scss';
import Cards from '../../components/Card'
import { Col, Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import {fetchProducts, fetPostsByID} from '../../actions/index'
import {getProductsError, getProducts,  getProductsPending} from '../../reducers';
// import s from './Posts.scss';

class Posts extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
const {fetchProducts} = this.props;
fetchProducts();
// const {fetPostsByID } = this.props
// fetPostsByID('1')
  }
  fuc(val, e){
    // e.preventDefault()
    // alert(val.id)
    const { fetPostsByID } = this.props
    fetPostsByID(val.id)
  }
  //
  render() {
    const {products, singlepost} = this.props;
    return (
      <div>
      <Row>
      <Col lg={8}>
      {singlepost.title || '-'}
      </Col>
      <Col lg={4}>
        <Cards products={products} id={this.fuc.bind(this)} />
      </Col>
      </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state),
    singlepost:state.singlepost
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetPostsByID: id => dispatch(fetPostsByID(id)),
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);
// export default ;
