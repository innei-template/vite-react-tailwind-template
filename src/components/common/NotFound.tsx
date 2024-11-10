import { useLocation, useNavigate } from 'react-router-dom'

import { Button } from '../ui/button'

export const NotFound = () => {
  const location = useLocation()

  const navigate = useNavigate()
  return (
    <div className="prose center m-auto size-full flex-col dark:prose-invert">
      <main className="flex grow flex-col items-center justify-center">
        <p className="font-semibold">
          You have come to a desert of knowledge where there is nothing.
        </p>
        <p>
          Current path: <code>{location.pathname}</code>
        </p>

        <p>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </p>
      </main>
    </div>
  )
}
