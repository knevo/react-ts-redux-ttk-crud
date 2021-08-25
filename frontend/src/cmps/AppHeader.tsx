import { FC } from 'react';
import { Link } from 'react-router-dom'
import { ROUTE } from '../route.const';
import styled from 'styled-components';
import { useSelector } from '../hooks/useSelector';
import { useDispatch } from '../hooks/useDispatch';
import { setFilterName } from '../store/reducers/filterSlice';

export const StyledNav = styled.nav`
width: 100%;
position:fixed;
display: flex;
justify-content: space-between;
color: white;
padding: 20px;
background: linear-gradient(90deg, rgba(111,177,127,1) 0%, rgba(154,173,89,1) 100%);
`
export const AppHeader: FC = () => {
  const filterBy = useSelector(state => state.filterModule)
  const dispatch = useDispatch()

  return (
    <StyledNav>
      <Link to={ROUTE.home}>
        <h1>My Phone Book</h1>
      </Link>

      <input type="text" value={filterBy.name} onChange={ev => dispatch(setFilterName({ name: ev.target.value }))} />

      <button>
        Add Contact
      </button>
    </StyledNav>
  )
}