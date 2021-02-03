import { Link } from 'react-router-dom';

const HomePageList = ({ id, title }) => {
  return (
    <li>
      <Link to={`${this.props.match.url}/${id}`}>{title}</Link>
    </li>
  );
};
export default HomePageList;
