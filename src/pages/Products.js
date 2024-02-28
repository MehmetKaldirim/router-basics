import {Link } from 'react-router-dom';
export default function ProductsPage(){
    const PRODUCTS = [
        {id:'p1', title:'Product porsuk'},
        {id:'p2', title:'Product tilki'},
        {id:'p3', title:'Product it'},
        {id:'p4', title:'Product at'},
    ]
    return <>
    <h1>The Products Page</h1>
    <ul>
        {PRODUCTS.map(prod=> <li key={prod.id}><Link to={`/products/${prod.id}`}>{prod.title}</Link></li> )}
    </ul>
    </>
}