import React, { Component } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import Spinner from "../Components/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  capitalize = (str) => {
    if (typeof str !== "string") {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  getNews = async () => {
    const api_url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=8d2a189619604a43970a5eb1249347f9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(10);
    let Response = await axios.get(api_url);
    document.title = `One Stop News - ${this.capitalize(this.props.category)}`;
    this.props.setProgress(30);
    this.props.setProgress(65);
    this.setState({
      articles: Response.data.articles,
      totalResults: Response.data.totalResults,
      loading: false,
    });
    
    this.props.setProgress(100);
  };
  async componentDidMount() {
    this.getNews();
  }
  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    this.setState({ page: nextPage, loading: true });
    const api_url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=8d2a189619604a43970a5eb1249347f9&page=${nextPage}&pageSize=${this.props.pageSize}`;
    let Response = await axios.get(api_url);
    console.log(Response);
    this.setState({
      articles: this.state.articles.concat(Response.data.articles),
      totalResults: Response.data.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <h2 className="text-center my-4">
          <span className="text-primary fw-bold">OneStopNews</span> - Top {this.capitalize(this.props.category)} Headlines
        </h2>
        {this.state.loading && (
          <div className="d-flex justify-content-center">
            <Spinner />
          </div>
        )}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element, index) => {
                return (
                  <div
                    className="col-md-4 my-3"
                    key={element.url ? element.url : index}
                  >
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : " "}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      author={element.author ? element.author : "Unknown"}
                      date={
                        element.publishedAt ? element.publishedAt : "Unknown"
                      }
                      url={element.url}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
