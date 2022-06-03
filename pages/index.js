import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout title={process.env.appName}>
      <div className="container">
        Welcome to the nextjs tutorial
      </div>
    </Layout>
  )
}