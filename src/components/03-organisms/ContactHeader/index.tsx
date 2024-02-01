import Text from '@/components/01-atoms/Text'
import styles from './style.module.scss'
import RimacLogo from '@/assets/images/rimac-logo.png'
import Icon from '@/components/01-atoms/Icon'

const ContactHeader = () => {
  return (
    <div className={styles.container}>
      <img src={RimacLogo} alt="logo_rimac" className={styles.logo} />
      <div className={styles.contact}>
        <Text tag='p' size='smallest' color='grey-50' weight='semi-bold'>¡Compra por este medio!</Text>
        <div className={styles.phone_content}>
          <Icon icon='phone' size={15} color='grey-50' />
          <Text tag='p' size='small' color='grey-50' weight='bold'>(01) 411 6001</Text>
        </div>
      </div>
    </div>
  )
}

export default ContactHeader