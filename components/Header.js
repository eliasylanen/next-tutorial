import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

export default () => (
  <div>
    <Link prefetch href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link prefetch href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);
