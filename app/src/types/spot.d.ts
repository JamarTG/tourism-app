import Coordinates from "./coordinates";
import Like from "./like";

export default interface SpotDetails {
  name: string;
  category: string;
  description: string;
  address: string;
  coordinates: Coordinates;
  images: string[];
  features: Feature[];
  shares: number;
  likes: Like[];
}

type Feature = {
  name:string,
  image: string
}
/*
{
name : 'Dolphin Cove'
images : ['https://cdn1.dtraveller.net/content/homecoveja/awards.jpg']
category : "adventure",
description : "Dolphin Cove Jamaica is a marine attraction in Jamaica at which guests can swim and interact with dolphins, sharks, and stingrays in their natural environment. Visitors may also interact with other species including iguanas, snakes and a variety of birds as well as other marine creatures in the Jungle Trail Walk"
address : "Ocho Rios"
coordinates : { latitude: 18.54992, longitude: 77.00678 }
features : ["All Inclusive", "Cheap Prices"]
shares : []
likes : []
}
*/
