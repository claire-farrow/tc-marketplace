export default function ItemsCard ({item_id, item_name, description, img_url, price, category_name}) {

    return (
            <li key={item_id}>
                <img src={img_url} alt={item_name}/>
                <h3>{item_name}</h3>
                <p>{description}</p>
                <p>{category_name}</p>
                <p>{price}</p>
            </li>
        )
  
}