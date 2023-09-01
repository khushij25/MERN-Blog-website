import React from "react";

export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://idronline.org/wp-content/uploads/2023/08/pipes.jpg"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Prioritising repair in India’s cities</h2>
        <p className="info">
          <a className="author">Dawid Okadw</a>
          <time>2023-01-06 16:48</time>
        </p>
        <p className="summary">
          The lack of state-led urban repair and maintenance cycles is hampering
          the delivery of services such as water and electricity, especially in
          low-income areas. Here's what needs to change.
        </p>
      </div>
    </div>
  );
}
