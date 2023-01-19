import { SEO } from "@/components/common";
import { MainLayout } from "@/components/layout";

function Home({ time }) {
  return (
    <>
      <SEO data={{
        title: 'TTS Shop',
        description: 'Shop bán máy tính siêu rẻ phù hợp với anh em chờ thủ',
        url: 'https://full-stack-project-s7xg.vercel.app/',
        thumbnailURL: 'https://m.media-amazon.com/images/I/713dOnHdPHL.jpg'
      }} />
      <h1>{time}</h1>

    </>
  )
}

export function getStaticProps() {
  console.log('re-running  getStatic Props');
  return {
    props: {
      time: new Date().toISOString()
    },
    revalidate: 5
  }
}

Home.Layout = MainLayout

export default Home
