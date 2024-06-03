import NextLink from 'next/link'
import LinkEstilizado from './linkEstilizado'

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref={true}>
      <LinkEstilizado {...props}>{children}</LinkEstilizado>
    </NextLink>
  )
}