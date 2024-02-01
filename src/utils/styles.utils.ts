export const getClassnames = (classnames: (string | undefined | boolean)[]): string => {
  let classnameFinal = ''
  for (let i=0; i < classnames.length; i++) {
    if (typeof classnames[i] === 'string') {
      if (i === (classnames.length - 1)) classnameFinal += classnames[i]
      else classnameFinal += classnames[i] + ' '
    }
  }
  return classnameFinal
}
