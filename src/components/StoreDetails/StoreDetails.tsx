import * as React from 'react';
import styles from './styles.module.scss';
import { NavLink, Switch, Route } from 'react-router-dom';
import StoreStory, { StoreStoryProps } from '../StoreStory';
import StoreMenu, { StoreMenuProps } from '../StoreMenu';

export interface Props {
  className?: string;
  storeStoryProps: StoreStoryProps;
  storeMenuProps: StoreMenuProps;
}

const StoreDetails: React.SFC<Props> = ({ storeStoryProps, storeMenuProps, className }) => {
  return (
    <section className={className}>
      <nav className={styles.navLinkContainer}>
        <NavLink
          className={styles.navLink}
          activeClassName={styles['navLink--active']}
          to={`/story`}
        >
          Story
        </NavLink>
        <NavLink
          className={styles.navLink}
          activeClassName={styles['navLink--active']}
          to={`/menu`}
        >
          Menu
        </NavLink>
      </nav>
      <Switch>
        <Route path={`/story`}>
          <StoreStory {...storeStoryProps} />
        </Route>
        <Route path={`/menu`}>
          <StoreMenu {...storeMenuProps}/>
        </Route>
      </Switch>
    </section>
  );
};

export default StoreDetails;
