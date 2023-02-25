import React, { useContext, createContext, useState, useEffect } from "react";

interface cardDetailsMetaData {
  os_id: String;
  serviceName: String;
  price: number;
}
type CardMetaDeta = {
  cardDetail: cardDetailsMetaData[];
  removeService: (os_id: String) => void;
  addService: (item: cardDetailsMetaData) => void;
  totalAmount: number;
};

const CardContext = createContext<CardMetaDeta | null>(null);
interface props {
  children?: React.ReactNode;
}

const CardProvider = ({ children }: props) => {
  const [cardDetail, setCardDetails] = useState<cardDetailsMetaData[]>([]);
  const [totalAmount, setTotal] = useState<number>(0);

  const updateTotal = () => {
    let amount: number = 0;
    for (let i = 0; i < cardDetail.length; i++) {
      amount = amount + cardDetail[i].price;
    }
    setTotal(amount);
  };

  useEffect(() => {
    updateTotal();
    // return;
  }, [cardDetail]);

  function addService(item: cardDetailsMetaData): void {
    setCardDetails([...cardDetail, item]);
  }
  const removeService = (os_id: String) => {
    const filterData: cardDetailsMetaData[] = [];
    for (let i = 0; i < cardDetail.length; i++) {
      if (cardDetail[i].os_id !== os_id) {
        filterData.push(cardDetail[i]);
      }
    }
    setCardDetails(filterData);
  };
  return (
    <CardContext.Provider
      value={{ totalAmount, addService, cardDetail, removeService }}
    >
      {children}
    </CardContext.Provider>
  );
};

const useCard = () => {
  const context = useContext(CardContext);
  if (!context) throw new Error("Out Of Context");

  return context;
};

export { useCard, CardProvider };
