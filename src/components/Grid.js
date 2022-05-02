import { withThemeCreator } from '@material-ui/styles';
import PropTypes from 'prop-types';
// import styles from './Grid.css'
import styles from './Grid.module.scss';

function Grid({ children, container = false, item = false, backgroundcolor = '#003668' }) {
  // const classNames = ({
  //   [styles.Grid_container]:container,
  //   [styles.Grid_item]:item,
  //   });
  const style = {
    backgroundcolor,
  };
  return (
    <div className={container ? styles.Grid_container : styles.Grid_item} style={style}>
      {children}
    </div>
  );
}

Grid.propTypes = {
  container: PropTypes.bool,
  item: PropTypes.bool,
  backgroundcolor: PropTypes.string,
};

export default Grid;
