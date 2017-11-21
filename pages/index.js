import Link from 'next/link';

import MyLayout from '../components/MyLayout';

export default () => (
  <MyLayout render={style => <p style={style}>Hello Next.js</p>} />
);
