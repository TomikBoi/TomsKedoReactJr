import React from "react";

import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import HomePage from "./homepage.component";

const GET_ITEMS = gql`
{
    categories {
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

const GET_CATEGORY = gql`
  {
    category(input: { title: "clothes" }) {
      name
    }
  }
`;
// <Query query={GET_CATEGORY}>
// {({ loading, error, data }) => {
//   if (loading) return <p>Loading</p>;
//   return <HomePage category={data.category} />;
// }}
// </Query>

class HomePageContainer extends React.Component {
  render() {
    return (
      <>
        <Query query={GET_ITEMS}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading</p>;
            return <HomePage items={data.categories} />;
          }}
        </Query>
      </>
    );
  }
}

export default HomePageContainer;
