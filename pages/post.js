/* eslint-disable @next/next/no-img-element */
export default function Post() {
  return (
    <>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2014/07/gadgets140725.jpg?w=1390&crop=1"
            alt=""
          />
        </div>

        <div className="texts">
          <h2>Welcome to the blog</h2>
          <p className="info">
            <a className="author">Olatunji Job</a>
            <time>30-06-2023 14:15</time>
          </p>
          <p className="summary">
            A massive Apple patent surfaced this week, giving us our most
            detailed look yet at the company’s focus for the much-rumored iWatch
          </p>
        </div>
      </div>
    </>
  );
}
