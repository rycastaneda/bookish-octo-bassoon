import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
  complementary: ReactNode
}

const Layout = ({ children, complementary }: LayoutProps) => {
  return (
    <div className={`grid items-center`}>
      <main>

        <h1>todo…</h1>
        <div className="card">{children}</div>
      </main>

      <aside>{complementary}</aside>
    </div>
  )
}

export default Layout
