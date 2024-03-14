import './list.scss'
import Card from"../card/Card"

function List({properties}){
  return (
    <div className='list'>
      {properties.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default List