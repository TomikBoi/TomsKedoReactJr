import React from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import Loading from "../../components/loading/loading.component";
import HomePage from "./homepage.component";

export default class HomePageContainer extends React.Component {
  render() {
    const GET_ITEMS = gql`
    {
      categories {
        name
        products {
          id
          name
          inStock
          gallery
          description
          category
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
          prices {
            amount
            currency
          }
          brand
        }
      }
    }
    `;


    return (
      <>
        <Query query={GET_ITEMS}>
          {({ loading, error, data }) => {
            if (loading) return <Loading text={"Loading products"} />;
            return <HomePage categoryItems={data.categories} />;
          }}
        </Query>
      </>
    );
  }
}
