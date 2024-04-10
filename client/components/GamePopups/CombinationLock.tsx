interface Props {
  setLock: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CombinationLock({ setLock }: Props) {
  return (
    <>
      <h1>Lock</h1>
      <button onClick={() => setLock(false)}>Close</button>
    </>
  )
}
