const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const mongoURL = `mongodb+srv://alanlinsanity:32s9221683g@cluster0.vq2et.mongodb.net/free2list`

mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser : true });


const Listing = require("../models/listing");

router.get("/seed", async (req, res) => {
  const listings = [
    {
      rentalType: "Whole Unit",
      property: "14 Bukit Teresa Close",
      postal: 099786,
      district: 4,
      propertyType: "Private Property",
      price: 8000,
      size: 4000,
      noOfBedrooms: 5,
      noOfBathrooms: 5,
      description:
        "Located near Harbourfront, this beautiful detached home was built in 1995 and comes with a beautiful pool. It is just a short drive away from CTE and AYE. The nearest MRT is Outram and Harbourfront.",
      lister: "Alan",
      contact: 90497018,
      images: [
        "https://images.oyoroomscdn.com/uploads/hotel_image/105649/large/8e80e24a5496eb80.jpg",
        "https://images.oyoroomscdn.com/uploads/hotel_image/105649/large/caef038a4b97b589.jpg",
        "https://images.oyoroomscdn.com/uploads/hotel_image/105649/large/46bffe91d06dcb96.jpg",
      ],
    },
    {
      rentalType: "Whole Unit",
      property: "16 Shunfu Road",
      postal: 575742,
      district: 20,
      propertyType: "Private Property",
      price: 4500,
      size: 904,
      noOfBedrooms: 3,
      noOfBathrooms: 2,
      description:
        "Located near Marymount MRT, this brand new development obtained its TOP in 2022 and comes with a beautiful amazing facilities. It is just 3 minutes walk away from the nearby Shunfu market which allows tenants to have easy access to food and grocery.",
      lister: "Michael",
      contact: 99999999,
      images: [
        "https://images.oyoroomscdn.com/uploads/hotel_image/107625/large/4488071a59d38cc5.jpg",
        "https://images.oyoroomscdn.com/uploads/hotel_image/107625/large/d452b4897a767f6b.jpg",
        "https://images.oyoroomscdn.com/uploads/hotel_image/107625/large/8f690e54761344e0.jpg",
      ],
    },
    {
      rentalType: "Room Rental (En-Suite)",
      property: "249 Pasir Panjang Road",
      postal: 118609,
      district: 05,
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
      postal: 118699,
      district: 05,
      propertyType: "Co-living",
      price: 1400,
      size: 200,
      noOfBedrooms: 1,
      noOfBathrooms: 1,
      description:
        "Located near NUS, this common room is located in beautiful development with a squash court as well as a swimming pool. Rental quoted includes utilities and monthly cleaning services.",
      lister: "Alan",
      contact: 90497018,
      images: [
        "https://www.altalic.com/wp-content/uploads/2019/01/1428_952_ollie_convenience1.jpg",
        "https://www.altalic.com/wp-content/uploads/2019/01/1428_952_ollie_comfort7.jpg",
        "https://www.altalic.com/wp-content/uploads/2019/01/1428_952_ollie_comfort8.jpg",
      ],
    },
    {
      rentalType: "Whole Unit",
      property: "491 Yio Chu Kang Road",
      postal: 787078,
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

router.get("/:id", async (req, res) => {
  try {
    const listing = await Listing.findOne({ id: req.params.id });
    res.send(listing);
  } catch (error) {
    return res.status(400).json({ message: error})
  }
});

module.exports = router;
