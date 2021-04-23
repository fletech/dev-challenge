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
          return res.status(201).json({
               body: req.body,
               filename: `/images/uploads/${req.body.imageName}`
          })

          
     }
}