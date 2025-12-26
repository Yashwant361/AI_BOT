import { Component } from "react";

export class SingleProductCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }

    }
    inc = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    des = () => {
        if (this.state.count > 1) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    render() {

        let { title, price, img, desc } = this.props // destructing




        return (
            <>
                <div style={styles.card}>
                    <img src={img} alt={title} style={styles.img} />
                    <h3>{title}</h3>
                    <p>₹ {price}</p>
                    <p> {desc}</p>

                    <div style={styles.counter}>
                        <button onClick={this.des} style={styles.counterBtn} >➖</button>
                        {this.state.count}
                        <button onClick={this.inc} style={styles.counterBtn}>➕</button>
                    </div>
                    <div>
                        <button style={styles.button}>Add To Card</button>
                        <button style={styles.button}>Buy Now</button>
                    </div>
                </div>
            </>
        )
    }

}
const styles = {
    card: {
        width: "220px",
        border: "1px solid #571717ff",
        borderRadius: "8px",
        padding: "12px",
        textAlign: "center"
    },
    img: {
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "6px",
        marginBottom: "10px"
    },
    button: {
        marginTop: "10px",
        padding: "6px 12px",
        cursor: "pointer",
        padding: '2px',
        marginRight: '8px'
    },
    counter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "12px"
    },
    counterBtn: {
        padding: "4px 8px",
        cursor: "pointer",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#f9f9f9",
        margin: "0 8px"   // adds horizontal space
    }


}
