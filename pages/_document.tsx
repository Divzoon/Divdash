import Document, { Html, Head, Main, NextScript } from 'next/document';
import  React  from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }

  render() {
  return (
    <Html>
      <Head />
      <body className="bodybackground dark:bg-[#0b0d12]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}}export default MyDocument;
