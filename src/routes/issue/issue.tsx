import {useParams} from 'react-router-dom'

export const Component = () => {
  const {id_issue} = useParams()
  return <div>Issue: {id_issue}</div>
}
Component.displayName = 'IssueRoute'
