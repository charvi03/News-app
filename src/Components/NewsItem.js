import React from "react";

const NewsItem = (props) => {
  let { title, description, imgurl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0,
            padding: 5,
          }}
        >
          <span
            className="badge rounded-pill bg-danger"
            style={{ border: "2px solid black" }}
          >
            {source}
          </span>
        </div>

        <img
          src={
            !imgurl
              ? "https://english.cdn.zeenews.com/sites/default/files/2023/09/05/1275737-astro-aquarius.jpg"
              : imgurl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toUTCString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
