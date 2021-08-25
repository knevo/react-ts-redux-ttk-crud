import { FC, useEffect } from 'react';
import { RouteChildrenProps } from 'react-router';
import styled from 'styled-components'
import { useDispatch } from '../hooks/useDispatch';
import { useSelector } from '../hooks/useSelector';
import { ROUTE } from '../route.const';
import { getContacts, removeContact } from '../store/actions/contactAction';

const StyledDetails = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #48494aba;
`
export const ContactDetails: FC<RouteChildrenProps<{ id: string }>> = ({ match, history }) => {
  const contact = useSelector(state => state.contactModule.contacts?.find(contact => contact._id === match.params.id))
  const dispatch = useDispatch()
  useEffect(() => {
    if (!contact) {
      dispatch(getContacts({}))
    }
  }, [contact, dispatch])
  const handleRemoveContact = async () => {
    await dispatch(removeContact(contact._id))
    history.push(ROUTE.home)
  }
  if (!contact) return <div>Loading Contact</div>
  return (
    <StyledDetails>
      <p>{contact.name}</p>
      <p>{contact.address}</p>
      <p>{contact.phone}</p>
      <button onClick={handleRemoveContact}>Delete contact</button>
    </StyledDetails>
  )
}