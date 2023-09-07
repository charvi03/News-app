import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Kevin Hurler",
      title:
        "SEC Reportedly Asked Coinbase to Halt All Trading—Except for Bitcoin",
      description:
        "Coinbase's CEO Brian Armstrong reportedly told the Financial Times that the U.S. Securities & Exchange Commission asked him to halt trading in the exchange with all currencies except bitcoin. According to Armstrong, the suggestion came just before the SEC sue…",

      url: "https://gizmodo.com/sec-asked-coinbase-to-halt-trading-except-for-bitcoin-1850691411",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/76f95899df261776c441932b344183f1.jpg",
      publishedAt: "2023-07-31T14:55:00Z",
      content:
        "Coinbases CEO Brian Armstrong reportedly told the Financial Times that the U.S. Securities &amp; Exchange Commission asked him to halt trading in the exchange with all currencies except bitcoin. Acco… [+1850 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Cheryl Eddy",
      title:
        "Everyone's Favorite Knife-Wielding Robot Returns in Next Week's Futurama",
      description:
        "Futurama’s new season continues its examination of 3023 by way of 2023 with next week’s “How the West Was 1010001,” which sees the gang heading to, ahem, Doge City to cash in on the bitcoin mining craze. Like most places they visit, they encounter absurdities…",
      url: "https://gizmodo.com/futurama-hulu-new-ep-3-clips-bitcoin-crypto-wild-west-1850708869",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/11cf0e30bb3cfd27a7b0f55aa6eddfd3.jpg",
      publishedAt: "2023-08-04T20:45:00Z",
      content:
        "Futuramas new season continues its examination of 3023 by way of 2023 with next weeks How the West Was 1010001, which sees the gang heading to, ahem, Doge City to cash in on the bitcoin mining craze.… [+2351 chars]",
    },
  ];
  constructor() {
    super();

    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=a3c9cf497c854f399a065ccb7b9fac88";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div className="container my3">
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
      </div>
    );
  }
}

export default News;
