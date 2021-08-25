import { FC } from 'react';
import styled from 'styled-components'
import { Contact } from '../types/contact';
import { ContactPreview } from './ContactPreview';
const StyledList = styled.div`
padding-top: 10px;
grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`
interface Props {
  contacts: Contact[]
}
export const ContactList: FC<Props> = ({ contacts }) => {
  if (!contacts || !contacts.length) return <div>No Contacts Found</div>
  return (
    <StyledList>
      {contacts.map(contact => <ContactPreview contact={contact} key={contact._id} />)}
    </StyledList>
  )
}