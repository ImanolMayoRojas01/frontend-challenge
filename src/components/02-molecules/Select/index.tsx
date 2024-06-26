import styles from './styles.module.scss'

import useOnClickOutside from 'use-onclickoutside'
import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'

import Text from '@/components/01-atoms/Text'
import Icon from '@/components/01-atoms/Icon'

import { getClassnames } from '@/utils/styles.utils'

export type SelectItemType<Value> = {
  value: Value
  name: string
}

type SelectFormParams = {
  placeholder: SelectItemType<any>
  items: SelectItemType<any>[]
  selected?: string
  onChange: (params: SelectItemType<any>) => void
  classnames?: string
  isNotRightBorderRadius?: boolean
}

const Select: FC<SelectFormParams> = ({
  items,
  classnames,
  onChange,
  placeholder,
  selected,
  isNotRightBorderRadius
}) => {
  const [isOpen, setOpen] = useState(false)
  const [count, setCount] = useState(0)
  const [currentElement, setCurrentElement] = useState<SelectItemType<any>>({
    name: '',
    value: ''
  })

  const elementRef = useRef(null)

  useOnClickOutside(elementRef, () => {
    setOpen(false)
  })

  const assignCurrentElement = (): void => {
    if (items.length >= 1 && items[0].value === null)
      setCurrentElement(items[0])
    else setCurrentElement(placeholder)
    if (selected !== undefined) assignSelectedElement()
  }

  const assignSelectedElement = (): void => {
    items.forEach((element) => {
      if (element.value === selected) setCurrentElement(element)
    })
  }

  const updateCurrentItem = (newElement: SelectItemType<any>): void => {
    setCurrentElement(newElement)
  }

  const hide = (): void => {
    setOpen(false)
  }

  useEffect(() => {
    items.forEach((item) => {
      if (String(item.value) === selected) updateCurrentItem(item)
    })
  }, [selected])

  useEffect(assignCurrentElement, [items])

  useEffect(() => {
    if (count >= 0) onChange(currentElement)
    setCount(count + 1)
    setOpen(false)
  }, [currentElement])

  return (
    <div
      className={getClassnames([styles.container, classnames])}
      ref={elementRef}
    >
      <div
        className={getClassnames([
          styles.placeholder,
          isNotRightBorderRadius !== undefined && styles.not_right_border_radius
        ])}
        onClick={() => {
          setOpen(!isOpen)
        }}
      >
        <Text
          tag="span"
          color="grey-50"
          size="regular"
          font="BRS-Regular"
          classnames="mb-3"
        >
          {currentElement.name}
        </Text>
        <Icon
          icon="angle-down"
          size={13}
          color="grey-50"
          classnames={getClassnames([isOpen && styles.icon_rotate])}
        />
      </div>
      {isOpen && (
        <div className={styles.options}>
          {items.map((item, index) => (
            <div
              key={index}
              className={styles.option}
              onClick={() => {
                updateCurrentItem(item)
                hide()
              }}
            >
              <Text
                tag="span"
                color="grey-50"
                size="small"
                font="BRS-Regular"
                classnames="mb-3"
                center
              >
                {item.name}
              </Text>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
