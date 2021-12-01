import React from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import CurrencyDropdown from "./currency-dropdown.components";

class CurrencyDropdownContainer extends React.Component {
  render() {
    const GET_CURRENCIES = gql`
    {
      currencies
    }
    `

    return(
      <>
      <Query query={GET_CURRENCIES}>
          {({ loading, error, data }) => {
            if (loading) return null;
            return <CurrencyDropdown currencies={data.currencies} />;
          }}
        </Query>
      </>
    )
  }
}

export default CurrencyDropdownContainer;