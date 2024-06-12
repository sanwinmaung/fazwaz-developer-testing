const Property = require("../../../../models/Property");
const Image = require("../../../../models/Image");

const resolvers = {
  Query: {
    properties: async () => await Property.findAll(),
    // properties: async () => {
    //   return await Property.findAll({
    //     include: [
    //       {
    //         model: Image,
    //         as: "images",
    //       },
    //     ],
    //   });
    // },
  },
  Property: {
    images: async (property) => {
      return await Image.findAll({
        where: {
          property_id: property.id,
        },
      });
    },
  },
};

module.exports = resolvers;

// const { Property, Image } = require("./models");

// const resolvers = {
//   Query: {
//     properties: async () => await Property.findAll(),
//     properties: async () => {
//       return await Property.findAll({
//         include: [
//           {
//             model: Image,
//             as: "images",
//           },
//         ],
//       });
//     },
//   },
//   Property: {
//     images: async (property) => {
//       return await Image.findAll({
//         where: {
//           propertyId: property.id,
//         },
//       });
//     },
//   },
// };

// module.exports = resolvers;
