import { icons } from '../../utils/data'

export default function Icon({ icon }) {
  return <img src={icons[icon].src} alt={icons[icon].alt} style={{userSelect: 'none'}} />
}
