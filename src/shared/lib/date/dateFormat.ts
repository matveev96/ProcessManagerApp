export const dateFormat = (input: string | undefined) => {
  const formatInput = input ?? 'yyyy-mm-dd'
  //Можно с использованием объекта Date или при помощи метода split
  // const date = new Date(formatInput)
  // const day = String(date.getDate()).padStart(2, '0')
  // const month = String(date.getMonth() + 1).padStart(2, '0')
  // const year = date.getFullYear()
  const [year, month, day] = formatInput.split('-')
  return `${day}.${month}.${year}`
}
