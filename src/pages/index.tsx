import type { NextPage } from 'next'
import { Button } from '~/components/Button'

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <pre>
        <h2>Simple Boilerplate!</h2>
        <ul>
          <li>
            Feel free to add any other folders based on your project setup needs
            (i.e src/store/slices for redux toolkit, src/context, etc) <br />
          </li>
          <li>
            components | containers | layouts are similar to atoms, molecules
            and organisms in atomic design pattern.
          </li>
        </ul>
      </pre>
      <Button label="Click me!" />
    </div>
  )
}

export default Home
