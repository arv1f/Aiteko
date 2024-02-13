import styled from 'styled-components'
export default function DrawList({ products }) {
    const Square = styled.div.attrs((props) => ({
        size: props.size || '100px',
        x: props.x || '100px',
        y: props.y || '100px',
        color: props.color || 'white',
        bordrad: props.bordrad || '0px'}))`
	background: red;
    position: absolute;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    left: ${(props) => props.x};
    top: ${(props) => props.y};
    background-color: ${(props) => props.color};
    border-radius: ${(props) => props.bordrad};
    `;
    return (
            <ul>
                {products.map(product => {
                    return (
                        <Square size = {product.lenght+"px"} x = {product.indexX+'px'} y = {product.indexY+200+'px'} color= {product.color} bordrad = {product.type=='square'?'0px':'100%'}></Square>
                    )
                })}</ul>)
}