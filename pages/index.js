import Link from 'next/link';

import MyLayout from '../components/MyLayout';

const PostLink = ({ title }) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a>{title.toUpperCase()}</a>
    </Link>
  </li>
);

export default () => (
  <MyLayout
    render={style => [
      <h1 style={style} key="0">
        My Blog
      </h1>,
      <ul key="1">
        <PostLink title="Hello Next.js" />
        <PostLink title="Learning Next.js is awesome!" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>,
    ]}
  />
);
