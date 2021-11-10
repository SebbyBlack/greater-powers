import React, { Component } from "react";

import { loreBible } from "./IndexData.js";

export default class ShipsIndex extends Component {
  state = {
    activeTab: `${loreBible[0].page}`
  };

  tabs_content = tab => {
    const dummyContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus lacus, mattis non augue in, vulputate dapibus diam. Nunc vel blandit diam, consectetur vehicula nisi. Donec ex ligula, porta eget magna pellentesque, fringilla varius arcu. Ut aliquet sapien a sapien luctus lacinia. Praesent vel libero sed sapien dictum molestie. Maecenas vestibulum elit vel lectus semper imperdiet. Mauris faucibus finibus odio, ac fermentum metus dictum nec. Suspendisse feugiat, est et dictum eleifend, dolor massa viverra nibh, non hendrerit tellus lacus eu arcu. Suspendisse potenti. Sed vel nisl at diam tempor tempus. Phasellus vitae tellus non ante pellentesque feugiat. Aenean consectetur nisl ut felis ornare, eu maximus massa sodales";

    const h1s = {
      color: "#A68F3D",
      //   marginBottom: "20px",
      fontSize: "3rem"
    };

    const h3s = {
      marginTop: "15px",
      marginBottom: "-2px"
    };

    const textStyle = {
      color: "#808080",
      fontSize: "2rem",
      lineHeight: "2.1rem",
      marginBottom: "10px"
    };

    const textBGcolor = {
      padding: "15px",
      backgroundColor: "rgba(32,31,27, 0.55)"
    };

    switch (tab) {
      case `${loreBible[0].page}`:
        return (
          <div style={textBGcolor}>
            <h1 style={h1s}>{loreBible[0].page}</h1>
            <h3 style={h3s}>{loreBible[0].text.chp1}</h3>
            <p style={textStyle}>{loreBible[0].text.c1v1}</p>
            <h3 style={h3s}>{loreBible[0].text.chp2}</h3>
            <p style={textStyle}>{loreBible[0].text.c2v1}</p>
            <p style={textStyle}>{loreBible[0].text.c2v2}</p>
            <p style={textStyle}>{loreBible[0].text.c2v3}</p>
            <h3 style={h3s}>{loreBible[0].text.chp3}</h3>
            <p style={textStyle}>{loreBible[0].text.c3v1}</p>
            <h3 style={h3s}>{loreBible[0].text.chp4}</h3>
            <p style={textStyle}>{loreBible[0].text.c4v1}</p>
            <p style={textStyle}>{loreBible[0].text.c4v2}</p>
            <p style={textStyle}>{loreBible[0].text.c4v3}</p>
            <p style={textStyle}>{loreBible[0].text.c4v4}</p>
            <p style={textStyle}>{loreBible[0].text.c4v5}</p>
            <h3 style={h3s}>{loreBible[0].text.chp5}</h3>
            <p style={textStyle}>{loreBible[0].text.c5v1}</p>
            <h3 style={h3s}>{loreBible[0].text.chp6}</h3>
            <p style={textStyle}>{loreBible[0].text.c6v1}</p>
            <p style={textStyle}>{loreBible[0].text.c6v2}</p>
            <p style={textStyle}>{loreBible[0].text.c6v3}</p>
          </div>
        );
        break;
      case `${loreBible[1].page}`:
        return (
          <div style={textBGcolor}>
            <h1 style={h1s}>{loreBible[1].page}</h1>
            <h3 style={h3s}>{loreBible[1].text.chp1}</h3>
            <p style={textStyle}>{loreBible[1].text.c1v1}</p>
            <p style={textStyle}>{loreBible[1].text.c1v2}</p>
            <p style={textStyle}>{loreBible[1].text.c1v3}</p>
            <p style={textStyle}>{loreBible[1].text.c1v4}</p>
            <p style={textStyle}>{loreBible[1].text.c1v5}</p>
            <p style={textStyle}>{loreBible[1].text.c1v6}</p>
            <p style={textStyle}>{loreBible[1].text.c1v7}</p>
            <p style={textStyle}>{loreBible[1].text.c1v8}</p>
            <p style={textStyle}>{loreBible[1].text.c1v9}</p>
            <p style={textStyle}>{loreBible[1].text.c1v10}</p>
            <p style={textStyle}>{loreBible[1].text.c1v11}</p>
            <p style={textStyle}>{loreBible[1].text.c1v12}</p>
            <p style={textStyle}>{loreBible[1].text.c1v12}</p>
            <p style={textStyle}>{loreBible[1].text.c1v12}</p>
          </div>
        );
        break;
      case `${loreBible[2].page}`:
        return (
          <div style={textBGcolor}>
            <h1 style={h1s}>{loreBible[2].page}</h1>
            <h3 style={h3s}>{loreBible[2].text.chp1}</h3>
            <p style={textStyle}>{loreBible[2].text.c1v1}</p>
            <p style={textStyle}>{loreBible[2].text.c1v2}</p>
            <p style={textStyle}>{loreBible[2].text.c1v3}</p>
            <p style={textStyle}>{loreBible[2].text.c1v4}</p>
            <p style={textStyle}>{loreBible[2].text.c1v5}</p>
          </div>
        );
        break;
      case `${loreBible[3].page}`:
        return (
          <div style={textBGcolor}>
            <h1 style={h1s}>{loreBible[3].page}</h1>
            <h3 style={h3s}>{loreBible[3].text.chp1}</h3>
            <p style={textStyle}>{loreBible[3].text.c1v1}</p>
            <p style={textStyle}>{loreBible[3].text.c1v2}</p>
            <p style={textStyle}>{loreBible[3].text.c1v3}</p>
            <p style={textStyle}>{loreBible[3].text.c1v4}</p>
            <h3 style={h3s}>{loreBible[3].text.chp2}</h3>
            <p style={textStyle}>{loreBible[3].text.c2v1}</p>
            <p style={textStyle}>{loreBible[3].text.c2v2}</p>
            <p style={textStyle}>{loreBible[3].text.c2v3}</p>
            <p style={textStyle}>{loreBible[3].text.c2v4}</p>
          </div>
        );
        break;
      case `${loreBible[4].page}`:
        return (
          <div style={textBGcolor}>
            <h1 style={h1s}>{loreBible[4].page}</h1>
            <h3 style={h3s}>{loreBible[4].text.chp1}</h3>
            <h3 style={h3s}>{loreBible[4].text.chp1a}</h3>
            <p style={textStyle}>{loreBible[4].text.c1v1}</p>
            <p style={textStyle}>{loreBible[4].text.c1v2}</p>
            <h3 style={h3s}>{loreBible[4].text.chp2}</h3>
            <p style={textStyle}>{loreBible[4].text.c2v1}</p>
            <p style={textStyle}>{loreBible[4].text.c2v2}</p>
            <p style={textStyle}>{loreBible[4].text.c2v3}</p>
            <p style={textStyle}>{loreBible[4].text.c2v4}</p>
            <p style={textStyle}>{loreBible[4].text.c2v5}</p>
            <p style={textStyle}>{loreBible[4].text.c2v6}</p>
            <h3 style={h3s}>{loreBible[4].text.chp3}</h3>
            <p style={textStyle}>{loreBible[4].text.c3v1}</p>
            <p style={textStyle}>{loreBible[4].text.c3v2}</p>
            <h3 style={h3s}>{loreBible[4].text.chp4}</h3>
            <p style={textStyle}>{loreBible[4].text.c4v1}</p>
            <p style={textStyle}>{loreBible[4].text.c4v2}</p>
            <h3 style={h3s}>{loreBible[4].text.chp5}</h3>
            <p style={textStyle}>{loreBible[4].text.c5v1}</p>
            <p style={textStyle}>{loreBible[4].text.c5v2}</p>
            <p style={textStyle}>{loreBible[4].text.c5v3}</p>
            <p style={textStyle}>{loreBible[4].text.c5v4}</p>
            <p style={textStyle}>{loreBible[4].text.c5v5}</p>
            <p style={textStyle}>{loreBible[4].text.c5v6}</p>
            <h3 style={h3s}>{loreBible[4].text.chp6}</h3>
            <p style={textStyle}>{loreBible[4].text.c6v1}</p>
            <p style={textStyle}>{loreBible[4].text.c6v2}</p>
            <p style={textStyle}>{loreBible[4].text.c6v3}</p>
          </div>
        );
        break;
      case `${loreBible[5].page}`:
        return (
          <div style={textBGcolor}>
            <h1 style={h1s}>{loreBible[5].page}</h1>
            <h3 style={h3s}>{loreBible[5].text.chp1}</h3>
            <p style={textStyle}>{loreBible[5].text.c1v1}</p>
            <p style={textStyle}>{loreBible[5].text.c1v2}</p>
            <p style={textStyle}>{loreBible[5].text.c1v3}</p>
            <p style={textStyle}>{loreBible[5].text.c1v4}</p>
          </div>
        );
        break;
      case `${loreBible[6].page}`:
        return (
          <div style={textBGcolor}>
            <h1 style={h1s}>{loreBible[6].page}</h1>
            <h3 style={h3s}>{loreBible[6].text.chp1}</h3>
            <p style={textStyle}>{loreBible[6].text.c1v1}</p>
            <p style={textStyle}>{loreBible[6].text.c1v2}</p>
            <p style={textStyle}>{loreBible[6].text.c1v3}</p>
            <p style={textStyle}>{loreBible[6].text.c1v4}</p>
          </div>
        );
        break;
      case `${loreBible[7].page}`:
        return (
          <div style={textBGcolor}>
            <h1 style={h1s}>{loreBible[7].page}</h1>
            <h3 style={h3s}>{loreBible[7].text.chp1}</h3>
            <p style={textStyle}>{loreBible[7].text.c1v1}</p>
            <p style={textStyle}>{loreBible[7].text.c1v2}</p>
            <p style={textStyle}>{loreBible[7].text.c1v3}</p>
            <p style={textStyle}>{loreBible[7].text.c1v4}</p>
          </div>
        );
        break;
      case `${loreBible[8].page}`:
        return (
          <div style={textBGcolor}>
            <h1 style={h1s}>{loreBible[8].page}</h1>
            <h3 style={h3s}>{loreBible[8].text.chp1}</h3>
            <p style={textStyle}>{loreBible[8].text.c1v1}</p>
            <p style={textStyle}>{loreBible[8].text.c1v2}</p>
            <p style={textStyle}>{loreBible[8].text.c1v3}</p>
            <p style={textStyle}>{loreBible[8].text.c1v4}</p>
            <p style={textStyle}>{loreBible[8].text.c1v5}</p>
          </div>
        );
        break;
      case `${loreBible[9].page}`:
        return (
          <div style={textBGcolor}>
            <h1 style={h1s}>{loreBible[9].page}</h1>
            <h3 style={h3s}>{loreBible[9].text.chp1}</h3>
            <p style={textStyle}>{loreBible[9].text.c1v1}</p>
            <p style={textStyle}>{loreBible[9].text.c1v2}</p>
            <p style={textStyle}>{loreBible[9].text.c1v3}</p>
            <p style={textStyle}>{loreBible[9].text.c1v4}</p>
            <p style={textStyle}>{loreBible[9].text.c1v5}</p>
          </div>
        );
        break;
      case `${loreBible[10].page}`:
        return (
          <div style={textBGcolor}>
            <h1 style={h1s}>{loreBible[10].page}</h1>
            <h3 style={h3s}>{loreBible[10].text.chp1}</h3>
            <p style={textStyle}>{loreBible[10].text.c1v1}</p>
            <p style={textStyle}>{loreBible[10].text.c1v2}</p>
            <p style={textStyle}>{loreBible[10].text.c1v3}</p>
            <p style={textStyle}>{loreBible[10].text.c1v4}</p>
            <p style={textStyle}>{loreBible[10].text.c1v5}</p>
            <p style={textStyle}>{loreBible[10].text.c1v6}</p>
          </div>
        );
        break;
      case `${loreBible[11].page}`:
        return (
          <div style={textBGcolor}>
            <h1 style={h1s}>{loreBible[11].page}</h1>
            <h3 style={h3s}>{loreBible[11].text.chp1}</h3>
            <p style={textStyle}>{loreBible[11].text.c1v1}</p>
            <p style={textStyle}>{loreBible[11].text.c1v2}</p>
            <p style={textStyle}>{loreBible[11].text.c1v3}</p>
            <p style={textStyle}>{loreBible[11].text.c1v4}</p>
            <p style={textStyle}>{loreBible[11].text.c1v5}</p>
            <p style={textStyle}>{loreBible[11].text.c1v6}</p>
          </div>
        );
        break;
      case `${loreBible[12].page}`:
        return (
          <div style={textBGcolor}>
            <h1 style={h1s}>{loreBible[12].page}</h1>
            <h3 style={h3s}>{loreBible[12].text.chp1}</h3>
            <p style={textStyle}>{loreBible[12].text.c1v1}</p>
            <p style={textStyle}>{loreBible[12].text.c1v2}</p>
            <p style={textStyle}>{loreBible[12].text.c1v3}</p>
            <p style={textStyle}>{loreBible[12].text.c1v4}</p>
            <p style={textStyle}>{loreBible[12].text.c1v5}</p>
          </div>
        );
        break;
      case `${loreBible[13].page}`:
        return (
          <div style={textBGcolor}>
            <h1 style={h1s}>{loreBible[13].page}</h1>
            <h3 style={h3s}>{loreBible[13].text.chp1}</h3>
            <p style={textStyle}>{loreBible[13].text.c1v1}</p>
            <p style={textStyle}>{loreBible[13].text.c1v2}</p>
            <p style={textStyle}>{loreBible[13].text.c1v3}</p>
            <p style={textStyle}>{loreBible[13].text.c1v4}</p>
            <p style={textStyle}>{loreBible[13].text.c1v5}</p>
            <p style={textStyle}>{loreBible[13].text.c1v6}</p>
          </div>
        );
        break;
      case `${loreBible[14].page}`:
        return (
          <div style={textBGcolor}>
            <h1 style={h1s}>{loreBible[14].page}</h1>
            <h3 style={h3s}>{loreBible[14].text.chp1}</h3>
            <p style={textStyle}>{loreBible[14].text.c1v1}</p>
            <p style={textStyle}>{loreBible[14].text.c1v2}</p>
            <p style={textStyle}>{loreBible[14].text.c1v3}</p>
            <p style={textStyle}>{loreBible[14].text.c1v4}</p>
            <p style={textStyle}>{loreBible[14].text.c1v5}</p>
            <p style={textStyle}>{loreBible[14].text.c1v6}</p>
          </div>
        );
        break;
      case `${loreBible[15].page}`:
        return (
          <div style={textBGcolor}>
            <h1 style={h1s}>{loreBible[15].page}</h1>
            <h3 style={h3s}>{loreBible[15].text.chp1}</h3>
            <p style={textStyle}>{loreBible[15].text.c1v1}</p>
            <p style={textStyle}>{loreBible[15].text.c1v2}</p>
            <p style={textStyle}>{loreBible[15].text.c1v3}</p>
            <p style={textStyle}>{loreBible[15].text.c1v4}</p>
            <p style={textStyle}>{loreBible[15].text.c1v5}</p>
            <p style={textStyle}>{loreBible[15].text.c1v6}</p>
          </div>
        );
        break;
      case `${loreBible[16].page}`:
        return (
          <div style={textBGcolor}>
            <h1 style={h1s}>{loreBible[16].page}</h1>
            <h3 style={h3s}>{loreBible[16].text.chp1}</h3>
            <p style={textStyle}>{loreBible[16].text.c1v1}</p>
            <p style={textStyle}>{loreBible[16].text.c1v2}</p>
            <p style={textStyle}>{loreBible[16].text.c1v3}</p>
            <p style={textStyle}>{loreBible[16].text.c1v4}</p>
            <p style={textStyle}>{loreBible[16].text.c1v5}</p>
            <p style={textStyle}>{loreBible[16].text.c1v6}</p>
          </div>
        );
        break;
      case `${loreBible[17].page}`:
        return (
          <div style={textBGcolor}>
            <h1 style={h1s}>{loreBible[17].page}</h1>
            <h3 style={h3s}>{loreBible[17].text.chp1}</h3>
            <p style={textStyle}>{loreBible[17].text.c1v1}</p>
            <p style={textStyle}>{loreBible[17].text.c1v2}</p>
            <p style={textStyle}>{loreBible[17].text.c1v3}</p>
            <p style={textStyle}>{loreBible[17].text.c1v4}</p>
            <p style={textStyle}>{loreBible[17].text.c1v5}</p>
            <p style={textStyle}>{loreBible[17].text.c1v6}</p>
          </div>
        );
        break;
      default:
    }
  };

  render() {
    const container = {
      display: "flex",
      flexDirection: "row",
      border: "1px solid red",
      height: "700px",
      color: "white"
    };

    const tabsContainer = {
      display: "flex",
      flexDirection: "column",
      width: "20%",
      height: "700px",
      overflowY: "auto",
      backgroundColor: "#43322A",
      cursor: "pointer"
    };

    const tabStyle = tab => ({
      borderBottom: `2px solid ${
        tab === this.state.activeTab ? "#A68F3D" : "white"
      }`,
      color: `${tab === this.state.activeTab ? "#808080" : "white"}`,
      padding: "15px 20px",
      fontSize: "16px"
    });

    const tabsContentContainer = {
      border: "2px solid blue",
      height: "100%",
      width: "100%",
      overflowY: "auto"
    };

    const tabs = [
      `${loreBible[0].page}`,
      `${loreBible[1].page}`,
      `${loreBible[2].page}`,
      `${loreBible[3].page}`,
      `${loreBible[4].page}`,
      `${loreBible[5].page}`,
      `${loreBible[6].page}`,
      `${loreBible[7].page}`,
      `${loreBible[8].page}`,
      `${loreBible[9].page}`,
      `${loreBible[10].page}`,
      `${loreBible[11].page}`,
      `${loreBible[12].page}`
      //  `${loreBible[13].page}`,
      //  `${loreBible[14].page}`,
      //  `${loreBible[15].page}`,
      //  `${loreBible[16].page}`,
      //  `${loreBible[17].page}`,
    ];

    return (
      <div style={container}>
        <ul style={tabsContainer}>
          {tabs.map(tab => (
            <li
              style={tabStyle(tab)}
              onClick={() => this.setState({ activeTab: tab })}
            >
              {tab}
            </li>
          ))}
        </ul>

        <ul style={tabsContentContainer}>
          {tabs.map(tab => (
            <Tab
              tab={tab}
              content={this.tabs_content(tab)}
              active={tab === this.state.activeTab}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const Tab = props => {
  const tab = {
    display: props.active ? "block" : "none",
    height: "100%",

    border: `2px solid 
            ${
              props.tab === "tab 1"
                ? "red"
                : props.tab === "tab 2"
                ? "green"
                : props.tab === "tab 3"
                ? "yellow"
                : props.tab === "tab 4"
                ? "orange"
                : "black"
            }`
  };

  return <li style={tab}>{props.content}</li>;
};
