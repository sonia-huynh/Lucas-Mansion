import '../../styles/popup.css'
interface Props {
  setLeaderboard: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Leaderboard({ setLeaderboard }: Props) {
  return (
    <>
      <h1>Leaderboard</h1>
      <button
        className="close"
        onClick={() => setLeaderboard(false)}
        // style={
        //   {
        //     // position: 'absolute',
        //     // paddingTop: '0px',
        //     // borderRadius: '5px',
        //     // marginRight: '6px',
        //     // marginTop: '6px',
        //     // backgroundColor: '#ffffff',
        //     // opacity: '1',
        //     // fontSize: '20px',
        //     // right: '5px',
        //     // top: '5px',
        //   }}
      >
        x
      </button>
    </>
  )
}
