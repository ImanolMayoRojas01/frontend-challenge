import ContactHeader from '@/components/03-organisms/ContactHeader'
import styles from './style.module.scss'
import FooterPage from '@/components/03-organisms/FooterPage'

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <ContactHeader />
      <FooterPage />
    </div>
  )
}

export default LoginPage