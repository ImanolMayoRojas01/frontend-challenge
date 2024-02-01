import Text from '@/components/01-atoms/Text'
import { getClassnames } from '@/utils/styles.utils'
import { FC, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import Icon from '@/components/01-atoms/Icon'
import useOnClickOutside from 'use-onclickoutside'

export type SelectItemType = {
  value: string
  name: string
}

type SelectFormParams = {
  placeholder: SelectItemType;
  items: SelectItemType[];
  selected?: string;
  onChange(params: SelectItemType): void;
  classnames?: string
  isNotRightBorderRadius?: boolean
}

const Select: FC<SelectFormParams> = ({ items, classnames, onChange, placeholder, selected, isNotRightBorderRadius }) => {
  
  const [isOpen, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [currentElement, setCurrentElement] = useState<SelectItemType>({
    name: "",
    value: "",
  });

  const elementRef = useRef(null);

  useOnClickOutside(elementRef, () => {
    setOpen(false);
  });

  const assignCurrentElement = () => {
    if (items.length >= 1 && items[0].value === null) setCurrentElement(items[0]);
    else setCurrentElement(placeholder);
    if (selected) assignSelectedElement();
  };

  const assignSelectedElement = () => {
    items.map((element) => {
      if (element.value === selected) setCurrentElement(element);
    });
  };

  const updateCurrentItem = (newElement: SelectItemType) => setCurrentElement(newElement);

  const hide = () => setOpen(false);

  useEffect(() => {
    items.map((item) => {
      if (String(item.value) === String(item.value)) {
        updateCurrentItem(item);
      }
    });
  }, [selected]);

  useEffect(() => {
    assignCurrentElement();
  }, [items]);

  useEffect(() => {
    if (count) onChange(currentElement);
    setCount(count + 1);
    setOpen(false);
  }, [currentElement]);

  return (
    <div
      className={getClassnames([
        styles.container,
        classnames
      ])}
      ref={elementRef}
    >
      <div
        className={getClassnames([
          styles.placeholder,
          isNotRightBorderRadius && styles.not_right_border_radius,
        ])}
        onClick={() => setOpen(!isOpen)}
      
      >
        <Text tag='p' color='grey-50' size='regular' weight='regular' classnames="mb-3">{currentElement.name}</Text>
        <Icon
          icon='angle-down'
          size={13}
          color='grey-50'
          classnames={getClassnames([
            isOpen && styles.icon_rotate
          ])}
        />
      </div>
      {
        isOpen && (
          <div className={styles.options}>
            {
              items.map((item, index) => (
                <div
                  key={index}
                  className={styles.option}
                  onClick={() => {
                    updateCurrentItem(item)
                    hide()
                  }}
                >
                  <Text tag='p' color='grey-50' size='small' weight='regular' classnames="mb-3" center>{item.name}</Text>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Select