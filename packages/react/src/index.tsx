/* eslint-disable prettier/prettier */
// import { colors } from '@ignite-ui/tokens'
import{styled} from'./styles'
 
const Button = styled('button',{
  fontFamily:'default',
  backgroundColor: '$ignite300',
  borderRadius:'$md',
  padding: '$4',
 })

export function App() {
  return <Button>Hello World</Button>
}
