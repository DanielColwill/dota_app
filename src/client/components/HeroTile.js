import React, { Component } from "react";
import CounterCombo from "./counterCombos";

class HeroTile extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      id: this.props.id,
      heroName: this.props.heroName,
      winrate: 0,
      heroes: this.props.heroes,
      open: false,
    };
  }

  /*   componentDidMount() {
    this.getWinrate();
  } */

  getHeroImg(name) {
    var temp = name.toLowerCase();
    var url = "https://api.opendota.com/apps/dota2/images/heroes/";
    var extension = "_full.png";
    switch (temp) {
      case "anti-mage":
        return url + "antimage" + extension;
      case "centaur warrunner":
        return url + "centaur" + extension;
      case "clockwerk":
        return url + "rattletrap" + extension;
      case "doom":
        return url + "doom_bringer" + extension;
      case "io":
        return url + "wisp" + extension;
      case "lifestealer":
        return url + "life_stealer" + extension;
      case "magnus":
        return url + "magnataur" + extension;
      case "nature's prophet":
        return url + "furion" + extension;
      case "necrophos":
        return url + "necrolyte" + extension;
      case "outworld destroyer":
        return url + "obsidian_destroyer" + extension;
      case "queen of pain":
        return url + "queenofpain" + extension;
      case "shadow fiend":
        return url + "nevermore" + extension;
      case "timbersaw":
        return url + "shredder" + extension;
      case "treant protector":
        return url + "treant" + extension;
      case "underlord":
        return url + "abyssal_underlord" + extension;
      case "vengeful spirit":
        return url + "vengefulspirit" + extension;
      case "windranger":
        return url + "windrunner" + extension;
      case "wraith king":
        return url + "skeleton_king" + extension;
      case "zeus":
        return url + "zuus" + extension;
      default:
        temp = temp.replace(/ /g, "_");
        return url + temp + extension;
    }
  }
  toggle() {
    if (this.state.open === true) {
      this.setState({
        open: false,
      });
    } else {
      this.setState({
        open: true,
      });
    }
  }

  render() {
    return (
      <tbody onClick={this.toggle}>
        <tr>
          <td>
            <img
              class="col-md-2"
              src={this.getHeroImg(this.props.heroName)}
              alt=""
            ></img>
            {this.props.heroName}
          </td>
        </tr>
        {this.state.open ? (
          <CounterCombo heroes={this.props.heroes} heroName={this.props.heroName} id={this.props.id} />
        ) : null}
      </tbody>
    );
  }
}

export default HeroTile;
