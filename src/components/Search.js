import React, { Component } from "react";
import DataViewer from "./DataViewer";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ["search-query"]: "",
      rawSearchData: []
    };
  }

  /**
   * Filters raw search data in state by searchQuery
   * if both exist
   */
  filterDataResultsByQuery() {
    const searchQuery = this.state["search-query"];

    if (searchQuery === "") return this.state.rawSearchData;

    const validDataElements = this.state.rawSearchData.filter(dataEntry => {
      return dataEntry.data.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return validDataElements;
  }

  /**
   * Load sentences into state
   */
  loadSentences() {
    this.setState({
      rawSearchData: require("../sentences")
    });
  }

  /**
   * Handle async data loading
   */
  componentDidMount() {
    this.loadSentences();
  }

  /**
   * Handle search (and future) fields
   */
  handleComponentInput = e => {
    this.setState({
      [`${e.target.name}`]: `${e.target.value}`
    });
  };

  render() {
    return (
      <form id="search-form">
        <input
          id="search-query-input"
          className="width--is--100pc"
          type="text"
          placeholder="Type your keyword here..."
          name="search-query"
          onChange={this.handleComponentInput}
          value={this.state["search-query"]}
        />
        <DataViewer
          viewerName="sentences"
          data={this.filterDataResultsByQuery()}
        />
      </form>
    );
  }
}

export default Search;
