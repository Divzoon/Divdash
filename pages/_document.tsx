import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body id="root" className="bodybackground dark:bg-black bg-gray-100 ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
