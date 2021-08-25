import { FC, useEffect } from 'react';
import { ContactList } from '../cmps/ContactList';
import { useDispatch } from '../hooks/useDispatch';
import { useSelector } from '../hooks/useSelector';
import { getContacts } from '../store/actions/contactAction';

export const Home: FC = () => {
  const dispatch = useDispatch()
  const filterBy = useSelector(state => state.filterModule)
  const contacts = useSelector(state => state.contactModule.contacts)

  useEffect(() => {
    dispatch(getContacts(filterBy))
  }, [dispatch, filterBy])

  return (
    <section>
      <ContactList contacts={contacts} />
    </section>
  )
}