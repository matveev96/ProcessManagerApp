export const phoneFormat = (phone: string | undefined) => {
  const formatInput = phone ?? '-----------'
  return formatInput.replace(/(\d)(\d{3})(\d{3})(\d{4})/, '+$1 $2 $3 $4')
}
