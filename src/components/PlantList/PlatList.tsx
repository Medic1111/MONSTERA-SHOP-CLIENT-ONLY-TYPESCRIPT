import dummyData from "../../data/data";
import PlantItem from "../PlantItem/PlantItem";
import PlantListWrapper from "../PlantListWrapper/PlantListWrapper";
const PlantList = () => {
  return (
    <PlantListWrapper>
      {dummyData.map((obj, index) => {
        return (
          <PlantItem
            key={`obj_${index}`}
            id={`${index}`}
            name={obj.name}
            price={obj.price}
            description={obj.description}
            src={obj.src}
          />
        );
      })}
    </PlantListWrapper>
  );
};

export default PlantList;
