import { useState } from "react";
import createIconSvg from "../../assets/icon/icon_create.svg";
import deleteIconSvg from "../../assets/icon/icon_delete.svg";
import updateIconSvg from "../../assets/icon/icon_update.svg";
import "./index.css";

/**
 * datos mockeados
 */

/**
 * datos mockeados
 */

function Country() {
  const [countries, setCountries] = useState([
    {
      id: 1,
      country: "Spain",
      short: "SP",
    },
    {
      id: 2,
      country: "Turkey",
      short: "TR",
    },
    {
      id: 3,
      country: "England",
      short: "EN",
    },
    {
      id: 4,
      country: "USA",
      short: "US",
    },
    {
      id: 5,
      country: "Italy",
      short: "IT",
    },
    {
      id: 6,
      country: "France",
      short: "FR",
    },
    {
      id: 7,
      country: "Marruecos",
      short: "MC",
    },
  ]);

  function clic(clave) {
    alert("pte de implementar la " + clave);
  }

  const countryAdd = (id, country, short) => {
    setCountries(countries.push({ id: id, country: country, short: short }));
  };

  const CountryDetail = ({ country, short, id }) => {
    return (
      <div className="countryContent" key={Math.random()}>
        <div key={Math.random()}>{country} </div>
        <div key={Math.random()}>{short}</div>
        <div key={Math.random()}>
          <button
            type="button"
            onClick={(e) => {
              clic(id);
            }}
            key={Math.random()}
          >
            <img src={updateIconSvg} alt="update"></img>
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={(e) => {
              clic(id);
            }}
          >
            <img src={deleteIconSvg} alt="delete"></img>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div key={Math.random()}>
      <div className="panel">
        <div id="countryHeader">
          <div>COUNTRY</div>
          <div>SHORT</div>
        </div>
        <div id="countryItems">
          {countries.map(({ country, short, id }) => {
            return <CountryDetail country={country} short={short} id={id} />;
          })}
        </div>
        <div id="countryFooter">
          <button
            id="buttonCreate"
            type="button"
            onClick={(e) => {
              countryAdd(10, "China", "CH");
            }}
          >
            <img src={createIconSvg} alt="Create"></img>
            <span> Create</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Country;