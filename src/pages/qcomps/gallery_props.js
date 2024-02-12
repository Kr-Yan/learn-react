function Avatar({person, size=70}){
scientist={{name, imageID}}
   return (
   <section className="profile">
     <img
       className="avatar"
       src={'https://i.imgur.com/' + person.imageId + '.jpg'}
       alt={person.name}
       width={size}
       height={size}
     />
   );
 }

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <Avatar
            person={{ name: 'Maria Skłodowska-Curie', imageId: 'OKS67lh'}}
            size={70} />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
            //discovery
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <Avatar
            person={{ name: 'Maria Skłodowska-Curie', imageId: 'YfeOqp2s', }}
            size={70} />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}
