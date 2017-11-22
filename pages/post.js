import Mylayout from '../components/MyLayout';

export default ({ url: { query: { title } } }) => (
  <Mylayout
    render={() => [
      <h1 key="0">{title}</h1>,
      <p key="1">This is a blog post content</p>,
    ]}
  />
);
