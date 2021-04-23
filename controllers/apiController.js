module.exports ={
     imageUploader: function (req, res) {
         
          res.status(200).json(
               {
                    apiTitle: 'devChallenges',
                    contenido: "ya se verá..."
               }
          )
     },

     imageUploaderSave: function (req, res) {
          return res.status(200).json({
               body: req.body,
               url: `http://localhost:3000/images/uploads/${req.body.imageName}`
          })

          
     }
}