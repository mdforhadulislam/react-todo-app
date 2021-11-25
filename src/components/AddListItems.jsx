export default function SingleList(props) {
    return (
        <>
            {props.items.map((item,index) => (
                <li key={item.id}>
                    {item.value}
                    <span>
                        <button className="delete__btn" onClick={props.delete.bind(this,index,props.items)}>Delete</button>
                    </span>
                </li>
            ))}
        </>
    );
}
