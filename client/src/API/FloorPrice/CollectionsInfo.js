import axios from 'axios';

const collectionToContractAddress = {
  drill_club: "0x39cd103414106b922eb09c7d45df89608b59e887",
  brozo: "0x220fa5ccc9404802ed6db0935eb4feefc27c937e",
  the_herd: "0x99c1b681305d9aa95465547494d321eecb094bdc",
  polygonmonkeys: "0xe5c93b6692c03d4279d1a3098e4321254b560f47",
};

function getFloorPrice(collectionName) {
  const contractAddress = collectionToContractAddress[collectionName];
  return axios.get(`/api/floorPrices/${contractAddress}`)
    .then((response) => response.data.floorPrice)
    .catch((error) => console.log(error));
}


function getCollectionInfo(collectionNames) {
  const promises = collectionNames.map((collectionName) => getFloorPrice(collectionName));
  return Promise.all(promises).then((floorPrices) => {
    const collectionInfo = {};
    collectionNames.forEach((collectionName, index) => {
      collectionInfo[collectionName] = {
        floorPrice: floorPrices[index]
      };
    });
    return collectionInfo;
  });
}

export default getCollectionInfo;
export { collectionToContractAddress };