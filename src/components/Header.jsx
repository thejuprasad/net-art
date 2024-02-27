import React from 'react';

const Header = () => {
  const imageUrl = 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/082016/untitled-1_203.jpg?itok=ZKsBl7YG';

  return (
    <header>
      <div>
        {/* Use an absolute path to reference the image in the public folder */
        <img src={imageUrl} alt="Header" />
  }
      </div>
    </header>
  );
};

export default Header;
