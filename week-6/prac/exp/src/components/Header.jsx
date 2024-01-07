import React, { memo } from 'react'
const Header = memo(function ({title}){
    return (
        <div>
          Hello {title}
        </div>
      )
})

// const Header = ({title}) => {
  
// }

export default Header;
