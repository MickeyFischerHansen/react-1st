import React from 'react';
import {Link} from '@reach/router'

const NavLink = props => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          style: {
            color: isCurrent ? "yellow" : "black",
            backgroundColor: isCurrent ? "black" : "yellow"
          }
        };
      }}
    />
  );

  export default NavLink