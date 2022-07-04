exports.getLodges = async (req, res) => {
    const lodges = await Lodge.find().catch(err => {
        res.status(500).json(err);
    })

    res.status(200).json(lodges)
}

exports.getLodge =  async (req, res, next) => {
    const lodge = await Lodge.findById(req.params.id).catch(err => {
        next(err)
    })

    res.status(200).json(lodge)

}

exports.createLodge =  async (req, res) => {
    const newLodge = new Lodge(req.body)
    const savedLodge = await newLodge.save().
    catch(err => {
        res.status(500).json(err)
    })

    res.status(200).json(savedLodge)
}

exports.updateLodge = async (req, res) => {
    const updatedLodge = await Lodge.findByIdAndUpdate(req.params.id, 
        {
        $set: req.body
    },{
        new: true
    }).catch(err => {
        res.status(500).json(err);
    })

    res.status(200).json(updatedLodge)
}

exports.deleteLodge = async (req, res) => {
    await Lodge.findOneAndDelete(req.params.id).catch(
       err => {
           res.status(500).json(err)
       }
    )
    res.status(200).json("Successfully Deleted")
}
