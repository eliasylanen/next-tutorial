import fetch from 'isomorphic-unfetch';

import Mylayout from '../components/MyLayout';

const Post = ({ show }) => (
  <Mylayout
    render={() => [
      <h1 key="0">{show.name}</h1>,
      <p key="1">{show.summary.replace(/<[/]?p>/g, '')}</p>,
      <img key="2" src={show.image.medium} />,
    ]}
  />
);

Post.getInitialProps = async context => {
  console.log(context.query);
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show };
};

export default Post;
