import React, {useContext} from 'react'
import {Responsive} from 'semantic-ui-react'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import AuthContext from '../Context/CartContext'
import CartContext from '../Context/CartContext'

const Shop = ({location}) => {
    const {cartCount} = useContext(ContContext)
    const {token, signOut} = useContext(CartContext)

    return (
        <>
        <Responsive maxWidth={Responsive.onlyMoble.maxWidth}>
            <MobileMenu
            location={location}
            token={token}
            cartCount={cartCount}
            signout={signOut}
            />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <DesktopMenu
            location={location}
            token={token}
            cartCount={cartCount}
            signout={signOut}
            />
        </Responsive>        
        </>
    )
}

export default Shop