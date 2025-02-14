function Item({ name, isPacked }) {
//  if (isPacked) {
//   return <del> <li className="item">{name}</li></del>;
//  }
//  return <li className="item"> {name} </li>

return isPacked? <del> <li className="item">{name}</li></del> : <li className="item"> {name} </li>
}

export default function PackingList() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item
          isPacked={false}
          name="Laptop"
        />
        <Item
          isPacked={true}
          name="Chargers"
        />
        <Item
          isPacked={true}
          name="Socks"
        />
      </ul>
    </section>
  );
}
