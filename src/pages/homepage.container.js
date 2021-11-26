import React from "react";

import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import HomePage from "./homepage.component";
import Loading from "../components/loading/loading.component";
const GET_ITEMS = gql`
query($category: String!){
    category(input: {title: $category}) {
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

class HomePageContainer extends React.Component {
  state ={
    category: "tech"
  }
  render() {
    return (
      <>
        <Query query={GET_ITEMS} variables={{"category": this.state.category}}>
          {({ loading, error, data }) => {
            if (loading) return <Loading text={"Loading products"}/>;
            return <HomePage categoryItems={data.category} />;
          }}
        </Query>
      </>
    );
  }
}

export default HomePageContainer;
