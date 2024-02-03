import ContactHeader from '@/components/03-organisms/ContactHeader'
import styles from './styles.module.scss'
import { FC, PropsWithChildren } from 'react'
import { getClassnames } from '@/utils/styles.utils'

type MainLayoutProps = {
  classnames?: string
}

const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({ children, classnames }) => {
  return (
    <div
      className={getClassnames([
        styles.container,
        classnames,
        'grid'
      ])}
    >
      <div className={styles.contact_header}>
        <ContactHeader />
      </div>
      {children}
    </div>
  )
}

export default MainLayout