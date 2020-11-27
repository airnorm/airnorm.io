import {GetServerSideProps} from 'next'
import Layout from '../../components/Layout'
import {req} from '../../lib/req'
import fm from 'front-matter'
import Header from '../../components/device/Header'
import Plot from '../../components/device/Plot'

type Props = {
  name: string,
  attributes: Attributes,
  description: string,
  latestPlot: string,
}

type Attributes = {
  headerImage: string,
  url: string,
}

const Device: React.FC<Props> = ({name, attributes, description, latestPlot}) => {

  return (
    <Layout title={`device "${name}"`}>
      <Header deviceName={name} description={description} headerImage={attributes.headerImage} url={attributes.url} />
      <main>
        <Plot plot={latestPlot} />
        <p>
          <a href="https://scrapbox.io/realglobe/Project_AIRNORM">Project AIRNORM について</a>
        </p>
      </main>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {
  let { id } = ctx.query
  let deviceMeta: any
  let photoMeta: any
  try {
    deviceMeta = await req<any>(`https://${process.env.API_HOST}/api/devices/${id}?token=${process.env.API_TOKEN}`)
    photoMeta = await req<any>(`https://${process.env.API_HOST}/api/devices/${id}/photos?sort=-createdAt&token=${process.env.API_TOKEN}`)
  } catch(e) {
    return {notFound: true}
  }
  const content = fm(deviceMeta.description)
  return {props: {name: deviceMeta.name, attributes: content.attributes, description: content.body, latestPlot: photoMeta.entities[0].url}}
}

export default Device
