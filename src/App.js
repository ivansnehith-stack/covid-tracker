import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";
import React from "react";
import image from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    //fetch data
    const fetchedData = await fetchData(country);

    //set state
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="covid-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
