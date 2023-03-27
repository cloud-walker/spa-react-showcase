import {Outlet} from 'react-router-dom'

export const Component = () => {
  return (
    <>
      <h1>Issues</h1>
      <Outlet />
    </>
  )
}
Component.displayName = 'IssuesRoute'
