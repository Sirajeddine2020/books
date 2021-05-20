import React from 'react';
import BookCard from './BookCard'
class Books extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

list= [
{title: 'book1',
author: 'auth1',
NbOfpage: '300',
},
{title: 'book2',
author: 'auth2',
NbOfpage: '250',
},
{title: 'book3',
author: 'auth3',
NbOfpage: '1000',
}

]

    render() {
        return(
        <div>
    {this.list.map((el,i)=>
    <BookCard title={el.title} auth={el.author} pages={el.NbOfpage}/>)}
    </div>
        )
    }
}


export default Books;