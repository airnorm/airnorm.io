import {GetServerSideProps} from 'next'
import Layout from '../components/Layout'
import {req} from '../lib/req'
import Link from 'next/link'

type Record = {
  id: string,
  name: string,
}

type Props = {
  records: Record[],
}

const Devices: React.FC<Props> = ({records}) => {
  // FIXME: It was bother to seperate to components, so you MUST rewrite this code.
  return (
    <Layout title="デバイス一覧">
      {records.map(r => <p><Link href={`/device/${r.id}`}>{r.name}</Link></p>)}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async(_) => {
  let res: any
  try {
    res = await req<any>(`https://${process.env.API_HOST}/api/devices?token=${process.env.API_TOKEN}`)
  } catch(e) {
    return {notFound: true}
  }
  const records = res.entities.map((r: any) => {return {id: r.id, name: r.name}})
  return {props: {records}}
}
export default Devices
