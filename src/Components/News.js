import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=a3c9cf497c854f399a065ccb7b9fac88&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div className="container my-3">
        <h1>New Monk - Top headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            /* console.log(element); */
            return (
              <div className="col-md-4">
                <NewsItem
                  key={element.url}
                  title={element.title ? element.title.slice(0, 45) : " "}
                  description={
                    element.description ? element.description.slice(0, 88) : " "
                  }
                  imgurl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" class="btn btn-dark">
            Previous
          </button>
          <button type="button" class="btn btn-dark">
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
