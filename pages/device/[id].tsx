import {GetServerSideProps} from 'next'
import Layout from '../../components/Layout'
import {req} from '../../lib/req'

type Props = {
  id: string,
  description: string,
}


const Device: React.FC<Props> = ({id, description}) => {

  return (
    <Layout title={`device "${id}"`}>
      <h1>
        Device: {id}
      </h1>
      <p>
        {description}
      </p>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {
  let { id } = ctx.query
  //if (typeof id !== 'string') {
  //  id = id[0]
  //}
  let result: any
  try {
    result = await req<any>(`https://${process.env.API_HOST}/api/devices/${id}?token=${process.env.API_TOKEN}`)
  } catch(e) {
    console.log(e)
    return {notFound: true}
  }
  return {props: {id: result.id, description: result.description}}
}

export default Device
