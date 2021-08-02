import React from 'react'
import {Link} from 'gatsby'
import { Item, Button, Loader, Message, Responsive } from 'semantic-ui-react'

export default ({items, removeFromCart, loading, completed}) => {
    if (loading) return <Loader active inline="centered" />

    if (completed)
        return (
            <Message success>
                <Message.Header>Got ya!</Message.Header>
                <p>Congratulations. Your order and payment has been accepted</p>
            </Message>
        )

    if (items.length === 0)
    return (
        <Message warning>
            <Message.Header>Your cart is empty</Message.Header>
            <p>
                You will need to add some items to the cart before you can check out.
            </p>
        </Message>
    )

    const mapCartItemsToItems = items =>
    items.map(({id, product_id, name, quantity, meta, image}) => {
        const price = meta.display_price.with_tax.unit.formatted || ''
        const imageUrl = image.href || '/static/moltin-light-hex.svg'

        const DesktopItemImage = () => (
            <Item.Image
            src={imageUrl}
            alt={name}
            size="small"
            style={{background: '#f2f2f2'}}            
            />
        )
        const MobileItemImage = () => (
            <Item.Image 
            src={imageUrl}
            alt={name}
            size="small"
            style={{background: 'none'}}
            />
        )

        return {
            childKey: id,
            header: (
                <Item.Header>
                    <Link to={`/product/${product_id}/`}>{name}</Link>
                </Item.Header>
                ),
                image: (
                    <>
                    <Responsive 
                    as={MobileItemImage}
                    minWidth={Responsive.onlyMoble.minWidth}
                    maxWidth={Responsive.onlyMoble.maxWidth}
                    />
                    <Responsive 
                    as={DesktopItemImage}
                    minWidth={Responsive.onlyTablet.minWidth}
                    />                    
                    </>
                ),
                meta: `${quantity}x ${price}`,
                extra: (
                    <Button 
                    basic
                    icon="remove"
                    floated="right"
                    onClick={() => removeFromCart(id)}
                    />
                ),
             }
         })
         return <Item.Group divided items={mapCartItemsToItems(items)} />


}