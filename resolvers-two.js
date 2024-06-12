const Property = require("./models/Property");
const Image = require("./models/Image");
const User = require("./models/User");

// const resolvers = {
//   Query: {
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
//     property: async (parent, { id }) => {
//       return await Property.findByPk(id, {
//         include: [
//           {
//             model: Image,
//             as: "images",
//           },
//         ],
//       });
//     },
//     users: async () => {
//       const users = await User.findAll();
//       if (!users) {
//         throw new Error("No users found");
//       }
//       return users;
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

const resolvers = {
  Query: {
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
    properties: async () => await Property.findAll(),
    property: async (parent, { id }) => {
      return await Property.findByPk(id, {
        include: [
          {
            model: Image,
            as: "images",
          },
        ],
      });
    },
    users: async () => {
      return await User.findAll();
    },
  },
  Property: {
    images: async (property) => {
      return await Image.findAll({
        where: {
          propertyId: property.id,
        },
      });
    },
  },
};

module.exports = resolvers;
