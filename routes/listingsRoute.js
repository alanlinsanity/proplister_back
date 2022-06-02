const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const mongoURL = `mongodb+srv://alanlinsanity:32s9221683g@cluster0.vq2et.mongodb.net/free2list`

mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser : true });


const Listing = require("../models/listing");
const User = require("../models/user");

router.get("/seed", async (req, res) => {
  const listings = [
    {
      rentalType: "Whole Unit",
      property: "Jervois Hill",
      postal: "247714",
      district: 10,
      propertyType: "Private Property",
      price: 30000,
      size: 15000,
      noOfBedrooms: 7,
      noOfBathrooms: 5,
      description:
        "Located up the prestigious Jervois Hill, this beautiful GCB was built in 2018 and comes with a beautiful pool. It is just a short drive away from CTE and AYE. The nearest MRT is Redhill and Orchard.",
      lister: "Alan",
      contact: 90497018,
      images: [
        "https://i.guim.co.uk/img/media/b01bbb991bb4e2eeef51ae8260d549eabdeadc18/53_0_2400_1440/master/2400.jpg?width=1200&quality=85&auto=format&fit=max&s=845db51118711c13503f4ec33cc46a26",
        "https://www.asiaone.com/sites/default/files/original_images/Jul2017/hse.jpg",
        "https://images.oyoroomscdn.com/uploads/hotel_image/105649/large/caef038a4b97b589.jpg",
      ],
    },
    {
      rentalType: "Whole Unit",
      property: "16 Shunfu Road",
      postal: "575742",
      district: 20,
      propertyType: "Private Property",
      price: 4500,
      size: 904,
      noOfBedrooms: 3,
      noOfBathrooms: 2,
      description:
        "Located near Marymount MRT, this brand new development obtained its TOP in 2022 and comes with a beautiful amazing facilities. It is just 3 minutes walk away from the nearby Shunfu market which allows tenants to have easy access to food and grocery.",
      lister: "Ben",
      contact: 91234567,
      images: [
        "https://www.jadescape.sg/wp-content/uploads/2018/11/Qingjian-unveils-shunfu-road-project-jadescape-condo-singapore.jpg",
        "https://images.oyoroomscdn.com/uploads/hotel_image/107625/large/d452b4897a767f6b.jpg",
        "https://images.oyoroomscdn.com/uploads/hotel_image/107625/large/8f690e54761344e0.jpg",
      ],
    },
    {
      rentalType: "Room Rental (En-Suite)",
      property: "249 Pasir Panjang Road",
      postal: "118609",
      district: 5,
      propertyType: "Co-living",
      price: 1800,
      size: 250,
      noOfBedrooms: 1,
      noOfBathrooms: 1,
      description:
        "Located near Haw Par Villa MRT, this en-suite comes with a walk-in wardrobe and a king-sized bed. Rental quoted includes utilities and monthly cleaning services.",
      lister: "Alan",
      contact: 90497018,
      images: [
        "https://dkc9trqgco1sw.cloudfront.net/s3fs-public/field/image/Hmlet_Australia%201.jpg",
        "https://craziben.com/wp-content/uploads/2020/01/150-cantonment-fb-image.jpg",
        "https://www.hmlet.com/blog/content/images/2020/11/da270718-p1420349-1_12c0ss00000000000001o.jpg",
      ],
    },
    {
      rentalType: "Room Rental (Common)",
      property: "360 Pasir Panjang Road",
      postal: "118699",
      district: 05,
      propertyType: "Co-living",
      price: 1400,
      size: 200,
      noOfBedrooms: 1,
      noOfBathrooms: 1,
      description:
        "Located near NUS, this common room is located in beautiful development with a squash court as well as a swimming pool. Rental quoted includes utilities and monthly cleaning services.",
      lister: "Ben",
      contact: 91234567,
      images: [
        "https://www.altalic.com/wp-content/uploads/2019/01/1428_952_ollie_convenience1.jpg",
        "https://www.altalic.com/wp-content/uploads/2019/01/1428_952_ollie_comfort7.jpg",
        "https://www.altalic.com/wp-content/uploads/2019/01/1428_952_ollie_comfort8.jpg",
      ],
    },
    {
      rentalType: "Whole Unit",
      property: "491 Yio Chu Kang Road",
      postal: "787078",
      district: 26,
      propertyType: "Private Property",
      price: 5800,
      size: 1959,
      noOfBedrooms: 4,
      noOfBathrooms: 3,
      description:
        "Located near the new Lentor MRT, this 4 bedroom penthouse boasts a spectacular unblocked landed view over the Lentor landed estate. The development comes with 3 tennis courts and multiple huge swimming pools.",
      lister: "Alan",
      contact: 90497018,
      images: [
        "https://nobleidesign.com/sg/wp-content/uploads/2020/02/Urban-Treasures-2-bd-655x367.jpg",
        "https://bestinsingapore.com/wp-content/uploads/2020/07/swimming-pool-ii-the-fullerton-hotel-singapore.jpg",
        "https://i.pinimg.com/736x/b8/7b/f8/b87bf8fce6fc8158cc7862578699d6a4.jpg",
      ],
    },
    {
      rentalType: "Whole Unit",
      property: "241 Bishan Street 22",
      postal: "570241",
      district: 20,
      propertyType: "HDB",
      price: 4500,
      size: 1302,
      noOfBedrooms: 4,
      noOfBathrooms: 2,
      description:
        "Located near Bishan-Ang Mo Kio Park, this 5 room HDB has got an incredible view of the man-made park. Residents have access to the Bishan North Shopping Mall which is just a ten minutes walk away. Nearest MRT is Bishan MRT Station which is a 5 minutes bus ride from this unit.",
      lister: "Chris",
      contact: 98765432,
      images: [
        "https://bestinsingapore.com/wp-content/uploads/2020/07/swimming-pool-ii-the-fullerton-hotel-singapore.jpg",
        "https://nobleidesign.com/sg/wp-content/uploads/2020/02/Urban-Treasures-2-bd-655x367.jpg",
        "https://i.pinimg.com/736x/b8/7b/f8/b87bf8fce6fc8158cc7862578699d6a4.jpg",
      ],
    },
    {
      rentalType: "Room Rental (En-Suite)",
      property: "Reflections At Keppel Bay",
      postal: "098417",
      district: 4,
      propertyType: "Private Property",
      price: 2000,
      size: 250,
      noOfBedrooms: 1,
      noOfBathrooms: 1,
      description:
        "Minutes walk from Telok Blangah MRT Station, this waterfron 2 bedroom boasts a spectacular unblocked sea view over the Southern Waters of Singapore. The development comes with a tennis court and multiple swimming pools. It is an expat favorite choice.",
      lister: "Alan",
      contact: 90497018,
      images: [
        "https://s3-ap-southeast-1.amazonaws.com/static.streetsine/Project%20Photos/2067/L/2000301.jpg",
        "https://s3-ap-southeast-1.amazonaws.com/static.streetsine/Project_Description_Photos/2016-10-17/171016175143-Reflections-At-Keppel-Bay-1000x500.jpg",
        "https://i.pinimg.com/736x/b8/7b/f8/b87bf8fce6fc8158cc7862578699d6a4.jpg",
      ],
    },
    {
      rentalType: "Whole Unit",
      property: "Duo Residences",
      postal: "189350",
      district: 7,
      propertyType: "Private Property",
      price: 6000,
      size: 969,
      noOfBedrooms: 2,
      noOfBathrooms: 2,
      description:
        "Located right above Bugis MRT and interconnected with Andaz Hotel, this 2 bedroom is ideal home for those who loves city-living. Live, work and play all within minutes walk away from this urban sanctuary.",
      lister: "David",
      contact: 81234567,
      images: [
        "https://img.rockwool.com/https%3A%2F%2Fbrandcommunity.rockwool.com%2Fasset%2FcY4s440Gdaq1tyAkhYHT-A?auto=format%2Ccompress&s=0cbfc77e13253c45304fdb4e3ad02d10",
        "https://cdn.tatlerasia.com/asiatatler/i/sg/2018/11/05152437-duo-3-bedroom-living-room-1_cover_1500x1000.jpg",
        "https://d1hy6t2xeg0mdl.cloudfront.net/image/329778/f7d8db17f3/standard",
      ],
    },
    {
      rentalType: "Whole Unit",
      property: "1G Cantonment Road",
      postal: "085301",
      district: 2,
      propertyType: "HDB",
      price: 4500,
      size: 1055,
      noOfBedrooms: 3,
      noOfBathrooms: 2,
      description:
        "This HDB comes with a minimalistic design. The owners have recently renovated it 2 years ago.",
      lister: "David",
      contact: 81234567,
      images: [
        "https://d1hy6t2xeg0mdl.cloudfront.net/image/301383/4f746fd73a/standard",
        "http://s3-ap-southeast-1.amazonaws.com/www.theedgeproperty.com/s3fs-public/editor/sg/BLD_PINNACLE_DUXTON_01_BT.JPG",
        "https://i.pinimg.com/736x/b8/7b/f8/b87bf8fce6fc8158cc7862578699d6a4.jpg",
      ],
    },
    {
      rentalType: "Whole Unit",
      property: "Sentosa Cove",
      postal: "098529",
      district: 4,
      propertyType: "Private Property",
      price: 20000,
      size: 4000,
      noOfBedrooms: 4,
      noOfBathrooms: 4,
      description:
        "Sentosa Cove Bungalow. Comes with an amazing pool and car porch for 3 cars. ",
      lister: "Chris",
      contact: 98765432,
      images: [
        "https://www.99.co/singapore/insider/wp-content/uploads/2020/07/good-class-bungalow-gcb-singapore.jpg",
        "https://nobleidesign.com/sg/wp-content/uploads/2020/02/Urban-Treasures-2-bd-655x367.jpg",
        "https://i.pinimg.com/736x/b8/7b/f8/b87bf8fce6fc8158cc7862578699d6a4.jpg",
      ],
    },
  ];
  await Listing.deleteMany({});
  await Listing.insertMany(listings);
  res.json(listings);
});

router.get("/all", async (req, res) => {
  try {
    const listings = await Listing.find({});
    res.send(listings);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.get("/:contact", async (req, res) => {
  try {
    const listings = await Listing.find({contact:req.params.contact});
    res.send(listings);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const listing = await Listing.findOne({ _id: req.params.id });
    res.send(listing);
  } catch (error) {
    return res.status(400).json({ message: error})
  }
});

//create route
router.post("/create", async (req, res) => {
  console.log("req.body", req.body);
  try {
    const createdListing = await Listing.create(req.body);
    // const listing = await Listing.findOne({ _id: req.body });

    const user = await User.findOne({ contact: req.body.contact });

    user.listings.push(createdListing._id);
    await user.save();
    await createdListing.save();

    res.status(200).send(createdListing);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//*Put route
router.put("/edit", async (req, res) => {
  await Listing.findByIdAndUpdate({ _id: req.body._id }, req.body);
  res.json({ message: "Listing Updated" });
});

//* Delete Route
router.delete("/:id", async (req, res) => {
  console.log(req.params.id)
  await Listing.findByIdAndRemove(req.params.id);
  console.log("deleting", req.params);
  res.json({ message: "Listing Deleted" });
});

//* Search Filter Route
router.post("/search", async (req, res) => {

  let  {searchValue_min,searchValue_max,searchValue_HDBorPrivate,searchValue_Rooms, searchValue_Bathrooms } = req.body;
  if (searchValue_min >= searchValue_max){
    searchValue_max = 9999
  }
  console.log(`searchValue_min:${searchValue_min} searchValue_max:${searchValue_max} searchValue_HDBorPrivate: ${searchValue_HDBorPrivate} searchValue_Rooms${searchValue_Rooms}searchValue_Bathrooms:${searchValue_Bathrooms}`)
  try {
    // const filteredList = await Listing.find({})
    
    if (searchValue_Rooms ==="Any" && searchValue_Bathrooms ==="Any" && searchValue_HDBorPrivate ==="Any" ){
      const filteredList = await Listing.find(
        {$and: 
        [ 
          {price:{$gt:searchValue_min || 0}},
          {price:{$lt:searchValue_max || 9999}},
        ]

      });
      res.status(200).json(filteredList)
      console.log("filtered list>>>",filteredList)
    }else if (searchValue_Rooms ==="More than 4 rooms" && searchValue_Bathrooms ==="Any" && searchValue_HDBorPrivate ==="Any"){
      const filteredList = await Listing.find(
        {$and: 
        [ 
          {price:{$gt:searchValue_min || 0}},
          {price:{$lt:searchValue_max || 9999}},
          {no_of_bedrooms:{ $gte:5 }},
        ]
      });
      res.status(200).json(filteredList)
    }else if (searchValue_Rooms ==="Any" && searchValue_Bathrooms ==="More than 4 rooms" && searchValue_HDBorPrivate ==="Any"){
      const filteredList = await Listing.find(
        {$and: 
        [ 
          {price:{$gt:searchValue_min || 0}},
          {price:{$lt:searchValue_max || 9999}},
          {no_of_bathrooms:{ $gte:5 }},
        ]
      });
      res.status(200).json(filteredList)
    }else if (searchValue_Rooms ==="More than 4 rooms" && searchValue_Bathrooms ==="More than 4 rooms" && searchValue_HDBorPrivate ==="Any"){
      const filteredList = await Listing.find(
        {$and: 
        [ 
          {price:{$gt:searchValue_min || 0}},
          {price:{$lt:searchValue_max || 9999}},
          {no_of_bathrooms:{ $gte:5 }},
          {no_of_bedrooms:{ $gte:5 }}
        ]
      });
      res.status(200).json(filteredList)
    }else if (searchValue_Rooms ==="Any" && searchValue_HDBorPrivate ==="Any"){
      const filteredList = await Listing.find(
        {$and: 
        [ 
          {price:{$gt:searchValue_min || 0}},
          {price:{$lt:searchValue_max || 9999}},
          {no_of_bathrooms:{ $eq:searchValue_Bathrooms }}
        ]
      });
      res.status(200).json(filteredList)
    }else if (searchValue_Bathrooms ==="Any" && searchValue_HDBorPrivate ==="Any"){
      const filteredList = await Listing.find(
        {$and: 
        [ 
          {price:{$gt:searchValue_min || 0}},
          {price:{$lt:searchValue_max || 9999}},
          {no_of_bedrooms:{ $eq:searchValue_Rooms }}
        ]
      });
      res.status(200).json(filteredList)
    }else if (searchValue_Bathrooms ==="More than 4 rooms" && searchValue_HDBorPrivate ==="Any"){
      const filteredList = await Listing.find(
        {$and: 
        [ 
          {price:{$gt:searchValue_min || 0}},
          {price:{$lt:searchValue_max || 9999}},
          {no_of_bedrooms:{ $eq:searchValue_Rooms }},
          {no_of_bathrooms:{ $gte:5 }},
        ]
      });
      res.status(200).json(filteredList)
    }else if (searchValue_Rooms ==="More than 4 rooms" && searchValue_HDBorPrivate ==="Any"){
      const filteredList = await Listing.find(
        {$and: 
        [ 
          {price:{$gt:searchValue_min || 0}},
          {price:{$lt:searchValue_max || 9999}},
          {no_of_bedrooms:{ $gte:5}},
          {no_of_bathrooms:{ $eq:searchValue_Bathrooms }}
        ]
      });
      res.status(200).json(filteredList)
    }else if (searchValue_Rooms ==="Any" && searchValue_Bathrooms ==="Any"){
      const filteredList = await Listing.find(
        {$and: 
        [ 
          {property_type: searchValue_HDBorPrivate},
          {price:{$gt:searchValue_min || 0}},
          {price:{$lt:searchValue_max || 9999}},
        ]
      });
      res.status(200).json(filteredList)
    }else if (searchValue_Rooms === "More than 4 rooms" && searchValue_Bathrooms ==="Any"){
      const filteredList = await Listing.find(
        {$and: 
        [
          {property_type: searchValue_HDBorPrivate},
          {price:{$gt:searchValue_min || 0}},
          {price:{$lt:searchValue_max || 9999}},
          {no_of_bedrooms:{ $gte:5 }},
          
        ]
      });
      res.status(200).json(filteredList)
    }else if (searchValue_Bathrooms ==="More than 4 rooms" && searchValue_Rooms === "Any" ){
      const filteredList = await Listing.find(
        {$and: 
        [
          {property_type: searchValue_HDBorPrivate},
          {price:{$gt:searchValue_min || 0}},
          {price:{$lt:searchValue_max || 9999}},
          {no_of_bathrooms:{ $gte:5 }},
          
        ]
      });
      res.status(200).json(filteredList)
    }else if (searchValue_Rooms === "More than 4 rooms" && searchValue_Bathrooms === "More than 4 rooms"  ){
      const filteredList = await Listing.find(
        {$and: 
        [
          {property_type: searchValue_HDBorPrivate},
          {price:{$gt:searchValue_min || 0}},
          {price:{$lt:searchValue_max || 9999}},
          {no_of_bedrooms:{ $gte:5 }},
          {no_of_bathrooms:{ $gte:5 }},
        ]
      });
      res.status(200).json(filteredList)
    }else if (searchValue_HDBorPrivate ==="Any" ){
      const filteredList = await Listing.find(
        {$and: 
        [
          {price:{$gt:searchValue_min || 0}},
          {price:{$lt:searchValue_max || 9999}},
          {no_of_bathrooms:{ $eq:searchValue_Bathrooms }},
          {no_of_bedrooms:{ $eq:searchValue_Rooms }}
        ]
      });
      res.status(200).json(filteredList)
    }else if (searchValue_Rooms ==="Any" ){
      const filteredList = await Listing.find(
        {$and: 
        [
          {property_type: searchValue_HDBorPrivate},
          {price:{$gt:searchValue_min || 0}},
          {price:{$lt:searchValue_max || 9999}},
          {no_of_bathrooms:{ $eq:searchValue_Bathrooms }},
        ]
      });
      res.status(200).json(filteredList)
    }else if (searchValue_Bathrooms ==="Any" ){
      const filteredList = await Listing.find(
        {$and: 
        [
          {property_type: searchValue_HDBorPrivate},
          {price:{$gt:searchValue_min || 0}},
          {price:{$lt:searchValue_max || 9999}},
          {no_of_bedrooms:{ $eq:searchValue_Rooms }},
        ]
      });
      res.status(200).json(filteredList)
    }else if (searchValue_Rooms === "More than 4 rooms" ){
      const filteredList = await Listing.find(
        {$and: 
        [
          {property_type: searchValue_HDBorPrivate},
          {price:{$gt:searchValue_min || 0}},
          {price:{$lt:searchValue_max || 9999}},
          {no_of_bedrooms:{ $gte:5 }},
          {no_of_bathrooms:{ $eq:searchValue_Bathrooms }},
          
        ]
      });
      res.status(200).json(filteredList)
    }else if (searchValue_Bathrooms === "More than 4 rooms" ){
      const filteredList = await Listing.find(
        {$and: 
        [
          {property_type: searchValue_HDBorPrivate},
          {price:{$gt:searchValue_min || 0}},
          {price:{$lt:searchValue_max || 9999}},
          {no_of_bedrooms:{ $eq:searchValue_Rooms }},
          {no_of_bathrooms:{ $gte:5 }},
        ]
      });
      res.status(200).json(filteredList)
    }else{
      const filteredList = await Listing.find(
        {$and: 
        [
          {property_type: searchValue_HDBorPrivate},
          {price:{$gt:searchValue_min || 0}},
          {price:{$lt:searchValue_max || 9999}},
          {no_of_bedrooms:{ $eq:searchValue_Rooms }},
          {no_of_bathrooms:{ $eq:searchValue_Bathrooms }},
        ]
      });
      res.status(200).json(filteredList)
    }

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


module.exports = router;
