import { Contact } from '../types/contact';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { ROUTE } from '../route.const';
import { FC } from 'react';
const StyledLink = styled(Link)`
display: flex;
justify-content: space-between;
align-items: center;
color: white;
padding: 3px 10px;
border-bottom: 1px solid white;
background-color: #48494a;
transition: background-color .2s;
&:hover{
  background-color: #48494aba;
}
`
interface Props {
  contact: Contact
}

export const ContactPreview: FC<Props> = ({ contact }) => (
  <StyledLink to={ROUTE.contactDetails.replace(':id', contact._id)}>
    <p>{contact.name}</p>
    <span className="material-icons">
      call
    </span>
  </StyledLink>
)