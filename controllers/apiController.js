module.exports ={
     imageUploader: function (req, res) {
          return res.render('index')
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
               url: `/images/uploads/${req.body.imageName}`
          })
          
     }
}