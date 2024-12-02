import { useState } from "react";
import { userData } from "../userData";

export default function useSearch() {
    const [filteredData, setFilteredData] = useState([]);
  
    const handleSearch = (queryObject) => {
      const { firstName, lastName, email, phone, streetAddress, city, state, zip } = queryObject;
  
      if (!firstName && !lastName && !email && !phone && !streetAddress && !city && !state && !zip) {
        alert("Please enter at least one search criterion");
        return;
      }
  
      const results = userData.filter((user) => {
        return (
          (firstName && user.name.toLowerCase().includes(firstName.toLowerCase())) ||
          (lastName && user.lastName.toLowerCase().includes(lastName.toLowerCase())) ||
          (email && user.email.toLowerCase().includes(email.toLowerCase())) ||
          (phone && user.phone.includes(phone)) ||
          (streetAddress && user.address.toLowerCase().includes(streetAddress.toLowerCase())) ||
          (city && user.city.toLowerCase().includes(city.toLowerCase())) ||
          (state && user.state.toLowerCase().includes(state.toLowerCase())) ||
          (zip && user.zip.includes(zip))
        );
      });
  
      setFilteredData(results);
    };
  
    return {
      filteredData,
      handleSearch,
    };
  }
  