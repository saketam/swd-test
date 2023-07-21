import { ReactNode } from "react";

type DefaultLayoutProps = { children: ReactNode }

const Layout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <div>
        HEADER

        <br />
        <br />

        {children}
      </div>
    </>
  )
}

export default Layout
