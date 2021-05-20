import React from 'react';

class BookCard extends React.Component {
constructor(props) {
    super(props);

    this.state = { hidden:false
    };
};

 Hide=()=>{this.setState({hidden:!this.state.hidden})};
    render() {
        return (
            <>
        {!this.state.hidden && <div>

<h1>{this.props.title}</h1>
<h2>{this.props.auth}</h2>
<h3>{this.props.pages}</h3>

        </div>}
       { !this.state.hidden ? <button onClick={this.Hide}> Hide </button>
                            : <button onClick={this.Hide}> See </button>}

        </>
        )
    }
}


export default BookCard;