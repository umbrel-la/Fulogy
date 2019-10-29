import {observable, computed, action} from 'mobx';


class Main{
  @observable active = 'first';
  warmImages = [
    "https://77427c00-41d8-4632-9e0d-d926808958f3.selcdn.net/images/landings/Podsvetka_kuhni-3.jpg",
    "https://77427c00-41d8-4632-9e0d-d926808958f3.selcdn.net/images/landings/Podsvetka_kuhni-1.jpg",
    "https://77427c00-41d8-4632-9e0d-d926808958f3.selcdn.net/images/landings/Podsvetka_kuhni-2.jpg"
  ];
  daytimeImages = [
    "https://77427c00-41d8-4632-9e0d-d926808958f3.selcdn.net/images/landings/uglovaya-razdelennaya.jpg",
    "https://77427c00-41d8-4632-9e0d-d926808958f3.selcdn.net/images/landings/pryamaya.jpg",
    "https://77427c00-41d8-4632-9e0d-d926808958f3.selcdn.net/images/landings/uglovaya.jpg"
  ];
  coldImages = [
    "https://77427c00-41d8-4632-9e0d-d926808958f3.selcdn.net/images/landings/portfolio-1.jpg",
    "https://77427c00-41d8-4632-9e0d-d926808958f3.selcdn.net/images/landings/portfolio-4.jpg",
    "https://77427c00-41d8-4632-9e0d-d926808958f3.selcdn.net/images/landings/portfolio-2.jpg"
  ];

  @computed get getActive(){
    if(this.active === 'first')
      return this.warmImages;
    else if(this.active === 'second')
      return this.daytimeImages;
    else
      return this.coldImages;
  }

  @action addActiveClass = (e) => {
       const clicked = e.target.id
       if(this.active === clicked) {
           this.active = '';
       } else {
           this.active = clicked;
      }
   }
}



export default new Main();
