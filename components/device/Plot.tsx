import styles from './Plot.module.css'

type Props = {
  plot: string,
}

const Plot: React.FC<Props> = ({plot}) => {
  return (
    <div>
      <img className={styles.plot} src={plot} />
    </div>
  )
}

export default Plot
