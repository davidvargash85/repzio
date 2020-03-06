import data from "./data.json";

const dataService = () => {
  const getProducts = callback => {
    const { items } = data;
    callback(items);
  };

  const getCompanyInfo = callback => {
    const { CompanyName, Message } = data;
    const result = {
      CompanyName,
      Message
    };
    callback(result);
  };

  const getSalesRepInfo = callback => {
    const { SalesRep } = data;
    const {
      FirstName,
      LastName,
      EmailAddress,
      Phone,
      City,
      State,
      PostalCode,
      CellPhone
    } = SalesRep;
    const result = {
      FirstName,
      LastName,
      EmailAddress,
      Phone,
      CellPhone,
      City,
      State,
      PostalCode
    };
    callback(result);
  };

  const getProductsById = async (id, callback) => {
    const { items } = data;
    // eslint-disable-next-line
    const result = items && items.find(p => p.ProductID == id);
    callback(result);
  };

  return {
    getProducts,
    getProductsById,
    getCompanyInfo,
    getSalesRepInfo
  };
};

export default dataService();
