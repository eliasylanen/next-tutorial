import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const style = {
  fontFamily: 'Arial',
};

export default ({ render }) => (
  <main style={layoutStyle}>
    <Header />
    {render(style)}
  </main>
);
