import styles from './styles.module.scss'

import { FC, PropsWithChildren } from 'react'
import ContactHeader from '@/components/03-organisms/ContactHeader'
import { getClassnames } from '@/utils/styles.utils'

type MainLayoutProps = {
  classnames?: string
}

const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({ children, classnames }) => {
  return (
    <main
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
    </main>
  )
}

export default MainLayout