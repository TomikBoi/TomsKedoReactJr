import React from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { Redirect } from "react-router-dom";
import CategoryPage from "./categorypage.component";
import Loading from "../../components/loading/loading.component";

export default class CategoryPageContainer extends React.Component {
  render() {
    const GET_ITEMS = gql`
      query Category($category: String!) {
        category(input: { title: $category }) {
          name
          products {
            name
            id
            gallery
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
            prices {
              amount
              currency
            }
          }
        }
      }
    `;

    const { categoryId } = this.props.match.params;

    return (
      <>
        <Query query={GET_ITEMS} fetchPolicy={"no-cache"} variables={{ category: categoryId }}>
          {({ loading, data }) => {
            if (loading) return <Loading text={"Loading products"} />;
            if (!data.category)
              return (
                <Redirect
                  to={{
                    pathname: "/",
                  }}
                />
              );
            return <CategoryPage categoryItems={data.category} />;
          }}
        </Query>
      </>
    );
  }
}
