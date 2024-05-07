import styles from './style.module.scss'

import Text from '@/components/01-atoms/Text'

import RimacWhiteLogo from '@/assets/images/rimac-logo-white.png'

const FooterPage = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <img src={RimacWhiteLogo} alt="rimac_white_logo" />
        <hr className={styles.separator}></hr>
        <Text tag="span" size="small" color="grey-150" font="BRS-Regular">
          © 2023 RIMAC Seguros y Reaseguros.
        </Text>
      </div>
    </footer>
  )
}

export default FooterPage
