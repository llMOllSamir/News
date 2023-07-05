import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const apiContext = createContext(0);
export default function ApiContextProvider({ children }) {
  let [apikeyIndex, setApiIndex] = useState(0);
  let [country, setCountry] = useState("Egypt");
  let baseUrl = "https://newsapi.org/v2/top-headlines";
  let apiKey = [
    "fc0cb05da6b94ab5b8fa9d017a1b17da",
    "eac202ad7fff49ee95d88fc23cbb926e",
    "e29d1a13e5a248028c5244c235842f94",
  ];
  let countriesArray = [
    "Argentina",
    "Brazil",
    "Canada",
    "Egypt",
    "France",
    "Morocco",
    "Norway",
    "Saudi_Arabia",
    "United_Kingdom",
    "United_States",
  ];
  let countries = {
    Argentina: "ar",
    Brazil: "br",
    Canada: "ca",
    Egypt: "eg",
    France: "fr",
    Morocco: "ma",
    Norway: "no",
    Saudi_Arabia: "sa",
    United_Kingdom: "gb",
    United_States: "us",
  };

  let getNews = async ({ category = "sports", page = 1 } = {}) => {
    return await axios
      .get(
        `${baseUrl}?country=${countries[country]}&category=${category}&page=${page}&apiKey=${apiKey[apikeyIndex]}`
      )
      .then((res) => res)
      .catch((err) => {
        if (apikeyIndex >= apiKey.length - 1) {
          setApiIndex(0);
        } else {
          setApiIndex(apikeyIndex++);
        }
      });
  };

  useEffect(() => {
    localStorage.getItem("flag") && setCountry(localStorage.getItem("flag"));
  }, []);

  return (
    <>
      <apiContext.Provider
        value={{ getNews, countriesArray, setCountry, country, countries }}
      >
        {children}
      </apiContext.Provider>
    </>
  );
}
