module.exports = {
    getAll: async function(req, res, next){
        let products = [
            {
              id: 1,
              title: "moto g",
              price: 1000,
            },
            {
              id: 2,
              title: "moto x",
              price: 2000,
            },
            {
              id: 3,
              title: "iPhone",
              price: 3000,
            },
          ]
          res.status(200).json(products)
    }
}