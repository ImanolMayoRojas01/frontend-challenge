import styles from './styles.module.scss'

import { FC, useEffect, useState } from 'react'
import { Colors, Icons } from '@/core/models/app/app.models'

type IconProps = {
  icon: Icons
  size?: number
  color?: Colors
  title?: string
  classnames?: string
  onClick?():void
}

type IconData = {
  xmlns: string
  widthBase: number
  heightBase: number
  viewBox: string
}

type IconsType = {
  [key: string]: IconData;
};

const ICONS: IconsType = {
  phone: {
    xmlns: 'http://www.w3.org/2000/svg',
    widthBase: 16,
    heightBase: 16,
    viewBox: '0 0 512 512'
  },
  'angle-down': {
    xmlns: 'http://www.w3.org/2000/svg',
    widthBase: 16,
    heightBase: 14,
    viewBox: '0 0 448 512'
  },
  family: {
    xmlns: 'http://www.w3.org/2000/svg',
    widthBase: 24,
    heightBase: 20,
    viewBox: '0 0 24 20'
  },
  check: {
    xmlns: 'http://www.w3.org/2000/svg',
    widthBase: 12,
    heightBase: 10,
    viewBox: '0 0 12 10'
  },
  'check-plain': {
    xmlns: 'http://www.w3.org/2000/svg',
    widthBase: 12,
    heightBase: 9,
    viewBox: '0 0 12 9'
  },
  'arrow-left': {
    xmlns: 'http://www.w3.org/2000/svg',
    widthBase: 5,
    heightBase: 8,
    viewBox: '0 0 5 8'
  }
}

const Icon: FC<IconProps> = ({ icon, size = 20, color = 'blue-50', title, classnames, onClick }) => {
  const [width, setWidth] = useState(size)
  const [height, setHeight] = useState(0)
  const [xmlns, setXmlns] = useState('')
  const [viewBox, setViewBox] = useState('0 0 0 0')

  useEffect(() => {
    const currentIcon = ICONS[icon]
    let aspectRadio = currentIcon.widthBase / currentIcon.heightBase

    if (currentIcon.heightBase > currentIcon.widthBase) {
      aspectRadio = currentIcon.heightBase / currentIcon.widthBase
      setWidth(size/aspectRadio)
      setHeight(size)
    } else {
      setWidth(size)
      setHeight(size/aspectRadio)
    }

    setXmlns(currentIcon.xmlns)
    setViewBox(currentIcon.viewBox)
  }, [size])

  return (
    <svg
      xmlns={xmlns}
      width={width}
      height={height}
      viewBox={viewBox}
      className={classnames}
      onClick={onClick}
    >
      { title && <title>{title}</title> }

      { icon === 'phone' && <path className={styles['color-' + color]} d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/> }
      { icon === 'angle-down' && <path className={styles['color-' + color]} d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/> }
      {
        icon === 'family' && (
          <>
            <path className={styles['color-' + color]} d="M20.1463 11.7647H18.2309C16.1102 11.7647 14.4 13.4756 14.4 15.5972V20H20.1691C22.2898 20 24 18.2891 24 16.1675V15.62C24 13.4756 22.267 11.7647 20.1463 11.7647Z"/>
            <path className={styles['color-' + color]} d="M18.6 10.5882C20.2569 10.5882 21.6 9.27143 21.6 7.64706C21.6 6.02269 20.2569 4.70588 18.6 4.70588C16.9431 4.70588 15.6 6.02269 15.6 7.64706C15.6 9.27143 16.9431 10.5882 18.6 10.5882Z"/>
            <path className={styles['color-' + color]} d="M7.8 8.23529C10.1196 8.23529 12 6.39176 12 4.11765C12 1.84353 10.1196 0 7.8 0C5.4804 0 3.6 1.84353 3.6 4.11765C3.6 6.39176 5.4804 8.23529 7.8 8.23529Z"/>
            <path className={styles['color-' + color]} d="M14.4 11.3483C13.6788 10.8789 12.8134 10.5882 11.8758 10.5882H4.32721C1.94725 10.5882 0 12.399 0 14.6123V16.2442C0 18.3233 1.803 20 4.03873 20H12.1402V15.6853C12.1402 13.9416 13.0297 12.3767 14.4 11.3483Z"/>
          </>
        )
      }
      { icon === 'check' && <path className={styles['color-' + color]} fillRule="evenodd" clipRule="evenodd" d="M11.4814 0.212971C11.8608 0.534041 11.9081 1.10192 11.587 1.48137L4.98705 9.28137C4.82158 9.47692 4.58063 9.59269 4.32456 9.59968C4.06849 9.60667 3.82158 9.50421 3.64569 9.31798L0.245691 5.71798C-0.0956001 5.35661 -0.0793254 4.787 0.282041 4.44571C0.643408 4.10442 1.21302 4.12069 1.55431 4.48206L4.26316 7.35025L10.213 0.318671C10.534 -0.0607749 11.1019 -0.108098 11.4814 0.212971Z"/> }
      { icon === 'check-plain' && <path className={styles['color-' + color]} d="M3.705 8.87L0 5.16L1.41 3.75L3.705 6.04L9.75 0L11.16 1.41L3.705 8.87Z" /> }
      { icon === 'arrow-left' && <path className={styles['color-' + color]} d="M0.553173 3.99995L3.80942 0.746826L4.69067 1.62808L2.32192 3.99995L4.69067 6.37183L3.80942 7.25308L0.553173 3.99995Z"/> }
    </svg>
  )
}

export default Icon