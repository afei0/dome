import React from 'react'
import  './index.css'
class App extends React.Component{
  state={
    goods:[
      {
        id:1,
        name:'耐克',
        num:1,
        price:2000,
        checked:true
      },{

          id:2,
          name:'mac',
          num:1,
          price:10000,
          checked:true
        },{
            id:3,
            name:'iphone xxx',
            num:1,
            price:20000,
            checked:true
        }
    ]
  }
  handleNumber = (num,ind) => {
    let total=0
    let {goods} =this.state
    if(!(goods[ind].num===0&&num===-1)){
      goods[ind].num=goods[ind].num+num

    }
    console.log(1)
    this.setState({
      goods:goods
    })
  }
  handleBuy = (ind) => {
    let {goods} =this.state
      goods[ind].checked=!goods[ind].checked
    this.setState({
      goods:goods
    })
  }

    render(){
      let total=0
let goods =this.state.goods.map((item,index)=>{
  let subTotal=item.price*item.num
  let checked=item.checked
  if(checked)total=total+subTotal

  total=total+subTotal
  return(
    <tr key={item.id}>
      <td><button onClick={()=>{this.handleBuy(index)}}>{item.checked?"买":"不买"}</button></td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td><button onClick={()=>{this.handleNumber(-1,index)}}>-</button>{item.num}<button onClick={()=>{this.handleNumber(1,index)}}>+</button></td>
      <td>{subTotal}</td>
    </tr>
  )
})
      return (
      <div>
        <table>
          <thead>
            <tr>
              <td></td>
              <td>商品名称</td>
              <td>单价</td>
              <td>数量</td>
              <td>小计</td>
            </tr>
          </thead>
          <tbody>
            {goods}
            <tr>
              <td>总价：{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
    }
}
export default App
