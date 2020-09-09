import React, {Component} from 'react';
import './App.scss'

interface IState {
  initCardNum: Number,
  cardList: Array<any>
}
export default class AutoFocusInput extends Component <any, IState> {

  readonly state = {
    initCardNum: 3,
    cardList: []
  }
  creatCardList =()=>{
    return Array(5).fill('').map((item, index) => ({
      index
    }))
  }
  add = ()=>{
    let {cardList}= this.state;
    console.log('cardList', cardList)
    this.setState(
        {
          cardList:cardList
        }
    );
  }
  componentDidMount() {
    let cardList = this.creatCardList();
    this.setState(
        {
          cardList:cardList
        }
    );
  }

  render() {
    let { cardList } = this.state;
    return <div className='page'>
      <div onClick={this.add}>
        新增
      </div>
      <div className='card-container'>
        {
          cardList.map((value,index)=>{
            return  <div className='card-item' key={index}>
              <div className='title'>

              </div>
            </div>
          })
        }
      </div>
    </div>
  }
}