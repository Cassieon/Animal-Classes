import React from 'react';
import './MemCard.css';
class MemoryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isFlipped: false};
       }

    clickHandler() {
        this.setState(
            {isFlipped: true}
        )
        console.log('click')
    }
    
    render() {
        const memoryCardInnerClass = this.state.isFlipped ? "flippedMemoryCardInner" : "memoryCardInnerCard";
        
        return (
            <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"/>
                    </div>
                    <div className="MemoryCardFront">
                        ∆
                    </div>
                </div>
            </div>
            );
        }
}  
    
    export default MemoryCard;