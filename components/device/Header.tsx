import styles from './Header.module.css'

type Props = {
  deviceName: string,
  description: string,
  headerImage: string,
  url: string,
}

const Header: React.FC<Props> = ({deviceName, description, headerImage, url}) => {
  return (
    <header className={styles.device}>
      <img src={headerImage} alt="header image" />
      <div>
        <h1>
          {deviceName}
        </h1>
        <p className={styles.description}>
          {description}
        </p>
        <p className={styles.url}>
          <a href={url}>{url}</a>
        </p>
      </div>
    </header>
  )
}

export default Header
