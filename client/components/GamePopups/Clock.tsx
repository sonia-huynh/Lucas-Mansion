interface Props {
  setClock: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Clock({ setClock }: Props) {
  return (
    <>
      <h1>Clock</h1>
      <button onClick={() => setClock(false)}>Close</button>
    </>
  )
}
