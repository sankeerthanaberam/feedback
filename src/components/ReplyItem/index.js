import './index.css'

const ReplyItems = props => {
  const {ReplyDetails, GetResponse} = props
  const {id, name, imageUrl} = ReplyDetails

  const FeedBackResponse = () => {
    GetResponse(id)
  }

  return (
    <li>
      <div>
        <img src={imageUrl} alt="name" onClick={FeedBackResponse} />
        <p>{name}</p>
      </div>
    </li>
  )
}

export default ReplyItems
