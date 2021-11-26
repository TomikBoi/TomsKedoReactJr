import React from "react";

import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { Redirect } from "react-router-dom";
import HomePage from "./homepage.component";
import Loading from "../components/loading/loading.component";

class HomePageContainer extends React.Component {
  render() {
    const GET_ITEMS = gql`
      query ($category: String!) {
        category(input: { title: $category }) {
          name
          products {
            name
            id
            gallery
            brand
            prices {
              amount
              currency
            }
          }
        }
      }
    `;

    const {categoryId} = this.props.match.params
    if(!categoryId === "tech" || !categoryId === 'clothes') {
      categoryId = null
    }
    return (
      <>
        <Query query={GET_ITEMS} variables={{ category: categoryId }}>
          {({ loading, error, data }) => {
            if (loading) return <Loading text={"Loading products"} />;
            if(!data.category) return (
              <Redirect to={{
              pathname: '/'
            }}/>)
            return <HomePage categoryItems={data.category} />;
          }}
        </Query>
      </>
    );
  }
}

export default HomePageContainer;
