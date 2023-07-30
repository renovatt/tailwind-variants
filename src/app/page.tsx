import Button from "./components/Button";
import { AiFillCustomerService } from 'react-icons/ai'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2 className="font-bold mb-2">tailwind-variants</h2>

      <Button>Default</Button>
      <Button color="primary">Primary color</Button>
      <Button color="secondary">Secondary color</Button>
      <Button color="third">Third color</Button>

      <Button size="sm" color="primary">Text-xs</Button>
      <Button size="md" color="secondary">Text-md</Button>
      <Button size="lg" color="third">Text-lg</Button>

      <Button success color="success" />
      <Button success color="success" size="sm" />

      <Button loading color="loading" />
      <Button loading color="loading" size="sm" />

      <Button icon={AiFillCustomerService} />
      <Button icon={AiFillCustomerService} size="sm" />
      <Button icon={AiFillCustomerService}>Icon</Button>
    </main>
  )
}
