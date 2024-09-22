import { Button } from '~/components/ui/button/Button'

export const Component = () => {
  return (
    <div className="rounded-lg border p-4">
      <h1 className="text-2xl font-bold">Main</h1>

      <div className="flex items-center gap-2">
        <Button>
          <span>Button</span>
        </Button>

        <Button variant="secondary" isLoading>
          <span>Loading</span>
        </Button>
        <Button variant="secondary">
          <span>Loading</span>
        </Button>
      </div>
    </div>
  )
}
