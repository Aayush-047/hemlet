import React from "react";
import { Helmet } from "react-helmet";

function Test() {
  return (
    <div>
      <Helmet>
        <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="Your Page Description" />
        <meta
          property="og:image"
          content="https://example.com/your-image.jpg"
        />
      </Helmet>
      Test
    </div>
  );
}

export default Test;
