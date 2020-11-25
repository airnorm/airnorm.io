import Layout from '../components/Layout'


type ServerSideProps = {
  props: Props,
}

const IndexPage: React.FC<Props> = ({devices}) => (
  <Layout>
    <h1>Project AIRNORM</h1>
    <p>
      <a href="https://scrapbox.io/realglobe/Project_AIRNORM">詳細はこちら</a>
    </p>
  </Layout>
)

export default IndexPage
