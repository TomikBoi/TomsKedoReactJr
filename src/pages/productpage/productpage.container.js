import React from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import Loading from "../../components/loading/loading.component";
import ProductPage from "./productpage.component";

export default class ProductPageContainer extends React.Component {
  render() {
    const GET_ITEM = gql`
   query Product($id: String!) {
      product(id: $id) {
        id
        name
        inStock
        gallery
        description
        category
        prices {
          currency
          amount
        }
        brand
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
      }
    }
    
    `;

    const { productId } = this.props.match.params;
    return (
      <>
        <Query query={GET_ITEM} fetchPolicy={"no-cache"} variables={{ id: productId }}>
          {({ loading, data }) => {
            if (loading) return <Loading text={"Loading product"} />;
            return <ProductPage product={data.product} />;
          }}
        </Query>
      </>
    );
  }
}
