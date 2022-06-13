import React, { Component } from "react";

//React class based component --> rce

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl,author,date,source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
        <h5 className="card-title">{title}  <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
    {source}
  </span></h5>
          <img src={!imageUrl?"https://im.indiatimes.in/content/2022/Jun/17pHolmes_071104_eder_vga_62a1f3ebe1834.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author} | {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
