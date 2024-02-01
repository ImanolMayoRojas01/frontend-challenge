import Text from '@/components/01-atoms/Text'
import styles from './styles.module.scss'
import { FC } from 'react'
import { getClassnames } from '@/utils/styles.utils';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onClick?(): void;
  classnames?: string
  isDisabled?: boolean
}

const Checkbox: FC<CheckboxProps> = ({ label, checked, isDisabled, onClick }) => {
  return (
    <div className={styles.container}>
      <div
        onClick={() => { ((isDisabled === false || isDisabled === undefined) && onClick) && onClick() }}
        className={getClassnames([styles.checkbox, checked && styles.checkbox__checked])}
      ></div>
      <Text tag='label' size='smallest' weight='regular' color='grey-200'>{label}</Text>
    </div>
  )
}

export default Checkbox