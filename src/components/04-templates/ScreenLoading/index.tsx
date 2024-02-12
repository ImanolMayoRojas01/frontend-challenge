import styles from './styles.module.scss'

import RimacLogo from '@/assets/images/rimac-logo.png'

const ScreenLoading = () => {
  return (
    <div className={styles.container}>
      <img src={RimacLogo} alt="rimac_logo" />
    </div>
  )
}

export default ScreenLoading
