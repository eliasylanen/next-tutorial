import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import MyLayout from '../components/MyLayout';

const PostLink = ({ show }) => (
  <li>
    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
      <a>{show.name}</a>
    </Link>
  </li>
);

const Index = ({ shows }) => (
  <MyLayout
    render={fontStyle => [
      <h1 key="0">Batman TV Shows</h1>,
      <ul key="1">
        {shows.map(show => <PostLink key={show.id} show={show} />)}
      </ul>,
      <style key="2" jsx>{`
        h1,
        a {
          font-family: ${fontStyle.fontFamily};
        }
        ul {
          padding: 0;
        }
        li {
          list-style: none;
          margin: 5px 0;
        }
        a {
          text-decoration: none;
          color: blue;
        }
        a:hover {
          opacity: 0.6;
        }
      `}</style>,
    ]}
  />
);

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  let shows = await res.json();
  shows = shows.map(({ show: { id, name } }) => ({ id, name }));

  return { shows };
};

export default Index;
