import React, { Component } from 'react';

const container = {
    display: "flex" ,
    flexDirection: "column" ,
    justifyContent: "center" ,
    alignItems: "center" ,
    color: "white" ,
    
    
    
}

const tableStyles = {
    color: "rgb(176, 134, 67)" ,
    textShadow: "2px 1px black" ,
    fontSize: "20px" ,
    padding: "15px" ,
    border: "1px solid grey" ,
    backgroundColor: "black" ,
    marginBottom: "50px"
}


const header = {
    color: "rgb(176, 134, 67)",
    fontSize: "36px"
}

const payLinks = {
    color: "rgb(176, 134, 67)",
    fontSize: "16px",
    marginBottom: "5px"
}

export default class Purchase extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rewards: [
                {id: "Order", gifts: "Rewards", level: "Cost", options: "Platform", shares: "Shares"} ,
                {id: 1, gifts: "Concept Wallpaper", level: "$1.00", options: "Digital", shares: "0"} ,
                {id: 2, gifts: "Your Name In The Credits", level: "$5.00", options: "In Game, Website", shares: "0"} ,
                {id: 3, gifts: "Reserve Username", level: "$10.00", options: "Account", shares: "0"} ,
                {id: 4, gifts: "Early Beta Access", level: "$15.00", options: "Account", shares: "1"} ,
                {id: 5, gifts: "Soundtracks", level: "$20.00", options: "Digital", shares: "1"} ,
                {id: 6, gifts: "Closed Beta Access", level: "$25.00", options: "Account", shares: "2"} ,

                {id: 7, gifts: "Asset + Artist Signature Print", level: "$30.00", options: "Physical", shares: "2"} ,
                {id: 8, gifts: "Gemini Faction Symbol Print", level: "$35.00", options: "Physical", shares: "2"} ,
                {id: 9, gifts: "Leo Faction Symbol Print", level: "$40.00", options: "Physical", shares: "3"} ,
                {id: 10, gifts: "Aries Faction Symbol Print", level: "$45.00", options: "Physical", shares: "3"} ,
                {id: 11, gifts: "IT Faction Symbol Print", level: "$50.00", options: "Physical", shares: "4"} ,
                {id: 12, gifts: "Signed Concept Art Print", level: "$75.00", options: "Physical", shares: "6"} ,
                {id: 13, gifts: "Select Cards Print", level: "$100.00", options: "Physical", shares: "8"} ,
                {id: 14, gifts: "Astral Realms Map Print", level: "$150.00", options: "Physical", shares: "13"} ,
                {id: 15, gifts: "Select Art + All Dev Signatures", level: "$200.00", options: "Physical", shares: "17"} ,
                {id: 16, gifts: "Astral Sea W/ Skyships Painting", level: "$225.00", options: "Physical", shares: "19"} ,

                {id: 17, gifts: "Gemini Symbol 3D Keychain", level: "$400.00", options: "Physical", shares: "33"} ,
                {id: 18, gifts: "Leo Symbol 3D Keychain", level: "$420.00", options: "Physical", shares: "35"} ,
                {id: 19, gifts: "Aries Symbol 3D Keychain", level: "$450.00", options: "Physical", shares: "38"} ,
                {id: 20, gifts: "IT Symbol 3D Keychain", level: "$470.00", options: "Physical", shares: "39"} ,
                {id: 21, gifts: "GP Seal Ring", level: "$500.00", options: "Physical", shares: "50"} ,
                {id: 22, gifts: "Character 3D Print", level: "$1000.00", options: "Physical", shares: "100"} ,
                {id: 23, gifts: "3D Map", level: "$2500.00", options: "Physical", shares: "250"} ,
                {id: 24, gifts: "Skyship 3d Sculpture", level: "$5000.00", options: "Physical", shares: "500"} ,
                {id: 25, gifts: "GP Book 3D Print", level: "$7500.00", options: "Physical", shares: "750"} ,
                {id: 26, gifts: "Ivory Tower Sculpture", level: "$10,000.00", options: "Physical", shares: "1000"} ,

                {id: 27, gifts: "T-Shirt", level: "$300.00", options: "Physical", shares: "22"} ,

                

            ]
        }
    }

    renderTableData() {
        return this.state.rewards.map((reward, index) => {
            const { id, gifts, level, options, shares} = reward

            return (
                <tr key={ id }>
                    <td style={tableStyles}> { id } </td>
                    <td style={tableStyles}> { gifts } </td>
                    <td style={tableStyles}> { level } </td>
                    <td style={tableStyles}> { options } </td>
                    <td style={tableStyles}> { shares } </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div style={container}>
                
                <h2 style={header}> Links to our funding </h2>
                <p style={payLinks}>  <a style={payLinks} href="#">KickStarter</a>  </p>
                <p style={payLinks}>  <a style={payLinks} href="#">Patreon</a>  </p>
                
                <h3> Rewards List</h3>
                <p style={payLinks}> All rewards take place in each place we have funding, i.e. KickStarter, Patreon, etc.</p>
                
                <table style={tableStyles}>
                    <tbody>
                        { this.renderTableData() }
                    </tbody>
                </table>
            </div>
        )
    }
}
 