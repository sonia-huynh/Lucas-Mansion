import '../../styles/inventory.css'

interface Props {
  setInventory: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Inventory({ setInventory }: Props) {
  return (
    <>
      <img
        className="inventoryimg"
        src="/clock-inside-closeup.png"
        alt="inventory"
      />
      <button className="inventoryCloseButton" onClick={() => setInventory(false)}>
        x
      </button>
    </>
  )
}
