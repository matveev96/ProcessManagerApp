type Props = {
  width: number | string
  color: string
}

export const Border = (props: Props) => {
  const { width, color } = props
  return (
    <div
      style={{
        width: `${width}`,
        height: 1,
        backgroundColor: `${color}`,
        marginBottom: '20px',
        marginTop: '20px',
      }}
    ></div>
  )
}
