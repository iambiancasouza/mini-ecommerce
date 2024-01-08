import { useLocation, useNavigate } from 'react-router-dom'

const ThanksPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const items = location.state.cartItems

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className='thankspage'>
      <h2>Obrigado pela compra!</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
      <p>Total:${totalPrice}</p>
      <button onClick={() => navigate('/')}>Voltar ao catálogo</button>
    </div>
  )
}

export default ThanksPage
