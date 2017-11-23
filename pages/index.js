import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import MyLayout from '../components/MyLayout';

const Index = ({ shows }) => (
  <MyLayout
    render={() => [
      <h1 key="0">Batman TV Shows</h1>,
      <ul key="1">
        {shows.map(show => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>,
    ]}
  />
);

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  let shows = await res.json();
  shows = shows.map(({ show }) => ({ id: show.id, name: show.name }));

  return { shows };
};

export default Index;
