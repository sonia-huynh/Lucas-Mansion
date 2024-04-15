import '../../styles/inventory.css'

interface Props {
  setInventory: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Inventory({ setInventory }: Props) {
  return (
    <>
      
      <button className="inventoryCloseButton" onClick={() => setInventory(false)}>
        x
      </button>
    </>
  )
}
