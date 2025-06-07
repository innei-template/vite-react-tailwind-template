import { Toaster as Sonner } from 'sonner'

import { useThemeAtomValue } from '~/hooks/common'

type ToasterProps = React.ComponentProps<typeof Sonner>

export const Toaster = ({ ...props }: ToasterProps) => {
  const theme = useThemeAtomValue()
  return <Sonner theme={theme} className="toaster group" {...props} />
}
